import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleStatusChange = (id, status) => {
    axios.put(`http://localhost:5000/bookings/${id}`, { status })
      .then(() => {
        setBookings(prev =>
          prev.map(b =>
            b._id === id ? { ...b, status } : b
          )
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Taxi Bookings</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Date</th>
            <th>Time</th>
            <th>Vehicle</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, index) => (
            <tr key={b._id}>
              <td>{index + 1}</td>
              <td>{b.name}</td>
              <td>{b.phone}</td>

              <td>
                {b.pickupStreet}, {b.pickupCity}
              </td>

              <td>
                {b.dropStreet}, {b.dropCity}
              </td>

              <td>{b.pickupDate}</td>
              <td>{b.pickupTime}</td>
              <td>{b.vehicleType}</td>
              <td>
                <select
                  value={b.status || "Pending"}
                  onChange={(e) => handleStatusChange(b._id, e.target.value)}
                  className={`form-select ${b.status === "Confirm" ? "bg-success text-white" :
                    b.status === "Rejected" ? "bg-danger text-white" :
                      b.status === "Cancel" ? "bg-secondary text-white" : ""
                    }`}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirm">Confirm</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Cancel">Cancel</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminBookings;