import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaTimes,
  FaChevronRight
} from "react-icons/fa";

import news1 from "../assets/set1/news1.jpg";
import news2 from "../assets/set1/news2.png";
import news3 from "../assets/set1/news3.jpg";
import trustedCareImg from "../assets/bannerimage/trustedcare.png";

export default function News() {
  const navigate = useNavigate();

  const staticArticles = [
    {
      id: 1,
      title: "Longest Robotic Telesurgery Breakthrough in India",
      category: "Medical Breakthrough",
      date: "Nov 05, 2025",
      readTime: "3 min read",
      image: news1,
      summary:
        "Hindusthan Hospitals successfully introduces next-generation robotic surgical systems for ultra-precise, minimally invasive procedures.",
      content:
        "Hindusthan Hospitals has achieved a monumental milestone in Indian healthcare by successfully conducting advanced robotic telesurgery. The state-of-the-art robotic surgical system allows multi-specialty surgeons to perform complex, ultra-precise procedures with sub-millimeter accuracy. Patients benefit from significantly smaller incisions, minimal blood loss, reduced postoperative pain, and dramatically faster recovery times. This breakthrough reinforces Hindusthan Hospitals' commitment to pioneering world-class medical innovations in the region."
    },
    {
      id: 2,
      title: "SWARNAM - Senior Citizen Wellness & Health Club Launched",
      category: "Community Health",
      date: "Oct 27, 2025",
      readTime: "2 min read",
      image: news2,
      summary:
        "Empowering senior citizens in Coimbatore with comprehensive preventive screenings, specialized geriatric care, and wellness sessions.",
      content:
        "Hindusthan Hospitals is proud to announce SWARNAM, a dedicated healthcare and wellness initiative created specifically for senior citizens. SWARNAM members receive priority outpatient consultations, comprehensive preventive health screenings, specialized geriatric consultations, home healthcare support, and weekly wellness sessions. Designed to foster active, healthy aging, the program ensures elderly patients receive dignified, personalized, and proactive medical attention."
    },
    {
      id: 3,
      title: "Inauguration of New Centre of Excellence @ Mettupalayam",
      category: "Expansion & Growth",
      date: "Oct 18, 2025",
      readTime: "4 min read",
      image: news3,
      summary:
        "Bringing world-class 24x7 emergency medical services, advanced diagnostics, and multi-speciality consultations to Mettupalayam.",
      content:
        "Expanding its footprint of healthcare excellence, Hindusthan Hospitals has inaugurated its new Centre of Excellence in Mettupalayam. The modern facility houses a 24x7 emergency and trauma care unit, fully equipped Level-3 ICUs, advanced radiology and diagnostic laboratories, and multi-speciality outpatient clinics covering Cardiology, Orthopedics, Pediatrics, and Gynecology. This expansion brings top-tier medical expertise directly to the doorstep of the Mettupalayam community."
    }
  ];

  const [activeArticle, setActiveArticle] = useState(null);
  const [newsList, setNewsList] = useState(staticArticles);

  useEffect(() => {
    fetch("https://your-backend-url/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) setNewsList(data);
      })
      .catch(() => {
        // static fallback active by default
      });
  }, []);

  return (
    <div className="pt-4 sm:pt-6 font-[Poppins] bg-gradient-to-b from-gray-50 via-blue-50/20 to-gray-50 min-h-screen pb-20">
      
      {/* ════════ HEADER & BREADCRUMB ════════ */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <FaChevronRight className="text-[10px] text-gray-400" />
          <span className="text-[#B61B1F] font-semibold">Updates & Insights</span>
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-[#0F2C6A] text-xs font-bold uppercase tracking-wider mb-2">
              Hindusthan Newsroom
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C6A] tracking-tight">
              Updates & <span className="bg-gradient-to-r from-[#B61B1F] to-[#C9962B] bg-clip-text text-transparent">Medical Insights</span>
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
              Stay updated with the latest medical breakthroughs, healthcare club launches, and clinical expansion announcements from Hindusthan Hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ ARTICLES GRID ════════ */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((n, i) => (
            <motion.div
              key={n._id || n.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveArticle(n)}
            >
              {/* Image Container - Clean, Bright & Unshaded */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={n.image || n.img}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {n.category && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0F2C6A] text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    {n.category}
                  </span>
                )}
              </div>

              {/* Content Body */}
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-700 text-[11px]" />
                      {n.date}
                    </span>
                    {n.readTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-gray-400 text-[11px]" />
                          {n.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-[#B61B1F] transition-colors line-clamp-2">
                    {n.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3">
                    {n.summary || n.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-[#B61B1F] group-hover:gap-3 transition-all">
                    Read Full Article
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ ARTICLE MODAL ════════ */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden z-[100001] my-6 max-h-[90vh] flex flex-col"
            >
              {/* Close Button - High visibility */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-[100002] bg-white/90 hover:bg-[#B61B1F] text-gray-800 hover:text-white shadow-md border border-gray-200 rounded-full p-2.5 transition-all duration-300 flex items-center justify-center"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Modal Image Header - Clean, Fully Visible & Unobscured */}
              <div className="relative w-full bg-slate-900 flex justify-center items-center overflow-hidden flex-shrink-0">
                <img
                  src={activeArticle.image || activeArticle.img}
                  alt={activeArticle.title}
                  className="w-full max-h-[380px] object-cover sm:object-contain bg-slate-900"
                />
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
                {/* Article Header Metadata */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-2">
                    {activeArticle.category && (
                      <span className="bg-blue-100 text-[#0F2C6A] px-3 py-1 rounded-full text-xs font-bold">
                        {activeArticle.category}
                      </span>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-700 text-[11px]" />
                      {activeArticle.date}
                    </span>
                    {activeArticle.readTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-gray-400 text-[11px]" />
                          {activeArticle.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C6A] leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>

                {/* Article Description Text */}
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg pt-2">
                  {activeArticle.content}
                </p>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      navigate("/appointment");
                    }}
                    className="bg-gradient-to-r from-[#0F2C6A] to-[#1A3D8B] hover:from-[#B61B1F] hover:to-[#8C1215] text-white text-sm font-bold px-7 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    BOOK CONSULTATION
                  </button>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="text-gray-500 hover:text-gray-800 text-sm font-semibold"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ════════ BOTTOM CTA ════════ */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-8 sm:gap-10">
          <img
            src={trustedCareImg}
            alt="Trusted Care"
            className="w-full md:w-80 h-56 object-cover rounded-2xl shadow-xl"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2C6A] leading-snug">
              Need trusted & professional healthcare?
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Our expert medical team and 24x7 emergency care specialists are available round-the-clock to assist you and your loved ones.
            </p>

            <button
              onClick={() => navigate("/appointment")}
              className="mt-6 bg-gradient-to-r from-[#B61B1F] to-[#8C1215] hover:from-[#0F2C6A] hover:to-[#1A3D8B] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105"
            >
              MAKE APPOINTMENT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
