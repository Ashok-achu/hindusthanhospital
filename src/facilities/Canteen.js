import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import {
  FaUtensils,
  FaLeaf,
  FaAppleAlt,
  FaClock,
  FaUserNurse,
} from "react-icons/fa";

export default function Canteen() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: <FaLeaf />,
      title: "Hygienic Preparation",
      desc: "Strict hygiene standards are followed with regular quality checks to ensure safe and clean food.",
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutritious Meals",
      desc: "Balanced meals prepared under dietary guidance to support patient recovery and wellness.",
    },
    {
      icon: <FaUtensils />,
      title: "Variety of Food",
      desc: "South Indian, North Indian and light meals available for patients, visitors, and staff.",
    },
    {
      icon: <FaClock />,
      title: "Timely Service",
      desc: "Meals and refreshments are served on time to meet patient and attendant needs.",
    },
    {
      icon: <FaUserNurse />,
      title: "Patient-Focused Diet",
      desc: "Special diet plans available based on medical advice and nutritional requirements.",
    },
  ];

  return (
    <div className="pt-[9rem] pb-24 bg-gradient-to-b from-orange-50 to-white font-[Poppins]">

      {/* ======================
          HERO SECTION
      ====================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            alt="Hospital Canteen"
            className="w-full h-72 md:h-80 object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-orange-900/70 flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-4xl md:text-5xl font-extrabold"
            >
              Hospital Canteen
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ======================
          INTRO SECTION
      ====================== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-orange-600"
        >
          <h2 className="text-3xl font-bold text-orange-700">
            Hygienic, Nutritious & Patient-Friendly Food
          </h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            The Hindusthan Hospital Canteen is designed to provide safe,
            hygienically prepared, and nutritious food for patients, attendants,
            and hospital staff. Special care is taken to maintain cleanliness,
            quality, and nutritional value in every meal served.
          </p>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Meals are prepared using fresh ingredients and are tailored to meet
            medical and dietary requirements, ensuring comfort and recovery for
            patients while offering convenient dining options for visitors.
          </p>
        </motion.div>
      </section>

      {/* ======================
          HIGHLIGHTS GRID
      ====================== */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4 text-orange-600">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ======================
          FOOTER NOTE
      ====================== */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-orange-100 border-l-4 border-orange-600 p-6 rounded-xl"
        >
          <p className="text-orange-900 font-medium text-lg">
            Our canteen operates with patient well-being as the highest priority,
            ensuring food quality, hygiene, and nutritional balance at all times.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
