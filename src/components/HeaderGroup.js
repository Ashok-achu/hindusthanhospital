import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [shrink, setShrink] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const slugMap = {
    "Anaesthesiology": "anaesthesiology",
    "Cardiology": "cardiology",
    "Dermatology": "dermatology",
    "Dentistry": "dentistry",
    "Diabetology": "diabetology",
    "Emergency Care": "emergency-care",
    "ENT": "ent",
    "General Medicine": "general-medicine",
    "General Surgery": "general-surgery",
    "Gastroenterology": "gastroenterology",
    "Internal Medicine": "internal-medicine",
    "ICU": "icu",
    "Neonatology": "neonatology",
    "Neuro & Vascular Surgery": "neurovascular-surgery",
    "Nephrology": "nephrology",
    "Obstetrics & Gynaecology": "obgyn",
    "Orthopaedics": "orthopaedics",
    "Rehabilitation": "rehab",
    "Paediatrics": "paediatrics",
    "Paediatric Surgery": "paediatric-surgery",
    "Psychiatry": "psychiatry",
    "Plastic Surgery": "plastic-surgery",
    "Pulmonology": "pulmonology",
    "Radiology": "radiology",
    "Surgical Oncology": "surgical-oncology",
    "Urology": "urology",
  };
  const toSlug = (label) => "/departments/" + slugMap[label];

  const nav = [
    { label: "HOME", to: "/" },
    {
      label: "ABOUT US",
      children: [
        { label: "About Trust", to: "/abouttrust" },
        { label: "MISSION & VISION", to: "/mission" },
        { label: "OUR PROFILE", to: "/profile" },
        { label: "OUR MILESTONES", to: "/milestones" },
      ],
    },
    { label: "DOCTORS", to: "/doctors" },
    { label: "DEPARTMENTS", mega: true, children: Object.keys(slugMap) },
    {
      label: "FACILITIES",
      children: [
        { label: "AMBULANCE", to: "/facilities/ambulance" },
        { label: "BIRTHING CENTRE", to: "/facilities/birthing-centre" },
        { label: "RADIOLOGY", to: "/facilities/radiology-services" },
        { label: "LAB SERVICES", to: "/facilities/lab-services" },
        { label: "BLOOD BANK", to: "/facilities/blood-bank" },
        { label: "INSURANCE", to: "/facilities/insurance" },
      ],
    },
    { label: "HEALTH PACKAGE", to: "/health" },
    {
      label: "ACADEMICS",
      children: [
        { label: "EDUCATIONAL INSTITUTIONS", to: "https://hindusthan.net" },
        { label: "COURSES", to: "/courses" },
        { label: "EVENTS & NEWS", to: "/events" },
      ],
    },
    {
      label: "CONTACT",
      children: [
        { label: "CAREERS", to: "/careers" },
        { label: "TESTIMONIALS", to: "/testimonials" },
      ],
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const sc = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", sc);
    return () => window.removeEventListener("scroll", sc);
  }, []);

  return (
    <>
      {/* 🚑 EMERGENCY BAR */}
      <div className="fixed top-0 w-full bg-red-600 text-white py-[6px] text-center z-[100] overflow-hidden">
        <span
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="inline-block font-bold uppercase whitespace-nowrap"
          style={{ animation: paused ? "none" : "scroll 14s linear infinite" }}
        >
          🚑 EMERGENCY HOTLINE: +91 422 432 7799 — AVAILABLE 24x7 🚑
        </span>
      </div>

      {/* HEADER MAIN */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[94vw] md:w-[90vw] rounded-2xl shadow-xl z-[90]
        backdrop-blur-xl border border-white/40 transition-all duration-300
        ${dark ? "bg-gray-900/90 text-white" : "bg-white/90 text-black"}
        ${shrink ? "top-[45px] md:top-[40px] scale-[0.94]" : "top-[75px] md:top-[60px]"}`}
      >

        {/* TOP DESKTOP INFO */}
        <div className="hidden md:flex justify-between items-center px-6 py-3">
          <div className="flex flex-col">
            <img src={logo} className="w-44" />
            <p className="text-[12px] text-gray-500 uppercase">A Unit of Hindusthan Educational Trust</p>
          </div>

          <p className="font-bold text-[14px] leading-tight">
            522/3 HINDUSTHAN HOSPITAL ROAD <br /> COIMBATORE — 641028
          </p>

          <p className="font-bold text-[14px] leading-tight text-right">
            +91 422 432 7777 <br /> +91 422 432 7778
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-red-700 text-white px-5 py-2 rounded-full font-bold">BOOK APPOINTMENT</button>
            <img src={certLogo} className="w-14" />
            <button onClick={() => setDark(!dark)} className="px-3 py-1 border rounded-full">
              {dark ? "☀" : "🌙"}
            </button>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex justify-center gap-8 py-3 text-sm font-extrabold tracking-wide uppercase">
          {nav.map((item, i) => (
            <div
              key={i}
              className="relative group cursor-pointer pb-2"
              onMouseEnter={() => setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center gap-1">
                {item.label}
                {item.children && <span className="text-[10px]">▼</span>}
              </span>

              {item.children && (
                <div
                  className={`absolute left-0 top-full mt-3 bg-white text-black shadow-2xl rounded-xl p-6 border
                  transition-all duration-200 
                  ${activeDropdown === i ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                  ${item.mega ? "w-[850px] grid grid-cols-3 gap-10" : "w-56 flex flex-col"} `}
                >
                  {/* MEGA MENU */}
                  {item.mega &&
                    item.children.map((name, j) => (
                      <NavLink
                        key={j}
                        to={toSlug(name)}
                        className="hover:text-red-600 py-1 text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {name}
                      </NavLink>
                    ))}

                  {/* NORMAL MENU */}
                  {!item.mega &&
                    item.children.map((sub, j) => (
                      <NavLink
                        key={j}
                        to={sub.to}
                        className="hover:text-red-600 py-1 text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* MOBILE HEADER */}
        <div className="md:hidden flex justify-between px-5 py-3 items-center">
          <img src={logo} className="w-24" />
          <img src={certLogo} className="w-10" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl font-bold">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-red-700 text-white px-6 py-5 flex flex-col gap-3 font-bold text-lg max-h-[70vh] overflow-y-scroll">
            {nav.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    item.children ? setActiveDropdown(activeDropdown === index ? null : index) : setMenuOpen(false)
                  }
                >
                  {item.to ? (
                    <NavLink to={item.to} onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </NavLink>
                  ) : (
                    item.label
                  )}
                  {item.children && <span>{activeDropdown === index ? "▲" : "▼"}</span>}
                </div>

                {activeDropdown === index && item.children && (
                  <div className="flex flex-col pl-4 py-2 gap-2 text-sm font-semibold bg-red-800 rounded-lg">
                    {item.children.map((sub, idx) => {
                      const label = typeof sub === "string" ? sub : sub.label;
                      const link = item.mega ? toSlug(label) : sub.to;
                      return (
                        <NavLink key={idx} to={link} onClick={() => setMenuOpen(false)}>
                          {label}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* FIXED: space below header */}
      <div className="h-[10px] md:h-[9px]"></div>
    </>
  );
}
