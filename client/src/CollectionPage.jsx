// // import React, { useEffect, useState } from "react";
// // import { Card, Row, Col } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// // import { FaBookmark, FaMapMarkerAlt, FaBox } from "react-icons/fa";

// // const CollectionPage = ({ type }) => {
// //     const navigate = useNavigate();

// //     const isFavorite = type === "favorite";

// //     const [destinations, setDestinations] = useState([]);
// //     const [packages, setPackages] = useState([]);
// //     const [activeTab, setActiveTab] = useState("destinations");

// //     const destKey = isFavorite ? "favorite" : "saved";
// //     const pkgKey = isFavorite ? "favoritePackages" : "savedPackages";

// //     useEffect(() => {
// //         setDestinations(JSON.parse(localStorage.getItem(destKey) || "[]"));
// //         setPackages(JSON.parse(localStorage.getItem(pkgKey) || "[]"));
// //     }, [destKey, pkgKey]);

// //     const removeDestination = (id) => {
// //         const updated = destinations.filter(item => item._id !== id);
// //         setDestinations(updated);
// //         localStorage.setItem(destKey, JSON.stringify(updated));
// //     };

// //     const removePackage = (id) => {
// //         const updated = packages.filter(item => item._id !== id);
// //         setPackages(updated);
// //         localStorage.setItem(pkgKey, JSON.stringify(updated));
// //     };

// //     return (
// //         <div>

// //             {/* Heading */}
// //             <div className="text-center mb-4">
// //                 <h2 className="section-title">
// //                     {isFavorite ? "Favorite Collection" : "Saved Collection"}
// //                 </h2>
// //                 <hr className="services-divider" />
// //             </div>

// //             {/* Tabs */}
// //             <div className="saved-tab-row">
// //                 <button
// //                     className={`saved-tab ${activeTab === "destinations" ? "active" : ""}`}
// //                     onClick={() => setActiveTab("destinations")}
// //                 >
// //                     <FaMapMarkerAlt /> Destinations
// //                     {destinations.length > 0 && (
// //                         <span className="saved-tab-count">{destinations.length}</span>
// //                     )}
// //                 </button>

// //                 <button
// //                     className={`saved-tab ${activeTab === "packages" ? "active" : ""}`}
// //                     onClick={() => setActiveTab("packages")}
// //                 >
// //                     <FaBox /> Packages
// //                     {packages.length > 0 && (
// //                         <span className="saved-tab-count">{packages.length}</span>
// //                     )}
// //                 </button>
// //             </div>

// //             {/* DESTINATIONS */}
// //             {activeTab === "destinations" && (
// //                 destinations.length === 0 ? (
// //                     <EmptyState
// //                         message={`No ${type} destinations yet`}
// //                         sub="Click bookmark icon to save here."
// //                         onBrowse={() => navigate("/")}
// //                     />
// //                 ) : (
// //                     <Row className="px-4 g-4 mt-2">
// //                         {destinations.map((item) => (
// //                             <Col md={4} key={item._id}>
// //                                 <Card className="destination-card">
// //                                     <div className="dest-img-wrapper">
// //                                         <Card.Img variant="top" src={item.Image} />

// //                                         <div className="dest-icons">
// //                                             <button
// //                                                 className="dest-icon-btn active-save"
// //                                                 onClick={() => removeDestination(item._id)}
// //                                             >
// //                                                 <FaBookmark />
// //                                             </button>
// //                                         </div>
// //                                     </div>

// //                                     <Card.Body>
// //                                         <Card.Title>
// //                                             {item.Destination}, {item.Location}
// //                                         </Card.Title>

// //                                         <Card.Text>{item.Description}</Card.Text>

// //                                         <div className="text-center mt-2">
// //                                             <button
// //                                                 className="btn-book"
// //                                                 onClick={() => navigate(`/destination/${item._id}`)}
// //                                             >
// //                                                 View Details
// //                                             </button>
// //                                         </div>
// //                                     </Card.Body>
// //                                 </Card>
// //                             </Col>
// //                         ))}
// //                     </Row>
// //                 )
// //             )}

// //             {/* PACKAGES */}
// //             {activeTab === "packages" && (
// //                 packages.length === 0 ? (
// //                     <EmptyState
// //                         message={`No ${type} packages yet`}
// //                         sub="Click bookmark icon to save here."
// //                         onBrowse={() => navigate("/#packages")}
// //                     />
// //                 ) : (
// //                     <Row className="px-4 g-4 mt-2">
// //                         {packages.map((pkg) => (
// //                             <Col md={4} key={pkg._id}>
// //                                 <div className="pkg-card">

// //                                     <div className="pkg-img-wrap">
// //                                         <img src={pkg.image} alt={pkg.name} />

// //                                         <button
// //                                             className="saved-pkg-remove"
// //                                             onClick={() => removePackage(pkg._id)}
// //                                         >
// //                                             <FaBookmark />
// //                                         </button>
// //                                     </div>

// //                                     <div className="pkg-body">
// //                                         <h5>{pkg.name}</h5>

// //                                         {pkg.duration && (
// //                                             <div className="pkg-meta">
// //                                                 <span>📅 {pkg.duration}</span>
// //                                                 {pkg.pax && <span>👥 {pkg.pax}</span>}
// //                                             </div>
// //                                         )}

// //                                         <div className="pkg-price-row">
// //                                             <div className="pkg-price">
// //                                                 <sup>₹</sup>{pkg.price?.toLocaleString("en-IN")}
// //                                                 <span> / person</span>
// //                                             </div>

// //                                             <button
// //                                                 className="btn-book"
// //                                                 onClick={() => navigate(`/package/${pkg._id}`)}
// //                                             >
// //                                                 View
// //                                             </button>
// //                                         </div>
// //                                     </div>

// //                                 </div>
// //                             </Col>
// //                         ))}
// //                     </Row>
// //                 )
// //             )}

// //         </div>
// //     );
// // };

// // /* EMPTY STATE */
// // const EmptyState = ({ message, sub, onBrowse }) => (
// //     <div className="empty-state-wrapper">
// //         <FaBookmark size={48} className="empty-icon" />

// //         <h4 className="empty-title">{message}</h4>

// //         <p className="empty-sub">{sub}</p>

// //         <button className="btn-browse" onClick={onBrowse}>
// //             Browse Destinations
// //         </button>
// //     </div>
// // );

// // export default CollectionPage;

// import React, { useEffect, useState } from "react";
// import { Card, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { FaBookmark, FaMapMarkerAlt, FaBox, FaHeart, FaCalendarAlt, FaUsers } from "react-icons/fa";

// const CollectionPage = ({ type }) => {
//     const navigate = useNavigate();

//     const isFavorite = type === "favorite";

//     const [destinations, setDestinations] = useState([]);
//     const [packages, setPackages]         = useState([]);
//     const [activeTab, setActiveTab]       = useState("destinations");

//     const destKey = isFavorite ? "favorite" : "saved";
//     const pkgKey  = isFavorite ? "favoritePackages" : "savedPackages";

//     useEffect(() => {
//         setDestinations(JSON.parse(localStorage.getItem(destKey) || "[]"));
//         setPackages(JSON.parse(localStorage.getItem(pkgKey) || "[]"));
//     }, [destKey, pkgKey]);

//     const removeDestination = (id) => {
//         const updated = destinations.filter(item => item._id !== id);
//         setDestinations(updated);
//         localStorage.setItem(destKey, JSON.stringify(updated));
//     };

//     const removePackage = (id) => {
//         const updated = packages.filter(item => item._id !== id);
//         setPackages(updated);
//         localStorage.setItem(pkgKey, JSON.stringify(updated));
//     };

//     const ActiveIcon  = isFavorite ? FaHeart : FaBookmark;
//     const activeClass = isFavorite ? "active-heart" : "active-save";

//     return (
//         <div className="destinations-section" style={{ minHeight: "100vh" }}>

//             {/* Heading */}
//             <div className="text-center mb-2">
//                 <span className="section-tag">Your Collection</span>
//                 <h2 className="section-title">
//                     {isFavorite ? "Favorite Collection" : "Saved Collection"}
//                 </h2>
//                 <hr className="services-divider" />
//                 <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}>
//                     {isFavorite
//                         ? "Destinations and packages you love and want to explore."
//                         : "Places and packages you've bookmarked to revisit later."}
//                 </p>
//             </div>

//             {/* Tab Toggle */}
//             <div className="saved-tab-row mb-4">
//                 <button
//                     className={`saved-tab ${activeTab === "destinations" ? "active" : ""}`}
//                     onClick={() => setActiveTab("destinations")}
//                 >
//                     <FaMapMarkerAlt /> Destinations
//                     {destinations.length > 0 && (
//                         <span className="saved-tab-count">{destinations.length}</span>
//                     )}
//                 </button>
//                 <button
//                     className={`saved-tab ${activeTab === "packages" ? "active" : ""}`}
//                     onClick={() => setActiveTab("packages")}
//                 >
//                     <FaBox /> Packages
//                     {packages.length > 0 && (
//                         <span className="saved-tab-count">{packages.length}</span>
//                     )}
//                 </button>
//             </div>

//             {/* ── DESTINATIONS ── */}
//             {activeTab === "destinations" && (
//                 destinations.length === 0 ? (
//                     <EmptyState
//                         icon={<ActiveIcon size={40} />}
//                         message={`No ${isFavorite ? "favorite" : "saved"} destinations yet`}
//                         sub={`Click the ${isFavorite ? "heart" : "bookmark"} icon on any destination to add it here.`}
//                         onBrowse={() => navigate("/")}
//                     />
//                 ) : (
//                     <Row className="px-4 g-4">
//                         {destinations.map((item) => (
//                             <Col lg={3} md={4} sm={6} key={item._id}>
//                                 <Card className="destination-card h-100">
//                                     <div className="dest-img-wrapper">
//                                         <Card.Img variant="top" src={item.Image} />
//                                         <div className="dest-icons">
//                                             <button
//                                                 className={`dest-icon-btn ${activeClass}`}
//                                                 onClick={() => removeDestination(item._id)}
//                                                 title={`Remove from ${isFavorite ? "Favorites" : "Saved"}`}
//                                             >
//                                                 <ActiveIcon />
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <Card.Body className="d-flex flex-column">
//                                         <Card.Title>{item.Destination}, {item.Location}</Card.Title>
//                                         <Card.Text className="flex-grow-1">{item.Description}</Card.Text>
//                                         <div className="text-center mt-3">
//                                             <button
//                                                 className="btn-book"
//                                                 onClick={() => navigate(`/destination/${item._id}`)}
//                                             >
//                                                 View Details
//                                             </button>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 )
//             )}

//             {/* ── PACKAGES ── */}
//             {activeTab === "packages" && (
//                 packages.length === 0 ? (
//                     <EmptyState
//                         icon={<ActiveIcon size={40} />}
//                         message={`No ${isFavorite ? "favorite" : "saved"} packages yet`}
//                         sub={`Click the ${isFavorite ? "heart" : "bookmark"} icon on any package to add it here.`}
//                         onBrowse={() => navigate("/#packages")}
//                     />
//                 ) : (
//                     <Row className="px-4 g-4">
//                         {packages.map((pkg) => (
//                             <Col lg={3} md={4} sm={6} key={pkg._id}>
//                                 <div className="pkg-card h-100">
//                                     <div className="pkg-img-wrap">
//                                         <img src={pkg.image} alt={pkg.name} />
//                                         <div className="dest-icons">
//                                             <button
//                                                 className={`dest-icon-btn ${activeClass}`}
//                                                 onClick={() => removePackage(pkg._id)}
//                                                 title={`Remove from ${isFavorite ? "Favorites" : "Saved"}`}
//                                             >
//                                                 <ActiveIcon />
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <div className="pkg-body">
//                                         <h5>{pkg.name}</h5>
//                                         <div className="pkg-meta">
//                                             {pkg.duration && <span><FaCalendarAlt /> {pkg.duration}</span>}
//                                             {pkg.pax      && <span><FaUsers /> {pkg.pax}</span>}
//                                         </div>
//                                         <div className="pkg-price-row">
//                                             <div className="pkg-price">
//                                                 <sup>₹</sup>{pkg.price?.toLocaleString("en-IN")}
//                                                 <span> / person</span>
//                                             </div>
//                                             <button
//                                                 className="btn-book"
//                                                 onClick={() => navigate(`/package/${pkg._id}`)}
//                                             >
//                                                 Book Now
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Col>
//                         ))}
//                     </Row>
//                 )
//             )}

//         </div>
//     );
// };

// /* ── EMPTY STATE ── */
// const EmptyState = ({ icon, message, sub, onBrowse }) => (
//     <div className="text-center py-3">
//         <div className="profile-empty-icon mx-auto mb-3">{icon}</div>
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

// export default CollectionPage;

import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaMapMarkerAlt, FaBox, FaHeart, FaCalendarAlt, FaUsers } from "react-icons/fa";

const CollectionPage = ({ type }) => {
    const navigate = useNavigate();

    const isFavorite = type === "favorite";

    const [destinations, setDestinations] = useState([]);
    const [packages, setPackages]         = useState([]);
    const [activeTab, setActiveTab]       = useState("destinations");

    useEffect(() => {
        if (isFavorite) {
            // Both dest & pkg hearts are stored together in "favourites"
            // Destinations have "Image" field, packages have "image" field
            const allFavourites = JSON.parse(localStorage.getItem("favourites") || "[]");
            setDestinations(allFavourites.filter(item => item.Image));
            setPackages(allFavourites.filter(item => item.image));
        } else {
            // Saved destinations → "saved", saved packages → "savedPackages"
            setDestinations(JSON.parse(localStorage.getItem("saved") || "[]"));
            setPackages(JSON.parse(localStorage.getItem("savedPackages") || "[]"));
        }
    }, [isFavorite]);

    const removeDestination = (id) => {
        const updated = destinations.filter(item => item._id !== id);
        setDestinations(updated);
        if (isFavorite) {
            const allFavs = JSON.parse(localStorage.getItem("favourites") || "[]");
            localStorage.setItem("favourites", JSON.stringify(allFavs.filter(i => i._id !== id)));
        } else {
            localStorage.setItem("saved", JSON.stringify(updated));
        }
    };

    const removePackage = (id) => {
        const updated = packages.filter(item => item._id !== id);
        setPackages(updated);
        if (isFavorite) {
            const allFavs = JSON.parse(localStorage.getItem("favourites") || "[]");
            localStorage.setItem("favourites", JSON.stringify(allFavs.filter(i => i._id !== id)));
        } else {
            localStorage.setItem("savedPackages", JSON.stringify(updated));
        }
    };

    const ActiveIcon  = isFavorite ? FaHeart : FaBookmark;
    const activeClass = isFavorite ? "active-heart" : "active-save";

    return (
        <div className="destinations-section" style={{ minHeight: "100vh" }}>

            {/* Heading */}
            <div className="text-center mb-2">
                <span className="section-tag">Your Collection</span>
                <h2 className="section-title">
                    {isFavorite ? "Favourite Collection" : "Saved Collection"}
                </h2>
                <hr className="services-divider" />
                <p className="text-muted mx-auto" style={{ maxWidth: "480px", fontSize: "0.97rem", lineHeight: "1.8" }}>
                    {isFavorite
                        ? "Destinations and packages you love and want to explore."
                        : "Places and packages you've bookmarked to revisit later."}
                </p>
            </div>

            {/* Tab Toggle */}
            <div className="saved-tab-row mb-4">
                <button
                    className={`saved-tab ${activeTab === "destinations" ? "active" : ""}`}
                    onClick={() => setActiveTab("destinations")}
                >
                    <FaMapMarkerAlt /> Destinations
                    {destinations.length > 0 && (
                        <span className="saved-tab-count">{destinations.length}</span>
                    )}
                </button>
                <button
                    className={`saved-tab ${activeTab === "packages" ? "active" : ""}`}
                    onClick={() => setActiveTab("packages")}
                >
                    <FaBox /> Packages
                    {packages.length > 0 && (
                        <span className="saved-tab-count">{packages.length}</span>
                    )}
                </button>
            </div>

            {/* ── DESTINATIONS ── */}
            {activeTab === "destinations" && (
                destinations.length === 0 ? (
                    <EmptyState
                        icon={<ActiveIcon size={40} />}
                        message={`No ${isFavorite ? "favourite" : "saved"} destinations yet`}
                        sub={`Click the ${isFavorite ? "heart" : "bookmark"} icon on any destination to add it here.`}
                        onBrowse={() => navigate("/")}
                    />
                ) : (
                    <Row className="px-4 g-4">
                        {destinations.map((item) => (
                            <Col lg={3} md={4} sm={6} key={item._id}>
                                <Card className="destination-card h-100">
                                    <div className="dest-img-wrapper">
                                        <Card.Img variant="top" src={item.Image} />
                                        <div className="dest-icons">
                                            <button
                                                className={`dest-icon-btn ${activeClass}`}
                                                onClick={() => removeDestination(item._id)}
                                                title={`Remove from ${isFavorite ? "Favourites" : "Saved"}`}
                                            >
                                                <ActiveIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{item.Destination}, {item.Location}</Card.Title>
                                        <Card.Text className="flex-grow-1">{item.Description}</Card.Text>
                                        <div className="text-center ">
                                            <button
                                                className="btn-book"
                                                onClick={() => navigate(`/destination/${item._id}`)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )
            )}

            {/* ── PACKAGES ── */}
            {activeTab === "packages" && (
                packages.length === 0 ? (
                    <EmptyState
                        icon={<ActiveIcon size={40} />}
                        message={`No ${isFavorite ? "favourite" : "saved"} packages yet`}
                        sub={`Click the ${isFavorite ? "heart" : "bookmark"} icon on any package to add it here.`}
                        onBrowse={() => navigate("/#packages")}
                    />
                ) : (
                    <Row className="px-4 g-4">
                        {packages.map((pkg) => (
                            <Col lg={3} md={4} sm={6} key={pkg._id}>
                                <div className="pkg-card h-100">
                                    <div className="pkg-img-wrap">
                                        <img src={pkg.image} alt={pkg.name} />
                                        <div className="dest-icons">
                                            <button
                                                className={`dest-icon-btn ${activeClass}`}
                                                onClick={() => removePackage(pkg._id)}
                                                title={`Remove from ${isFavorite ? "Favourites" : "Saved"}`}
                                            >
                                                <ActiveIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pkg-body">
                                        <h5>{pkg.name}</h5>
                                        <div className="pkg-meta">
                                            {pkg.duration && <span><FaCalendarAlt /> {pkg.duration}</span>}
                                            {pkg.pax      && <span><FaUsers /> {pkg.pax}</span>}
                                        </div>
                                        <div className="pkg-price-row">
                                            <div className="pkg-price">
                                                <sup>₹</sup>{pkg.price?.toLocaleString("en-IN")}
                                                <span> / person</span>
                                            </div>
                                            <button
                                                className="btn-book"
                                                onClick={() => navigate(`/package/${pkg._id}`)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )
            )}

        </div>
    );
};

/* ── EMPTY STATE ── */
const EmptyState = ({ icon, message, sub, onBrowse }) => (
    <div className="text-center py-3">
        <div className="profile-empty-icon mx-auto mb-3">{icon}</div>
        <h5 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-muted)" }}>
            {message}
        </h5>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
            {sub}
        </p>
        <button className="btn-explore" onClick={onBrowse}>
            Browse Now
        </button>
    </div>
);

export default CollectionPage;