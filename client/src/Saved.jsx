import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaTrash } from "react-icons/fa";

const Saved = () => {
    const navigate = useNavigate();
    const [savedItems, setSavedItems] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("saved")) || [];
        setSavedItems(data);
    }, []);

    const removeItem = (id) => {
        const updated = savedItems.filter(item => item._id !== id);
        setSavedItems(updated);
        localStorage.setItem("saved", JSON.stringify(updated));
    };

    return (
        // <div className="destinations-section" style={{ minHeight: "80vh" }}>
        <div>

            {/* Heading */}
            {/* <div className="text-center mb-5"> */}
            <div className="text-center">
                {/* <span className="section-tag">Your Collection</span> */}
                <h2 className="section-title">Saved Destinations</h2>
                <hr className="services-divider" />
                {/* <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}> */}
                    {/* Places you've bookmarked to revisit later. */}
                {/* </p> */}
            </div>

            {/* Empty state */}
            {savedItems.length === 0 ? (
                <div className="text-center py-5">
                    <FaBookmark size={48} style={{ color: "var(--teal)", opacity: 0.25, marginBottom: "16px", display: "block", margin: "0 auto 16px" }} />
                    <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
                        No saved destinations yet
                    </h5>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                        Click the bookmark icon on any destination to save it here.
                    </p>
                    <button className="btn-explore" onClick={() => navigate("/")}>
                        Browse Destinations
                    </button>
                </div>
            ) : (
                <Row className="px-4 g-4">
                    {savedItems.map((item) => (
                        <Col md={4} key={item._id}>
                            <Card className="destination-card">

                                {/* Image */}
                                <div className="dest-img-wrapper">
                                    <Card.Img variant="top" src={item.Image} />
                                    {/* Saved badge on image */}
                                    <div className="dest-icons">
                                        <button
                                            className="dest-icon-btn active-save"
                                            onClick={() => removeItem(item._id)}
                                            title="Remove from Saved"
                                        >
                                            <FaBookmark />
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

export default Saved;