import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function Mission() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">
      
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="ml-6 md:ml-12 text-white">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold"
              >
                Mission & Vision
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        
        {/* Vision */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/80 rounded-3xl p-8 shadow-lg backdrop-blur-md border"
        >
          <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
          <p className="text-gray-700 mt-4 leading-7">
            To provide excellent health care by dedicated efforts in bringing the wellness of the 
            community through medical expertise and compassion. Also in partnering communities 
            for healthy life and start research facility with post-graduate program.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="bg-white/80 rounded-3xl p-8 shadow-lg backdrop-blur-md border mt-10"
        >
          <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
          <p className="text-gray-700 mt-4 leading-7">
            We are committed to provide affordable, ethical and hassle free healthcare and 
            maintain excellence in education and research.
          </p>
        </motion.div>

        {/* Quality Policy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="bg-white/80 rounded-3xl p-8 shadow-lg backdrop-blur-md border mt-10"
        >
          <h2 className="text-3xl font-bold text-blue-900">Quality Policy</h2>
          <p className="text-gray-700 mt-4 leading-7">
            Hindusthan Hospital provides innovative healthcare services interfaced with futuristic 
            technology to its patients. We also commit to continually improve all our processes, 
            training of our members and effectively implementing the Quality Management System.
          </p>
        </motion.div>

      </section>
    </div>
  );
}
