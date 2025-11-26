import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

export default function Profile() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen font-[Poppins]">

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
                Our Profile
              </motion.h1>
            </div>
          </div>
        </div>
      </section>


      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-16">

        <motion.div 
          initial="hidden" 
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/80 p-8 rounded-3xl shadow-lg border backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-blue-900">Who We Are</h2>

          <p className="text-gray-700 mt-4 leading-7">
            A tertiary care hospital, it is part of the Hindusthan Group of Educational Institutions 
            and Companies, which has wide spectrum of activities viz. Chemical Industries, 
            Distilleries, Transformers and LT switch board manufacturing, Plantation, Real Estates 
            and Transportation.
          </p>

          <p className="text-gray-700 mt-4 leading-7">
            Hindusthan is a 200 bedded multi-speciality hospital offering 24 hours emergency 
            services, family medicine services, health screening and a wide range of multi-disciplinary 
            specialist clinics. It is equipped with beautifully appointed wards, day surgery, 
            angiography, bronchoscopy, endoscopy, colonoscopy & urology suites, delivery suites, 
            modular operating theatres and intensive care unit.
          </p>

          <p className="text-gray-700 mt-4 leading-7">
            Our specialist clinics are organized as convenient one-stop centres offering a 
            comprehensive range of medical services. As a group practice, our specialists work 
            as a team to provide holistic care.
          </p>

        </motion.div>
      </section>

    </div>
  );
}
