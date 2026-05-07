import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const PackageDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pkg, setPkg] = useState(null);
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: ""
});

    useEffect(() => {
        axios.get(`https://travels-bp73.onrender.com/getPackage/` + id)
            .then(res => setPkg(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await axios.post("https://travels-bp73.onrender.com/package-booking", {
    ...form,
    packageId: id,
    packageName: pkg.name
});

        alert("Booking successful!");
        setForm({
            name: "",
            email: "",
            phone: "",
            guests: "",
            date: ""
        });

    } catch (err) {
        console.log(err);
        alert("Booking failed");
    }
};

    if (!pkg)
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <Spinner animation="border" variant="success" />
            </div>
        )

    // return (
    //     <Container className="mt-4">
    //         <Button variant="secondary" onClick={() => navigate(-1)}>
    //             ← Back
    //         </Button>

    //         <Row className="mt-4">

    //             {/* IMAGE */}
    //             <Col md={6}>
    //                 <img
    //                     src={pkg.image}
    //                     alt={pkg.name}
    //                     style={{
    //                         width: "100%",
    //                         height: "400px",
    //                         objectFit: "cover",
    //                         borderRadius: "10px"
    //                     }}
    //                 />
    //             </Col>

    //             {/* DETAILS */}
    //             <Col md={6}>
    //                 <h2>{pkg.name}</h2>
    //                 <p><strong>📍 Destination:</strong> {pkg.destination}</p>
    //                 <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
    //                 <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
    //                 <p><strong>📦 Category:</strong> {pkg.category}</p>
    //                 <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

    //                 <p>
    //                     <strong>📅 Dates:</strong><br />
    //                     {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
    //                 </p>

    //                 <p><strong>Description:</strong></p>
    //                 <p>{pkg.description}</p>
    //             </Col>
    //         </Row>
    //     </Container>
    // );

    return (
    <Container className="mt-4">
        <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Back
        </Button>

        <Row className="mt-4">

            {/* LEFT: PACKAGE DETAILS */}
            <Col md={6}>
                <img
                    src={pkg.image}
                    alt={pkg.name}
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />

                <div className="mt-3">
                    <h3>{pkg.name}</h3>
                    <p><strong>📍 Destination:</strong> {pkg.destination}</p>
                    <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
                    <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
                    <p><strong>📦 Category:</strong> {pkg.category}</p>
                    <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

                    <p>
                        <strong>📅 Dates:</strong><br />
                        {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
                    </p>

                    <p><strong>Description:</strong></p>
                    <p>{pkg.description}</p>
                </div>
            </Col>


            {/* RIGHT: BOOKING FORM */}
            <Col md={6}>
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}>
                    <h4 className="mb-3">Book This Package</h4>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="form-control mb-3"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control mb-3"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            className="form-control mb-3"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Number of Guests"
                            className="form-control mb-3"
                            value={form.guests}
                            onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        />

                        <input
                            type="date"
                            className="form-control mb-3"
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                        />

                        <button className="btn btn-success w-100">
                            Book Now
                        </button>
                    </form>
                </div>
            </Col>

        </Row>
    </Container>
);
};

export default PackageDetails;