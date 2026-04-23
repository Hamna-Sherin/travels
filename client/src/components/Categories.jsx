import React from "react";
import { useNavigate } from "react-router-dom";
import beach from "../images/beach.jpg"
import hill from "../images/hill station.webp"
import waterfall from "../images/waterfall.jpg";
import wildlife from "../images/wildlife.jpg";
import backwaters from "../images/hero-image1.jpg";
import heritage from "../images/heritage.jpg";
import spiritual from "../images/spiritual.png";
import adventure from "../images/hero-image2.webp";
import { Col, Row } from "react-bootstrap";

const CategorySection = () => {

    const categories = [
        { name: "Beach", image: beach },
        { name: "Hill Station", image: hill },
        { name: "Waterfall", image: waterfall },
        { name: "Wildlife", image: wildlife },
        { name: "Backwaters", image: backwaters },
        { name: "Heritage", image: heritage },
        { name: "Spiritual", image: spiritual },
        { name: "Adventure", image: adventure }
    ];
    const navigate = useNavigate();

    return (
        <div className="categories text-center my-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Explore by Category</h2>
                <div className="underline mx-auto my-3"></div>
                <p className="text-muted w-75 mx-auto">
                    Discover destinations based on your travel interests.
                </p>
            </div>

            <Row className="g-4">
                {categories.map((cat, index) => (
                    <Col md={3} sm={6} xs={12} key={index}>
                        <div
                            className="category-card"
                            onClick={() => navigate(`/category/${cat.name}`)}
                        >
                            {/* Background Image */}
                            <div
                                className="category-image"
                                style={{ backgroundImage: `url(${cat.image})` }}
                            >
                                {/* Overlay */}
                                <div className="overlay">
                                    <h5>{cat.name}</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CategorySection;