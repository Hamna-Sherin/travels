import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const TaxiBooking = () => {
    const [form, setForm] = useState({
        pickupStreet: "",
        pickupArea: "",
        pickupCity: "",
        pickupState: "",
        pickupPincode: "",

        dropStreet: "",
        dropArea: "",
        dropCity: "",
        dropState: "",
        dropPincode: "",

        pickupDate: "",
        pickupTime: "",
        tripType: "One Way",
        passengers: 1,
        vehicleType: "",
        name: "",
        phone: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/booking", form);

            alert("Booking Confirmed ✅");
            console.log(res.data);
            setForm({
                pickupStreet: "",
                pickupArea: "",
                pickupCity: "",
                pickupState: "",
                pickupPincode: "",

                dropStreet: "",
                dropArea: "",
                dropCity: "",
                dropState: "",
                dropPincode: "",

                pickupDate: "",
                pickupTime: "",
                tripType: "One Way",
                passengers: 1,
                vehicleType: "",
                name: "",
                phone: ""
            });

        } catch (err) {
            console.log(err);
            alert("Booking Failed ❌");
        }
    };

    return (
        <div className="container my-5">
            <div className="text-center mb-4">
                <h2 className="section-title">Book Your Taxi</h2>
                <div className="title-line"></div>
            </div>

            <Form onSubmit={handleSubmit} className="taxi-card shadow-lg p-4">

                <div className="container my-5">
                    <Row className="g-4">

                        {/* LEFT SIDE */}
                        <Col md={8}>
                            <div className="taxi-card shadow-sm p-4">

                                {/* Pickup */}
                                <h5>Pickup Address</h5>
                                <Row className="g-3">

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="pickupStreet"
                                                value={form.pickupStreet}
                                                onChange={handleChange}
                                                placeholder="Street Address"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="pickupArea"
                                                value={form.pickupArea}
                                                onChange={handleChange}
                                                placeholder="Area / Landmark"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="pickupCity"
                                                value={form.pickupCity}
                                                onChange={handleChange}
                                                placeholder="City"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="pickupState"
                                                value={form.pickupState}
                                                onChange={handleChange}
                                                placeholder="State"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="pickupPincode"
                                                value={form.pickupPincode}
                                                onChange={handleChange}
                                                placeholder="Pincode"
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>

                                {/* Drop */}
                                <h5 className="mt-4">Drop Address</h5>
                                <Row className="g-3">

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="dropStreet"
                                                value={form.dropStreet}
                                                onChange={handleChange}
                                                placeholder="Street Address"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="dropArea"
                                                value={form.dropArea}
                                                onChange={handleChange}
                                                placeholder="Area / Landmark"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="dropCity"
                                                value={form.dropCity}
                                                onChange={handleChange}
                                                placeholder="City"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="dropState"
                                                value={form.dropState}
                                                onChange={handleChange}
                                                placeholder="State "
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="dropPincode"
                                                value={form.dropPincode}
                                                onChange={handleChange}
                                                placeholder="Pincode"
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>

                                {/* Trip Details */}
                                <h5 className="mt-4">Trip Details</h5>
                                <Row className="g-3">

                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="date"
                                                name="pickupDate"
                                                value={form.pickupDate}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="time"
                                                name="pickupTime"
                                                value={form.pickupTime}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Select name="tripType" value={form.tripType} onChange={handleChange}>
                                                <option>One Way</option>
                                                <option>Round Trip</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>

                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                name="passengers"
                                                value={form.passengers}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>

                            </div>
                        </Col>

                        {/* RIGHT SIDE */}
                        <Col md={4}>
                            <div className="taxi-card shadow-sm p-4 sticky-box">

                                <h5>Booking Details</h5>

                                <Form.Group className="mb-3">
                                    <Form.Select name="vehicleType" value={form.vehicleType} onChange={handleChange}>
                                        <option value="">Vehicle Type</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="SUV">SUV</option>
                                        <option value="Luxury">Luxury</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                    />
                                </Form.Group>

                                <Button type="submit" variant="primary" className="w-100 mt-3">
                                    Book Taxi
                                </Button>

                            </div>
                        </Col>

                    </Row>
                </div>

            </Form>
        </div >
    );
};

export default TaxiBooking;