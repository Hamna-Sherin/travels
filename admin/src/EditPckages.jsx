import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditPackage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        price: "",
        duration: "",
        description: "",
        // image: "",
        category: "",
        slots: "",
        guests: "",
    });
    const [loading, setloading] = useState(false)
    const [image, setimage] = useState("")

    // 🧠 Fetch existing package
    useEffect(() => {
        axios.get(`http://localhost:5000/getPackage/` + id)
            .then(res => {
                setFormData(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    // ✏️ Handle change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);


        if (!file) return
        setloading(true)

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "sample_upload")
        data.append("cloud_name", "dg6st72lq")

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dg6st72lq/image/upload", {
                method: "POST",
                body: data
            })

            const uploadedImage = await res.json()
            setimage(uploadedImage.secure_url);
            // console.log(imageURL);
        }

        catch (error) {
            console.error("Image upload failed", error)
        }
        finally {
            setloading(false)
        }
    }

    // 🔄 Update package
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/editPackage/` + id, {formData,image})
            .then(res => {
                navigate("/packages");
            })
            .catch(err => console.log(err));
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow">
                        <Card.Body>
                            <h3 className="text-center mb-4">Edit Package</h3>

                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Package Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Destination</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Max Guests</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Duration</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="duration"
                                                placeholder="e.g. 3 Days"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Slots</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="slots"
                                                value={formData.slots}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formBasicImage">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" placeholder="Upload image" onChange={handleFileUpload} disabled={loading} name='image' />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    {loading === true ? "Uploading..." : "Update"}
                                </Button>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EditPackage;