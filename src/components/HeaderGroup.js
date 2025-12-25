import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const slugMap = {
    Anaesthesiology: "anaesthesiology",
    Cardiology: "cardiology",
    Dermatology: "dermatology",
    Dentistry: "dentistry",
    Diabetology: "diabetology",
    "Emergency Care": "emergency-care",
    ENT: "ent",
    "General Medicine": "general-medicine",
    "General Surgery": "general-surgery",
    Gastroenterology: "gastroenterology",
    "Internal Medicine": "internal-medicine",
    ICU: "icu",
    Neonatology: "neonatology",
    "Neuro & Vascular Surgery": "neurovascular-surgery",
    Nephrology: "nephrology",
    "Obstetrics & Gynaecology": "obgyn",
    Orthopaedics: "orthopaedics",
    Rehabilitation: "rehab",
    Paediatrics: "paediatrics",
    "Paediatric Surgery": "paediatric-surgery",
    Psychiatry: "psychiatry",
    "Plastic Surgery": "plastic-surgery",
    Pulmonology: "pulmonology",
    Radiology: "radiology",
    "Surgical Oncology": "surgical-oncology",
    Urology: "urology",
  };

  const toSlug = (label) => "/departments/" + slugMap[label];

  const nav = [
    { label: "Home", to: "/" },
    {
      label: "About",
      children: [
        { label: "About Trust", to: "/abouttrust" },
        { label: "Mission & Vision", to: "/mission" },
        { label: "Our Profile", to: "/profile" },
        { label: "Milestones", to: "/milestones" },
      ],
    },
    { label: "Doctors", to: "/doctors" },
    { label: "Departments", mega: true, children: Object.keys(slugMap) },
    {
      label: "Gallery",
      children: [
        { label: "Media", to: "/gallery/media" },
        { label: "News", to: "/gallery/news" },
        {
          label: "Brochure",
          to: "/brochure/hindusthan-hospital-brochure.pdf",
          external: true,
        },
      ],
    },
    {
      label: "Facilities",
      children: [
        { label: "Ambulance", to: "/facilities/ambulance" },
        { label: "Birthing Centre", to: "/facilities/birthing-centre" },
        { label: "Radiology", to: "/facilities/radiology-services" },
        { label: "Lab Services", to: "/facilities/lab-services" },
        { label: "Blood Bank", to: "/facilities/blood-bank" },
        { label: "Insurance", to: "/facilities/insurance" },
      ],
    },
    { label: "Packages", to: "/health" },
    {
      label: "Academics",
      children: [
        { label: "Institutions", to: "https://hindusthan.net", external: true },
        { label: "Courses", to: "/academics/courses" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const openDropdown = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(i);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 250);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300">

        {/* TOP BAR - Hidden on Scroll */}
        <div
          className={`w-full transition-all duration-500 overflow-hidden bg-gradient-to-r from-rose-700 to-rose-600 shadow-md ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100 py-2.5"}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm font-semibold tracking-wide">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>522/3 Hindusthan Hospital Road, Coimbatore</span>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2 border-r border-rose-400 pr-6">
                <FaPhoneAlt className="text-lg" />
                <span>+91 422 432 7777</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <span>info@hindusthan.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR - Pill Shape with SOLID Background */}
        <div className={`w-full flex justify-center transition-all duration-500 ${scrolled ? "mt-4" : "mt-4"}`}>
          <div
            className={`relative flex items-center justify-between px-6 py-2 rounded-full border border-gray-100 shadow-2xl transition-all duration-500 w-[95%] max-w-7xl bg-white
            ${scrolled ? "py-2" : "py-3"}`}
          >
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <NavLink to="/">
                <img src={logo} alt="Logo" className={`transition-all duration-300 ${scrolled ? "w-32" : "w-40"}`} />
              </NavLink>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-6">
              {nav.map((item, i) => (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => openDropdown(i)}
                  onMouseLeave={closeDropdown}
                >
                  <div className="flex items-center gap-1 cursor-pointer py-2">
                    {item.to && !item.children ? (
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => `font-bold text-sm transition tracking-wide hover:text-rose-600 ${isActive ? "text-rose-600" : "text-gray-800"}`}
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <span className={`font-bold text-sm transition tracking-wide group-hover:text-rose-600 ${activeDropdown === i ? "text-rose-600" : "text-gray-800"}`}>
                        {item.label}
                      </span>
                    )}
                    {item.children && <FaChevronDown className={`text-[10px] text-gray-400 mt-0.5 transition-transform duration-300 ${activeDropdown === i ? "rotate-180" : ""}`} />}
                  </div>

                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {item.children && activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full -left-4 pt-4 z-50`}
                      >
                        <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${item.mega ? "w-[900px] p-6 grid grid-cols-4 gap-x-8 gap-y-2 -left-[200px] relative" : "w-60 py-2"}`}>

                          {item.mega && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-400"></div>
                          )}

                          {item.children.map((sub, j) => {
                            const linkContent = typeof sub === "string" ? sub : sub.label;
                            const linkTo = typeof sub === "string" ? toSlug(sub) : sub.to;
                            const isExternal = typeof sub !== "string" && sub.external;

                            if (isExternal) {
                              return (
                                <a href={linkTo} key={j} target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition rounded-lg">
                                  {linkContent} ↗
                                </a>
                              )
                            }

                            return (
                              <NavLink
                                key={j}
                                to={linkTo}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition rounded-lg"
                              >
                                {linkContent}
                              </NavLink>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ACTION BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              <img src={certLogo} className="w-10 rounded-md" alt="NABH" />
              <button className="bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-rose-500/40 transition transform hover:-translate-y-0.5">
                APPOINTMENT
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-[95%] mx-auto mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="p-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {nav.map((item, i) => (
                  <div key={i} className="border-b border-gray-50 last:border-none">
                    <div
                      className="flex justify-between items-center py-3 px-2 font-semibold text-gray-700 active:bg-gray-50 rounded-lg"
                      onClick={() => item.children && setActiveDropdown(activeDropdown === i ? null : i)}
                    >
                      {item.to && !item.children ? (
                        <NavLink to={item.to} className="block w-full">{item.label}</NavLink>
                      ) : (
                        <span>{item.label}</span>
                      )}
                      {item.children && <FaChevronDown className={`text-xs transition-transform ${activeDropdown === i ? "rotate-180" : ""}`} />}
                    </div>

                    {/* Mobile Submenu */}
                    {activeDropdown === i && item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-gray-50 rounded-lg p-2 mb-2"
                      >
                        {item.children.map((sub, j) => {
                          const linkContent = typeof sub === "string" ? sub : sub.label;
                          const linkTo = typeof sub === "string" ? toSlug(sub) : sub.to;
                          return (
                            <NavLink key={j} to={linkTo} className="block py-2 px-3 text-sm text-gray-600 border-l-2 border-transparent hover:border-rose-500 hover:text-rose-600">
                              {linkContent}
                            </NavLink>
                          )
                        })}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <button className="w-full bg-rose-600 text-white font-bold py-3 rounded-xl shadow-lg">
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
