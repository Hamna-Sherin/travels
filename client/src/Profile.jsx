import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("user");
            navigate("/login");
        }
    };

    if (!user) {
        return (
            <Container className="mt-5 text-center">
                <h4>You are not logged in</h4>
                <Button onClick={() => navigate("/login")}>Go to Login</Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5 pt-5 d-flex justify-content-center">
            <Card style={{ width: "350px" }} className="shadow p-3">
                <Card.Body className="text-center">

                    <h3 className="mb-3">My Profile</h3>

                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>

                    <Button
                        variant="danger"
                        className="mt-3 w-100"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;