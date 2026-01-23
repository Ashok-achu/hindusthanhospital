import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import mapImg from "../assets/hospital.jpg";

export default function Contact() {
  return (
    <div className="pt-[9rem] pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">

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

      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Send us an Enquiry</h3>

          <form className="mt-6 space-y-4 text-gray-700">
            <input className="w-full border p-3 rounded-xl" placeholder="Full Name" />
            <input className="w-full border p-3 rounded-xl" placeholder="Email" />
            <input className="w-full border p-3 rounded-xl" placeholder="Phone Number" />
            <textarea className="w-full border p-3 rounded-xl" rows="4" placeholder="Your Message"></textarea>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-md">
              Send Message
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              Hindusthan Hospital, Coimbatore
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-700" />
              +91 422 4327777
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-700" />
              info@hindusthanhospital.com
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900">Find Us</h3>
          <img
            src={mapImg}
            alt="Hindusthan Hospital Location"
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
