// import axios from 'axios'
// import React, { useEffect, useState } from "react";
// import { Table, Button, Container, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Destinations = () => {

//     const [destinations, setDestinations] = useState([]);
//     const [Show, setShow] = useState(false)
//     const [deleteId, setdeleteId] = useState()
//     const [page, setPage] = useState(1)
//     const [totalPages, setTotalPages] = useState(1)
//     const [search, setSearch] = useState("");

//     const limit = 3

//     // useEffect(() => {
//     //     axios.get(`https://travels-bp73.onrender.com/destination`, {
//     //         params: {
//     //             page,
//     //             limit,
//     //         }
//     //     })
//     //         .then(result => {
//     //             setDestinations(result.data.destinations)
//     //             setTotalPages(result.data.totalPages)

//     //         })
//     //         .catch(err => console.log(err))
//     // }, [page])

//     useEffect(() => {
//         const delayDebounce = setTimeout(() => {
//             axios.get(`https://travels-bp73.onrender.com/destination`, {
//                 params: {
//                     page,
//                     limit,
//                     search // ✅ send search to backend
//                 }
//             })
//                 .then(result => {
//                     setDestinations(result.data.destinations);
//                     setTotalPages(result.data.totalPages);
//                 })
//                 .catch(err => console.log(err));
//         }, 400); // debounce

//         return () => clearTimeout(delayDebounce);

//     }, [page, search]);

//     const handleClose = () => setShow(false);
//     const handleShow = (id) => {
//         setdeleteId(id);
//         setShow(true);
//     }

//     const handleDelete = () => {
//         axios.delete('https://travels-bp73.onrender.com/deleteDestination/' + deleteId)
//             .then(res => {
//                 setDestinations(destinations.filter(destination => destination._id !== deleteId))
//                 handleClose()
//             })
//             .catch(err => console.log(err))
//     }

//     return (
//         <Container className="mt-4">

//             {/* IF EMPTY */}
//             {destinations.length === 0 ? (
//                 <div className="empty-destination">
//                     <Link to={"/addDestination"}>
//                         <Button variant="primary">
//                             + Add Destination
//                         </Button>
//                     </Link>
//                 </div>
//             ) : (
//                 <>

//                     {/* HEADER */}
//                     {/* <div className="d-flex justify-content-between align-items-center mb-4">
//                         <h3>Destinations</h3>

//                         <Link to={"/addDestination"}>
//                             <Button variant="primary">
//                                 + Add Destination
//                             </Button>
//                         </Link>

//                     </div> */}

//                     <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">

//                         <h3>Destinations</h3>

//                         <input
//                             type="text"
//                             placeholder="Search destination..."
//                             className="form-control w-auto"
//                             value={search}
//                             onChange={(e) => {
//                                 setSearch(e.target.value);
//                                 setPage(1); // ✅ reset page when searching
//                             }}
//                         />


//                         <Link to={"/addDestination"}>
//                             <Button variant="primary">
//                                 + Add Destination
//                             </Button>
//                         </Link>

//                     </div>

//                     {/* TABLE */}
//                     <Table striped bordered hover responsive className=' text-center align-middle'>
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Destination</th>
//                                 <th>Location</th>
//                                 <th>Category</th>
//                                 <th>Description</th>
//                                 <th>Image</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {destinations.map((dest, index) => (
//                                 <tr key={dest.id}>
//                                     {/* <td>{index + 1}</td> */}
//                                     <td>{(page - 1) * limit + index + 1}</td>
//                                     <td>{dest.Destination}</td>
//                                     <td>{dest.Location}</td>
//                                     <td>{dest.Category}</td>
//                                     <td>{dest.Description}</td>

//                                     <td>
//                                         <img
//                                             src={dest.Image}
//                                             alt=""
//                                             width="100"
//                                             height="100"
//                                         />
//                                     </td>

//                                     <td>
//                                         <Link to={`/editDestination/${dest._id}`} className='btn btn-warning m-2'>Edit</Link>

//                                         <Button className='btn-danger rounded' onClick={(e) => handleShow(dest._id)}>Delete</Button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>

//                     </Table>


//                     <Modal show={Show} onHide={handleClose}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>Delete</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>Are you sure you want to delete this destination?</Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Cancel
//                             </Button>
//                             <Button variant="danger" onClick={handleDelete}>
//                                 Delete
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>

//                     <div className="d-flex justify-content-center gap-2">
//                         <Button
//                             disabled={page === 1}
//                             onClick={() => setPage(page - 1)}
//                         >
//                             Prev
//                         </Button>

//                         <span className="align-self-center">
//                             Page {page} of {totalPages}
//                         </span>

//                         <Button
//                             disabled={page === totalPages}
//                             onClick={() => setPage(page + 1)}
//                         >
//                             Next
//                         </Button>
//                     </div>
//                 </>
//             )}

//         </Container>
//     );
// };

// export default Destinations;

import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Table, Card, Row, Col, Modal, Spinner, InputGroup, Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiMapPin } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";

const LIMIT = 8;

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        setLoading(true);
        const delay = setTimeout(() => {
            axios.get(`https://travels-bp73.onrender.com/destination`, {
                params: { page, limit: LIMIT, search }
            })
                .then(res => {
                    setDestinations(res.data.destinations);
                    setTotalPages(res.data.totalPages);
                    setLoading(false);
                })
                .catch(err => { console.log(err); setLoading(false); });
        }, 400);
        return () => clearTimeout(delay);
    }, [page, search]);

    const handleDelete = () => {
        axios.delete(`https://travels-bp73.onrender.com/deleteDestination/${deleteId}`)
            .then(() => {
                setDestinations(prev => prev.filter(d => d._id !== deleteId));
                setDeleteId(null);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <style>{`
                .dest-row:hover td { background: #f0fdf4 !important; }
                .search-inp:focus  { box-shadow: none !important; border-color: #1a6b5e !important; }
                .pg-btn:focus      { box-shadow: none !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px", fontFamily: "'Inter', sans-serif" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold mb-1" style={{ fontSize: "1.5rem", color: "#1a1a2e" }}>Destinations</h2>
                        <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                            Manage all tourist destinations
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <InputGroup size="sm" style={{ width: "220px" }}>
                            <InputGroup.Text className="bg-white">
                                <FiSearch size={13} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                className="search-inp"
                                placeholder="Search destinations..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                style={{ fontSize: "0.85rem" }}
                            />
                        </InputGroup>

                        <Link to="/addDestination"
                            className="btn btn-sm fw-bold d-flex align-items-center gap-2"
                            style={{ background: "#1a6b5e", color: "white", border: "none", borderRadius: "8px", padding: "8px 18px", textDecoration: "none" }}>
                            <FiPlus size={14} /> Add Destination
                        </Link>
                    </div>
                </div>

                {/* Table / Loading / Empty */}
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" style={{ color: "#1a6b5e" }} />
                    </div>
                ) : destinations.length === 0 ? (
                    <div className="text-center py-5">
                        <FiMapPin size={48} style={{ color: "#1a6b5e", opacity: 0.2, marginBottom: "12px", display: "block", margin: "0 auto 12px" }} />
                        <p className="text-muted mb-3">No destinations found.</p>
                        <Link to="/addDestination"
                            className="btn btn-sm fw-bold"
                            style={{ background: "#1a6b5e", color: "white", border: "none", borderRadius: "8px", padding: "10px 24px" }}>
                            <FiPlus className="me-2" /> Add First Destination
                        </Link>
                    </div>
                ) : (
                    <Card className="border shadow-sm" style={{ borderRadius: "12px", overflow: "hidden" }}>
                        <div style={{ overflowX: "auto" }}>
                            <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                                <thead className="table-light">
                                    <tr>
                                        {["#", "Image", "Destination", "Location", "Category", "Description", "Actions"].map(h => (
                                            <th key={h} className="fw-bold"
                                                style={{ padding: "13px 14px", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {destinations.map((dest, idx) => (
                                        <tr key={dest._id} className="dest-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}>

                                            {/* # */}
                                            <td className="text-muted fw-semibold"
                                                style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {(page - 1) * LIMIT + idx + 1}
                                            </td>

                                            {/* Image */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <img src={dest.Image} alt={dest.Destination}
                                                    style={{ width: "56px", height: "56px", objectFit: "cover", borderRadius: "10px" }} />
                                            </td>

                                            {/* Destination */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <span className="fw-semibold" style={{ color: "#1a1a2e" }}>
                                                    {dest.Destination}
                                                </span>
                                            </td>

                                            {/* Location */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-1 text-muted">
                                                    <FiMapPin size={12} style={{ color: "#1a6b5e", flexShrink: 0 }} />
                                                    {dest.Location}
                                                </div>
                                            </td>

                                            {/* Category */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Badge pill style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 600, fontSize: "0.75rem" }}>
                                                    {dest.Category}
                                                </Badge>
                                            </td>

                                            {/* Description */}
                                            <td className="text-muted"
                                                style={{ padding: "13px 14px", verticalAlign: "middle", maxWidth: "240px" }}>
                                                <span style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", fontSize: "0.82rem", lineHeight: 1.5 }}>
                                                    {dest.Description}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Link to={`/editDestination/${dest._id}`}
                                                        className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                        style={{ background: "#fef9c3", color: "#854d0e", border: "none", fontSize: "0.78rem" }}>
                                                        <FiEdit2 size={12} /> Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-sm fw-bold d-flex align-items-center gap-1"
                                                        style={{ background: "#fee2e2", color: "#dc2626", border: "none", fontSize: "0.78rem" }}
                                                        onClick={() => setDeleteId(dest._id)}>
                                                        <FiTrash2 size={12} /> Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
                                Page {page} of {totalPages}
                            </span>

                            <button className="pg-btn btn btn-sm fw-semibold"
                                disabled={page === totalPages}
                                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                style={{ background: page === totalPages ? "#e2e8f0" : "#1a6b5e", color: page === totalPages ? "#9aa5b4" : "white", border: "none", borderRadius: "50px", padding: "6px 18px" }}>
                                Next →
                            </button>
                        </Card.Footer>
                    </Card>
                )}
            </div>

            {/* DELETE MODAL */}
            <Modal show={!!deleteId} onHide={() => setDeleteId(null)} centered size="sm">
                <Modal.Body className="text-center py-4 px-4">
                    <div className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{ width: "52px", height: "52px" }}>
                        <BsExclamationTriangle size={22} className="text-danger" />
                    </div>
                    <h5 className="fw-bold mb-2">Delete Destination?</h5>
                    <p className="text-muted mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                        This action cannot be undone. The destination will be permanently removed.
                    </p>
                    <div className="d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setDeleteId(null)}>Cancel</button>
                        <button className="btn btn-sm btn-danger fw-bold" onClick={handleDelete}>
                            <FiTrash2 className="me-1" /> Yes, Delete
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Destinations;