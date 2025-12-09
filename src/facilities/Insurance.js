import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function Insurance() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  const images = [
    "https://via.placeholder.com/400x300?text=Insurance+1",
    "https://via.placeholder.com/400x300?text=Insurance+2",
    "https://via.placeholder.com/400x300?text=Insurance+3",
  ];

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-blue-50 to-white font-[Poppins]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold"
            >
              Insurance & Cashless Facility
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
          className="bg-white/90 p-10 rounded-3xl shadow-lg border-t-4 border-blue-600 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-blue-700">Hassle-Free Cashless Treatment</h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            We offer cashless hospitalization through leading insurance companies
            and TPAs. Our dedicated insurance desk assists patients with approvals
            and documentation.
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
          "Cashless Treatments",
          "TPA & Corporate Insurance",
          "24×7 Insurance Help Desk",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border"
          >
            <h3 className="text-xl font-semibold text-blue-700">{item}</h3>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
