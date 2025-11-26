import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

// Placeholder images (professional headshots)
const placeholder = "https://via.placeholder.com/300x350.png?text=Trustee+Photo";

export default function Milestones() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-red-50 to-white font-[Poppins]">

      {/* ================== HERO BANNER ================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />

          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-700/60 to-transparent flex items-center">
            <div className="ml-6 md:ml-12 text-white">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold"
              >
                Our Milestones & Trust
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 1 }}
                className="mt-3 text-gray-200 text-lg max-w-xl"
              >
                A legacy of excellence, compassion and visionary leadership.
              </motion.p>
            </div>
          </div>
        </div>
      </section>


      {/* ================== ABOUT THE TRUST ================== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/90 p-10 rounded-3xl shadow-lg border-t-4 border-red-600 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-red-700">About the Trust</h2>

          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Hindusthan Educational and Charitable Trust (HECT) was established in 1992 with
            a mission to uplift society through education, healthcare and social welfare.
          </p>

          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Starting with the Hindusthan College of Arts & Science, the Trust has now grown to
            include 11 major institutions across 6 campuses.
          </p>

          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Today, Hindusthan hosts more than <span className="font-bold">22,000 students</span>,
            supported by <span className="font-bold">1000+ teaching staff</span> and
            <span className="font-bold"> 500+ non-teaching staff</span>.
          </p>

        </motion.div>
      </section>


      {/* ================== MILESTONE TIMELINE ================== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-red-700 mb-10">Our Journey</h2>

        <div className="relative border-l-4 border-red-600 ml-4">
          
          {/* Milestone 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="ml-6 mb-12"
          >
            <div className="w-4 h-4 bg-red-600 rounded-full absolute -left-2 mt-2"></div>
            <h3 className="text-xl font-bold text-red-700">1992 – The Beginning</h3>
            <p className="text-gray-700 mt-2 leading-7">
              Establishment of Hindusthan Educational and Charitable Trust, beginning with
              the Hindusthan College of Arts and Science.
            </p>
          </motion.div>

          {/* Milestone 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="ml-6 mb-12"
          >
            <div className="w-4 h-4 bg-red-600 rounded-full absolute -left-2 mt-2"></div>
            <h3 className="text-xl font-bold text-red-700">2000 – Expansion</h3>
            <p className="text-gray-700 mt-2 leading-7">
              The group rapidly expanded into engineering, management, arts & science,
              and various specialized educational institutions.
            </p>
          </motion.div>

          {/* Milestone 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="ml-6 mb-12"
          >
            <div className="w-4 h-4 bg-red-600 rounded-full absolute -left-2 mt-2"></div>
            <h3 className="text-xl font-bold text-red-700">2010 – Healthcare Mission</h3>
            <p className="text-gray-700 mt-2 leading-7">
              Launch of Hindusthan Hospital — extending the Trust’s mission into healthcare
              with advanced facilities and compassionate service.
            </p>
          </motion.div>

          {/* Milestone 4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="ml-6 mb-12"
          >
            <div className="w-4 h-4 bg-red-600 rounded-full absolute -left-2 mt-2"></div>
            <h3 className="text-xl font-bold text-red-700">Today</h3>
            <p className="text-gray-700 mt-2 leading-7">
              Hindusthan continues to lead in education and healthcare, with thousands of
              beneficiaries every year.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================== TRUSTEES SECTION ================== */}
      

    </div>
  );
}
