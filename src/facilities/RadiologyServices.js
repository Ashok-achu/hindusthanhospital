import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaXRay, FaMicroscope, FaHeartbeat } from "react-icons/fa";
import hero1 from "../assets/hero.jpg";

export default function RadiologyServices() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  // Use the same hero image for all gallery items
  const images = [hero1, hero1, hero1];

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-blue-50 to-white font-[Poppins]">

      {/* ================= SEO TAGS ================= */}
      <Helmet>
        <title>Radiology & Imaging | Hindusthan Hospital</title>
        <meta
          name="description"
          content="Hindusthan Hospital offers state-of-the-art radiology and imaging services including MRI, CT, Ultrasound, X-Ray, and Doppler scanning handled by expert radiologists."
        />
        <meta
          name="keywords"
          content="Radiology, Imaging, MRI, CT, X-Ray, Ultrasound, Doppler, Hindusthan Hospital Coimbatore"
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero1}
            className="w-full h-64 md:h-80 object-cover brightness-75"
            alt="Radiology Department"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="ml-6 md:ml-12 text-white text-3xl md:text-5xl font-extrabold flex items-center gap-3"
            >
              <FaXRay className="text-5xl" />
              Radiology & Imaging
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/90 p-10 rounded-3xl shadow-lg border-t-4 border-blue-600 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold text-blue-800">Advanced Imaging Excellence</h2>
          <p className="text-gray-700 mt-4 leading-7 text-lg">
            Our Radiology Department provides world-class diagnostic imaging using the latest
            technologies in MRI, CT, Ultrasound, Digital X-ray, and Doppler scanning. Our expert
            radiologists ensure precise diagnosis with high-resolution images and detailed reporting.
          </p>
        </motion.div>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt={`Radiology ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </section>

      {/* ================= HIGHLIGHT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-14 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200"
        >
          <FaXRay className="text-4xl text-blue-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-800">High-Resolution MRI & CT</h3>
          <p className="text-gray-600 mt-2">
            Ultra-clear imaging for brain, spine, joints, chest, and abdominal scans.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200"
        >
          <FaMicroscope className="text-4xl text-blue-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-800">Digital X-Ray & Ultrasound</h3>
          <p className="text-gray-600 mt-2">
            Quick, safe, and detailed scans with digital accuracy for faster diagnosis.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-200"
        >
          <FaHeartbeat className="text-4xl text-blue-700 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-800">Expert Radiologists</h3>
          <p className="text-gray-600 mt-2">
            Highly experienced professionals ensuring accuracy, clarity, and timely reporting.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
