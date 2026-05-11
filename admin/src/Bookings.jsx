// // // import axios from "axios";
// // // import React, { useEffect, useState } from "react";
// // // import { Table } from "react-bootstrap";

// // // const AdminBookings = () => {
// // //   const [bookings, setBookings] = useState([]);

// // //   useEffect(() => {
// // //     axios.get("https://travels-bp73.onrender.com/bookings")
// // //       .then(res => setBookings(res.data))
// // //       .catch(err => console.log(err));
// // //   }, []);

// // //   const handleStatusChange = (id, status) => {
// // //     axios.put(`https://travels-bp73.onrender.com/bookings/${id}`, { status })
// // //       .then(() => {
// // //         setBookings(prev =>
// // //           prev.map(b =>
// // //             b._id === id ? { ...b, status } : b
// // //           )
// // //         );
// // //       })
// // //       .catch(err => console.log(err));
// // //   };

// // //   return (
// // //     <div className="container mt-5">
// // //       <h2 className="text-center mb-4">Taxi Bookings</h2>

// // //       <Table striped bordered hover responsive>
// // //         <thead>
// // //           <tr>
// // //             <th>#</th>
// // //             <th>Name</th>
// // //             <th>Phone</th>
// // //             <th>Pickup</th>
// // //             <th>Drop</th>
// // //             <th>Date</th>
// // //             <th>Time</th>
// // //             <th>Vehicle</th>
// // //             <th>Status</th>
// // //           </tr>
// // //         </thead>

// // //         <tbody>
// // //           {bookings.map((b, index) => (
// // //             <tr key={b._id}>
// // //               <td>{index + 1}</td>
// // //               <td>{b.name}</td>
// // //               <td>{b.phone}</td>

// // //               <td>
// // //                 {b.pickupStreet}, {b.pickupCity}
// // //               </td>

// // //               <td>
// // //                 {b.dropStreet}, {b.dropCity}
// // //               </td>

// // //               <td>{b.pickupDate}</td>
// // //               <td>{b.pickupTime}</td>
// // //               <td>{b.vehicleType}</td>
// // //               <td>
// // //                 <select
// // //                   value={b.status || "Pending"}
// // //                   onChange={(e) => handleStatusChange(b._id, e.target.value)}
// // //                   className={`form-select ${b.status === "Confirm" ? "bg-success text-white" :
// // //                     b.status === "Rejected" ? "bg-danger text-white" :
// // //                       b.status === "Cancel" ? "bg-secondary text-white" : ""
// // //                     }`}
// // //                 >
// // //                   <option value="Pending">Pending</option>
// // //                   <option value="Confirm">Confirm</option>
// // //                   <option value="Rejected">Rejected</option>
// // //                   <option value="Cancel">Cancel</option>
// // //                 </select>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </Table>
// // //     </div>
// // //   );
// // // };

// // // export default AdminBookings;

// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import {
// //   Table, Badge, Button, Form, InputGroup,
// //   Modal, Spinner, Row, Col, Card,
// // } from "react-bootstrap";
// // import { FiSearch } from "react-icons/fi";

// // /* ─────────────────────────────────────────────────────────────
// //    AdminTaxiBookings.jsx
// //    Matches the Package Bookings admin page design from screenshot.
// //    Drop inside your existing admin layout (sidebar already present).
// // ───────────────────────────────────────────────────────────── */

// // const C = {
// //   activeNav: "#2563eb",
// //   white: "#ffffff",
// //   bodyBg: "#f4f6f9",
// //   textDark: "#1a1a2e",
// //   textMid: "#4a5568",
// //   textMuted: "#9aa5b4",
// //   border: "#e2e8f0",
// //   btnRed: "#dc2626",
// // };

// // const STATUS_META = {
// //   pending: { bg: "#fef9c3", text: "#854d0e" },
// //   confirmed: { bg: "#dcfce7", text: "#15803d" },
// //   cancelled: { bg: "#fee2e2", text: "#dc2626" },
// //   // cancelled: { bg: "#f1f5f9", text: "#64748b" },
// // };

// // // const STATUSES = ["Pending", "Confirm", "Rejected", "Cancel"];
// // const STATUSES = ["pending", "confirmed",  "cancelled"];
// // const PER_PAGE = 8;

// // function formatDate(val) {
// //   if (!val) return "—";
// //   // accepts "YYYY-MM-DD" or ISO string
// //   const d = new Date(val);
// //   return isNaN(d)
// //     ? val
// //     : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// // }

// // /* ── Stat card ── */
// // function StatCard({ label, value, color, bg }) {
// //   return (
// //     <Card style={{ border: `1px solid ${C.border}`, borderRadius: "10px", boxShadow: "none" }}>
// //       <Card.Body className="d-flex align-items-center gap-3" style={{ padding: "16px 20px" }}>
// //         <div style={{
// //           width: "44px", height: "44px", borderRadius: "8px",
// //           background: bg, display: "flex", alignItems: "center",
// //           justifyContent: "center", flexShrink: 0,
// //         }}>
// //           <span style={{ fontSize: "1.2rem", fontWeight: 700, color }}>{value}</span>
// //         </div>
// //         <span style={{
// //           fontSize: "0.75rem", fontWeight: 600,
// //           color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.1em",
// //         }}>
// //           {label}
// //         </span>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// // /* ── Delete confirm modal ── */
// // function DeleteModal({ booking, onConfirm, onCancel }) {
// //   return (
// //     <Modal show onHide={onCancel} centered size="sm">
// //       <Modal.Body className="text-center" style={{ padding: "32px 24px" }}>
// //         <div style={{
// //           width: "52px", height: "52px", borderRadius: "50%",
// //           background: "#fee2e2", color: C.btnRed,
// //           display: "flex", alignItems: "center", justifyContent: "center",
// //           margin: "0 auto 16px", fontSize: "1.4rem",
// //         }}>⚠</div>
// //         <h5 style={{ fontWeight: 700, color: C.textDark, marginBottom: "6px" }}>Delete Booking?</h5>
// //         <p style={{ fontSize: "0.85rem", color: C.textMid, marginBottom: "24px", lineHeight: 1.6 }}>
// //           {booking?.name}'s booking will be permanently removed.
// //         </p>
// //         <div className="d-flex gap-2 justify-content-center">
// //           <Button variant="outline-secondary" size="sm" onClick={onCancel}>Cancel</Button>
// //           <Button size="sm" onClick={onConfirm}
// //             style={{ background: C.btnRed, border: "none", fontWeight: 700 }}>
// //             Yes, Delete
// //           </Button>
// //         </div>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // }

// // /* ════════════════════════════════════════════
// //    MAIN COMPONENT
// // ════════════════════════════════════════════ */
// // const AdminTaxiBookings = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [search, setSearch] = useState("");
// //   const [filterStatus, setFilter] = useState("all");
// //   const [page, setPage] = useState(1);
// //   const [deleteTarget, setDeleteTarget] = useState(null);

// //   /* ── Fetch ── */
// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get("https://travels-bp73.onrender.com/bookings")
// //       .then((res) => setBookings(res.data))
// //       .catch((err) => console.log(err))
// //       .finally(() => setLoading(false));
// //   }, []);

// //   /* ── Status update ── */
// //   function handleStatusChange(id, status) {
// //     axios
// //       .put(`https://travels-bp73.onrender.com/bookings/${id}`, { status })
// //       .then(() =>
// //         setBookings((prev) => prev.map((b) => (b._id === id ? { ...b, status } : b)))
// //       )
// //       .catch((err) => console.log(err));
// //   }

// //   /* ── Delete ── */
// //   function handleDelete(id) {
// //     axios
// //       .delete(`https://travels-bp73.onrender.com/booking/${id}`)
// //       .then(() => setBookings((prev) => prev.filter((b) => b._id !== id)))
// //       .catch((err) => console.log(err))
// //       .finally(() => setDeleteTarget(null));
// //   }

// //   /* ── Filter + search ── */
// //   const filtered = bookings.filter((b) => {
// //     const matchSearch =
// //       search === "" ||
// //       `${b.name} ${b.phone} ${b.vehicleType} ${b.pickupCity} ${b.dropCity}`
// //         .toLowerCase()
// //         .includes(search.toLowerCase());
// //     const matchStatus =
// //       filterStatus === "all" || (b.status || "Pending") === filterStatus;
// //     return matchSearch && matchStatus;
// //   });

// //   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
// //   const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

// //   /* ── Counts ── */
// //   const counts = STATUSES.reduce(
// //     (acc, s) => ({ ...acc, [s]: bookings.filter((b) => (b.status || "pending") === s).length }),
// //     {}
// //   );

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
// //         .tbk-wrap, .tbk-wrap * { font-family: 'DM Sans', sans-serif !important; }
// //         .tbk-row:hover td  { background: #eff6ff !important; }
// //         .status-pill       { font-size: 0.75rem !important; padding: 4px 8px !important; border-radius: 99px !important; border: none !important; font-weight: 700 !important; outline: none !important; width: auto !important; }
// //         .pg-btn            { font-weight: 600 !important; border: none !important; font-size: 0.85rem !important; }
// //         .pg-btn:focus, .search-inp:focus { box-shadow: none !important; }
// //         .search-inp:focus  { border-color: #2563eb !important; }
// //         ::-webkit-scrollbar       { width: 5px; height: 5px; }
// //         ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
// //       `}</style>

// //       <div className="tbk-wrap" style={{ background: C.bodyBg, minHeight: "100vh", padding: "28px 32px" }}>

// //         {/* ── Header ── */}
// //         <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
// //           <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: C.textDark, margin: 0 }}>
// //             Taxi Bookings
// //           </h2>

// //           <div className="d-flex align-items-center gap-2 flex-wrap">
// //             <InputGroup size="sm" style={{ width: "220px" }}>
// //               <InputGroup.Text className="bg-white">
// //                 <FiSearch size={13} className="text-muted" />
// //               </InputGroup.Text>
// //               <Form.Control
// //                 className="search-inp"
// //                 placeholder="Search bookings..."
// //                 value={search}
// //                 onChange={(e) => { setSearch(e.target.value); setPage(1); }}
// //                 style={{ fontSize: "0.85rem" }}
// //               />
// //             </InputGroup>

// //             <Form.Select
// //               size="sm"
// //               value={filterStatus}
// //               onChange={(e) => { setFilter(e.target.value); setPage(1); }}
// //               style={{ width: "auto", fontSize: "0.85rem", cursor: "pointer" }}
// //             >
// //               <option value="all">All Statuses</option>
// //               {STATUSES.map(s => (
// //                 <option key={s} value={s}>
// //                   {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
// //                 </option>
// //               ))}
// //             </Form.Select>
// //           </div>
// //         </div>

// //         {/* ── Stat cards ── */}
// //         <Row className="g-3 mb-4">
// //           {[
// //             { label: "Total", value: bookings.length, color: "#6366f1", bg: "#eef2ff" },
// //             { label: "Pending", value: counts.pending || 0, color: "#d97706", bg: "#fef9c3" },
// //             { label: "Confirmed", value: counts.Confirm || 0, color: "#16a34a", bg: "#dcfce7" },
// //             { label: "Cancelled", value: (counts.Rejected || 0) + (counts.Cancel || 0), color: "#dc2626", bg: "#fee2e2" },
// //           ].map((s) => (
// //             <Col xs={6} md={3} key={s.label}>
// //               <StatCard {...s} />
// //             </Col>
// //           ))}
// //         </Row>

// //         {/* ── Table card ── */}
// //         <Card style={{ border: `1px solid ${C.border}`, borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
// //           <div style={{ overflowX: "auto" }}>
// //             <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
// //               <thead style={{ background: "#f8fafc", borderBottom: `2px solid ${C.border}` }}>
// //                 <tr>
// //                   {["#", "Name", "Phone", "Pickup", "Drop", "Date", "Time", "Vehicle", "Status", "Action"].map((h) => (
// //                     <th key={h} style={{ padding: "13px 14px", fontWeight: 700, color: C.textDark, fontSize: "0.82rem", whiteSpace: "nowrap", verticalAlign: "middle" }}>
// //                       {h}
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {loading ? (
// //                   <tr>
// //                     <td colSpan={10} className="text-center py-5" style={{ color: C.textMuted }}>
// //                       <Spinner animation="border" size="sm" className="me-2" style={{ color: "#1a6b5e" }} />
// //                       Loading…
// //                     </td>
// //                   </tr>
// //                 ) : paginated.length === 0 ? (
// //                   <tr>
// //                     <td colSpan={10} className="text-center py-5" style={{ color: C.textMuted, fontSize: "0.9rem" }}>
// //                       No bookings found.
// //                     </td>
// //                   </tr>
// //                 ) : paginated.map((b, idx) => {
// //                   const status = b.status || "pending";
// //                   const sc = STATUS_META[status] || STATUS_META.pending;
// //                   const rowNum = (page - 1) * PER_PAGE + idx + 1;

// //                   return (
// //                     <tr
// //                       key={b._id}
// //                       className="tbk-row"
// //                       style={{ borderBottom: `1px solid ${C.border}`, background: idx % 2 === 1 ? "#fafbfc" : C.white }}
// //                     >
// //                       <td style={{ padding: "13px 14px", color: C.textMuted, fontWeight: 600, verticalAlign: "middle" }}>{rowNum}</td>

// //                       <td style={{ padding: "13px 14px", fontWeight: 600, color: C.textDark, whiteSpace: "nowrap", verticalAlign: "middle" }}>
// //                         {b.name}
// //                       </td>

// //                       <td style={{ padding: "13px 14px", color: C.textMid, whiteSpace: "nowrap", verticalAlign: "middle" }}>
// //                         {b.phone}
// //                       </td>

// //                       {/* Pickup */}
// //                       <td style={{ padding: "13px 14px", verticalAlign: "middle", maxWidth: "160px" }}>
// //                         <span style={{ fontSize: "0.85rem", color: C.textDark, display: "block", fontWeight: 500 }}>
// //                           {b.pickupCity}
// //                         </span>
// //                         {b.pickupStreet && (
// //                           <span style={{ fontSize: "0.75rem", color: C.textMuted }}>{b.pickupStreet}</span>
// //                         )}
// //                       </td>

// //                       {/* Drop */}
// //                       <td style={{ padding: "13px 14px", verticalAlign: "middle", maxWidth: "160px" }}>
// //                         <span style={{ fontSize: "0.85rem", color: C.textDark, display: "block", fontWeight: 500 }}>
// //                           {b.dropCity}
// //                         </span>
// //                         {b.dropStreet && (
// //                           <span style={{ fontSize: "0.75rem", color: C.textMuted }}>{b.dropStreet}</span>
// //                         )}
// //                       </td>

// //                       <td style={{ padding: "13px 14px", color: C.textMid, whiteSpace: "nowrap", verticalAlign: "middle" }}>
// //                         {formatDate(b.pickupDate)}
// //                       </td>

// //                       <td style={{ padding: "13px 14px", color: C.textMid, whiteSpace: "nowrap", verticalAlign: "middle" }}>
// //                         {b.pickupTime || "—"}
// //                       </td>

// //                       {/* Vehicle badge */}
// //                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
// //                         <Badge pill style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 600, fontSize: "0.75rem" }}>
// //                           {b.vehicleType}
// //                         </Badge>
// //                       </td>

// //                       {/* Inline status dropdown */}
// //                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
// //                         <Form.Select
// //                           className="status-pill"
// //                           value={status}
// //                           onChange={(e) => handleStatusChange(b._id, e.target.value)}
// //                           style={{ background: sc.bg, color: sc.text }}
// //                         >
// //                           {STATUSES.map((s) => (
// //                             <option key={s} value={s}>{s}</option>
// //                           ))}
// //                         </Form.Select>
// //                       </td>

// //                       {/* Delete */}
// //                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
// //                         <Button
// //                           size="sm"
// //                           onClick={() => setDeleteTarget(b)}
// //                           style={{ background: C.btnRed, border: "none", fontSize: "0.78rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "5px" }}
// //                         >
// //                           <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
// //                             <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
// //                           </svg>
// //                           Delete
// //                         </Button>
// //                       </td>
// //                     </tr>
// //                   );
// //                 })}
// //               </tbody>
// //             </Table>
// //           </div>

// //           {/* ── Pagination ── */}
// //           <Card.Footer
// //             className="d-flex align-items-center justify-content-center gap-3 py-3"
// //             style={{ background: C.white, borderTop: `1px solid ${C.border}` }}
// //           >
// //             <Button
// //               className="pg-btn" size="sm"
// //               disabled={page === 1}
// //               onClick={() => setPage((p) => Math.max(1, p - 1))}
// //               style={{ background: page === 1 ? "#e2e8f0" : C.activeNav, color: page === 1 ? C.textMuted : C.white }}
// //             >← Prev</Button>

// //             <span style={{ fontSize: "0.85rem", color: C.textMid, fontWeight: 500 }}>
// //               Page {page} of {totalPages}&nbsp;·&nbsp;{filtered.length} result{filtered.length !== 1 ? "s" : ""}
// //             </span>

// //             <Button
// //               className="pg-btn" size="sm"
// //               disabled={page === totalPages}
// //               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //               style={{ background: page === totalPages ? "#e2e8f0" : C.activeNav, color: page === totalPages ? C.textMuted : C.white }}
// //             >Next →</Button>
// //           </Card.Footer>
// //         </Card>

// //       </div>

// //       {/* Delete confirm modal */}
// //       {deleteTarget && (
// //         <DeleteModal
// //           booking={deleteTarget}
// //           onConfirm={() => handleDelete(deleteTarget._id)}
// //           onCancel={() => setDeleteTarget(null)}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default AdminTaxiBookings;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   Table, Badge, Button, Form, InputGroup,
//   Modal, Spinner, Row, Col, Card,
// } from "react-bootstrap";
// import { FiSearch } from "react-icons/fi";

// const STATUS = {
//   PENDING: "pending",
//   CONFIRMED: "confirmed",
//   CANCELLED: "cancelled",
// };

// const STATUS_META = {
//   pending: { bg: "#fef9c3", text: "#854d0e" },
//   confirmed: { bg: "#dcfce7", text: "#15803d" },
//   cancelled: { bg: "#fee2e2", text: "#dc2626" },
// };

// const STATUSES = Object.values(STATUS);
// const PER_PAGE = 8;

// function formatDate(val) {
//   if (!val) return "—";
//   const d = new Date(val);
//   return isNaN(d)
//     ? val
//     : d.toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       });
// }

// /* ── Delete Modal ── */
// function DeleteModal({ booking, onConfirm, onCancel }) {
//   return (
//     <Modal show onHide={onCancel} centered size="sm">
//       <Modal.Body className="text-center p-4">
//         <h5>Delete Booking?</h5>
//         <p>{booking?.name}'s booking will be removed.</p>
//         <div className="d-flex gap-2 justify-content-center">
//           <Button variant="secondary" size="sm" onClick={onCancel}>
//             Cancel
//           </Button>
//           <Button size="sm" variant="danger" onClick={onConfirm}>
//             Delete
//           </Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// const AdminTaxiBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilter] = useState("all");
//   const [page, setPage] = useState(1);
//   const [deleteTarget, setDeleteTarget] = useState(null);

//   /* ── Fetch ── */
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://travels-bp73.onrender.com/bookings")
//       .then((res) => setBookings(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));
//   }, []);

//   /* ── Status update ── */
//   const handleStatusChange = (id, status) => {
//     axios
//       .put(`https://travels-bp73.onrender.com/bookings/${id}`, { status })
//       .then(() => {
//         setBookings((prev) =>
//           prev.map((b) =>
//             b._id === id ? { ...b, status } : b
//           )
//         );
//       })
//       .catch(console.log);
//   };

//   /* ── Delete ── */
//   const handleDelete = (id) => {
//     axios
//       .delete(`https://travels-bp73.onrender.com/booking/${id}`)
//       .then(() => {
//         setBookings((prev) => prev.filter((b) => b._id !== id));
//       })
//       .catch(console.log)
//       .finally(() => setDeleteTarget(null));
//   };

//   /* ── Filter ── */
//   const filtered = bookings.filter((b) => {
//     const text =
//       `${b.name} ${b.phone} ${b.vehicleType} ${b.pickupCity} ${b.dropCity}`.toLowerCase();

//     const matchSearch =
//       search === "" || text.includes(search.toLowerCase());

//     const matchStatus =
//       filterStatus === "all" ||
//       (b.status || STATUS.PENDING) === filterStatus;

//     return matchSearch && matchStatus;
//   });

//   const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
//   const paginated = filtered.slice(
//     (page - 1) * PER_PAGE,
//     page * PER_PAGE
//   );

//   /* ── Counts ── */
//   const counts = {
//     pending: bookings.filter(
//       (b) => (b.status || STATUS.PENDING) === STATUS.PENDING
//     ).length,
//     confirmed: bookings.filter(
//       (b) => b.status === STATUS.CONFIRMED
//     ).length,
//     cancelled: bookings.filter(
//       (b) => b.status === STATUS.CANCELLED
//     ).length,
//   };

//   return (
//     <div className="p-4">

//       <h3 className="mb-4">Taxi Bookings</h3>

//       {/* SEARCH + FILTER */}
//       <div className="d-flex gap-2 mb-3">
//         <InputGroup style={{ maxWidth: 250 }}>
//           <InputGroup.Text><FiSearch /></InputGroup.Text>
//           <Form.Control
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </InputGroup>

//         <Form.Select
//           value={filterStatus}
//           onChange={(e) => setFilter(e.target.value)}
//           style={{ width: 180 }}
//         >
//           <option value="all">All</option>
//           {STATUSES.map((s) => (
//             <option key={s} value={s}>
//               {s} ({counts[s]})
//             </option>
//           ))}
//         </Form.Select>
//       </div>

//       {/* STATS */}
//       <Row className="mb-4">
//         <Col><Card body>Total: {bookings.length}</Card></Col>
//         <Col><Card body>Pending: {counts.pending}</Card></Col>
//         <Col><Card body>Confirmed: {counts.confirmed}</Card></Col>
//         <Col><Card body>Cancelled: {counts.cancelled}</Card></Col>
//       </Row>

//       {/* TABLE */}
//       <Table bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Pickup</th>
//             <th>Drop</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Vehicle</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={10} className="text-center">
//                 <Spinner />
//               </td>
//             </tr>
//           ) : paginated.length === 0 ? (
//             <tr>
//               <td colSpan={10} className="text-center">
//                 No data
//               </td>
//             </tr>
//           ) : (
//             paginated.map((b, i) => {
//               const status = b.status || STATUS.PENDING;
//               const sc = STATUS_META[status];

//               return (
//                 <tr key={b._id}>
//                   <td>{i + 1}</td>
//                   <td>{b.name}</td>
//                   <td>{b.phone}</td>
//                   <td>{b.pickupCity}</td>
//                   <td>{b.dropCity}</td>
//                   <td>{formatDate(b.pickupDate)}</td>
//                   <td>{b.pickupTime}</td>

//                   <td>
//                     <Badge bg="info">{b.vehicleType}</Badge>
//                   </td>

//                   <td>
//                     <Form.Select
//                       value={status}
//                       onChange={(e) =>
//                         handleStatusChange(b._id, e.target.value)
//                       }
//                       style={{
//                         background: sc.bg,
//                         color: sc.text,
//                       }}
//                     >
//                       {STATUSES.map((s) => (
//                         <option key={s} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </Form.Select>
//                   </td>

//                   <td>
//                     <Button
//                       size="sm"
//                       variant="danger"
//                       onClick={() => setDeleteTarget(b)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </Table>

//       {/* PAGINATION */}
//       <div className="d-flex justify-content-center gap-2">
//         <Button
//           disabled={page === 1}
//           onClick={() => setPage(page - 1)}
//         >
//           Prev
//         </Button>

//         <span>Page {page} / {totalPages}</span>

//         <Button
//           disabled={page === totalPages}
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </Button>
//       </div>

//       {/* DELETE MODAL */}
//       {deleteTarget && (
//         <DeleteModal
//           booking={deleteTarget}
//           onConfirm={() => handleDelete(deleteTarget._id)}
//           onCancel={() => setDeleteTarget(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminTaxiBookings;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   Table, Badge, Button, Form, InputGroup,
//   Modal, Spinner, Row, Col, Card,
// } from "react-bootstrap";
// import { FiSearch } from "react-icons/fi";

// const C = {
//   activeNav: "#2563eb",
//   white: "#ffffff",
//   bodyBg: "#f4f6f9",
//   textDark: "#1a1a2e",
//   textMid: "#4a5568",
//   textMuted: "#9aa5b4",
//   border: "#e2e8f0",
//   btnRed: "#dc2626",
// };

// /* ✅ ONLY 3 STATUSES */
// const STATUS_META = {
//   pending: { bg: "#fef9c3", text: "#854d0e" },
//   confirmed: { bg: "#dcfce7", text: "#15803d" },
//   cancelled: { bg: "#fee2e2", text: "#dc2626" },
// };

// const STATUSES = ["pending", "confirmed", "cancelled"];
// const PER_PAGE = 8;

// function formatDate(val) {
//   if (!val) return "—";
//   const d = new Date(val);
//   return isNaN(d)
//     ? val
//     : d.toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       });
// }

// /* ── Delete Modal ── */
// function DeleteModal({ booking, onConfirm, onCancel }) {
//   return (
//     <Modal show onHide={onCancel} centered size="sm">
//       <Modal.Body className="text-center" style={{ padding: "32px 24px" }}>
//         <h5>Delete Booking?</h5>
//         <p>{booking?.name}'s booking will be removed.</p>
//         <div className="d-flex gap-2 justify-content-center">
//           <Button variant="outline-secondary" size="sm" onClick={onCancel}>
//             Cancel
//           </Button>
//           <Button
//             size="sm"
//             onClick={onConfirm}
//             style={{ background: C.btnRed, border: "none" }}
//           >
//             Delete
//           </Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// const AdminTaxiBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilter] = useState("all");
//   const [page, setPage] = useState(1);
//   const [deleteTarget, setDeleteTarget] = useState(null);

//   /* ── Fetch ── */
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://travels-bp73.onrender.com/bookings")
//       .then((res) => setBookings(res.data))
//       .catch(console.log)
//       .finally(() => setLoading(false));
//   }, []);

//   /* ── Status update ── */
//   function handleStatusChange(id, status) {
//     axios
//       .put(`https://travels-bp73.onrender.com/bookings/${id}`, { status })
//       .then(() =>
//         setBookings((prev) =>
//           prev.map((b) => (b._id === id ? { ...b, status } : b))
//         )
//       )
//       .catch(console.log);
//   }

//   /* ── Delete ── */
//   function handleDelete(id) {
//     axios
//       .delete(`https://travels-bp73.onrender.com/booking/${id}`)
//       .then(() =>
//         setBookings((prev) => prev.filter((b) => b._id !== id))
//       )
//       .catch(console.log)
//       .finally(() => setDeleteTarget(null));
//   }

//   /* ── Filter + search ── */
//   const filtered = bookings.filter((b) => {
//     const text = `${b.name} ${b.phone} ${b.vehicleType} ${b.pickupCity} ${b.dropCity}`.toLowerCase();

//     const matchSearch =
//       search === "" || text.includes(search.toLowerCase());

//     const normalizedStatus = (b.status || "pending").toLowerCase();

//     const matchStatus =
//       filterStatus === "all" || normalizedStatus === filterStatus;

//     return matchSearch && matchStatus;
//   });

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   const paginated = filtered.slice(
//     (page - 1) * PER_PAGE,
//     page * PER_PAGE
//   );

//   /* ── Counts (FIXED) ── */
//   const counts = {
//     pending: bookings.filter(
//       (b) => (b.status || "pending").toLowerCase() === "pending"
//     ).length,
//     confirmed: bookings.filter(
//       (b) => (b.status || "").toLowerCase() === "confirmed"
//     ).length,
//     cancelled: bookings.filter(
//       (b) => (b.status || "").toLowerCase() === "cancelled"
//     ).length,
//   };

//   return (
//     <>
//       <div
//         className="tbk-wrap"
//         style={{
//           background: C.bodyBg,
//           minHeight: "100vh",
//           padding: "28px 32px",
//         }}
//       >
//         {/* HEADER */}
//         <div className="d-flex justify-content-between mb-4">
//           <h2 style={{ fontWeight: 700 }}>Taxi Bookings</h2>

//           <div className="d-flex gap-2">
//             <InputGroup size="sm">
//               <InputGroup.Text>
//                 <FiSearch />
//               </InputGroup.Text>
//               <Form.Control
//                 placeholder="Search..."
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setPage(1);
//                 }}
//               />
//             </InputGroup>

//             <Form.Select
//               size="sm"
//               value={filterStatus}
//               onChange={(e) => {
//                 setFilter(e.target.value);
//                 setPage(1);
//               }}
//             >
//               <option value="all">All</option>
//               {STATUSES.map((s) => (
//                 <option key={s} value={s}>
//                   {s} ({counts[s]})
//                 </option>
//               ))}
//             </Form.Select>
//           </div>
//         </div>

//         {/* STATS */}
//         <Row className="mb-4">
//           <Col><Card body>Total: {bookings.length}</Card></Col>
//           <Col><Card body>Pending: {counts.pending}</Card></Col>
//           <Col><Card body>Confirmed: {counts.confirmed}</Card></Col>
//           <Col><Card body>Cancelled: {counts.cancelled}</Card></Col>
//         </Row>

//         {/* TABLE */}
//         <Card>
//           <Table responsive className="mb-0">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Phone</th>
//                 <th>Pickup</th>
//                 <th>Drop</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Vehicle</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={10} className="text-center py-4">
//                     <Spinner />
//                   </td>
//                 </tr>
//               ) : paginated.length === 0 ? (
//                 <tr>
//                   <td colSpan={10} className="text-center py-4">
//                     No bookings
//                   </td>
//                 </tr>
//               ) : (
//                 paginated.map((b, idx) => {
//                   const rawStatus = b.status || "pending";
//                   const normalizedStatus = rawStatus.toLowerCase();

//                   const sc =
//                     STATUS_META[normalizedStatus] ||
//                     STATUS_META["pending"];

//                   return (
//                     <tr key={b._id}>
//                       <td>{idx + 1}</td>
//                       <td>{b.name}</td>
//                       <td>{b.phone}</td>
//                       <td>{b.pickupCity}</td>
//                       <td>{b.dropCity}</td>
//                       <td>{formatDate(b.pickupDate)}</td>
//                       <td>{b.pickupTime || "—"}</td>

//                       <td>
//                         <Badge bg="info">{b.vehicleType}</Badge>
//                       </td>

//                       <td>
//                         <Form.Select
//                           value={normalizedStatus}
//                           onChange={(e) =>
//                             handleStatusChange(
//                               b._id,
//                               e.target.value
//                             )
//                           }
//                           style={{
//                             background: sc.bg,
//                             color: sc.text,
//                           }}
//                         >
//                           {STATUSES.map((s) => (
//                             <option key={s} value={s}>
//                               {s}
//                             </option>
//                           ))}
//                         </Form.Select>
//                       </td>

//                       <td>
//                         <Button
//                           size="sm"
//                           onClick={() => setDeleteTarget(b)}
//                           style={{
//                             background: C.btnRed,
//                             border: "none",
//                           }}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </Table>

//           {/* PAGINATION */}
//           <Card.Footer className="text-center">
//             <Button
//               disabled={page === 1}
//               onClick={() => setPage(page - 1)}
//             >
//               Prev
//             </Button>

//             <span className="mx-3">
//               Page {page} / {totalPages}
//             </span>

//             <Button
//               disabled={page === totalPages}
//               onClick={() => setPage(page + 1)}
//             >
//               Next
//             </Button>
//           </Card.Footer>
//         </Card>
//       </div>

//       {/* DELETE MODAL */}
//       {deleteTarget && (
//         <DeleteModal
//           booking={deleteTarget}
//           onConfirm={() => handleDelete(deleteTarget._id)}
//           onCancel={() => setDeleteTarget(null)}
//         />
//       )}
//     </>
//   );
// };

// export default AdminTaxiBookings;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Badge, Form, InputGroup, Modal, Spinner, Row, Col, Card } from "react-bootstrap";
import { FiSearch, FiTrash2, FiUser, FiPhone, FiMapPin } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";

const STATUS_META = {
    pending:   { bg: "#fef9c3", text: "#854d0e" },
    confirmed: { bg: "#dcfce7", text: "#15803d" },
    cancelled: { bg: "#fee2e2", text: "#dc2626" },
};

const STATUSES  = ["pending", "confirmed", "cancelled"];
const PER_PAGE  = 8;

const formatDate = (val) => {
    if (!val) return "—";
    const d = new Date(val);
    return isNaN(d) ? val : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

/* ── Delete Modal ── */
const DeleteModal = ({ booking, onConfirm, onCancel }) => (
    <Modal show onHide={onCancel} centered size="sm">
        <Modal.Body className="text-center py-4 px-4">
            <div className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "52px", height: "52px" }}>
                <BsExclamationTriangle size={22} className="text-danger" />
            </div>
            <h5 className="fw-bold mb-2">Delete Booking?</h5>
            <p className="text-muted mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                <strong>{booking?.name}</strong>'s booking will be permanently removed.
            </p>
            <div className="d-flex gap-2 justify-content-center">
                <button className="btn btn-sm btn-outline-secondary" onClick={onCancel}>Cancel</button>
                <button className="btn btn-sm btn-danger fw-bold" onClick={onConfirm}>
                    <FiTrash2 className="me-1" /> Yes, Delete
                </button>
            </div>
        </Modal.Body>
    </Modal>
);

const AdminTaxiBookings = () => {
    const [bookings, setBookings]       = useState([]);
    const [loading, setLoading]         = useState(true);
    const [search, setSearch]           = useState("");
    const [filterStatus, setFilter]     = useState("all");
    const [page, setPage]               = useState(1);
    const [deleteTarget, setDeleteTarget] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("https://travels-bp73.onrender.com/bookings")
            .then(res => setBookings(res.data))
            .catch(console.log)
            .finally(() => setLoading(false));
    }, []);

    const handleStatusChange = (id, status) => {
        axios.put(`https://travels-bp73.onrender.com/bookings/${id}`, { status })
            .then(() => setBookings(prev => prev.map(b => b._id === id ? { ...b, status } : b)))
            .catch(console.log);
    };

    const handleDelete = (id) => {
        axios.delete(`https://travels-bp73.onrender.com/booking/${id}`)
            .then(() => setBookings(prev => prev.filter(b => b._id !== id)))
            .catch(console.log)
            .finally(() => setDeleteTarget(null));
    };

    const filtered = bookings.filter(b => {
        const text = `${b.name} ${b.phone} ${b.vehicleType} ${b.pickupCity} ${b.dropCity}`.toLowerCase();
        const matchSearch  = search === "" || text.includes(search.toLowerCase());
        const normalStatus = (b.status || "pending").toLowerCase();
        const matchStatus  = filterStatus === "all" || normalStatus === filterStatus;
        return matchSearch && matchStatus;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const counts = {
        pending:   bookings.filter(b => (b.status || "pending").toLowerCase() === "pending").length,
        confirmed: bookings.filter(b => (b.status || "").toLowerCase() === "confirmed").length,
        cancelled: bookings.filter(b => (b.status || "").toLowerCase() === "cancelled").length,
    };

    return (
        <>
            <style>{`
                .taxi-row:hover td { background: #f0fdf4 !important; }
                .search-inp:focus  { box-shadow: none !important; border-color: #1a6b5e !important; }
                .pg-btn:focus      { box-shadow: none !important; }
                .status-pill       { font-size: 0.75rem !important; padding: 4px 8px !important; border-radius: 99px !important; border: none !important; font-weight: 700 !important; outline: none !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px", fontFamily: "'Inter', sans-serif" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem", color: "#1a1a2e" }}>Taxi Bookings</h2>
                        <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                            {bookings.length} total booking{bookings.length !== 1 ? "s" : ""}
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <InputGroup size="sm" style={{ width: "220px" }}>
                            <InputGroup.Text className="bg-white">
                                <FiSearch size={13} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                className="search-inp"
                                placeholder="Search bookings..."
                                value={search}
                                onChange={e => { setSearch(e.target.value); setPage(1); }}
                                style={{ fontSize: "0.85rem" }}
                            />
                        </InputGroup>

                        <Form.Select
                            size="sm"
                            value={filterStatus}
                            onChange={e => { setFilter(e.target.value); setPage(1); }}
                            style={{ width: "auto", fontSize: "0.85rem", cursor: "pointer" }}
                        >
                            <option value="all">All Statuses</option>
                            {STATUSES.map(s => (
                                <option key={s} value={s}>
                                    {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s]})
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                </div>

                {/* Stat Cards */}
                <Row className="g-3 mb-4">
                    {[
                        { label: "Total",     value: bookings.length,    color: "#6366f1", bg: "#eef2ff" },
                        { label: "Pending",   value: counts.pending,     color: "#d97706", bg: "#fef9c3" },
                        { label: "Confirmed", value: counts.confirmed,   color: "#16a34a", bg: "#dcfce7" },
                        { label: "Cancelled", value: counts.cancelled,   color: "#dc2626", bg: "#fee2e2" },
                    ].map(s => (
                        <Col xs={6} md={3} key={s.label}>
                            <Card className="border shadow-none h-100">
                                <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
                                    <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ width: "42px", height: "42px", background: s.bg }}>
                                        <span style={{ fontSize: "1.1rem", fontWeight: 700, color: s.color }}>{s.value}</span>
                                    </div>
                                    <span className="text-uppercase fw-semibold text-muted"
                                        style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                        {s.label}
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Table */}
                <Card className="border shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ overflowX: "auto" }}>
                        <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                            <thead className="table-light">
                                <tr>
                                    {["#", "Name", "Phone", "Pickup", "Drop", "Date", "Time", "Vehicle", "Status", "Action"].map(h => (
                                        <th key={h} className="fw-bold"
                                            style={{ padding: "13px 14px", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={10} className="text-center py-5 text-muted">
                                            <Spinner animation="border" size="sm" className="me-2"
                                                style={{ color: "#1a6b5e" }} /> Loading…
                                        </td>
                                    </tr>
                                ) : paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="text-center py-5 text-muted"
                                            style={{ fontSize: "0.9rem" }}>
                                            No bookings found.
                                        </td>
                                    </tr>
                                ) : paginated.map((b, idx) => {
                                    const normalStatus = (b.status || "pending").toLowerCase();
                                    const sc = STATUS_META[normalStatus] || STATUS_META.pending;

                                    return (
                                        <tr key={b._id} className="taxi-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

                                            <td className="text-muted fw-semibold"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {(page - 1) * PER_PAGE + idx + 1}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <FiUser size={13} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    <span className="fw-semibold" style={{ color: "#1a1a2e", whiteSpace: "nowrap" }}>
                                                        {b.name}
                                                    </span>
                                                </div>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2 text-muted">
                                                    <FiPhone size={13} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    {b.phone}
                                                </div>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-start gap-1 text-muted" style={{ fontSize: "0.82rem" }}>
                                                    <FiMapPin size={12} style={{ color: "#16a34a", marginTop: "2px", flexShrink: 0 }} />
                                                    <span>{b.pickupCity}</span>
                                                </div>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-start gap-1 text-muted" style={{ fontSize: "0.82rem" }}>
                                                    <FiMapPin size={12} style={{ color: "#dc2626", marginTop: "2px", flexShrink: 0 }} />
                                                    <span>{b.dropCity}</span>
                                                </div>
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap", fontSize: "0.82rem" }}>
                                                {formatDate(b.pickupDate)}
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap", fontSize: "0.82rem" }}>
                                                {b.pickupTime || "—"}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "3px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 600, whiteSpace: "nowrap" }}>
                                                    {b.vehicleType}
                                                </span>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Form.Select
                                                    className="status-pill"
                                                    value={normalStatus}
                                                    onChange={e => handleStatusChange(b._id, e.target.value)}
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
                                                <button
                                                    className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                    style={{ background: "#fee2e2", color: "#dc2626", border: "none", fontSize: "0.78rem" }}
                                                    onClick={() => setDeleteTarget(b)}>
                                                    <FiTrash2 size={12} /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3 bg-white">
                        <button className="pg-btn btn btn-sm fw-semibold"
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            style={{ background: page === 1 ? "#e2e8f0" : "#1a6b5e", color: page === 1 ? "#9aa5b4" : "white", border: "none", borderRadius: "50px", padding: "6px 18px" }}>
                            ← Prev
                        </button>
                        <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                            Page {page} of {totalPages} · {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                        </span>
                        <button className="pg-btn btn btn-sm fw-semibold"
                            disabled={page === totalPages}
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            style={{ background: page === totalPages ? "#e2e8f0" : "#1a6b5e", color: page === totalPages ? "#9aa5b4" : "white", border: "none", borderRadius: "50px", padding: "6px 18px" }}>
                            Next →
                        </button>
                    </Card.Footer>
                </Card>
            </div>

            {deleteTarget && (
                <DeleteModal
                    booking={deleteTarget}
                    onConfirm={() => handleDelete(deleteTarget._id)}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}
        </>
    );
};

export default AdminTaxiBookings;