import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineStar } from "react-icons/md";
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
import { useNavigate } from "react-router-dom";

const DistrictGrid = () => {

    const navigate = useNavigate();

    const destinations = [
    {
        title: "Top Most Destination",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
        image: "",
        type: "text",
    },
    {
        title: "Kasargod",
        image: destination1,
    },
    {
        title: "Kannur",
        image: destination2,
    },
    {
        title: "Wayanad",
        image: destination3,
    },
    {
        title: "Kozhikkode",
        image: destination4,
    },
    {
        title: "Malappuram",
        image: destination5,
    },
    {
        title: "Palakkad",
        image: destination6,
    },
    {
        title: "Thrissur",
        image: destination7,
    },
    {
        title: "Eranakulam",
        image: destination8,
    },
    {
        title: "Idukki",
        image: destination9,
    },
    {
        title: "Kottayam",
        image: destination10,
    },
    {
        title: "Alappuzha",
        image: destination11,
    },
    {
        title: "Pathanamthitta",
        image: destination12,
    },
    {
        title: "Kollam",
        image: destination13,
    },
    {
        title: "Thiruvananthapuram",
        image: destination14,
    },
    {
        title: "Top Most Destination",
        desc: "Lorem Ipsum is simply dummy text the printing and typesetting industry.",
        image: "",
        type: "text",
    }
];
    
    return (
        <section className="destination-section">
            <Container fluid>
                <Row className="g-0">
                    {destinations.map((item, index) => (
                        <Col md={3} key={index}>

                            {/* TEXT CARD */}
                            {item.type === "text" ? (
                                <div className="destination-box text-box">
                                    <h2>
                                        Top Most <br /> Destination
                                    </h2>
                                    <p>{item.desc}</p>
                                </div>
                            ) : (

                                /* IMAGE CARD */
                                <div
                                    className="destination-box image-box"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >

                                    {/* DEFAULT CONTENT (VISIBLE ALWAYS) */}
                                    <div className="content">
                                        <div className="stars">
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                            <MdOutlineStar />
                                        </div>


                                        <h5>{item.title}</h5>
                                    </div>

                                    {/* HOVER OVERLAY */}
                                    <div className="overlay">
                                        <button onClick={() => navigate(`/district/${item.title}`)} className="book-btn">VIEW ALL</button>
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