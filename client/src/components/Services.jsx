import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUserTie, FaMapMarkerAlt, FaPassport, FaHeadset } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

const Services = () => {
    return (
        <section id="why-us" className="why-choose-us m-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Services</h2>
                    <div className="underline mx-auto my-3"></div>
                    <p className="text-muted w-75 mx-auto">
                        Discover the best of Kerala with hassle-free planning, expert support,
                        and travel packages designed to suit every budget and preference.
                    </p>
                </div>

                {/* Cards */}
                <Row className="g-4">
                    <div className="services-scroll d-flex gap-4">

                        <Col md={4}>
                            <Card className="choose-card text-center h-100">
                                <Card.Body>
                                    <MdFlightTakeoff className="icon mb-3" />
                                    <Card.Title className="fw-semibold">
                                        Flight Booking
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        Domestic & International Flights <br />
                                        Best Price Assistance
                                    </Card.Text>
                                    {/* <Button>Book Flight</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="choose-card text-center h-100">
                                <Card.Body>
                                    <FaPassport className="icon mb-3" />
                                    <Card.Title className="fw-semibold">
                                        Visa Services
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        Fast and Relaible Visa Processing <br />
                                        Document Assistance
                                    </Card.Text>
                                    {/* <Button> Apply Visa</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="choose-card text-center h-100">
                                <Card.Body>
                                    <FaMapMarkerAlt className="icon mb-3" />
                                    <Card.Title className="fw-semibold">
                                        Tour Packages
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        Customized travel experiences <br />
                                        Budget to luxury packages
                                    </Card.Text>
                                    {/* <Button> View Pckages </Button> */}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="choose-card text-center h-100">
                                <Card.Body>
                                    <FaHeadset className="icon mb-3" />
                                    <Card.Title className="fw-semibold">
                                        Travel Assistance
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        24/7 support <br />
                                        End-to-end trip planning
                                    </Card.Text>
                                    {/* <Button> Contact Us </Button> */}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="choose-card text-center h-100">
                                <Card.Body>
                                    <FaUserTie className="icon mb-3" />
                                    <Card.Title className="fw-semibold">
                                        Trusted Travel Guides
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        Experienced guides to help you enjoy safe and memorable journeys.
                                    </Card.Text>
                                    {/* <Button> Book Guide </Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Services;