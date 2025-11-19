import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 150);
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
    <header className="w-full fixed top-0 left-0 z-50 font-[Poppins] transition-all duration-500">
      {/* 🔹 Full Header (Visible When Not Scrolled) */}
      <div
        className={`bg-white transition-all duration-700 ${
          isSticky ? "opacity-0 pointer-events-none -translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        {/* 🔸 Top Info Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white text-xs md:text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {topLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:text-yellow-300 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-1 md:mt-0">
            <span className="hidden md:inline text-gray-200">Follow us on:</span>
            <i className="fab fa-facebook-f hover:text-yellow-300 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-yellow-300 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-yellow-300 cursor-pointer"></i>
            <i className="fab fa-linkedin-in hover:text-yellow-300 cursor-pointer"></i>
          </div>
        </div>

        {/* 🔸 Logo + Emergency + Contact */}
        <div className="bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-3 relative">
          <img
            src={logo}
            alt="Hindusthan Hospital Logo"
            className="w-44 md:w-56 hover:scale-105 transition-transform duration-300"
          />

          {/* 🚨 Emergency Scrolling Bar */}
          <div className="relative w-full md:w-[40%] overflow-hidden py-1 mt-3 md:mt-0 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 rounded-full shadow-md group">
            <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
              <span className="mx-6 text-white font-semibold text-sm tracking-wide">
                🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
              </span>
              <span className="mx-6 text-white font-semibold text-sm tracking-wide">
                🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
              </span>
            </div>
          </div>

          {/* 🔸 Contact + Search + Button */}
          <div className="flex items-center gap-4 md:gap-6 text-blue-800 font-medium mt-5 md:mt-0">
            <i className="fas fa-search text-lg cursor-pointer hover:text-red-600 transition"></i>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-red-600"></i>
              <span className="font-semibold tracking-wide">
                +91 422 4327777, 4327778
              </span>
            </div>
            <button className="border border-blue-700 text-blue-700 font-semibold rounded-full px-4 py-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-600 hover:text-white transition">
              <i className="fas fa-calendar-alt mr-2"></i>
              Book Appointment
            </button>
          </div>
        </div>

        {/* 🔸 Bottom Blue Navbar (ALWAYS Visible on Top Page) */}
        <nav className="bg-blue-700 text-white font-semibold text-sm">
          <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 py-3 flex-wrap">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-1 transition-all duration-500 ${
                    isActive
                      ? "text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-yellow-400 after:to-red-500 after:rounded-full"
                      : "hover:text-yellow-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[3px] hover:after:bg-gradient-to-r hover:after:from-blue-400 hover:after:to-red-400 hover:after:rounded-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* 🔹 Sticky Navbar (Visible After Scroll) */}
      <nav
        className={`transition-all duration-700 fixed left-0 w-full ${
          isSticky
            ? "top-0 bg-blue-800 shadow-lg animate-slideInDown opacity-100"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-3">
          <img
            src={logo}
            alt="Logo"
            className="w-32 md:w-36 transition-all duration-300"
          />

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-1 transition-all duration-500 ${
                    isActive
                      ? "text-yellow-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-yellow-400 after:to-red-500 after:rounded-full"
                      : "hover:text-yellow-300 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full hover:after:h-[3px] hover:after:bg-gradient-to-r hover:after:from-blue-400 hover:after:to-red-400 hover:after:rounded-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-blue-800 flex flex-col items-start gap-3 px-6 py-4 text-white shadow-lg animate-slideDown">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-1 border-b border-blue-600 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
