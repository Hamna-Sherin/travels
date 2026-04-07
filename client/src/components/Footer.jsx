import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";


const Footer = () => {
    return (
        <footer className="main-footer">
            <Container>
                <Row>

                    {/* LEFT SECTION */}
                    <Col lg={4} className="mb-4">

                        <div className="help-box">
                            <h4>Need Nepayatri Help?</h4>
                            <div className="underline my-3"></div>
                            <div className="phone">
                                <LiaPhoneVolumeSolid size={50} style={{ color: "#ff4a57" }} />
                                <p>Got Questions? Call us 24/7! <br /> Call Us: (888) 1234 56789</p>
                            </div>
                        </div>

                        <div className="contact-info">
                            <h5>Contact Info</h5>
                            <div className="underline my-3"></div>
                            <p>PO Box: +47-252-254-2542</p>
                            <p>Location: Collins St, Victoria 80, Australia</p>

                            <div className="social-icons">
                                <span><FaFacebookF /></span>
                                <span><FaTwitter /></span>
                                <span><FaInstagram /></span>
                                <span><FaLinkedinIn /></span>
                            </div>
                        </div>

                    </Col>

                    {/* COMPANY */}
                    <Col lg={2} md={4} className="mb-4 footer-links">
                        <h5>Company</h5>
                        <div className="underline mb-4"></div>
                        <ul>
                            <li className="mb-3">About Us</li>
                            <li className="mb-3">Careers</li>
                            <li className="mb-3">Terms of Use</li>
                            <li className="mb-3">Privacy Statement</li>
                            <li className="mb-3">Feedbacks</li>
                        </ul>
                    </Col>

                    {/* SUPPORT */}
                    <Col lg={2} md={4} className="mb-4 footer-links">
                        <h5>Support</h5>
                        <div className="underline mb-4"></div>
                        <ul>
                            <li className="mb-3">Account</li>
                            <li className="mb-3">Legal</li>
                            <li className="mb-3">Contact</li>
                            <li className="mb-3">Affiliate Program</li>
                            <li className="mb-3">Privacy Policy</li>
                        </ul>
                    </Col>

                    {/* MAILING LIST */}
                    <Col lg={4} md={4} className="mb-4 w-25">
                        <h5>Mailing List</h5>
                        <div className="underline mb-4"></div>
                        <p>Sign up for our mailing list to get latest updates and offers</p>

                        <Form className="subscribe-form">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                            />
                            <Button style={{width:"150px", backgroundColor:"#ff4a57"}}>SUBSCRIBE</Button>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;