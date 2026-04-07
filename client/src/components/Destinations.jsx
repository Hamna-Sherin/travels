import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Destinations = () => {

    const navigate = useNavigate();

    const [Destination, setDestination] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        // axios.get('http://localhost:5000/destination')
        //     .then(result => setDestination(result.data.destinations))
        //     .catch(err => console.log(err))
        axios.get(`http://localhost:5000/destination`, {
            params: {
                page,
                limit: 6
                // search
            }
        })
            .then(result => {
                setDestination(result.data.destinations)
                console.log(result.data.totalPages);
                
                setTotalPages(result.data.totalPages)

            })
            .catch(err => console.log(err))
    }, [page])



    return (
        <div>
            <div className="text-center m-5">
                <h2 className="section-title">Explore our Tourist Destinations</h2>
                <div className="title-line"></div>
                <p className="section-desc">
                    Lorem Ipsum is simply dummy text the printing and typesetting industry.
                </p>
            </div>
            <Row className='ms-4'>
                {Destination.map((dest) => {
                    return (
                        <Col md={4}>
                            {/* <Card className="h-100 shadow-sm"> */}
                            {/* <Card className='m-2' style={{ width: '23rem', height: "460px", display:"flex", flexDirection:"column"}}>
                                <Card.Img variant="top" src={dest.Image} style={{ height: "250px" }} />
                                <Card.Body className='text-center'>
                                    <div style={{height:"140px", alignContent:"center"}}>
                                        <Card.Title className='fw-bold'>{dest.Destination},{dest.Location}</Card.Title>
                                        <Card.Text>
                                            {dest.Description}
                                        </Card.Text>
                                    </div>
                                    <div>
                                        <Button onClick={() => navigate(`/destination/${dest._id}`)}>Read More</Button>
                                    </div>
                                </Card.Body>
                            </Card> */}
                            <Card className="destination-card m-2">
                                <Card.Img variant="top" src={dest.Image} />

                                <Card.Body>
                                    <div>
                                        <Card.Title>
                                            {dest.Destination}, {dest.Location}
                                        </Card.Title>

                                        <Card.Text>
                                            {dest.Description}
                                        </Card.Text>
                                    </div>

                                    <div className="btn-wrapper text-center">
                                        <Button onClick={() => navigate(`/destination/${dest._id}`)}>
                                            Read More
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
            <div className="d-flex justify-content-center gap-2 m-3">
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
        </div>
    )
}

export default Destinations