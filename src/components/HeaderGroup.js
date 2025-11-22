import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"; 
import certLogo from "../assets/NABH.jpg"; // certificate image here

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔴 EMERGENCY SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-[5px] text-center z-[80] overflow-hidden">
        <span
          className="inline-block scrolling-text whitespace-nowrap font-semibold"
          onMouseEnter={() => setIsEmergencyPaused(true)}
          onMouseLeave={() => setIsEmergencyPaused(false)}
          style={{ animationPlayState: isEmergencyPaused ? "paused" : "running" }}
        >
          🚑 Emergency Hotline: +91 422 432 7799 — Available 24x7 🚑 Emergency Hotline: +91 422 432 7799 — Available 24x7
        </span>
      </div>

      {/* 🧊 GLASS NAVBAR */}
      <header
        className={`fixed w-[95vw] md:w-[90vw] left-1/2 -translate-x-1/2 rounded-2xl 
        border border-white/30 shadow-xl z-[70] backdrop-blur-2xl
        transition-all duration-300 ${
          dark ? "bg-gray-900/70 text-white" : "bg-white/70 text-black"
        } ${shrink ? "top-[35px] scale-[0.92]" : "top-[55px]"}`}
      >
        {/* 🌍 Desktop Layout */}
{/* 🌍 Desktop Layout */}
<div className="hidden md:flex justify-between items-center px-6 py-3 w-full">

  {/* 🏥 LOGO + TAGLINE */}
  <div className="flex flex-col select-none">
    <img src={logo} className="w-40" alt="Hospital Logo" />
    <span className="text-[12px] text-gray-500">
      A Unit of Hindusthan Educational and Charitable Trust
    </span>
  </div>

  {/* 📍 ADDRESS (BOLD) */}
  <div className="text-sm font-bold text-gray-800 dark:text-black-200 text-left leading-tight">
    522/3, Hindusthan Hospital Road,Behind EB Substation,<br /> 
    Avinashi Road,Coimbatore – 641028
  </div>

  {/* 📞 CONTACT NUMBERS (BOLD) */}
  <div className="text-sm font-bold text-gray-800 dark:text-black-200 text-right leading-tight">
     +91 422 432 7777<br />
     +91 422 432 7778<br />
  </div>

  {/* BUTTON + CERT + MODE */}
  <div className="flex items-center gap-4">

    <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
      BOOK APPOINTMENT
    </button>

    <img src={certLogo} className="w-16" alt="Certified" />

    <button
      onClick={() => setDark(!dark)}
      className="border px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
    >
      {dark ? "☀" : "🌙"}
    </button>

  </div>
</div>



        {/* 📱 Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-5 py-3">
          <img src={logo} className="w-28" alt="logo" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 text-white px-6 py-5 flex flex-col gap-4 text-lg">
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <button className="border px-4 py-2 rounded-full">Book Appointment</button>
          </div>
        )}
      </header>

      {/* PUSH PAGE DOWN */}
<div id="navSpacer"></div>

      <style>{`
        .scrolling-text { animation: scroll 13s linear infinite; }
        @keyframes scroll { from { transform: translateX(100%);} to {transform: translateX(-100%);} }
      `}</style>
    </>
  );
}
