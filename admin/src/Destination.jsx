import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Table, Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Destinations = () => {

    const [destinations, setDestinations] = useState([]);
    const [Show, setShow] = useState(false)
    const [deleteId, setdeleteId] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const limit = 3

    useEffect(() => {
        axios.get(`https://travels-bp73.onrender.com/destination`, {
            params: {
                page,
                limit,
            }
        })
            .then(result => {
                setDestinations(result.data.destinations)
                setTotalPages(result.data.totalPages)

            })
            .catch(err => console.log(err))
    }, [page])

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setdeleteId(id);
        setShow(true);
    }

    const handleDelete = () => {
        axios.delete('https://travels-bp73.onrender.com/deleteDestination/' + deleteId)
            .then(res => {
                setDestinations(destinations.filter(destination => destination._id !== deleteId))
                handleClose()
            })
            .catch(err => console.log(err))
    }

    return (
        <Container className="mt-4">

            {/* IF EMPTY */}
            {destinations.length === 0 ? (
                <div className="empty-destination">
                    <Link to={"/addDestination"}>
                        <Button variant="primary">
                            + Add Destination
                        </Button>
                    </Link>
                </div>
            ) : (
                <>

                    {/* HEADER */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3>Destinations</h3>

                        <Link to={"/addDestination"}>
                            <Button variant="primary">
                                + Add Destination
                            </Button>
                        </Link>

                    </div>

                    {/* TABLE */}
                    <Table striped bordered hover responsive className=' text-center align-middle'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Destination</th>
                                <th>Location</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {destinations.map((dest, index) => (
                                <tr key={dest.id}>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{(page - 1) * limit + index + 1}</td>
                                    <td>{dest.Destination}</td>
                                    <td>{dest.Location}</td>
                                    <td>{dest.Category}</td>
                                    <td>{dest.Description}</td>

                                    <td>
                                        <img
                                            src={dest.Image}
                                            alt=""
                                            width="100"
                                            height="100"
                                        />
                                    </td>

                                    <td>
                                        <Link to={`/editDestination/${dest._id}`} className='btn btn-warning m-2'>Edit</Link>

                                        <Button className='btn-danger rounded' onClick={(e) => handleShow(dest._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>


                    <Modal show={Show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this destination?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={handleDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className="d-flex justify-content-center gap-2">
                        <Button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            Prev
                        </Button>

                        <span className="align-self-center">
                            Page {page} of {totalPages}
                        </span>

                        <Button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </>
            )}

        </Container>
    );
};

export default Destinations;