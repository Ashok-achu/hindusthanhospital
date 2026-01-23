import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function IT() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-gray-50 to-white font-[Poppins]">

      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold"
            >
              IT Infrastructure
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-gray-600"
        >
          <h2 className="text-3xl font-bold text-gray-700">
            Digital Healthcare Systems
          </h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Our hospital IT systems ensure secure patient data management,
            digital records, seamless communication, and advanced healthcare
            technology integration.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
