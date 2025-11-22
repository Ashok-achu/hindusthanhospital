import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [shrink, setShrink] = useState(false);
  const [isEmergencyPaused, setIsEmergencyPaused] = useState(false);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/aboutus" },
    { label: "DOCTORS", to: "/healthcare" },
    { label: "SPECIALITIES", to: "/specialities" },
    { label: "FACILITIES", to: "/facilities" },
    { label: "TESTIMONIALS", to: "/testimonials" },
    { label: "CAREERS", to: "/careers" },
    { label: "NEWS & MEDIA", to: "/news" },
    { label: "CONTACT", to: "/contact" },
  ];

  // Theme Sync
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Shrink effect on scroll
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔴 Emergency Scroll Bar */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-[6px] text-center z-[80] overflow-hidden">
        <span
          className="inline-block scrolling-text font-semibold whitespace-nowrap"
          onMouseEnter={() => setIsEmergencyPaused(true)}
          onMouseLeave={() => setIsEmergencyPaused(false)}
          style={{ animationPlayState: isEmergencyPaused ? "paused" : "running" }}
        >
          🚑 Emergency Hotline: +91 422 432 7799 — Available 24x7 🚑
        </span>
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed w-[95vw] md:w-[90vw] left-1/2 -translate-x-1/2 rounded-2xl backdrop-blur-xl 
        border border-white/30 shadow-xl z-[70] transition-all duration-300
        ${dark ? "bg-gray-900/70 text-white" : "bg-white/70 text-black"}
        ${shrink ? "top-[38px] scale-[0.93]" : "top-[55px]"}`}
      >

        {/* ⭐ Desktop Layout */}
        <div className="hidden md:flex justify-between items-center px-6 py-3 w-full">

          {/* Logo + Tagline */}
          <div>
            <img src={logo} className="w-44" alt="Hospital Logo" />
            <p className="text-[12px] text-gray-500">A Unit of Hindusthan Educational and Charitable Trust</p>
          </div>

          {/* Address */}
          <p className="font-bold text-[14px] text-gray-800 leading-tight">
            522/3 Hindusthan Hospital Road,<br/>
            Avinashi Road, Coimbatore – 641028
          </p>

          {/* Numbers */}
          <p className="font-bold text-[14px] text-gray-800 leading-tight text-right">
            +91 422 432 7777 <br/> +91 422 432 7778
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
              BOOK APPOINTMENT
            </button>

            <img src={certLogo} className="w-16" alt="Certificate" />

            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              {dark ? "☀" : "🌙"}
            </button>
          </div>
        </div>

        {/* ⭐ Desktop Menu */}
        <nav className="hidden md:flex justify-center gap-8 pb-3 text-sm font-semibold">
          {navItems.map(({ label, to }) => (
            <NavLink key={to} to={to} className="hover:text-blue-600 transition">
              {label}
            </NavLink>
          ))}
        </nav>

        {/* 📱 Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-5 py-3">
          <div className="flex gap-3 items-center">
            <img src={logo} className="w-24" alt="Mobile Logo" />
            <img src={certLogo} className="w-12 rounded-md" alt="Cert" />
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 text-white flex flex-col px-6 py-5 gap-4 text-lg">
            {navItems.map(({ label, to }) => (
              <NavLink to={to} key={to} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
            <button className="border px-4 py-2 rounded-full">Book Appointment</button>
          </div>
        )}
      </header>

      {/* Push Content Down so Hero isn't hidden */}
      <div id="navSpacer"></div>

      <style>{`
        .scrolling-text { animation: scroll 13s linear infinite; }
        @keyframes scroll { from { transform: translateX(100%); } to { transform: translateX(-100%); } }
      `}</style>
    </>
  );
}
