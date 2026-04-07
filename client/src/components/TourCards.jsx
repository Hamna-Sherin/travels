// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaHeart, FaMapMarkerAlt, FaRupeeSign, FaStar, FaStarHalf } from "react-icons/fa";
// import { GoClockFill } from "react-icons/go";
// import card1 from "../images/trending1.jpg"
// import card2 from "../images/trending2.jpg"
// import card3 from "../images/trending3.jpg"
// import card4 from "../images/trending4.webp"
// import card5 from "../images/trending5.jpg"
// import card6 from "../images/trending6.jpg"



// const TourCards = () => {

//     const tours = [
//         {
//             id: 1,
//             image: card1,
//             price: <div> <FaRupeeSign />24000.</div>,
//             location: "Kumarakom, Kottayam ",
//             resort: "Coconut Lagoon, CGH Earth",
//             tag: "25% OFF",
//             activity: "Serene retreat on the banks of Vembanad Lake",
//             reviews: "38 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
//         },
//         {
//             id: 2,
//             image: card2,
//             price: <div> <FaRupeeSign />7400.00 </div>,
//             location: "Thiruvananthapuram",
//             resort: "Poovar Island Resort",
//             activity: "Unique landscape where the Neyyar River meets the Arabian Sea",
//             reviews: "48 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /> <FaStarHalf /> </div>
//         },
//         {
//             id: 3,
//             image: card3,
//             price: <div> <FaRupeeSign />5731.00 </div>,
//             location: "Munnar, Idukki ",
//             resort: "Tea County Resort",
//             tag: "FEATURED",
//             activity: "A premier, upscale hill resort offering views of tea plantations and misty valleys",
//             reviews: "32 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
//         },
//         {
//             id: 4,
//             image: card4,
//             price: <div> <FaRupeeSign />6981.00 </div>,
//             location: "Vythiri, Wayanad",
//             resort: "Vythiri Mist Resort",
//             activity: "Serene escape with picturesque location amidst lush rainforest and waterfalls",
//             reviews: "21 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /> </div>
//         },
//         {
//             id: 5,
//             image: card5,
//             price: <div> <FaRupeeSign />6750.00 </div>,
//             location: "Ooty, Tamil Nadu",
//             resort: "Mango Hill Shola Resort",
//             tag: "25% OFF",
//             activity: " ultimate relaxation resort with its range of comfortable rooms and a delicious restaurant",
//             reviews: "48 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /> <FaStarHalf /> </div>
//         },
//         {
//             id: 6,
//             image: card6,
//             price: <div> <FaRupeeSign />17422.00 </div>,
//             location: "Thekkady, Idukki",
//             resort: "Hills and Hues Resorts",
//             activity: "Picturesque retreat on a mountaintop, offering stunning 360-degree views and infinity pool",
//             reviews: "18 Reviews",
//             duration: "3 days & 2 nights",
//             rating: <div className="text-warning"> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
//         }
//     ];

//     return (
//         <section className="holiday-section m-5">
//             <Container>

//                 {/* HEADING */}
//                 <div className="text-center mb-5">
//                     <h2 className="section-title">Perfect Holiday Plan</h2>
//                     <div className="title-line"></div>
//                     <p className="section-desc">
//                         Lorem Ipsum is simply dummy text the printing and typesetting industry.
//                     </p>
//                 </div>

//                 {/* CARDS */}
//                 <Row>
//                     {tours.map((tour) => (
//                         <Col md={4} key={tour.id}>
//                             <div className="tour-card">
//                                 <div
//                                     className="tour-image"
//                                     style={{ backgroundImage: `url(${tour.image})` }}
//                                 >
//                                     {tour.tag && <span className="tour-tag">{tour.tag}</span>}

//                                     <span className="wishlist">
//                                         <FaHeart />
//                                     </span>

//                                     {/* PRICE */}
//                                     <div className="price-text" style={{textShadow:" 0 3px 8px rgba(0, 0, 0, 0.8)"}}>
//                                         <span>{tour.price}</span>
//                                     </div>
//                                 </div>

//                                 {/* LOCATION */}
//                                 <div className="tour-info pt-2">
//                                     <FaMapMarkerAlt />
//                                     <span>{tour.resort} <br /> {tour.location} 
//                                     </span>
//                                 </div>

//                                 <hr style={{ borderTop: '1px dashed #a6a3a3', backgroundColor: 'transparent' }}/>

//                                 <div className="tour-info">
//                                     <span>{tour.activity}</span>
//                                 </div>
//                                 {/* <hr className="m-0 " /> */}
//                                 <hr style={{ borderTop: '1px dashed #a6a3a3'  }}/>

//                                 <div className="tour-info pb-2 pt-0">
//                                     <span>{tour.rating} </span>
//                                     <span style={{color:"#ff2d55"}}>{tour.reviews}</span>
//                                 </div>
//                                 <p className="text-secondary p-2"> <span> <GoClockFill /> </span> {tour.duration}</p>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>

//             </Container>
//         </section>
//     );
// };

// export default TourCards;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PackagesList = () => {
  const [packages, setPackages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/packages")
      .then(res => setPackages(res.data.packages))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="mt-4">
      {/* <h2 className="text-center mb-4">Travel Packages</h2> */}
      <div className="text-center m-5">
        <h2 className="section-title">Perfect Holiday Plan</h2>
        <div className="title-line"></div>
        <p className="section-desc">
          Lorem Ipsum is simply dummy text the printing and typesetting industry.
        </p>
      </div>

      <Row>
        {packages.map((pkg) => (
          // <Col md={4} sm={6} xs={12} key={pkg._id} className="mb-4">
          //   <Card className="h-100 shadow">

          //     IMAGE
          //     <Card.Img
          //       variant="top"
          //       src={pkg.image}
          //       style={{ height: "200px", objectFit: "cover" }}
          //     />

          //     <Card.Body className="d-flex flex-column">

          //       TITLE
          //       <Card.Title>{pkg.name}</Card.Title>

          //       DESTINATION
          //       <Card.Text>
          //         📍 {pkg.destination}
          //       </Card.Text>

          //       DETAILS
          //       <Card.Text>
          //         💰 ₹{pkg.price} <br />
          //         ⏳ {pkg.duration}
          //       </Card.Text>

          //       DATES
          //       <Card.Text>
          //         📅 {pkg.checkIn?.substring(0, 10)} → {pkg.checkOut?.substring(0, 10)}
          //       </Card.Text>

          //       DESCRIPTION
          //       <Card.Text className="text-muted">
          //         {pkg.description?.slice(0, 60)}...
          //       </Card.Text>

          //       BUTTON
          //       <Button
          //         variant="primary"
          //         className="mt-auto"
          //         onClick={() => navigate(`/package/${pkg._id}`)}
          //       >
          //         View Details
          //       </Button>

          //     </Card.Body>
          //   </Card>
          // </Col>

          <Col md={4} sm={6} xs={12} key={pkg._id} className="mb-4">
            <div className="custom-card">

              {/* IMAGE */}
              <div className="card-img-wrapper">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="card-img"
                />

                {/* OVERLAY */}
                <div className="card-overlay">
                  <h5>{pkg.name}</h5>
                  <p>📍 {pkg.destination}</p>

                  <div className="card-bottom">
                    <span className="price">₹{pkg.price}</span>

                    <button onClick={() => navigate(`/package/${pkg._id}`)}>
                      View →
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button
          variant="danger"
          onClick={() => navigate("/all-packages")}
        >
          Explore More →
        </Button>
      </div>
    </Container>
  );
};

export default PackagesList;