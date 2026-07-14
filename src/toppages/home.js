import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
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



/* ════════════════════════════════════════════════════════════
   DESIGN TOKENS (see global <style> block at the bottom for the
   CSS variables + @font-face imports these classes rely on)

   Ink      #0B1220  — primary text / dark section backgrounds
   Paper    #F8FAFC  — page background
   Wine     #9D174D → #E11D48 — primary accent / CTAs
   Teal     #0F766E  — trust / secondary accent
   Amber    #D97706  — tertiary accent, used sparingly (tier gold)
   Mist     #EEF2F6  — alternating section background

   Signature motif: a slow-drawing "vital pulse" (ECG) line used as
   a section divider and hero flourish — it's the one recurring,
   ownable element that ties every section back to "we watch over
   you," rather than a generic gradient blob.
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   Animated Counter Hook
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   Signature element — Vital Pulse Divider
   A slow, looping ECG trace used between
   sections instead of a generic rule/blob.
───────────────────────────────────────── */
function PulseDivider({ tone = "light", className = "" }) {
  const stroke = tone === "light" ? "rgba(15,23,42,0.14)" : "rgba(255,255,255,0.14)";
  const accent = tone === "light" ? "#B61B1F" : "#D65A5A";
  return (
    <div className={`relative mx-auto h-8 w-full max-w-5xl overflow-hidden sm:h-10 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-full w-full">
        <path d="M0 30 H420 L455 30 L470 8 L490 52 L510 20 L525 30 H1200"
          fill="none" stroke={stroke} strokeWidth="1.5" />
        <path d="M0 30 H420 L455 30 L470 8 L490 52 L510 20 L525 30 H1200"
          fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round"
          className="pulse-trace" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section Eyebrow — encodes "what kind of
   claim this section is making" (a fact,
   a promise, a proof point), not decoration.
   The short lead-line is always gold — a
   quiet "gilded seal" signature that recurs
   on every section regardless of tone.
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   Magnetic premium button
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   Stat Card
───────────────────────────────────────── */
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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-5 text-white shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_35px_90px_-25px_rgba(0,0,0,0.55)] sm:rounded-[1.75rem] sm:p-7"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-base shadow-sm sm:mb-5 sm:h-12 sm:w-12 sm:text-lg">
          <span>{icon}</span>
        </div>
        <div className="font-display text-[clamp(1.6rem,6vw,2.6rem)] font-extrabold leading-none tracking-tight">
          {count.toLocaleString()}<span className="ml-0.5 text-[#F3AEAE]">{suffix}</span>
        </div>
        <p className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/70 sm:mt-3 sm:text-sm sm:tracking-[0.2em]">{label}</p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Departments data (unchanged)
───────────────────────────────────────── */
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

/* ════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════ */
export default function Home() {
  const navigate = useNavigate();

  const [specPage, setSpecPage] = useState(0);
  const [hovered, setHovered] = useState(null);
  const totalPages = Math.ceil(DEPARTMENTS.length / PAGE_SIZE);
  const currentDepts = DEPARTMENTS.slice(specPage * PAGE_SIZE, specPage * PAGE_SIZE + PAGE_SIZE);

  const heroSliderRef = useRef(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [hero2, hero3,hero4,];

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

      {/* ── GLOBAL AMBIENT FIELD ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#F3AEAE]/40 blur-[160px]" />
        <div className="absolute top-[40%] -right-60 h-[700px] w-[700px] rounded-full bg-[#A6C1EE]/40 blur-[180px]" />
        <div className="absolute bottom-0 left-[30%] h-[500px] w-[500px] rounded-full bg-[#EFDFB0]/30 blur-[150px]" />
      </div>

      {/* ════════ HERO ════════ */}
      {/* ════════ HERO ════════ */}
{/* ════════ HERO ════════ */}
<section className="relative w-full bg-gradient-to-b from-[#0A1B33] to-[#0F2440]">
  <div className="group relative mx-auto aspect-video w-full overflow-hidden">

    <Slider ref={heroSliderRef} {...heroSliderSettings} className="hero-slider h-full">
      {heroImages.map((img, i) => (
        <div key={i} className="h-full outline-none">
          <div className="relative h-full w-full">
            <img
              src={img}
              alt={`Hindusthan Hospital ${i + 1}`}
              className="h-full w-full object-contain object-center"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </Slider>

    {/* edge fade so the carousel blends into the page instead of a hard cut */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A1B33]/70 to-transparent sm:h-24" />

    {/* prev / next — grouped top-right so they never sit on banner content */}
    <div className="absolute right-3 top-3 z-20 flex gap-2 sm:right-5 sm:top-5">
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

    {/* custom dots */}
    <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-5 sm:gap-2">
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

      {/* ════════ TRANSFORMING HEALTHCARE ════════ */}
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
                  alt="Medical Team"
                  className="h-auto w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-[#F3AEAE] bg-white/95 p-4 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:-bottom-7 sm:-right-4 sm:left-auto sm:w-52 sm:p-5 md:-right-8">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FAD6D6] font-display text-sm font-extrabold text-[#B61B1F] sm:h-11 sm:w-11">15+</div>
                <div>
                  <div className="text-xs font-bold leading-tight text-ink sm:text-sm">Years of Experience</div>
                  <p className="mt-1 hidden text-xs text-slate-500 sm:block">Trusted by thousands of families.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 mt-8 lg:order-2 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>Why Choose Us</Eyebrow>
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
                <MagneticButton variant="dark" onClick={() => window.open("https://www.hindusthan.net/about-us", "_blank")}>
                  More About Us <FaArrowRight className="text-xs" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PulseDivider tone="light" />

      {/* ════════ MEDICAL SPECIALITIES ════════ */}
      <section id="specialities" className="relative overflow-hidden bg-ink py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full opacity-25 blur-[160px]"
            style={{ background: "radial-gradient(circle,#7A1216,transparent)" }} />
          <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
            style={{ background: "radial-gradient(circle,#0F2C6A,transparent)" }} />
          <div className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-16 lg:mb-20"
          >
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow tone="light">Clinical Excellence</Eyebrow>
                <h2 className="font-display text-[clamp(1.9rem,7vw,3.75rem)] font-extrabold leading-[1] tracking-tight text-white">
                  Medical
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#E88585] via-[#F3AEAE] to-[#EFDFB0] bg-clip-text text-transparent">
                      Specialities
                    </span>
                    <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[#D65A5A] to-transparent" />
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base lg:text-right lg:text-lg">
                21 departments staffed by senior consultants, equipped with cutting-edge technology
                for precise diagnosis and world-class treatment.
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={specPage}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
            >
              {currentDepts.map((dept, i) => (
                <motion.div
                  key={dept.slug}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onMouseEnter={() => setHovered(dept.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border transition-all duration-500 sm:rounded-[1.5rem]"
                    style={{
                      background: hovered === dept.slug ? `linear-gradient(135deg,${dept.color}16,${dept.color}05)` : "rgba(255,255,255,0.03)",
                      borderColor: hovered === dept.slug ? `${dept.color}55` : "rgba(255,255,255,0.08)",
                      boxShadow: hovered === dept.slug ? `0 25px 60px -25px ${dept.color}45` : "none",
                    }}
                  >
                    <span
                      className="absolute left-0 top-0 h-full w-[3px] transition-all duration-500"
                      style={{ background: dept.color, opacity: hovered === dept.slug ? 1 : 0.35 }}
                    />
                    <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-7">
                      <div className="flex items-start justify-between">
                        <div
                          className="flex items-center justify-center rounded-xl text-lg transition-all duration-500 group-hover:scale-110 sm:text-xl"
                          style={{
                            background: `${dept.color}18`,
                            color: dept.color,
                            width: "2.75rem",
                            height: "2.75rem",
                            boxShadow: hovered === dept.slug ? `0 0 24px ${dept.color}40` : "none",
                          }}
                        >
                          {dept.icon}
                        </div>
                        <div
                          className="flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          style={{ background: `${dept.color}20`, color: dept.color }}
                        >
                          <FaArrowRight className="text-xs" />
                        </div>
                      </div>

                      <div>
                        <h3
                          className="font-display mb-1.5 text-base font-bold text-white transition-colors duration-300 sm:text-lg"
                          style={{ color: hovered === dept.slug ? dept.color : undefined }}
                        >
                          {dept.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                          {dept.desc}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                        <span
                          className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                          style={{ background: `${dept.color}18`, color: dept.color }}
                        >
                          View Department
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* pagination */}
          <div className="mt-10 flex flex-col items-center justify-between gap-5 sm:mt-14 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setSpecPage(i)} aria-label={`Page ${i + 1}`}>
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === specPage ? "36px" : "8px",
                      height: "8px",
                      background: i === specPage ? "linear-gradient(90deg,#B61B1F,#C9962B)" : "rgba(255,255,255,0.15)",
                    }}
                  />
                </button>
              ))}
              <span className="ml-3 text-sm text-slate-500">{specPage + 1} / {totalPages}</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSpecPage((p) => Math.max(0, p - 1))}
                disabled={specPage === 0}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 sm:h-12 sm:w-12"
                style={{
                  borderColor: specPage === 0 ? "rgba(255,255,255,0.1)" : "rgba(182,27,31,0.4)",
                  background: specPage === 0 ? "rgba(255,255,255,0.03)" : "rgba(182,27,31,0.08)",
                }}
              >
                <FaChevronLeft className="text-sm text-white transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={() => setSpecPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={specPage === totalPages - 1}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-30 sm:h-12 sm:w-12"
                style={{
                  borderColor: specPage === totalPages - 1 ? "rgba(255,255,255,0.1)" : "rgba(182,27,31,0.4)",
                  background: specPage === totalPages - 1 ? "rgba(255,255,255,0.03)" : "rgba(182,27,31,0.08)",
                }}
              >
                <FaChevronRight className="text-sm text-white transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ MEET OUR DOCTORS ════════ */}
<section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* Left Side - Doctors Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-[2rem] shadow-[0_35px_80px_-25px_rgba(15,23,42,0.35)]"
      >
        <img
          src={doctorTeams}
          alt="Doctors Team"
          className="w-full h-auto object-contain transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Eyebrow>Medical Experts</Eyebrow>

        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight text-ink">
          Meet Our
          <br />
          <span className="text-[#B61B1F]">Expert Doctors</span>
        </h2>

      

        

        {/* Features */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
  <h4 className="text-lg font-bold text-ink">
    Collaborative Healthcare
  </h4>
  <p className="mt-2 text-sm text-slate-600">
    Specialists from multiple disciplines work together to provide comprehensive treatment plans.
  </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
  <h4 className="text-lg font-bold text-ink">
    Personalized Treatment
  </h4>
  <p className="mt-2 text-sm text-slate-600">
    Every patient receives customized care tailored to their unique health needs and goals.
  </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
  <h4 className="text-lg font-bold text-ink">
    Ethical Medical Practice
  </h4>
  <p className="mt-2 text-sm text-slate-600">
    We uphold the highest standards of integrity, transparency, and patient confidentiality.
  </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
  <h4 className="text-lg font-bold text-ink">
    Continuous Innovation
  </h4>
  <p className="mt-2 text-sm text-slate-600">
    Our medical team embraces the latest advancements to deliver safer, smarter, and more effective care.
  </p>
</div>

        </div>
      </motion.div>

    </div>
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
            <Eyebrow tone="light">What We Offer</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-white">
              World-Class{" "}
              <span className="bg-gradient-to-r from-[#E88585] to-[#EFDFB0] bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:mt-4 sm:text-lg">
              Everything you need for complete care — under one roof
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {[
              { icon: <FaAmbulance />, title: "24/7 Ambulance", desc: "Fleet of fully-equipped ambulances with trained paramedics available round the clock.", link: "/facilities/ambulance", color: "from-[#B61B1F] to-[#7A1216]" },
              { icon: <FaFlask />, title: "Blood Bank", desc: "NABH-accredited blood bank with all blood groups and modern storage infrastructure.", link: "/facilities/blood-bank", color: "from-[#D65A5A] to-[#B61B1F]" },
              { icon: <FaBed />, title: "Premium Rooms", desc: "Private, semi-private and general wards equipped with modern amenities for comfort.", link: "/facilities/rooms", color: "from-[#D9B45B] to-[#A87A1E]" },
              { icon: <FaShieldAlt />, title: "Insurance Desk", desc: "Dedicated cashless insurance processing for over 50+ insurance providers.", link: "/facilities/insurance", color: "from-[#3F68BE] to-[#0F2C6A]" },
              { icon: <FaSyringe />, title: "Pharmacy", desc: "In-house 24/7 pharmacy stocked with all medications and medical supplies.", link: "/facilities/pharmacy", color: "from-[#1D469E] to-[#14357F]" },
              { icon: <FaWheelchair />, title: "Rehabilitation", desc: "Comprehensive physiotherapy and rehabilitation centre with experienced therapists.", link: "/departments/rehab", color: "from-[#0F2C6A] to-[#B61B1F]" },
            ].map((f, i) => (
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

      {/* ════════ HEALTH PACKAGES ════════ */}
      <section className="relative overflow-hidden bg-mist py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-80"
          style={{ backgroundImage: "radial-gradient(circle at top left, rgba(182,27,31,0.10), transparent 32%), radial-gradient(circle at bottom right, rgba(15,44,106,0.10), transparent 35%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <Eyebrow>Master Health Checkup</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-ink">
              Health <span className="text-[#B61B1F]">Packages</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-7">
              Choose a package that fits your wellness goals and enjoy a smoother, smarter preventive care experience.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Silver", tests: "40 Tests", price: "₹1,500", icon: <FaHeartbeat />, color: "from-slate-400 to-slate-500", features: ["Blood Grouping & Rh Typing", "RBS (Random Blood Sugar)", "Complete Blood Count", "LDL Cholesterol", "Serum Creatinine", "Total Cholesterol", "Triglycerides", "Urine Complete Analysis", "ECG", "Physician Consultation"] },
              { title: "Gold", tests: "56 Tests", price: "₹2,750", icon: <FaStar />, color: "from-[#D9B45B] to-[#C9962B]", features: ["FBS", "PPBS", "Blood Urea", "Complete Blood Count", "Liver Function Test", "Lipid Profile", "Serum Creatinine", "TSH", "Urine Complete Analysis", "Chest PA", "ECG", "Physician Consultation"] },
              { title: "Platinum", tests: "45 Tests", price: "₹4,500", icon: <FaMedal />, color: "from-[#3F68BE] to-[#14357F]", features: ["FBS", "PPBS", "HbA1c", "Liver Function Test", "Lipid Profile", "Renal Function Test", "TSH", "CBC", "Chest PA", "USG Abdomen", "ECG", "ECHO + Reporting"] },
              { title: "Diamond", tests: "65 Tests", price: "₹7,000", icon: <FaTrophy />, color: "from-[#0F2C6A] to-[#B61B1F]", features: ["FBS", "PPBS", "Blood Grouping & Rh Typing", "CBC", "HbA1c", "Liver Profile", "Lipid Profile", "PSA (Total)", "Renal Function Test", "Serum Uric Acid", "Thyroid Profile (T3, T4, TSH)", "Urine Complete Analysis"] },
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
            <MagneticButton variant="primary" onClick={() => navigate("/facilities/mhc")}>
              View All Packages <FaArrowRight className="text-sm" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#6E1013_0%,_#B61B1F_55%,_#0F2C6A_100%)] py-14 sm:py-20">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px,white 1px,transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col items-center text-center sm:mb-10">
            <Eyebrow tone="light">Our Impact</Eyebrow>
            <h2 className="font-display text-xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Trusted Care, <span className="text-[#EFDFB0]">Measured in Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {[
              { icon: <FaUser />, value: 50000, suffix: "+", label: "Patients Treated", delay: 0 },
              { icon: <FaUserMd />, value: 45, suffix: "+", label: "Specialist Doctors", delay: 0.06 },
              { icon: <FaBed />, value: 150, suffix: "+", label: "Hospital Beds", delay: 0.12 },
              { icon: <FaHospital />, value: 15, suffix: "+", label: "Years of Service", delay: 0.18 },
            ].map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US (2) ════════ */}
{/* ════════ WHY CHOOSE US (2) ════════ */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#EAF0FB] opacity-70 blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#F5E8C8] opacity-70 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* ── IMAGE BENTO ── */}
            {/* ── IMAGE GRID ── */}
<div className="order-2 lg:order-1">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="grid grid-cols-2 gap-4"
  >
    {[
      {
        img: why1,
        
      },
      {
        img: why2,
        
      },
      {
        img: why3,
        
      },
      {
        img: why4,
       
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-[28px] shadow-xl"
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-sm font-bold text-white sm:text-lg">
            {item.title}
          </h3>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>
            {/* ── COPY + FEATURE GRID ── */}
            <div className="order-1 lg:order-2">
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-ink">
                Redefining Healthcare
                <br />
                <span className="relative inline-block z-10">
                  Standards
                  <span className="absolute bottom-1.5 left-0 -z-10 h-3 w-full -skew-x-12 bg-[#EFDFB0]/60" />
                </span>
              </h2>
              <p className="mb-8 mt-5 text-[15px] leading-relaxed text-slate-600 sm:mb-10 sm:mt-6 sm:text-lg">
                We combine state-of-the-art technology with a human touch to provide the best possible care for you and your family.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                {[
                  { title: "World-Class Doctors", icon: <FaUserMd />, desc: "Expert specialists from around the globe." },
                  { title: "24/7 Emergency", icon: <FaAmbulance />, desc: "Round-the-clock critical care support." },
                  { title: "Advanced Tech", icon: <FaMicroscope />, desc: "Cutting-edge diagnostic equipment." },
                  { title: "Advanced Hospital Beds", icon: <FaHandHoldingHeart />, desc: "Supporting modern medical care." },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white p-5 shadow-[0_10px_35px_-18px_rgba(15,23,42,0.15)] transition-all duration-400 hover:border-[#F3AEAE] hover:shadow-[0_25px_50px_-18px_rgba(182,27,31,0.22)] sm:rounded-[1.5rem] sm:p-6"
                  >
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#FDECEC] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECEC] text-xl text-[#B61B1F] shadow-sm transition-colors duration-300 group-hover:bg-[#B61B1F] group-hover:text-white sm:mb-4 sm:h-14 sm:w-14 sm:text-2xl">
                      {feature.icon}
                    </div>
                    <h4 className="font-display relative mb-1.5 text-base font-bold text-ink transition-colors group-hover:text-[#B61B1F] sm:mb-2 sm:text-lg">
                      {feature.title}
                    </h4>
                    <p className="relative text-sm leading-relaxed text-slate-500">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AWARDS & CERTIFICATIONS ════════ */}
      <section className="relative overflow-hidden bg-mist py-16 sm:py-24">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px,#B61B1F 1px,transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center sm:mb-16"
          >
            <Eyebrow>Recognition</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-ink">
              Awards & <span className="text-[#B61B1F]">Certifications</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:mt-4 sm:text-lg">
              Recognised for excellence in patient care and clinical standards
            </p>
          </motion.div>
          <div className="mb-10 grid gap-4 sm:mb-14 sm:grid-cols-2 sm:gap-6">
            {[
              { icon: <FaMedal />, title: "NABH Accredited", desc: "National Accreditation Board for Hospitals & Healthcare Providers.", color: "from-[#D9B45B] to-[#C9962B]" },
              { icon: <FaTrophy />, title: "CAHO Certified", desc: "Certified for advancing healthcare quality, patient safety, and diagnostic excellence in India and beyond.", color: "from-[#B61B1F] to-[#8F1519]" },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-6 text-center shadow-xl transition-transform duration-300 sm:rounded-[1.75rem] sm:p-8"
              >
                <div className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${award.color}`} />
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${award.color} text-xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl`}>
                  {award.icon}
                </div>
                <h3 className="font-display mb-2.5 text-base font-extrabold text-ink sm:mb-3 sm:text-lg">{award.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{award.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-lg sm:rounded-[1.75rem] sm:p-8">
            <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:mb-8 sm:text-sm">Recognised & Partnered With</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["NABH", "CAHO"].map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-default font-display text-xl font-extrabold text-slate-300 transition-colors duration-300 hover:text-[#B61B1F] sm:text-2xl"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ APPOINTMENT CTA ════════ */}
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
                  <a href="mailto:info@hindusthanhospital.com" className="flex items-center gap-2.5 rounded-xl bg-white/15 px-4 py-2.5 backdrop-blur">
                    <FaEnvelope className="text-sm" /><span className="text-sm font-semibold sm:text-base">info@hindusthanhospital.com</span>
                  </a>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-ink shadow-xl sm:rounded-[1.75rem] sm:p-7">
                <h3 className="font-display mb-4 text-lg font-bold sm:text-xl">Quick Appointment</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Your Name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B61B1F] sm:text-base" />
                    <input type="text" placeholder="Phone Number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B61B1F] sm:text-base" />
                  </div>
                  <textarea placeholder="Tell us about your symptoms" rows="3"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#B61B1F] sm:text-base" />
                  <button className="btn-wine w-full rounded-xl py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="relative overflow-hidden bg-mist py-16 sm:py-24">
        <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-[#FAD6D6] opacity-40 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#F5E8C8] opacity-40 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-20">
            <Eyebrow>Real Experiences</Eyebrow>
            <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold text-ink">
              Patient <span className="text-[#B61B1F]">Testimonials</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:mt-4 sm:text-lg">Real experiences from our valued patients</p>
          </div>
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
                {
  breakpoint: 768,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
  },
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
  },
},
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
                      <div className="absolute -top-4 left-6 select-none font-display text-5xl text-[#F3AEAE] sm:-top-6 sm:left-8 sm:text-7xl">"</div>
                      <div className="mt-3 flex gap-1 text-[#C9962B] sm:mt-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} className="text-sm transition-transform group-hover:scale-110" />
                        ))}
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

      {/* ════════ LATEST NEWS ════════ */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="absolute top-20 right-0 h-64 w-64 rounded-full bg-[#F5E8C8] opacity-60 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-[#FDECEC] opacity-60 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Updates & Insights</Eyebrow>
              <h2 className="font-display text-[clamp(1.6rem,6vw,3rem)] font-extrabold leading-tight text-ink">
                Latest{" "}
                <span className="bg-gradient-to-r from-[#B61B1F] to-[#C9962B] bg-clip-text text-transparent">News</span>
              </h2>
            </div>
            <a href="/news" className="group flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-[#B61B1F] sm:text-base">
              View All Articles
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all group-hover:bg-[#FAD6D6] group-hover:text-[#B61B1F]">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              { img: news1, title: "Longest Robotic Telesurgery in India", desc: "We are expanding our services to serve you better with world-class equipment." },
              { img: news2, title: "SWARNAM - SENIOR CITIZEN HEALTH CLUB", desc: "Empowering senior citizens with preventive care, wellness programs, and regular health check-ups.." },
              { img: news3, title: "Branch @Mettupalayam", desc: "Expanding our Service to wide from Coimbatore to Mettupalayam ." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-24px_rgba(182,27,31,0.32)] sm:rounded-[1.75rem]"
              >
                <div className="relative h-48 overflow-hidden sm:h-56 lg:h-60">
                  <img src={item.img} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                 
                  
                </div>
                <div className="flex flex-grow flex-col p-5 sm:p-8">
                  <h3 className="font-display mb-2.5 text-base font-extrabold leading-snug text-ink transition-colors group-hover:text-[#B61B1F] sm:mb-3 sm:text-xl">{item.title}</h3>
                  <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-500 sm:mb-6">{item.desc}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 sm:pt-6">
                    
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FOOTER TRANSITION ════════ */}
      <div className="relative h-12 w-full overflow-hidden bg-white sm:h-24" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full">
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z" fill="#0A1B33" />
        </svg>
      </div>

      {/* ════════ GLOBAL STYLES ════════ */}
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

        @keyframes float     { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-25px)} }
        @keyframes floatSlow { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-40px)} }
        .animate-float      { animation:float 6s ease-in-out infinite; }
        .animate-float-slow { animation:floatSlow 10s ease-in-out infinite; }

        .pulse-trace {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: draw-pulse 5.5s ease-in-out infinite;
        }
        @keyframes draw-pulse {
          0%   { stroke-dashoffset: 1400; opacity: 0; }
          8%   { opacity: 1; }
          55%  { stroke-dashoffset: 0; opacity: 1; }
          75%  { opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        /* Hero slider — fixes react-slick's own wrapper divs so height/line-height
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