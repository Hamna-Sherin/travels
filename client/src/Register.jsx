import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://travels-bp73.onrender.com/register", form);

            toast.success("Registered Successfully ✅");

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Registration Failed ❌");
        }
    };

    return (
        <div className="auth-section">
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col md={5}>
                        <Card className="auth-card shadow-lg">
                            <Card.Body>

                                <h3 className="text-center mb-4">Register</h3>

                                <Form onSubmit={handleSubmit}>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={form.phone}
                                            pattern="[0-9]{10}"
                                            title="Enter 10 digit number"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button type="submit" className="w-100">
                                        Register
                                    </Button>

                                </Form>

                                <p className="text-center mt-3">
                                    Already have an account?{" "}
                                    <span
                                        className="auth-link"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
                                    </span>
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;