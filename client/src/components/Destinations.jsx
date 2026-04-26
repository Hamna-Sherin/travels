import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBookmark } from 'react-icons/fa';

const Destinations = () => {
    const navigate = useNavigate();

    const [Destination, setDestination] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [favourites, setFavourites] = useState([]);
    const [saved, setSaved] = useState([]);


    useEffect(() => {
        axios.get(`https://travels-bp73.onrender.com/destination`, {
            params: { page, limit: 6 }
        })
            .then(result => {
                setDestination(result.data.destinations);
                setTotalPages(result.data.totalPages);
            })
            .catch(err => console.log(err));
    }, [page]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
        setSaved(savedItems.map(item => item._id));
    }, []);

    useEffect(() => {
        const favItems = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(favItems.map(item => item._id));
    }, []);

    const toggleFavourite = (item) => {
        let favItems = JSON.parse(localStorage.getItem("favourites")) || [];

        const exists = favItems.find((i) => i._id === item._id);

        if (exists) {
            favItems = favItems.filter((i) => i._id !== item._id);
        } else {
            favItems.push(item);
        }

        localStorage.setItem("favourites", JSON.stringify(favItems));

        // update UI state (only IDs)
        setFavourites(favItems.map(i => i._id));
    };

    const toggleSaved = (item) => {
        let savedItems = JSON.parse(localStorage.getItem("saved")) || [];

        const exists = savedItems.find((i) => i._id === item._id);

        if (exists) {
            savedItems = savedItems.filter((i) => i._id !== item._id);
        } else {
            savedItems.push(item);
        }

        localStorage.setItem("saved", JSON.stringify(savedItems));

        // update local state (only IDs for UI)
        setSaved(savedItems.map(i => i._id));
    };

    return (
        <div id='destinations' className="destinations-section">

            {/* Heading */}
            <div className="text-center mb-5">
                <span className="section-tag">What To See</span>
                <h2 className="section-title">Explore Our Tourist Destinations</h2>
                {/* <hr className="services-divider" /> */}
                <div className="underline mx-auto my-3"></div>
                <p className="text-muted mx-auto" style={{ maxWidth: "520px", fontSize: "0.97rem", lineHeight: "1.8" }}>
                    Discover handpicked destinations across Kerala — from serene backwaters
                    to misty hilltops, every place tells a story.
                </p>
            </div>

            {/* Cards */}
            <Row className="px-4 g-4">
                {Destination.map((dest) => (
                    <Col md={4} key={dest._id}>
                        <Card className="destination-card">

                            {/* Image + icon overlay */}
                            <div className="dest-img-wrapper">
                                <Card.Img variant="top" src={dest.Image} />
                                <div className="dest-icons">
                                    <button
                                        className={`dest-icon-btn ${favourites.includes(dest._id) ? 'active-heart' : ''}`}
                                        onClick={() => toggleFavourite(dest)}
                                        title="Add to Favourites"
                                    >
                                        <FaHeart />
                                    </button>
                                    <button
                                        className={`dest-icon-btn ${saved.includes(dest._id) ? 'active-save' : ''}`}
                                        onClick={() => toggleSaved(dest)}
                                        title="Save"
                                    >
                                        <FaBookmark />
                                    </button>
                                </div>
                            </div>

                            <Card.Body>
                                <div>
                                    <Card.Title>
                                        {dest.Destination}, {dest.Location}
                                    </Card.Title>
                                    <Card.Text>
                                        {dest.Description}
                                    </Card.Text>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <Button onClick={() => navigate(`/destination/${dest._id}`)}>
                                        Read More
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            <div className="dest-pagination">
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                    ← Prev
                </Button>
                <span className="page-info">Page {page} of {totalPages}</span>
                <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                    Next →
                </Button>
            </div>

        </div>
    );
};

export default Destinations;