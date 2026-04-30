import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button, Spinner } from "react-bootstrap";
import { FaHeart, FaBookmark } from 'react-icons/fa';


const DistrictDestinations = () => {
    const { name } = useParams(); // district name
    const [destinations, setDestinations] = useState(null);
    const [favourites, setFavourites] = useState([]);
    const [saved, setSaved] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://travels-bp73.onrender.com/destination", {
            params: {
                location: name   // 👈 send district name
            }
        })
            .then(res => setDestinations(res.data.destinations))
            .catch(err => console.log(err));
    }, [name]);

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

    if (!destinations)
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Spinner animation="border" variant="success" />
            </div>
        );

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 fw-bold">
                Destinations in {name}
            </h2>

            <Row className="g-3">
                {destinations.map((dest) => (
                    <Col xs={12} sm={6} lg={4} key={dest._id}>
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
        </div>
    );
};

export default DistrictDestinations;