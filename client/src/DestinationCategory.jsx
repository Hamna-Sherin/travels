import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const DestinationCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/destination", {
      params: {
        category
      }
    })
      .then(res => setData(res.data.destinations))
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{category} Destinations</h2>

      <Row>
        {data.map((dest) => (
          <Col md={4} key={dest._id}>
            <Card className="m-2" style={{ width: '360px', height: "450px" }}>
              <Card.Img variant="top" src={dest.Image} style={{ height: "250px" }} />
              <Card.Body>
                <Card.Title>{dest.Destination}</Card.Title>
                <Card.Text>{dest.Description}</Card.Text>
                <div className="btn-wrapper text-center">
                  <Button onClick={() => navigate(`/destination/${dest._id}`)}>
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