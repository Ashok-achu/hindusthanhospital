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
    <>
      {/* ============================
         MAIN HEADER (TOP + LOGO + NAV)
         Scrolls AWAY
      ============================= */}
      <header className="w-full fixed top-0 left-0 z-40 font-[Poppins] bg-white shadow-sm">

        {/* TOP BLUE BAR */}
        <div
          className={`bg-blue-900 text-white text-xs md:text-sm py-2 px-4 md:px-10 flex justify-between items-center transition-all duration-500 ${
            isSticky ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex flex-wrap gap-4">
            {topLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="hover:text-yellow-300">
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="opacity-80">Follow us on:</span>
            <i className="fab fa-facebook-f hover:text-yellow-300" />
            <i className="fab fa-instagram hover:text-yellow-300" />
            <i className="fab fa-linkedin hover:text-yellow-300" />
          </div>
        </div>

        {/* LOGO + EMERGENCY + ADDRESS + BUTTON */}
        <div
          className={`transition-all duration-500 ${
            isSticky ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
          } bg-white`}
        >
          <div className="flex items-center justify-between px-4 md:px-10 py-4">

            {/* LOGO */}
            <img src={logo} alt="Hindusthan Hospital" className="w-40 md:w-48" />

            {/* EMERGENCY SCROLLING BAR */}
            <div className="flex-1 overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 py-1 rounded-full shadow-md mx-4">
              <div className="animate-marquee text-white font-semibold whitespace-nowrap text-sm">
                🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
                &nbsp;&nbsp;&nbsp;&nbsp;
                🚨 Emergency Contact: +91 12345 67980 | Ambulance: +91 98765 43210 | 24x7 Helpline 🚑
              </div>
            </div>

            {/* ADDRESS */}
            <div className="hidden md:block text-right text-blue-900 text-xs leading-tight">
            
              Nava India Road,<br />
              Udaiyampalayam,<br />
              Coimbatore - 641028
            </div>

            {/* BUTTON */}
            <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
              <i className="fas fa-calendar-alt mr-2" />
              Book Appointment
            </button>
          </div>

          {/* MAIN NAVBAR */}
          <nav className="bg-blue-700 text-white">
            <div className="max-w-7xl mx-auto flex justify-center gap-8 py-3 text-sm font-semibold">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="hover:text-yellow-300"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* ============================
         STICKY HEADER (ONLY WHEN SCROLLING)
         Always stays TOP
      ============================= */}
      <header
        className={`fixed top-0 left-0 w-full bg-blue-800 text-white shadow-lg z-50 transition-all duration-500 ${
          isSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-3">

          {/* SMALL LOGO */}
          <img src={logo} className="w-32" />

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="hover:text-yellow-300">
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE MENU ICON */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-blue-900 px-6 py-4 flex flex-col gap-3 text-white">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
