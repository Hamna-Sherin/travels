import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTag, FaAward, FaGlobe, FaUserTie, FaMapMarkerAlt } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";



const ChooseUs = () => {
    return (
        <section className="why-choose-us pt-5 m-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Choose Us</h2>
                    <div className="underline mx-auto my-3"></div>
                    <p className="text-muted w-75 mx-auto">
                        Discover the best of Kerala with hassle-free planning, expert support,
                        and travel packages designed to suit every budget and preference.
                    </p>
                </div>

                {/* Cards */}
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="choose-card text-center h-100">
                            <Card.Body>
                                <FaTag className="icon mb-3" />
                                {/* <IoPricetagsOutline className="icon mb-3" /> */}

                                <Card.Title className="fw-semibold">
                                    {/* Competitive Pricing */}
                                    Affordable Tour Packages
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    {/* With 500+ suppliers and the purchasing power of
                  300 million members */}
                                    {/* Enjoy the best of Kerala with budget-friendly travel packages
                                    designed for families, couples, and adventure seekers. */}
                                    Budget-friendly packages to explore the best destinations in Kerala.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="choose-card text-center h-100">
                            <Card.Body>
                                {/* <FaAward className="icon mb-3" /> */}
                                <FaUserTie className="icon mb-3" />
                                <Card.Title className="fw-semibold">
                                    {/* Award Winning Service */}
                                    Trusted Travel Guides
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    {/* Fabulous Travel worry free knowing that we're here if
                                    you need us, 24 hours a day */}
                                    {/* Our experienced guides help you explore Kerala’s culture,
                                    nature, and hidden gems for a safe and memorable journey. */}
                                    Experienced guides to help you enjoy safe and memorable journeys.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="choose-card text-center h-100">
                            <Card.Body>
                                {/* <FaGlobe className="icon mb-3" /> */}
                                {/* <BsGlobeAmericas className="icon mb-3" /> */}
                                <FaMapMarkerAlt className="icon mb-3" />


                                <Card.Title className="fw-semibold">
                                    {/* Worldwide Coverage */}
                                    Explore Kerala
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    {/* 1,200,000 hotels in more than 200 countries and
                  regions & flights to over 5,000 cities. */}
                                    {/* Discover breathtaking destinations including hill stations,
                                    waterfalls, backwaters, beaches, and wildlife parks. */}
                                    Discover waterfalls, backwaters, beaches, and hill stations.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChooseUs;