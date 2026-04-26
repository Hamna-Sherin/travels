import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const DestinationCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://travels-bp73.onrender.com/destination", {
      params: {
        category
      }
    })
      .then(res => setData(res.data.destinations))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-capitalize fw-bold">
        {category} Destinations
      </h2>

      <Row>
        {data.map((dest) => (
          <Col xs={12} sm={6} lg={4} key={dest._id}>
            <Card className="destination-card m-2">
              <Card.Img
                variant="top"
                src={dest.Image}
                className="destination-img"
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{dest.Destination}</Card.Title>

                <Card.Text className="flex-grow-1">
                  {dest.Description}
                </Card.Text>

                <div className="text-center mt-2">
                  <Button
                    onClick={() => navigate(`/destination/${dest._id}`)}
                  >
                    Read More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DestinationCategory;