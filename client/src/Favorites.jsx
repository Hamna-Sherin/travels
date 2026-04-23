import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";

const Favorites = () => {
    const navigate = useNavigate();
    const [favItems, setFavItems] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavItems(data);
    }, []);

    const removeItem = (id) => {
        const updated = favItems.filter(item => item._id !== id);
        setFavItems(updated);
        localStorage.setItem("favourites", JSON.stringify(updated));
    };

    return (
        // <div className="destinations-section" style={{ minHeight: "80vh" }}>
        <div>

            {/* Heading */}
            <div className="text-center mb-5">
                {/* <span className="section-tag">Your Collection</span> */}
                <h2 className="section-title">Favourite Destinations</h2>
                <hr className="services-divider" />
                {/* <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}>
                    Destinations you love and want to explore.
                </p> */}
            </div>

            {/* Empty state */}
            {favItems.length === 0 ? (
                <div className="text-center py-5">
                    <FaHeart size={48} style={{ color: "var(--teal)", opacity: 0.25, display: "block", margin: "0 auto 16px" }} />
                    <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
                        No favourite destinations yet
                    </h5>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                        Click the heart icon on any destination to add it here.
                    </p>
                    <button className="btn-explore" onClick={() => navigate("/")}>
                        Browse Destinations
                    </button>
                </div>
            ) : (
                <Row className="px-4 g-4">
                    {favItems.map((item) => (
                        <Col md={4} key={item._id}>
                            <Card className="destination-card">

                                <div className="dest-img-wrapper">
                                    <Card.Img variant="top" src={item.Image} />
                                    <div className="dest-icons">
                                        <button
                                            className="dest-icon-btn active-heart"
                                            onClick={() => removeItem(item._id)}
                                            title="Remove from Favourites"
                                        >
                                            <FaHeart />
                                        </button>
                                    </div>
                                </div>

                                <Card.Body>
                                    <Card.Title>
                                        {item.Destination}, {item.Location}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.Description}
                                    </Card.Text>

                                    <div className="d-flex gap-2 justify-content-center mt-2">
                                        <button
                                            className="btn-book"
                                            onClick={() => navigate(`/destination/${item._id}`)}
                                        >
                                            View Details
                                        </button>
                                        {/* <button
                                            className="dest-remove-btn"
                                            onClick={() => removeItem(item._id)}
                                        >
                                            <FaTrash /> Remove
                                        </button> */}
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

        </div>
    );
};

export default Favorites;