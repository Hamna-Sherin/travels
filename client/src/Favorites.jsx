// // import React, { useEffect, useState } from "react";
// // import { Card, Row, Col } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// // import { FaHeart, FaTrash, FaMapMarkerAlt, FaBox } from "react-icons/fa";

// // const Favorites = () => {
// //     const navigate = useNavigate();
// //     // const [favItems, setFavItems] = useState([]);
// //     const [savedDestinations, setSavedDestinations] = useState([]);
// //     const [savedPackages, setSavedPackages] = useState([]);
// //     const [activeTab, setActiveTab] = useState("destinations");

// //     // useEffect(() => {
// //     //     const data = JSON.parse(localStorage.getItem("favourites")) || [];
// //     //     setFavItems(data);
// //     // }, []);

// //     useEffect(() => {
// //             setSavedDestinations(JSON.parse(localStorage.getItem("saved") || "[]"));
// //             setSavedPackages(JSON.parse(localStorage.getItem("savedPackages") || "[]"));
// //         }, []);

// //     // const removeItem = (id) => {
// //     //     const updated = favItems.filter(item => item._id !== id);
// //     //     setFavItems(updated);
// //     //     localStorage.setItem("favourites", JSON.stringify(updated));
// //     // };

// //     const removeDestination = (id) => {
// //         const updated = savedDestinations.filter(item => item._id !== id);
// //         setSavedDestinations(updated);
// //         localStorage.setItem("saved", JSON.stringify(updated));
// //     };

// //     const removePackage = (id) => {
// //         const updated = savedPackages.filter(item => item._id !== id);
// //         setSavedPackages(updated);
// //         localStorage.setItem("savedPackages", JSON.stringify(updated));
// //     };


// //     return (
// //         // <div className="destinations-section" style={{ minHeight: "80vh" }}>
// //         <div>

// //             {/* Heading */}
// //             <div className="text-center mb-5">
// //                 {/* <span className="section-tag">Your Collection</span> */}
// //                 <h2 className="section-title">Favourite Destinations</h2>
// //                 <hr className="services-divider" />
// //                 {/* <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}>
// //                     Destinations you love and want to explore.
// //                 </p> */}
// //             </div>

// //             {/* Empty state */}
// //             {favItems.length === 0 ? (
// //                 <div className="text-center py-5">
// //                     <FaHeart size={48} style={{ color: "var(--teal)", opacity: 0.25, display: "block", margin: "0 auto 16px" }} />
// //                     <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
// //                         No favourite destinations yet
// //                     </h5>
// //                     <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
// //                         Click the heart icon on any destination to add it here.
// //                     </p>
// //                     <button className="btn-explore" onClick={() => navigate("/")}>
// //                         Browse Destinations
// //                     </button>
// //                 </div>
// //             ) : (
// //                 <Row className="px-4 g-4">
// //                     {favItems.map((item) => (
// //                         <Col md={4} key={item._id}>
// //                             <Card className="destination-card">

// //                                 <div className="dest-img-wrapper">
// //                                     <Card.Img variant="top" src={item.Image} />
// //                                     <div className="dest-icons">
// //                                         <button
// //                                             className="dest-icon-btn active-heart"
// //                                             onClick={() => removeItem(item._id)}
// //                                             title="Remove from Favourites"
// //                                         >
// //                                             <FaHeart />
// //                                         </button>
// //                                     </div>
// //                                 </div>

// //                                 <Card.Body>
// //                                     <Card.Title>
// //                                         {item.Destination}, {item.Location}
// //                                     </Card.Title>
// //                                     <Card.Text>
// //                                         {item.Description}
// //                                     </Card.Text>

// //                                     <div className="d-flex gap-2 justify-content-center mt-2">
// //                                         <button
// //                                             className="btn-book"
// //                                             onClick={() => navigate(`/destination/${item._id}`)}
// //                                         >
// //                                             View Details
// //                                         </button>
// //                                         {/* <button
// //                                             className="dest-remove-btn"
// //                                             onClick={() => removeItem(item._id)}
// //                                         >
// //                                             <FaTrash /> Remove
// //                                         </button> */}
// //                                     </div>
// //                                 </Card.Body>

// //                             </Card>
// //                         </Col>
// //                     ))}
// //                 </Row>
// //             )}

// //         </div>
// //     );
// // };

// // export default Favorites;

// // import React, { useEffect, useState } from "react";
// // import { Card, Row, Col } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// // import { FaBookmark, FaTrash } from "react-icons/fa";

// // const Saved = () => {
// //     const navigate = useNavigate();
// //     const [savedItems, setSavedItems] = useState([]);

// //     useEffect(() => {
// //         const data = JSON.parse(localStorage.getItem("saved")) || [];
// //         setSavedItems(data);
// //     }, []);

// //     const removeItem = (id) => {
// //         const updated = savedItems.filter(item => item._id !== id);
// //         setSavedItems(updated);
// //         localStorage.setItem("saved", JSON.stringify(updated));
// //     };

// //     return (
// //         // <div className="destinations-section" style={{ minHeight: "80vh" }}>
// //         <div>

// //             {/* Heading */}
// //             {/* <div className="text-center mb-5"> */}
// //             <div className="text-center">
// //                 {/* <span className="section-tag">Your Collection</span> */}
// //                 <h2 className="section-title">Saved Destinations</h2>
// //                 <hr className="services-divider" />
// //                 {/* <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}> */}
// //                     {/* Places you've bookmarked to revisit later. */}
// //                 {/* </p> */}
// //             </div>

// //             {/* Empty state */}
// //             {savedItems.length === 0 ? (
// //                 <div className="text-center py-5">
// //                     <FaBookmark size={48} style={{ color: "var(--teal)", opacity: 0.25, marginBottom: "16px", display: "block", margin: "0 auto 16px" }} />
// //                     <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
// //                         No saved destinations yet
// //                     </h5>
// //                     <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
// //                         Click the bookmark icon on any destination to save it here.
// //                     </p>
// //                     <button className="btn-explore" onClick={() => navigate("/")}>
// //                         Browse Destinations
// //                     </button>
// //                 </div>
// //             ) : (
// //                 <Row className="px-4 g-4">
// //                     {savedItems.map((item) => (
// //                         <Col md={4} key={item._id}>
// //                             <Card className="destination-card">

// //                                 {/* Image */}
// //                                 <div className="dest-img-wrapper">
// //                                     <Card.Img variant="top" src={item.Image} />
// //                                     {/* Saved badge on image */}
// //                                     <div className="dest-icons">
// //                                         <button
// //                                             className="dest-icon-btn active-save"
// //                                             onClick={() => removeItem(item._id)}
// //                                             title="Remove from Saved"
// //                                         >
// //                                             <FaBookmark />
// //                                         </button>
// //                                     </div>
// //                                 </div>

// //                                 <Card.Body>
// //                                     <Card.Title>
// //                                         {item.Destination}, {item.Location}
// //                                     </Card.Title>
// //                                     <Card.Text>
// //                                         {item.Description}
// //                                     </Card.Text>

// //                                     <div className="d-flex gap-2 justify-content-center mt-2">
// //                                         <button
// //                                             className="btn-book"
// //                                             onClick={() => navigate(`/destination/${item._id}`)}
// //                                         >
// //                                             View Details
// //                                         </button>
// //                                         {/* <button
// //                                             className="dest-remove-btn"
// //                                             onClick={() => removeItem(item._id)}
// //                                         >
// //                                             <FaTrash /> Remove
// //                                         </button> */}
// //                                     </div>
// //                                 </Card.Body>

// //                             </Card>
// //                         </Col>
// //                     ))}
// //                 </Row>
// //             )}

// //         </div>
// //     );
// // };

// // export default Saved;

// import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaBookmark, FaMapMarkerAlt, FaBox } from "react-icons/fa";

// const Favorite = () => {
//     const navigate = useNavigate();
//     const [favoriteDestinations, setFavoriteDestinations] = useState([]);
//     const [favoritePackages, setFavoritePackages] = useState([]);
//     const [activeTab, setActiveTab] = useState("destinations");

//     useEffect(() => {
//         setFavoriteDestinations(JSON.parse(localStorage.getItem("favorite") || "[]"));
//         setFavoritePackages(JSON.parse(localStorage.getItem("favoritePackages") || "[]"));
//     }, []);

//     const removeDestination = (id) => {
//         const updated = favoriteDestinations.filter(item => item._id !== id);
//         setFavoriteDestinations(updated);
//         localStorage.setItem("favorite", JSON.stringify(updated));
//     };

//     const removePackage = (id) => {
//         const updated = favoritePackages.filter(item => item._id !== id);
//         setFavoritePackages(updated);
//         localStorage.setItem("favoritePackages", JSON.stringify(updated));
//     };

//     return (
//         <div>

//             {/* Heading */}
//             <div className="text-center mb-4">
//                 <h2 className="section-title">Favorite Collection</h2>
//                 <hr className="services-divider" />
//             </div>

//             {/* Tab Toggle */}
//             <div className="favorite-tab-row">
//                 <button
//                     className={`favorite-tab ${activeTab === "destinations" ? "active" : ""}`}
//                     onClick={() => setActiveTab("destinations")}
//                 >
//                     <FaMapMarkerAlt /> Destinations
//                     {favoriteDestinations.length > 0 && (
//                         <span className="favorite-tab-count">{favoriteDestinations.length}</span>
//                     )}
//                 </button>
//                 <button
//                     className={`favorite-tab ${activeTab === "packages" ? "active" : ""}`}
//                     onClick={() => setActiveTab("packages")}
//                 >
//                     <FaBox /> Packages
//                     {favoritePackages.length > 0 && (
//                         <span className="favorite-tab-count">{favoritePackages.length}</span>
//                     )}
//                 </button>
//             </div>

//             {/* ── DESTINATIONS TAB ── */}
//             {activeTab === "destinations" && (
//                 <>
//                     {favoriteDestinations.length === 0 ? (
//                         <EmptyState
//                             message="No favorite destinations yet"
//                             sub="Click on the heart icon on any destination to save it here."
//                             onBrowse={() => navigate("/")}
//                         />
//                     ) : (
//                         <Row className="px-4 g-4 mt-2">
//                             {favoriteDestinations.map((item) => (
//                                 <Col md={4} key={item._id}>
//                                     <Card className="destination-card">
//                                         <div className="dest-img-wrapper">
//                                             <Card.Img variant="top" src={item.Image} />
//                                             <div className="dest-icons">
//                                                 <button
//                                                     className="dest-icon-btn active-save"
//                                                     onClick={() => removeDestination(item._id)}
//                                                     title="Remove from Favorite"
//                                                 >
//                                                     <FaBookmark />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <Card.Body>
//                                             <Card.Title>{item.Destination}, {item.Location}</Card.Title>
//                                             <Card.Text>{item.Description}</Card.Text>
//                                             <div className="d-flex gap-2 justify-content-center mt-2">
//                                                 <button
//                                                     className="btn-book"
//                                                     onClick={() => navigate(`/destination/${item._id}`)}
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             ))}
//                         </Row>
//                     )}
//                 </>
//             )}

//             {/* ── PACKAGES TAB ── */}
//             {activeTab === "packages" && (
//                 <>
//                     {favoritePackages.length === 0 ? (
//                         <EmptyState
//                             message="No favorite packages yet"
//                             sub="Click the bookmark icon on any package to save it here."
//                             onBrowse={() => navigate("/#packages")}
//                         />
//                     ) : (
//                         <Row className="px-4 g-4 mt-2">
//                             {favoritePackages.map((pkg) => (
//                                 <Col md={4} key={pkg._id}>
//                                     <div className="pkg-card">
//                                         <div className="pkg-img-wrap">
//                                             <img src={pkg.image} alt={pkg.name} />
//                                             <button
//                                                 className="favorite-pkg-remove"
//                                                 onClick={() => removePackage(pkg._id)}
//                                                 title="Remove from Favorite"
//                                             >
//                                                 <FaBookmark />
//                                             </button>
//                                         </div>
//                                         <div className="pkg-body">
//                                             <h5>{pkg.name}</h5>
//                                             {pkg.duration && (
//                                                 <div className="pkg-meta">
//                                                     <span>📅 {pkg.duration}</span>
//                                                     {pkg.pax && <span>👥 {pkg.pax}</span>}
//                                                 </div>
//                                             )}
//                                             <div className="pkg-price-row">
//                                                 <div className="pkg-price">
//                                                     <sup>₹</sup>{pkg.price?.toLocaleString("en-IN")}
//                                                     <span> / person</span>
//                                                 </div>
//                                                 <button
//                                                     className="btn-book"
//                                                     onClick={() => navigate(`/package/${pkg._id}`)}
//                                                 >
//                                                     View
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                     )}
//                 </>
//             )}

//         </div>
//     );
// };

// /* ── EMPTY STATE ── */
// const EmptyState = ({ message, sub, onBrowse }) => (
//     <div className="text-center py-5">
//         <FaBookmark size={48} style={{ color: "var(--teal)", opacity: 0.25, display: "block", margin: "0 auto 16px" }} />
//         <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
//             {message}
//         </h5>
//         <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
//             {sub}
//         </p>
//         <button className="btn-explore" onClick={onBrowse}>
//             Browse Now
//         </button>
//     </div>
// );

// export default Favorite;

import CollectionPage from "./CollectionPage";

export default function Favorite() {
  return <CollectionPage type="favorite" />;
}