import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaSearch } from "react-icons/fa";
import { MdGridView, MdViewQuilt } from "react-icons/md";

/* ─── IMAGE IMPORTS ─────────────────────────────────────────── */
import eq1 from "../assets/Equipments/Equipments-1.jpg";
import eq2 from "../assets/Equipments/Equipments-2.jpg";
import eq3 from "../assets/Equipments/Equipments-3.jpg";
import eq4 from "../assets/Equipments/Equipments-4.jpg";
import eq5 from "../assets/Equipments/Equipments-5.jpg";
import eq6 from "../assets/Equipments/Equipments-6.jpg";
import eq7 from "../assets/Equipments/Equipments-7.jpg";
import eq8 from "../assets/Equipments/Equipments-8.jpg";
import eq9 from "../assets/Equipments/Equipments-9.jpg";
import eq10 from "../assets/Equipments/Equipments-10.jpg";
import eq11 from "../assets/Equipments/Equipments-11.jpg";
import eq12 from "../assets/Equipments/Equipments-12.jpg";
import eq13 from "../assets/Equipments/Equipments-13.jpg";
import cardiologyImg from "../assets/Equipments/Cardiology_.jpg";
import diabetologyImg from "../assets/Equipments/Diabteology_.jpg";
import emergencyImg from "../assets/Equipments/Emergency_medicine_.jpg";
import endoscopyImg from "../assets/set1/ENDOSCOPY.jpg";
import emrImg from "../assets/Equipments/EMR_.jpg";
import labImg from "../assets/Equipments/Laboratory_.jpg";
import paediatricsImg from "../assets/Equipments/Paediatrics.jpg";
import gynaeImg from "../assets/Equipments/Gynaecology.jpg";
import pulmonologyImg from "../assets/Equipments/PULMONOLOGY_.jpg";
import nicuImg from "../assets/Equipments/NICU PHOTOTHERAPY.jpg";
import physioImg from "../assets/Equipments/Physiotherapy_.jpg";
import pftImg from "../assets/Equipments/PFT PROCEDURE_.jpg";
import ecgImg from "../assets/Equipments/ECG.jpg";
import radiologyImg from "../assets/Equipments/RADIANT WARMER_.jpg";
import spirometerImg from "../assets/Equipments/SPIROMETER.jpg";

/* ─── DATA ───────────────────────────────────────────────────── */
const GALLERY_ITEMS = [
  { id: 1,  src: cardiologyImg,   label: "Cardiology Unit",          category: "Cardiology",    featured: true  },
  { id: 2,  src: ecgImg,          label: "ECG Machine",              category: "Cardiology",    featured: false },
  { id: 3,  src: emergencyImg,    label: "Emergency Medicine",       category: "Emergency",     featured: true  },
  { id: 4,  src: nicuImg,         label: "NICU Phototherapy",        category: "Neonatal",      featured: true  },
  { id: 5,  src: labImg,          label: "Laboratory",               category: "Diagnostics",   featured: false },
  { id: 6,  src: endoscopyImg,    label: "Endoscopy Suite",          category: "Diagnostics",   featured: true  },
  { id: 7,  src: pulmonologyImg,  label: "Pulmonology Unit",         category: "Pulmonology",   featured: false },
  { id: 8,  src: spirometerImg,   label: "Spirometer",               category: "Pulmonology",   featured: false },
  { id: 9,  src: pftImg,          label: "PFT Procedure",            category: "Pulmonology",   featured: false },
  { id: 10, src: physioImg,       label: "Physiotherapy",            category: "Rehabilitation",featured: false },
  { id: 11, src: diabetologyImg,  label: "Diabetology Suite",        category: "Diabetology",   featured: false },
  { id: 12, src: gynaeImg,        label: "Gynaecology",              category: "Women's Health",featured: true  },
  { id: 13, src: paediatricsImg,  label: "Paediatrics",              category: "Paediatrics",   featured: false },
  { id: 14, src: emrImg,          label: "EMR System",               category: "Diagnostics",   featured: false },
  { id: 15, src: radiologyImg,    label: "Radiant Warmer",           category: "Neonatal",      featured: false },
  { id: 16, src: eq1,             label: "Advanced Equipment I",     category: "General",       featured: false },
  { id: 17, src: eq2,             label: "Advanced Equipment II",    category: "General",       featured: false },
  { id: 18, src: eq3,             label: "Advanced Equipment III",   category: "General",       featured: true  },
  { id: 19, src: eq4,             label: "Advanced Equipment IV",    category: "General",       featured: false },
  { id: 20, src: eq5,             label: "Advanced Equipment V",     category: "General",       featured: false },
  { id: 21, src: eq6,             label: "Advanced Equipment VI",    category: "General",       featured: false },
  { id: 22, src: eq7,             label: "Advanced Equipment VII",   category: "General",       featured: false },
  { id: 23, src: eq8,             label: "Advanced Equipment VIII",  category: "General",       featured: false },
  { id: 24, src: eq9,             label: "Surgical Equipment",       category: "General",       featured: false },
  { id: 25, src: eq10,            label: "Monitoring Equipment",     category: "General",       featured: false },
  { id: 26, src: eq11,            label: "Critical Care Unit",       category: "Emergency",     featured: false },
  { id: 27, src: eq12,            label: "Diagnostic Equipment",     category: "Diagnostics",   featured: false },
  { id: 28, src: eq13,            label: "Medical Technology",       category: "General",       featured: false },
];

const CATEGORIES = ["All", ...Array.from(new Set(GALLERY_ITEMS.map(i => i.category)))];

const STAT_ITEMS = [
  { value: "28+", label: "Equipment Types" },
  { value: "12",  label: "Specialities" },
  { value: "24/7",label: "Availability"  },
  
];

/* ─── SKELETON CARD ─────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="eq-card eq-skeleton" aria-hidden="true">
      <div className="eq-skeleton-img" />
    </div>
  );
}

/* ─── LAZY IMAGE ────────────────────────────────────────────── */
function LazyImage({ src, alt, onLoad }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleLoad = () => { setLoaded(true); onLoad?.(); };

  return (
    <div ref={ref} className="eq-img-wrap">
      {!loaded && <div className="eq-img-placeholder" />}
      {visible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={`eq-img${loaded ? " eq-img--loaded" : ""}`}
        />
      )}
    </div>
  );
}

/* ─── LIGHTBOX ──────────────────────────────────────────────── */
function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = items[activeIndex];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNavigate]);

  return (
    <AnimatePresence>
      <motion.div
        className="eq-lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Counter */}
        <div className="eq-lightbox-counter">
          {activeIndex + 1} / {items.length}
        </div>

        {/* Close */}
        <button className="eq-lightbox-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        {/* Prev */}
        <button
          className="eq-lightbox-nav eq-lightbox-nav--prev"
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        {/* Image panel */}
        <motion.div
          key={activeIndex}
          className="eq-lightbox-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.label}
            className="eq-lightbox-img"
          />
          <div className="eq-lightbox-caption">
            <span className="eq-lightbox-category">{item.category}</span>
            <p className="eq-lightbox-label">{item.label}</p>
          </div>
        </motion.div>

        {/* Next */}
        <button
          className="eq-lightbox-nav eq-lightbox-nav--next"
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── GALLERY CARD ──────────────────────────────────────────── */
function GalleryCard({ item, filteredIndex, filteredItems, onOpen }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`eq-card${item.featured ? " eq-card--featured" : ""}`}
      onClick={() => onOpen(filteredIndex)}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.label}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(filteredIndex)}
    >
      <LazyImage src={item.src} alt={item.label} />

      <div className="eq-card-overlay">
        <div className="eq-card-meta">
          <span className="eq-card-category">{item.category}</span>
          <p className="eq-card-label">{item.label}</p>
        </div>
        <div className="eq-card-expand">
          <FaExpand size={14} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────── */
export default function EquipmentsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [layout, setLayout] = useState("masonry"); // "masonry" | "grid"
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const filterBarRef = useRef(null);
  const indicatorRef = useRef(null);

  /* Simulate initial load */
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  /* Sliding filter indicator */
  useEffect(() => {
    if (!filterBarRef.current || !indicatorRef.current) return;
    const active = filterBarRef.current.querySelector(".eq-filter-btn--active");
    if (!active) return;
    const bar = filterBarRef.current.getBoundingClientRect();
    const btn = active.getBoundingClientRect();
    indicatorRef.current.style.left  = `${btn.left - bar.left}px`;
    indicatorRef.current.style.width = `${btn.width}px`;
  }, [activeCategory]);

  const filtered = GALLERY_ITEMS.filter((item) => {
    const matchCat = activeCategory === "All" || item.category === activeCategory;
    const matchSearch = item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const navigate = useCallback((dir) => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      const next = i + dir;
      if (next < 0) return filtered.length - 1;
      if (next >= filtered.length) return 0;
      return next;
    });
  }, [filtered.length]);

  return (
    <>
      {/* ─── INLINE STYLES ─── */}
      <style>{`
        /* ── Layout ── */
        .eq-page { background: #F0F4F8; min-height: 100vh; padding-top: 96px; font-family: 'DM Sans', system-ui, sans-serif; }

        /* ── Hero ── */
        .eq-hero { background: #0B1C35; padding: 72px 24px 80px; text-align: center; position: relative; overflow: hidden; }
        .eq-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,40,61,0.18) 0%, transparent 70%); pointer-events: none; }
        .eq-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(192,40,61,0.15); border: 1px solid rgba(192,40,61,0.3); border-radius: 100px; padding: 6px 16px; margin-bottom: 24px; }
        .eq-hero-eyebrow span { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #F87171; font-weight: 600; }
        .eq-hero-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #C0283D; animation: eq-pulse 2s ease-in-out infinite; }
        @keyframes eq-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
        .eq-hero h1 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #FFFFFF; line-height: 1.15; margin: 0 0 20px; }
        .eq-hero h1 em { color: #C0283D; font-style: normal; }
        .eq-hero-sub { font-size: 1rem; color: #94A3B8; max-width: 520px; margin: 0 auto 48px; line-height: 1.7; }

        /* ── Stats ── */
        .eq-stats { display: flex; justify-content: center; gap: 0; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 40px; flex-wrap: wrap; }
        .eq-stat { text-align: center; padding: 0 32px; border-right: 1px solid rgba(255,255,255,0.08); }
        .eq-stat:last-child { border-right: none; }
        .eq-stat-val { font-family: 'Playfair Display', Georgia, serif; font-size: 2rem; font-weight: 700; color: #FFFFFF; }
        .eq-stat-lbl { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #64748B; margin-top: 4px; }

        /* ── Controls bar ── */
        .eq-controls { max-width: 1280px; margin: 0 auto; padding: 36px 24px 0; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .eq-search { flex: 1; min-width: 200px; max-width: 320px; position: relative; }
        .eq-search input { width: 100%; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 10px; padding: 10px 16px 10px 40px; font-size: 0.875rem; color: #1E293B; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
        .eq-search input:focus { border-color: #C0283D; }
        .eq-search input::placeholder { color: #94A3B8; }
        .eq-search-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94A3B8; pointer-events: none; }
        .eq-layout-toggle { display: flex; gap: 4px; background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 10px; padding: 4px; }
        .eq-layout-btn { width: 34px; height: 34px; border: none; background: transparent; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #64748B; transition: all 0.15s; }
        .eq-layout-btn--active { background: #0B1C35; color: #FFFFFF; }
        .eq-result-count { margin-left: auto; font-size: 0.8rem; color: #64748B; white-space: nowrap; }

        /* ── Filter bar ── */
        .eq-filter-wrap { max-width: 1280px; margin: 20px auto 0; padding: 0 24px; }
        .eq-filter-bar { position: relative; display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; border-bottom: 2px solid #E2E8F0; }
        .eq-filter-bar::-webkit-scrollbar { display: none; }
        .eq-filter-indicator { position: absolute; bottom: -2px; height: 2px; background: #C0283D; border-radius: 2px; transition: left 0.25s cubic-bezier(0.4,0,0.2,1), width 0.25s cubic-bezier(0.4,0,0.2,1); }
        .eq-filter-btn { padding: 10px 18px; border: none; background: transparent; cursor: pointer; font-size: 0.8rem; font-weight: 500; color: #64748B; white-space: nowrap; transition: color 0.15s; letter-spacing: 0.02em; }
        .eq-filter-btn:hover { color: #1E293B; }
        .eq-filter-btn--active { color: #C0283D; font-weight: 600; }

        /* ── Gallery ── */
        .eq-gallery { max-width: 1280px; margin: 32px auto 80px; padding: 0 24px; }

        /* Masonry layout */
        .eq-gallery--masonry { columns: 3; column-gap: 16px; }
        .eq-gallery--masonry .eq-card { break-inside: avoid; margin-bottom: 16px; display: block; }
        .eq-gallery--masonry .eq-card--featured .eq-img-wrap { padding-bottom: 75%; }

        /* Grid layout */
        .eq-gallery--grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .eq-gallery--grid .eq-card { display: block; }

        /* ── Card ── */
        .eq-card { position: relative; border-radius: 14px; overflow: hidden; cursor: pointer; background: #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s; }
        .eq-card:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 12px 32px rgba(11,28,53,0.18); }
        .eq-card:focus-visible { outline: 3px solid #C0283D; outline-offset: 3px; }

        /* ── Image wrapper ── */
        .eq-img-wrap { position: relative; padding-bottom: 66.66%; overflow: hidden; }
        .eq-img-placeholder { position: absolute; inset: 0; background: linear-gradient(110deg, #E2E8F0 30%, #EEF2F7 50%, #E2E8F0 70%); background-size: 200% 100%; animation: eq-shimmer 1.4s linear infinite; }
        @keyframes eq-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .eq-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.4s ease, transform 0.5s ease; }
        .eq-img--loaded { opacity: 1; }
        .eq-card:hover .eq-img--loaded { transform: scale(1.05); }

        /* ── Card overlay ── */
        .eq-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,28,53,0.88) 0%, rgba(11,28,53,0.2) 55%, transparent 100%); display: flex; align-items: flex-end; justify-content: space-between; padding: 16px; opacity: 0; transition: opacity 0.3s; }
        .eq-card:hover .eq-card-overlay { opacity: 1; }
        .eq-card-category { display: inline-block; background: #C0283D; color: #FFFFFF; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 100px; padding: 3px 10px; margin-bottom: 6px; }
        .eq-card-label { font-size: 0.875rem; font-weight: 600; color: #FFFFFF; margin: 0; line-height: 1.3; }
        .eq-card-expand { width: 32px; height: 32px; background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #FFFFFF; flex-shrink: 0; align-self: flex-end; }

        /* ── Skeleton ── */
        .eq-skeleton .eq-skeleton-img { width: 100%; padding-bottom: 66.66%; background: linear-gradient(110deg, #E2E8F0 30%, #EEF2F7 50%, #E2E8F0 70%); background-size: 200% 100%; animation: eq-shimmer 1.4s linear infinite; border-radius: 14px; }

        /* ── Lightbox ── */
        .eq-lightbox-overlay { position: fixed; inset: 0; background: rgba(5,12,24,0.96); display: flex; align-items: center; justify-content: center; z-index: 9999; }
        .eq-lightbox-counter { position: absolute; top: 20px; left: 24px; font-size: 0.8rem; color: rgba(255,255,255,0.5); font-weight: 500; letter-spacing: 0.05em; }
        .eq-lightbox-close { position: absolute; top: 16px; right: 20px; background: rgba(255,255,255,0.1); border: none; color: #FFFFFF; width: 40px; height: 40px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: background 0.2s; z-index: 1; }
        .eq-lightbox-close:hover { background: #C0283D; }
        .eq-lightbox-panel { max-width: min(900px, 92vw); width: 100%; background: #0F2338; border-radius: 16px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.6); }
        .eq-lightbox-img { width: 100%; max-height: 72vh; object-fit: contain; display: block; background: #0A1628; }
        .eq-lightbox-caption { padding: 20px 24px; display: flex; align-items: center; gap: 14px; }
        .eq-lightbox-category { background: #C0283D; color: #FFFFFF; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; border-radius: 100px; padding: 4px 12px; white-space: nowrap; }
        .eq-lightbox-label { font-size: 1rem; font-weight: 600; color: #FFFFFF; margin: 0; }
        .eq-lightbox-nav { position: absolute; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: #FFFFFF; width: 44px; height: 44px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: background 0.2s; }
        .eq-lightbox-nav:hover { background: rgba(192,40,61,0.7); border-color: #C0283D; }
        .eq-lightbox-nav--prev { left: 16px; }
        .eq-lightbox-nav--next { right: 16px; }

        /* ── Empty state ── */
        .eq-empty { text-align: center; padding: 80px 24px; color: #94A3B8; }
        .eq-empty h3 { font-size: 1.25rem; color: #1E293B; margin-bottom: 8px; }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .eq-gallery--masonry { columns: 2; } }
        @media (max-width: 640px) {
          .eq-gallery--masonry { columns: 1; }
          .eq-gallery--grid { grid-template-columns: 1fr; }
          .eq-stat { padding: 0 18px; }
          .eq-lightbox-nav--prev { left: 8px; }
          .eq-lightbox-nav--next { right: 8px; }
          .eq-lightbox-panel { max-width: 98vw; }
        }
        @media (prefers-reduced-motion: reduce) {
          .eq-card { transition: none; }
          .eq-img { transition: opacity 0.2s; }
          .eq-img-placeholder, .eq-skeleton-img { animation: none; background: #E2E8F0; }
        }
      `}</style>

      <div className="eq-page">

        {/* ─── HERO ─── */}
        <section className="eq-hero">
          <div className="eq-hero-eyebrow">
            <span className="eq-hero-eyebrow-dot" />
            <span>Medical Excellence</span>
          </div>
          <h1>Hospital <em>Equipments</em></h1>
          <p className="eq-hero-sub">
            Explore the advanced medical equipment and technologies powering world-class care across all our specialities.
          </p>

          {/* Stats */}
          <div className="eq-stats">
            {STAT_ITEMS.map((s) => (
              <div key={s.label} className="eq-stat">
                <div className="eq-stat-val">{s.value}</div>
                <div className="eq-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CONTROLS ─── */}
        <div className="eq-controls">
          <div className="eq-search">
            <FaSearch size={12} className="eq-search-icon" />
            <input
              type="search"
              placeholder="Search equipment or department…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search equipment"
            />
          </div>

          <div className="eq-layout-toggle" role="group" aria-label="Layout toggle">
            <button
              className={`eq-layout-btn${layout === "masonry" ? " eq-layout-btn--active" : ""}`}
              onClick={() => setLayout("masonry")}
              aria-label="Masonry layout"
              title="Masonry layout"
            >
              <MdViewQuilt size={18} />
            </button>
            <button
              className={`eq-layout-btn${layout === "grid" ? " eq-layout-btn--active" : ""}`}
              onClick={() => setLayout("grid")}
              aria-label="Grid layout"
              title="Grid layout"
            >
              <MdGridView size={18} />
            </button>
          </div>

          <span className="eq-result-count">
            {isLoading ? "Loading…" : `${filtered.length} item${filtered.length !== 1 ? "s" : ""}`}
          </span>
        </div>

        {/* ─── CATEGORY FILTERS ─── */}
        <div className="eq-filter-wrap">
          <div className="eq-filter-bar" ref={filterBarRef} role="tablist" aria-label="Filter by category">
            <div className="eq-filter-indicator" ref={indicatorRef} />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`eq-filter-btn${activeCategory === cat ? " eq-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── GALLERY ─── */}
        <div className={`eq-gallery eq-gallery--${layout}`}>
          {isLoading
            ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
            : filtered.length === 0
              ? (
                <div className="eq-empty" style={{ gridColumn: "1/-1" }}>
                  <h3>No results found</h3>
                  <p>Try adjusting your search or selecting a different category.</p>
                </div>
              )
              : filtered.map((item, idx) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  filteredIndex={idx}
                  filteredItems={filtered}
                  onOpen={setLightboxIndex}
                />
              ))
          }
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={navigate}
        />
      )}
    </>
  );
}