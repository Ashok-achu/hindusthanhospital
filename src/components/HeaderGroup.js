import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function HeaderGroup() {
  const [menuOpen, setMenuOpen] = useState(false);

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


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================================
            TOP LAYER — GLASS BLUR EFFECT
        ================================= */}
        <div className="backdrop-blur-md bg-white/70 border-b-[3px] border-transparent bg-clip-padding"
          style={{
            borderImage: "linear-gradient(to right, #2563eb, #ef4444) 1",
          }}>

          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-3 gap-3">

            {/* LOGO */}
            <img src={logo} className="w-36 md:w-44" />

            {/* EMERGENCY BAR — with glow */}
            {/* EMERGENCY BAR — UPDATED WITH PAUSE ON HOVER */}
            <div
              className="bg-red-600 text-white px-6 py-1 rounded-full shadow-lg 
             overflow-hidden w-[420px] max-w-[420px] md:w-[420px] 
             glowing emergency-bar group cursor-pointer"
            >
              <div className="marquee-text whitespace-nowrap font-semibold text-xs md:text-sm group-hover:[animation-play-state:paused]">
                🚑 Emergency Hotline: +91 98765 43210 — 24x7 Ambulance
                &nbsp;&nbsp;&nbsp; 🚑 Emergency Hotline: +91 98765 43210 — 24x7 Ambulance
              </div>
            </div>


            {/* RIGHT SIDE: ADDRESS + PHONE + BUTTON */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">

              {/* ADDRESS */}
              <div className="text-xs text-blue-900 leading-tight md:text-right text-center">
                Nava India Road, Udaiyampalayam,<br />
                Coimbatore – 641028
              </div>

              {/* PHONE */}
              <p className="text-sm text-blue-900 font-semibold">
                +91 98765 43210
              </p>

              {/* BUTTON */}
              <button className="border border-blue-700 text-blue-700 px-4 py-2 
                                 rounded-full hover:bg-blue-700 hover:text-white 
                                 text-sm font-semibold transition-all duration-300">
                Book Appointment
              </button>

            </div>
          </div>
        </div>

        {/* ================================
            NAVBAR — Animated Underline
        ================================= */}
        <nav className="bg-blue-700 text-white shadow-md">

          {/* DESKTOP NAV */}
          <div className="hidden md:flex justify-center gap-10 py-3 text-sm font-semibold tracking-wide">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="relative group"
              >
                {item.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* MOBILE NAV BUTTON */}
          <div className="flex md:hidden justify-between items-center px-4 py-3">
            <span className="font-bold">Menu</span>
            <button
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>

          {/* MOBILE NAV */}
          {menuOpen && (
            <div className="md:hidden bg-blue-800 text-white px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </div>
          )}

        </nav>

      </header>

      {/* Spacer for fixed header */}
      <div className="pt-[10px] md:pt-[5px]"></div>

      {/* GLOWING EFFECT CSS */}
      <style>
        {`
  .marquee-text {
    display: inline-block;
    animation: marquee 20s linear infinite;
  }

  /* Pause on hover handled by group-hover */

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }

  /* Softer Glow */
  .glowing {
    box-shadow: 0 0 6px rgba(255, 0, 0, 0.45),
                0 0 12px rgba(255, 0, 0, 0.35);
  }
`}
      </style>

    </>
  );
}
