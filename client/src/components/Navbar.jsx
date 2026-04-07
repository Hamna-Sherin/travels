import React, { useState } from 'react'
import { Navbar, Nav, Container, Dropdown, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar expand="lg" bg="white" className="shadow-sm py-3 fixed-top">
        <Container fluid className="px-4">

          {/* Logo */}
          <Navbar.Brand href="/" className="fw-bold text-danger fs-4">
            NEPA<span className="text-dark">YATRI</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* Center Menu */}
            <Nav className="mx-auto gap-3 ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/flights">Flights</Nav.Link>
              <Nav.Link href="/hotels">Hotel</Nav.Link>
              <Nav.Link href="/cars">Cars</Nav.Link>
              <Nav.Link href="/cruise">Cruise</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav>

            {/* Right Icons */}
            <Nav className="d-flex align-items-center gap-3">
              {/* <FaSearch size={18} style={{ cursor: "pointer" }} /> */}
              <div style={{ position: "relative", cursor: "pointer" }}>
                <FaShoppingCart size={25} />
                {/* <span className="cart-badge">1</span> */}
              </div>


              {user ? (
                <div className="d-flex align-items-center gap-2">

                  <Dropdown align="end">
                    <Dropdown.Toggle
                      as="div"
                      className="user-icon-toggle"
                    >
                      <FaCircleUser size={30} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="user-dropdown text-center">
                      <Dropdown.Item onClick={() => navigate("/profile")}>
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        // onClick={() => {
                        //   localStorage.removeItem("user");
                        //   navigate("/login")
                        //   window.location.reload();
                        // }}
                        onClick={() => setShow(true)}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span className="user-name">
                    {user.name}
                  </span>

                </div>
              ) : (
                <Dropdown align="end">
                  <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
                    <FaCircleUser size={30} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/login")}>
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/register")}>
                      Register
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to logout?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={() => {
              localStorage.removeItem("user");
              setShow(false);
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NavbarComponent;