import React, { useState } from "react";
import { motion } from "framer-motion";

// Images
import speciality1 from "../assets/team.jpg";
import speciality2 from "../assets/hero.jpg";
import speciality3 from "../assets/appointment.jpg";
import tech1 from "../assets/hero.jpg";
import tech2 from "../assets/team.jpg";
import tech3 from "../assets/appointment.jpg";
import ctaImg from "../assets/appointment.jpg";

export default function Specialities() {
  const [activeSpeciality, setActiveSpeciality] = useState(null);

  const specialties = [
    {
      id: 1,
      name: "Cardiology Center Of Excellence",
      image: speciality1,
      overview:
        "Our Cardiology Centre offers advanced care for all heart-related conditions using state-of-the-art diagnostic and treatment technologies.",
      facilities: [
        "24x7 cardiac emergency care",
        "Advanced cardiac catheterization lab",
        "Expert cardiologists and cardiac surgeons",
        "Modern diagnostic facilities including Echo, ECG, TMT",
      ],
    },
    {
      id: 2,
      name: "General Surgery Center Of Excellence",
      image: speciality2,
      overview:
        "Our General Surgery Department offers minimally invasive surgeries ensuring quicker recovery with advanced precision.",
      facilities: [
        "Modern operation theatres",
        "Highly experienced surgical team",
        "Laparoscopic & minimally invasive procedures",
        "Comprehensive pre & post operative care",
      ],
    },
    {
      id: 3,
      name: "Paediatric Center Of Excellence",
      image: speciality3,
      overview:
        "Our Paediatric Centre provides compassionate care for children with the support of skilled paediatricians and modern facilities.",
      facilities: [
        "NICU – Neonatal intensive care unit",
        "Paediatric emergency services",
        "Child-friendly treatment environment",
        "Experienced paediatric specialists",
      ],
    },
  ];

  const technologies = [
    {
      title: "Advanced MRI Scanning",
      image: tech1,
      desc: "High-quality MRI imaging for precise diagnosis with ultra-fast scanning technology.",
    },
    {
      title: "128-Slice CT Scanner",
      image: tech2,
      desc: "Ultra-clear CT imaging that produces 3D visuals of internal structures for accurate treatment planning.",
    },
    {
      title: "Digital Cath Lab",
      image: tech3,
      desc: "Latest cath lab technology for angioplasty, stenting, and cardiac emergency procedures.",
    },
  ];

  return (
    <div className="font-[Poppins] pt-[9rem] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-900">SPECIALITIES</h2>
        <p className="text-gray-600 mt-2 max-w-3xl">
          Explore our Centres of Excellence offering expert treatments and world-class care.
        </p>
      </div>

      {/* SPECIALITY CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">
        {specialties.map((sp) => (
          <motion.div
            key={sp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative shadow-lg rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setActiveSpeciality(sp)}
          >
            <img
              src={sp.image}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              alt={sp.name}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow text-center font-semibold text-blue-800">
              {sp.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESCRIPTION SECTION */}
      {activeSpeciality && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-16 mb-10 px-6"
        >
          {/* Title */}
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-6">
            {activeSpeciality.name}
          </h3>

          {/* Overview */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Overview</h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            {activeSpeciality.overview}
          </p>

          {/* Facilities */}
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Facilities</h4>

          <ul className="space-y-3">
            {activeSpeciality.facilities.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-700 text-xl">➜</span> {f}
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setActiveSpeciality(null)}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              Close Section
            </button>
          </div>
        </motion.div>
      )}

      {/* ADVANCED TECHNOLOGY SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h3 className="text-3xl font-bold text-blue-900 text-center">
          Our Advanced Medical Technologies
        </h3>

        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Delivering precision and safety with the latest high-end equipment and diagnostic tools.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {technologies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h4 className="text-blue-900 font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-white mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
          <img
            src={ctaImg}
            alt="Doctors"
            className="w-64 md:w-72 rounded-2xl shadow-md"
          />

          <div className="text-center md:text-left">
            <h2 className="text-blue-900 text-2xl sm:text-3xl font-bold leading-snug">
              Looking for professional & trusted<br />medical healthcare?
            </h2>

            <p className="text-gray-800 mt-2 font-semibold">
              DON’T HESITATE TO CONTACT US.
            </p>

            <button className="mt-5 px-8 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition">
              MAKE APPOINTMENT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
