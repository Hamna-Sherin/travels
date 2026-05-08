// import { useEffect, useState } from "react";
// import { Table, Button, Spinner, Form, Badge } from "react-bootstrap";

// const API = "https://travels-bp73.onrender.com";

// export default function AdminPackageBookings() {
//     const [bookings, setBookings] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     const fetchBookings = async () => {
//         try {
//             const res = await fetch(`${API}/package-bookings`);
//             const data = await res.json();
//             setBookings(data);
//         } catch (err) {
//             console.log(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleStatusChange = async (id, status) => {
//         await fetch(`${API}/package-bookings/${id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ status })
//         });

//         setBookings(prev =>
//             prev.map(b => b._id === id ? { ...b, status } : b)
//         );
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm("Delete this booking?")) return;

//         await fetch(`${API}/package-bookings/${id}`, {
//             method: "DELETE"
//         });

//         setBookings(prev => prev.filter(b => b._id !== id));
//     };

//     if (loading) {
//         return (
//             <div className="text-center mt-5">
//                 <Spinner />
//             </div>
//         );
//     }

//     return (
//         <div style={{ padding: "30px" }}>
//             <h2 className="mb-4">Package Bookings</h2>

//             <Table bordered hover responsive>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Package</th>
//                         <th>Guests</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {bookings.map((b, i) => (
//                         <tr key={b._id}>
//                             <td>{i + 1}</td>
//                             <td>{b.name}</td>
//                             <td>{b.email}</td>
//                             <td>{b.phone}</td>
//                             <td>
//                                 <Badge bg="info">{b.packageName}</Badge>
//                             </td>
//                             <td>{b.guests}</td>
//                             <td>{b.date?.substring(0, 10)}</td>

//                             <td>
//                                 <Form.Select
//                                     value={b.status}
//                                     onChange={(e) =>
//                                         handleStatusChange(b._id, e.target.value)
//                                     }
//                                 >
//                                     <option value="pending">Pending</option>
//                                     <option value="confirmed">Confirmed</option>
//                                     <option value="cancelled">Cancelled</option>
//                                 </Form.Select>
//                             </td>

//                             <td>
//                                 <Button
//                                     variant="danger"
//                                     size="sm"
//                                     onClick={() => handleDelete(b._id)}
//                                 >
//                                     Delete
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// }


import { useEffect, useState } from "react";
import { Table, Button, Spinner, Form, Badge, Card, Row, Col, Modal, InputGroup } from "react-bootstrap";
import { FiSearch, FiTrash2 } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";

const API = "https://travels-bp73.onrender.com";

const STATUS_COLORS = {
    pending: { bg: "#fef9c3", text: "#854d0e" },
    confirmed: { bg: "#dcfce7", text: "#15803d" },
    cancelled: { bg: "#fee2e2", text: "#dc2626" },
};

const STATUSES = ["pending", "confirmed", "cancelled"];
const PER_PAGE = 8;

/* ── Stat Card ── */
const StatCard = ({ label, value, color, bg }) => (
    <Card className="border shadow-none h-100">
        <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
            <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: "42px", height: "42px", background: bg }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{value}</span>
            </div>
            <span className="text-uppercase fw-semibold text-muted"
                style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                {label}
            </span>
        </Card.Body>
    </Card>
);

/* ── Delete Modal ── */
const DeleteModal = ({ onConfirm, onCancel }) => (
    <Modal show onHide={onCancel} centered size="sm">
        <Modal.Body className="text-center py-4 px-4">
            <div className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "52px", height: "52px" }}>
                <BsExclamationTriangle size={22} className="text-danger" />
            </div>
            <h5 className="fw-bold mb-2">Delete Booking?</h5>
            <p className="text-muted mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                This action cannot be undone. The booking will be permanently removed.
            </p>
            <div className="d-flex gap-2 justify-content-center">
                <Button variant="outline-secondary" size="sm" onClick={onCancel}>Cancel</Button>
                <Button variant="danger" size="sm" className="fw-bold" onClick={onConfirm}>
                    <FiTrash2 className="me-1" /> Yes, Delete
                </Button>
            </div>
        </Modal.Body>
    </Modal>
);

/* ── Main Component ── */
const AdminPackageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilter] = useState("all");
    const [page, setPage] = useState(1);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await fetch(`${API}/package-bookings`);
            const data = await res.json();
            setBookings(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, status) => {
        await fetch(`${API}/package-bookings/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status })
        });
        setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b));
    };

    const handleDelete = async (id) => {
        await fetch(`${API}/package-bookings/${id}`, { method: "DELETE" });
        setBookings(prev => prev.filter(b => b._id !== id));
        setDeleteId(null);
    };

    /* Filter + search */
    const filtered = bookings.filter((b) => {
        const matchSearch =
            search === "" ||
            `${b.name} ${b.email} ${b.phone} ${b.packageName}`
                .toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === "all" || b.status === filterStatus;
        return matchSearch && matchStatus;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const counts = STATUSES.reduce(
        (acc, s) => ({ ...acc, [s]: bookings.filter(b => b.status === s).length }),
        {}
    );

    return (
        <>
            <style>{`
                .pkg-row:hover td  { background: #f0fdf4 !important; cursor: default; }
                .status-pill       { font-size: 0.75rem !important; padding: 4px 8px !important; border-radius: 99px !important; border: none !important; font-weight: 700 !important; outline: none !important; }
                .search-inp:focus  { box-shadow: none !important; border-color: #1a6b5e !important; }
                .pg-btn:focus      { box-shadow: none !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <h2 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Package Bookings</h2>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <InputGroup size="sm" style={{ width: "220px" }}>
                            <InputGroup.Text className="bg-white">
                                <FiSearch size={13} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                className="search-inp"
                                placeholder="Search bookings..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                style={{ fontSize: "0.85rem" }}
                            />
                        </InputGroup>

                        <Form.Select
                            size="sm"
                            value={filterStatus}
                            onChange={(e) => { setFilter(e.target.value); setPage(1); }}
                            style={{ width: "auto", fontSize: "0.85rem", cursor: "pointer" }}
                        >
                            <option value="all">All Statuses</option>
                            {STATUSES.map(s => (
                                <option key={s} value={s}>
                                    {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                </div>

                {/* Stat Cards */}
                <Row className="g-3 mb-4">
                    {[
                        { label: "Total", value: bookings.length, color: "#6366f1", bg: "#eef2ff" },
                        { label: "Pending", value: counts.pending || 0, color: "#d97706", bg: "#fef9c3" },
                        { label: "Confirmed", value: counts.confirmed || 0, color: "#16a34a", bg: "#dcfce7" },
                        { label: "Cancelled", value: counts.cancelled || 0, color: "#dc2626", bg: "#fee2e2" },
                    ].map(s => (
                        <Col xs={6} md={3} key={s.label}>
                            <StatCard {...s} />
                        </Col>
                    ))}
                </Row>

                {/* Table */}
                <Card className="border shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ overflowX: "auto" }}>
                        <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                            <thead className="table-light">
                                <tr>
                                    {["#", "Name", "Email", "Phone", "Package", "Guests", "Date", "Status", "Action"].map(h => (
                                        <th key={h} className="fw-bold"
                                            style={{ padding: "13px 14px", fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={9} className="text-center py-5 text-muted">
                                            <Spinner animation="border" size="sm" className="me-2" /> Loading…
                                        </td>
                                    </tr>
                                ) : paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="text-center py-5 text-muted"
                                            style={{ fontSize: "0.9rem" }}>
                                            No bookings found.
                                        </td>
                                    </tr>
                                ) : paginated.map((b, idx) => {
                                    const sc = STATUS_COLORS[b.status] || STATUS_COLORS.pending;
                                    return (
                                        <tr key={b._id} className="pkg-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

                                            <td className="text-muted fw-semibold"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {(page - 1) * PER_PAGE + idx + 1}
                                            </td>

                                            <td className="fw-semibold"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                                                {b.name}
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {b.email}
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                                                {b.phone}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Badge pill style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 600, fontSize: "0.75rem" }}>
                                                    {b.packageName}
                                                </Badge>
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {b.guests}
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", fontSize: "0.78rem", whiteSpace: "nowrap", verticalAlign: "middle" }}>
                                                {b.date?.substring(0, 10) || "—"}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Form.Select
                                                    className="status-pill"
                                                    value={b.status}
                                                    onChange={(e) => handleStatusChange(b._id, e.target.value)}
                                                    style={{ background: sc.bg, color: sc.text, width: "auto" }}
                                                >
                                                    {STATUSES.map(s => (
                                                        <option key={s} value={s}>
                                                            {s.charAt(0).toUpperCase() + s.slice(1)}
                                                        </option>
                                                    ))}
                                                </Form.Select>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Button size="sm" variant="danger"
                                                    className="fw-bold d-flex align-items-center gap-1"
                                                    style={{ fontSize: "0.78rem" }}
                                                    onClick={() => setDeleteId(b._id)}>
                                                    <FiTrash2 size={12} /> Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3 bg-white">
                        <Button className="pg-btn" size="sm"
                            variant={page === 1 ? "outline-secondary" : "primary"}
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(1, p - 1))}>
                            ← Prev
                        </Button>
                        <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                            Page {page} of {totalPages} · {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                        </span>
                        <Button className="pg-btn" size="sm"
                            variant={page === totalPages ? "outline-secondary" : "primary"}
                            disabled={page === totalPages}
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}>
                            Next →
                        </Button>
                    </Card.Footer>
                </Card>

            </div>

            {deleteId && (
                <DeleteModal
                    onConfirm={() => handleDelete(deleteId)}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </>
    );
};

export default AdminPackageBookings;