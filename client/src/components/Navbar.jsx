import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Dropdown, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);
  const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
  const favItems = JSON.parse(localStorage.getItem("favourites")) || [];
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: "#main-navbar",
      offset: 80,
    });
    return () => scrollSpy.dispose();
  }, []);

  return (
    <div>
      <Navbar expand="lg" expanded={expanded} className="custom-navbar shadow-sm fixed-top" >
        <Container fluid className="px-4">

          <Navbar.Brand href="/" className="custom-logo">
            Rafco <span>Travels</span>
          </Navbar.Brand>

          <div className={`mobile-user-top ${expanded ? "show" : ""}`}>
            {user ? (
              <FaCircleUser size={26} onClick={() => navigate(user ? "/profile" : "/login")} />
            ) : (
              <FaCircleUser size={26} onClick={() => navigate(user ? "/profile" : "/login")} />
            )}
          </div>

          <Navbar.Toggle aria-controls="main-navbar" onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse id="main-navbar">

            {/* Center Menu */}
            <Nav className="mx-auto gap-3 center-nav">
              <Nav.Link href="#home" className="custom-nav-link" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#why-us" className="custom-nav-link" onClick={() => setExpanded(false)}>Services</Nav.Link>
              <Nav.Link href="#packages" className="custom-nav-link" onClick={() => setExpanded(false)}>Packages</Nav.Link>
              <Nav.Link href="#bookTaxi" className="custom-nav-link" onClick={() => setExpanded(false)}>Book Taxi</Nav.Link>
              <Nav.Link as={Link} to="/contactUs" className="custom-nav-link" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                className="whatsapp-nav-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                💬 WhatsApp
              </a>

              {/* MOBILE ONLY: Saved & Favorites */}
              <div className="mobile-icons">

                <div
                  className="icon-btn"
                  onClick={() => {
                    setExpanded(false);
                    navigate("/saved");
                  }}
                >
                  <FaBookmark size={20} /> <span>Saved</span>
                </div>

                <div
                  className="icon-btn"
                  onClick={() => {
                    setExpanded(false);
                    navigate("/favorites");
                  }}
                >
                  <FaHeart size={20} /> <span>Favorites</span>
                </div>

              </div>

            </Nav>

            {/* DESKTOP ONLY (keep your original icons here) */}
            <Nav className="d-none d-lg-flex align-items-center gap-3">

              <div className="icon-btn" onClick={() => navigate("/saved")}>
                <FaBookmark size={22} />
              </div>

              <div className="icon-btn" onClick={() => navigate("/favorites")}>
                <FaHeart size={22} />
              </div>

              {/* user block unchanged */}
              {user ? (
                <div className="d-flex align-items-center gap-2">
                  <Dropdown align="end">
                    <Dropdown.Toggle as="div" className="user-icon-toggle">
                      <FaCircleUser size={30} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="user-dropdown text-center">
                      <Dropdown.Item onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => setShow(true)}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <span className="user-name">{user.name}</span>
                </div>
              ) : (
                <Dropdown align="end">
                  <Dropdown.Toggle as="div" className="user-icon-toggle">
                    <FaCircleUser size={30} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/login")}>Login</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/register")}>Register</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>




      {/* Logout Modal — UNTOUCHED */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
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