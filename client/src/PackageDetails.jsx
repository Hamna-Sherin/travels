// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";

// const PackageDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [pkg, setPkg] = useState(null);
//     const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     guests: "",
//     date: ""
// });

//     useEffect(() => {
//         axios.get(`https://travels-bp73.onrender.com/getPackage/` + id)
//             .then(res => setPkg(res.data))
//             .catch(err => console.log(err));
//     }, [id]);

//     const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         await axios.post("https://travels-bp73.onrender.com/package-booking", {
//     ...form,
//     packageId: id,
//     packageName: pkg.name
// });

//         alert("Booking successful!");
//         setForm({
//             name: "",
//             email: "",
//             phone: "",
//             guests: "",
//             date: ""
//         });

//     } catch (err) {
//         console.log(err);
//         alert("Booking failed");
//     }
// };

//     if (!pkg)
//         return (
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
//                 <Spinner animation="border" variant="success" />
//             </div>
//         )

//     // return (
//     //     <Container className="mt-4">
//     //         <Button variant="secondary" onClick={() => navigate(-1)}>
//     //             ← Back
//     //         </Button>

//     //         <Row className="mt-4">

//     //             {/* IMAGE */}
//     //             <Col md={6}>
//     //                 <img
//     //                     src={pkg.image}
//     //                     alt={pkg.name}
//     //                     style={{
//     //                         width: "100%",
//     //                         height: "400px",
//     //                         objectFit: "cover",
//     //                         borderRadius: "10px"
//     //                     }}
//     //                 />
//     //             </Col>

//     //             {/* DETAILS */}
//     //             <Col md={6}>
//     //                 <h2>{pkg.name}</h2>
//     //                 <p><strong>📍 Destination:</strong> {pkg.destination}</p>
//     //                 <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
//     //                 <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
//     //                 <p><strong>📦 Category:</strong> {pkg.category}</p>
//     //                 <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

//     //                 <p>
//     //                     <strong>📅 Dates:</strong><br />
//     //                     {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
//     //                 </p>

//     //                 <p><strong>Description:</strong></p>
//     //                 <p>{pkg.description}</p>
//     //             </Col>
//     //         </Row>
//     //     </Container>
//     // );

//     return (
//     <Container className="mt-4">
//         <Button variant="secondary" onClick={() => navigate(-1)}>
//             ← Back
//         </Button>

//         <Row className="mt-4">

//             {/* LEFT: PACKAGE DETAILS */}
//             <Col md={6}>
//                 <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     style={{
//                         width: "100%",
//                         height: "300px",
//                         objectFit: "cover",
//                         borderRadius: "10px"
//                     }}
//                 />

//                 <div className="mt-3">
//                     <h3>{pkg.name}</h3>
//                     <p><strong>📍 Destination:</strong> {pkg.destination}</p>
//                     <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
//                     <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
//                     <p><strong>📦 Category:</strong> {pkg.category}</p>
//                     <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

//                     <p>
//                         <strong>📅 Dates:</strong><br />
//                         {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
//                     </p>

//                     <p><strong>Description:</strong></p>
//                     <p>{pkg.description}</p>
//                 </div>
//             </Col>


//             {/* RIGHT: BOOKING FORM */}
//             <Col md={6}>
//                 <div style={{
//                     border: "1px solid #ddd",
//                     borderRadius: "10px",
//                     padding: "20px",
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
//                 }}>
//                     <h4 className="mb-3">Book This Package</h4>

//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="form-control mb-3"
//                             value={form.name}
//                             onChange={(e) => setForm({ ...form, name: e.target.value })}
//                             required
//                         />

//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="form-control mb-3"
//                             value={form.email}
//                             onChange={(e) => setForm({ ...form, email: e.target.value })}
//                             required
//                         />

//                         <input
//                             type="tel"
//                             placeholder="Phone"
//                             className="form-control mb-3"
//                             value={form.phone}
//                             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                             required
//                         />

//                         <input
//                             type="number"
//                             placeholder="Number of Guests"
//                             className="form-control mb-3"
//                             value={form.guests}
//                             onChange={(e) => setForm({ ...form, guests: e.target.value })}
//                         />

//                         <input
//                             type="date"
//                             className="form-control mb-3"
//                             value={form.date}
//                             onChange={(e) => setForm({ ...form, date: e.target.value })}
//                         />

//                         <button className="btn btn-success w-100">
//                             Book Now
//                         </button>
//                     </form>
//                 </div>
//             </Col>

//         </Row>
//     </Container>
// );
// };

// export default PackageDetails;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";

// const PackageDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [pkg, setPkg] = useState(null);

//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         guests: "",
//         date: ""
//     });

//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         axios.get(`https://travels-bp73.onrender.com/getPackage/` + id)
//             .then(res => setPkg(res.data))
//             .catch(err => console.log(err));
//     }, [id]);

//     // ✅ VALIDATION
//     const validate = () => {
//         let newErrors = {};

//         if (!form.name.trim()) newErrors.name = "Name is required";
//         if (!form.email.includes("@")) newErrors.email = "Valid email required";
//         if (!/^[0-9]{10}$/.test(form.phone)) newErrors.phone = "Enter 10 digit phone";
//         if (form.guests && form.guests <= 0) newErrors.guests = "Invalid guests";
//         if (!form.date) newErrors.date = "Select a date";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validate()) {
//         toast.warning("Please fix the form errors");
//         return;
//     }

//         try {
//             await axios.post("https://travels-bp73.onrender.com/package-booking", {
//                 ...form,
//                 packageId: id,
//                 packageName: pkg.name
//             });

//             toast.success("Booking successful!");

//             setForm({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 guests: "",
//                 date: ""
//             });

//         } catch (err) {
//             console.log(err);
//             toast.error("Booking failed");
//         }
//     };

//     if (!pkg)
//         return (
//             <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
//                 <Spinner animation="border" variant="success" />
//             </div>
//         );

//     // ✅ TOTAL PRICE
//     const totalPrice = pkg.price * (form.guests || 1);

//     return (
//         <Container className="mt-4">
//             <Button variant="secondary" onClick={() => navigate(-1)}>
//                 ← Back
//             </Button>

//             <Row className="mt-4">

//                 {/* LEFT: PACKAGE DETAILS (UNCHANGED) */}
//                 <Col md={6}>
//                     <img
//                         src={pkg.image}
//                         alt={pkg.name}
//                         style={{
//                             width: "100%",
//                             height: "300px",
//                             objectFit: "cover",
//                             borderRadius: "10px"
//                         }}
//                     />

//                     <div className="mt-3">
//                         <h3>{pkg.name}</h3>
//                         <p><strong>📍 Destination:</strong> {pkg.destination}</p>
//                         <p><strong>💰 Price:</strong> ₹{pkg.price}</p>
//                         <p><strong>⏳ Duration:</strong> {pkg.duration}</p>
//                         <p><strong>📦 Category:</strong> {pkg.category}</p>
//                         <p><strong>🎟 Slots:</strong> {pkg.slots}</p>

//                         <p>
//                             <strong>📅 Dates:</strong><br />
//                             {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
//                         </p>

//                         <p><strong>Description:</strong></p>
//                         <p>{pkg.description}</p>
//                     </div>
//                 </Col>

//                 {/* RIGHT: BOOKING FORM */}
//                 <Col md={6}>
//                     <div style={{
//                         border: "1px solid #ddd",
//                         borderRadius: "10px",
//                         padding: "20px",
//                         boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//                         position: "sticky",   // ✅ STICKY
//                         top: "20px"
//                     }}>
//                         <h4 className="mb-3">Book This Package</h4>

//                         <form onSubmit={handleSubmit}>

//                             {/* ✅ AUTO-FILLED PACKAGE NAME */}
//                             <input
//                                 type="text"
//                                 className="form-control mb-3"
//                                 value={pkg.name}
//                                 readOnly
//                             />

//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 className="form-control mb-1"
//                                 value={form.name}
//                                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                             />
//                             <small className="text-danger">{errors.name}</small>

//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="form-control mb-1 mt-2"
//                                 value={form.email}
//                                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                             />
//                             <small className="text-danger">{errors.email}</small>

//                             <input
//                                 type="tel"
//                                 placeholder="Phone"
//                                 className="form-control mb-1 mt-2"
//                                 value={form.phone}
//                                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                             />
//                             <small className="text-danger">{errors.phone}</small>

//                             <input
//                                 type="number"
//                                 placeholder="Number of Guests"
//                                 className="form-control mb-1 mt-2"
//                                 value={form.guests}
//                                 onChange={(e) => setForm({ ...form, guests: e.target.value })}
//                             />
//                             <small className="text-danger">{errors.guests}</small>

//                             <input
//                                 type="date"
//                                 className="form-control mb-1 mt-2"
//                                 value={form.date}
//                                 onChange={(e) => setForm({ ...form, date: e.target.value })}
//                             />
//                             <small className="text-danger">{errors.date}</small>

//                             {/* ✅ TOTAL PRICE DISPLAY */}
//                             <div className="mt-3 mb-3 fw-bold text-success">
//                                 Total Price: ₹{totalPrice}
//                             </div>

//                             <button className="btn btn-success w-100">
//                                 Book Now
//                             </button>
//                         </form>
//                     </div>
//                 </Col>

//             </Row>
//         </Container>
//     );
// };

// export default PackageDetails;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Spinner, Form } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaMapMarkerAlt, FaRupeeSign, FaClock,
//          FaTag, FaTicketAlt, FaCalendarAlt, FaUser,
//          FaEnvelope, FaPhone, FaUsers } from "react-icons/fa";

// const PackageDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [pkg, setPkg] = useState(null);
//     const [form, setForm] = useState({
//         name: "", email: "", phone: "", guests: "", date: ""
//     });

//     useEffect(() => {
//         axios.get(`https://travels-bp73.onrender.com/getPackage/` + id)
//             .then(res => setPkg(res.data))
//             .catch(err => console.log(err));
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("https://travels-bp73.onrender.com/package-booking", {
//                 ...form, packageId: id, packageName: pkg.name
//             });
//             alert("Booking successful!");
//             setForm({ name: "", email: "", phone: "", guests: "", date: "" });
//         } catch (err) {
//             console.log(err);
//             alert("Booking failed");
//         }
//     };

//     if (!pkg) return (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
//             <Spinner animation="border" style={{ color: "var(--teal)" }} />
//         </div>
//     );

//     const infoItems = [
//         { icon: <FaMapMarkerAlt />, label: "Destination", value: pkg.destination },
//         { icon: <FaRupeeSign />,    label: "Price",       value: `₹${pkg.price?.toLocaleString("en-IN")}`, price: true },
//         { icon: <FaClock />,        label: "Duration",    value: pkg.duration },
//         { icon: <FaTag />,          label: "Category",    value: pkg.category },
//         { icon: <FaTicketAlt />,    label: "Slots",       value: pkg.slots },
//         { icon: <FaCalendarAlt />,  label: "Dates",       value: `${pkg.checkIn?.substring(0,10)} → ${pkg.checkOut?.substring(0,10)}` },
//     ];

//     return (
//         <div className="pkg-details-page">
//             <Container>

//                 {/* Back */}
//                 <button className="btn-back" onClick={() => navigate(-1)}>
//                     <FaArrowLeft /> Back
//                 </button>

//                 <Row className="g-4">

//                     {/* LEFT — Package Info */}
//                     <Col lg={7}>
//                         <img src={pkg.image} alt={pkg.name} className="pkg-details-img" />

//                         <h1 className="pkg-details-title">{pkg.name}</h1>

//                         {/* Info Grid */}
//                         <div className="pkg-info-grid">
//                             {infoItems.map((item, i) => (
//                                 <div className="pkg-info-item" key={i}>
//                                     <div className="info-label d-flex align-items-center gap-1">
//                                         <span style={{ color: "var(--teal)" }}>{item.icon}</span>
//                                         {item.label}
//                                     </div>
//                                     <p className={`info-value ${item.price ? "price" : ""}`}>
//                                         {item.value}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Description */}
//                         {pkg.description && (
//                             <>
//                                 <p className="pkg-description-title">About This Package</p>
//                                 <p className="pkg-description">{pkg.description}</p>
//                             </>
//                         )}
//                     </Col>

//                     {/* RIGHT — Booking Form */}
//                     <Col lg={5}>
//                         <div className="booking-card">
//                             <p className="booking-card-title">Book This Package</p>
//                             <p className="booking-card-sub">
//                                 Fill in your details and we'll confirm your booking shortly.
//                             </p>
//                             <hr className="services-divider" />

//                             <Form className="booking-form" onSubmit={handleSubmit}>

//                                 <Form.Group className="mb-3">
//                                     <Form.Label>
//                                         <FaUser style={{ marginRight: 6, color: "var(--teal)" }} />
//                                         Full Name
//                                     </Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Your full name"
//                                         value={form.name}
//                                         onChange={(e) => setForm({ ...form, name: e.target.value })}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3">
//                                     <Form.Label>
//                                         <FaEnvelope style={{ marginRight: 6, color: "var(--teal)" }} />
//                                         Email
//                                     </Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="your@email.com"
//                                         value={form.email}
//                                         onChange={(e) => setForm({ ...form, email: e.target.value })}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="mb-3">
//                                     <Form.Label>
//                                         <FaPhone style={{ marginRight: 6, color: "var(--teal)" }} />
//                                         Phone
//                                     </Form.Label>
//                                     <Form.Control
//                                         type="tel"
//                                         placeholder="+91 XXXXX XXXXX"
//                                         value={form.phone}
//                                         onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Row className="g-3 mb-3">
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label>
//                                                 <FaUsers style={{ marginRight: 6, color: "var(--teal)" }} />
//                                                 Guests
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="number"
//                                                 placeholder="No. of guests"
//                                                 min="1"
//                                                 value={form.guests}
//                                                 onChange={(e) => setForm({ ...form, guests: e.target.value })}
//                                             />
//                                         </Form.Group>
//                                     </Col>
//                                     <Col>
//                                         <Form.Group>
//                                             <Form.Label>
//                                                 <FaCalendarAlt style={{ marginRight: 6, color: "var(--teal)" }} />
//                                                 Travel Date
//                                             </Form.Label>
//                                             <Form.Control
//                                                 type="date"
//                                                 value={form.date}
//                                                 onChange={(e) => setForm({ ...form, date: e.target.value })}
//                                             />
//                                         </Form.Group>
//                                     </Col>
//                                 </Row>

//                                 <button type="submit" className="btn-book-now">
//                                     Confirm Booking
//                                 </button>

//                                 <p className="booking-price-hint">
//                                     Starting from <strong>₹{pkg.price?.toLocaleString("en-IN")}</strong> / person
//                                 </p>

//                             </Form>
//                         </div>
//                     </Col>

//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default PackageDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Form, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaRupeeSign, FaClock,
         FaTag, FaTicketAlt, FaCalendarAlt, FaUser,
         FaEnvelope, FaPhone, FaUsers, FaCheckCircle } from "react-icons/fa";

const PackageDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pkg, setPkg]           = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [form, setForm] = useState({
        name: "", email: "", phone: "", guests: "", date: ""
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
                ...form, packageId: id, packageName: pkg.name
            });
            setForm({ name: "", email: "", phone: "", guests: "", date: "" });
            setShowSuccess(true);
        } catch (err) {
            console.log(err);
            alert("Booking failed. Please try again.");
        }
    };

    if (!pkg) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
            <Spinner animation="border" style={{ color: "var(--teal)" }} />
        </div>
    );

    const infoItems = [
        { icon: <FaMapMarkerAlt />, label: "Destination", value: pkg.destination },
        { icon: <FaRupeeSign />,    label: "Price",       value: `₹${pkg.price?.toLocaleString("en-IN")}`, price: true },
        { icon: <FaClock />,        label: "Duration",    value: pkg.duration },
        { icon: <FaTag />,          label: "Category",    value: pkg.category },
        { icon: <FaTicketAlt />,    label: "Slots",       value: pkg.slots },
        // { icon: <FaCalendarAlt />,  label: "Dates",       value: `${pkg.checkIn?.substring(0,10)} → ${pkg.checkOut?.substring(0,10)}` },
    ];

    return (
        <div className="pkg-details-page">
            <Container>

                {/* Back */}
                {/* <button className="btn-back" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back
                </button> */}

                <Row className="g-4">

                    {/* LEFT — Package Info */}
                    <Col lg={7}>
                        <img src={pkg.image} alt={pkg.name} className="pkg-details-img" />
                        <h1 className="pkg-details-title">{pkg.name}</h1>

                        <div className="pkg-info-grid">
                            {infoItems.map((item, i) => (
                                <div className="pkg-info-item" key={i}>
                                    <div className="info-label d-flex align-items-center gap-1">
                                        <span style={{ color: "var(--teal)" }}>{item.icon}</span>
                                        {item.label}
                                    </div>
                                    <p className={`info-value ${item.price ? "price" : ""}`}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {pkg.description && (
                            <>
                                <p className="pkg-description-title">About This Package</p>
                                <p className="pkg-description">{pkg.description}</p>
                            </>
                        )}
                    </Col>

                    {/* RIGHT — Booking Form */}
                    <Col lg={5}>
                        <div className="booking-card">
                            <p className="booking-card-title">Book This Package</p>
                            <p className="booking-card-sub">
                                Fill in your details and we'll confirm your booking shortly.
                            </p>
                            <hr className="services-divider" />

                            <Form className="booking-form" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label><FaUser style={{ marginRight: 6, color: "var(--teal)" }} />Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your full name" value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaEnvelope style={{ marginRight: 6, color: "var(--teal)" }} />Email</Form.Label>
                                    <Form.Control type="email" placeholder="your@email.com" value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><FaPhone style={{ marginRight: 6, color: "var(--teal)" }} />Phone</Form.Label>
                                    <Form.Control type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                                </Form.Group>

                                <Row className="g-3 mb-3">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label><FaUsers style={{ marginRight: 6, color: "var(--teal)" }} />Guests</Form.Label>
                                            <Form.Control type="number" placeholder="No. of guests" min="1" value={form.guests}
                                                onChange={(e) => setForm({ ...form, guests: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label><FaCalendarAlt style={{ marginRight: 6, color: "var(--teal)" }} />Travel Date</Form.Label>
                                            <Form.Control type="date" value={form.date}
                                                onChange={(e) => setForm({ ...form, date: e.target.value })} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <button type="submit" className="btn-book-now">
                                    Confirm Booking
                                </button>

                                <p className="booking-price-hint">
                                    Starting from <strong>₹{pkg.price?.toLocaleString("en-IN")}</strong> / person
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ── SUCCESS MODAL ── */}
            <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
                <Modal.Body className="text-center" style={{ padding: "48px 32px" }}>

                    {/* Icon */}
                    <div style={{
                        width: "72px", height: "72px", borderRadius: "50%",
                        background: "rgba(26,107,94,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 20px"
                    }}>
                        <FaCheckCircle size={36} style={{ color: "var(--teal)" }} />
                    </div>

                    {/* Title */}
                    <h4 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        color: "var(--text-dark)",
                        marginBottom: "8px"
                    }}>
                        Booking Confirmed!
                    </h4>

                    {/* Package name */}
                    <p style={{
                        color: "var(--teal)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        marginBottom: "12px"
                    }}>
                        {pkg.name}
                    </p>

                    {/* Message */}
                    <p style={{
                        color: "var(--text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        marginBottom: "28px"
                    }}>
                        Thank you for booking with Rafco Travels! Our team will get
                        in touch with you shortly to confirm your itinerary.
                    </p>

                    {/* Divider */}
                    <hr style={{ borderColor: "#ede9df", marginBottom: "24px" }} />

                    {/* Actions */}
                    <div className="d-flex gap-3 justify-content-center">
                        <button
                            className="btn-back"
                            style={{ marginBottom: 0 }}
                            onClick={() => { setShowSuccess(false); navigate("/"); }}
                        >
                            Back to Home
                        </button>
                        <button
                            className="btn-book-now"
                            style={{ width: "auto", padding: "10px 28px" }}
                            onClick={() => setShowSuccess(false)}
                        >
                            View Details
                        </button>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PackageDetails;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Spinner, Form, Badge } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// /* ─────────────────────────────────────────────────────────────
//    PackageDetails.jsx — Rafco Travels theme
// ───────────────────────────────────────────────────────────── */

// const C = {
//   teal:        "#1a6b5e",
//   tealDark:    "#155549",
//   gold:        "#c9a84c",
//   goldDark:    "#a8882e",
//   bodyBg:      "#f0ede6",
//   white:       "#ffffff",
//   textDark:    "#1a1a1a",
//   textMid:     "#4a5568",
//   textMuted:   "#8a9490",
//   inputBorder: "#d4cfc7",
//   cardBorder:  "#e5e0d8",
// };

// /* ── Meta row item ── */
// function MetaItem({ icon, label, value }) {
//   return (
//     <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
//       <span style={{ fontSize: "1rem", marginTop: "1px" }}>{icon}</span>
//       <div>
//         <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.textMuted, display: "block", marginBottom: "2px" }}>
//           {label}
//         </span>
//         <span style={{ fontSize: "0.92rem", color: C.textDark, fontWeight: 500 }}>{value}</span>
//       </div>
//     </div>
//   );
// }

// /* ── Underline input (same style as ContactSection) ── */
// function UInput({ error, label, ...props }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <Form.Group className="mb-3">
//       {label && (
//         <Form.Label style={{
//           fontSize: "0.62rem", fontWeight: 700,
//           letterSpacing: "0.22em", textTransform: "uppercase",
//           color: C.gold, marginBottom: "6px",
//         }}>
//           {label}
//         </Form.Label>
//       )}
//       <Form.Control
//         {...props}
//         isInvalid={!!error}
//         style={{
//           background: "transparent", border: "none",
//           borderBottom: `1.5px solid ${error ? "#c0392b" : focused ? C.teal : C.inputBorder}`,
//           borderRadius: 0, padding: "8px 0",
//           fontSize: "0.9rem", color: C.textDark,
//           boxShadow: "none",
//         }}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//       />
//       <Form.Control.Feedback type="invalid" style={{ fontSize: "0.7rem", color: "#c0392b", fontWeight: 500 }}>
//         {error}
//       </Form.Control.Feedback>
//     </Form.Group>
//   );
// }

// /* ════════════════════════════════════════════════════════════
//    MAIN COMPONENT
// ════════════════════════════════════════════════════════════ */
// const PackageDetails = () => {
//   const { id }     = useParams();
//   const navigate   = useNavigate();

//   const [pkg, setPkg]       = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [form, setForm]     = useState({
//     name: "", email: "", phone: "", guests: "", date: "",
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://travels-bp73.onrender.com/getPackage/${id}`)
//       .then((res) => setPkg(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   function validate() {
//     const e = {};
//     if (!form.name.trim())                   e.name   = "Name is required";
//     if (!form.email.includes("@"))           e.email  = "Valid email required";
//     if (!/^[0-9]{10}$/.test(form.phone))     e.phone  = "Enter a 10-digit phone number";
//     if (form.guests && form.guests <= 0)     e.guests = "Invalid number of guests";
//     if (!form.date)                          e.date   = "Please select a date";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!validate()) {
//       toast.warning("Please fix the form errors");
//       return;
//     }
//     setSubmitting(true);
//     try {
//       await axios.post("https://travels-bp73.onrender.com/package-booking", {
//         ...form,
//         packageId:   id,
//         packageName: pkg.name,
//       });
//       toast.success("Booking successful!");
//       setForm({ name: "", email: "", phone: "", guests: "", date: "" });
//     } catch (err) {
//       console.log(err);
//       toast.error("Booking failed. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   /* Loading state */
//   if (!pkg) return (
//     <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh", background: C.bodyBg }}>
//       <Spinner animation="border" style={{ color: C.teal }} />
//     </div>
//   );

//   const totalPrice = pkg.price * (form.guests || 1);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
//         .pkg-wrap, .pkg-wrap * { font-family: 'DM Sans', sans-serif !important; }
//         .pkg-wrap input[type=date]::-webkit-calendar-picker-indicator { opacity: 0.45; cursor: pointer; }
//         .pkg-wrap .form-control::placeholder { color: #b5b0a8; }
//         .pkg-wrap .form-control:focus        { box-shadow: none !important; }
//         .back-btn:hover { background: rgba(26,107,94,0.08) !important; }
//       `}</style>

//       <div className="pkg-wrap" style={{ background: C.bodyBg, minHeight: "100vh" }}>

//         {/* ── Hero band ── */}
//         <div style={{ background: C.teal, padding: "28px 0 0" }}>
//           <Container>
//             {/* Back button */}
//             <button
//               className="back-btn"
//               onClick={() => navigate(-1)}
//               style={{
//                 display: "inline-flex", alignItems: "center", gap: "7px",
//                 background: "transparent", border: `1px solid rgba(255,255,255,0.25)`,
//                 borderRadius: "6px", color: "rgba(255,255,255,0.8)",
//                 fontSize: "0.82rem", fontWeight: 500,
//                 padding: "7px 16px", cursor: "pointer",
//                 marginBottom: "20px", transition: "background 0.2s",
//               }}
//             >
//               ← Back
//             </button>

//             {/* Package title in hero */}
//             <div style={{ paddingBottom: "28px" }}>
//               <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: "8px" }}>
//                 {pkg.category}
//               </span>
//               <h1 style={{
//                 fontFamily: "'Playfair Display','Georgia',serif",
//                 fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                 fontWeight: 700, color: C.white, margin: 0, lineHeight: 1.15,
//               }}>
//                 {pkg.name}
//               </h1>
//               <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginTop: "8px", marginBottom: 0 }}>
//                 📍 {pkg.destination} &nbsp;·&nbsp; ⏳ {pkg.duration}
//               </p>
//             </div>
//           </Container>
//         </div>

//         {/* ── Main body ── */}
//         <Container className="py-5">
//           <Row className="g-4">

//             {/* ── LEFT: Package details ── */}
//             <Col md={7}>

//               {/* Image */}
//               <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "28px", boxShadow: "0 4px 20px rgba(26,107,94,0.12)" }}>
//                 <img
//                   src={pkg.image}
//                   alt={pkg.name}
//                   style={{ width: "100%", height: "340px", objectFit: "cover", display: "block" }}
//                 />
//               </div>

//               {/* Meta grid */}
//               <div style={{
//                 background: C.white, border: `1px solid ${C.cardBorder}`,
//                 borderRadius: "12px", padding: "24px 28px", marginBottom: "24px",
//               }}>
//                 <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: "18px" }}>
//                   Package Details
//                 </p>
//                 <Row>
//                   <Col xs={6}>
//                     <MetaItem icon="💰" label="Price per person" value={`₹${pkg.price?.toLocaleString("en-IN")}`} />
//                     <MetaItem icon="⏳" label="Duration"         value={pkg.duration} />
//                     <MetaItem icon="📦" label="Category"         value={pkg.category} />
//                   </Col>
//                   <Col xs={6}>
//                     <MetaItem icon="🎟" label="Available Slots"  value={pkg.slots} />
//                     <MetaItem icon="📅" label="Check-in"         value={pkg.checkIn?.substring(0, 10)} />
//                     <MetaItem icon="📅" label="Check-out"        value={pkg.checkOut?.substring(0, 10)} />
//                   </Col>
//                 </Row>
//               </div>

//               {/* Description */}
//               <div style={{
//                 background: C.white, border: `1px solid ${C.cardBorder}`,
//                 borderRadius: "12px", padding: "24px 28px",
//               }}>
//                 <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: "12px" }}>
//                   About This Package
//                 </p>
//                 <p style={{ fontSize: "0.92rem", color: C.textMid, lineHeight: 1.85, margin: 0 }}>
//                   {pkg.description}
//                 </p>
//               </div>

//             </Col>

//             {/* ── RIGHT: Booking form ── */}
//             <Col md={5}>
//               <div style={{
//                 background: C.white, border: `1px solid ${C.cardBorder}`,
//                 borderRadius: "12px", padding: "28px 28px",
//                 boxShadow: "0 4px 20px rgba(26,107,94,0.08)",
//                 position: "sticky", top: "24px",
//               }}>
//                 {/* Form header */}
//                 <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, marginBottom: "6px" }}>
//                   Reserve Your Spot
//                 </p>
//                 <h4 style={{
//                   fontFamily: "'Playfair Display','Georgia',serif",
//                   fontSize: "1.35rem", fontWeight: 700,
//                   color: C.teal, marginBottom: "4px",
//                 }}>
//                   Book This Package
//                 </h4>
//                 <p style={{ fontSize: "0.8rem", color: C.textMuted, marginBottom: "24px" }}>
//                   Fill in your details and we'll confirm your booking.
//                 </p>

//                 {/* Divider */}
//                 <div style={{ height: "1px", background: C.cardBorder, marginBottom: "20px" }} />

//                 <Form onSubmit={handleSubmit} noValidate>

//                   {/* Auto-filled package name */}
//                   <div style={{ marginBottom: "16px" }}>
//                     <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, display: "block", marginBottom: "6px" }}>
//                       Package
//                     </span>
//                     <div style={{
//                       fontSize: "0.88rem", fontWeight: 600, color: C.teal,
//                       padding: "8px 0", borderBottom: `1.5px solid ${C.inputBorder}`,
//                     }}>
//                       {pkg.name}
//                     </div>
//                   </div>

//                   <UInput label="Full Name"   type="text"   placeholder="Your full name"      value={form.name}   onChange={(e) => setForm({ ...form, name: e.target.value })}   error={errors.name} />
//                   <UInput label="Email"       type="email"  placeholder="you@email.com"        value={form.email}  onChange={(e) => setForm({ ...form, email: e.target.value })}  error={errors.email} />
//                   <UInput label="Phone"       type="tel"    placeholder="+91 00000 00000"       value={form.phone}  onChange={(e) => setForm({ ...form, phone: e.target.value })}  error={errors.phone} />
//                   <UInput label="No. of Guests" type="number" placeholder="1" min="1"          value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} error={errors.guests} />
//                   <UInput label="Travel Date" type="date"                                       value={form.date}   onChange={(e) => setForm({ ...form, date: e.target.value })}   error={errors.date} />

//                   {/* Total price */}
//                   <div style={{
//                     background: "rgba(26,107,94,0.06)",
//                     border: `1px solid rgba(26,107,94,0.15)`,
//                     borderRadius: "8px", padding: "14px 16px",
//                     marginBottom: "20px",
//                     display: "flex", alignItems: "center", justifyContent: "space-between",
//                   }}>
//                     <span style={{ fontSize: "0.78rem", fontWeight: 600, color: C.textMid, textTransform: "uppercase", letterSpacing: "0.1em" }}>
//                       Total Price
//                     </span>
//                     <span style={{ fontSize: "1.15rem", fontWeight: 700, color: C.teal }}>
//                       ₹{totalPrice.toLocaleString("en-IN")}
//                     </span>
//                   </div>

//                   {/* Submit */}
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     style={{
//                       width: "100%", padding: "13px",
//                       background: submitting ? C.goldDark : C.gold,
//                       border: "none", borderRadius: "6px",
//                       color: C.white, fontFamily: "inherit",
//                       fontSize: "0.78rem", fontWeight: 700,
//                       letterSpacing: "0.2em", textTransform: "uppercase",
//                       cursor: submitting ? "not-allowed" : "pointer",
//                       opacity: submitting ? 0.75 : 1,
//                       display: "flex", alignItems: "center",
//                       justifyContent: "center", gap: "8px",
//                       transition: "background 0.2s",
//                     }}
//                     onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = C.goldDark; }}
//                     onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = C.gold; }}
//                   >
//                     {submitting ? (
//                       <>
//                         <Spinner as="span" animation="border" size="sm" />
//                         Processing…
//                       </>
//                     ) : (
//                       "Book Now"
//                     )}
//                   </button>

//                   <p style={{ fontSize: "0.72rem", color: C.textMuted, textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
//                     No payment required now · We'll contact you to confirm
//                   </p>
//                 </Form>
//               </div>
//             </Col>

//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default PackageDetails;