import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import birth1 from "../assets/Equipments/Equipments-9.jpg";
import birth2 from "../assets/Equipments/Equipments-8.jpg";
import birth3 from "../assets/Equipments/Equipments-10.jpg";

export default function BirthingCentre() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  const images = [
    birth1,
    birth2,
    birth3,
  ];

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-pink-50 to-white font-[Poppins]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-transparent flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold"
            >
              Birthing Centre
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
          className="bg-white/90 p-10 rounded-3xl shadow-lg border-t-4 border-pink-600 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-pink-700">Safe Motherhood</h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Our Birthing Centre provides a calm and caring environment with
            modern labour suites, experienced obstetricians, and high standards
            of maternal and newborn care.
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
          "Modern Labour Suites",
          "Expert Obstetricians",
          "Neonatal Care Support",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center border"
          >
            <h3 className="text-xl font-semibold text-pink-700">{item}</h3>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
