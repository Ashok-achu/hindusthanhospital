import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaFlask, FaStethoscope, FaArrowRight } from "react-icons/fa";

import checkupImg from "../assets/hospital.jpg";
import dnaImg from "../assets/pediatrics.jpg";
import cardioImg from "../assets/surgery.jpg";
import appointmentImg from "../assets/appointment.jpg";

export default function Facilities() {
  const [selected, setSelected] = useState(null);

  const facilities = [
    {
      id: 1,
      title: "Free Check-Ups",
      description:
        "Periodic general health check-ups for preventive care and early detection.",
      img: checkupImg,
      icon: <FaStethoscope className="text-blue-600 text-3xl" />,
      learnMore:
        "We offer complete physical check-ups including BP, pulse, sugar, BMI, ECG, and more using modern diagnostic tools.",
    },
    {
      id: 2,
      title: "DNA Testing",
      description:
        "Accurate genetic, molecular, and DNA-based diagnosis with certified labs.",
      img: dnaImg,
      icon: <FaFlask className="text-purple-600 text-3xl" />,
      learnMore:
        "DNA profiling, hereditary screening, prenatal genetics, and molecular diagnostics handled by senior lab specialists.",
    },
    {
      id: 3,
      title: "Cardiogram (ECG)",
      description:
        "Advanced ECG machines for fast and accurate cardiac monitoring.",
      img: cardioImg,
      icon: <FaHeartbeat className="text-red-600 text-3xl" />,
      learnMore:
        "Our cardiology unit offers ECG, Echo, TMT, Holter monitoring with certified cardiologists and emergency support.",
    },
  ];

  return (
    <div className="min-h-screen font-[Poppins] bg-gray-50 pt-28 pb-20">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900"
        >
          FACILITIES
        </motion.h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Experience world-class medical facilities empowered by advanced technology.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {facilities.map((f) => (
          <motion.div
            key={f.id}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white shadow-md hover:shadow-2xl 
                       transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <img
              src={f.img}
              alt={f.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {f.icon}
                <h3 className="text-xl font-semibold text-blue-900">{f.title}</h3>
              </div>

              <p className="text-gray-600 text-sm">{f.description}</p>

              <button
                onClick={() => setSelected(f)}
                className="mt-4 flex items-center gap-2 text-blue-700 
                           font-semibold hover:underline"
              >
                Learn More <FaArrowRight />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========== TECHNOLOGY SECTION ========== */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-blue-900"
        >
          Technology & Infrastructure
        </motion.h3>

        <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto">
          Our hospital integrates modern, automated, and AI-powered medical systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Smart ICU Systems",
              desc: "AI-powered monitoring, automated alerts, and continuous vitals tracking.",
            },
            {
              title: "Robotic Lab",
              desc: "Fully automated analysis offering fast and accurate test results.",
            },
            {
              title: "High-End Radiology",
              desc: "MRI, CT, X-Ray, and Ultrasound with crystal-clear imaging.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl 
                         transition-all duration-300"
            >
              <h4 className="text-blue-800 font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== MODAL ========== */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold text-blue-900">{selected.title}</h3>
            <p className="text-gray-700 mt-3">{selected.learnMore}</p>

            <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Book Appointment
            </button>
          </div>
        </div>
      )}

      {/* ========== CTA ========== */}
      <section className="mt-20 bg-blue-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">

          <img
            src={appointmentImg}
            className="w-64 md:w-72 rounded-2xl shadow-lg"
            alt="appointment"
          />

          <div className="text-center md:text-left">
            <h2 className="text-blue-900 text-3xl font-bold leading-snug">
              Need trusted & professional healthcare?
            </h2>
            <p className="text-gray-700 mt-2 font-semibold">
              We are always available for you. Contact our expert team today.
            </p>

            <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
              MAKE APPOINTMENT
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
