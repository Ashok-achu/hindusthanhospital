import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

/**
 * 2025 UI/UX Header
 * - Glassmorphism, sticky, subtle gradients & shadows
 * - Center nav, right CTA
 * - Mobile drawer with smooth animation
 * - Accessible (aria-*), keyboard focus rings
 * - Optional Dark/Light toggle
 */
export default function HeaderModern() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  // Dark mode toggle (adds/removes "dark" on <html>)
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  // Variants for framer-motion
  const drawerVars = {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
  };

  const navItemVars = {
    hidden: { opacity: 0, y: -6 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * i, duration: 0.25 },
    }),
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Glassy bar */}
      <div className="backdrop-blur-lg bg-white/70 dark:bg-slate-900/60 border-b border-white/40 dark:border-slate-800/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between gap-4">
            {/* Left: Logo */}
            <button
              onClick={() => navigate("/")}
              className="group inline-flex items-center gap-3 focus:outline-none"
              aria-label="Go to home"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03] drop-shadow-[0_6px_12px_rgba(0,0,0,0.07)]"
              />
              <span className="hidden sm:block font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                Your Brand
              </span>
            </button>

            {/* Center: Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 xl:gap-8">
                {links.map((item, i) => (
                  <motion.li
                    key={item.to}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={navItemVars}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `
                        relative inline-block px-1 py-1 text-sm font-medium 
                        text-slate-700 dark:text-slate-200 transition
                        hover:text-blue-700 dark:hover:text-blue-300
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded
                        ${isActive ? "text-blue-700 dark:text-blue-300" : ""}
                      `
                      }
                    >
                      <span className="relative">
                        {item.label}
                        {/* Gradient underline on hover/active */}
                        <span
                          className={`
                            pointer-events-none absolute left-0 -bottom-0.5 h-[3px] w-0 
                            rounded-full transition-all duration-300
                            bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500
                            group-hover:w-full
                          `}
                        />
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Right: CTA + Theme + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme toggle */}
              <button
                onClick={() => setDark((v) => !v)}
                className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full
                           bg-white/70 dark:bg-slate-800/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_20px_rgba(2,6,23,0.15)]
                           border border-white/50 dark:border-slate-700/60
                           text-slate-700 dark:text-slate-200 hover:scale-105 transition"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {/* Font Awesome icons (sun/moon) */}
                <i className={`fas ${dark ? "fa-sun" : "fa-moon"}`} />
              </button>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
                className="hidden md:inline-flex items-center gap-2 rounded-full px-4 h-10
                           bg-gradient-to-tr from-blue-600 via-indigo-500 to-fuchsia-500
                           text-white font-semibold shadow-[0_10px_20px_-10px_rgba(79,70,229,0.6)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <i className="fas fa-bolt" />
                Get Started
              </motion.button>

              {/* Hamburger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-drawer"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full 
                           border border-white/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/70
                           text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_20px_rgba(2,6,23,0.15)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <i className={`fas ${open ? "fa-times" : "fa-bars"}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={drawerVars}
            className="md:hidden backdrop-blur-lg bg-white/85 dark:bg-slate-900/80 border-b border-white/60 dark:border-slate-800/60 shadow-lg"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
              <ul className="flex flex-col gap-2">
                {links.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `
                        block w-full rounded-xl px-4 py-3 text-base font-medium
                        transition hover:bg-slate-100/60 dark:hover:bg-slate-800/70
                        text-slate-800 dark:text-slate-100
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
                        ${isActive ? "bg-slate-100/70 dark:bg-slate-800/70" : ""}
                      `
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setDark((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full px-4 h-10
                             border border-white/60 dark:border-slate-700/60
                             bg-white/80 dark:bg-slate-800/70
                             text-slate-700 dark:text-slate-200
                             shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_20px_rgba(2,6,23,0.15)]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                  <i className={`fas ${dark ? "fa-sun" : "fa-moon"}`} />
                  <span>{dark ? "Light mode" : "Dark mode"}</span>
                </button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-5 h-10
                             bg-gradient-to-tr from-blue-600 via-indigo-500 to-fuchsia-500
                             text-white font-semibold shadow-[0_10px_20px_-10px_rgba(79,70,229,0.6)]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                >
                  <i className="fas fa-paper-plane" />
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
