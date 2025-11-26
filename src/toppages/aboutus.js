import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaHospitalAlt } from "react-icons/fa";
import hero from "../assets/hero.jpg";

export default function AboutUs() {
  return (
    <div className="pt-[9rem] font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/30 min-h-screen pb-20">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            alt="Hindusthan Hospital"
            className="w-full h-64 md:h-[28rem] object-cover brightness-75"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl ml-6 md:ml-12 text-white"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                About Hindusthan Hospital
              </h1>
              <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-200">
                Delivering excellence in healthcare with compassion, precision, and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== OVERVIEW + MISSION ===================== */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10">

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            Overview
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            A tertiary care hospital, it is part of the Hindusthan Group of Educational Institutions and Companies, which has wide spectrum of activities viz. Chemical Industries, Distilleries, Transformers and LT switch board manufacturing, Plantation, Real Estates and Transportation.

Hindusthan is a 200 bedded multi - speciality hospital offering 24 hours emergency services, family medicine services, health screening and a wide range of multi-disciplinary specialist clinics. It is equipped with beautifully appointed wards, day surgery, angiography, bronchoscopy, endoscopy, colonoscopy & urology suites, delivery suites, modular operating theatres and intensive care unit.

Our specialist clinics are organized as convenient one-stop centres, which collectively offer a comprehensive range of medical services to meet the specific needs of our patients. As a group practice, our specialists work as a team, leveraging on individual strengths, to provide you with holistic care.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            <li>• 24×7 Emergency, ICU & Advanced OT Complex</li>
            <li>• Hi-tech Laboratory & Radiology Services</li>
            <li>• Dedicated Specialty Centres with Expert Doctors</li>
          </ul>
        </motion.div>

        {/* Vision + Mission */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            Vision & Mission
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <strong>Vision:</strong>To provide excellent health care by dedicated efforts in bringing the wellness of the community through medical expertise and compassion. Also in partnering communities for healthy life and start research facility with post- graduate program.
            <br /><br />
            <strong>Mission:</strong> Deliver high-quality and affordable healthcare,
            continuously train professionals, and adopt global medical standards.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="p-4 bg-blue-100/60 rounded-xl">
              <h4 className="font-semibold text-blue-900">Patient First</h4>
              <p className="text-gray-600 text-sm">Empathy-driven care for every patient.</p>
            </div>

            <div className="p-4 bg-blue-100/60 rounded-xl">
              <h4 className="font-semibold text-blue-900">Clinical Excellence</h4>
              <p className="text-gray-600 text-sm">Safety, precision, and quality healthcare.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===================== HIGHLIGHTS / ICON CARDS ===================== */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 text-center">
          Highlights of Hindusthan Hospital
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
          >
            <FaHospitalAlt className="text-blue-700 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">200+ Beds</h3>
            <p className="text-gray-600 mt-2">Modern wards, ICUs, and surgical units.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
          >
            <FaUserMd className="text-blue-700 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">50+ Specialists</h3>
            <p className="text-gray-600 mt-2">Expert doctors across all major departments.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
          >
            <FaHeartbeat className="text-blue-700 text-4xl mx-auto" />
            <h3 className="text-xl font-semibold text-blue-900 mt-4">24×7 Emergency</h3>
            <p className="text-gray-600 mt-2">Round-the-clock emergency & trauma care.</p>
          </motion.div>
        </div>
      </section>

      {/* ===================== BOTTOM CTA ===================== */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-gray-200">
          
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Need trusted & professional healthcare?
            </h2>
            <p className="text-gray-700 mt-3">
              Our medical team is available 24×7 to assist you.
            </p>

            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
              CONTACT US
            </button>
          </div>

          <img
            src={hero}
            alt="cta"
            className="w-full md:w-72 h-56 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

    </div>
  );
}
