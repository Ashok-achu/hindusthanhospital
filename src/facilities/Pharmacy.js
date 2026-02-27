import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hospital/Pharmacy1.png";

// ADD THESE IMAGES IN assets/pharmacy/
import medicinesImg from "../assets/h10.jpg";
import emergencyImg from "../assets/h12.jpg";
import storageImg from "../assets/h11.jpg";

export default function Pharmacy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const specialties = [
    {
      img: medicinesImg,
      title: "All Prescription Medicines",
      desc: "Wide range of branded and generic medicines dispensed strictly as per medical prescriptions.",
    },
    {
      img: emergencyImg,
      title: "Emergency & ICU Drugs",
      desc: "Life-saving drugs readily available for ICU, trauma, and emergency situations 24×7.",
    },
    {
      img: storageImg,
      title: "Safe Storage & Quality Control",
      desc: "Medicines stored under controlled temperature conditions ensuring quality and safety.",
    },
  ];

  return (
    <div className="pt-[9rem] pb-24 bg-gradient-to-b from-teal-50 via-white to-teal-100 font-[Poppins]">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={hero}
            alt="Pharmacy"
            className="w-full h-120 md:h-140 object-cover brightness-75"
          />
          <div className="absolute inset-0  flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold"
            >
              24×7 Hospital Pharmacy
            </motion.h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-teal-600"
        >
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            Reliable Medicines. Anytime Care.
          </h2>
          <p className="text-gray-700 leading-7 text-lg">
            Hindusthan Hospital’s in-house pharmacy operates round-the-clock to
            ensure uninterrupted access to essential medicines, emergency drugs,
            surgical supplies, and medical consumables. Our pharmacy plays a
            crucial role in patient care by ensuring timely availability of
            medicines for inpatients, outpatients, and emergency cases.
          </p>
        </motion.div>
      </section>

      {/* SPECIALTY CARDS WITH IMAGES */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-6">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-teal-600 text-white p-10 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Our Pharmacy?
          </h3>
          <ul className="space-y-3 text-lg">
            <li>✔ 24×7 availability including nights & holidays</li>
            <li>✔ Qualified pharmacists and trained staff</li>
            <li>✔ Genuine medicines with proper billing</li>
            <li>✔ Quick dispensing for emergency cases</li>
            <li>✔ Affordable pricing with ethical practices</li>
          </ul>
        </motion.div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
        <motion.a
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          href="https://wa.me/919500000000?text=Hello%20I%20need%20pharmacy%20assistance"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          Chat with Pharmacy on WhatsApp
        </motion.a>
      </section>

    </div>
  );
}
