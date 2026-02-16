import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
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
      label: "Facilities",
      children: [
        { label: "Ambulance", to: "/facilities/ambulance" },
        { label: "Birth Center", to: "/facilities/birthing-centre" },
        { label: "Blood Bank", to: "/facilities/blood-bank" },
        { label: "Insurance", to: "/facilities/insurance" },
        { label: "MHC", to: "/facilities/mhc" },
        { label: "Rooms", to: "/facilities/rooms" },
        { label: "IT", to: "/facilities/it" },
        { label: "Canteen", to: "/facilities/canteen" },
        { label: "Pharmacy", to: "/facilities/pharmacy" },
      ],
    },
    { label: "Packages", to: "/health" },
    {
      label: "Media",
      children: [
        { label: "Gallery", to: "/gallery" },
        { label: "News", to: "/news" },
        {
          label: "Brochure",
          to: "/myapp/public/brochure/hindusthan-hospital-brochure.pdf",
          external: true,
        },
      ],
    },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const openDropdown = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(i);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9999] w-full">

        {/* TOP BAR */}
        <div
          className={`w-full bg-gradient-to-r from-rose-700 to-rose-600 text-white 
          transition-all duration-500 overflow-hidden
          ${
            scrolled
              ? "h-0 opacity-0 pointer-events-none"
              : "h-auto py-2 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-semibold">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>522/3 Hindusthan Hospital Road, Coimbatore</span>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <FaPhoneAlt />
                <span>+91 422 432 7777</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaEnvelope />
                <span>info@hindusthanhospital.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="w-full flex justify-center relative z-50">
          <div className="bg-white w-[94%] max-w-7xl rounded-full shadow-xl px-6 py-3 flex justify-between items-center">

            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-36" />
            </NavLink>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex gap-6">
              {nav.map((item, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => openDropdown(i)}
                  onMouseLeave={closeDropdown}
                >
                  <div className="flex items-center gap-1 font-bold text-sm cursor-pointer">
                    {item.to ? (
                      <NavLink to={item.to}>{item.label}</NavLink>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {item.children && <FaChevronDown className="text-xs" />}
                  </div>

                  <AnimatePresence>
                    {item.children && activeDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`absolute top-full mt-3 bg-white rounded-xl shadow-xl p-2 z-50 ${
                          item.mega
                            ? "w-[900px] grid grid-cols-4"
                            : "w-64"
                        }`}
                      >
                        {item.children.map((sub, j) =>
                          typeof sub === "string" ? (
                            <NavLink
                              key={j}
                              to={toSlug(sub)}
                              className="block px-4 py-2 text-sm hover:text-rose-600"
                            >
                              {sub}
                            </NavLink>
                          ) : (
                            <NavLink
                              key={j}
                              to={sub.to}
                              className="block px-4 py-2 text-sm hover:text-rose-600"
                            >
                              {sub.label}
                            </NavLink>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* RIGHT SIDE DESKTOP */}
            <div className="hidden lg:flex items-center gap-3">
              <img src={certLogo} alt="NABH" className="w-10" />
              <button className="bg-rose-600 text-white px-5 py-2 rounded-full text-xs font-bold">
                APPOINTMENT
              </button>
            </div>

            {/* MOBILE ICON */}
            <div className="lg:hidden flex items-center gap-3">
              <img src={certLogo} alt="NABH" className="w-8" />
              <button
                className="text-2xl text-rose-700"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OUTSIDE HEADER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden fixed top-[95px] left-0 right-0 bg-white shadow-xl mx-4 rounded-xl overflow-hidden z-[9998]"
          >
            {nav.map((item, i) => (
              <div key={i} className="border-b">
                <div
                  className="flex justify-between items-center px-4 py-3 font-semibold"
                  onClick={() =>
                    item.children &&
                    setMobileDropdown(mobileDropdown === i ? null : i)
                  }
                >
                  {item.to ? <NavLink to={item.to}>{item.label}</NavLink> : item.label}
                  {item.children && (
                    <FaChevronDown
                      className={`transition ${
                        mobileDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item.children && mobileDropdown === i && (
                  <div className="bg-gray-50">
                    {item.children.map((sub, j) =>
                      typeof sub === "string" ? (
                        <NavLink
                          key={j}
                          to={toSlug(sub)}
                          className="block px-6 py-3 text-sm"
                        >
                          {sub}
                        </NavLink>
                      ) : (
                        <NavLink
                          key={j}
                          to={sub.to}
                          className="block px-6 py-3 text-sm"
                        >
                          {sub.label}
                        </NavLink>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
