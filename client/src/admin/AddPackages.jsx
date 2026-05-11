import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const AddPackage = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    price: "",
    duration: "",
    description: "",
    image: "",
    category: "",
    slots: ""
  });
  const [loading, setloading] = useState(false)


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
      setImage(uploadedImage.secure_url);
      console.log(uploadedImage.secure_url);
    }

    catch (error) {
      console.error("Image upload failed", error)
    }
    finally {
      setloading(false)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://travels-bp73.onrender.com/api/packages", formData);
      alert("Package Added Successfully!");

      setFormData({
        name: "",
        destination: "",
        price: "",
        duration: "",
        description: "",
        image: "",
        category: "",
        slots: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error adding package");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Add Travel Package</h3>

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

                <Button variant="primary" type="submit" className="w-100">
                  Add Package
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPackage;