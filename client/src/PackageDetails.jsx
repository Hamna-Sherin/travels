import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const PackageDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pkg, setPkg] = useState(null);

    useEffect(() => {
        axios.get(`https://travels-bp73.onrender.com/getPackage/` + id)
            .then(res => setPkg(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!pkg)
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Spinner animation="border" variant="success" />
            </div>
        )

    return (
        <Container className="mt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>
                ← Back
            </Button>

            <Row className="mt-4">

                {/* IMAGE */}
                <Col md={6}>
                    <img
                        src={pkg.image}
                        alt={pkg.name}
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                </Col>

                {/* DETAILS */}
                <Col md={6}>
                    <h2>{pkg.name}</h2>
                    <p><strong>📍 Destination:</strong> {pkg.destination}</p>
                    <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
                    <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
                    <p><strong>📦 Category:</strong> {pkg.category}</p>
                    <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

                    <p>
                        <strong>📅 Dates:</strong><br />
                        {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
                    </p>

                    <p><strong>Description:</strong></p>
                    <p>{pkg.description}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default PackageDetails;