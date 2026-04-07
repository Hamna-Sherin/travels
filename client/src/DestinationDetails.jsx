import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const DestinationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/destination/${id}`)
            .then(res => setDestination(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!destination) return <h3 className="text-center mt-5">Loading...</h3>;

    return (
        <div className="container mt-3 ">

            {/* Title */}
            <h1 className="text-center fw-bold mb-4">
                {destination.Destination}
            </h1>

            <div
                className="d-flex flex-wrap align-items-center shadow rounded overflow-hidden"
                style={{ background: "#fff" }}
            >

                {/* Image */}
                <div className="w-50 p-3">
                    <img
                        src={destination.Image}
                        alt=""
                        className="w-100 rounded"
                        style={{
                            height: "400px",
                            objectFit: "cover"
                        }}
                    />
                </div>

                {/* Content */}
                <div className="w-50 p-4">
                    <p
                        style={{
                            lineHeight: "1.8",
                            fontSize: "16px",
                            color: "#555",
                            textAlign: "justify"
                        }}
                    >
                        {destination.Details}
                    </p>
                </div>

            </div>
            <div className="mt-3 text-center">
                <Button onClick={() => navigate(-1)}>← Back</Button>
            </div>
        </div>
    );
};

export default DestinationDetails;