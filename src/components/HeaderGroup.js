import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);

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
      label: "GALLERY",
      children: [
        { label: "MEDIA", to: "/gallery/media" },
        { label: "NEWS", to: "/gallery/news" },
        {
          label: "BROCHURE",
          to: "/brochure/hindusthan-hospital-brochure.pdf",
          external: true,
        },
      ],
    },
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
        { label: "COURSES", to: "/academics/courses" },
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
    const sc = () => setShrink(window.scrollY > 40);
    window.addEventListener("scroll", sc);
    return () => window.removeEventListener("scroll", sc);
  }, []);

  const openDropdown = (i) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(i);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 w-[95vw] md:w-[90vw]
        bg-white z-[90] border border-gray-200 transition-all duration-300
        ${shrink ? "top-2" : "top-4"}`}
      >
        {/* DESKTOP LOGO SECTION */}
        <div className="hidden md:flex justify-between items-center px-6 py-4">
          <div>
            <img src={logo} className="w-44" />
            <p className="text-xs text-gray-500 uppercase">
              A Unit of Hindusthan Educational Trust
            </p>
          </div>

          <p className="font-semibold text-sm">
            522/3 Hindusthan Hospital Road <br /> Coimbatore – 641028
          </p>

          <p className="font-semibold text-sm text-right">
            +91 422 432 7777 <br /> +91 422 432 7778
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-full font-bold">
              BOOK APPOINTMENT
            </button>
            <img src={certLogo} className="w-14" />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-center gap-8 py-3 text-sm font-extrabold uppercase">
          {nav.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => openDropdown(i)}
              onMouseLeave={closeDropdown}
            >
              <div
                onClick={() =>
                  item.children &&
                  setActiveDropdown(activeDropdown === i ? null : i)
                }
                className="flex items-center gap-1 cursor-pointer hover:text-red-700"
              >
                {item.to ? <NavLink to={item.to}>{item.label}</NavLink> : item.label}
                {item.children && <span className="text-xs">▼</span>}
              </div>

              {item.children && activeDropdown === i && (
                <div
                  className={`absolute top-full mt-4 bg-red-700 text-white p-6
                  ${item.mega ? "w-[850px] grid grid-cols-3 gap-4" : "w-64"}`}
                >
                  {item.children.map((sub, j) =>
                    typeof sub === "string" ? (
                      <NavLink
                        key={j}
                        to={toSlug(sub)}
                        className="block py-1 hover:text-yellow-300"
                      >
                        {sub}
                      </NavLink>
                    ) : sub.external ? (
                      <a
                        key={j}
                        href={sub.to}
                        target="_blank"
                        className="block py-1 hover:text-yellow-300"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <NavLink
                        key={j}
                        to={sub.to}
                        className="block py-1 hover:text-yellow-300"
                      >
                        {sub.label}
                      </NavLink>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* MOBILE HEADER */}
        <div className="md:hidden flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} className="w-28" />
            <img src={certLogo} className="w-10" />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl font-bold"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-red-700 text-white px-5 py-6 space-y-4 font-semibold">
            {nav.map((item, i) => (
              <div key={i}>
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    item.children &&
                    setActiveDropdown(activeDropdown === i ? null : i)
                  }
                >
                  {item.label}
                  {item.children && <span>▼</span>}
                </div>

                {activeDropdown === i && item.children && (
                  <div className="pl-4 pt-3 space-y-2">
                    {item.children.map((sub, j) =>
                      typeof sub === "string" ? (
                        <NavLink
                          key={j}
                          to={toSlug(sub)}
                          onClick={() => setMenuOpen(false)}
                          className="block"
                        >
                          {sub}
                        </NavLink>
                      ) : sub.external ? (
                        <a key={j} href={sub.to} target="_blank" className="block">
                          {sub.label}
                        </a>
                      ) : (
                        <NavLink
                          key={j}
                          to={sub.to}
                          onClick={() => setMenuOpen(false)}
                          className="block"
                        >
                          {sub.label}
                        </NavLink>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
