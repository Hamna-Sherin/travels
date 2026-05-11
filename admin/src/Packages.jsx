// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Table, Button, Container, Row, Col, Modal } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaRegEye } from "react-icons/fa";


// const Packages = () => {
//   const [packages, setPackages] = useState([]);
//   const navigate = useNavigate();
//   const [Show, setShow] = useState(false)
//   const [deleteId, setdeleteId] = useState()
//   const [viewShow, setViewShow] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   const fetchPackages = async () => {
//     try {
//       const res = await axios.get("https://travels-bp73.onrender.com/allPackages");
//       setPackages(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   const handleDelete = () => {
//     axios.delete('https://travels-bp73.onrender.com/deletePackage/' + deleteId)
//       .then(res => {
//         setPackages(packages.filter(packages => packages._id !== deleteId))
//         handleClose()
//       })
//       .catch(err => console.log(err))
//   }

//   const handleClose = () => setShow(false);
//   const handleShow = (id) => {
//     setdeleteId(id);
//     setShow(true);
//   }

//   const handleViewShow = (pkg) => {
//     setSelectedPackage(pkg);
//     setViewShow(true);
//   };

//   const handleViewClose = () => setViewShow(false);

//   return (
//     <Container className="mt-4">

//       {/* Top Bar */}
//       {packages.length > 0 && (
//         <Row className="mb-3">
//           <Col>
//             <h3>Packages</h3>
//           </Col>

//           <Col className="d-flex justify-content-end">
//             <Button onClick={() => navigate("/addPackage")}>
//               + Add Package
//             </Button>
//           </Col>
//         </Row>
//       )}

//       {/* If NO DATA */}
//       {packages.length === 0 ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
//           <Button size="lg" onClick={() => navigate("/addPackage")}>
//             + Add Package
//           </Button>
//         </div>
//       ) : (
//         /* TABLE */
//         <Table striped bordered hover responsive className="text-center align-middle">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Destination</th>
//               <th>Price</th>
//               <th>Duration</th>
//               <th>Category</th>
//               <th>Slots</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {packages.map((pkg, index) => (
//               <tr key={pkg._id}>
//                 <td>{index + 1}</td>
//                 <td>{pkg.name}</td>
//                 <td>{pkg.destination}</td>
//                 <td>₹{pkg.price}</td>
//                 <td>{pkg.duration}</td>
//                 <td>{pkg.category}</td>
//                 <td>{pkg.slots}</td>
//                 <td>
//                   <Link to={`/editPackage/${pkg._id}`} className='btn btn-warning m-2'>Edit</Link>
//                   <Button className='btn-danger rounded' onClick={(e) => handleShow(pkg._id)}>Delete</Button>
//                   <FaRegEye
//                     size={20}
//                     style={{ marginLeft: "5px", cursor: "pointer" }}
//                     onClick={() => handleViewShow(pkg)} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}

//       <Modal show={Show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to delete this destination?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <Modal show={viewShow} onHide={handleViewClose} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Package Details</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           {selectedPackage && (
//             <Row>
//               {/* LEFT → IMAGE */}
//               <Col md={6}>
//                 <img
//                   src={selectedPackage.image}
//                   alt={selectedPackage.name}
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     objectFit: "cover",
//                     borderRadius: "10px"
//                   }}
//                 />
//               </Col>

//               {/* RIGHT → DETAILS */}
//               <Col md={6}>
//                 <h4>{selectedPackage.name}</h4>
//                 <p><strong>Destination:</strong> {selectedPackage.destination}</p>
//                 <p><strong>Price:</strong> ₹{selectedPackage.price}</p>
//                 <p><strong>Duration:</strong> {selectedPackage.duration}</p>
//                 <p><strong>Category:</strong> {selectedPackage.category}</p>
//                 <p><strong>Slots:</strong> {selectedPackage.slots}</p>
//                 <p><strong>Description:</strong> {selectedPackage.description}</p>
//               </Col>
//             </Row>
//           )}
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleViewClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>



//     </Container>
//   );
// };

// export default Packages;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Card, Row, Col, Modal, Spinner, InputGroup, Form, Badge } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiEye, FiMapPin, FiTag } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

const Packages = () => {
    const navigate  = useNavigate();

    const [packages, setPackages]           = useState([]);
    const [loading, setLoading]             = useState(true);
    const [search, setSearch]               = useState("");
    const [deleteId, setDeleteId]           = useState(null);
    const [selectedPackage, setSelectedPkg] = useState(null);

    useEffect(() => {
        axios.get("https://travels-bp73.onrender.com/allPackages")
            .then(res => { setPackages(res.data); setLoading(false); })
            .catch(err => { console.error(err); setLoading(false); });
    }, []);

    const handleDelete = () => {
        axios.delete(`https://travels-bp73.onrender.com/deletePackage/${deleteId}`)
            .then(() => {
                setPackages(prev => prev.filter(p => p._id !== deleteId));
                setDeleteId(null);
            })
            .catch(err => console.log(err));
    };

    const filtered = packages.filter(p =>
        search === "" ||
        `${p.name} ${p.destination} ${p.category}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <style>{`
                .pkg-row:hover td { background: #f0fdf4 !important; }
                .search-inp:focus { box-shadow: none !important; border-color: #1a6b5e !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px", fontFamily: "'Inter', sans-serif" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem", color: "#1a1a2e" }}>Packages</h2>
                        <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                            {packages.length} package{packages.length !== 1 ? "s" : ""} listed
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <InputGroup size="sm" style={{ width: "220px" }}>
                            <InputGroup.Text className="bg-white">
                                <FiSearch size={13} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                className="search-inp"
                                placeholder="Search packages..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ fontSize: "0.85rem" }}
                            />
                        </InputGroup>

                        <button
                            onClick={() => navigate("/addPackage")}
                            className="btn btn-sm fw-bold d-flex align-items-center gap-2"
                            style={{ background: "#1a6b5e", color: "white", border: "none", borderRadius: "8px", padding: "8px 18px" }}>
                            <FiPlus size={14} /> Add Package
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                {/* <Row className="g-3 mb-4">
                    {[
                        { label: "Total",      value: packages.length,                                              color: "#6366f1", bg: "#eef2ff" },
                        { label: "Categories", value: [...new Set(packages.map(p => p.category))].filter(Boolean).length, color: "#d97706", bg: "#fef9c3" },
                        { label: "Avg Price",  value: packages.length ? `₹${Math.round(packages.reduce((a,p) => a + (p.price||0), 0) / packages.length).toLocaleString("en-IN")}` : "—", color: "#16a34a", bg: "#dcfce7" },
                        { label: "Results",    value: filtered.length,                                              color: "#2563eb", bg: "#dbeafe" },
                    ].map(s => (
                        <Col xs={6} md={3} key={s.label}>
                            <Card className="border shadow-none h-100">
                                <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
                                    <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ width: "42px", height: "42px", background: s.bg }}>
                                        <span style={{ fontSize: "0.95rem", fontWeight: 700, color: s.color }}>{s.value}</span>
                                    </div>
                                    <span className="text-uppercase fw-semibold text-muted"
                                        style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                                        {s.label}
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> */}

                {/* Table */}
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" style={{ color: "#1a6b5e" }} />
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="text-muted">No packages found.</p>
                        <button onClick={() => navigate("/addPackage")}
                            className="btn btn-sm fw-bold"
                            style={{ background: "#1a6b5e", color: "white", border: "none", borderRadius: "8px", padding: "10px 24px" }}>
                            <FiPlus className="me-2" /> Add First Package
                        </button>
                    </div>
                ) : (
                    <Card className="border shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
                        <div style={{ overflowX: "auto" }}>
                            <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                                <thead className="table-light">
                                    <tr>
                                        {["#", "Package", "Destination", "Price", "Duration", "Category", "Slots", "Actions"].map(h => (
                                            <th key={h} className="fw-bold"
                                                style={{ padding: "13px 14px", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {filtered.map((pkg, idx) => (
                                        <tr key={pkg._id} className="pkg-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

                                            <td className="text-muted fw-semibold"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {idx + 1}
                                            </td>

                                            {/* Name + thumbnail */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img src={pkg.image} alt={pkg.name}
                                                        style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
                                                    <span className="fw-semibold" style={{ color: "#1a1a2e", whiteSpace: "nowrap" }}>
                                                        {pkg.name}
                                                    </span>
                                                </div>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-1 text-muted">
                                                    <FiMapPin size={12} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    {pkg.destination}
                                                </div>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <span className="fw-bold" style={{ color: "#1a6b5e" }}>
                                                    ₹{pkg.price?.toLocaleString("en-IN")}
                                                </span>
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                                                {pkg.duration}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Badge pill style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 600, fontSize: "0.75rem" }}>
                                                    {pkg.category}
                                                </Badge>
                                            </td>

                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {pkg.slots}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Link to={`/editPackage/${pkg._id}`}
                                                        className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                        style={{ background: "#fef9c3", color: "#854d0e", border: "none", fontSize: "0.78rem" }}>
                                                        <FiEdit2 size={12} /> Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                        style={{ background: "#fee2e2", color: "#dc2626", border: "none", fontSize: "0.78rem" }}
                                                        onClick={() => setDeleteId(pkg._id)}>
                                                        <FiTrash2 size={12} /> Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                        style={{ background: "#eef2ff", color: "#6366f1", border: "none", fontSize: "0.78rem" }}
                                                        onClick={() => setSelectedPkg(pkg)}>
                                                        <FiEye size={12} /> View
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                )}
            </div>

            {/* ── DELETE MODAL ── */}
            <Modal show={!!deleteId} onHide={() => setDeleteId(null)} centered size="sm">
                <Modal.Body className="text-center py-4 px-4">
                    <div className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: "52px", height: "52px" }}>
                        <BsExclamationTriangle size={22} className="text-danger" />
                    </div>
                    <h5 className="fw-bold mb-2">Delete Package?</h5>
                    <p className="text-muted mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                        This action cannot be undone. The package will be permanently removed.
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setDeleteId(null)}>Cancel</button>
                        <button className="btn btn-sm btn-danger fw-bold" onClick={handleDelete}>
                            <FiTrash2 className="me-1" /> Yes, Delete
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* ── VIEW MODAL ── */}
            <Modal show={!!selectedPackage} onHide={() => setSelectedPkg(null)} centered size="lg">
                <Modal.Header closeButton style={{ borderBottom: "1px solid #ede9df" }}>
                    <Modal.Title style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}>
                        Package Details
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ padding: "24px" }}>
                    {selectedPackage && (
                        <Row className="g-4">
                            <Col md={6}>
                                <img src={selectedPackage.image} alt={selectedPackage.name}
                                    style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "12px" }} />
                            </Col>
                            <Col md={6}>
                                <h5 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: "16px" }}>
                                    {selectedPackage.name}
                                </h5>
                                {[
                                    ["Destination", selectedPackage.destination],
                                    ["Price",       `₹${selectedPackage.price?.toLocaleString("en-IN")}`],
                                    ["Duration",    selectedPackage.duration],
                                    ["Category",    selectedPackage.category],
                                    ["Slots",       selectedPackage.slots],
                                ].map(([label, value]) => (
                                    <div key={label} style={{ display: "flex", gap: "8px", marginBottom: "10px", fontSize: "0.88rem" }}>
                                        <span style={{ color: "#9aa5b4", minWidth: "90px", fontWeight: 600 }}>{label}</span>
                                        <span style={{ color: "#1a1a2e", fontWeight: 500 }}>{value}</span>
                                    </div>
                                ))}
                                {selectedPackage.description && (
                                    <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.7, marginTop: "12px", background: "#f9f7f2", borderRadius: "8px", padding: "12px" }}>
                                        {selectedPackage.description}
                                    </p>
                                )}
                            </Col>
                        </Row>
                    )}
                </Modal.Body>

                <Modal.Footer style={{ borderTop: "1px solid #ede9df" }}>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => setSelectedPkg(null)}>Close</button>
                    {selectedPackage && (
                        <Link to={`/editPackage/${selectedPackage._id}`}
                            className="btn btn-sm fw-bold"
                            style={{ background: "#1a6b5e", color: "white", border: "none" }}
                            onClick={() => setSelectedPkg(null)}>
                            <FiEdit2 className="me-1" /> Edit Package
                        </Link>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Packages;