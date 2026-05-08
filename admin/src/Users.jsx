// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Table, Container } from "react-bootstrap";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     axios.get("https://travels-bp73.onrender.com/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.log(err));
//   };

//   return (
//     <Container className="my-5">
//       <h2 className="mb-4 text-center">Registered Users</h2>

//       <Table striped bordered hover responsive className="text-center">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={user._id}>
//                             <td>{index + 1}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.phone}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//     </Container>
//   );
// };

// export default Users;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Table, Card, Row, Col, Spinner, InputGroup, Form } from "react-bootstrap";
// import { FiSearch, FiUser, FiMail, FiPhone } from "react-icons/fi";

// const Users = () => {
//     const [users, setUsers]   = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState("");
//     const [page, setPage]     = useState(1);

//     const PER_PAGE = 8;

//     useEffect(() => {
//         axios.get("https://travels-bp73.onrender.com/users")
//             .then(res => { setUsers(res.data); setLoading(false); })
//             .catch(err => { console.log(err); setLoading(false); });
//     }, []);

//     const filtered = users.filter(u =>
//         search === "" ||
//         `${u.name} ${u.email} ${u.phone}`.toLowerCase().includes(search.toLowerCase())
//     );

//     const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//     const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//     return (
//         <>
//             <style>{`
//                 .user-row:hover td { background: #f0fdf4 !important; }
//                 .search-inp:focus  { box-shadow: none !important; border-color: #1a6b5e !important; }
//                 .pg-btn:focus      { box-shadow: none !important; }
//             `}</style>

//             <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px" }}>

//                 {/* Header */}
//                 <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
//                     <h2 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Registered Users</h2>

//                     <InputGroup size="sm" style={{ width: "220px" }}>
//                         <InputGroup.Text className="bg-white">
//                             <FiSearch size={13} className="text-muted" />
//                         </InputGroup.Text>
//                         <Form.Control
//                             className="search-inp"
//                             placeholder="Search users..."
//                             value={search}
//                             onChange={(e) => { setSearch(e.target.value); setPage(1); }}
//                             style={{ fontSize: "0.85rem" }}
//                         />
//                     </InputGroup>
//                 </div>

//                 {/* Stat Cards */}
//                 <Row className="g-3 mb-4">
//                     {[
//                         { label: "Total Users",    value: users.length,                                              color: "#6366f1", bg: "#eef2ff" },
//                         { label: "With Phone",     value: users.filter(u => u.phone).length,                         color: "#16a34a", bg: "#dcfce7" },
//                         { label: "Search Results", value: filtered.length,                                            color: "#d97706", bg: "#fef9c3" },
//                         { label: "This Page",      value: Math.min(PER_PAGE, filtered.length - (page-1)*PER_PAGE),   color: "#2563eb", bg: "#dbeafe" },
//                     ].map(s => (
//                         <Col xs={6} md={3} key={s.label}>
//                             <Card className="border shadow-none h-100">
//                                 <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
//                                     <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
//                                         style={{ width: "42px", height: "42px", background: s.bg }}>
//                                         <span style={{ fontSize: "1.1rem", fontWeight: 700, color: s.color }}>{s.value}</span>
//                                     </div>
//                                     <span className="text-uppercase fw-semibold text-muted"
//                                         style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
//                                         {s.label}
//                                     </span>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>

//                 {/* Table */}
//                 <Card className="border shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
//                     <div style={{ overflowX: "auto" }}>
//                         <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
//                             <thead className="table-light">
//                                 <tr>
//                                     {["#", "Name", "Email", "Phone"].map(h => (
//                                         <th key={h} className="fw-bold"
//                                             style={{ padding: "13px 14px", fontSize: "0.82rem", whiteSpace: "nowrap" }}>
//                                             {h}
//                                         </th>
//                                     ))}
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {loading ? (
//                                     <tr>
//                                         <td colSpan={4} className="text-center py-5 text-muted">
//                                             <Spinner animation="border" size="sm" className="me-2" /> Loading…
//                                         </td>
//                                     </tr>
//                                 ) : paginated.length === 0 ? (
//                                     <tr>
//                                         <td colSpan={4} className="text-center py-5 text-muted"
//                                             style={{ fontSize: "0.9rem" }}>
//                                             No users found.
//                                         </td>
//                                     </tr>
//                                 ) : paginated.map((user, idx) => (
//                                     <tr key={user._id} className="user-row"
//                                         style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

//                                         <td className="text-muted fw-semibold"
//                                             style={{ padding: "13px 14px", verticalAlign: "middle" }}>
//                                             {(page - 1) * PER_PAGE + idx + 1}
//                                         </td>

//                                         <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
//                                             <div className="d-flex align-items-center gap-2">
//                                                 <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
//                                                     style={{ width: "32px", height: "32px", background: "#eef2ff", color: "#6366f1", fontSize: "0.75rem", fontWeight: 700 }}>
//                                                     {user.name?.charAt(0).toUpperCase()}
//                                                 </div>
//                                                 <span className="fw-semibold">{user.name}</span>
//                                             </div>
//                                         </td>

//                                         <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
//                                             <div className="d-flex align-items-center gap-2 text-muted">
//                                                 <FiMail size={13} />
//                                                 {user.email}
//                                             </div>
//                                         </td>

//                                         <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
//                                             <div className="d-flex align-items-center gap-2 text-muted">
//                                                 <FiPhone size={13} />
//                                                 {user.phone || <span style={{ opacity: 0.4 }}>—</span>}
//                                             </div>
//                                         </td>

//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
//                     </div>

//                     {/* Pagination */}
//                     <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3 bg-white">
//                         <button className="pg-btn btn btn-sm"
//                             style={{ background: page === 1 ? "#e2e8f0" : "#1a6b5e", color: page === 1 ? "#9aa5b4" : "white", border: "none", fontWeight: 600 }}
//                             disabled={page === 1}
//                             onClick={() => setPage(p => Math.max(1, p - 1))}>
//                             ← Prev
//                         </button>

//                         <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
//                             Page {page} of {totalPages} · {filtered.length} user{filtered.length !== 1 ? "s" : ""}
//                         </span>

//                         <button className="pg-btn btn btn-sm"
//                             style={{ background: page === totalPages ? "#e2e8f0" : "#1a6b5e", color: page === totalPages ? "#9aa5b4" : "white", border: "none", fontWeight: 600 }}
//                             disabled={page === totalPages}
//                             onClick={() => setPage(p => Math.min(totalPages, p + 1))}>
//                             Next →
//                         </button>
//                     </Card.Footer>
//                 </Card>

//             </div>
//         </>
//     );
// };

// export default Users;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Card, Spinner, InputGroup, Form } from "react-bootstrap";
import { FiSearch, FiMail, FiPhone } from "react-icons/fi";

const PER_PAGE = 10;

const Users = () => {
    const [users, setUsers]     = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch]   = useState("");
    const [page, setPage]       = useState(1);

    useEffect(() => {
        axios.get("https://travels-bp73.onrender.com/users")
            .then(res => { setUsers(res.data); setLoading(false); })
            .catch(err => { console.log(err); setLoading(false); });
    }, []);

    const filtered = users.filter(u =>
        search === "" ||
        `${u.name} ${u.email} ${u.phone}`.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const avatarColor = (name) => {
        const colors = [
            { bg: "#eef2ff", text: "#6366f1" },
            { bg: "#dcfce7", text: "#16a34a" },
            { bg: "#fef9c3", text: "#854d0e" },
            { bg: "#dbeafe", text: "#1d4ed8" },
            { bg: "#fce7f3", text: "#be185d" },
            { bg: "#ffedd5", text: "#c2410c" },
        ];
        const idx = (name?.charCodeAt(0) || 0) % colors.length;
        return colors[idx];
    };

    return (
        <>
            <style>{`
                .user-row:hover td { background: #f0fdf4 !important; }
                .search-inp:focus  { box-shadow: none !important; border-color: #1a6b5e !important; }
                .pg-btn:focus      { box-shadow: none !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px", fontFamily: "'Inter', sans-serif" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem", color: "#1a1a2e" }}>
                            Registered Users
                        </h2>
                        <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                            {users.length} total user{users.length !== 1 ? "s" : ""} registered
                        </p>
                    </div>

                    <InputGroup size="sm" style={{ width: "230px" }}>
                        <InputGroup.Text className="bg-white">
                            <FiSearch size={13} className="text-muted" />
                        </InputGroup.Text>
                        <Form.Control
                            className="search-inp"
                            placeholder="Search users..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            style={{ fontSize: "0.85rem" }}
                        />
                    </InputGroup>
                </div>

                {/* Table Card */}
                <Card className="border shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ overflowX: "auto" }}>
                        <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                            <thead className="table-light">
                                <tr>
                                    {["#", "User", "Email", "Phone"].map(h => (
                                        <th key={h} className="fw-bold"
                                            style={{ padding: "13px 16px", fontSize: "0.8rem", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-5 text-muted">
                                            <Spinner animation="border" size="sm" className="me-2"
                                                style={{ color: "#1a6b5e" }} /> Loading…
                                        </td>
                                    </tr>
                                ) : paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="text-center py-5 text-muted"
                                            style={{ fontSize: "0.9rem" }}>
                                            No users found.
                                        </td>
                                    </tr>
                                ) : paginated.map((user, idx) => {
                                    const av = avatarColor(user.name);
                                    return (
                                        <tr key={user._id} className="user-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

                                            {/* # */}
                                            <td className="text-muted fw-semibold"
                                                style={{ padding: "13px 16px", verticalAlign: "middle", width: "48px" }}>
                                                {(page - 1) * PER_PAGE + idx + 1}
                                            </td>

                                            {/* Name + avatar */}
                                            <td style={{ padding: "13px 16px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                                        style={{ width: "36px", height: "36px", background: av.bg, color: av.text, fontSize: "0.88rem", fontWeight: 800 }}>
                                                        {user.name?.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="fw-semibold" style={{ color: "#1a1a2e" }}>
                                                        {user.name}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Email */}
                                            <td style={{ padding: "13px 16px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2 text-muted">
                                                    <FiMail size={13} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    {user.email}
                                                </div>
                                            </td>

                                            {/* Phone */}
                                            <td style={{ padding: "13px 16px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2 text-muted">
                                                    <FiPhone size={13} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    {user.phone || <span style={{ opacity: 0.4 }}>—</span>}
                                                </div>
                                            </td>

                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3 bg-white">
                        <button
                            className="pg-btn btn btn-sm fw-semibold"
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            style={{ background: page === 1 ? "#e2e8f0" : "#1a6b5e", color: page === 1 ? "#9aa5b4" : "white", border: "none", borderRadius: "50px", padding: "6px 18px" }}>
                            ← Prev
                        </button>

                        <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                            Page {page} of {totalPages} · {filtered.length} user{filtered.length !== 1 ? "s" : ""}
                        </span>

                        <button
                            className="pg-btn btn btn-sm fw-semibold"
                            disabled={page === totalPages}
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            style={{ background: page === totalPages ? "#e2e8f0" : "#1a6b5e", color: page === totalPages ? "#9aa5b4" : "white", border: "none", borderRadius: "50px", padding: "6px 18px" }}>
                            Next →
                        </button>
                    </Card.Footer>
                </Card>

            </div>
        </>
    );
};

export default Users;