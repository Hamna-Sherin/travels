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
            <h2 className="text-center mb-4">
                Destinations in {name}
            </h2>

            <Row>
                {destinations.map((dest) => (
                    <Col md={4} key={dest._id}>
                        <Card className="m-2" style={{ width: '340px', height: "450px" }}>
                            <Card.Img variant="top" src={dest.Image} style={{ height: "250px" }} />
                            <Card.Body className='text-center'>
                                <Card.Title className='fw-bold'>{dest.Destination},{dest.Location}</Card.Title>
                                <Card.Text>
                                    {dest.Description}
                                </Card.Text>
                                <div className="btn-wrapper text-center">
                                    <Button onClick={() => navigate(`/destination/${dest._id}`)}>
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