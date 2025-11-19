import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import mapImg from "../assets/hospital.jpg";

export default function Contact() {
  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">

      {/* ================ HEADER ================ */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-blue-900">
          Contact Us
        </motion.h1>
        <p className="text-gray-600 mt-2">We are here to assist you 24×7.</p>
      </section>

      {/* ================ CONTACT GRID ================ */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8">
          <h3 className="text-2xl font-bold text-blue-900">Send us an Enquiry</h3>

          <form className="mt-6 space-y-4 text-gray-700">
            <input className="w-full border border-gray-300 p-3 rounded-xl" placeholder="Full Name" />
            <input className="w-full border border-gray-300 p-3 rounded-xl" placeholder="Email" />
            <input className="w-full border border-gray-300 p-3 rounded-xl" placeholder="Phone Number" />
            <textarea className="w-full border border-gray-300 p-3 rounded-xl" rows="4" placeholder="Your Message"></textarea>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-md">
              Send Message
            </button>
          </form>

          {/* Details */}
          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-blue-700" /> Hindusthan Hospital, Coimbatore</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-blue-700" /> +91 422 4327777</p>
            <p className="flex items-center gap-2"><FaEnvelope className="text-blue-700" /> info@hindusthanhospital.com</p>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8">
          <h3 className="text-2xl font-bold text-blue-900">Find Us</h3>
          <img src={mapImg} className="w-full h-64 object-cover rounded-2xl mt-4 shadow-md" />
          <p className="text-gray-600 mt-3">Located in the heart of Coimbatore with easy access.</p>
        </motion.div>

      </section>

      {/* ================ CTA ================ */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center gap-10 border">
          <img src={mapImg} className="w-full md:w-72 h-56 object-cover rounded-2xl shadow-lg" />
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Need Immediate Help?</h3>
            <p className="text-gray-700 mt-3">Call our 24x7 emergency helpline:</p>
            <p className="text-blue-900 text-xl font-bold mt-1">+91 12345 67980</p>

            <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-full shadow hover:bg-blue-800 transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
