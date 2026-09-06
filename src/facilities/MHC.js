import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/hero.jpg";
import {
  FaHeartbeat, FaStar, FaMedal, FaTrophy, FaCheckCircle, FaTimes
} from "react-icons/fa";

/* ─── Foot Lab Packages ─── */
const FOOT_LAB_PACKAGES = [
  {
    name: "Foot Lab Package 1",
    price: "₹1,500",
    tests: "10 Tests",
    color: "from-rose-500 to-rose-700",
    icon: <FaHeartbeat />,
    items: [
      "Blood Grouping & Rh Typing",
      "RBS (Random Blood Sugar)",
      "Complete Blood Count",
      "LDL Cholesterol",
      "Serum Creatinine",
      "Total Cholesterol",
      "Triglycerides",
      "Urine Complete Analysis",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Foot Lab Package 2",
    price: "₹2,750",
    tests: "12 Tests",
    color: "from-rose-600 to-orange-500",
    icon: <FaStar />,
    items: [
      "FBS",
      "PPBS",
      "Blood Urea",
      "Complete Blood Count",
      "Liver Function Test",
      "Lipid Profile",
      "Serum Creatinine",
      "TSH",
      "Urine Complete Analysis",
      "Chest PA",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Foot Lab Package 3",
    price: "₹4,500",
    tests: "13 Tests",
    color: "from-rose-700 to-pink-600",
    icon: <FaMedal />,
    items: [
      "FBS",
      "PPBS",
      "HbA1c",
      "Liver Function Test",
      "Lipid Profile",
      "Renal Function Test",
      "TSH",
      "CBC",
      "Chest PA",
      "USG Abdomen",
      "ECG",
      "ECHO + Reporting",
      "Physician Consultation"
    ]
  },
];

/* ─── MHC Health Packages ─── */
const MHC_PACKAGES = [
  {
    name: "Silver",
    price: "₹1,500",
    tests: "40 Tests",
    color: "from-slate-400 to-slate-500",
    icon: <FaHeartbeat />,
    items: [
      "Blood Grouping & Rh Typing",
      "RBS (Random Blood Sugar)",
      "Complete Blood Count",
      "LDL Cholesterol",
      "Serum Creatinine",
      "Total Cholesterol",
      "Triglycerides",
      "Urine Complete Analysis",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Gold",
    price: "₹2,750",
    tests: "56 Tests",
    color: "from-[#D9B45B] to-[#C9962B]",
    icon: <FaStar />,
    items: [
      "FBS",
      "PPBS",
      "Blood Urea",
      "Complete Blood Count",
      "Liver Function Test",
      "Lipid Profile",
      "Serum Creatinine",
      "TSH",
      "Urine Complete Analysis",
      "Chest PA",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Platinum",
    price: "₹4,500",
    tests: "45 Tests",
    color: "from-[#3F68BE] to-[#14357F]",
    icon: <FaMedal />,
    items: [
      "FBS",
      "PPBS",
      "HbA1c",
      "Liver Function Test",
      "Lipid Profile",
      "Renal Function Test",
      "TSH",
      "CBC",
      "Chest PA",
      "USG Abdomen",
      "ECG",
      "ECHO + Reporting",
      "Physician Consultation"
    ]
  },
  {
    name: "Diamond",
    price: "₹7,000",
    tests: "65 Tests",
    color: "from-[#0F2C6A] to-[#B61B1F]",
    icon: <FaTrophy />,
    items: [
      "FBS",
      "PPBS",
      "Blood Grouping & Rh Typing",
      "CBC",
      "HbA1c",
      "Liver Profile",
      "Lipid Profile",
      "PSA (Total)",
      "Renal Function Test",
      "Serum Uric Acid",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine Complete Analysis",
      "USG Abdomen",
      "Chest PA",
      "ECG",
      "TMT",
      "ECHO + Reporting",
      "Physician Consultation"
    ]
  }
];

/* ─── Shared Package Card (used in both mobile and desktop) ─── */
function PackageCard({ pkg, onBook, compact = false }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg hover:shadow-xl hover:border-rose-200 transition-all duration-300 ${compact ? "" : "h-full"}`}>
      {/* Gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${pkg.color}`} />

      {/* Header */}
      <div className={`${compact ? "p-4" : "p-5 sm:p-6"} text-center border-b border-slate-100`}>
        <div className={`mx-auto mb-2 flex items-center justify-center rounded-2xl bg-gradient-to-r ${pkg.color} text-white shadow-md ${compact ? "h-11 w-11 text-base" : "h-14 w-14 text-xl"}`}>
          {pkg.icon}
        </div>
        <h3 className={`font-bold text-slate-800 ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}>{pkg.name}</h3>
        <span className="inline-block mt-1 rounded-full bg-rose-50 px-3 py-0.5 text-xs font-semibold text-rose-600">
          {pkg.tests}
        </span>
        <p className={`font-extrabold text-rose-600 mt-2 ${compact ? "text-2xl" : "text-3xl"}`}>{pkg.price}</p>
      </div>

      {/* Item list */}
      <div className={`${compact ? "px-4 py-3" : "px-5 py-4 sm:px-6"} flex-1 overflow-y-auto max-h-[240px]`}>
        <ul className="space-y-2">
          {pkg.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <span className="mt-0.5 flex h-4 w-4 min-w-4 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <FaCheckCircle className="text-[9px]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className={`${compact ? "p-3" : "p-4"} border-t border-slate-100 flex flex-col gap-2`}>
        <button
          onClick={() => onBook(pkg)}
          className="w-full bg-gradient-to-r from-rose-600 to-orange-500 hover:opacity-90 text-white py-2.5 rounded-xl font-semibold text-sm shadow-md transition active:scale-[0.97]"
        >
          Book Appointment
        </button>
        <a
          href={`https://wa.me/917339095561?text=I want to enquire about ${pkg.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full border border-rose-500 text-rose-600 py-2.5 rounded-xl text-center font-semibold text-sm hover:bg-rose-50 transition"
        >
          WhatsApp Booking
        </a>
      </div>
    </div>
  );
}

export default function MHC() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [activeTab, setActiveTab] = useState("footlab");

  const packages = activeTab === "footlab" ? FOOT_LAB_PACKAGES : MHC_PACKAGES;

  return (
    <div className="pt-[7rem] sm:pt-[9rem] pb-16 sm:pb-24 bg-gray-50 font-[Poppins]">

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            className="w-full h-48 sm:h-72 object-cover brightness-75"
            alt="MHC packages hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-rose-600/70 flex items-center">
            <div className="ml-5 sm:ml-8">
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Our Packages
              </h1>
              <p className="text-rose-100 mt-1 sm:mt-2 text-sm sm:text-base md:text-lg max-w-md">
                Comprehensive health screening packages for every need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TAB SWITCHER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
        {/* Full-width on mobile, centered inline on tablet+ */}
        <div className="flex w-full rounded-2xl bg-white p-1 shadow-md border border-slate-200 sm:inline-flex sm:w-auto sm:mx-auto sm:block sm:text-center">
          <button
            onClick={() => setActiveTab("footlab")}
            className={`flex-1 rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-7 sm:py-3 sm:text-sm ${
              activeTab === "footlab"
                ? "bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-lg"
                : "text-slate-500 hover:text-rose-600"
            }`}
          >
            Foot Lab Packages
          </button>
          <button
            onClick={() => setActiveTab("mhc")}
            className={`flex-1 rounded-xl px-3 py-2.5 text-xs font-bold transition-all duration-300 sm:flex-none sm:px-7 sm:py-3 sm:text-sm ${
              activeTab === "mhc"
                ? "bg-gradient-to-r from-[#B61B1F] to-[#7A1216] text-white shadow-lg"
                : "text-slate-500 hover:text-[#B61B1F]"
            }`}
          >
            MHC Packages
          </button>
        </div>

        {/* Tab description */}
        <p className="text-center mt-3 text-slate-500 text-xs sm:text-sm">
          {activeTab === "footlab"
            ? "Specialized foot health assessment packages with comprehensive diagnostics"
            : "Complete master health check packages — Silver, Gold, Platinum & Diamond"}
        </p>
      </section>

      {/* ── PACKAGES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Mobile: horizontal snap-scroll carousel */}
            <div className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:hidden">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="snap-center shrink-0 w-[82vw] max-w-[310px]"
                >
                  <PackageCard pkg={pkg} onBook={setSelectedPkg} compact />
                </div>
              ))}
            </div>

            {/* Swipe hint — mobile only */}
            <p className="mt-2 text-center text-[11px] text-slate-400 sm:hidden">
              ← Swipe to explore packages →
            </p>

            {/* Tablet / Desktop: grid */}
            <div
              className={`hidden sm:grid gap-5 sm:gap-6 ${
                packages.length === 3
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2 xl:grid-cols-4"
              }`}
            >
              {packages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <PackageCard pkg={pkg} onBook={setSelectedPkg} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {selectedPkg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4"
            onClick={() => setSelectedPkg(null)}
          >
            <motion.div
              /* Slides up from bottom on mobile, scales in on desktop */
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle — mobile only */}
              <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-slate-200 sm:hidden" />

              {/* Close button */}
              <button
                onClick={() => setSelectedPkg(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition"
                aria-label="Close"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className={`h-1 w-full rounded-full bg-gradient-to-r ${selectedPkg.color} mb-5`} />

              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-slate-800">
                Book {selectedPkg.name} Package
              </h3>
              <p className="text-slate-500 text-sm mb-5">
                Our team will contact you shortly to confirm your appointment.
              </p>

              <input
                placeholder="Patient Name"
                className="w-full border border-slate-200 p-3.5 rounded-xl mb-3 text-sm focus:outline-none focus:border-rose-400 transition"
              />
              <input
                placeholder="Mobile Number"
                type="tel"
                inputMode="numeric"
                className="w-full border border-slate-200 p-3.5 rounded-xl mb-5 text-sm focus:outline-none focus:border-rose-400 transition"
              />

              <button
                onClick={() => setSelectedPkg(null)}
                className="w-full bg-gradient-to-r from-rose-600 to-orange-500 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:opacity-90 active:scale-[0.97] transition text-base"
              >
                Submit Request
              </button>
              <button
                onClick={() => setSelectedPkg(null)}
                className="w-full mt-3 text-slate-400 text-sm hover:text-slate-600 transition py-1"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
