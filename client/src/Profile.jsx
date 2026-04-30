import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import {
    FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt,
    FaEdit, FaHeart, FaBookmark, FaHistory,
    FaSave, FaTimes, FaSignOutAlt, FaChevronRight,
    FaTrash, FaEye
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const bookingHistory = [
    { id: "RFT-001", destination: "Munnar Hill Escape", date: "12 Mar 2025", amount: "₹6,499", status: "confirmed" },
    { id: "RFT-002", destination: "Alleppey Backwaters", date: "28 Jan 2025", amount: "₹5,999", status: "confirmed" },
    { id: "RFT-003", destination: "Wayanad Forest Retreat", date: "05 Dec 2024", amount: "₹7,299", status: "cancelled" },
    { id: "RFT-004", destination: "Kovalam Beach Getaway", date: "20 Oct 2024", amount: "₹6,999", status: "pending" },
];

const statusClass = {
    confirmed: "status-confirmed",
    pending: "status-pending",
    cancelled: "status-cancelled",
};

const sidebarItems = [
    { key: "info", label: "Personal Info", icon: <FaUser /> },
    { key: "bookings", label: "Booking History", icon: <FaHistory /> },
    { key: "saved", label: "Saved", icon: <FaBookmark /> },
    { key: "favourites", label: "Favourites", icon: <FaHeart /> },
    { key: "logout", label: "Logout", icon: <FaSignOutAlt />, danger: true }
];

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")) || {
        name: "Arjun Menon", email: "arjun@example.com",
        phone: "+91 98765 43210", location: "Kozhikode, Kerala",
    };

    const [activeTab, setActiveTab] = useState("info");
    const [editing, setEditing] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem("saved") || "[]"));
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem("favourites") || "[]"));

    const [form, setForm] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSave = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/users/${user._id}`, form);


            // Update localStorage with the returned user data
            const updatedUser = res.data.user;
            localStorage.setItem("user", JSON.stringify(updatedUser));

            setEditing(false);
        } catch (err) {
            console.log(err);
            toast.error("Failed to update profile. Please try again.");
        }
    };

    const removeSaved = (id) => {
        const updated = savedItems.filter(s => s._id !== id);
        setSavedItems(updated);
        localStorage.setItem("saved", JSON.stringify(updated));
    };

    const removeFav = (id) => {
        const updated = favItems.filter(f => f._id !== id);
        setFavItems(updated);
        localStorage.setItem("favourites", JSON.stringify(updated));
    };

    const handleSidebarClick = (key) => {
        if (key === "logout") { setShowLogout(true); return; }
        setActiveTab(key);
        setEditing(false);
    };

    const confirmLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const initials = form.name
        ? form.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()
        : "U";

    /* ── COLLECTION CARD ── */
    const CollectionCard = ({ item, type }) => (
        <div className="profile-collection-card">
            <div className="pcc-img-wrap">
                <img src={item.Image} alt={item.Destination} />
                <div className="pcc-type-badge">
                    {type === "saved" ? <FaBookmark /> : <FaHeart />}
                </div>
            </div>
            <div className="pcc-body">
                <p className="pcc-title">{item.Destination}</p>
                <p className="pcc-location">📍 {item.Location}</p>
                <div className="pcc-actions">
                    <button
                        className="pcc-btn-view"
                        onClick={() => navigate(`/destination/${item._id}`)}
                    >
                        <FaEye /> View
                    </button>
                    <button
                        className="pcc-btn-remove"
                        onClick={() => type === "saved" ? removeSaved(item._id) : removeFav(item._id)}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );

    /* ── EMPTY STATE ── */
    const EmptyState = ({ icon, message, action }) => (
        <div className="profile-empty">
            <div className="profile-empty-icon">{icon}</div>
            <p>{message}</p>
            {action && (
                <button className="btn-edit-profile mt-2" onClick={() => navigate("/")}>
                    {action}
                </button>
            )}
        </div>
    );

    return (
        <div className="profile-page">
            <Container>

                {/* Cover */}
                <div className="profile-cover">
                    <div className="profile-avatar-wrap">
                        <div className="profile-avatar">{initials}</div>
                    </div>
                </div>

                {/* Name row */}
                <div className="profile-name-row">
                    <div>
                        <h3>{form.name}</h3>
                        <p>📍 {form.location || "Kerala, India"}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="profile-stats">
                    <div className="stat-card">
                        <div className="stat-value">{bookingHistory.length}</div>
                        <div className="stat-label">Trips</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{bookingHistory.filter(b => b.status === "confirmed").length}</div>
                        <div className="stat-label">Confirmed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{savedItems.length}</div>
                        <div className="stat-label">Saved</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">{favItems.length}</div>
                        <div className="stat-label">Favourites</div>
                    </div>
                </div>

                {/* Sidebar + Content */}
                <Row className="g-4">

                    {/* SIDEBAR */}
                    <Col lg={3} md={4}>
                        <div className="profile-card profile-sidebar">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.key}
                                    className={`sidebar-item ${activeTab === item.key ? "active" : ""} ${item.danger ? "danger" : ""}`}
                                    onClick={() => handleSidebarClick(item.key)}
                                >
                                    <span className="sidebar-icon">{item.icon}</span>
                                    <span className="sidebar-label">{item.label}</span>
                                    {!item.danger && <FaChevronRight className="sidebar-arrow" />}
                                </button>
                            ))}
                        </div>
                    </Col>

                    {/* CONTENT */}
                    <Col lg={9} md={8}>
                        <div className="profile-card">

                            {/* ── PERSONAL INFO ── */}
                            {activeTab === "info" && (
                                <>
                                    <div className="profile-panel-header">
                                        <div>
                                            <p className="profile-card-title">Personal Info</p>
                                            <hr className="profile-card-divider" />
                                        </div>
                                        {!editing && (
                                            <button className="btn-edit-profile" onClick={() => setEditing(true)}>
                                                <FaEdit /> Edit
                                            </button>
                                        )}
                                    </div>

                                    {!editing ? (
                                        <>
                                            {[
                                                { icon: <FaUser />, label: "Full Name", value: form.name },
                                                { icon: <FaEnvelope />, label: "Email", value: form.email },
                                                { icon: <FaPhone />, label: "Phone", value: form.phone || "—" },
                                                { icon: <FaMapMarkerAlt />, label: "Location", value: form.location || "—" },
                                            ].map((field, i) => (
                                                <div className="profile-field" key={i}>
                                                    <div className="profile-field-icon">{field.icon}</div>
                                                    <div>
                                                        <div className="profile-field-label">{field.label}</div>
                                                        <p className="profile-field-value">{field.value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ) : (
                                        <Form className="profile-form">
                                            <Row className="g-3">
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control name="name" value={form.name} onChange={handleChange} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control name="email" type="email" value={form.email} onChange={handleChange} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Phone</Form.Label>
                                                        <Form.Control name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label>Location</Form.Label>
                                                        <Form.Control name="location" value={form.location} onChange={handleChange} placeholder="City, State" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={12} className="d-flex gap-2 mt-2">
                                                    <button type="button" className="btn-save" onClick={handleSave}>
                                                        <FaSave style={{ marginRight: 6 }} /> Save Changes
                                                    </button>
                                                    <button type="button" className="btn-cancel" onClick={() => setEditing(false)}>
                                                        <FaTimes style={{ marginRight: 6 }} /> Cancel
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                </>
                            )}

                            {/* ── BOOKING HISTORY ── */}
                            {activeTab === "bookings" && (
                                <>
                                    <p className="profile-card-title">Booking History</p>
                                    <hr className="profile-card-divider" />
                                    {bookingHistory.length === 0 ? (
                                        <EmptyState icon={<FaHistory />} message="No bookings yet." />
                                    ) : (
                                        <div style={{ overflowX: "auto" }}>
                                            <table className="profile-table">
                                                <thead>
                                                    <tr>
                                                        <th>Booking ID</th>
                                                        <th>Destination</th>
                                                        <th>Date</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bookingHistory.map((b) => (
                                                        <tr key={b.id}>
                                                            <td style={{ fontWeight: 600, color: "var(--teal)" }}>{b.id}</td>
                                                            <td>{b.destination}</td>
                                                            <td>{b.date}</td>
                                                            <td style={{ fontWeight: 700 }}>{b.amount}</td>
                                                            <td>
                                                                <span className={`booking-status ${statusClass[b.status]}`}>
                                                                    {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* ── SAVED ── */}
                            {activeTab === "saved" && (
                                <>
                                    <p className="profile-card-title">Saved Destinations</p>
                                    <hr className="profile-card-divider" />
                                    {savedItems.length === 0 ? (
                                        <EmptyState
                                            icon={<FaBookmark />}
                                            message="No saved destinations yet."
                                            action="Browse Destinations"
                                        />
                                    ) : (
                                        <Row className="g-3">
                                            {savedItems.map((item) => (
                                                <Col md={6} lg={4} key={item._id}>
                                                    <CollectionCard item={item} type="saved" />
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                </>
                            )}

                            {/* ── FAVOURITES ── */}
                            {activeTab === "favourites" && (
                                <>
                                    <p className="profile-card-title">Favourite Destinations</p>
                                    <hr className="profile-card-divider" />
                                    {favItems.length === 0 ? (
                                        <EmptyState
                                            icon={<FaHeart />}
                                            message="No favourite destinations yet."
                                            action="Browse Destinations"
                                        />
                                    ) : (
                                        <Row className="g-3">
                                            {favItems.map((item) => (
                                                <Col md={6} lg={4} key={item._id}>
                                                    <CollectionCard item={item} type="favourites" />
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                </>
                            )}

                        </div>
                    </Col>
                </Row>
            </Container>

            {/* LOGOUT CONFIRMATION MODAL */}
            <Modal show={showLogout} onHide={() => setShowLogout(false)} centered>
                <Modal.Header closeButton style={{ borderBottom: "1px solid #ede9df" }}>
                    <Modal.Title style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}>
                        Confirm Logout
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "24px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    Are you sure you want to log out of your Rafco Travels account?
                </Modal.Body>
                <Modal.Footer style={{ borderTop: "1px solid #ede9df", gap: "10px" }}>
                    <button className="btn-cancel" onClick={() => setShowLogout(false)}>
                        Stay Logged In
                    </button>
                    <button
                        className="btn-save"
                        style={{ background: "#c0391a !important" }}
                        onClick={confirmLogout}
                    >
                        <FaSignOutAlt style={{ marginRight: 6 }} /> Yes, Logout
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;