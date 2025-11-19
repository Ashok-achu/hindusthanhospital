import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 140);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topLinks = [
    { label: "About Us", to: "/aboutus" },
    { label: "News & Media", to: "/news" },
    { label: "Academics", to: "/academics" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ];

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "HEALTHCARE EXPERTS", to: "/healthcare" },
    { label: "SPECIALITIES", to: "/specialities" },
    { label: "FACILITIES", to: "/facilities" },
    { label: "NEWS", to: "/news" },
    { label: "BLOG", to: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-[Poppins]">

      {/* 🔵 TOP BLUE BAR */}
      <div
        className={`bg-blue-900 text-white text-xs md:text-sm py-2 px-4 md:px-10 flex justify-between items-center transition-all duration-500 ${
          isSticky ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* LEFT LINKS */}
        <div className="flex flex-wrap gap-4">
          {topLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="hover:text-yellow-300">
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="hidden md:flex items-center gap-3">
          <span className="opacity-80">Follow us on:</span>
          <i className="fab fa-facebook-f hover:text-yellow-300 cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-yellow-300 cursor-pointer"></i>
          <i className="fab fa-linkedin hover:text-yellow-300 cursor-pointer"></i>
        </div>
      </div>

      {/* 🌟 FULL HEADER (LOGO + SCROLL + ADDRESS + BUTTON) */}
      <div
        className={`bg-white shadow-sm transition-all duration-500 ${
          isSticky ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-10 py-3 gap-4">

          {/* LOGO */}
          <img src={logo} alt="Hindusthan Hospital" className="w-40 md:w-48" />

          {/* SCROLLING EMERGENCY BAR */}
          <div className="flex-1 overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 py-1 rounded-full shadow-md mx-2">
            <div className="animate-marquee text-white font-semibold whitespace-nowrap text-sm">
              🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
              &nbsp;&nbsp;&nbsp;&nbsp;
              🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
            </div>
          </div>

          {/* ADDRESS */}
          <div className="hidden md:block text-right text-blue-900 text-xs leading-tight">
            
            <br />Nava India Road,
            <br />Udaiyampalayam,
            <br />Coimbatore - 641028
          </div>

          {/* APPOINTMENT BUTTON */}
          <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
            <i className="fas fa-calendar-alt mr-2"></i>
            Book Appointment
          </button>
        </div>

        {/* 🔵 MAIN NAVBAR */}
        <nav className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto flex justify-center gap-8 py-3 text-sm font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative ${
                    isActive
                      ? "text-yellow-300 after:absolute after:h-[2px] after:w-full after:bg-yellow-300 after:left-0 after:-bottom-1"
                      : "hover:text-yellow-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* 🟦 STICKY HEADER ONLY WHEN SCROLLING */}
      <div
        className={`fixed w-full bg-blue-800 shadow-md py-3 px-4 md:px-10 transition-all duration-500 ${
          isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center text-white">

          {/* SMALL LOGO */}
          <img src={logo} alt="logo" className="w-32" />

          {/* NAV (DESKTOP) */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="hover:text-yellow-300">
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-blue-900 px-6 py-4 flex flex-col gap-3 text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-blue-700 pb-1"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
