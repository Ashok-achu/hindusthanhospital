import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [shrink, setShrink] = useState(false);

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

  // Save Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🚨 Fixed Emergency Bar (Only Text Scrolls) */}
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-[7px] text-center z-[70] overflow-hidden shadow-md">
        <span className="inline-block scrolling-text whitespace-nowrap font-semibold">
          🚑 Emergency Hotline: +91 98765 43210 — Available 24x7 🚑 Emergency Hotline: +91 98765 43210 — Available 24x7
        </span>
      </div>

      {/* 🧊 Floating Glass Navbar */}
      <header
        className={`fixed w-[94vw] md:w-[80vw] left-1/2 -translate-x-1/2 z-[60] transition-all duration-400 backdrop-blur-2xl border border-white/30 ${
          dark ? "bg-gray-900/60 text-white" : "bg-white/65 text-black"
        } shadow-xl rounded-2xl ${
          shrink ? "top-[30px] scale-[0.94]" : "top-[40px]"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3">
          <img src={logo} alt="logo" className={`transition-all ${shrink ? "w-24 md:w-32" : "w-32 md:w-44"}`} />

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6 font-semibold">
            <span className="text-blue-700">Nava India ,Coimbatore</span>
            <span className="text-blue-700">📞 +91 98765 43210</span>


            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-1 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>

            <button className="border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex justify-center gap-9 pb-3 text-sm font-semibold">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="relative group hover:text-blue-600 transition">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Slide Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 text-white px-6 py-5 flex flex-col gap-4 text-lg transition">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}

            <button className="border px-4 py-2 rounded-full">Book Appointment</button>
          </div>
        )}
      </header>

      {/* Fix Hero Spacing */}
      <div className="pt-[130px] md:pt-[1px]"></div>

      {/* 🔧 CSS Animations */}
      <style>{`
        .scrolling-text {
          animation: scroll 10s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
