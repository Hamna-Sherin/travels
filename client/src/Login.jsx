import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post("http://localhost:5000/login", form);

        // alert("Login successful ✅");

        console.log(res.data);

        // Optional: store user
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/");

    } catch (err) {
        console.log(err);
        alert(err.response?.data?.message || "Login failed ❌");
    }
};

    return (
        <div className="auth-section">
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col md={5}>
                        <Card className="auth-card shadow-lg">
                            <Card.Body>

                                <h3 className="text-center mb-4">Login</h3>

                                <Form onSubmit={handleSubmit}>

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
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={form.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button type="submit" className="w-100">
                                        Login
                                    </Button>

                                </Form>

                                <p className="text-center mt-3">
                                    Don't have an account?{" "}
                                    <span
                                        className="auth-link"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
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

export default Login;