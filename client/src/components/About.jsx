// import React from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";

// const AboutSearch = () => {
//     return (
//         <Container fluid className="about-section">
//             <Container>
//                 <Row className="align-items-center">

//                     {/* LEFT CONTENT */}
//                     <Col md={7}>
//                         <span className="section-subtitle">About NepaYatri</span>
//                         <h2 className="section-title">
//                             We're Truely Dedicated To Make Your Travel Experience As Much As
//                             Simple And Fun As Possible
//                         </h2>

//                         <p className="section-text">
//                             We are a passionate travel team dedicated to helping travelers explore
//                             the incredible beauty of Kerala. From the peaceful backwaters and
//                             misty hill stations to stunning waterfalls and vibrant cultural
//                             experiences, our goal is to make every journey memorable and enjoyable.
//                         </p>

//                         <p className="section-text">
//                             We are a passionate travel team dedicated to helping travelers explore
//                             the incredible beauty of Kerala. From the peaceful backwaters and
//                             misty hill stations to stunning waterfalls and vibrant cultural
//                             experiences, our goal is to make every journey memorable and enjoyable.
//                         </p>
//                     </Col>

//                     {/* RIGHT SEARCH CARD */}
//                     <Col md={5}>
//                         <Card className="search-card shadow">
//                             <Card.Header className="search-header">
//                                 Find A Places
//                             </Card.Header>

//                             <Card.Body>
//                                 <Form className="p-3">
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Your Destination</Form.Label>
//                                         <div className="input-icon">
//                                             <FaMapMarkerAlt />
//                                             <Form.Control placeholder="Where are you going?" />
//                                         </div>
//                                     </Form.Group>

//                                     <Row>
//                                         <Col>
//                                             <Form.Group className="mb-3">
//                                                 <Form.Label>Check In</Form.Label>
//                                                 <div className="input-icon">
//                                                     <FaCalendarAlt />
//                                                     <Form.Control type="date" />
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>

//                                         <Col>
//                                             <Form.Group className="mb-3">
//                                                 <Form.Label>Check Out</Form.Label>
//                                                 <div className="input-icon">
//                                                     <FaCalendarAlt />
//                                                     <Form.Control type="date" />
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>
//                                     </Row>

//                                     <Row>
//                                         <Col>
//                                             <Form.Group className="mb-3">
//                                                 <Form.Label>Adult</Form.Label>
//                                                 <div className="input-icon">
//                                                     <FaUser />
//                                                     <Form.Select>
//                                                         <option>1</option>
//                                                         <option>2</option>
//                                                         <option>3</option>
//                                                     </Form.Select>
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>

//                                         <Col>
//                                             <Form.Group className="mb-3">
//                                                 <Form.Label>Children</Form.Label>
//                                                 <div className="input-icon">
//                                                     <FaUser />
//                                                     <Form.Select>
//                                                         <option>0</option>
//                                                         <option>1</option>
//                                                         <option>2</option>
//                                                     </Form.Select>
//                                                 </div>
//                                             </Form.Group>
//                                         </Col>
//                                     </Row>

//                                     <div className="text-center">
//                                         <Button className="search-btn w-50">
//                                             <span><FaSearch /></span> FIND NOW
//                                         </Button>
//                                     </div>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                 </Row>
//             </Container>
//         </Container>
//     );
// };

// export default AboutSearch;

import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaSearch } from "react-icons/fa";

const AboutSearch = () => {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT CONTENT */}
                    <Col md={7}>
                        <span className="section-subtitle">About Rafco Travels</span>
                        <h2 className="section-title">
                            We're Truly Dedicated To Make Your Travel Experience As Simple
                            And Fun As Possible
                        </h2>

                        <p className="section-text">
                            We are a passionate travel team dedicated to helping travelers explore
                            the incredible beauty of Kerala. From the peaceful backwaters and
                            misty hill stations to stunning waterfalls and vibrant cultural
                            experiences, our goal is to make every journey memorable and enjoyable.
                        </p>

                        <p className="section-text">
                            From the backwaters of Alleppey to the hills of Munnar — Rafco
                            Travels crafts personalised Kerala experiences that fit your
                            budget perfectly.
                        </p>
                    </Col>

                    {/* RIGHT SEARCH CARD */}
                    <Col md={5}>
                        <Card className="search-card">
                            <Card.Header className="search-header">
                                Find A Place
                            </Card.Header>

                            <Card.Body>
                                <Form className="p-3">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Destination</Form.Label>
                                        <div className="input-icon">
                                            <FaMapMarkerAlt />
                                            <Form.Control placeholder="Where are you going?" />
                                        </div>
                                    </Form.Group>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Check In</Form.Label>
                                                <div className="input-icon">
                                                    <FaCalendarAlt />
                                                    <Form.Control type="date" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Check Out</Form.Label>
                                                <div className="input-icon">
                                                    <FaCalendarAlt />
                                                    <Form.Control type="date" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Adult</Form.Label>
                                                <div className="input-icon">
                                                    <FaUser />
                                                    <Form.Select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Children</Form.Label>
                                                <div className="input-icon">
                                                    <FaUser />
                                                    <Form.Select>
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="text-center mt-2">
                                        <Button className="search-btn w-75">
                                            <FaSearch /> FIND NOW
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </Container>
    );
};

export default AboutSearch;