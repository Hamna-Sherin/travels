// import { useState } from "react";

// const COLORS = {
//   primary: "#1a6b5e",
//   primaryLight: "#2c8c7d",
//   bg: "#f8f9fa",
//   white: "#ffffff",
//   text: "#333",
//   muted: "#777",
//   border: "#e5e5e5"
// };

// const styles = {
//   section: {
//     background: COLORS.bg,
//     paddingBottom: "60px",
//     fontFamily: "'DM Sans', sans-serif",
//   },

//   /* HERO */
//   heroStrip: {
//     background: `linear-gradient(135deg, ${COLORS.primaryLight}, ${COLORS.primary})`,
//     color: "#fff",
//     padding: "60px 20px",
//     textAlign: "center",
//   },
//   heroTitle: {
//     fontSize: "2.5rem",
//     fontWeight: "600",
//     marginBottom: "10px",
//   },
//   heroSub: {
//     fontSize: "1rem",
//     opacity: 0.9,
//   },

//   /* GRID */
//   grid: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     marginTop: "-40px",
//     display: "grid",
//     gridTemplateColumns: "1fr 1.5fr",
//     gap: "25px",
//     padding: "0 20px",
//   },

//   /* LEFT CARD */
//   infoPanel: {
//     background: COLORS.white,
//     borderRadius: "12px",
//     padding: "25px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   infoPanelTitle: {
//     fontSize: "1.3rem",
//     fontWeight: "600",
//     marginBottom: "10px",
//     color: COLORS.primary,
//   },
//   infoPanelDesc: {
//     fontSize: "0.9rem",
//     color: COLORS.muted,
//     marginBottom: "20px",
//   },

//   contactBlock: {
//     marginBottom: "15px",
//   },
//   contactLabel: {
//     fontSize: "0.7rem",
//     fontWeight: "600",
//     color: COLORS.primary,
//   },
//   contactValue: {
//     fontSize: "0.9rem",
//     color: COLORS.text,
//   },

//   /* RIGHT FORM CARD */
//   formPanel: {
//     background: COLORS.white,
//     borderRadius: "12px",
//     padding: "30px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//   },
//   formTitle: {
//     fontSize: "1.4rem",
//     fontWeight: "600",
//     color: COLORS.primary,
//   },
//   formSubtitle: {
//     fontSize: "0.9rem",
//     color: COLORS.muted,
//     marginBottom: "20px",
//   },

//   /* INPUTS */
//   input: {
//     border: `1px solid ${COLORS.border}`,
//     borderRadius: "8px",
//     padding: "10px",
//     fontSize: "0.9rem",
//     width: "100%",
//     outline: "none",
//   },
//   textarea: {
//     border: `1px solid ${COLORS.border}`,
//     borderRadius: "8px",
//     padding: "10px",
//     fontSize: "0.9rem",
//     width: "100%",
//   },
//   select: {
//     border: `1px solid ${COLORS.border}`,
//     borderRadius: "8px",
//     padding: "10px",
//     width: "100%",
//   },

//   /* BUTTON */
//   submitBtn: {
//     background: COLORS.primary,
//     color: "#fff",
//     border: "none",
//     padding: "12px",
//     borderRadius: "8px",
//     width: "100%",
//     fontWeight: "500",
//     cursor: "pointer",
//   },

//   submitBtnHover: {
//     background: COLORS.primaryLight,
//   },

//   /* SUCCESS */
//   successWrap: {
//     textAlign: "center",
//     padding: "40px",
//   },
// };

// // const COLORS = {
// //   teal: "#1a6b5e",
// //   tealDark: "#0d3f38",
// //   tealLight: "#1f7f6f",
// //   gold: "#c9a84c",
// //   goldLight: "#e8c97a",
// //   goldDim: "#826825",
// //   white: "#ffffff",
// //   offWhite: "#f8f5ef",
// //   sandMuted: "#b8a88a",
// //   ink: "#0e1a18",
// //   inkLight: "#162520",
// //   black: "#000000"
// // };

// // const styles = {
// //   section: {
// //     background: COLORS.offWhite,
// //     minHeight: "100vh",
// //     fontFamily: "'DM Sans', 'Inter', sans-serif",
// //     color: COLORS.white,
// //     padding: "0",
// //   },

// //   // Hero strip
// //   heroStrip: {
// //     background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 60%)`,
// //     borderBottom: `1px solid rgba(201,168,76,0.2)`,
// //     padding: "72px 64px 56px",
// //     position: "relative",
// //     overflow: "hidden",
// //   },
// //   heroStripBefore: {
// //     position: "absolute",
// //     top: 0, right: 0, bottom: 0,
// //     width: "40%",
// //     background: `radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 70%)`,
// //     pointerEvents: "none",
// //   },
// //   eyebrow: {
// //     fontSize: "0.68rem",
// //     letterSpacing: "0.3em",
// //     textTransform: "uppercase",
// //     color: COLORS.gold,
// //     marginBottom: "12px",
// //     display: "block",
// //     fontWeight: 500,
// //   },
// //   heroTitle: {
// //     fontFamily: "'Cormorant Garamond', 'Georgia', serif",
// //     fontSize: "clamp(2.4rem, 5vw, 4rem)",
// //     fontWeight: 300,
// //     lineHeight: 1.1,
// //     color: COLORS.white,
// //     margin: "0 0 16px",
// //   },
// //   heroTitleItalic: {
// //     fontStyle: "italic",
// //     color: COLORS.goldLight,
// //   },
// //   heroSub: {
// //     fontSize: "0.9rem",
// //     color: COLORS.sandMuted,
// //     lineHeight: 1.7,
// //     maxWidth: "480px",
// //     margin: 0,
// //     fontWeight: 300,
// //   },
// //   goldRule: {
// //     width: "52px",
// //     height: "1px",
// //     background: COLORS.gold,
// //     margin: "20px 0",
// //     border: "none",
// //   },

// //   // Main grid
// //   grid: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1.65fr",
// //     gap: "0",
// //     maxWidth: "1160px",
// //     margin: "0 auto",
// //     padding: "64px 64px 96px",
// //   },

// //   // Info panel
// //   infoPanel: {
// //     paddingRight: "56px",
// //     borderRight: `1px solid rgba(201,168,76,0.12)`,
// //   },
// //   infoPanelTitle: {
// //     fontFamily: "'Cormorant Garamond', 'Georgia', serif",
// //     fontSize: "1.5rem",
// //     fontWeight: 400,
// //     color: COLORS.goldDim,
// //     marginBottom: "10px",
// //     lineHeight: 1.3,
// //   },
// //   infoPanelDesc: {
// //     fontSize: "0.85rem",
// //     color: COLORS.sandMuted,
// //     lineHeight: 1.85,
// //     marginBottom: "36px",
// //     fontWeight: 300,
// //   },
// //   contactBlock: {
// //     marginBottom: "24px",
// //     paddingBottom: "24px",
// //     borderBottom: `1px solid rgba(201,168,76,0.1)`,
// //   },
// //   contactBlockLast: {
// //     marginBottom: 0,
// //     paddingBottom: 0,
// //     border: "none",
// //   },
// //   contactLabel: {
// //     fontSize: "0.62rem",
// //     letterSpacing: "0.28em",
// //     textTransform: "uppercase",
// //     color: COLORS.gold,
// //     marginBottom: "8px",
// //     display: "block",
// //     fontWeight: 500,
// //   },
// //   contactValue: {
// //     fontSize: "0.88rem",
// //     color: COLORS.sandMuted,
// //     lineHeight: 1.8,
// //     fontWeight: 300,
// //   },
// //   contactLink: {
// //     color: COLORS.offWhite,
// //     textDecoration: "none",
// //     display: "block",
// //     transition: "color 0.2s",
// //   },
// //   socialRow: {
// //     display: "flex",
// //     gap: "10px",
// //     marginTop: "10px",
// //   },
// //   socialBtn: {
// //     width: "36px",
// //     height: "36px",
// //     borderRadius: "50%",
// //     border: `1px solid rgba(201,168,76,0.3)`,
// //     background: "transparent",
// //     color: COLORS.gold,
// //     fontSize: "0.68rem",
// //     fontWeight: 500,
// //     letterSpacing: "0.05em",
// //     cursor: "pointer",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     transition: "background 0.2s, border-color 0.2s",
// //   },

// //   // Form panel
// //   formPanel: {
// //     paddingLeft: "56px",
// //   },
// //   formTitle: {
// //     fontFamily: "'Cormorant Garamond', 'Georgia', serif",
// //     fontSize: "1.5rem",
// //     fontWeight: 400,
// //     color: COLORS.goldDim,
// //     marginBottom: "4px",
// //   },
// //   formSubtitle: {
// //     fontSize: "0.8rem",
// //     color: COLORS.sandMuted,
// //     marginBottom: "32px",
// //     fontWeight: 300,
// //   },

// //   // Form rows & groups
// //   formRow: {
// //     display: "grid",
// //     gridTemplateColumns: "1fr 1fr",
// //     gap: "16px",
// //   },
// //   formGroup: {
// //     display: "flex",
// //     flexDirection: "column",
// //     marginBottom: "18px",
// //   },
// //   label: {
// //     fontSize: "0.62rem",
// //     letterSpacing: "0.22em",
// //     textTransform: "uppercase",
// //     color: COLORS.goldDim,
// //     marginBottom: "7px",
// //     fontWeight: 500,
// //   },
// //   input: {
// //     background: COLORS.teal,
// //     border: `1px solid rgba(201,168,76,0.18)`,
// //     borderRadius: "3px",
// //     color: COLORS.white,
// //     fontFamily: "inherit",
// //     fontSize: "0.875rem",
// //     fontWeight: 300,
// //     padding: "10px 14px",
// //     outline: "none",
// //     transition: "border-color 0.2s, background 0.2s",
// //     width: "100%",
// //     boxSizing: "border-box",
// //   },
// //   inputFocus: {
// //     borderColor: COLORS.teal,
// //     background: "rgba(26,107,94,0.08)",
// //   },
// //   inputError: {
// //     borderColor: "#c0504f",
// //   },
// //   textarea: {
// //     background: COLORS.teal,
// //     border: `1px solid rgba(201,168,76,0.18)`,
// //     borderRadius: "3px",
// //     color: COLORS.white,
// //     fontFamily: "inherit",
// //     fontSize: "0.875rem",
// //     fontWeight: 300,
// //     padding: "10px 14px",
// //     outline: "none",
// //     transition: "border-color 0.2s, background 0.2s",
// //     width: "100%",
// //     boxSizing: "border-box",
// //     resize: "vertical",
// //     minHeight: "120px",
// //   },
// //   select: {
// //     background: COLORS.teal,
// //     border: `1px solid rgba(201,168,76,0.18)`,
// //     borderRadius: "3px",
// //     color: COLORS.white,
// //     fontFamily: "inherit",
// //     fontSize: "0.875rem",
// //     fontWeight: 300,
// //     padding: "10px 14px",
// //     outline: "none",
// //     transition: "border-color 0.2s",
// //     width: "100%",
// //     boxSizing: "border-box",
// //     appearance: "none",
// //     cursor: "pointer",
// //   },
// //   selectWrap: {
// //     position: "relative",
// //   },
// //   selectArrow: {
// //     position: "absolute",
// //     right: "14px",
// //     top: "50%",
// //     transform: "translateY(-50%)",
// //     width: 0,
// //     height: 0,
// //     borderLeft: "4px solid transparent",
// //     borderRight: "4px solid transparent",
// //     borderTop: `5px solid ${COLORS.goldDim}`,
// //     pointerEvents: "none",
// //   },
// //   fieldError: {
// //     fontSize: "0.7rem",
// //     color: "#e07070",
// //     marginTop: "5px",
// //     fontWeight: 400,
// //   },
// //   checkRow: {
// //     display: "flex",
// //     alignItems: "flex-start",
// //     gap: "10px",
// //     marginBottom: "22px",
// //   },
// //   checkLabel: {
// //     fontSize: "0.78rem",
// //     color: COLORS.sandMuted,
// //     lineHeight: 1.6,
// //     cursor: "pointer",
// //     fontWeight: 300,
// //     textTransform: "none",
// //     letterSpacing: 0,
// //   },

// //   // Submit button
// //   submitBtn: {
// //     width: "100%",
// //     padding: "13px",
// //     background: "transparent",
// //     border: `1px solid ${COLORS.teal}`,
// //     borderRadius: "3px",
// //     color: COLORS.teal,
// //     fontFamily: "inherit",
// //     fontSize: "0.7rem",
// //     fontWeight: 500,
// //     letterSpacing: "0.25em",
// //     textTransform: "uppercase",
// //     cursor: "pointer",
// //     transition: "background 0.3s, color 0.3s, border-color 0.3s",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: "10px",
// //   },
// //   submitBtnHover: {
// //     background: COLORS.teal,
// //     color: COLORS.white,
// //     borderColor: COLORS.teal,
// //   },
// //   submitBtnDisabled: {
// //     opacity: 0.5,
// //     cursor: "not-allowed",
// //   },

// //   // Success state
// //   successWrap: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     textAlign: "center",
// //     padding: "48px 24px",
// //   },
// //   successCircle: {
// //     width: "64px",
// //     height: "64px",
// //     borderRadius: "50%",
// //     border: `1px solid ${COLORS.teal}`,
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: "24px",
// //     color: COLORS.teal,
// //     fontSize: "1.5rem",
// //   },
// //   successTitle: {
// //     fontFamily: "'Cormorant Garamond', 'Georgia', serif",
// //     fontSize: "2rem",
// //     fontWeight: 400,
// //     color: COLORS.white,
// //     marginBottom: "10px",
// //   },
// //   successSub: {
// //     fontSize: "0.88rem",
// //     color: COLORS.sandMuted,
// //     lineHeight: 1.7,
// //     fontWeight: 300,
// //   },
// // };

// // ── Spinner SVG ──────────────────────────────────────────────────────────────
// function Spinner() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//       <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
//       <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
//         <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="0.8s" repeatCount="indefinite" />
//       </path>
//     </svg>
//   );
// }

// // ── Reusable Field ────────────────────────────────────────────────────────────
// function Field({ label, error, children }) {
//   return (
//     <div style={styles.formGroup}>
//       <label style={styles.label}>{label}</label>
//       {children}
//       {error && <span style={styles.fieldError}>{error}</span>}
//     </div>
//   );
// }

// // ── Input with focus state ────────────────────────────────────────────────────
// function StyledInput({ error, ...props }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <input
//       {...props}
//       style={{
//         ...styles.input,
//         ...(focused ? styles.inputFocus : {}),
//         ...(error ? styles.inputError : {}),
//       }}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//     />
//   );
// }

// function StyledTextarea({ error, ...props }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <textarea
//       {...props}
//       style={{
//         ...styles.textarea,
//         ...(focused ? styles.inputFocus : {}),
//         ...(error ? styles.inputError : {}),
//       }}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//     />
//   );
// }

// function StyledSelect({ error, children, ...props }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <div style={styles.selectWrap}>
//       <select
//         {...props}
//         style={{
//           ...styles.select,
//           ...(focused ? styles.inputFocus : {}),
//           ...(error ? styles.inputError : {}),
//         }}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//       >
//         {children}
//       </select>
//       <span style={styles.selectArrow} />
//     </div>
//   );
// }

// // ── Main Component ────────────────────────────────────────────────────────────
// export default function ContactUs() {
//   const [form, setForm] = useState({
//     firstName: "", lastName: "", email: "", phone: "",
//     destination: "", depDate: "", retDate: "",
//     adults: "2", children: "0", budget: "",
//     message: "", consent: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error
//   const [submitHovered, setSubmitHovered] = useState(false);

//   const set = (key) => (e) => {
//     const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setForm((f) => ({ ...f, [key]: val }));
//     setErrors((err) => ({ ...err, [key]: undefined }));
//   };

//   function validate() {
//     const e = {};
//     if (!form.firstName.trim()) e.firstName = "Required";
//     if (!form.lastName.trim())  e.lastName  = "Required";
//     if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "Enter a valid email";
//     if (!form.phone.trim())     e.phone     = "Required";
//     if (!form.destination)      e.destination = "Please select a destination";
//     if (!form.depDate)          e.depDate   = "Required";
//     if (!form.message.trim())   e.message   = "Please describe your trip";
//     if (!form.consent)          e.consent   = "Please agree to continue";
//     return e;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length > 0) { setErrors(errs); return; }

//     setStatus("loading");
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error("Server error");
//       setStatus("success");
//     } catch {
//       setStatus("error");
//     }
//   }

//   return (
//     <section style={styles.section}>
//       {/* Google Font import */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
//         input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.6); cursor: pointer; }
//         input::placeholder, textarea::placeholder { color: #4a5e59; }
//         select option { background: #162520; color: #fff; }
//         @media (max-width: 860px) {
//           .ct-grid { grid-template-columns: 1fr !important; }
//           .ct-info { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid rgba(201,168,76,0.12); padding-bottom: 40px; margin-bottom: 40px; }
//           .ct-form { padding-left: 0 !important; }
//           .ct-hero { padding: 56px 24px 44px !important; }
//           .ct-main { padding: 48px 24px 72px !important; }
//           .ct-form-row { grid-template-columns: 1fr !important; }
//         }
//       `}</style>

//       {/* ── Hero Strip ── */}
//       {/* <div style={styles.heroStrip} className="ct-hero">
//         <div style={styles.heroStripBefore} />
//         <span style={styles.eyebrow}>Get in touch</span>
//         <h2 style={styles.heroTitle}>
//           Plan your next<br />
//           <em style={styles.heroTitleItalic}>great journey</em>
//         </h2>
//         <hr style={styles.goldRule} />
//         <p style={styles.heroSub}>
//           Our travel specialists are ready to craft a seamless, deeply personal experience — wherever in the world you want to go.
//         </p>
//       </div> */}
//       <div style={styles.heroStrip}>
//   <h2 style={styles.heroTitle}>Plan Your Trip</h2>
//   <p style={styles.heroSub}>
//     Tell us your travel needs — we’ll handle the rest
//   </p>
// </div>

//       {/* ── Main Grid ── */}
//       <div style={{ ...styles.grid, gridTemplateColumns: "1fr 1.65fr" }} className="ct-grid ct-main">

//         {/* ── Left: Contact Info ── */}
//         <div style={styles.infoPanel} className="ct-info">
//           <h3 style={styles.infoPanelTitle}>We're here to help you explore the world.</h3>
//           <p style={styles.infoPanelDesc}>
//             From quick weekend getaways to month-long expeditions — reach out and let's start designing your perfect trip.
//           </p>

//           {[
//             {
//               label: "Office",
//               content: <>14 Horizon Plaza, MG Road<br />Malappuram, Kerala 676505<br />India</>,
//             },
//             {
//               label: "Phone & WhatsApp",
//               content: (
//                 <>
//                   <a href="tel:+919876543210" style={styles.contactLink}>+91 98765 43210</a>
//                   <a href="tel:+914833123456" style={styles.contactLink}>+91 4833 123456</a>
//                 </>
//               ),
//             },
//             {
//               label: "Email",
//               content: (
//                 <>
//                   <a href="mailto:hello@rafcotravels.com" style={styles.contactLink}>hello@rafcotravels.com</a>
//                   <a href="mailto:bookings@rafcotravels.com" style={styles.contactLink}>bookings@rafcotravels.com</a>
//                 </>
//               ),
//             },
//           ].map((block, i, arr) => (
//             <div key={block.label} style={i === arr.length - 1 ? { ...styles.contactBlock, ...styles.contactBlockLast } : styles.contactBlock}>
//               <span style={styles.contactLabel}>{block.label}</span>
//               <div style={styles.contactValue}>{block.content}</div>
//             </div>
//           ))}

//           <div style={{ marginTop: "20px" }}>
//             <span style={styles.contactLabel}>Follow Us</span>
//             <div style={styles.socialRow}>
//               {["IG", "FB", "YT", "WA"].map((s) => (
//                 <button key={s} style={styles.socialBtn}
//                   onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(26,107,94,0.2)"; e.currentTarget.style.borderColor = COLORS.teal; }}
//                   onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Right: Form ── */}
//         <div style={styles.formPanel} className="ct-form">
//           {status === "success" ? (
//             <div style={styles.successWrap}>
//               <div style={styles.successCircle}>✓</div>
//               <h3 style={styles.successTitle}>Enquiry Received</h3>
//               <p style={styles.successSub}>
//                 Thank you! Our team will get back to you<br />within 24 hours. Safe travels!
//               </p>
//             </div>
//           ) : (
//             <>
//               <p style={styles.formTitle}>Send us an enquiry</p>
//               <p style={styles.formSubtitle}>We'll respond within 24 hours.</p>

//               <form onSubmit={handleSubmit} noValidate>
//                 {/* Name row */}
//                 <div style={styles.formRow} className="ct-form-row">
//                   <Field label="First Name" error={errors.firstName}>
//                     <StyledInput id="firstName" value={form.firstName} onChange={set("firstName")} placeholder="First name" error={errors.firstName} />
//                   </Field>
//                   <Field label="Last Name" error={errors.lastName}>
//                     <StyledInput id="lastName" value={form.lastName} onChange={set("lastName")} placeholder="Last name" error={errors.lastName} />
//                   </Field>
//                 </div>

//                 {/* Email / Phone */}
//                 <div style={styles.formRow} className="ct-form-row">
//                   <Field label="Email" error={errors.email}>
//                     <StyledInput type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" error={errors.email} />
//                   </Field>
//                   <Field label="Phone / WhatsApp" error={errors.phone}>
//                     <StyledInput type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 00000 00000" error={errors.phone} />
//                   </Field>
//                 </div>

//                 {/* Destination */}
//                 <Field label="Destination / Region" error={errors.destination}>
//                   <StyledSelect value={form.destination} onChange={set("destination")} error={errors.destination}>
//                     <option value="" disabled>Select a destination</option>
//                     {["Southeast Asia","Europe","Middle East","Maldives & Indian Ocean","Americas","Africa & Safari","Central Asia","Other / Not sure yet"].map(d => (
//                       <option key={d} value={d}>{d}</option>
//                     ))}
//                   </StyledSelect>
//                 </Field>

//                 {/* Dates */}
//                 <div style={styles.formRow} className="ct-form-row">
//                   <Field label="Departure Date" error={errors.depDate}>
//                     <StyledInput type="date" value={form.depDate} onChange={set("depDate")} error={errors.depDate} />
//                   </Field>
//                   <Field label="Return Date">
//                     <StyledInput type="date" value={form.retDate} onChange={set("retDate")} />
//                   </Field>
//                 </div>

//                 {/* Travellers + Budget */}
//                 <div style={styles.formRow} className="ct-form-row">
//                   <Field label="Adults">
//                     <StyledSelect value={form.adults} onChange={set("adults")}>
//                       {["1","2","3","4","5","6+"].map(n => <option key={n}>{n}</option>)}
//                     </StyledSelect>
//                   </Field>
//                   <Field label="Children (under 12)">
//                     <StyledSelect value={form.children} onChange={set("children")}>
//                       {["0","1","2","3","4+"].map(n => <option key={n}>{n}</option>)}
//                     </StyledSelect>
//                   </Field>
//                 </div>

//                 <Field label="Budget (per person)">
//                   <StyledSelect value={form.budget} onChange={set("budget")}>
//                     <option value="">Select budget range</option>
//                     {["Under ₹50,000","₹50,000 – ₹1,00,000","₹1,00,000 – ₹2,50,000","₹2,50,000 – ₹5,00,000","Above ₹5,00,000","Flexible / Not sure"].map(b => (
//                       <option key={b}>{b}</option>
//                     ))}
//                   </StyledSelect>
//                 </Field>

//                 {/* Message */}
//                 <Field label="Tell us about your dream trip" error={errors.message}>
//                   <StyledTextarea value={form.message} onChange={set("message")} placeholder="Special requests, celebrations, accessibility needs..." error={errors.message} />
//                 </Field>

//                 {/* Consent */}
//                 <div style={styles.checkRow}>
//                   <input
//                     type="checkbox"
//                     id="consent"
//                     checked={form.consent}
//                     onChange={set("consent")}
//                     style={{ width: "15px", height: "15px", marginTop: "2px", accentColor: COLORS.teal, flexShrink: 0, cursor: "pointer" }}
//                   />
//                   <label htmlFor="consent" style={styles.checkLabel}>
//                     I agree to Rafco Travels' Privacy Policy and consent to being contacted about my enquiry.
//                   </label>
//                 </div>
//                 {errors.consent && <span style={{ ...styles.fieldError, display: "block", marginTop: "-14px", marginBottom: "14px" }}>{errors.consent}</span>}

//                 {/* Server error */}
//                 {status === "error" && (
//                   <p style={{ fontSize: "0.8rem", color: "#e07070", marginBottom: "14px" }}>
//                     Something went wrong. Please try again or email us directly.
//                   </p>
//                 )}

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   style={{
//                     ...styles.submitBtn,
//                     ...(submitHovered && status !== "loading" ? styles.submitBtnHover : {}),
//                     ...(status === "loading" ? styles.submitBtnDisabled : {}),
//                   }}
//                   onMouseEnter={() => setSubmitHovered(true)}
//                   onMouseLeave={() => setSubmitHovered(false)}
//                 >
//                   {status === "loading" ? (
//                     <><Spinner /> Sending…</>
//                   ) : (
//                     "Send Enquiry"
//                   )}
//                 </button>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";

// const COLORS = {
//   teal: "#1a6b5e",
//   tealDark: "#124d44",
//   tealLight: "#1f7f6f",
//   gold: "#c9a84c",
//   goldLight: "#e8c97a",
//   white: "#ffffff",
//   ink: "#0e1a18",
//   inkLight: "#162520",
// };

// const styles = {
//   section: {
//     background: COLORS.ink,
//     minHeight: "100vh",
//     fontFamily: "'DM Sans', 'Inter', sans-serif",
//     color: COLORS.white,
//   },

//   heroStrip: {
//     background: `linear-gradient(135deg, ${COLORS.tealDark}, ${COLORS.ink})`,
//     padding: "70px 60px",
//   },

//   heroTitle: {
//     fontSize: "3rem",
//     fontFamily: "serif",
//   },

//   heroItalic: {
//     color: COLORS.goldLight,
//     fontStyle: "italic",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1.5fr",
//     padding: "60px",
//     gap: "50px",
//   },

//   label: {
//     fontSize: "12px",
//     letterSpacing: "2px",
//     color: COLORS.gold,
//   },

//   input: {
//     width: "100%",
//     padding: "10px",
//     background: COLORS.inkLight,
//     border: `1px solid ${COLORS.gold}`,
//     color: COLORS.white,
//     marginTop: "5px",
//   },

//   textarea: {
//     width: "100%",
//     padding: "10px",
//     minHeight: "120px",
//     background: COLORS.inkLight,
//     border: `1px solid ${COLORS.gold}`,
//     color: COLORS.white,
//   },

//   button: {
//     width: "100%",
//     padding: "14px",
//     border: `1px solid ${COLORS.teal}`,
//     color: COLORS.teal,
//     background: "transparent",
//     cursor: "pointer",
//     letterSpacing: "2px",
//   },
// };

// export default function ContactUs() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     destination: "",
//     depDate: "",
//     retDate: "",
//     adults: "2",
//     children: "0",
//     budget: "",
//     message: "",
//     consent: false,
//   });

//   const handleChange = (key) => (e) => {
//     const val =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setForm({ ...form, [key]: val });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <section style={styles.section}>

//       {/* HERO */}
//       <div style={styles.heroStrip}>
//         <h2 style={styles.heroTitle}>
//           Plan your next <br />
//           <span style={styles.heroItalic}>great journey</span>
//         </h2>
//       </div>

//       {/* MAIN */}
//       <div style={styles.grid}>

//         {/* LEFT */}
//         <div>
//           <h3>Contact Info</h3>
//           <p>Malappuram, Kerala</p>
//           <p>+91 98765 43210</p>
//           <p>hello@rafcotravels.com</p>
//         </div>

//         {/* RIGHT FORM */}
//         <form onSubmit={handleSubmit}>

//           {/* NAME */}
//           <label style={styles.label}>FIRST NAME</label>
//           <input style={styles.input} value={form.firstName} onChange={handleChange("firstName")} />

//           <label style={styles.label}>LAST NAME</label>
//           <input style={styles.input} value={form.lastName} onChange={handleChange("lastName")} />

//           {/* EMAIL / PHONE */}
//           <label style={styles.label}>EMAIL</label>
//           <input style={styles.input} type="email" value={form.email} onChange={handleChange("email")} />

//           <label style={styles.label}>PHONE</label>
//           <input style={styles.input} value={form.phone} onChange={handleChange("phone")} />

//           {/* DESTINATION */}
//           <label style={styles.label}>DESTINATION</label>
//           <select style={styles.input} value={form.destination} onChange={handleChange("destination")}>
//             <option value="">Select</option>
//             <option>Europe</option>
//             <option>Middle East</option>
//             <option>Asia</option>
//           </select>

//           {/* DATES */}
//           <label style={styles.label}>DEPARTURE</label>
//           <input type="date" style={styles.input} value={form.depDate} onChange={handleChange("depDate")} />

//           <label style={styles.label}>RETURN</label>
//           <input type="date" style={styles.input} value={form.retDate} onChange={handleChange("retDate")} />

//           {/* TRAVELLERS */}
//           <label style={styles.label}>ADULTS</label>
//           <select style={styles.input} value={form.adults} onChange={handleChange("adults")}>
//             <option>1</option><option>2</option><option>3</option>
//           </select>

//           <label style={styles.label}>CHILDREN</label>
//           <select style={styles.input} value={form.children} onChange={handleChange("children")}>
//             <option>0</option><option>1</option><option>2</option>
//           </select>

//           {/* BUDGET */}
//           <label style={styles.label}>BUDGET</label>
//           <select style={styles.input} value={form.budget} onChange={handleChange("budget")}>
//             <option>Under ₹50,000</option>
//             <option>₹50,000 - ₹1,00,000</option>
//           </select>

//           {/* MESSAGE */}
//           <label style={styles.label}>MESSAGE</label>
//           <textarea style={styles.textarea} value={form.message} onChange={handleChange("message")} />

//           {/* CONSENT */}
//           <div style={{ margin: "15px 0" }}>
//             <input type="checkbox" checked={form.consent} onChange={handleChange("consent")} />
//             <span> I agree to be contacted</span>
//           </div>

//           {/* BUTTON */}
//           <button style={styles.button}>SEND ENQUIRY</button>

//         </form>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";

// const COLORS = {
//     teal: "#1a6b5e",
//     tealDark: "#14564b",
//     tealLight: "#1f7f6f",

//     gold: "#c9a84c",
//     goldLight: "#e8c97a",
//     goldDim: "#9a7d35",

//     white: "#ffffff",
//     offWhite: "#f8f5ef",

//     textLight: "rgba(255,255,255,0.75)",
//     textMuted: "#6b7c78",

//     borderSoft: "rgba(201,168,76,0.2)",
// };

// const styles = {
//     section: {
//         background: COLORS.offWhite,
//         minHeight: "100vh",
//         fontFamily: "'DM Sans', 'Inter', sans-serif",
//         color: COLORS.teal,
//     },

//     heroStrip: {
//         background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 70%)`,
//         padding: "72px 64px 56px",
//         position: "relative",
//     },

//     eyebrow: {
//         fontSize: "0.7rem",
//         letterSpacing: "0.3em",
//         textTransform: "uppercase",
//         color: COLORS.gold,
//         marginBottom: "12px",
//     },

//     heroTitle: {
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: "clamp(2.5rem, 5vw, 4rem)",
//         color: COLORS.white,
//         marginBottom: "16px",
//     },

//     heroTitleItalic: {
//         fontStyle: "italic",
//         color: COLORS.goldLight,
//     },

//     heroSub: {
//         color: COLORS.textLight,
//         maxWidth: "480px",
//     },

//     grid: {
//         display: "grid",
//         gridTemplateColumns: "1fr 1.6fr",
//         maxWidth: "1100px",
//         margin: "0 auto",
//         padding: "60px",
//     },

//     infoPanel: {
//         paddingRight: "40px",
//         borderRight: `1px solid ${COLORS.borderSoft}`,
//     },

//     infoTitle: {
//         fontSize: "1.4rem",
//         color: COLORS.teal,
//         marginBottom: "10px",
//     },

//     infoDesc: {
//         color: COLORS.textMuted,
//         marginBottom: "30px",
//     },

//     label: {
//         fontSize: "0.65rem",
//         color: COLORS.goldDim,
//         textTransform: "uppercase",
//         marginBottom: "6px",
//     },

//     value: {
//         color: COLORS.textMuted,
//         marginBottom: "20px",
//     },

//     formPanel: {
//         paddingLeft: "40px",
//     },

//     input: {
//         width: "100%",
//         padding: "10px",
//         marginBottom: "16px",
//         border: `1px solid ${COLORS.borderSoft}`,
//         borderRadius: "4px",
//         background: COLORS.white,
//         color: COLORS.teal,
//     },

//     textarea: {
//         width: "100%",
//         padding: "10px",
//         height: "120px",
//         border: `1px solid ${COLORS.borderSoft}`,
//         borderRadius: "4px",
//         background: COLORS.white,
//         color: COLORS.teal,
//     },

//     button: {
//         width: "100%",
//         padding: "14px",
//         background: COLORS.teal,
//         color: COLORS.white,
//         border: "none",
//         borderRadius: "4px",
//         letterSpacing: "0.2em",
//         cursor: "pointer",
//     },

//     success: {
//         textAlign: "center",
//         padding: "40px",
//     },
// };

// const ContactUs = () => {
//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         destination: "",
//         depDate: "",
//         retDate: "",
//         adults: "2",
//         children: "0",
//         budget: "",
//         message: "",
//         consent: false,
//     });

//     const [status, setStatus] = useState("idle");

//     const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setStatus("success");
//     };

//     return (
//         <section style={styles.section}>

//             {/* HERO */}
//             <div style={styles.heroStrip}>
//                 <p style={styles.eyebrow}>Get in touch</p>
//                 <h2 style={styles.heroTitle}>
//                     Plan your next <br />
//                     <span style={styles.heroTitleItalic}>great journey</span>
//                 </h2>
//                 <p style={styles.heroSub}>
//                     Our travel experts will help you craft your perfect trip.
//                 </p>
//             </div>

//             {/* MAIN */}
//             <div style={styles.grid}>

//                 {/* LEFT */}
//                 <div style={styles.infoPanel}>
//                     <h3 style={styles.infoTitle}>Contact Information</h3>
//                     <p style={styles.infoDesc}>
//                         Reach out to us for customized travel experiences.
//                     </p>

//                     <div>
//                         <p style={styles.label}>Office</p>
//                         <p style={styles.value}>Malappuram, Kerala, India</p>
//                     </div>

//                     <div>
//                         <p style={styles.label}>Phone</p>
//                         <p style={styles.value}>+91 98765 43210</p>
//                     </div>

//                     <div>
//                         <p style={styles.label}>Email</p>
//                         <p style={styles.value}>hello@travel.com</p>
//                     </div>
//                 </div>

//                 {/* RIGHT */}
//                 <div style={styles.formPanel}>
//                     {status === "success" ? (
//                         <div style={styles.success}>
//                             <h3>Enquiry Sent ✅</h3>
//                             <p>We will contact you soon.</p>
//                         </div>
//                     ) : (
//                         <form onSubmit={handleSubmit}>

//                             {/* NAME */}
//                             <label style={styles.label}>FIRST NAME</label>
//                             <input style={styles.input} value={form.firstName} onChange={handleChange("firstName")} />

//                             <label style={styles.label}>LAST NAME</label>
//                             <input style={styles.input} value={form.lastName} onChange={handleChange("lastName")} />

//                             {/* EMAIL / PHONE */}
//                             <label style={styles.label}>EMAIL</label>
//                             <input style={styles.input} type="email" value={form.email} onChange={handleChange("email")} />

//                             <label style={styles.label}>PHONE</label>
//                             <input style={styles.input} value={form.phone} onChange={handleChange("phone")} />

//                             {/* DESTINATION */}
//                             <label style={styles.label}>DESTINATION</label>
//                             <select style={styles.input} value={form.destination} onChange={handleChange("destination")}>
//                                 <option value="">Select</option>
//                                 <option>Europe</option>
//                                 <option>Middle East</option>
//                                 <option>Asia</option>
//                             </select>

//                             {/* DATES */}
//                             <label style={styles.label}>DEPARTURE</label>
//                             <input type="date" style={styles.input} value={form.depDate} onChange={handleChange("depDate")} />

//                             <label style={styles.label}>RETURN</label>
//                             <input type="date" style={styles.input} value={form.retDate} onChange={handleChange("retDate")} />

//                             {/* TRAVELLERS */}
//                             <label style={styles.label}>ADULTS</label>
//                             <select style={styles.input} value={form.adults} onChange={handleChange("adults")}>
//                                 <option>1</option><option>2</option><option>3</option>
//                             </select>

//                             <label style={styles.label}>CHILDREN</label>
//                             <select style={styles.input} value={form.children} onChange={handleChange("children")}>
//                                 <option>0</option><option>1</option><option>2</option>
//                             </select>

//                             {/* BUDGET */}
//                             <label style={styles.label}>BUDGET</label>
//                             <select style={styles.input} value={form.budget} onChange={handleChange("budget")}>
//                                 <option>Under ₹50,000</option>
//                                 <option>₹50,000 - ₹1,00,000</option>
//                             </select>

//                             {/* MESSAGE */}
//                             <label style={styles.label}>MESSAGE</label>
//                             <textarea style={styles.textarea} value={form.message} onChange={handleChange("message")} />

//                             {/* CONSENT */}
//                             <div style={{ margin: "15px 0" }}>
//                                 <input type="checkbox" checked={form.consent} onChange={handleChange("consent")} />
//                                 <span> I agree to be contacted</span>
//                             </div>

//                             {/* BUTTON */}
//                             <button style={styles.button}>SEND ENQUIRY</button>

//                         </form>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default ContactUs;

// import { useState } from "react";

// const COLORS = {
//     teal: "#1a6b5e",
//     tealDark: "#14564b",
//     tealLight: "#1f7f6f",

//     gold: "#c9a84c",
//     goldLight: "#e8c97a",
//     goldDim: "#9a7d35",

//     white: "#ffffff",
//     offWhite: "#f8f5ef",

//     textLight: "rgba(255,255,255,0.75)",
//     textMuted: "#6b7c78",

//     borderSoft: "rgba(201,168,76,0.2)",
// };

// const styles = {
//     section: {
//         background: COLORS.offWhite,
//         minHeight: "100vh",
//         fontFamily: "'DM Sans', 'Inter', sans-serif",
//         color: COLORS.teal,
//     },

//     heroStrip: {
//         background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 70%)`,
//         padding: "72px 64px 56px",
//     },

//     eyebrow: {
//         fontSize: "0.7rem",
//         letterSpacing: "0.3em",
//         textTransform: "uppercase",
//         color: COLORS.gold,
//         marginBottom: "12px",
//     },

//     heroTitle: {
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: "clamp(2.5rem, 5vw, 4rem)",
//         color: COLORS.white,
//         marginBottom: "16px",
//     },

//     heroTitleItalic: {
//         fontStyle: "italic",
//         color: COLORS.goldLight,
//     },

//     heroSub: {
//         color: COLORS.textLight,
//         maxWidth: "480px",
//     },

//     grid: {
//         display: "grid",
//         gridTemplateColumns: "1fr 1.6fr",
//         maxWidth: "1100px",
//         margin: "0 auto",
//         padding: "60px",
//     },

//     infoPanel: {
//         paddingRight: "40px",
//         borderRight: `1px solid ${COLORS.borderSoft}`,
//     },

//     infoTitle: {
//         fontSize: "1.4rem",
//         marginBottom: "10px",
//     },

//     infoDesc: {
//         color: COLORS.textMuted,
//         marginBottom: "30px",
//     },

//     label: {
//         fontSize: "0.65rem",
//         color: COLORS.goldDim,
//         textTransform: "uppercase",
//         marginBottom: "6px",
//         display: "block",
//     },

//     input: {
//         width: "100%",
//         padding: "10px",
//         marginBottom: "16px",
//         border: `1px solid ${COLORS.borderSoft}`,
//         borderRadius: "4px",
//         background: COLORS.white,
//         color: COLORS.teal,
//     },

//     textarea: {
//         width: "100%",
//         padding: "10px",
//         height: "120px",
//         border: `1px solid ${COLORS.borderSoft}`,
//         borderRadius: "4px",
//         background: COLORS.white,
//         color: COLORS.teal,
//     },

//     button: {
//         width: "100%",
//         padding: "14px",
//         background: COLORS.teal,
//         color: COLORS.white,
//         border: "none",
//         borderRadius: "4px",
//         letterSpacing: "0.2em",
//         cursor: "pointer",
//     },

//     success: {
//         textAlign: "center",
//         padding: "40px",
//     },
// };

// const ContactUs = () => {
//     const [form, setForm] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         destination: "",
//         depDate: "",
//         retDate: "",
//         adults: "2",
//         children: "0",
//         budget: "",
//         message: "",
//         consent: false,
//     });

//     const [status, setStatus] = useState("idle");

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         setForm((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setStatus("success");
//     };

//     return (
//         <section style={styles.section}>

//             {/* HERO */}
//             <div style={styles.heroStrip}>
//                 <p style={styles.eyebrow}>Get in touch</p>
//                 <h2 style={styles.heroTitle}>
//                     Plan your next <br />
//                     <span style={styles.heroTitleItalic}>great journey</span>
//                 </h2>
//                 <p style={styles.heroSub}>
//                     Our travel experts will help you craft your perfect trip.
//                 </p>
//             </div>

//             {/* MAIN */}
//             <div style={styles.grid}>

//                 {/* LEFT */}
//                 <div style={styles.infoPanel}>
//                     <h3 style={styles.infoTitle}>Contact Information</h3>
//                     <p style={styles.infoDesc}>
//                         Reach out to us for customized travel experiences.
//                     </p>

//                     <p style={styles.label}>Office</p>
//                     <p>Malappuram, Kerala, India</p>

//                     <p style={styles.label}>Phone</p>
//                     <p>+91 98765 43210</p>

//                     <p style={styles.label}>Email</p>
//                     <p>hello@travel.com</p>
//                 </div>

//                 {/* RIGHT */}
//                 <div>
//                     {status === "success" ? (
//                         <div style={styles.success}>
//                             <h3>Enquiry Sent ✅</h3>
//                             <p>We will contact you soon.</p>
//                         </div>
//                     ) : (
//                         <form onSubmit={handleSubmit}>

//                             <label style={styles.label}>FIRST NAME</label>
//                             <input name="firstName" style={styles.input} value={form.firstName} onChange={handleChange} />

//                             <label style={styles.label}>LAST NAME</label>
//                             <input name="lastName" style={styles.input} value={form.lastName} onChange={handleChange} />

//                             <label style={styles.label}>EMAIL</label>
//                             <input name="email" type="email" style={styles.input} value={form.email} onChange={handleChange} />

//                             <label style={styles.label}>PHONE</label>
//                             <input name="phone" style={styles.input} value={form.phone} onChange={handleChange} />

//                             <label style={styles.label}>DESTINATION</label>
//                             <select name="destination" style={styles.input} value={form.destination} onChange={handleChange}>
//                                 <option value="">Select</option>
//                                 <option>Europe</option>
//                                 <option>Middle East</option>
//                                 <option>Asia</option>
//                             </select>

//                             <label style={styles.label}>DEPARTURE</label>
//                             <input name="depDate" type="date" style={styles.input} value={form.depDate} onChange={handleChange} />

//                             <label style={styles.label}>RETURN</label>
//                             <input name="retDate" type="date" style={styles.input} value={form.retDate} onChange={handleChange} />

//                             <label style={styles.label}>ADULTS</label>
//                             <select name="adults" style={styles.input} value={form.adults} onChange={handleChange}>
//                                 <option>1</option><option>2</option><option>3</option>
//                             </select>

//                             <label style={styles.label}>CHILDREN</label>
//                             <select name="children" style={styles.input} value={form.children} onChange={handleChange}>
//                                 <option>0</option><option>1</option><option>2</option>
//                             </select>

//                             <label style={styles.label}>BUDGET</label>
//                             <select name="budget" style={styles.input} value={form.budget} onChange={handleChange}>
//                                 <option>Under ₹50,000</option>
//                                 <option>₹50,000 - ₹1,00,000</option>
//                             </select>

//                             <label style={styles.label}>MESSAGE</label>
//                             <textarea name="message" style={styles.textarea} value={form.message} onChange={handleChange} />

//                             <div style={{ margin: "15px 0" }}>
//                                 <input
//                                     type="checkbox"
//                                     name="consent"
//                                     checked={form.consent}
//                                     onChange={handleChange}
//                                 />
//                                 <span> I agree to be contacted</span>
//                             </div>

//                             <button style={styles.button}>SEND ENQUIRY</button>

//                         </form>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactUs;

import { useState } from "react";

/* ─── Design tokens ─────────────────────────────────────────── */
const C = {
  teal:        "#1a6b5e",
  tealDark:    "#155549",
  gold:        "#c9a84c",
  goldLight:   "#e8c97a",
  bodyBg:      "#f0ede6",
  white:       "#ffffff",
  textDark:    "#1a1a1a",
  textMid:     "#4a5e59",
  textMuted:   "#8a9490",
  inputBorder: "#d4cfc7",
};

/* ─── Styles ────────────────────────────────────────────────── */
const S = {
  /* ── HERO (full-width dark teal, left-aligned) ── */
  hero: {
    background: C.teal,
    // padding: "96px 80px 88px",
    padding: "50px",
    minHeight: "340px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse 55% 90% at 100% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)," +
      "linear-gradient(135deg, rgba(0,0,0,0.18) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  eyebrow: {
    fontSize: "0.7rem",
    fontWeight: 600,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: C.gold,
    marginBottom: "18px",
    display: "block",
  },
  heroTitle: {
    fontFamily: "'Playfair Display','Georgia',serif",
    fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
    fontWeight: 700,
    color: C.white,
    lineHeight: 1.05,
    margin: "0 0 24px",
  },
  heroTitleItalic: {
    display: "block",
    fontStyle: "italic",
    color: C.gold,
  },
  heroSub: {
    fontSize: "1rem",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.7,
    maxWidth: "440px",
    margin: 0,
    fontWeight: 300,
  },

  /* ── MAIN BODY (cream bg, two-col) ── */
  body: {
    background: C.bodyBg,
    padding: "72px 80px 96px",
    display: "grid",
    gridTemplateColumns: "1fr 1.6fr",
    gap: "80px",
    alignItems: "start",
  },

  /* ── LEFT: Contact info ── */
  infoCol: {},
  infoTitle: {
    fontFamily: "'Playfair Display','Georgia',serif",
    fontSize: "1.7rem",
    fontWeight: 700,
    color: C.teal,
    marginBottom: "12px",
  },
  infoDesc: {
    fontSize: "0.9rem",
    color: C.textMid,
    lineHeight: 1.75,
    marginBottom: "40px",
    fontWeight: 300,
  },
  infoBlock: {
    marginBottom: "28px",
  },
  infoBlockLabel: {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: C.gold,
    marginBottom: "7px",
    display: "block",
  },
  infoBlockValue: {
    fontSize: "0.92rem",
    color: C.textDark,
    lineHeight: 1.75,
  },
  infoLink: {
    color: C.textDark,
    textDecoration: "none",
    display: "block",
  },
  divider: {
    border: "none",
    borderTop: `1px solid rgba(26,107,94,0.15)`,
    margin: "36px 0",
  },
  socialRow: {
    display: "flex",
    gap: "10px",
    marginTop: "6px",
  },
  socialBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: `1.5px solid rgba(26,107,94,0.25)`,
    background: "transparent",
    color: C.teal,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.18s",
    flexShrink: 0,
  },

  /* ── RIGHT: Form ── */
  formCol: {},

  /* Each field group */
  formGroup: {
    marginBottom: "28px",
  },
  label: {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: C.gold,
    marginBottom: "10px",
    display: "block",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    background: C.white,
    border: "none",
    borderBottom: `1.5px solid ${C.inputBorder}`,
    borderRadius: "0",
    color: C.textDark,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    fontWeight: 400,
    padding: "10px 0",
    outline: "none",
    transition: "border-color 0.2s",
  },
  inputFocus: {
    borderBottomColor: C.teal,
  },
  inputError: {
    borderBottomColor: "#c0392b",
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${C.inputBorder}`,
    color: C.textDark,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    fontWeight: 400,
    padding: "10px 0",
    outline: "none",
    resize: "none",
    transition: "border-color 0.2s",
    minHeight: "80px",
  },
  select: {
    width: "100%",
    boxSizing: "border-box",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${C.inputBorder}`,
    color: C.textDark,
    fontFamily: "inherit",
    fontSize: "0.95rem",
    padding: "10px 28px 10px 0",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
    transition: "border-color 0.2s",
  },
  selectWrap: { position: "relative" },
  selectArrow: {
    position: "absolute",
    right: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: C.textMuted,
    fontSize: "0.6rem",
  },
  twoFieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
  },
  fieldError: {
    fontSize: "0.71rem",
    color: "#c0392b",
    marginTop: "5px",
    fontWeight: 500,
    display: "block",
  },

  /* section divider inside form */
  formDivider: {
    border: "none",
    borderTop: `1px solid rgba(26,107,94,0.12)`,
    margin: "12px 0 32px",
  },
  sectionHeading: {
    fontFamily: "'Playfair Display','Georgia',serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: C.teal,
    marginBottom: "20px",
  },

  /* Consent */
  consentRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    marginBottom: "32px",
    marginTop: "8px",
  },
  consentLabel: {
    fontSize: "0.82rem",
    color: C.textMid,
    lineHeight: 1.6,
    cursor: "pointer",
    fontWeight: 300,
  },

  /* Submit button — gold filled pill */
  submitBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 40px",
    background: C.gold,
    border: "none",
    borderRadius: "6px",
    color: C.white,
    fontFamily: "inherit",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.2s",
    width: "100%",
    justifyContent: "center",
  },

  /* Success */
  successWrap: {
    textAlign: "center",
    padding: "56px 0",
  },
  successCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    border: `2px solid ${C.teal}`,
    background: "rgba(26,107,94,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "1.5rem",
    color: C.teal,
  },
  successTitle: {
    fontFamily: "'Playfair Display','Georgia',serif",
    fontSize: "1.9rem",
    fontWeight: 700,
    color: C.teal,
    marginBottom: "10px",
  },
  successSub: {
    fontSize: "0.9rem",
    color: C.textMid,
    lineHeight: 1.75,
  },
};

/* ─── Spinner ─────────────────────────────────────────────── */
function Spinner() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <circle cx="8.5" cy="8.5" r="6.5" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <path d="M15 8.5a6.5 6.5 0 0 0-6.5-6.5" stroke="white" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 8.5 8.5" to="360 8.5 8.5" dur="0.75s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/* ─── Focus-aware field components ───────────────────────── */
function FInput({ error, ...props }) {
  const [f, setF] = useState(false);
  return (
    <input {...props}
      style={{ ...S.input, ...(f ? S.inputFocus : {}), ...(error ? S.inputError : {}) }}
      onFocus={() => setF(true)} onBlur={() => setF(false)} />
  );
}

function FTextarea({ error, ...props }) {
  const [f, setF] = useState(false);
  return (
    <textarea {...props}
      style={{ ...S.textarea, ...(f ? S.inputFocus : {}), ...(error ? S.inputError : {}) }}
      onFocus={() => setF(true)} onBlur={() => setF(false)} />
  );
}

function FSelect({ error, children, ...props }) {
  const [f, setF] = useState(false);
  return (
    <div style={S.selectWrap}>
      <select {...props}
        style={{ ...S.select, ...(f ? S.inputFocus : {}), ...(error ? S.inputError : {}) }}
        onFocus={() => setF(true)} onBlur={() => setF(false)}>
        {children}
      </select>
      <span style={S.selectArrow}>▼</span>
    </div>
  );
}

function Field({ label, error, children, style }) {
  return (
    <div style={{ ...S.formGroup, ...style }}>
      <label style={S.label}>{label}</label>
      {children}
      {error && <span style={S.fieldError}>{error}</span>}
    </div>
  );
}

/* ─── Social icons ────────────────────────────────────────── */
const SOCIALS = [
  { key: "fb", label: "Facebook", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { key: "tw", label: "Twitter",  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
  { key: "ig", label: "Instagram", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { key: "li", label: "LinkedIn", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { key: "wa", label: "WhatsApp", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════ */
export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    destination: "", depDate: "", retDate: "",
    adults: "2", children: "0", budget: "", message: "",
    consent: false,
  });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [hoverBtn, setHoverBtn] = useState(false);
  const [hoverSocial, setHoverSocial] = useState(null);

  const set = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  function validate() {
    const e = {};
    if (!form.firstName.trim())  e.firstName   = "Required";
    if (!form.lastName.trim())   e.lastName    = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                 e.email       = "Enter a valid email";
    if (!form.phone.trim())      e.phone       = "Required";
    if (!form.destination)       e.destination = "Please select";
    if (!form.depDate)           e.depDate     = "Required";
    if (!form.message.trim())    e.message     = "Please add a message";
    if (!form.consent)           e.consent     = "Please agree to continue";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        input[type=date]::-webkit-calendar-picker-indicator { opacity: 0.45; cursor: pointer; }
        input::placeholder, textarea::placeholder { color: #b5b0a8; }
        select option { background: #fff; color: #1a1a1a; }
        @media (max-width: 860px) {
          .ct-hero   { padding: 64px 24px 56px !important; }
          .ct-body   { grid-template-columns: 1fr !important; padding: 48px 24px 72px !important; gap: 48px !important; }
          .ct-2col   { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans','Inter',sans-serif" }}>

        {/* ══ HERO ══ */}
        <div style={S.hero} className="ct-hero">
          <div style={S.heroBg} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={S.eyebrow}>Get in touch</span>
            <h1 style={S.heroTitle}>
              Plan your next
              <em style={S.heroTitleItalic}>great journey</em>
            </h1>
            <p style={S.heroSub}>Our travel experts will help you craft your perfect trip.</p>
          </div>
        </div>

        {/* ══ BODY: two-col ══ */}
        <div style={S.body} className="ct-body">

          {/* ── LEFT: Contact info ── */}
          <div style={S.infoCol}>
            <h2 style={S.infoTitle}>Contact Information</h2>
            <p style={S.infoDesc}>Reach out to us for customised travel experiences.</p>

            <div style={S.infoBlock}>
              <span style={S.infoBlockLabel}>Office</span>
              <div style={S.infoBlockValue}>
                Malappuram, Kerala, India
              </div>
            </div>

            <div style={S.infoBlock}>
              <span style={S.infoBlockLabel}>Phone &amp; WhatsApp</span>
              <div style={S.infoBlockValue}>
                <a href="tel:+918812345678" style={S.infoLink}>+91 88 1234 56789</a>
                <a href="tel:+914832123456" style={S.infoLink}>+91 4832 123456</a>
              </div>
            </div>

            <div style={S.infoBlock}>
              <span style={S.infoBlockLabel}>Email</span>
              <div style={S.infoBlockValue}>
                <a href="mailto:hello@rafcotravels.com" style={S.infoLink}>hello@rafcotravels.com</a>
                <a href="mailto:bookings@rafcotravels.com" style={S.infoLink}>bookings@rafcotravels.com</a>
              </div>
            </div>

            <div style={S.infoBlock}>
              <span style={S.infoBlockLabel}>Working Hours</span>
              <div style={S.infoBlockValue}>
                Mon – Fri: 9:00 AM – 6:00 PM<br />
                Saturday: 10:00 AM – 4:00 PM<br />
                Sunday: Closed
              </div>
            </div>

            <hr style={S.divider} />

            <div>
              <span style={S.infoBlockLabel}>Follow Us</span>
              <div style={S.socialRow}>
                {SOCIALS.map(({ key, label, icon }) => (
                  <button
                    key={key}
                    aria-label={label}
                    style={{
                      ...S.socialBtn,
                      ...(hoverSocial === key
                        ? { background: C.teal, borderColor: C.teal, color: C.white }
                        : {}),
                    }}
                    onMouseEnter={() => setHoverSocial(key)}
                    onMouseLeave={() => setHoverSocial(null)}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div style={S.formCol}>
            {status === "success" ? (
              <div style={S.successWrap}>
                <div style={S.successCircle}>✓</div>
                <h3 style={S.successTitle}>Enquiry Received!</h3>
                <p style={S.successSub}>
                  Our team will get back to you within <strong>24 hours</strong><br />
                  with a personalised Kerala trip proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Personal details */}
                <Field label="First Name" error={errors.firstName}>
                  <FInput value={form.firstName} onChange={set("firstName")} placeholder="" error={errors.firstName} />
                </Field>

                <Field label="Last Name" error={errors.lastName}>
                  <FInput value={form.lastName} onChange={set("lastName")} placeholder="" error={errors.lastName} />
                </Field>

                <div style={S.twoFieldRow} className="ct-2col">
                  <Field label="Email Address" error={errors.email} style={{ marginBottom: 0 }}>
                    <FInput type="email" value={form.email} onChange={set("email")} placeholder="" error={errors.email} />
                  </Field>
                  <Field label="Phone / WhatsApp" error={errors.phone} style={{ marginBottom: 0 }}>
                    <FInput type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 00000 00000" error={errors.phone} />
                  </Field>
                </div>

                <hr style={{ ...S.formDivider, marginTop: "36px" }} />
                <p style={S.sectionHeading}>Trip Details</p>

                <Field label="Destination / Region" error={errors.destination}>
                  <FSelect value={form.destination} onChange={set("destination")} error={errors.destination}>
                    <option value="" disabled>Select a destination</option>
                    {["Munnar", "Alleppey (Backwaters)", "Wayanad", "Thekkady", "Kovalam & Varkala", "Kochi", "Complete Kerala Tour", "Other / Not sure yet"].map(d => (
                      <option key={d}>{d}</option>
                    ))}
                  </FSelect>
                </Field>

                <div style={S.twoFieldRow} className="ct-2col">
                  <Field label="Departure Date" error={errors.depDate} style={{ marginBottom: 0 }}>
                    <FInput type="date" value={form.depDate} onChange={set("depDate")} error={errors.depDate} />
                  </Field>
                  <Field label="Return Date" style={{ marginBottom: 0 }}>
                    <FInput type="date" value={form.retDate} onChange={set("retDate")} />
                  </Field>
                </div>

                <div style={{ ...S.twoFieldRow, marginTop: "28px" }} className="ct-2col">
                  <Field label="Adults" style={{ marginBottom: 0 }}>
                    <FSelect value={form.adults} onChange={set("adults")}>
                      {["1","2","3","4","5","6+"].map(n => <option key={n}>{n}</option>)}
                    </FSelect>
                  </Field>
                  <Field label="Children (under 12)" style={{ marginBottom: 0 }}>
                    <FSelect value={form.children} onChange={set("children")}>
                      {["0","1","2","3","4+"].map(n => <option key={n}>{n}</option>)}
                    </FSelect>
                  </Field>
                </div>

                <Field label="Budget (per person)" style={{ marginTop: "28px" }}>
                  <FSelect value={form.budget} onChange={set("budget")}>
                    <option value="">Select a range</option>
                    {["Under ₹25,000","₹25,000 – ₹50,000","₹50,000 – ₹1,00,000","₹1,00,000 – ₹2,50,000","Above ₹2,50,000","Flexible"].map(b => (
                      <option key={b}>{b}</option>
                    ))}
                  </FSelect>
                </Field>

                <Field label="Message" error={errors.message}>
                  <FTextarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your dream trip — special occasions, interests, accessibility needs…"
                    error={errors.message}
                  />
                </Field>

                {/* Consent */}
                <div style={S.consentRow}>
                  <input
                    type="checkbox"
                    id="consent"
                    checked={form.consent}
                    onChange={set("consent")}
                    style={{ width: "15px", height: "15px", accentColor: C.teal, marginTop: "3px", flexShrink: 0, cursor: "pointer" }}
                  />
                  <label htmlFor="consent" style={S.consentLabel}>
                    I agree to Rafco Travels'{" "}
                    <a href="/privacy" style={{ color: C.teal }}>Privacy Policy</a>{" "}
                    and consent to being contacted about my enquiry.
                  </label>
                </div>
                {errors.consent && <span style={{ ...S.fieldError, marginTop: "-18px", marginBottom: "20px", display: "block" }}>{errors.consent}</span>}

                {status === "error" && (
                  <p style={{ fontSize: "0.82rem", color: "#c0392b", marginBottom: "16px" }}>
                    Something went wrong. Please try again or WhatsApp us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    ...S.submitBtn,
                    ...(hoverBtn && status !== "loading" ? { background: "#a8882e" } : {}),
                    ...(status === "loading" ? { opacity: 0.65, cursor: "not-allowed" } : {}),
                  }}
                  onMouseEnter={() => setHoverBtn(true)}
                  onMouseLeave={() => setHoverBtn(false)}
                >
                  {status === "loading" ? <><Spinner /> Sending…</> : "Send Enquiry"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </>
  );
}