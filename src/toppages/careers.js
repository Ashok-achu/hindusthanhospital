import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import hero from "../assets/hero.jpg";
import cimg from "../assets/hospital.jpg";

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Staff Nurse",
      location: "Coimbatore",
      exp: "2+ Years",
      desc: "Provide patient care, monitor vitals, coordinate with physicians.",
    },
    {
      id: 2,
      title: "Front Office Executive",
      location: "Main Reception",
      exp: "1+ Years",
      desc: "Handle patient enquiries, manage appointments, assist visitors.",
    },
    {
      id: 3,
      title: "Lab Technician",
      location: "Diagnostic Lab",
      exp: "2+ Years",
      desc: "Perform laboratory tests, maintain lab equipment, ensure accuracy.",
    },
  ];

  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">
      
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-64 md:h-80 object-cover brightness-75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
            <div className="ml-6 md:ml-12 text-white">
              <motion.h1 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-3xl md:text-5xl font-extrabold">
                Careers at Hindusthan Hospital
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-3 text-gray-200 md:text-lg">
                Join our team of healthcare professionals making a difference.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOB LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-blue-900">Open Positions</h2>
        <p className="text-gray-600 mt-2">Explore exciting opportunities to grow with us.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>

              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                <span className="flex items-center gap-1"><FaClock /> {job.exp}</span>
              </div>

              <p className="text-gray-700 mt-4">{job.desc}</p>

              <div className="flex gap-3 mt-6">
                <button className="bg-blue-700 text-white px-5 py-2 rounded-full shadow hover:bg-blue-800 transition">
                  Apply
                </button>
                <button className="border border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border">
          <img src={cimg} className="w-full md:w-72 h-56 object-cover rounded-2xl shadow-lg" />

          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Work With Us</h3>
            <p className="text-gray-700 mt-3">Send your resume to <span className="font-semibold text-blue-900">hr@hindusthanhospital.com</span></p>

            <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:bg-blue-800 transition">
              Upload Resume
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
