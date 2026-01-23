import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import {
  FaBed,
  FaSnowflake,
  FaCouch,
  FaHospital,
  FaWhatsapp,
} from "react-icons/fa";

export default function Rooms() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const rooms = [
    {
      name: "Suite Room",
      icon: <FaCouch />,
      description:
        "Premium suite rooms designed for maximum comfort and privacy with spacious interiors, elegant furnishings, and personalized care.",
      features: [
        "Spacious Living Area",
        "Attached Bathroom",
        "Television & Wi-Fi",
        "Attendant Facility",
        "24x7 Nursing Care",
      ],
    },
    {
      name: "Deluxe Room",
      icon: <FaBed />,
      description:
        "Well-appointed deluxe rooms offering enhanced comfort, privacy, and a peaceful environment for faster recovery.",
      features: [
        "Air Conditioned",
        "Attached Bathroom",
        "Television",
        "Comfortable Bedding",
        "24x7 Nursing Support",
      ],
    },
    {
      name: "AC Room",
      icon: <FaSnowflake />,
      description:
        "Air-conditioned private rooms providing a comfortable stay with essential medical support and hygiene standards.",
      features: [
        "Air Conditioned",
        "Attached Bathroom",
        "Patient Attendant Space",
        "Nursing Care",
      ],
    },
    {
      name: "Non-AC Room",
      icon: <FaBed />,
      description:
        "Economical private rooms offering clean, well-ventilated spaces with standard patient care facilities.",
      features: [
        "Well Ventilated",
        "Attached Bathroom",
        "Regular Nursing Care",
        "Affordable Option",
      ],
    },
    {
      name: "General Ward",
      icon: <FaHospital />,
      description:
        "Spacious general wards designed to accommodate multiple patients with continuous monitoring and quality medical care.",
      features: [
        "Cost Effective",
        "Shared Facility",
        "24x7 Nursing Supervision",
        "Regular Doctor Rounds",
      ],
    },
  ];

  return (
    <div className="pt-[9rem] pb-24 bg-gradient-to-b from-purple-50 to-white font-[Poppins]">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            alt="Rooms"
            className="w-full h-72 md:h-80 object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-purple-900/70 flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-4xl md:text-5xl font-extrabold"
            >
              Patient Rooms & Wards
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
          className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-purple-600"
        >
          <h2 className="text-3xl font-bold text-purple-700">
            Comfort, Care & Choice
          </h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Hindusthan Hospital offers a wide range of patient accommodation
            options designed to meet medical needs, comfort preferences, and
            budget considerations. Patients can choose from premium suites to
            general wards, all supported by compassionate nursing care.
          </p>
        </motion.div>
      </section>

      {/* ROOMS GRID */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center gap-3 mb-4 text-purple-700">
                <div className="text-3xl">{room.icon}</div>
                <h3 className="text-2xl font-bold">{room.name}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-7 mb-4">
                {room.description}
              </p>

              {/* FEATURES */}
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {room.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* WHATSAPP BUTTON */}
              <a
                href={`https://wa.me/919XXXXXXXXX?text=I would like to enquire about ${room.name} availability at Hindusthan Hospital`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
              >
                <FaWhatsapp className="text-xl" />
                Enquire on WhatsApp
              </a>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
