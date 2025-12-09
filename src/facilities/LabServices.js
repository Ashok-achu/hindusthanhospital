import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function LabServices() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  const images = [
    "https://via.placeholder.com/400x300?text=Lab+Services+1",
    "https://via.placeholder.com/400x300?text=Lab+Services+2",
    "https://via.placeholder.com/400x300?text=Lab+Services+3",
  ];

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-green-50 to-white font-[Poppins]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold"
            >
              Laboratory Services
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/90 p-10 rounded-3xl shadow-lg border-t-4 border-green-600 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-green-700">Precision Diagnostics</h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Our NABL-standard laboratory offers biochemical, microbiology,
            hematology, and pathology testing with automated analyzers ensuring fast
            and accurate diagnosis.
          </p>
        </motion.div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            whileHover={{ scale: 1.03 }}
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        ))}
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
        {[
          "Automated Testing Systems",
          "NABL Standard Processes",
          "24×7 Laboratory Support",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border"
          >
            <h3 className="text-xl font-semibold text-green-700">{item}</h3>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
