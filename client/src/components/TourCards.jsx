// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaCalendarAlt, FaUsers, FaCheckCircle, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
// import { FaHeart, FaBookmark } from 'react-icons/fa';


// const PackagesList = () => {
//   const [packages, setPackages] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [saved, setSaved] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("https://travels-bp73.onrender.com/packages")
//       .then(res => setPackages(res.data.packages))
//       .catch(err => console.log(err));
//   }, []);

//   useEffect(() => {
//     const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
//     setSaved(savedItems.map(item => item._id));
//   }, []);

//   useEffect(() => {
//     const favItems = JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavourites(favItems.map(item => item._id));
//   }, []);

//   const toggleFavourite = (item) => {
//     let favItems = JSON.parse(localStorage.getItem("favourites")) || [];

//     const exists = favItems.find((i) => i._id === item._id);

//     if (exists) {
//       favItems = favItems.filter((i) => i._id !== item._id);
//     } else {
//       favItems.push(item);
//     }

//     localStorage.setItem("favourites", JSON.stringify(favItems));

//     // update UI state (only IDs)
//     setFavourites(favItems.map(i => i._id));
//   };

//   const toggleSaved = (item) => {
//     let savedItems = JSON.parse(localStorage.getItem("saved")) || [];

//     const exists = savedItems.find((i) => i._id === item._id);

//     if (exists) {
//       savedItems = savedItems.filter((i) => i._id !== item._id);
//     } else {
//       savedItems.push(item);
//     }

//     localStorage.setItem("saved", JSON.stringify(savedItems));

//     // update local state (only IDs for UI)
//     setSaved(savedItems.map(i => i._id));
//   };

//   // Badge style based on tag from backend (optional field)
//   const getBadgeClass = (tag) => {
//     if (!tag) return null;
//     const t = tag.toLowerCase();
//     if (t.includes("best")) return "hot";
//     if (t.includes("popular")) return "popular";
//     if (t.includes("new")) return "new-tag";
//     if (t.includes("couple")) return "couple";
//     if (t.includes("summer")) return "summer";
//     return "popular";
//   };

//   return (
//     <div id="packages" className="packages-section">
//       <Container>

//         {/* Heading */}
//         <div className="text-center mb-5">
//           <span className="section-tag">Our Offerings</span>
//           <h2 className="section-title">Featured Tour Packages</h2>
//           <div className="underline mx-auto my-3"></div>
//           <p className="text-muted mx-auto mt-3" style={{ maxWidth: "480px", fontSize: "0.92rem", lineHeight: "1.8" }}>
//             Handpicked itineraries across God's Own Country — all inclusive, no hidden charges.
//           </p>
//         </div>

//         <Row className="g-4">

//           {/* DYNAMIC PACKAGE CARDS */}
//           {packages.map((pkg) => (
//             <Col md={4} sm={6} xs={12} key={pkg._id}>
//               <div className="pkg-card">

//                 <div className="pkg-img-wrap">
//                   <img src={pkg.image} alt={pkg.name} />
//                   {pkg.tag && (
//                     <span className={`pkg-badge ${getBadgeClass(pkg.tag)}`}>
//                       {pkg.tag}
//                     </span>
//                   )}
//                   <div className="dest-icons">
//                     <button
//                       className={`dest-icon-btn ${favourites.includes(pkg._id) ? 'active-heart' : ''}`}
//                       onClick={() => toggleFavourite(pkg)}
//                       title="Add to Favourites"
//                     >
//                       <FaHeart />
//                     </button>
//                     <button
//                       className={`dest-icon-btn ${saved.includes(pkg._id) ? 'active-save' : ''}`}
//                       onClick={() => toggleSaved(pkg)}
//                       title="Save"
//                     >
//                       <FaBookmark />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pkg-body">
//                   <h5>{pkg.name}</h5>

//                   <div className="pkg-meta">
//                     {pkg.duration && (
//                       <span><FaCalendarAlt /> {pkg.duration}</span>
//                     )}
//                     {pkg.pax && (
//                       <span><FaUsers /> {pkg.pax}</span>
//                     )}
//                   </div>

//                   {pkg.highlights && pkg.highlights.length > 0 && (
//                     <ul className="pkg-features">
//                       {pkg.highlights.map((item, i) => (
//                         <li key={i}><FaCheckCircle /> {item}</li>
//                       ))}
//                     </ul>
//                   )}



//                   <div className="card-bottom">
//                     <span className="price">₹{pkg.price}</span>

//                     <button className="btn-book" onClick={() => navigate(`/package/${pkg._id}`)}>
//                       View →
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             </Col>
//           ))}

//           {/* CUSTOM PACKAGE CARD */}
//           <Col md={4} sm={6} xs={12}>
//             <div className="pkg-card-custom">
//               <FaMapMarkedAlt className="custom-icon" />
//               <h5>Custom Kerala Package</h5>
//               <p>
//                 Want something unique? Tell us your dates, budget & preferences —
//                 we'll craft the perfect itinerary just for you.
//               </p>
//               <a
//                 href="https://wa.me/919876543210?text=I want a custom Kerala package"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-plan"
//               >
//                 <FaWhatsapp /> Plan My Trip
//               </a>
//             </div>
//           </Col>

//         </Row>

//         {/* Explore More */}
//         <div className="text-center mt-5">
//           <button className="btn-explore" onClick={() => navigate("/all-packages")}>
//             Explore All Packages →
//           </button>
//         </div>

//       </Container>
//     </div>
//   );
// };

// export default PackagesList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUsers, FaCheckCircle, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { FaHeart, FaBookmark } from 'react-icons/fa';

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://travels-bp73.onrender.com/packages")
      .then(res => setPackages(res.data.packages))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // load saved PACKAGES (separate from saved destinations)
    const savedItems = JSON.parse(localStorage.getItem("savedPackages")) || [];
    setSaved(savedItems.map(item => item._id));
  }, []);

  useEffect(() => {
    const favItems = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(favItems.map(item => item._id));
  }, []);

  const toggleFavourite = (item) => {
    let favItems = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = favItems.find(i => i._id === item._id);
    favItems = exists
      ? favItems.filter(i => i._id !== item._id)
      : [...favItems, item];
    localStorage.setItem("favourites", JSON.stringify(favItems));
    setFavourites(favItems.map(i => i._id));
  };

  const toggleSaved = (item) => {
    // saves to "savedPackages" — separate from destination "saved"
    let savedItems = JSON.parse(localStorage.getItem("savedPackages")) || [];
    const exists = savedItems.find(i => i._id === item._id);
    savedItems = exists
      ? savedItems.filter(i => i._id !== item._id)
      : [...savedItems, item];
    localStorage.setItem("savedPackages", JSON.stringify(savedItems));
    setSaved(savedItems.map(i => i._id));
  };

  const getBadgeClass = (tag) => {
    if (!tag) return null;
    const t = tag.toLowerCase();
    if (t.includes("best")) return "hot";
    if (t.includes("popular")) return "popular";
    if (t.includes("new")) return "new-tag";
    if (t.includes("couple")) return "couple";
    if (t.includes("summer")) return "summer";
    return "popular";
  };

  return (
    <div id="packages" className="packages-section">
      <Container>

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">Our Offerings</span>
          <h2 className="section-title">Featured Tour Packages</h2>
          <div className="underline mx-auto my-3"></div>
          <p className="text-muted mx-auto mt-3" style={{ maxWidth: "480px", fontSize: "0.92rem", lineHeight: "1.8" }}>
            Handpicked itineraries across God's Own Country — all inclusive, no hidden charges.
          </p>
        </div>

        <Row className="g-4">

          {packages.map((pkg) => (
            <Col md={4} sm={6} xs={12} key={pkg._id}>
              <div className="pkg-card">

                <div className="pkg-img-wrap">
                  <img src={pkg.image} alt={pkg.name} />
                  {pkg.tag && (
                    <span className={`pkg-badge ${getBadgeClass(pkg.tag)}`}>
                      {pkg.tag}
                    </span>
                  )}
                  <div className="dest-icons">
                    <button
                      className={`dest-icon-btn ${favourites.includes(pkg._id) ? 'active-heart' : ''}`}
                      onClick={() => toggleFavourite(pkg)}
                      title="Add to Favourites"
                    >
                      <FaHeart />
                    </button>
                    <button
                      className={`dest-icon-btn ${saved.includes(pkg._id) ? 'active-save' : ''}`}
                      onClick={() => toggleSaved(pkg)}
                      title="Save Package"
                    >
                      <FaBookmark />
                    </button>
                  </div>
                </div>

                <div className="pkg-body">
                  <h5>{pkg.name}</h5>

                  <div className="pkg-meta">
                    {pkg.duration && <span><FaCalendarAlt /> {pkg.duration}</span>}
                    {pkg.pax && <span><FaUsers /> {pkg.pax}</span>}
                  </div>

                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <ul className="pkg-features">
                      {pkg.highlights.map((item, i) => (
                        <li key={i}><FaCheckCircle /> {item}</li>
                      ))}
                    </ul>
                  )}

                  {/* <div className="pkg-price-row">
                    <div className="pkg-price">
                      <sup>₹</sup>{pkg.price?.toLocaleString("en-IN")}
                      <span> / person</span>
                    </div>
                    <button className="btn-book" onClick={() => navigate(`/package/${pkg._id}`)}>
                      Book Now
                    </button>
                  </div> */}

                  <div className="card-bottom">
                    <span className="price">₹{pkg.price}</span>

                    <button className="btn-book" onClick={() => navigate(`/package/${pkg._id}`)}>
                      View →
                    </button>
                  </div>
                </div>

              </div>
            </Col>
          ))}

          {/* CUSTOM PACKAGE CARD */}
          <Col md={4} sm={6} xs={12}>
            <div className="pkg-card-custom">
              <FaMapMarkedAlt className="custom-icon" />
              <h5>Custom Kerala Package</h5>
              <p>
                Want something unique? Tell us your dates, budget & preferences —
                we'll craft the perfect itinerary just for you.
              </p>
              <a
                href="https://wa.me/919876543210?text=I want a custom Kerala package"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-plan"
              >
                <FaWhatsapp /> Plan My Trip
              </a>
            </div>
          </Col>

        </Row>

        <div className="text-center mt-5">
          <button className="btn-explore" onClick={() => navigate("/all-packages")}>
            Explore All Packages →
          </button>
        </div>

      </Container>
    </div>
  );
};

export default PackagesList;