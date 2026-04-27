import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios.get(`https://travels-bp73.onrender.com/destination/${id}`)
      .then(res => setDestination(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!destination) return
  <Spinner animation="border" variant="success" />

  //<h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-3">

      {/* Title */}
      <h1 className="text-center fw-bold mb-4">
        {destination.Destination}
      </h1>

      <div className="shadow rounded overflow-hidden bg-white">

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-6 col-12 p-3">
            <img
              src={destination.Image}
              alt=""
              className="img-fluid rounded destination-detail-img"
            />
          </div>

          {/* Content */}
          <div className="col-lg-6 col-12 p-4">
            <p className="destination-detail-text">
              {destination.Details}
            </p>
          </div>

        </div>
      </div>

      <div className="mt-3 text-center">
        <Button onClick={() => navigate(-1)}>← Back</Button>
      </div>

    </div>
  );
};

export default DestinationDetails;