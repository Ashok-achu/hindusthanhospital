import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import mapImg from "../assets/hospital.jpg";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_dlvo84b",
      "template_7jiay8f",
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "DTOngBDwQgHZbeDox"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message ❌");
      setLoading(false);
    });
  };

  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-600 mt-2">We are here to assist you 24×7.</p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Send us an Enquiry</h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-gray-700">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              placeholder="Full Name"
              required
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              placeholder="Email"
              required
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              placeholder="Phone Number"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-xl"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white px-8 py-3 rounded-full w-full hover:bg-blue-800 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-4">
            <p><FaMapMarkerAlt className="inline mr-2 text-blue-700" /> Hindusthan Hospital, Coimbatore</p>
            <p><FaPhoneAlt className="inline mr-2 text-blue-700" /> +91 422 4327777</p>
            <p><FaEnvelope className="inline mr-2 text-blue-700" /> info@hindusthanhospital.com</p>
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Find Us</h3>

          <img
            src={mapImg}
            alt="Hospital Location"
            className="w-full h-64 object-cover rounded-2xl mt-4 shadow-md"
          />

          <p className="text-gray-600 mt-3">
            Located in the heart of Coimbatore with easy access.
          </p>
        </motion.div>

      </section>
    </div>
  );
}