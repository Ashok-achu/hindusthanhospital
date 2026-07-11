import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaChevronDown,
    FaBars,
    FaTimes,
    FaCalendarCheck,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const closeTimer = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    /* ---------- SLUG MAP ---------- */

    const slugMap = {
        "Anaesthesiology": "anaesthesiology",
        "Cardiology": "cardiology",
        "Dental & Facial Maxillary": "dentistry",
        "Diabetology & General Medicine": "diabetology",
        "Emergency Care": "emergency-care",
        "ENT & Head and Neck Surgery": "ent",
        "Neuroscience": "neurovascular-surgery",
        "General & Laparoscopic Surgery": "general-surgery",
        "Gastroenterology": "gastroenterology",
        "Intensive Care Unit": "icu",
        "Nephrology": "nephrology",
        "Obstetrics & Gynaecology": "obgyn",
        "Orthopaedics": "orthopaedics",
        "Neonatology & Paediatrics": "neonatology",
        "Paediatric Surgery": "paediatric-surgery",
        "Plastic & Reconstructive Surgery": "plastic-surgery",
        "Pulmonology": "pulmonology",
        "Radiology": "radiology",
        "Physical Medicine & Rehabilitation": "rehab",
        "Surgical Oncology": "surgical-oncology",
        "Urology": "urology",
    };

    const toSlug = (label) => "/departments/" + slugMap[label];

    /* ---------- NAV ---------- */

    const nav = [
        { label: "Home", to: "/" },
        {
            label: "About",
            children: [
                { label: "About Trust", to: "https://hindusthan.net/about-us", external: true },
                { label: "Mission & Vision", to: "/mission" },
                { label: "Our Profile", to: "/profile" },
                { label: "Milestones", to: "/milestones" },
            ],
        },
        { label: "Doctors", to: "/doctors" },
        { label: "Departments", mega: true, children: Object.keys(slugMap) },
        {
            label: "Facilities",
            children: [
                { label: "Ambulance", to: "/facilities/ambulance" },
                { label: "Birth Center", to: "/facilities/birthing-centre" },
                { label: "Blood Bank", to: "/facilities/blood-bank" },
                { label: "Insurance", to: "/facilities/insurance" },
                { label: "Rooms", to: "/facilities/rooms" },
                { label: "IP", to: "/facilities/it" },
                { label: "Pharmacy", to: "/facilities/pharmacy" },
            ],
        },
        { label: "Packages", to: "/facilities/mhc" },
        {
            label: "Media",
            children: [
                { label: "News", to: "/news" },
                { label: "Brochuer", to: "/brochure/hindusthan-hospital-brochure.pdf", external: true },
            ],
        },
        {
            label: "Academics",
            children: [
                { label: "Institutions", to: "https://hindusthan.net", external: true },
                { label: "Courses", to: "/academics/Courses" },
            ],
        },
        {
            label: "Contact",
            children: [
                { label: "Careers", to: "/careers" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Reach Us", to: "/contact" },
            ],
        },
    ];

    /* ---------- DROPDOWN (desktop hover) ---------- */

    const openDropdown = (i) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveDropdown(i);
    };

    const closeDropdown = () => {
        closeTimer.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    useEffect(() => { setMenuOpen(false); }, [location]);

    useEffect(() => {
        const handleScroll = () => { setScrolled(window.scrollY > 80); };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock background scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {/* ---------- TOP INFO BAR (desktop/tablet only) ---------- */}
            {/* ---------- TOP INFO BAR (desktop/tablet only) ---------- */}
<div className={`hidden md:block w-full bg-white border-b border-slate-100 transition-all duration-500 overflow-hidden
${scrolled ? "max-h-0 opacity-0 py-0" : "max-h-[80px] opacity-100 py-3"}`}>

    <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-6 lg:gap-8">

                <a href="tel:+914224327777" className="group flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 transition-colors duration-300 group-hover:bg-rose-600 group-hover:text-white">
                        <FaPhoneAlt className="text-xs" />
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold text-ink">
                            +91 4224327777 <span className="text-slate-300">/</span> 4327778
                        </span>
                        <span className="text-xs text-slate-500">
                            Emergency <b className="font-bold text-rose-600">+91 4224327799</b>
                        </span>
                    </span>
                </a>

                <span className="hidden h-9 w-px bg-slate-200 lg:block" aria-hidden="true" />

                <div className="hidden items-center gap-3 lg:flex">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                        <FaMapMarkerAlt className="text-xs" />
                    </span>
                    <span className="max-w-[260px] text-sm leading-tight text-slate-600">
                        522/3 Hindusthan Hospital Road, Avinashi Road, Coimbatore
                    </span>
                </div>
            </div>

            <div className="flex flex-shrink-0 items-center gap-4">
                <button
                    onClick={() => navigate("/appointment")}
                    className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-rose-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-[0_8px_20px_-6px_rgba(225,29,72,0.55)] transition-all duration-300 hover:shadow-[0_10px_26px_-4px_rgba(225,29,72,0.6)] hover:-translate-y-0.5 lg:px-6 lg:text-sm"
                >
                    <FaCalendarCheck className="text-xs transition-transform duration-300 group-hover:scale-110" />
                    BOOK AN APPOINTMENT
                </button>

                <span className="hidden h-9 w-px bg-slate-200 lg:block" aria-hidden="true" />

                <img
                    src={certLogo}
                    className="w-12 flex-shrink-0 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 lg:w-16"
                    alt="NABH Certified"
                />
            </div>

        </div>
    </div>
</div>

            {/* ---------- NAVBAR ---------- */}
            <div className="sticky top-0 z-[9999] w-full flex justify-center bg-white/80 backdrop-blur-md py-2 px-3 shadow-md">
                <div className="bg-white w-full md:w-[95%] max-w-7xl rounded-full shadow-xl px-3 sm:px-5 lg:px-6 h-16 lg:h-[72px] flex items-center gap-3 lg:gap-5">

                    {/* Logo — static, never toggles, so it never collides with the top bar */}
                    <NavLink to="/" className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Hindusthan Hospital"
                            className="h-9 w-[124px] object-contain sm:h-10 sm:w-[150px] lg:h-[52px] lg:w-[180px]"
                        />
                    </NavLink>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-7">
                        {nav.map((item, i) => (
                            <div key={i} className="relative"
                                onMouseEnter={() => openDropdown(i)}
                                onMouseLeave={closeDropdown}>

                                <div className="flex items-center gap-1 py-2 font-semibold text-sm cursor-pointer text-slate-700 hover:text-rose-600 transition-colors">
                                    {item.to ? <NavLink to={item.to}>{item.label}</NavLink> : <span>{item.label}</span>}
                                    {item.children && (
                                        <FaChevronDown className={`text-xs transition-transform duration-200 ${activeDropdown === i ? "rotate-180" : ""}`} />
                                    )}
                                </div>

                                <AnimatePresence>
                                    {activeDropdown === i && item.children && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: .2 }}
                                            className={`absolute top-full mt-3 bg-white rounded-xl shadow-2xl p-2 z-50 ${item.mega ? "w-[860px] grid grid-cols-4 gap-x-1" : "w-64"}`}>

                                            {item.children.map((sub, j) => {
                                                if (typeof sub === "string") {
                                                    return <NavLink key={j} to={toSlug(sub)}
                                                        className="block px-4 py-2 text-sm hover:text-rose-600 rounded-lg hover:bg-rose-50">{sub}</NavLink>;
                                                }
                                                if (sub.external) {
                                                    return <a key={j} href={sub.to} target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block px-4 py-2 text-sm hover:text-rose-600 rounded-lg hover:bg-rose-50">{sub.label}</a>;
                                                }
                                                return <NavLink key={j} to={sub.to}
                                                    className="block px-4 py-2 text-sm hover:text-rose-600 rounded-lg hover:bg-rose-50">{sub.label}</NavLink>;
                                            })}

                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex flex-shrink-0">
                        <button onClick={() => navigate("/Mettupalayam")}
                            className="bg-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow hover:bg-green-700 transition whitespace-nowrap">
                            BRANCH
                        </button>
                    </div>

                    {/* Mobile: quick-call + book + hamburger */}
                    <div className="flex lg:hidden items-center gap-1.5 ml-auto">
                        <a href="tel:+914224327799"
                            aria-label="Call emergency number"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600 flex-shrink-0">
                            <FaPhoneAlt className="text-sm" />
                        </a>
                        <button
                            onClick={() => navigate("/appointment")}
                            aria-label="Book an appointment"
                            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-2 text-xs font-bold shadow flex-shrink-0"
                        >
                            <FaCalendarCheck className="text-xs" />
                            <span className="hidden xs:inline">Book</span>
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-ink flex-shrink-0"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                </div>
            </div>

            {/* ---------- MOBILE MENU ---------- */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/40 z-[9997]"
                        />

                        {/* Slide-down panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:hidden fixed top-[76px] left-3 right-3 bg-white shadow-2xl rounded-2xl overflow-hidden z-[9998] max-h-[calc(100vh-100px)] overflow-y-auto"
                        >
                            {/* Emergency strip */}
                            <div className="flex items-center justify-between gap-3 bg-rose-50 px-4 py-3 text-sm">
                                <div className="flex items-center gap-2 font-semibold text-rose-700">
                                    <FaPhoneAlt className="text-xs" /> Emergency
                                </div>
                                <a href="tel:+914224327799" className="font-bold text-rose-700">+91 4224327799</a>
                            </div>

                            {nav.map((item, i) => (
                                <div key={i} className="border-b border-slate-100">
                                    <div
                                        className="flex justify-between items-center px-4 py-3.5 font-semibold text-sm active:bg-slate-50"
                                        onClick={() => {
                                            if (item.children) {
                                                setMobileDropdown(mobileDropdown === i ? null : i);
                                            } else if (item.to) {
                                                setMenuOpen(false);
                                            }
                                        }}
                                    >
                                        {item.to
                                            ? <NavLink to={item.to} className="flex-1" onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
                                            : <span className="flex-1">{item.label}</span>}
                                        {item.children && (
                                            <FaChevronDown className={`text-xs text-slate-400 transition-transform duration-200 ${mobileDropdown === i ? "rotate-180" : ""}`} />
                                        )}
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {item.children && mobileDropdown === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className={`bg-slate-50 overflow-hidden ${item.mega ? "grid grid-cols-2 gap-x-2" : ""}`}
                                            >
                                                {item.children.map((sub, j) => {
                                                    if (typeof sub === "string") {
                                                        return (
                                                            <NavLink key={j} to={toSlug(sub)}
                                                                className="block px-6 py-3 text-sm text-slate-600 active:text-rose-600"
                                                                onClick={() => setMenuOpen(false)}>
                                                                {sub}
                                                            </NavLink>
                                                        );
                                                    }
                                                    if (sub.external) {
                                                        return (
                                                            <a key={j} href={sub.to} target="_blank" rel="noopener noreferrer"
                                                                className="block px-6 py-3 text-sm text-slate-600 active:text-rose-600"
                                                                onClick={() => setMenuOpen(false)}>
                                                                {sub.label}
                                                            </a>
                                                        );
                                                    }
                                                    return (
                                                        <NavLink key={j} to={sub.to}
                                                            className="block px-6 py-3 text-sm text-slate-600 active:text-rose-600"
                                                            onClick={() => setMenuOpen(false)}>
                                                            {sub.label}
                                                        </NavLink>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Branch + address footer inside menu */}
                            <div className="p-4 space-y-3">
                                <button
                                    onClick={() => { navigate("/Mettupalayam"); setMenuOpen(false); }}
                                    className="w-full bg-green-600 text-white py-3 rounded-xl text-sm font-bold shadow"
                                >
                                    METTUPALAYAM BRANCH
                                </button>
                                <div className="flex items-start gap-2 text-xs text-slate-500">
                                    <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
                                    <span>522/3 Hindusthan Hospital Road, Avinashi Road, Coimbatore</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    );
}