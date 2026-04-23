import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import destination1 from "../images/destination1.webp"
import destination2 from "../images/destination2.webp"
import destination3 from "../images/destination3.webp"
import destination4 from "../images/destination4.webp"
import destination5 from "../images/destination5.png"
import destination6 from "../images/destination6.jpg"
import destination7 from "../images/destination7.jpg"
import destination8 from "../images/destination8.webp"
import destination9 from "../images/destination9.webp"
import destination10 from "../images/destination10.jpg"
import destination11 from "../images/destination11.jpg"
import destination12 from "../images/destination12.gif"
import destination13 from "../images/destination13.jpg"
import destination14 from "../images/destination14.jpg"

const DistrictGrid = () => {
    const navigate = useNavigate();

    const destinations = [
        { title: "Top Most Destination", desc: "Explore Kerala's most breathtaking districts — from backwaters to misty hills.", type: "text" },
        { title: "Kasargod", image: destination1 },
        { title: "Kannur", image: destination2 },
        { title: "Wayanad", image: destination3 },
        { title: "Kozhikkode", image: destination4 },
        { title: "Malappuram", image: destination5 },
        { title: "Palakkad", image: destination6 },
        { title: "Thrissur", image: destination7 },
        { title: "Eranakulam", image: destination8 },
        { title: "Idukki", image: destination9 },
        { title: "Kottayam", image: destination10 },
        { title: "Alappuzha", image: destination11 },
        { title: "Pathanamthitta", image: destination12 },
        { title: "Kollam", image: destination13 },
        { title: "Thiruvananthapuram", image: destination14 },
        { title: "Top Most Destination", desc: "Explore Kerala's most breathtaking districts — from backwaters to misty hills.", type: "text" },
    ];

    return (

        <section className="destination-section">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Explore Kerala </h2>
                <span className="section-tag">Journey Through God's Own Country</span>
                <div className="underline mx-auto my-3"></div>
            </div>


            <Container fluid>
                <Row className="g-0">
                    {destinations.map((item, index) => (
                        <Col md={3} key={index}>

                            {/* TEXT CARD */}
                            {item.type === "text" ? (
                                <div className="destination-box text-box">
                                    <h2>Top Most<br />Destination</h2>
                                    <p>{item.desc}</p>
                                </div>
                            ) : (

                                /* IMAGE CARD */
                                <div
                                    className="destination-box image-box"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    {/* Default label */}
                                    <div className="dest-content">
                                        <div className="dest-stars">★★★★★</div>
                                        <h5>{item.title}</h5>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="dest-overlay">
                                        <button
                                            className="book-btn"
                                            onClick={() => navigate(`/district/${item.title}`)}
                                        >
                                            VIEW ALL
                                        </button>
                                    </div>
                                </div>
                            )}

                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default DistrictGrid;