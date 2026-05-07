// import { useState, useEffect } from "react";

// /* ─── Design tokens (matching admin panel in screenshot) ─── */
// const C = {
//     sidebar: "#1e2a3a",
//     sidebarHover: "#2a3a4f",
//     activeNav: "#2563eb",
//     white: "#ffffff",
//     bodyBg: "#f4f6f9",
//     textDark: "#1a1a2e",
//     textMid: "#4a5568",
//     textMuted: "#9aa5b4",
//     border: "#e2e8f0",
//     tableHead: "#f8fafc",
//     rowAlt: "#f8fafc",
//     btnBlue: "#2563eb",
//     btnGold: "#d4a017",
//     btnRed: "#dc2626",
//     tagBg: "#e0f2fe",
//     tagText: "#0369a1",
// };

// /* ─── Status badge colours ─── */
// const STATUS_COLORS = {
//     new: { bg: "#dcfce7", text: "#15803d" },
//     contacted: { bg: "#fef9c3", text: "#854d0e" },
//     confirmed: { bg: "#dbeafe", text: "#1d4ed8" },
//     closed: { bg: "#f1f5f9", text: "#64748b" },
// };

// const STATUSES = ["new", "contacted", "confirmed", "closed"];



// // const DUMMY_ENQUIRIES = [
// //     { id: 1, firstName: "Arjun", lastName: "Nair", email: "arjun.nair@gmail.com", phone: "+91 94471 23456", destination: "Munnar", depDate: "2026-06-10", retDate: "2026-06-15", adults: "2", children: "0", budget: "₹50,000 – ₹1,00,000", message: "Looking for a honeymoon package with a private cottage and waterfall trekking.", status: "new", submittedAt: "2026-05-01T09:12:00Z" },
// //     { id: 2, firstName: "Raheema", lastName: "Fathima", email: "raheema.f@outlook.com", phone: "+91 98765 43210", destination: "Alleppey (Backwaters)", depDate: "2026-07-02", retDate: "2026-07-05", adults: "4", children: "2", budget: "₹1,00,000 – ₹2,50,000", message: "Family houseboat trip. Need AC rooms and child-friendly meals.", status: "contacted", submittedAt: "2026-05-01T14:35:00Z" },
// //     { id: 3, firstName: "Sreejith", lastName: "Kumar", email: "sreejith.k@yahoo.com", phone: "+91 70123 45678", destination: "Wayanad", depDate: "2026-05-25", retDate: "2026-05-28", adults: "2", children: "0", budget: "Under ₹25,000", message: "Eco-resort stay, wildlife safari and bamboo rafting if possible.", status: "confirmed", submittedAt: "2026-05-02T08:00:00Z" },
// //     { id: 4, firstName: "Divya", lastName: "Menon", email: "divya.menon@gmail.com", phone: "+91 81234 56789", destination: "Thekkady", depDate: "2026-08-01", retDate: "2026-08-04", adults: "3", children: "1", budget: "₹50,000 – ₹1,00,000", message: "Spice plantation tour and Periyar boating for the family.", status: "new", submittedAt: "2026-05-02T11:22:00Z" },
// //     { id: 5, firstName: "Mohammed", lastName: "Riyas", email: "m.riyas@proton.me", phone: "+91 99887 65432", destination: "Kochi", depDate: "2026-06-20", retDate: "2026-06-22", adults: "2", children: "0", budget: "₹25,000 – ₹50,000", message: "Fort Kochi heritage walk and seafood dinner cruise.", status: "closed", submittedAt: "2026-04-28T17:05:00Z" },
// //     { id: 6, firstName: "Anjali", lastName: "Thomas", email: "anjali.thomas@gmail.com", phone: "+91 93456 78901", destination: "Kovalam & Varkala", depDate: "2026-09-10", retDate: "2026-09-14", adults: "2", children: "0", budget: "₹1,00,000 – ₹2,50,000", message: "Beach resort with Ayurvedic spa package for anniversary.", status: "new", submittedAt: "2026-05-03T07:45:00Z" },
// //     { id: 7, firstName: "Vishnu", lastName: "Prasad", email: "vishnu.p@gmail.com", phone: "+91 88912 34567", destination: "Complete Kerala Tour", depDate: "2026-12-22", retDate: "2027-01-02", adults: "5", children: "2", budget: "Above ₹2,50,000", message: "12-day complete Kerala tour for extended family Christmas trip.", status: "contacted", submittedAt: "2026-05-03T10:18:00Z" },
// //     { id: 8, firstName: "Hana", lastName: "Sulthana", email: "hana.s@gmail.com", phone: "+91 97654 32109", destination: "Munnar", depDate: "2026-06-28", retDate: "2026-07-01", adults: "2", children: "1", budget: "₹50,000 – ₹1,00,000", message: "Need a good hotel near tea gardens, vegetarian food only.", status: "new", submittedAt: "2026-05-03T15:30:00Z" },
// // ];

// const PER_PAGE = 5;

// function formatDate(iso) {
//     if (!iso) return "—";
//     return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// }
// function formatDateTime(iso) {
//     if (!iso) return "—";
//     return new Date(iso).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
// }

// /* ─── Sidebar nav items ─── */
// // const NAV = [
// //     { label: "Dashboard", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg> },
// //     { label: "Destinations", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> },
// //     { label: "Packages", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg> },
// //     { label: "bookings", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> },
// //     { label: "Enquiries", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> },
// //     { label: "Users", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
// // ];

// /* ════════════════════════════════════════════
//    DETAIL MODAL
// ════════════════════════════════════════════ */
// function DetailModal({ enquiry, onClose, onStatusChange }) {
//     if (!enquiry) return null;
//     const sc = STATUS_COLORS[enquiry.status] || STATUS_COLORS.new;

//     return (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}
//             onClick={onClose}>
//             <div style={{ background: C.white, borderRadius: "10px", width: "100%", maxWidth: "620px", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
//                 onClick={e => e.stopPropagation()}>

//                 {/* Modal header */}
//                 <div style={{ padding: "20px 24px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                     <div>
//                         <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: C.textDark }}>
//                             {enquiry.firstName} {enquiry.lastName}
//                         </h3>
//                         <span style={{ fontSize: "0.75rem", color: C.textMuted }}>Submitted {formatDateTime(enquiry.submittedAt)}</span>
//                     </div>
//                     <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                         <select
//                             value={enquiry.status}
//                             onChange={e => onStatusChange(enquiry.id, e.target.value)}
//                             style={{ fontSize: "0.78rem", padding: "6px 10px", borderRadius: "6px", border: `1px solid ${C.border}`, background: sc.bg, color: sc.text, fontWeight: 600, cursor: "pointer", outline: "none" }}>
//                             {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
//                         </select>
//                         <button onClick={onClose}
//                             style={{ width: "30px", height: "30px", borderRadius: "50%", border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", fontSize: "1rem", color: C.textMid, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                             ×
//                         </button>
//                     </div>
//                 </div>

//                 {/* Modal body */}
//                 <div style={{ padding: "24px" }}>
//                     {[
//                         ["Contact", [["Email", <a href={`mailto:${enquiry.email}`} style={{ color: C.btnBlue }}>{enquiry.email}</a>], ["Phone", enquiry.phone]]],
//                         ["Trip Details", [
//                             ["Destination", enquiry.destination],
//                             ["Departure", formatDate(enquiry.depDate)],
//                             ["Return", formatDate(enquiry.retDate)],
//                             ["Adults", enquiry.adults],
//                             ["Children", enquiry.children],
//                             ["Budget / person", enquiry.budget || "—"],
//                         ]],
//                     ].map(([section, rows]) => (
//                         <div key={section} style={{ marginBottom: "24px" }}>
//                             <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "12px" }}>{section}</p>
//                             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
//                                 {rows.map(([k, v]) => (
//                                     <div key={k}>
//                                         <span style={{ fontSize: "0.72rem", color: C.textMuted, display: "block", marginBottom: "2px" }}>{k}</span>
//                                         <span style={{ fontSize: "0.88rem", color: C.textDark, fontWeight: 500 }}>{v}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                     <div>
//                         <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "8px" }}>Message</p>
//                         <p style={{ fontSize: "0.9rem", color: C.textMid, lineHeight: 1.75, background: C.bodyBg, padding: "14px 16px", borderRadius: "6px", margin: 0 }}>
//                             {enquiry.message}
//                         </p>
//                     </div>
//                 </div>

//                 <div style={{ padding: "16px 24px", borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//                     <button onClick={onClose}
//                         style={{ padding: "9px 20px", borderRadius: "6px", border: `1px solid ${C.border}`, background: "transparent", color: C.textMid, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
//                         Close
//                     </button>
//                     <a href={`mailto:${enquiry.email}`}
//                         style={{ padding: "9px 20px", borderRadius: "6px", border: "none", background: C.btnBlue, color: C.white, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>
//                         Reply via Email
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ════════════════════════════════════════════
//    MAIN COMPONENT
// ════════════════════════════════════════════ */
// export default function AdminEnquiries() {
//     // const [enquiries, setEnquiries] = useState(DUMMY_ENQUIRIES);
//     const [search, setSearch] = useState("");
//     const [filterStatus, setFilter] = useState("all");
//     const [page, setPage] = useState(1);
//     const [selected, setSelected] = useState(null);
//     const [deleteId, setDeleteId] = useState(null);
//     const [activeNav, setActiveNav] = useState("Enquiries");
//     const [enquiries, setEnquiries] = useState([]);

//     useEffect(() => {
//         fetchEnquiries();
//     }, []);

//     async function fetchEnquiries() {
//         try {
//             const res = await fetch("https://travels-bp73.onrender.com/booking");
//             const data = await res.json();
//             setEnquiries(data.data || []);
//         } catch (err) {
//             console.error("Error fetching enquiries", err);
//         }
//     }


//     /* In a real app: fetch from /api/enquiries on mount */
//     // useEffect(() => { fetch("/api/enquiries").then(r=>r.json()).then(d=>setEnquiries(d.data)); }, []);

//     /* Filter + search */
//     const filtered = enquiries.filter(e => {
//         const matchSearch = search === "" ||
//             `${e.firstName} ${e.lastName} ${e.email} ${e.destination}`.toLowerCase().includes(search.toLowerCase());
//         const matchStatus = filterStatus === "all" || e.status === filterStatus;
//         return matchSearch && matchStatus;
//     });

//     const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//     const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//     function handleStatusChange(id, newStatus) {
//         setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
//         if (selected?.id === id) setSelected(prev => ({ ...prev, status: newStatus }));
//     }

//     function handleDelete(id) {
//         setEnquiries(prev => prev.filter(e => e.id !== id));
//         setDeleteId(null);
//         if (selected?.id === id) setSelected(null);
//     }

//     const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: enquiries.filter(e => e.status === s).length }), {});

//     return (
//         <>
//             <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { font-family: 'DM Sans', sans-serif; }
//         .enq-row:hover { background: #f0f4ff !important; }
//         .enq-row td { transition: background 0.15s; }
//         ::-webkit-scrollbar { width: 5px; height: 5px; }
//         ::-webkit-scrollbar-track { background: transparent; }
//         ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
//         @media (max-width: 768px) {
//           .admin-layout { flex-direction: column !important; }
//           .admin-sidebar { width: 100% !important; min-height: auto !important; flex-direction: row !important; padding: 12px !important; }
//           .admin-sidebar .sidebar-title { display: none; }
//           .admin-sidebar nav { display: flex; flex-direction: row; gap: 4px; width: 100%; }
//           .admin-main { padding: 16px !important; }
//           .stats-row { grid-template-columns: 1fr 1fr !important; }
//           .table-wrap { overflow-x: auto; }
//         }
//       `}</style>

//             <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans',sans-serif", background: C.bodyBg }} className="admin-layout">

//                 {/* ══ SIDEBAR ══ */}
//                 {/* <aside style={{ width: "240px", minHeight: "100vh", background: C.sidebar, display: "flex", flexDirection: "column", padding: "0", flexShrink: 0 }} className="admin-sidebar">
//                     <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
//                         <h1 className="sidebar-title" style={{ fontSize: "0.85rem", fontWeight: 700, color: C.white, letterSpacing: "0.08em", textTransform: "uppercase" }}>Admin Panel</h1>
//                     </div>
//                     <nav style={{ padding: "12px 10px", flex: 1 }}>
//                         {NAV.map(({ label, icon }) => (
//                             <button key={label} onClick={() => setActiveNav(label)}
//                                 style={{ width: "100%", display: "flex", alignItems: "center", gap: "11px", padding: "10px 14px", borderRadius: "7px", border: "none", background: activeNav === label ? C.activeNav : "transparent", color: activeNav === label ? C.white : "rgba(255,255,255,0.6)", fontSize: "0.875rem", fontWeight: activeNav === label ? 600 : 400, cursor: "pointer", textAlign: "left", marginBottom: "2px", transition: "all 0.15s" }}
//                                 onMouseEnter={e => { if (activeNav !== label) e.currentTarget.style.background = C.sidebarHover; e.currentTarget.style.color = C.white; }}
//                                 onMouseLeave={e => { if (activeNav !== label) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; } }}>
//                                 {icon}
//                                 {label}
//                                 {label === "Enquiries" && counts.new > 0 && (
//                                     <span style={{ marginLeft: "auto", background: "#ef4444", color: C.white, borderRadius: "99px", fontSize: "0.65rem", fontWeight: 700, padding: "2px 7px" }}>{counts.new}</span>
//                                 )}
//                             </button>
//                         ))}
//                     </nav>
//                 </aside> */}

//                 {/* ══ MAIN ══ */}
//                 <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto", minWidth: 0 }} className="admin-main">

//                     {/* Header row */}
                    // <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "16px" }}>
                    //     <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: C.textDark }}>Enquiries</h2>

                    //     <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    //         {/* Search */}
                    //         <div style={{ position: "relative" }}>
                    //             <svg style={{ position: "absolute", left: "11px", top: "50%", transform: "translateY(-50%)", color: C.textMuted }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    //             <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
                    //                 placeholder="Search enquiries..."
                    //                 style={{ paddingLeft: "32px", paddingRight: "12px", paddingTop: "9px", paddingBottom: "9px", borderRadius: "8px", border: `1px solid ${C.border}`, fontSize: "0.85rem", color: C.textDark, background: C.white, outline: "none", width: "220px" }} />
                    //         </div>

                    //         {/* Status filter */}
                    //         <select value={filterStatus} onChange={e => { setFilter(e.target.value); setPage(1); }}
                    //             style={{ padding: "9px 12px", borderRadius: "8px", border: `1px solid ${C.border}`, fontSize: "0.85rem", color: C.textDark, background: C.white, cursor: "pointer", outline: "none" }}>
                    //             <option value="all">All Statuses</option>
                    //             {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})</option>)}
                    //         </select>

                    //         {/* Export (stub) */}
                    //         <button style={{ display: "flex", alignItems: "center", gap: "7px", padding: "9px 18px", borderRadius: "8px", border: `1px solid ${C.border}`, background: C.white, color: C.textMid, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
                    //             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    //             Export CSV
                    //         </button>
                    //     </div>
                    // </div>

//                     {/* ── Stats row ── */}
//                     <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "28px" }} className="stats-row">
//                         {[
//                             { label: "Total", value: enquiries.length, color: "#6366f1", bg: "#eef2ff" },
//                             { label: "New", value: counts.new || 0, color: "#16a34a", bg: "#dcfce7" },
//                             { label: "Contacted", value: counts.contacted || 0, color: "#d97706", bg: "#fef9c3" },
//                             { label: "Confirmed", value: counts.confirmed || 0, color: "#2563eb", bg: "#dbeafe" },
//                         ].map(({ label, value, color, bg }) => (
//                             <div key={label} style={{ background: C.white, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
//                                 <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                                     <span style={{ fontSize: "1.2rem", fontWeight: 700, color }}>{value}</span>
//                                 </div>
//                                 <div>
//                                     <p style={{ fontSize: "0.72rem", color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* ── Table ── */}
//                     <div style={{ background: C.white, borderRadius: "10px", border: `1px solid ${C.border}`, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
//                         <div className="table-wrap" style={{ overflowX: "auto" }}>
//                             <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
//                                 <thead>
//                                     <tr style={{ background: C.tableHead, borderBottom: `2px solid ${C.border}` }}>
//                                         {["#", "Name", "Email", "Phone", "Destination", "Status", "Submitted", "Actions"].map(h => (
//                                             <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 700, color: C.textDark, fontSize: "0.82rem", whiteSpace: "nowrap" }}>{h}</th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {paginated.length === 0 ? (
//                                         <tr>
//                                             <td colSpan={10} style={{ textAlign: "center", padding: "48px", color: C.textMuted, fontSize: "0.9rem" }}>
//                                                 No enquiries found.
//                                             </td>
//                                         </tr>
//                                     ) : paginated.map((enq, idx) => {
//                                         const sc = STATUS_COLORS[enq.status] || STATUS_COLORS.new;
//                                         const rowNum = (page - 1) * PER_PAGE + idx + 1;
//                                         return (
//                                             <tr key={enq.id} className="enq-row"
//                                                 style={{ borderBottom: `1px solid ${C.border}`, background: idx % 2 === 1 ? C.rowAlt : C.white, cursor: "pointer" }}>
//                                                 <td style={{ padding: "14px", color: C.textMuted, fontWeight: 600 }}>{rowNum}</td>
//                                                 <td style={{ padding: "14px", fontWeight: 600, color: C.textDark, whiteSpace: "nowrap" }}>
//                                                     {enq.firstName} {enq.lastName}
//                                                 </td>
//                                                 <td style={{ padding: "14px", color: C.textMid }}>{enq.email}</td>
//                                                 <td style={{ padding: "14px", color: C.textMid, whiteSpace: "nowrap" }}>{enq.phone}</td>
//                                                 <td style={{ padding: "14px" }}>
//                                                     <span style={{ background: C.tagBg, color: C.tagText, padding: "3px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 600, whiteSpace: "nowrap" }}>
//                                                         {enq.destination}
//                                                     </span>
//                                                 </td>
//                                                 {/* <td style={{ padding: "14px", color: C.textMid, whiteSpace: "nowrap" }}>{formatDate(enq.depDate)}</td> */}
//                                                 {/* <td style={{ padding: "14px", color: C.textMid, textAlign: "center" }}>{enq.adults}A {enq.children !== "0" ? `/ ${enq.children}C` : ""}</td> */}
//                                                 <td style={{ padding: "14px" }}>
//                                                     <select value={enq.status} onChange={e => { e.stopPropagation(); handleStatusChange(enq.id, e.target.value); }}
//                                                         onClick={e => e.stopPropagation()}
//                                                         style={{ fontSize: "0.75rem", padding: "4px 8px", borderRadius: "99px", border: "none", background: sc.bg, color: sc.text, fontWeight: 700, cursor: "pointer", outline: "none", textTransform: "capitalize" }}>
//                                                         {STATUSES.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
//                                                     </select>
//                                                 </td>
//                                                 <td style={{ padding: "14px", color: C.textMuted, whiteSpace: "nowrap", fontSize: "0.78rem" }}>{formatDate(enq.submittedAt)}</td>
//                                                 <td style={{ padding: "14px" }}>
//                                                     <div style={{ display: "flex", gap: "7px", flexWrap: "nowrap" }}>
//                                                         <button onClick={() => setSelected(enq)}
//                                                             style={{ padding: "6px 14px", borderRadius: "6px", border: "none", background: C.btnGold, color: C.white, fontSize: "0.78rem", fontWeight: 700, cursor: "pointer" }}>
//                                                             View
//                                                         </button>
//                                                         <button onClick={e => { e.stopPropagation(); setDeleteId(enq.id); }}
//                                                             style={{ padding: "6px 14px", borderRadius: "6px", border: "none", background: C.btnRed, color: C.white, fontSize: "0.78rem", fontWeight: 700, cursor: "pointer" }}>
//                                                             Delete
//                                                         </button>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         );
//                                     })}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Pagination */}
//                         <div style={{ padding: "16px 20px", borderTop: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
//                             <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//                                 style={{ padding: "8px 20px", borderRadius: "7px", border: "none", background: page === 1 ? "#e2e8f0" : C.btnBlue, color: page === 1 ? C.textMuted : C.white, fontWeight: 600, fontSize: "0.85rem", cursor: page === 1 ? "default" : "pointer" }}>
//                                 Prev
//                             </button>
//                             <span style={{ fontSize: "0.85rem", color: C.textMid, fontWeight: 500 }}>
//                                 Page {page} of {totalPages} &nbsp;·&nbsp; {filtered.length} result{filtered.length !== 1 ? "s" : ""}
//                             </span>
//                             <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
//                                 style={{ padding: "8px 20px", borderRadius: "7px", border: "none", background: page === totalPages ? "#e2e8f0" : C.btnBlue, color: page === totalPages ? C.textMuted : C.white, fontWeight: 600, fontSize: "0.85rem", cursor: page === totalPages ? "default" : "pointer" }}>
//                                 Next
//                             </button>
//                         </div>
//                     </div>

//                 </main>
//             </div>

//             {/* ══ DETAIL MODAL ══ */}
//             {selected && (
//                 <DetailModal
//                     enquiry={selected}
//                     onClose={() => setSelected(null)}
//                     onStatusChange={handleStatusChange}
//                 />
//             )}

//             {/* ══ DELETE CONFIRM ══ */}
//             {deleteId && (
//                 <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
//                     onClick={() => setDeleteId(null)}>
//                     <div style={{ background: C.white, borderRadius: "10px", padding: "32px", maxWidth: "380px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.25)", textAlign: "center" }}
//                         onClick={e => e.stopPropagation()}>
//                         <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fee2e2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#dc2626", fontSize: "1.4rem" }}>⚠</div>
//                         <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: C.textDark, marginBottom: "8px" }}>Delete Enquiry?</h3>
//                         <p style={{ fontSize: "0.875rem", color: C.textMid, marginBottom: "24px", lineHeight: 1.6 }}>This action cannot be undone. The enquiry will be permanently removed.</p>
//                         <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
//                             <button onClick={() => setDeleteId(null)}
//                                 style={{ padding: "10px 24px", borderRadius: "7px", border: `1px solid ${C.border}`, background: "transparent", color: C.textMid, fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
//                                 Cancel
//                             </button>
//                             <button onClick={() => handleDelete(deleteId)}
//                                 style={{ padding: "10px 24px", borderRadius: "7px", border: "none", background: C.btnRed, color: C.white, fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}>
//                                 Yes, Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// import { useState, useEffect } from "react";
// import {
//   Table, Badge, Button, Form, InputGroup,
//   Modal, Spinner, Row, Col, Card,
// } from "react-bootstrap";

// /* ─────────────────────────────────────────────────────────────
//    AdminEnquiries.jsx — React Bootstrap version
//    Install: npm install react-bootstrap bootstrap
//    In main.jsx add: import 'bootstrap/dist/css/bootstrap.min.css';
// ───────────────────────────────────────────────────────────── */

// const C = {
//   sidebar:     "#1e2a3a",
//   sidebarHover:"#2a3a4f",
//   activeNav:   "#2563eb",
//   white:       "#ffffff",
//   bodyBg:      "#f4f6f9",
//   textDark:    "#1a1a2e",
//   textMid:     "#4a5568",
//   textMuted:   "#9aa5b4",
//   border:      "#e2e8f0",
//   btnGold:     "#d4a017",
//   btnRed:      "#dc2626",
//   tagBg:       "#e0f2fe",
//   tagText:     "#0369a1",
// };

// const STATUS_COLORS = {
//   new:       { bg: "#dcfce7", text: "#15803d" },
//   contacted: { bg: "#fef9c3", text: "#854d0e" },
//   confirmed: { bg: "#dbeafe", text: "#1d4ed8" },
//   closed:    { bg: "#f1f5f9", text: "#64748b" },
// };

// const STATUSES = ["new", "contacted", "confirmed", "closed"];
// const PER_PAGE = 5;

// function formatDate(iso) {
//   if (!iso) return "—";
//   return new Date(iso).toLocaleDateString("en-IN", {
//     day: "2-digit", month: "short", year: "numeric",
//   });
// }
// function formatDateTime(iso) {
//   if (!iso) return "—";
//   return new Date(iso).toLocaleString("en-IN", {
//     day: "2-digit", month: "short", year: "numeric",
//     hour: "2-digit", minute: "2-digit",
//   });
// }

// /* ════════════════════════════════════
//    DETAIL MODAL
// ════════════════════════════════════ */
// function DetailModal({ enquiry, onClose, onStatusChange }) {
//   if (!enquiry) return null;
//   const sc  = STATUS_COLORS[enquiry.status] || STATUS_COLORS.new;
//   const id  = enquiry._id || enquiry.id;

//   return (
//     <Modal show onHide={onClose} centered size="lg">

//       <Modal.Header style={{ padding: "18px 24px", borderBottom: `1px solid ${C.border}` }}>
//         <div>
//           <Modal.Title style={{ fontSize: "1.05rem", fontWeight: 700, color: C.textDark }}>
//             {enquiry.firstName} {enquiry.lastName}
//           </Modal.Title>
//           <small style={{ color: C.textMuted }}>
//             Submitted {formatDateTime(enquiry.submittedAt || enquiry.createdAt)}
//           </small>
//         </div>
//         <div className="d-flex align-items-center gap-2 ms-auto me-3">
//           <Form.Select
//             size="sm"
//             value={enquiry.status}
//             onChange={(e) => onStatusChange(id, e.target.value)}
//             style={{
//               width: "auto", fontSize: "0.78rem", fontWeight: 600,
//               background: sc.bg, color: sc.text,
//               border: `1px solid ${C.border}`, cursor: "pointer",
//             }}
//           >
//             {STATUSES.map((s) => (
//               <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
//             ))}
//           </Form.Select>
//         </div>
//       </Modal.Header>

//       <Modal.Body style={{ padding: "24px" }}>
//         {/* Contact details */}
//         <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "12px" }}>
//           Contact Details
//         </p>
//         <Row className="g-3 mb-4">
//           {[
//             ["Email",       <a href={`mailto:${enquiry.email}`} style={{ color: C.activeNav }}>{enquiry.email}</a>],
//             ["Phone",       enquiry.phone],
//             ["Destination", enquiry.destination],
//             ["Status",      (
//               <span style={{ background: sc.bg, color: sc.text, padding: "2px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 700, textTransform: "capitalize" }}>
//                 {enquiry.status}
//               </span>
//             )],
//           ].map(([k, v]) => (
//             <Col xs={6} key={k}>
//               <small style={{ color: C.textMuted, display: "block", marginBottom: "2px" }}>{k}</small>
//               <span style={{ fontSize: "0.875rem", color: C.textDark, fontWeight: 500 }}>{v}</span>
//             </Col>
//           ))}
//         </Row>

//         {/* Message */}
//         <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "8px" }}>
//           Message
//         </p>
//         <p style={{ fontSize: "0.9rem", color: C.textMid, lineHeight: 1.8, background: C.bodyBg, padding: "14px 16px", borderRadius: "8px", margin: 0 }}>
//           {enquiry.message}
//         </p>
//       </Modal.Body>

//       <Modal.Footer style={{ padding: "14px 24px", borderTop: `1px solid ${C.border}` }}>
//         <Button variant="outline-secondary" size="sm" onClick={onClose}>Close</Button>
//         <Button as="a" href={`mailto:${enquiry.email}`} size="sm"
//           style={{ background: C.activeNav, border: "none" }}>
//           Reply via Email
//         </Button>
//       </Modal.Footer>

//     </Modal>
//   );
// }

// /* ════════════════════════════════════
//    DELETE CONFIRM MODAL
// ════════════════════════════════════ */
// function DeleteModal({ onConfirm, onCancel }) {
//   return (
//     <Modal show onHide={onCancel} centered size="sm">
//       <Modal.Body className="text-center" style={{ padding: "32px 24px" }}>
//         <div style={{
//           width: "52px", height: "52px", borderRadius: "50%",
//           background: "#fee2e2", color: C.btnRed,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           margin: "0 auto 16px", fontSize: "1.4rem",
//         }}>⚠</div>
//         <h5 style={{ fontWeight: 700, color: C.textDark, marginBottom: "8px" }}>Delete Enquiry?</h5>
//         <p style={{ fontSize: "0.875rem", color: C.textMid, marginBottom: "24px", lineHeight: 1.6 }}>
//           This action cannot be undone. The enquiry will be permanently removed.
//         </p>
//         <div className="d-flex gap-2 justify-content-center">
//           <Button variant="outline-secondary" size="sm" onClick={onCancel}>Cancel</Button>
//           <Button size="sm" onClick={onConfirm}
//             style={{ background: C.btnRed, border: "none", fontWeight: 700 }}>
//             Yes, Delete
//           </Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }

// /* ════════════════════════════════════
//    STAT CARD
// ════════════════════════════════════ */
// function StatCard({ label, value, color, bg }) {
//   return (
//     <Card style={{ border: `1px solid ${C.border}`, borderRadius: "10px", boxShadow: "none" }}>
//       <Card.Body className="d-flex align-items-center gap-3" style={{ padding: "16px 18px" }}>
//         <div style={{
//           width: "42px", height: "42px", borderRadius: "8px", background: bg,
//           display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
//         }}>
//           <span style={{ fontSize: "1.15rem", fontWeight: 700, color }}>{value}</span>
//         </div>
//         <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
//           {label}
//         </span>
//       </Card.Body>
//     </Card>
//   );
// }

// /* ════════════════════════════════════
//    MAIN COMPONENT
// ════════════════════════════════════ */
// export default function AdminEnquiries() {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading]     = useState(true);
//   const [search, setSearch]       = useState("");
//   const [filterStatus, setFilter] = useState("all");
//   const [page, setPage]           = useState(1);
//   const [selected, setSelected]   = useState(null);
//   const [deleteId, setDeleteId]   = useState(null);

//   useEffect(() => {
//     async function load() {
//       setLoading(true);
//       try {
//         const res  = await fetch("https://travels-bp73.onrender.com/booking");
//         const data = await res.json();
//         setEnquiries(data.data || []);
//       } catch (err) {
//         console.error("Error fetching enquiries", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//   }, []);

//   /* Client-side filter + search */
//   const filtered = enquiries.filter((e) => {
//     const matchSearch =
//       search === "" ||
//       `${e.firstName} ${e.lastName} ${e.email} ${e.destination}`
//         .toLowerCase().includes(search.toLowerCase());
//     const matchStatus = filterStatus === "all" || e.status === filterStatus;
//     return matchSearch && matchStatus;
//   });

//   const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
//   const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

//   const counts = STATUSES.reduce(
//     (acc, s) => ({ ...acc, [s]: enquiries.filter((e) => e.status === s).length }),
//     {}
//   );

//   function handleStatusChange(id, newStatus) {
//     setEnquiries((prev) =>
//       prev.map((e) => (e._id === id || e.id === id) ? { ...e, status: newStatus } : e)
//     );
//     if (selected?._id === id || selected?.id === id) {
//       setSelected((p) => ({ ...p, status: newStatus }));
//     }
//   }

//   function handleDelete(id) {
//     setEnquiries((prev) => prev.filter((e) => e._id !== id && e.id !== id));
//     setDeleteId(null);
//     if (selected?._id === id || selected?.id === id) setSelected(null);
//   }

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
//         .adm-wrap, .adm-wrap * { font-family: 'DM Sans', sans-serif !important; }
//         .enq-row:hover td  { background: #eff6ff !important; cursor: pointer; }
//         .status-pill       { font-size: 0.75rem !important; padding: 4px 8px !important; border-radius: 99px !important; border: none !important; font-weight: 700 !important; outline: none !important; }
//         .pg-btn            { font-weight: 600 !important; border: none !important; font-size: 0.85rem !important; }
//         .pg-btn:focus      { box-shadow: none !important; }
//         .search-inp:focus  { box-shadow: none !important; border-color: #2563eb !important; }
//         ::-webkit-scrollbar        { width: 5px; height: 5px; }
//         ::-webkit-scrollbar-thumb  { background: #cbd5e1; border-radius: 10px; }
//       `}</style>

//       <div className="adm-wrap" style={{ background: C.bodyBg, minHeight: "100vh", padding: "28px 32px" }}>

//         <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
//           <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: C.textDark, margin: 0 }}>
//             Enquiries
//           </h2>

//           <div className="d-flex align-items-center gap-2 flex-wrap">
//             {/* Search */}
//             <InputGroup size="sm">
//               <InputGroup.Text style={{ background: C.white, border: `1px solid ${C.border}`, borderRight: "none" }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
//                 </svg>
//               </InputGroup.Text>
//               <Form.Control
//                 className="search-inp"
//                 placeholder="Search enquiries..."
//                 value={search}
//                 onChange={(e) => { setSearch(e.target.value); setPage(1); }}
//                 style={{ border: `1px solid ${C.border}`, borderLeft: "none", fontSize: "0.85rem", width: "210px" }}
//               />
//             </InputGroup>

//             {/* Status filter */}
//             <Form.Select
//               size="sm"
//               value={filterStatus}
//               onChange={(e) => { setFilter(e.target.value); setPage(1); }}
//               style={{ width: "auto", fontSize: "0.85rem", border: `1px solid ${C.border}`, cursor: "pointer" }}
//             >
//               <option value="all">All Statuses</option>
//               {STATUSES.map((s) => (
//                 <option key={s} value={s}>
//                   {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
//                 </option>
//               ))}
//             </Form.Select>

//             {/* Export CSV stub */}
//             <Button variant="outline-secondary" size="sm"
//               className="d-flex align-items-center gap-1"
//               style={{ fontSize: "0.82rem", fontWeight: 600 }}>
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
//                 <polyline points="7 10 12 15 17 10"/>
//                 <line x1="12" y1="15" x2="12" y2="3"/>
//               </svg>
//               Export CSV
//             </Button>
//           </div>
//         </div>

//         {/* ── Stat cards ── */}
//         <Row className="g-3 mb-4">
//           {[
//             { label:"Total",     value:enquiries.length,    color:"#6366f1", bg:"#eef2ff" },
//             { label:"New",       value:counts.new||0,       color:"#16a34a", bg:"#dcfce7" },
//             { label:"Contacted", value:counts.contacted||0, color:"#d97706", bg:"#fef9c3" },
//             { label:"Confirmed", value:counts.confirmed||0, color:"#2563eb", bg:"#dbeafe" },
//           ].map((s) => (
//             <Col xs={6} md={3} key={s.label}>
//               <StatCard {...s} />
//             </Col>
//           ))}
//         </Row>

//         {/* ── Table ── */}
//         <Card style={{ border: `1px solid ${C.border}`, borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
//           <div style={{ overflowX: "auto" }}>
//             <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
//               <thead style={{ background: "#f8fafc", borderBottom: `2px solid ${C.border}` }}>
//                 <tr>
//                   {["#","Name","Email","Phone","Destination","Status","Submitted","Actions"].map((h) => (
//                     <th key={h} style={{ padding: "13px 14px", fontWeight: 700, color: C.textDark, fontSize: "0.82rem", whiteSpace: "nowrap", verticalAlign: "middle" }}>
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {loading ? (
//                   <tr>
//                     <td colSpan={8} className="text-center py-5" style={{ color: C.textMuted }}>
//                       <Spinner animation="border" size="sm" className="me-2" />
//                       Loading…
//                     </td>
//                   </tr>
//                 ) : paginated.length === 0 ? (
//                   <tr>
//                     <td colSpan={8} className="text-center py-5" style={{ color: C.textMuted, fontSize: "0.9rem" }}>
//                       No enquiries found.
//                     </td>
//                   </tr>
//                 ) : paginated.map((enq, idx) => {
//                   const sc    = STATUS_COLORS[enq.status] || STATUS_COLORS.new;
//                   const rowId = enq._id || enq.id;
//                   const rowNum = (page - 1) * PER_PAGE + idx + 1;

//                   return (
//                     <tr
//                       key={rowId}
//                       className="enq-row"
//                       style={{ borderBottom: `1px solid ${C.border}`, background: idx % 2 === 1 ? "#fafbfc" : C.white }}
//                       onClick={() => setSelected(enq)}
//                     >
//                       <td style={{ padding: "13px 14px", color: C.textMuted, fontWeight: 600, verticalAlign: "middle" }}>{rowNum}</td>

//                       <td style={{ padding: "13px 14px", fontWeight: 600, color: C.textDark, whiteSpace: "nowrap", verticalAlign: "middle" }}>
//                         {enq.firstName} {enq.lastName}
//                       </td>

//                       <td style={{ padding: "13px 14px", color: C.textMid, verticalAlign: "middle" }}>{enq.email}</td>

//                       <td style={{ padding: "13px 14px", color: C.textMid, whiteSpace: "nowrap", verticalAlign: "middle" }}>{enq.phone}</td>

//                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
//                         <Badge pill style={{ background: C.tagBg, color: C.tagText, fontWeight: 600, fontSize: "0.75rem" }}>
//                           {enq.destination}
//                         </Badge>
//                       </td>

//                       {/* Inline status — stop row click */}
//                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }} onClick={(e) => e.stopPropagation()}>
//                         <Form.Select
//                           className="status-pill"
//                           value={enq.status}
//                           onChange={(e) => handleStatusChange(rowId, e.target.value)}
//                           style={{ background: sc.bg, color: sc.text, width: "auto" }}
//                         >
//                           {STATUSES.map((s) => (
//                             <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
//                           ))}
//                         </Form.Select>
//                       </td>

//                       <td style={{ padding: "13px 14px", color: C.textMuted, fontSize: "0.78rem", whiteSpace: "nowrap", verticalAlign: "middle" }}>
//                         {formatDate(enq.submittedAt || enq.createdAt)}
//                       </td>

//                       {/* Actions — stop row click */}
//                       <td style={{ padding: "13px 14px", verticalAlign: "middle" }} onClick={(e) => e.stopPropagation()}>
//                         <div className="d-flex gap-2">
//                           <Button size="sm" onClick={() => setSelected(enq)}
//                             style={{ background: C.btnGold, border: "none", fontSize: "0.78rem", fontWeight: 700 }}>
//                             View
//                           </Button>
//                           <Button size="sm" onClick={() => setDeleteId(rowId)}
//                             style={{ background: C.btnRed, border: "none", fontSize: "0.78rem", fontWeight: 700 }}>
//                             Delete
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </Table>
//           </div>

//           {/* Pagination */}
//           <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3"
//             style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
//             <Button className="pg-btn" size="sm"
//               disabled={page === 1}
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               style={{ background: page === 1 ? "#e2e8f0" : C.activeNav, color: page === 1 ? C.textMuted : C.white }}>
//               Prev
//             </Button>

//             <span style={{ fontSize: "0.85rem", color: C.textMid, fontWeight: 500 }}>
//               Page {page} of {totalPages}&nbsp;·&nbsp;{filtered.length} result{filtered.length !== 1 ? "s" : ""}
//             </span>

//             <Button className="pg-btn" size="sm"
//               disabled={page === totalPages}
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               style={{ background: page === totalPages ? "#e2e8f0" : C.activeNav, color: page === totalPages ? C.textMuted : C.white }}>
//               Next
//             </Button>
//           </Card.Footer>
//         </Card>

//       </div>

//       {/* Modals */}
//       {selected && (
//         <DetailModal
//           enquiry={selected}
//           onClose={() => setSelected(null)}
//           onStatusChange={handleStatusChange}
//         />
//       )}
//       {deleteId && (
//         <DeleteModal
//           onConfirm={() => handleDelete(deleteId)}
//           onCancel={() => setDeleteId(null)}
//         />
//       )}
//     </>
//   );
// }

// import React from "react";
// import { Form, InputGroup, Button } from "react-bootstrap";
// import { FiSearch, FiDownload } from "react-icons/fi";

// const EnquiriesHeader = ({
//     search,
//     setSearch,
//     filterStatus,
//     setFilter,
//     setPage,
//     STATUSES,
//     counts,
// }) => {
//     return (
//         <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">

//             {/* Title */}
//             <h2 className="section-title mb-0">Enquiries</h2>

//             <div className="d-flex align-items-center flex-wrap gap-2">

//                 {/* Search */}
//                 <InputGroup style={{ width: "220px" }}>
//                     <InputGroup.Text style={{ background: "#fff", border: "1.5px solid #ddd", borderRight: "none" }}>
//                         <FiSearch size={14} color="#888" />
//                     </InputGroup.Text>
//                     <Form.Control
//                         value={search}
//                         onChange={e => { setSearch(e.target.value); setPage(1); }}
//                         placeholder="Search enquiries..."
//                         style={{ border: "1.5px solid #ddd", borderLeft: "none", fontSize: "0.85rem", boxShadow: "none" }}
//                     />
//                 </InputGroup>

//                 {/* Status filter */}
//                 <Form.Select
//                     value={filterStatus}
//                     onChange={e => { setFilter(e.target.value); setPage(1); }}
//                     style={{ width: "160px", fontSize: "0.85rem", border: "1.5px solid #ddd", boxShadow: "none", cursor: "pointer" }}
//                 >
//                     <option value="all">All Statuses</option>
//                     {STATUSES.map(s => (
//                         <option key={s} value={s}>
//                             {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
//                         </option>
//                     ))}
//                 </Form.Select>

//                 {/* Export CSV */}
//                 <Button
//                     variant="outline-secondary"
//                     style={{ fontSize: "0.82rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}
//                 >
//                     <FiDownload size={13} /> Export CSV
//                 </Button>

//             </div>
//         </div>
//     );
// };

// export default EnquiriesHeader;


import { useState, useEffect } from "react";
import {
    Table, Badge, Button, Form, InputGroup,
    Modal, Spinner, Row, Col, Card,
} from "react-bootstrap";
import { FiSearch, FiDownload, FiMail, FiTrash2, FiEye } from "react-icons/fi";
import { BsExclamationTriangle } from "react-icons/bs";

/* ─── Constants ─── */
const STATUS_COLORS = {
    new:       { bg: "#dcfce7", text: "#15803d" },
    contacted: { bg: "#fef9c3", text: "#854d0e" },
    confirmed: { bg: "#dbeafe", text: "#1d4ed8" },
    closed:    { bg: "#f1f5f9", text: "#64748b" },
};

const STATUSES  = ["new", "contacted", "confirmed", "closed"];
const PER_PAGE  = 5;

const formatDate = (iso) =>
    iso ? new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—";

const formatDateTime = (iso) =>
    iso ? new Date(iso).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "—";

/* ─── Detail Modal ─── */
const DetailModal = ({ enquiry, onClose, onStatusChange }) => {
    if (!enquiry) return null;
    const sc = STATUS_COLORS[enquiry.status] || STATUS_COLORS.new;
    const id = enquiry._id || enquiry.id;

    return (
        <Modal show onHide={onClose} centered size="lg">
            <Modal.Header closeButton>
                <div>
                    <Modal.Title style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                        {enquiry.firstName} {enquiry.lastName}
                    </Modal.Title>
                    <small className="text-muted">
                        Submitted {formatDateTime(enquiry.submittedAt || enquiry.createdAt)}
                    </small>
                </div>
                <Form.Select
                    size="sm"
                    value={enquiry.status}
                    onChange={(e) => onStatusChange(id, e.target.value)}
                    className="ms-3 w-auto"
                    style={{ background: sc.bg, color: sc.text, fontWeight: 600, fontSize: "0.78rem" }}
                >
                    {STATUSES.map((s) => (
                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                </Form.Select>
            </Modal.Header>

            <Modal.Body>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "12px" }}>
                    Contact Details
                </p>
                <Row className="g-3 mb-4">
                    {[
                        ["Email",       <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>],
                        ["Phone",       enquiry.phone],
                        ["Destination", enquiry.destination],
                        ["Status",      (
                            <span style={{ background: sc.bg, color: sc.text, padding: "2px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 700, textTransform: "capitalize" }}>
                                {enquiry.status}
                            </span>
                        )],
                    ].map(([k, v]) => (
                        <Col xs={6} key={k}>
                            <small className="text-muted d-block mb-1">{k}</small>
                            <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{v}</span>
                        </Col>
                    ))}
                </Row>

                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "8px" }}>
                    Message
                </p>
                <p className="bg-light rounded p-3 mb-0" style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
                    {enquiry.message}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" size="sm" onClick={onClose}>Close</Button>
                <Button as="a" href={`mailto:${enquiry.email}`} size="sm" variant="primary">
                    <FiMail className="me-1" /> Reply via Email
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

/* ─── Delete Modal ─── */
const DeleteModal = ({ onConfirm, onCancel }) => (
    <Modal show onHide={onCancel} centered size="sm">
        <Modal.Body className="text-center py-4 px-4">
            <div className="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "52px", height: "52px" }}>
                <BsExclamationTriangle size={22} className="text-danger" />
            </div>
            <h5 className="fw-bold mb-2">Delete Enquiry?</h5>
            <p className="text-muted mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                This action cannot be undone. The enquiry will be permanently removed.
            </p>
            <div className="d-flex gap-2 justify-content-center">
                <Button variant="outline-secondary" size="sm" onClick={onCancel}>Cancel</Button>
                <Button variant="danger" size="sm" className="fw-bold" onClick={onConfirm}>
                    <FiTrash2 className="me-1" /> Yes, Delete
                </Button>
            </div>
        </Modal.Body>
    </Modal>
);

/* ─── Stat Card ─── */
const StatCard = ({ label, value, color, bg }) => (
    <Card className="border shadow-none h-100">
        <Card.Body className="d-flex align-items-center gap-3 py-3 px-3">
            <div className="rounded-2 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: "42px", height: "42px", background: bg }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color }}>{value}</span>
            </div>
            <span className="text-uppercase fw-semibold text-muted" style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                {label}
            </span>
        </Card.Body>
    </Card>
);

/* ─── Main Component ─── */
export default function AdminEnquiries() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading]     = useState(true);
    const [search, setSearch]       = useState("");
    const [filterStatus, setFilter] = useState("all");
    const [page, setPage]           = useState(1);
    const [selected, setSelected]   = useState(null);
    const [deleteId, setDeleteId]   = useState(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const res  = await fetch("https://travels-bp73.onrender.com/");
                const data = await res.json();
                setEnquiries(data.data || []);
            } catch (err) {
                console.error("Error fetching enquiries", err);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    const filtered = enquiries.filter((e) => {
        const matchSearch =
            search === "" ||
            `${e.firstName} ${e.lastName} ${e.email} ${e.destination}`
                .toLowerCase().includes(search.toLowerCase());
        const matchStatus = filterStatus === "all" || e.status === filterStatus;
        return matchSearch && matchStatus;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const counts = STATUSES.reduce(
        (acc, s) => ({ ...acc, [s]: enquiries.filter((e) => e.status === s).length }),
        {}
    );

    // const handleStatusChange = (id, newStatus) => {
    //     setEnquiries((prev) =>
    //         prev.map((e) => (e._id === id || e.id === id) ? { ...e, status: newStatus } : e)
    //     );
    //     if (selected?._id === id || selected?.id === id) {
    //         setSelected((p) => ({ ...p, status: newStatus }));
    //     }
    // };

    const handleStatusChange = async (id, newStatus) => {
    try {
        await fetch(`https://travels-bp73.onrender.com//${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
        });

        setEnquiries((prev) =>
            prev.map((e) =>
                (e._id === id || e.id === id)
                    ? { ...e, status: newStatus }
                    : e
            )
        );

    } catch (err) {
        console.error("Status update failed", err);
    }
};

    // const handleDelete = (id) => {
    //     setEnquiries((prev) => prev.filter((e) => e._id !== id && e.id !== id));
    //     setDeleteId(null);
    //     if (selected?._id === id || selected?.id === id) setSelected(null);
    // };

    const handleDelete = async (id) => {
    try {
        await fetch(`https://travels-bp73.onrender.com//${id}`, {
            method: "DELETE"
        });

        setEnquiries((prev) =>
            prev.filter((e) => e._id !== id && e.id !== id)
        );

        setDeleteId(null);

    } catch (err) {
        console.error("Delete failed", err);
    }
};

    return (
        <>
            <style>{`
                .enq-row:hover td { background: #eff6ff !important; cursor: pointer; }
                .status-pill      { font-size: 0.75rem !important; padding: 4px 8px !important; border-radius: 99px !important; border: none !important; font-weight: 700 !important; outline: none !important; }
                .pg-btn:focus     { box-shadow: none !important; }
                .search-inp:focus { box-shadow: none !important; border-color: #2563eb !important; }
            `}</style>

            <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "28px 32px" }}>

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <h2 className="fw-bold mb-0" style={{ fontSize: "1.5rem" }}>Enquiries</h2>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <InputGroup size="sm" style={{ width: "220px" }}>
                            <InputGroup.Text className="bg-white">
                                <FiSearch size={13} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                className="search-inp"
                                placeholder="Search enquiries..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                style={{ fontSize: "0.85rem" }}
                            />
                        </InputGroup>

                        <Form.Select
                            size="sm"
                            value={filterStatus}
                            onChange={(e) => { setFilter(e.target.value); setPage(1); }}
                            style={{ width: "auto", fontSize: "0.85rem", cursor: "pointer" }}
                        >
                            <option value="all">All Statuses</option>
                            {STATUSES.map((s) => (
                                <option key={s} value={s}>
                                    {s.charAt(0).toUpperCase() + s.slice(1)} ({counts[s] || 0})
                                </option>
                            ))}
                        </Form.Select>

                        <Button variant="outline-secondary" size="sm"
                            className="d-flex align-items-center gap-1 fw-semibold"
                            style={{ fontSize: "0.82rem" }}>
                            <FiDownload size={12} /> Export CSV
                        </Button>
                    </div>
                </div>

                {/* Stat Cards */}
                <Row className="g-3 mb-4">
                    {[
                        { label: "Total",     value: enquiries.length,     color: "#6366f1", bg: "#eef2ff" },
                        { label: "New",       value: counts.new     || 0,  color: "#16a34a", bg: "#dcfce7" },
                        { label: "Contacted", value: counts.contacted || 0, color: "#d97706", bg: "#fef9c3" },
                        { label: "Confirmed", value: counts.confirmed || 0, color: "#2563eb", bg: "#dbeafe" },
                    ].map((s) => (
                        <Col xs={6} md={3} key={s.label}>
                            <StatCard {...s} />
                        </Col>
                    ))}
                </Row>

                {/* Table */}
                <Card className="border shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ overflowX: "auto" }}>
                        <Table className="mb-0" style={{ fontSize: "0.875rem" }}>
                            <thead className="table-light">
                                <tr>
                                    {["#", "Name", "Email", "Phone", "Destination", "Status", "Submitted", "Actions"].map((h) => (
                                        <th key={h} className="fw-bold" style={{ padding: "13px 14px", fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={8} className="text-center py-5 text-muted">
                                            <Spinner animation="border" size="sm" className="me-2" /> Loading…
                                        </td>
                                    </tr>
                                ) : paginated.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} className="text-center py-5 text-muted" style={{ fontSize: "0.9rem" }}>
                                            No enquiries found.
                                        </td>
                                    </tr>
                                ) : paginated.map((enq, idx) => {
                                    const sc    = STATUS_COLORS[enq.status] || STATUS_COLORS.new;
                                    const rowId = enq._id || enq.id;
                                    return (
                                        <tr key={rowId} className="enq-row"
                                            style={{ borderBottom: "1px solid #e2e8f0", background: idx % 2 === 1 ? "#fafbfc" : "#fff" }}
                                            onClick={() => setSelected(enq)}>

                                            <td className="text-muted fw-semibold" style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                {(page - 1) * PER_PAGE + idx + 1}
                                            </td>
                                            <td className="fw-semibold" style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap" }}>
                                                {enq.firstName} {enq.lastName}
                                            </td>
                                            <td className="text-muted" style={{ padding: "13px 14px", verticalAlign: "middle" }}>{enq.email}</td>
                                            <td className="text-muted" style={{ padding: "13px 14px", verticalAlign: "middle", whiteSpace: "nowrap" }}>{enq.phone}</td>
                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }}>
                                                <Badge pill style={{ background: "#e0f2fe", color: "#0369a1", fontWeight: 600, fontSize: "0.75rem" }}>
                                                    {enq.destination}
                                                </Badge>
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }} onClick={(e) => e.stopPropagation()}>
                                                <Form.Select
                                                    className="status-pill"
                                                    value={enq.status}
                                                    onChange={(e) => handleStatusChange(rowId, e.target.value)}
                                                    style={{ background: sc.bg, color: sc.text, width: "auto" }}
                                                >
                                                    {STATUSES.map((s) => (
                                                        <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                                    ))}
                                                </Form.Select>
                                            </td>

                                            <td className="text-muted" style={{ padding: "13px 14px", fontSize: "0.78rem", whiteSpace: "nowrap", verticalAlign: "middle" }}>
                                                {formatDate(enq.submittedAt || enq.createdAt)}
                                            </td>

                                            <td style={{ padding: "13px 14px", verticalAlign: "middle" }} onClick={(e) => e.stopPropagation()}>
                                                <div className="d-flex gap-2">
                                                    <Button size="sm" onClick={() => setSelected(enq)}
                                                        style={{ background: "#d4a017", border: "none", fontSize: "0.78rem", fontWeight: 700 }}>
                                                        <FiEye className="me-1" /> View
                                                    </Button>
                                                    <Button size="sm" variant="danger" onClick={() => setDeleteId(rowId)}
                                                        style={{ fontSize: "0.78rem", fontWeight: 700 }}>
                                                        <FiTrash2 className="me-1" /> Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    <Card.Footer className="d-flex align-items-center justify-content-center gap-3 py-3 bg-white">
                        <Button className="pg-btn" size="sm" variant={page === 1 ? "outline-secondary" : "primary"}
                            disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
                            ← Prev
                        </Button>
                        <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                            Page {page} of {totalPages} · {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                        </span>
                        <Button className="pg-btn" size="sm" variant={page === totalPages ? "outline-secondary" : "primary"}
                            disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                            Next →
                        </Button>
                    </Card.Footer>
                </Card>

            </div>

            {selected && (
                <DetailModal enquiry={selected} onClose={() => setSelected(null)} onStatusChange={handleStatusChange} />
            )}
            {deleteId && (
                <DeleteModal onConfirm={() => handleDelete(deleteId)} onCancel={() => setDeleteId(null)} />
            )}
        </>
    );
}