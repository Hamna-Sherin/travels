// import { useEffect, useState } from "react";
// import { Card, Row, Col, Button, Spinner } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const API = "https://travels-bp73.onrender.com";

// /* ── Stat Card ── */
// const StatCard = ({ label, value, color, bg }) => (
//   <Card className="border shadow-none h-100">
//     <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
//       <div
//         className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
//         style={{ width: "42px", height: "42px", background: bg }}
//       >
//         <span style={{ fontSize: "1.1rem", fontWeight: 700, color }}>
//           {value}
//         </span>
//       </div>
//       <span
//         className="text-uppercase fw-semibold text-muted"
//         style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
//       >
//         {label}
//       </span>
//     </Card.Body>
//   </Card>
// );

// const Dashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();


//   useEffect(() => {
//     fetchDashboard(

//     );
//   }, []);

//   const fetchDashboard = async () => {
//     try {
//       const res = await axios.get(`${API}/admin/dashboard`);
//       setData(res.data);
//       // const [
//       //   users,
//       //   packages,
//       //   destinations,
//       //   taxiBookings,
//       //   packageBookings,
//       //   enquiries,
//       // ] = await Promise.all([
//       //   axios.get(`${API}/users`),
//       //   axios.get(`${API}/packages`),
//       //   axios.get(`${API}/destination`),
//       //   axios.get(`${API}/bookings`),
//       //   axios.get(`${API}/package-bookings`),
//       //   axios.get(`${API}/enquiry`),

//       // ]);

//       // const allBookings = [
//       //   ...taxiBookings.data,
//       //   ...packageBookings.data,
//       // ];

//       // const stats = {
//       //   users: users.data.length,
//       //   packages: packages.data.packages.length,
//       //   destinations: destinations.data.destinations.length,
//       //   enquiries: enquiries.data.length,

//       //   totalBookings: allBookings.length,
//       //   pending: allBookings.filter(b => b.status === "pending").length,
//       //   confirmed: allBookings.filter(b => b.status === "confirmed").length,
//       //   cancelled: allBookings.filter(b => b.status === "cancelled").length,

//       //   recent: [
//       //     ...packageBookings.data.map(b => `📦 ${b.name} booked ${b.packageName}`),
//       //     ...taxiBookings.data.map(b => `🚕 ${b.name} booked taxi`)
//       //   ].slice(0, 6)
//       // };

//       const packageData = packageBookings.data;
//       const taxiData = taxiBookings.data;

//       const stats = {
//         // main stats
//         users: users.data.length,
//         packages: packages.data.packages.length,
//         destinations: destinations.data.destinations.length,

//         // separated bookings
//         packageBookings: packageData.length,
//         taxiBookings: taxiData.length,

//         // package status
//         pkgPending: packageData.filter(b => b.status === "pending").length,
//         pkgConfirmed: packageData.filter(b => b.status === "confirmed").length,
//         pkgCancelled: packageData.filter(b => b.status === "cancelled").length,

//         // taxi status
//         taxiPending: taxiData.filter(b => b.status === "pending").length,
//         taxiConfirmed: taxiData.filter(b => b.status === "confirmed").length,
//         taxiCancelled: taxiData.filter(b => b.status === "cancelled").length,
//       };

//       setData(stats);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-5">
//         <Spinner />
//       </div>
//     );
//   }

//   return (
//     <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px" }}>

//       {/* HEADER */}
//       <h2 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
//         Dashboard
//       </h2>

//       {/* TOP STATS */}
//       <Row className="g-3 mb-4">
//         <Col md={3}><StatCard label="Users" value={data.users} color="#6366f1" bg="#eef2ff" /></Col>
//         <Col md={3}><StatCard label="Packages" value={data.packages} color="#0ea5e9" bg="#e0f2fe" /></Col>
//         <Col md={3}><StatCard label="Destinations" value={data.destinations} color="#16a34a" bg="#dcfce7" /></Col>
//         <Col md={3}><StatCard label="Enquiries" value={data.enquiries} color="#d97706" bg="#fef9c3" /></Col>
//       </Row>

//       {/* BOOKINGS STATUS */}
//       {/* <Row className="g-3 mb-4">
//         <Col md={3}><StatCard label="Total Bookings" value={data.totalBookings} color="#6366f1" bg="#eef2ff" /></Col>
//         <Col md={3}><StatCard label="Pending" value={data.pending} color="#d97706" bg="#fef9c3" /></Col>
//         <Col md={3}><StatCard label="Confirmed" value={data.confirmed} color="#16a34a" bg="#dcfce7" /></Col>
//         <Col md={3}><StatCard label="Cancelled" value={data.cancelled} color="#dc2626" bg="#fee2e2" /></Col>
//       </Row> */}

//       <Row className="g-3 mb-4">
//         <Col md={3}>
//           <StatCard label="Package Bookings" value={data.packageBookings} color="#0ea5e9" bg="#e0f2fe" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Pending" value={data.pkgPending} color="#d97706" bg="#fef9c3" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Confirmed" value={data.pkgConfirmed} color="#16a34a" bg="#dcfce7" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Cancelled" value={data.pkgCancelled} color="#dc2626" bg="#fee2e2" />
//         </Col>
//       </Row>

//       <Row className="g-3 mb-4">
//         <Col md={3}>
//           <StatCard label="Taxi Bookings" value={data.taxiBookings} color="#6366f1" bg="#eef2ff" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Pending" value={data.taxiPending} color="#d97706" bg="#fef9c3" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Confirmed" value={data.taxiConfirmed} color="#16a34a" bg="#dcfce7" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Cancelled" value={data.taxiCancelled} color="#dc2626" bg="#fee2e2" />
//         </Col>
//       </Row>

//       {/* LOWER SECTION */}
//       <Row className="g-4">

//         {/* RECENT ACTIVITY */}
//         <Col md={6}>
//           <Card className="border shadow-sm">
//             <Card.Body>
//               <h6 className="fw-bold mb-3">Recent Activity</h6>
//               {data.recent.length === 0 ? (
//                 <p className="text-muted">No recent activity</p>
//               ) : (
//                 data.recent.map((item, i) => (
//                   <p key={i} className="mb-2" style={{ fontSize: "0.9rem" }}>
//                     {item}
//                   </p>
//                 ))
//               )}
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* QUICK ACTIONS */}
//         <Col md={6}>
//           <Card className="border shadow-sm">
//             <Card.Body>
//               <h6 className="fw-bold mb-3">Quick Actions</h6>

//               <div className="d-flex flex-wrap gap-2">
//                 <Button size="sm" variant="primary" onClick={() => navigate('/addDestination')}> + Add Destination</Button>
//                 <Button size="sm" variant="primary" onClick={() => navigate('/addPackage')} > + Add Package</Button>
//                 <Button size="sm" variant="warning" onClick={() => navigate('/enquiry')}> View Enquiries</Button>
//                 <Button size="sm" variant="success" onClick={() => navigate('/bookings')}> View Bookings</Button>
//               </div>

//             </Card.Body >
//           </Card >
//         </Col >

//       </Row >
//     </div >
//   );
// };

// export default Dashboard;

// import { useEffect, useState } from "react";
// import { Card, Row, Col, Button, Spinner } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const API = "https://travels-bp73.onrender.com";

// /* ── Stat Card ── */
// const StatCard = ({ label, value, color, bg }) => (
//   <Card className="border shadow-none h-100">
//     <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
//       <div
//         className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
//         style={{ width: "42px", height: "42px", background: bg }}
//       >
//         <span style={{ fontSize: "1.1rem", fontWeight: 700, color }}>
//           {value || 0}
//         </span>
//       </div>
//       <span
//         className="text-uppercase fw-semibold text-muted"
//         style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
//       >
//         {label}
//       </span>
//     </Card.Body>
//   </Card>
// );

// const Dashboard = () => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard = async () => {
//     try {
//       const res = await axios.get(`${API}/admin/dashboard`);
//       setData(res.data);
//       console.log("DASHBOARD RESPONSE:", res.data);
//     } catch (err) {
//       console.log("Dashboard error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center py-5">
//         <Spinner />
//       </div>
//     );
//   }

//   return (
//     <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px" }}>

//       {/* HEADER */}
//       <h2 className="fw-bold mb-4" style={{ fontSize: "1.5rem" }}>
//         Dashboard
//       </h2>

//       {/* TOP STATS */}
//       <Row className="g-3 mb-4">
//         <Col md={3}><StatCard label="Users" value={data.users} color="#6366f1" bg="#eef2ff" /></Col>
//         <Col md={3}><StatCard label="Packages" value={data.packages} color="#0ea5e9" bg="#e0f2fe" /></Col>
//         <Col md={3}><StatCard label="Destinations" value={data.destinations} color="#16a34a" bg="#dcfce7" /></Col>
//         <Col md={3}><StatCard label="Enquiries" value={data.enquiries} color="#d97706" bg="#fef9c3" /></Col>
//       </Row>

//       {/* PACKAGE BOOKINGS */}
//       <Row className="g-3 mb-4">
//         <Col md={3}>
//           <StatCard label="Package Bookings" value={data.packageBookings} color="#0ea5e9" bg="#e0f2fe" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Pending" value={data.pkgPending} color="#d97706" bg="#fef9c3" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Confirmed" value={data.pkgConfirmed} color="#16a34a" bg="#dcfce7" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Cancelled" value={data.pkgCancelled} color="#dc2626" bg="#fee2e2" />
//         </Col>
//       </Row>

//       {/* TAXI BOOKINGS */}
//       <Row className="g-3 mb-4">
//         <Col md={3}>
//           <StatCard label="Taxi Bookings" value={data.taxiBookings} color="#6366f1" bg="#eef2ff" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Pending" value={data.taxiPending} color="#d97706" bg="#fef9c3" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Confirmed" value={data.taxiConfirmed} color="#16a34a" bg="#dcfce7" />
//         </Col>
//         <Col md={3}>
//           <StatCard label="Cancelled" value={data.taxiCancelled} color="#dc2626" bg="#fee2e2" />
//         </Col>
//       </Row>

//       {/* LOWER SECTION */}
//       <Row className="g-4">

//         {/* RECENT ACTIVITY */}
//         <Col md={6}>
//           <Card className="border shadow-sm">
//             <Card.Body>
//               <h6 className="fw-bold mb-3">Recent Activity</h6>

//               {(data.recentPackage?.length || 0) === 0 &&
//                 (data.recentTaxi?.length || 0) === 0 ? (
//                 <p className="text-muted">No recent activity</p>
//               ) : (
//                 <>
//                   {data.recentPackage?.map((b, i) => (
//                     <p key={`pkg-${i}`} className="mb-2" style={{ fontSize: "0.9rem" }}>
//                       📦 {b.name} booked {b.packageName}
//                     </p>
//                   ))}
//                   {data.recentTaxi?.map((b, i) => (
//                     <p key={`taxi-${i}`} className="mb-2" style={{ fontSize: "0.9rem" }}>
//                       🚕 {b.name} booked taxi
//                     </p>
//                   ))}
//                 </>
//               )}

//             </Card.Body>
//           </Card>
//         </Col>

//         {/* QUICK ACTIONS */}
//         <Col md={6}>
//           <Card className="border shadow-sm">
//             <Card.Body>
//               <h6 className="fw-bold mb-3">Quick Actions</h6>

//               <div className="d-flex flex-wrap gap-2">
//                 <Button size="sm" variant="primary" onClick={() => navigate('/addDestination')}>
//                   + Add Destination
//                 </Button>
//                 <Button size="sm" variant="primary" onClick={() => navigate('/addPackage')}>
//                   + Add Package
//                 </Button>
//                 <Button size="sm" variant="warning" onClick={() => navigate('/enquiry')}>
//                   View Enquiries
//                 </Button>
//                 <Button size="sm" variant="success" onClick={() => navigate('/bookings')}>
//                   View Bookings
//                 </Button>
//               </div>

//             </Card.Body>
//           </Card>
//         </Col>

//       </Row>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FiMapPin, FiPackage, FiTruck, FiShoppingBag,
  FiMessageSquare, FiArrowRight, FiTrendingUp,
  FiClock, FiCheckCircle, FiXCircle
} from "react-icons/fi";

const API = "https://travels-bp73.onrender.com";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [dest, pkgs, taxi, pkgBook, enquiries] = await Promise.allSettled([
          axios.get(`${API}/destination`, { params: { page: 1, limit: 1000 } }),
          axios.get(`${API}/allPackages`),
          axios.get(`${API}/bookings`),
          axios.get(`${API}/package-bookings`),
          axios.get(`${API}/enquiry`),
        ]);

        const destinations = dest.status === "fulfilled" ? dest.value.data.destinations || [] : [];
        const packages = pkgs.status === "fulfilled" ? pkgs.value.data || [] : [];
        const taxiBookings = taxi.status === "fulfilled" ? taxi.value.data || [] : [];
        const pkgBookings = pkgBook.status === "fulfilled" ? pkgBook.value.data || [] : [];
        const enquiryList = enquiries.status === "fulfilled" ? enquiries.value.data.data || [] : [];

        setStats({
          destinations: destinations.length,
          packages: packages.length,

          taxi: {
            total: taxiBookings.length,
            pending: taxiBookings.filter(b => (b.status || "pending").toLowerCase() === "pending").length,
            confirmed: taxiBookings.filter(b => (b.status || "").toLowerCase() === "confirmed").length,
            cancelled: taxiBookings.filter(b => (b.status || "").toLowerCase() === "cancelled").length,
          },

          pkgBookings: {
            total: pkgBookings.length,
            pending: pkgBookings.filter(b => b.status === "pending").length,
            confirmed: pkgBookings.filter(b => b.status === "confirmed").length,
            cancelled: pkgBookings.filter(b => b.status === "cancelled").length,
          },

          enquiries: {
            total: enquiryList.length,
            new: enquiryList.filter(e => (e.status || "new").toLowerCase() === "new").length,
            contacted: enquiryList.filter(e => (e.status || "").toLowerCase() === "contacted").length,
            confirmed: enquiryList.filter(e => (e.status || "").toLowerCase() === "confirmed").length,
          },
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Spinner animation="border" style={{ color: "#1a6b5e" }} />
    </div>
  );

  /* ── Sub-stat row (pending/confirmed/cancelled) ── */
  const SubStats = ({ items }) => (
    <div className="d-flex gap-3 mt-3 flex-wrap">
      {items.map(({ label, value, color, bg }) => (
        <div key={label} style={{ background: bg, borderRadius: "8px", padding: "6px 14px", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontWeight: 800, fontSize: "0.88rem", color }}>{value}</span>
          <span style={{ fontSize: "0.72rem", color, opacity: 0.8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
        </div>
      ))}
    </div>
  );

  /* ── Overview Card ── */
  const OverviewCard = ({ icon, title, value, color, bg, route, subStats }) => (
    <Card className="border-0 shadow-sm h-100"
      style={{ borderRadius: "14px", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      onClick={() => navigate(route)}
    >
      <Card.Body style={{ padding: "24px" }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: "1.2rem" }}>
            {icon}
          </div>
          <FiArrowRight size={16} style={{ color: "#9aa5b4" }} />
        </div>

        <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9aa5b4", marginBottom: "4px" }}>
          {title}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "2rem", color: "#1a1a2e", margin: 0 }}>
          {value}
        </h3>

        {subStats && <SubStats items={subStats} />}
      </Card.Body>
    </Card>
  );

  const totalBookings = stats.taxi.total + stats.pkgBookings.total;
  const pendingAll = stats.taxi.pending + stats.pkgBookings.pending;

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px", fontFamily: "'Inter', sans-serif" }}>

      {/* Header */}
      <div className="mb-5">
        <h2 className="fw-bold mb-1" style={{ fontSize: "1.6rem", color: "#1a1a2e" }}>
          Dashboard
        </h2>
        <p className="text-muted mb-0" style={{ fontSize: "0.88rem" }}>
          Welcome back — here's what's happening with Rafco Travels today.
        </p>
      </div>

      {/* ── TOP SUMMARY STRIP ── */}
      <Row className="g-3 mb-4">
        {[
          { label: "Total Bookings", value: totalBookings, color: "#6366f1", bg: "#eef2ff", icon: <FiTrendingUp /> },
          { label: "Pending Actions", value: pendingAll, color: "#d97706", bg: "#fef9c3", icon: <FiClock /> },
          { label: "New Enquiries", value: stats.enquiries.new, color: "#2563eb", bg: "#dbeafe", icon: <FiMessageSquare /> },
          { label: "Confirmed", value: stats.taxi.confirmed + stats.pkgBookings.confirmed, color: "#16a34a", bg: "#dcfce7", icon: <FiCheckCircle /> },
        ].map(s => (
          <Col xs={6} md={3} key={s.label}>
            <Card className="border-0 shadow-none h-100" style={{ borderRadius: "12px", background: "white" }}>
              <Card.Body className="d-flex align-items-center gap-3 py-3 px-4">
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#9aa5b4", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "3px" }}>{s.label}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ── OVERVIEW CARDS ── */}
      <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "16px" }}>
        Manage Sections
      </p>

      <Row className="g-4 mb-4">

        {/* Destinations */}
        <Col lg={4} md={6}>
          <OverviewCard
            icon={<FiMapPin />}
            title="Destinations"
            value={stats.destinations}
            color="#16a34a"
            bg="#dcfce7"
            route="/admin/destinations"
          />
        </Col>

        {/* Packages */}
        <Col lg={4} md={6}>
          <OverviewCard
            icon={<FiPackage />}
            title="Packages"
            value={stats.packages}
            color="#6366f1"
            bg="#eef2ff"
            route="/admin/packages"
          />
        </Col>

        {/* Enquiries */}
        <Col lg={4} md={6}>
          <OverviewCard
            icon={<FiMessageSquare />}
            title="Enquiries"
            value={stats.enquiries.total}
            color="#2563eb"
            bg="#dbeafe"
            route="/admin/enquiry"
            subStats={[
              { label: "New", value: stats.enquiries.new, color: "#2563eb", bg: "#dbeafe" },
              { label: "Contacted", value: stats.enquiries.contacted, color: "#854d0e", bg: "#fef9c3" },
              { label: "Confirmed", value: stats.enquiries.confirmed, color: "#15803d", bg: "#dcfce7" },
            ]}
          />
        </Col>

        {/* Taxi Bookings */}
        <Col lg={6} md={6}>
          <OverviewCard
            icon={<FiTruck />}
            title="Taxi Bookings"
            value={stats.taxi.total}
            color="#d97706"
            bg="#fef9c3"
            route="/admin/bookings"
            subStats={[
              { label: "Pending", value: stats.taxi.pending, color: "#854d0e", bg: "#fef9c3" },
              { label: "Confirmed", value: stats.taxi.confirmed, color: "#15803d", bg: "#dcfce7" },
              { label: "Cancelled", value: stats.taxi.cancelled, color: "#dc2626", bg: "#fee2e2" },
            ]}
          />
        </Col>

        {/* Package Bookings */}
        <Col lg={6} md={6}>
          <OverviewCard
            icon={<FiShoppingBag />}
            title="Package Bookings"
            value={stats.pkgBookings.total}
            color="#be185d"
            bg="#fce7f3"
            route="/admin/packageBooking"
            subStats={[
              { label: "Pending", value: stats.pkgBookings.pending, color: "#854d0e", bg: "#fef9c3" },
              { label: "Confirmed", value: stats.pkgBookings.confirmed, color: "#15803d", bg: "#dcfce7" },
              { label: "Cancelled", value: stats.pkgBookings.cancelled, color: "#dc2626", bg: "#fee2e2" },
            ]}
          />
        </Col>

      </Row>

      {/* ── QUICK ACTIONS ── */}
      <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "16px" }}>
        Quick Actions
      </p>

      <Row className="g-3">
        {[
          { label: "Add Destination", route: "/admin/addDestination", icon: <FiMapPin />, color: "#16a34a", bg: "#dcfce7" },
          { label: "Add Package", route: "/admin/addPackage", icon: <FiPackage />, color: "#6366f1", bg: "#eef2ff" },
          { label: "View Enquiries", route: "/admin/enquiry", icon: <FiMessageSquare />, color: "#2563eb", bg: "#dbeafe" },
          { label: "Taxi Bookings", route: "/admin/bookings", icon: <FiTruck />, color: "#d97706", bg: "#fef9c3" },
        ].map(a => (
          <Col xs={6} md={3} key={a.label}>
            <button
              onClick={() => navigate(a.route)}
              className="w-100 d-flex align-items-center gap-3"
              style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "10px", padding: "14px 18px", cursor: "pointer", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = a.color; e.currentTarget.style.background = a.bg; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "white"; }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, flexShrink: 0 }}>
                {a.icon}
              </div>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1a1a2e" }}>{a.label}</span>
            </button>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default AdminDashboard;