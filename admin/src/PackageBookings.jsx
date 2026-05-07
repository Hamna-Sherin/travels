import { useEffect, useState } from "react";
import { Table, Button, Spinner, Form, Badge } from "react-bootstrap";

const API = "https://travels-bp73.onrender.com";

export default function AdminPackageBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const res = await fetch(`${API}/package-bookings`);
            const data = await res.json();
            setBookings(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, status) => {
        await fetch(`${API}/package-bookings/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status })
        });

        setBookings(prev =>
            prev.map(b => b._id === id ? { ...b, status } : b)
        );
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this booking?")) return;

        await fetch(`${API}/package-bookings/${id}`, {
            method: "DELETE"
        });

        setBookings(prev => prev.filter(b => b._id !== id));
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner />
            </div>
        );
    }

    return (
        <div style={{ padding: "30px" }}>
            <h2 className="mb-4">Package Bookings</h2>

            <Table bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Package</th>
                        <th>Guests</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {bookings.map((b, i) => (
                        <tr key={b._id}>
                            <td>{i + 1}</td>
                            <td>{b.name}</td>
                            <td>{b.email}</td>
                            <td>{b.phone}</td>
                            <td>
                                <Badge bg="info">{b.packageName}</Badge>
                            </td>
                            <td>{b.guests}</td>
                            <td>{b.date?.substring(0, 10)}</td>

                            <td>
                                <Form.Select
                                    value={b.status}
                                    onChange={(e) =>
                                        handleStatusChange(b._id, e.target.value)
                                    }
                                >
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="cancelled">Cancelled</option>
                                </Form.Select>
                            </td>

                            <td>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(b._id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}