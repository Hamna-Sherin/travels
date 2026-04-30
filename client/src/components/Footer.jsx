// import React from "react";
// import { Container, Row, Col, Form } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { LiaPhoneVolumeSolid } from "react-icons/lia";

// const Footer = () => {
//     return (
//         <footer className="main-footer">
//             <Container>
//                 <Row className="g-4">

//                     {/* LEFT — Brand + Contact */}
//                     <Col lg={4} md={6}>

//                         <div className="footer-logo">Rafco <span>Travels</span></div>
//                         <p className="footer-tagline">
//                             Crafting personalised Kerala experiences — from the backwaters
//                             of Alleppey to the misty hills of Munnar.
//                         </p>

//                         <div className="footer-phone">
//                             <LiaPhoneVolumeSolid size={36} />
//                             <p>
//                                 Got Questions? Call us 24/7!<br />
//                                 <strong>+91 88 1234 56789</strong>
//                             </p>
//                         </div>

//                         <div className="footer-contact">
//                             <p>📍 Kottakkal, Malappuram, Kerala</p>
//                             <p>✉️ hello@rafcotravels.com</p>
//                         </div>

//                         <div className="footer-social">
//                             <a href="#" title="Facebook"><FaFacebookF /></a>
//                             <a href="#" title="Twitter"><FaTwitter /></a>
//                             <a href="#" title="Instagram"><FaInstagram /></a>
//                             <a href="#" title="LinkedIn"><FaLinkedinIn /></a>
//                             <a href="https://wa.me/" title="WhatsApp" target="_blank" rel="noopener noreferrer">
//                                 <FaWhatsapp />
//                             </a>
//                         </div>

//                     </Col>

//                     {/* COMPANY */}
//                     <Col lg={2} md={3} sm={6} xs={6} className="footer-links">
//                         <h6 className="footer-heading">Company</h6>
//                         <hr className="footer-divider" />
//                         <ul>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="#">Careers</a></li>
//                             <li><a href="#">Terms of Use</a></li>
//                             <li><a href="#">Privacy Statement</a></li>
//                             <li><a href="#">Feedback</a></li>
//                         </ul>
//                     </Col>

//                     {/* SUPPORT */}
//                     <Col lg={2} md={3} sm={6} xs={6} className="footer-links">
//                         <h6 className="footer-heading">Support</h6>
//                         <hr className="footer-divider" />
//                         <ul>
//                             <li><a href="#">Account</a></li>
//                             <li><a href="#">Legal</a></li>
//                             <li><a href="#">Contact Us</a></li>
//                             <li><a href="#">Affiliate Program</a></li>
//                             <li><a href="#">Privacy Policy</a></li>
//                         </ul>
//                     </Col>

//                     {/* MAILING LIST */}
//                     <Col lg={4} md={6} className="footer-subscribe">
//                         <h6 className="footer-heading">Stay Updated</h6>
//                         <hr className="footer-divider" />
//                         <p>
//                             Sign up for our mailing list to get the latest Kerala travel
//                             deals, packages, and offers.
//                         </p>
//                         <Form className="subscribe-form">
//                             <Form.Control type="email" placeholder="Your email address" />
//                             <button className="btn-subscribe">Subscribe</button>
//                         </Form>
//                     </Col>

//                 </Row>
//             </Container>

//             {/* Bottom bar */}
//             <div className="footer-bottom">
//                 <p>
//                     © {new Date().getFullYear()} <span>Rafco Travels</span>, Kottakkal.
//                     All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="main-footer">
            <Container>
                <Row className="g-4">

                    {/* LEFT — Brand + Contact */}
                    <Col lg={4} md={6}>

                        <div className="footer-logo">Rafco <span>Travels</span></div>
                        <p className="footer-tagline">
                            From the backwaters of Alleppey to the misty hills of Munnar —
                            we craft personalised Kerala experiences that fit your budget perfectly.
                        </p>

                        <div className="footer-phone">
                            <LiaPhoneVolumeSolid size={36} />
                            <p>
                                Got Questions? Call us 24/7!<br />
                                <strong>+91 88 1234 56789</strong>
                            </p>
                        </div>

                        <div className="footer-contact">
                            <p>📍 Kottakkal, Malappuram, Kerala — 676503</p>
                            <p>✉️ hello@rafcotravels.com</p>
                        </div>

                        <div className="footer-social">
                            <a href="#" title="Facebook"><FaFacebookF /></a>
                            <a href="#" title="Twitter"><FaTwitter /></a>
                            <a href="#" title="Instagram"><FaInstagram /></a>
                            <a href="#" title="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://wa.me/919876543210" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </div>

                    </Col>

                    {/* EXPLORE — replaces generic "Company" */}
                    <Col lg={2} md={3} sm={6} xs={6} className="footer-links">
                        <h6 className="footer-heading">Explore</h6>
                        <hr className="footer-divider" />
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#packages">Packages</a></li>
                            <li><a href="#why-us">Why Us</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#bookTaxi">Book Taxi</a></li>
                        </ul>
                    </Col>

                    {/* SUPPORT */}
                    <Col lg={2} md={3} sm={6} xs={6} className="footer-links">
                        <h6 className="footer-heading">Support</h6>
                        <hr className="footer-divider" />
                        <ul>
                            <li><a href="#" onClick={() => navigate("/profile")}>My Account</a></li>
                            <li><a href="#" onClick={() => navigate("/saved")}>Saved Trips</a></li>
                            <li><a href="#" onClick={() => navigate("/favorites")}>Favourites</a></li>
                            <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>

                    {/* MAILING LIST */}
                    <Col lg={4} md={6} sm={12} xs={12} className="footer-subscribe">
                        <h6 className="footer-heading">Stay Updated</h6>
                        <hr className="footer-divider" />
                        <p>
                            Subscribe to get the latest Kerala travel deals, seasonal offers,
                            and new package launches straight to your inbox.
                        </p>
                        <Form className="subscribe-form">
                            <Form.Control type="email" placeholder="Your email address" />
                            <button className="btn-subscribe">Subscribe</button>
                        </Form>
                    </Col>

                </Row>
            </Container>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} <span>Rafco Travels</span>, Kottakkal, Kerala.
                    All rights reserved. Designed with ❤️ for Kerala.
                </p>
            </div>
        </footer>
    );
};

export default Footer;