import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllPackages = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://travels-bp73.onrender.com/allPackages")
      .then(res => setPackages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">All Packages</h2>

      <Row>
        {packages.map((pkg) => (
          <Col md={4} sm={6} xs={12} key={pkg._id} className="mb-4">
            
            {/* Reuse your custom card */}
            <div className="custom-card">
              <div className="card-img-wrapper">
                <img src={pkg.image} alt={pkg.name} className="card-img" />

                <div className="card-overlay">
                  <h5>{pkg.name}</h5>
                  <p>📍 {pkg.destination}</p>

                  <div className="card-bottom">
                    <span className="price">₹{pkg.price}</span>

                    <button onClick={() => navigate(`/package/${pkg._id}`)}>
                      View →
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllPackages;