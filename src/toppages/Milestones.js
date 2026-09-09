import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/bannerimage/milestone.png";

export default function Milestones() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const milestones = [
    {
      year: "1980",
      title: "Launch of Hindusthan Hospital",
      desc: "Launch of Hindusthan Hospital (HH), laying the foundation of dedicated and compassionate healthcare in Coimbatore.",
    },
    {
      year: "1992",
      title: "The Beginning of HECT",
      desc: "Establishment of Hindusthan Educational and Charitable Trust, beginning with the Hindusthan College of Arts and Science.",
    },
    {
      year: "2000",
      title: "Institutional Expansion",
      desc: "The group rapidly expanded into engineering, management, arts & science, and various specialized educational institutions.",
    },
    {
      year: "2024",
      title: "Inauguration of HH Mettupalayam",
      desc: "Inauguration of Hindusthan Hospital Mettupalayam branch, expanding high-quality medical care to Mettupalayam and surrounding regions.",
    },
    {
      year: "Today",
      title: "Continuing Legacy",
      desc: "Hindusthan continues to lead in education and healthcare, serving thousands of patients and students with excellence every year.",
    },
  ];

  return (
    <div className="pt-2 sm:pt-4 pb-20 bg-gradient-to-b from-red-50 to-white font-[Poppins]">

      {/* ================== HERO BANNER ================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            alt="Hindusthan Hospital Milestones"
            className="w-full h-52 sm:h-64 md:h-80 lg:h-[22rem] object-cover object-center brightness-75"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-800/60 to-transparent flex items-center">
            <div className="ml-5 sm:ml-10 md:ml-14 text-white max-w-lg">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight"
              >
                Our Milestones &amp; Trust
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 1 }}
                className="mt-2 sm:mt-3 text-gray-200 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-xl"
              >
                A legacy of excellence, compassion and visionary leadership.
              </motion.p>
            </div>
          </div>
        </div>
      </section>


      {/* ================== ABOUT THE TRUST ================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/90 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border-t-4 border-red-600 backdrop-blur-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-red-700">About the Trust</h2>

          <p className="text-gray-700 mt-4 leading-7 text-base sm:text-lg">
            Hindusthan Educational and Charitable Trust (HECT) was established in 1992 with
            a mission to uplift society through education, healthcare and social welfare.
          </p>

          <p className="text-gray-700 mt-4 leading-7 text-base sm:text-lg">
            Starting with the Hindusthan College of Arts &amp; Science, the Trust has now grown to
            include 11 major institutions across 6 campuses.
          </p>

          <p className="text-gray-700 mt-4 leading-7 text-base sm:text-lg">
            Today, Hindusthan hosts more than <span className="font-bold">22,000 students</span>,
            supported by <span className="font-bold">1000+ teaching staff</span> and
            <span className="font-bold"> 500+ non-teaching staff</span>.
          </p>
        </motion.div>
      </section>


      {/* ================== MILESTONE TIMELINE ================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-8 sm:mb-10">Our Journey</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-red-200" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-14 sm:pl-16 mb-10 sm:mb-12"
            >
              {/* Dot */}
              <div className="absolute left-3 sm:left-4 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-600 border-4 border-white shadow-md z-10" />

              {/* Year badge */}
              <span className="inline-block bg-red-100 text-red-700 text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-2">
                {m.year}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-red-700">{m.title}</h3>
              <p className="text-gray-700 mt-2 leading-7 text-sm sm:text-base">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
