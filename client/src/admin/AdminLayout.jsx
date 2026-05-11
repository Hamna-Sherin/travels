// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const AdminLayout = () => {
//   return (
//     <div className="d-flex">
//       <div className="w-25 d-flex">
//         <Sidebar />
//       </div>

//       <div className="w-75 flex-grow-1" style={{marginLeft:"-70px"}}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
    FiGrid, FiMapPin, FiPackage, FiTruck,
    FiShoppingBag, FiMessageSquare, FiUsers, FiLogOut
} from "react-icons/fi";

const navItems = [
    { label: "Dashboard",        path: "/admin",                  icon: <FiGrid /> },
    { label: "Destinations",     path: "/admin/destinations",     icon: <FiMapPin /> },
    { label: "Packages",         path: "/admin/packages",         icon: <FiPackage /> },
    { label: "Taxi Bookings",    path: "/admin/bookings",    icon: <FiTruck /> },
    { label: "Package Bookings", path: "/admin/packageBooking", icon: <FiShoppingBag /> },
    { label: "Enquiries",        path: "/admin/enquiry",        icon: <FiMessageSquare /> },
    { label: "Users",            path: "/admin/users",            icon: <FiUsers /> },
];

const AdminLayout = () => {
    const navigate  = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

            {/* SIDEBAR */}
            <div style={{
                width: collapsed ? "64px" : "220px",
                background: "#0d3d33",
                display: "flex",
                flexDirection: "column",
                flexShrink: 0,
                transition: "width 0.25s ease",
                overflow: "hidden",
            }}>
                {/* Logo */}
                <div style={{ padding: "24px 16px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", display:"flex" }}>
                    {!collapsed && (
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 900, color: "white" }}>
                            Rafco <span style={{ color: "#c9a84c" }}>Admin</span>
                        </div>
                    )}
                    <button
                        onClick={() => setCollapsed(c => !c)}
                        style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "6px", color: "white", padding: "6px 10px", cursor: "pointer", marginLeft: "15px",  display: "block" }}>
                        ☰
                    </button>
                </div>

                {/* Nav items */}
                <nav style={{ flex: 1, padding: "12px 8px" }}>
                    {navItems.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/admin"}
                            style={({ isActive }) => ({
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "11px 12px",
                                borderRadius: "8px",
                                marginBottom: "4px",
                                textDecoration: "none",
                                color: isActive ? "#c9a84c" : "rgba(255,255,255,0.7)",
                                background: isActive ? "rgba(201,168,76,0.12)" : "transparent",
                                fontWeight: isActive ? 700 : 500,
                                fontSize: "0.88rem",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transition: "all 0.2s",
                            })}
                        >
                            <span style={{ fontSize: "1rem", flexShrink: 0 }}>{item.icon}</span>
                            {!collapsed && item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <div style={{ padding: "12px 8px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <button
                        onClick={() => navigate("/")}
                        style={{
                            display: "flex", alignItems: "center", gap: "12px",
                            width: "100%", background: "transparent", border: "none",
                            color: "rgba(255,255,255,0.5)", padding: "11px 12px",
                            borderRadius: "8px", cursor: "pointer", fontSize: "0.88rem",
                            fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden",
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "#ff6b6b"}
                        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                    >
                        <FiLogOut style={{ flexShrink: 0 }} /> {!collapsed && "Back to Site"}
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ flex: 1, overflow: "auto", background: "#f4f6f9" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;