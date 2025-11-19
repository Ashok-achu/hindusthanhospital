import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import timg from "../assets/team.jpg";
import hero from "../assets/hero.jpg";

export default function Testimonials() {
  const items = [
    {
      id: 1,
      name: "R. Kumar",
      role: "Recovered Patient",
      text: "Exceptional care provided throughout my treatment. The staff ensured comfort and the doctors were extremely professional.",
    },
    {
      id: 2,
      name: "S. Priya",
      role: "Mother of Patient",
      text: "The immediate response and timely intervention saved my daughter's life. I am forever grateful to the medical team.",
    },
    {
      id: 3,
      name: "M. Raj",
      role: "Surgery Patient",
      text: "Highly skilled surgeons and modern surgical facilities. My recovery was smooth and stress-free.",
    },
  ];

  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/30 min-h-screen">

      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src={hero}
            alt="Testimonials Banner"
            className="w-full h-64 md:h-[22rem] object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
            <div className="text-white ml-6 md:ml-12">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold tracking-wide"
              >
                Patient Testimonials
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-gray-200 mt-3 md:text-lg"
              >
                Real stories from patients who trusted us with their care.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIAL CARDS ===================== */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((it) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-gray-200 relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-700 text-3xl absolute top-4 right-4 opacity-20" />

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={timg}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover hover:scale-105 transition"
                  alt={it.name}
                />
                <div>
                  <h4 className="text-blue-900 font-semibold text-lg">{it.name}</h4>
                  <p className="text-gray-500 text-sm">{it.role}</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 mt-4 leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-gray-200">

          <img
            src={timg}
            alt="cta"
            className="w-full md:w-72 h-56 object-cover rounded-2xl shadow-lg"
          />

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Need trusted & professional medical care?
            </h3>
            <p className="text-gray-700 mt-3">
              Our team is dedicated to providing high-quality healthcare with compassion.
            </p>

            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
              MAKE APPOINTMENT
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
