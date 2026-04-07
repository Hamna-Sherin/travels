import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";


const Packages = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const [Show, setShow] = useState(false)
  const [deleteId, setdeleteId] = useState()
  const [viewShow, setViewShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const fetchPackages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/allPackages");
      setPackages(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = () => {
    axios.delete('http://localhost:5000/deletePackage/' + deleteId)
      .then(res => {
        setPackages(packages.filter(packages => packages._id !== deleteId))
        handleClose()
      })
      .catch(err => console.log(err))
  }

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setdeleteId(id);
    setShow(true);
  }

  const handleViewShow = (pkg) => {
    setSelectedPackage(pkg);
    setViewShow(true);
  };

  const handleViewClose = () => setViewShow(false);

  return (
    <Container className="mt-4">

      {/* Top Bar */}
      {packages.length > 0 && (
        <Row className="mb-3">
          <Col>
            <h3>Packages</h3>
          </Col>

          <Col className="d-flex justify-content-end">
            <Button onClick={() => navigate("/addPackage")}>
              + Add Package
            </Button>
          </Col>
        </Row>
      )}

      {/* If NO DATA */}
      {packages.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
          <Button size="lg" onClick={() => navigate("/addPackage")}>
            + Add Package
          </Button>
        </div>
      ) : (
        /* TABLE */
        <Table striped bordered hover responsive className="text-center align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Category</th>
              <th>Slots</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {packages.map((pkg, index) => (
              <tr key={pkg._id}>
                <td>{index + 1}</td>
                <td>{pkg.name}</td>
                <td>{pkg.destination}</td>
                <td>₹{pkg.price}</td>
                <td>{pkg.duration}</td>
                <td>{pkg.category}</td>
                <td>{pkg.slots}</td>
                <td>
                  <Link to={`/editPackage/${pkg._id}`} className='btn btn-warning m-2'>Edit</Link>
                  <Button className='btn-danger rounded' onClick={(e) => handleShow(pkg._id)}>Delete</Button>
                  <FaRegEye
                    size={20}
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    onClick={() => handleViewShow(pkg)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={Show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this destination?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={viewShow} onHide={handleViewClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Package Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedPackage && (
            <Row>
              {/* LEFT → IMAGE */}
              <Col md={6}>
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />
              </Col>

              {/* RIGHT → DETAILS */}
              <Col md={6}>
                <h4>{selectedPackage.name}</h4>
                <p><strong>Destination:</strong> {selectedPackage.destination}</p>
                <p><strong>Price:</strong> ₹{selectedPackage.price}</p>
                <p><strong>Duration:</strong> {selectedPackage.duration}</p>
                <p><strong>Category:</strong> {selectedPackage.category}</p>
                <p><strong>Slots:</strong> {selectedPackage.slots}</p>
                <p><strong>Description:</strong> {selectedPackage.description}</p>
              </Col>
            </Row>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    </Container>
  );
};

export default Packages;