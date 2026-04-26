import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const DistrictDestinations = () => {
    const { name } = useParams(); // district name
    const [destinations, setDestinations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://travels-bp73.onrender.com/destination", {
            params: {
                location: name   // 👈 send district name
            }
        })
            .then(res => setDestinations(res.data.destinations))
            .catch(err => console.log(err));
    }, [name]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 fw-bold">
                Destinations in {name}
            </h2>

            <Row className="g-3">
                {destinations.map((dest) => (
                    <Col xs={12} sm={6} lg={4} key={dest._id}>
                        <Card className="destination-card m-2 h-100">

                            <Card.Img
                                variant="top"
                                src={dest.Image}
                                className="destination-img"
                            />

                            <Card.Body className="d-flex flex-column text-center">
                                <Card.Title className="fw-bold">
                                    {dest.Destination}, {dest.Location}
                                </Card.Title>

                                <Card.Text className="flex-grow-1">
                                    {dest.Description}
                                </Card.Text>

                                <div className="mt-2">
                                    <Button
                                        onClick={() => navigate(`/destination/${dest._id}`)}
                                    >
                                        Read More
                                    </Button>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default DistrictDestinations;