import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import courseImg from "../assets/team.jpg";
import hero from "../assets/hero.jpg";

export default function Academics() {

  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Nursing & Allied Health Training",
      desc: "Structured diploma & certification programs for nurses & allied staff.",
      full: "Our Nursing and Allied Health Training program focuses on practical skill development, clinical exposure and structured academic learning. Students gain hands-on experience in ICU, ward management, lab assistance and patient care techniques."
    },
    {
      id: 2,
      title: "Continuous Medical Education (CME)",
      desc: "Monthly workshops, seminars and skill updates for doctors.",
      full: "The CME initiative keeps doctors updated with the latest advancements in medicine. Workshops, guest lectures, clinical case reviews, surgical demonstrations and interdepartmental knowledge-sharing sessions are conducted regularly."
    },
    {
      id: 3,
      title: "Internships & Student Programs",
      desc: "Clinical internships with hands-on training across key departments.",
      full: "Students are trained across departments such as Emergency, ICU, Radiology, OT, Cardiology and more. This program ensures real-time exposure to advanced hospital operations and case handling."
    },
  ];

  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-white to-blue-50/40 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            alt="Academics"
            className="w-full h-64 md:h-80 object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="ml-6 md:ml-12 text-white">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold"
              >
                Academic Excellence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-3 text-sm md:text-lg text-gray-200"
              >
                Shaping the next generation of healthcare professionals.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAM CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Academic Programs
        </h2>
        <p className="text-gray-600 mt-2">
          Training designed to enrich clinical knowledge & practical skills.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {programs.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition border border-gray-100"
            >
              <div className="relative">
                <img
                  src={courseImg}
                  alt="Program"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>

                <button
                  onClick={() => setSelectedProgram(p)}
                  className="mt-4 text-blue-700 font-semibold hover:text-blue-900 transition"
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ICON FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">
          Why Our Academic Training Stands Out
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg text-center border">
            <FaBookOpen className="text-4xl text-blue-800 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              Evidence-Based Learning
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Updated curriculum aligned with global medical standards.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg text-center border">
            <FaUserGraduate className="text-4xl text-blue-800 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              Hands-On Internships
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Practical exposure across all clinical departments.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg text-center border">
            <FaChalkboardTeacher className="text-4xl text-blue-800 mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              Expert Faculty
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Senior clinicians conducting CME programs & workshops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= RESEARCH & TRAINING ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border"
        >
          <h3 className="text-2xl font-semibold text-blue-900">
            Research & Training
          </h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Our academic division supports clinical research, scientific studies,
            case reviews, and evidence-based training to enhance safe and quality
            patient care. Continuous knowledge updates are a core part of our academic model.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Faculty Development Programs</li>
            <li>• Case Presentations & Clinical Audits</li>
            <li>• Monthly Skill-Building Workshops</li>
            <li>• National & International Medical Seminars</li>
          </ul>
        </motion.div>
      </section>

      {/* ====================== MODAL ====================== */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 text-gray-600 text-lg hover:text-red-500"
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-900">
              {selectedProgram.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 mt-4 leading-relaxed">
              {selectedProgram.full}
            </p>

            <button
              onClick={() => setSelectedProgram(null)}
              className="mt-6 bg-blue-700 text-white px-8 py-2 rounded-full hover:bg-blue-800 transition"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
}
