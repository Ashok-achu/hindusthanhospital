import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaHeartbeat, FaStethoscope, FaBaby, FaBone,
  FaCalendarAlt, FaUser, FaArrowRight, FaUserMd,
  FaAmbulance, FaMicroscope, FaHandHoldingHeart,
  FaBrain, FaLungs, FaProcedures, FaTooth,
  FaBed, FaFlask, FaShieldAlt, FaTrophy,
  FaMedal, FaStar, FaCheckCircle, FaHospital,
  FaSyringe, FaWheelchair, FaPhoneAlt, FaEnvelope,
  FaChevronDown, FaChevronLeft, FaChevronRight
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doctorTeams from "../assets/Final/DSC03825.jpg";
import hospitalFrontPage from "../assets/set1/Hospital front page_.jpg";

import hero3 from "../assets/set1/hero3.png";
import why1 from "../assets/set1/NICU PHOTOTHERAPY.jpg";
import why2 from "../assets/set1/Radiology_(1).jpg";
import why3 from "../assets/set1/Radiology_(2).jpg";
import why4 from "../assets/set1/Icu_.jpg";
import doctorteam from "../assets/set1/doctor_team.png"
import healthcare from "../assets/hospital/1920_1080 Green removed.jpg";
import news1 from "../assets/set1/news1.jpg";
import news2 from "../assets/set1/news2.png";
import news3 from "../assets/set1/news3.jpg";
import hero1 from "../assets/set1/hero1.png";
import hero2 from "../assets/set1/hero2.png";
import hero4 from "../assets/set1/hero4.png";
import hero2Mobile from "../assets/set1/heromobile2.png";
import hero3Mobile from "../assets/set1/heromobile3.png";
import hero4Mobile from "../assets/set1/heromobile4.png";



/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë
   DESIGN TOKENS (see global <style> block at the bottom for the
   CSS variables + @font-face imports these classes rely on)

   Ink      #0B1220  ╬ô├ç├╢ primary text / dark section backgrounds
   Paper    #F8FAFC  ╬ô├ç├╢ page background
   Wine     #9D174D ╬ô├Ñ├å #E11D48 ╬ô├ç├╢ primary accent / CTAs
   Teal     #0F766E  ╬ô├ç├╢ trust / secondary accent
   Amber    #D97706  ╬ô├ç├╢ tertiary accent, used sparingly (tier gold)
   Mist     #EEF2F6  ╬ô├ç├╢ alternating section background

   Signature motif: a slow-drawing "vital pulse" (ECG) line used as
   a section divider and hero flourish ╬ô├ç├╢ it's the one recurring,
   ownable element that ties every section back to "we watch over
   you," rather than a generic gradient blob.
╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */

/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Animated Counter Hook
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
function useCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);
  return count;
}

/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Signature element ╬ô├ç├╢ Vital Pulse Divider
   A slow, looping ECG trace used between
   sections instead of a generic rule/blob.
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Section Eyebrow ╬ô├ç├╢ encodes "what kind of
   claim this section is making" (a fact,
   a promise, a proof point), not decoration.
   The short lead-line is always gold ╬ô├ç├╢ a
   quiet "gilded seal" signature that recurs
   on every section regardless of tone.
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
function Eyebrow({ children, tone = "wine" }) {
  const tones = {
    wine: "text-[#B61B1F]",
    teal: "text-[#0F2C6A]",
    light: "text-[#F3AEAE]",
  };
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-8 sm:w-10 bg-[#C9962B]" />
      <span className={`font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] sm:tracking-[0.32em] ${tones[tone]}`}>
        {children}
      </span>
    </div>
  );
}

/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Magnetic premium button
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
function MagneticButton({ children, variant = "primary", className = "", ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const variants = {
    primary: "btn-wine text-white",
    ghost: "border border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",
    dark: "bg-ink text-white hover:bg-black",
    outline: "border-2 border-ink/10 bg-white text-ink hover:border-[#F3AEAE] hover:text-[#B61B1F]",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-tight shadow-lg transition-colors duration-300 sm:px-7 sm:py-3.5 sm:text-base ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Stat Card
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Stat Card ╬ô├ç├╢ mirrors the "vital pulse" motif
   at card scale instead of a generic glass panel
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
function StatCard({ icon, value, suffix, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCounter(value, 1800, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200/60 bg-white/95 p-6 text-center shadow-lg transition-all duration-400 hover:border-[#B61B1F]/30 hover:shadow-xl hover:shadow-[#B61B1F]/5 hover:-translate-y-1.5 sm:rounded-3xl sm:p-8"
    >
      {/* top accent line */}
      <div className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-[#B61B1F] to-[#C9962B] opacity-75 transition-opacity duration-400 group-hover:opacity-100 sm:rounded-t-3xl" />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-slate-100 bg-[#EAF0FB] text-xl text-[#0F2C6A] shadow-sm transition-all duration-400 group-hover:bg-[#B61B1F] group-hover:text-white group-hover:scale-110 sm:h-16 sm:w-16 sm:text-2xl">
        {icon}
      </div>

      <div className="font-display text-[clamp(2.1rem,7vw,3.1rem)] font-extrabold leading-none tracking-tight text-[#0A1B33]">
        {count.toLocaleString()}<span className="text-[#C9962B]">{suffix}</span>
      </div>

      <div className="my-3 h-px w-10 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
/* ╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç
   Departments data (unchanged)
╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç╬ô├╢├ç */
const DEPARTMENTS = [
  { name: "Anaesthesiology", slug: "anaesthesiology", icon: <FaUserMd />, color: "#1D469E", desc: "Perioperative care and pain management" },
  { name: "Cardiology", slug: "cardiology", icon: <FaHeartbeat />, color: "#B61B1F", desc: "Advanced cardiac care and interventions" },
  { name: "Dental & Facial Maxillary", slug: "dental-facial-maxillary", icon: <FaTooth />, color: "#D65A5A", desc: "Comprehensive dental and maxillofacial care" },
  { name: "Diabetology & General Medicine", slug: "diabetology-general-medicine", icon: <FaStethoscope />, color: "#8F1519", desc: "Diabetes and internal medicine specialists" },
  { name: "Emergency Care", slug: "emergency-care", icon: <FaAmbulance />, color: "#6E1013", desc: "24/7 emergency and trauma services" },
  { name: "ENT & Head and Neck Surgery", slug: "ent-head-neck-surgery", icon: <FaUserMd />, color: "#0F2C6A", desc: "Expert ENT and head-neck surgical care" },
  { name: "Neuroscience", slug: "neuroscience", icon: <FaBrain />, color: "#14357F", desc: "Brain, spine and neurological care" },
  { name: "General & Laparoscopic Surgery", slug: "general-laparoscopic-surgery", icon: <FaStethoscope />, color: "#3F68BE", desc: "Minimally invasive and general surgery" },
  { name: "Gastroenterology", slug: "gastroenterology", icon: <FaUserMd />, color: "#C9962B", desc: "Digestive and gastrointestinal care" },
  { name: "Intensive Care Unit", slug: "icu", icon: <FaHandHoldingHeart />, color: "#0F2C6A", desc: "Critical care and intensive monitoring" },
  { name: "Nephrology", slug: "nephrology", icon: <FaUserMd />, color: "#1D469E", desc: "Kidney disease and renal care" },
  { name: "Obstetrics & Gynaecology", slug: "obgyn", icon: <FaBaby />, color: "#B61B1F", desc: "Women's health and maternity care" },
  { name: "Orthopaedics", slug: "orthopaedics", icon: <FaBone />, color: "#C9962B", desc: "Bone, joint and trauma specialists" },
  { name: "Neonatology & Paediatrics", slug: "neonatology-paediatrics", icon: <FaBaby />, color: "#A87A1E", desc: "Comprehensive child and newborn care" },
  { name: "Paediatric Surgery", slug: "paediatric-surgery", icon: <FaUserMd />, color: "#8F1519", desc: "Specialized surgical care for children" },
  { name: "Plastic & Reconstructive Surgery", slug: "plastic-reconstructive-surgery", icon: <FaUserMd />, color: "#D65A5A", desc: "Cosmetic and reconstructive procedures" },
  { name: "Pulmonology", slug: "pulmonology", icon: <FaLungs />, color: "#14357F", desc: "Respiratory and lung disease treatment" },
  { name: "Radiology", slug: "radiology", icon: <FaMicroscope />, color: "#1D469E", desc: "Advanced diagnostic imaging services" },
  { name: "Physical Medicine & Rehabilitation", slug: "physical-medicine-rehabilitation", icon: <FaWheelchair />, color: "#3F68BE", desc: "Physiotherapy and rehabilitation services" },
  { name: "Surgical Oncology", slug: "surgical-oncology", icon: <FaUserMd />, color: "#6E1013", desc: "Comprehensive cancer surgery care" },
  { name: "Urology", slug: "urology", icon: <FaProcedures />, color: "#B61B1F", desc: "Urinary tract and urological treatments" },
];

const PAGE_SIZE = 9;

/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë
   SEO CONFIG
   Central place for title/description/canonical
   so every value used in <Helmet> and JSON-LD
   below stays in sync.
╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */
const SITE_URL = "https://www.hindusthan.net";
const PAGE_URL = `${SITE_URL}/`;
const OG_IMAGE = new URL(hero3, `${SITE_URL}/`).toString();

const SEO_TITLE =
  "Hindusthan Hospital, Coimbatore | Multi-Speciality Hospital & 24/7 Emergency Care";
const SEO_DESCRIPTION =
  "Hindusthan Hospital, Coimbatore is a NABH-accredited multi-speciality hospital with 45+ specialist doctors across 21 departments, 150+ beds, 24/7 emergency and trauma care, ICU, robotic surgery and advanced diagnostics. Book an appointment online today.";
const SEO_KEYWORDS =
  "Hindusthan Hospital Coimbatore, multi speciality hospital Coimbatore, best hospital in Coimbatore, 24/7 emergency care, NABH accredited hospital, cardiology Coimbatore, orthopaedic hospital Coimbatore, ICU Coimbatore, robotic surgery Coimbatore, health checkup packages";

/* Hospital / MedicalOrganization structured data ╬ô├ç├╢ tells search engines
   who we are, where we are, how to contact us, and what specialities
   we offer, enabling rich results (knowledge panel, sitelinks search box). */
const HOSPITAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "Hindusthan Hospital",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": OG_IMAGE,
  "description": SEO_DESCRIPTION,
  "telephone": "+91-422-4327777",
  "email": "info@hindusthanhospital.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN",
  },
  "medicalSpecialty": DEPARTMENTS.map((d) => d.name),
  "availableService": DEPARTMENTS.map((d) => ({
    "@type": "MedicalProcedure",
    "name": d.name,
    "description": d.desc,
  })),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "150",
  },
  "sameAs": [],
};

/* Breadcrumb for the homepage (single-level, but keeps the schema
   consistent with inner pages that will extend this list). */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": PAGE_URL,
    },
  ],
};

/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë
   HOME PAGE
╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */
export default function Home() {
  const navigate = useNavigate();

  const [specPage, setSpecPage] = useState(0);
  const [hovered, setHovered] = useState(null);
  const totalPages = Math.ceil(DEPARTMENTS.length / PAGE_SIZE);
  const currentDepts = DEPARTMENTS.slice(specPage * PAGE_SIZE, specPage * PAGE_SIZE + PAGE_SIZE);

  const heroSliderRef = useRef(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const desktopImages = [
    hero2,
    hero3,
    hero4,
  ];

  const mobileImages = [
    hero2Mobile,
    hero3Mobile,
    hero4Mobile,
  ];

  const heroImages = isMobile ? mobileImages : desktopImages;

  const heroSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
    beforeChange: (_, next) => setHeroSlide(next),
  };

  return (
    <div className="relative overflow-x-hidden bg-paper font-body text-ink">

      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë SEO ╬ô├ç├╢ <head> tags & structured data ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <Helmet>
        {/* Primary meta tags */}
        <title>{SEO_TITLE}</title>
        <meta name="title" content={SEO_TITLE} />
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Hindusthan Hospital" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Hindusthan Hospital" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data (JSON-LD) */}
        <script type="application/ld+json">{JSON.stringify(HOSPITAL_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ╬ô├╢├ç╬ô├╢├ç GLOBAL AMBIENT FIELD ╬ô├╢├ç╬ô├╢├ç */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#F3AEAE]/40 blur-[160px]" />
        <div className="absolute top-[40%] -right-60 h-[700px] w-[700px] rounded-full bg-[#A6C1EE]/40 blur-[180px]" />
        <div className="absolute bottom-0 left-[30%] h-[500px] w-[500px] rounded-full bg-[#EFDFB0]/30 blur-[150px]" />
      </div>

      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë HERO ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë HERO ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë HERO ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë HERO ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <section className="relative w-full overflow-hidden">
        <div
          className="
    relative
    w-full
    h-[280px]
    sm:h-[360px]
    md:aspect-[1920/700]
    md:h-auto
  "
        >
          <Slider ref={heroSliderRef} {...heroSliderSettings} className="hero-slider absolute inset-0 h-full w-full">
            {heroImages.map((img, i) => (
              <div key={i} className="hero-slide-wrap outline-none">
                <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-[#EAF2FB] to-[#F8FAFC]">
                  <img
                    src={img}
                    alt={`Hindusthan Hospital Coimbatore ╬ô├ç├╢ multi-speciality care and 24/7 emergency services, slide ${i + 1} of ${heroImages.length}`}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchpriority={i === 0 ? "high" : "auto"}
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* SEO ╬ô├ç├╢ real H1 for the page. Kept visually unobtrusive (small,
      bottom-left, on the existing dark gradient) so it doesn't fight
      the hero imagery, but it is genuinely present in the DOM for
      search engines and screen readers, not display:none. */}


          {/* edge fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1B33]/40 to-transparent sm:h-24" />

          {/* prev / next */}
          <div className="absolute right-3 top-3 z-30 flex gap-2 sm:right-5 sm:top-5">
            <button
              aria-label="Previous slide"
              onClick={() => heroSliderRef.current?.slickPrev()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 sm:h-10 sm:w-10"
            >
              <FaChevronLeft className="text-xs sm:text-sm" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => heroSliderRef.current?.slickNext()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 sm:h-10 sm:w-10"
            >
              <FaChevronRight className="text-xs sm:text-sm" />
            </button>
          </div>

          {/* dots */}
          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 sm:bottom-5 sm:gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => heroSliderRef.current?.slickGoTo(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === heroSlide ? "22px" : "7px",
                  background: i === heroSlide ? "linear-gradient(90deg,#B61B1F,#C9962B)" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë TRANSFORMING HEALTHCARE ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <section className="relative py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-white shadow-[0_40px_100px_-35px_rgba(15,23,42,0.45)] sm:rounded-[2.5rem]">
                <img
                  src={healthcare}
                  alt="Hindusthan Hospital medical team providing patient-centred healthcare in Coimbatore"
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </motion.div>

            <motion.div
              className="order-1 mt-8 lg:order-2 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>Our Commitment</Eyebrow>
              <h2 className="font-display text-[clamp(1.7rem,5vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-ink">
                Transforming healthcare
                <br />
                <span className="bg-gradient-to-r from-[#B61B1F] to-[#C9962B] bg-clip-text text-transparent">
                  for a better tomorrow
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
                At Hindusthan Hospital, we believe in a holistic approach to healing. Our dedicated
                team of specialists utilizes cutting-edge technology to diagnose, treat, and
                rehabilitate patients with the utmost care and compassion.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
                Whether it is complex surgery or routine checkups, our mission is to provide
                accessible, affordable, and high-quality healthcare to every individual.
              </p>
              <ul className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
                {["24/7 Emergency & Trauma Care", "Advanced Robotic Surgery Units", "Comprehensive Diagnostic Services", "Patient-Centric Recovery Plans"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF0FB] text-xs text-[#0F2C6A]">
                      <FaCheckCircle />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-9 sm:mt-10">
                <a href="https://www.hindusthan.net/about-us" target="_blank" rel="noopener noreferrer">
                  <MagneticButton variant="dark">
                    More About Us <FaArrowRight className="text-xs" />
                  </MagneticButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ MEDICAL SPECIALITIES ════════ */}
      <section id="specialities" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B61B1F]/5 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#0F2C6A]/5 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14"
          >
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow tone="dark">Centre of Excellence</Eyebrow>
                <h2 className="font-display text-[clamp(1.9rem,7vw,3.5rem)] font-extrabold leading-[1] tracking-tight text-[#0A1B33]">
                  Medical{" "}
                  <span className="relative inline-block">
                    <span className="text-[#B61B1F]">Specialities</span>
                    <span className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-gradient-to-r from-[#B61B1F] to-[#C9962B]" />
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-600 sm:text-base lg:text-right lg:text-lg">
                21 specialized departments staffed by senior consultants, equipped with cutting-edge medical technology.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-7 mt-8">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
              >
                <Link
                  to={`/departments/${dept.slug}`}
                  className="group flex h-full flex-col items-center justify-start rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B61B1F]/40 hover:shadow-xl hover:shadow-[#B61B1F]/10"
                >
                  <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-2xl text-[#0F2C6A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#B61B1F] group-hover:text-white group-hover:shadow-md">
                    {dept.icon}
                  </div>
                  <h3 className="font-display text-[11px] sm:text-xs font-bold leading-tight text-slate-700 transition-colors duration-300 group-hover:text-[#B61B1F]">
                    {dept.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PATIENT TESTIMONIALS ════════ */}
      <section className="relative overflow-hidden bg-paper py-16 sm:py-24">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FAD6D6] opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#F5E8C8] opacity-30 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-16"
          >
            <Eyebrow>Real Experiences</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-ink">
              Patient <span className="text-[#B61B1F]">Testimonials</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:mt-4 sm:text-lg">Real experiences from our valued patients</p>
          </motion.div>
          {(() => {
            const testimonials = [
              { id: 1, name: "Nandhini Anandhan", rating: 5, text: "The doctors and nurses were extremely caring. The entire treatment process was smooth and professional." },
              { id: 2, name: "Saravanan Saro", rating: 4, text: "The hospital environment is very clean and the doctors explain everything clearly. Highly satisfied." },
              { id: 3, name: "Punitha", rating: 5, text: "We have trusted this hospital for years. Their expertise and compassion are truly commendable." },
              { id: 4, name: "Arun Kumar", rating: 4, text: "Emergency care response was quick and efficient. Staff handled everything calmly." },
              { id: 5, name: "Divya Lakshmi", rating: 5, text: "Excellent maternity care experience. Doctors ensured complete comfort." },
              { id: 6, name: "Ravi Prakash", rating: 3, text: "Advanced medical equipment and very experienced specialists." },
              { id: 7, name: "Keerthana", rating: 5, text: "Doctors made us feel confident and safe during the treatment." },
              { id: 8, name: "Manoj Kumar", rating: 5, text: "ICU care and post-treatment support were exceptional." },
              { id: 9, name: "Lakshmi Priya", rating: 4, text: "Very satisfied with pediatric services and friendly doctors." },
            ];
            const settings = {
              dots: true, arrows: false, infinite: true, autoplay: true,
              autoplaySpeed: 4200, speed: 900, slidesToShow: 3, slidesToScroll: 1, pauseOnHover: true,
              responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: "0px" } },
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, centerPadding: "0px" } },
              ],
            };
            return (
              <Slider {...settings}>
                {testimonials.map((item, index) => (
                  <div key={item.id} className="px-2 py-4 sm:px-4 sm:py-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.04 }}
                      whileHover={{ y: -8 }}
                      className="group relative h-full min-h-[240px] rounded-[1.5rem] border border-slate-100 bg-white/85 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-[0_30px_70px_-20px_rgba(182,27,31,0.32)] sm:min-h-[300px] sm:rounded-[1.75rem] sm:p-9"
                    >
                      <div className="absolute -top-4 left-6 select-none font-display text-5xl text-[#F3AEAE] sm:-top-6 sm:left-8 sm:text-7xl">&quot;</div>
                      <div className="mt-3 flex gap-1 text-[#C9962B] sm:mt-4">
                        {[...Array(item.rating)].map((_, i) => <FaStar key={i} className="text-sm transition-transform group-hover:scale-110" />)}
                      </div>
                      <p className="mt-4 text-sm italic leading-relaxed text-slate-700 sm:mt-5 sm:text-base">{item.text}</p>
                      <div className="mb-5 mt-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#B61B1F] to-[#C9962B] sm:mb-6 sm:mt-8" />
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#B61B1F] to-[#0F2C6A] font-bold text-white shadow-lg sm:h-12 sm:w-12">
                          {item.name.charAt(0)}
                        </div>
                        <h4 className="font-display text-sm font-semibold text-ink sm:text-lg">{item.name}</h4>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            );
          })()}
        </div>
      </section>

      {/* ════════ OUR FACILITIES ════════ */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "linear-gradient(rgba(182,27,31,0.35) 1px,transparent 1px),linear-gradient(90deg,rgba(182,27,31,0.35) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-16"
          >
            <Eyebrow tone="light">24 Hours Services</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-white">
              24 Hours{" "}
              <span className="bg-gradient-to-r from-[#E88585] to-[#EFDFB0] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:mt-4 sm:text-lg">
              Everything you need for complete care ΓÇö under one roof
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              { icon: <FaAmbulance />, title: "24/7 Ambulance", desc: "Fleet of fully-equipped incubator and D Level ambulance with trained paramedics available round the clock.", link: "/facilities/ambulance", color: "from-[#B61B1F] to-[#7A1216]" },
              { icon: <FaFlask />, title: "Blood Bank", desc: "NABH-accredited blood bank with all blood groups and modern storage infrastructure.", link: "/facilities/blood-bank", color: "from-[#D65A5A] to-[#B61B1F]" },
              { icon: <FaBed />, title: "Premium Rooms", desc: "Private, semi-private and general wards equipped with modern amenities for comfort.", link: "/facilities/rooms", color: "from-[#D9B45B] to-[#A87A1E]" },
              { icon: <FaShieldAlt />, title: "Insurance Desk", desc: "Dedicated cashless insurance processing for over 50+ insurance providers.", link: "/facilities/insurance", color: "from-[#3F68BE] to-[#0F2C6A]" },
              { icon: <FaSyringe />, title: "Pharmacy", desc: "In-house 24/7 pharmacy stocked with all medications and medical supplies.", link: "/facilities/pharmacy", color: "from-[#1D469E] to-[#14357F]" },
              { icon: <FaWheelchair />, title: "Rehabilitation", desc: "Comprehensive physiotherapy and rehabilitation centre with experienced therapists.", link: "/departments/rehab", color: "from-[#0F2C6A] to-[#B61B1F]" },
            ].filter((f) => f.title !== "Blood Bank").map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-white/20 sm:rounded-[1.75rem] sm:p-8"
              >
                <div className={`absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-br ${f.color} opacity-0 transition-opacity duration-500 group-hover:opacity-15`} />
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-lg text-white shadow-lg transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3 sm:mb-6 sm:h-14 sm:w-14 sm:text-xl`}>
                  {f.icon}
                </div>
                <h3 className="font-display mb-2.5 text-lg font-bold text-white sm:mb-3 sm:text-xl">{f.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400 sm:mb-6">{f.desc}</p>
                <Link to={f.link} className="flex items-center gap-2 text-sm font-bold text-[#F3AEAE] transition-all group-hover:gap-3">
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë HEALTH PACKAGES ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <section className="relative overflow-hidden bg-mist py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-80"
          style={{ backgroundImage: "radial-gradient(circle at top left, rgba(182,27,31,0.10), transparent 32%), radial-gradient(circle at bottom right, rgba(15,44,106,0.10), transparent 35%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <Eyebrow>Foot Lab</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-ink">
              Foot Lab <span className="text-[#B61B1F]">Packages</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-7">
              Choose a package that fits your wellness goals and enjoy a smoother, smarter preventive care experience.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Foot Lab Package 1", tests: "Foot health assessment", price: "Contact us", icon: <FaHeartbeat />, color: "from-slate-400 to-slate-500", features: ["Foot health assessment", "Specialist consultation", "Personalised care guidance"] },
              { title: "Foot Lab Package 2", tests: "Advanced foot assessment", price: "Contact us", icon: <FaStar />, color: "from-[#D9B45B] to-[#C9962B]", features: ["Advanced foot assessment", "Specialist consultation", "Personalised care guidance"] },
              { title: "Foot Lab Package 3", tests: "Comprehensive foot assessment", price: "Contact us", icon: <FaMedal />, color: "from-[#3F68BE] to-[#14357F]", features: ["Comprehensive foot assessment", "Specialist consultation", "Personalised care guidance"] },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate("/facilities/mhc")}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_25px_65px_-28px_rgba(15,23,42,0.25)] transition-all duration-400 hover:border-[#F3AEAE] hover:shadow-[0_35px_90px_-24px_rgba(182,27,31,0.32)] sm:rounded-[1.75rem] sm:p-7"
              >
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${pkg.color}`} />
                <div className="mt-5 flex items-center justify-between gap-2 sm:mt-6">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r ${pkg.color} text-base text-white shadow-lg sm:h-12 sm:w-12 sm:text-lg`}>
                    {pkg.icon}
                  </div>
                  <span className="rounded-full bg-[#FDECEC] px-2.5 py-1 text-xs font-bold text-slate-600">{pkg.tests}</span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-[#B61B1F] sm:text-2xl">{pkg.title}</h3>
                  <span className="mt-1.5 block font-display text-xl font-extrabold text-[#B61B1F] sm:text-2xl">{pkg.price}</span>
                </div>

                <ul className="scrollbar-thin scrollbar-thumb-rose-200 scrollbar-track-transparent mt-5 max-h-44 flex-1 space-y-2 overflow-y-auto pr-2 sm:mt-6 sm:max-h-48">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="mt-0.5 flex h-4 w-4 min-h-4 min-w-4 items-center justify-center rounded-full bg-[#EAF0FB] text-[#0F2C6A]">
                        <FaCheckCircle className="text-[10px]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-wine mt-6 w-full rounded-xl py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:mt-8">
                  Book Appointment
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <Link to="/facilities/mhc">
              <MagneticButton variant="primary">
                View All Packages <FaArrowRight className="text-sm" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>


      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë APPOINTMENT CTA ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#0F2C6A] via-[#7A1216] to-[#B61B1F] p-6 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-10 md:p-14 lg:p-16"
          >
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white opacity-10" />
            <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/3 translate-y-1/3 rounded-full bg-white opacity-10" />
            <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
              <div>
                <h2 className="font-display text-[clamp(1.5rem,5.5vw,2.5rem)] font-extrabold leading-tight">
                  Ready to Prioritize Your Health?
                </h2>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-white/90 sm:mb-8 sm:mt-4 sm:text-lg">
                  Book an appointment online easily and skip the queue. Your health is our top priority.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="tel:04224327777" className="flex items-center gap-2.5 rounded-xl bg-white/15 px-4 py-2.5 backdrop-blur">
                    <FaPhoneAlt className="text-sm" /><span className="text-sm font-semibold sm:text-base">0422 - 4327777</span>
                  </a>
                  <a href="mailto:hindusthanreception@gmail.com" className="flex items-center gap-2.5 rounded-xl bg-white/15 px-4 py-2.5 backdrop-blur">
                    <FaEnvelope className="text-sm" /><span className="text-sm font-semibold sm:text-base">hindusthanreception@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-ink shadow-xl sm:rounded-[1.75rem] sm:p-7">
                {/* Form heading */}
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#B61B1F]">BOOK APPOINTMENT</p>
                <p className="mb-5 text-sm text-slate-500">We are here for you.</p>

                <div className="space-y-3">
                  {/* Name */}
                  <input
                    id="appt-name"
                    type="text"
                    placeholder="Name*"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30"
                  />

                  {/* Mobile */}
                  <input
                    id="appt-mobile"
                    type="tel"
                    placeholder="Mobile Number*"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30"
                  />

                  {/* Email */}
                  <input
                    id="appt-email"
                    type="email"
                    placeholder="Email*"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30"
                  />

                  {/* Date */}
                  <input
                    id="appt-date"
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30"
                  />

                  {/* Department */}
                  <select
                    id="appt-dept"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30"
                  >
                    <option value="">Select Department</option>
                    <option>Anaesthesiology</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>ENT</option>
                    <option>General Medicine</option>
                    <option>General Surgery</option>
                    <option>Gynaecology & Obstetrics</option>
                    <option>Nephrology</option>
                    <option>Neurology</option>
                    <option>Neurosurgery</option>
                    <option>Oncology</option>
                    <option>Ophthalmology</option>
                    <option>Orthopaedics</option>
                    <option>Paediatrics</option>
                    <option>Pulmonology</option>
                    <option>Radiology</option>
                    <option>Urology</option>
                  </select>

                  {/* Message */}
                  <textarea
                    id="appt-message"
                    placeholder="Message or Special Request"
                    rows="4"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[#B61B1F] focus:outline-none focus:ring-2 focus:ring-[#B61B1F]/30 resize-none"
                  />

                  {/* Submit */}
                  <button
                    id="appt-submit"
                    className="btn-wine w-full rounded-xl py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ΓûêΓûêΓûêΓûêΓûêΓûêΓûêΓûê HOW WE CARE ΓÇö PATIENT JOURNEY ΓûêΓûêΓûêΓûêΓûêΓûêΓûêΓûê */}
      <section className="relative overflow-hidden bg-mist py-16 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#FAD6D6] opacity-40 blur-3xl" />
          <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-[#EAF0FB] opacity-40 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12 text-center sm:mb-16">
            <Eyebrow>Your Care Journey</Eyebrow>
            <h2 className="font-display text-[clamp(1.7rem,6vw,3rem)] font-extrabold text-ink">
              How We <span className="text-[#B61B1F]">Care for You</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:mt-4 sm:text-base">
              From the moment you arrive to your full recovery, every step is guided by compassionate experts.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#B61B1F]/30 via-[#0F2C6A]/30 to-transparent lg:block" />
            <div className="grid gap-8 lg:gap-12">
              {[
                { step: "01", icon: <FaCalendarAlt />, title: "Book an Appointment", desc: "Schedule your visit online, by phone, or walk in ΓÇö our front desk team ensures a smooth, quick registration process.", side: "left", color: "from-[#B61B1F] to-[#8F1519]" },
                { step: "02", icon: <FaStethoscope />, title: "Consultation & Diagnosis", desc: "Meet our experienced specialists who listen carefully, conduct thorough examinations, and order precise diagnostic tests.", side: "right", color: "from-[#0F2C6A] to-[#1D469E]" },
                { step: "03", icon: <FaProcedures />, title: "Personalised Treatment", desc: "Receive a tailored treatment plan ΓÇö whether surgical, medical, or rehabilitative ΓÇö using the latest clinical protocols.", side: "left", color: "from-[#C9962B] to-[#A87A1E]" },
                { step: "04", icon: <FaHandHoldingHeart />, title: "Recovery & Follow-Up", desc: "Our care does not end at discharge. We track your recovery, provide physiotherapy support, and schedule follow-up consultations.", side: "right", color: "from-[#B61B1F] to-[#0F2C6A]" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10 ${item.side === "right" ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex flex-none items-center gap-4 lg:w-[42%] lg:justify-end">
                    <div className={`flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-2xl text-white shadow-xl sm:h-20 sm:w-20 sm:text-3xl ${item.side === "right" ? "lg:order-last" : ""}`}>
                      {item.icon}
                    </div>
                    <span className="font-display text-6xl font-extrabold text-slate-100 sm:text-7xl lg:hidden">{item.step}</span>
                  </div>
                  <div className="relative hidden lg:flex lg:w-[16%] lg:flex-none lg:items-center lg:justify-center">
                    <div className={`z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} font-display text-lg font-extrabold text-white shadow-2xl ring-4 ring-white`}>
                      {item.step}
                    </div>
                  </div>
                  <div className={`lg:w-[42%] ${item.side === "right" ? "lg:text-right" : ""}`}>
                    <h3 className="font-display mb-2 text-lg font-extrabold text-ink sm:text-xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════ QUICK ACTION CTA (HINDUSTHAN STYLE) ════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mb-12 mt-4 relative z-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A1B33] via-[#1a2f55] to-[#0A1B33] p-10 sm:p-14 text-white shadow-2xl border border-white/10">

          {/* Subtle background patterns */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 h-[500px] w-[500px] rounded-full bg-[#B61B1F] opacity-20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 h-[300px] w-[300px] rounded-full bg-[#C9962B] opacity-15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left side: Heading */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-3 mb-4 justify-center lg:justify-start w-full">
                <span className="h-px w-8 bg-[#C9962B]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#C9962B]">Hindusthan Care</span>
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-white">
                World-class healthcare, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3AEAE] to-[#FFFFFF]">just a call away.</span>
              </h2>
              <p className="mt-5 text-slate-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
                Whether it's a critical emergency or a general inquiry, our expert medical team is available 24/7 to provide seamless assistance.
              </p>
            </div>

            {/* Right side: Action Cards */}
            <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">

              {/* Emergency Card */}
              <div className="group relative flex-1 sm:flex-none overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-[#B61B1F]/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B61B1F] to-[#8F1519]" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#B61B1F]/20 text-[#FF4D4D]">
                  <FaAmbulance className="text-2xl" />
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-white">Emergency Services</h3>
                <p className="mb-6 text-xs text-slate-400">24/7 Rapid Response</p>
                <a href="tel:04224327777" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B61B1F] to-[#8F1519] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all group-hover:shadow-[#B61B1F]/30">
                  <FaPhoneAlt className="text-xs" /> 0422-4327777
                </a>
              </div>

              {/* Inquiry Card */}
              <div className="group relative flex-1 sm:flex-none overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-[#C9962B]/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9962B] to-[#A87A1E]" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C9962B]/20 text-[#E8C273]">
                  <FaEnvelope className="text-2xl" />
                </div>
                <h3 className="mb-1 font-display text-lg font-bold text-white">General Inquiries</h3>
                <p className="mb-6 text-xs text-slate-400">Appointments & Info</p>
                <a href="mailto:hindusthanreception@gmail.com" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0A1B33] shadow-lg transition-all hover:bg-slate-100">
                  <FaArrowRight className="text-xs text-[#C9962B]" /> Email Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>









      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë FOOTER TRANSITION ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <div className="relative h-12 w-full overflow-hidden bg-white sm:h-24" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z" fill="#0A1B33" />
        </svg>
      </div>

      {/* ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë GLOBAL STYLES ╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë╬ô├▓├ë */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --ink: #0A1B33;
          --paper: #F8FAFC;
          --mist: #EEF2F6;
          --wine-start: #8F1519;
          --wine-end: #B61B1F;
        }

        .bg-ink { background-color: var(--ink); }
        .text-ink { color: var(--ink); }
        .bg-paper { background-color: var(--paper); }
        .bg-mist { background-color: var(--mist); }
        .font-display { font-family: 'Fraunces', 'Inter', ui-sans-serif, system-ui, sans-serif; font-feature-settings: "ss01" on; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }

        .btn-wine {
          background-image: linear-gradient(135deg, var(--wine-start), var(--wine-end));
          box-shadow: 0 18px 40px -16px rgba(182,27,31,0.55);
        }
        .btn-wine:hover { box-shadow: 0 22px 50px -14px rgba(182,27,31,0.6); }

        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-ticker {
          display: inline-block;
          animation: ticker 30s linear infinite;
        }

        @keyframes float     { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-25px)} }
        @keyframes floatSlow { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-40px)} }
        .animate-float      { animation:float 6s ease-in-out infinite; }
        .animate-float-slow { animation:floatSlow 10s ease-in-out infinite; }



        /* Hero slider ╬ô├ç├╢ fixes react-slick's own wrapper divs so height/line-height
           behave under fade mode instead of collapsing or leaving a gap */
        .hero-slider,
        .hero-slider .slick-list,
        .hero-slider .slick-track,
        .hero-slider .slick-slide,
        .hero-slider .slick-slide > div {
          height: 100%;
        }
        .hero-slider .slick-slide { line-height: 0; }

        .slick-dots li button:before { font-size: 12px; color: #cbd5e1; }
        .slick-dots li.slick-active button:before { color: #B61B1F; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-thin::-webkit-scrollbar { width: 5px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background-color: #FAD6D6; border-radius: 999px; }

        :focus-visible {
          outline: 2px solid #B61B1F;
          outline-offset: 3px;
          border-radius: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

    </div>
  );
}
