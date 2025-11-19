import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserMd,
  FaTransgender,
  FaLanguage,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaTimes,
} from "react-icons/fa";
import doctorImg from "../assets/team.jpg";
import appointmentImg from "../assets/appointment.jpg";

export default function Healthcare() {
  const [filters, setFilters] = useState({
    name: "",
    speciality: "",
    gender: "",
    language: "",
  });

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Menon",
      speciality: "Cardiologist",
      experience: "08 Years",
      languages: "English, Hindi",
      location: "Hindusthan Hospital, Coimbatore",
      qualification: "MBBS, MD",
      gender: "Male",
      image: doctorImg,
      bio: "Dr. Arjun Menon is an experienced cardiologist with over 8 years of experience in treating complex cardiac conditions with compassion and skill.",
    },
    {
      id: 2,
      name: "Dr. Priya Lakshmi",
      speciality: "Neurologist",
      experience: "10 Years",
      languages: "English, Tamil",
      location: "Hindusthan Hospital, Coimbatore",
      qualification: "MBBS, DM",
      gender: "Female",
      image: doctorImg,
      bio: "Dr. Priya Lakshmi specializes in neurological care, stroke management, and neurodegenerative disorders.",
    },
    {
      id: 3,
      name: "Dr. Vivek Sharma",
      speciality: "Orthopaedic Surgeon",
      experience: "12 Years",
      languages: "English, Hindi",
      location: "Hindusthan Hospital, Coimbatore",
      qualification: "MBBS, MS (Ortho)",
      gender: "Male",
      image: doctorImg,
      bio: "Dr. Vivek Sharma is an orthopaedic surgeon known for excellence in joint replacement and trauma surgeries.",
    },
  ];

  const filteredDoctors = doctors.filter(
    (d) =>
      d.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.speciality === "" ||
        d.speciality.toLowerCase().includes(filters.speciality.toLowerCase())) &&
      (filters.gender === "" || d.gender === filters.gender) &&
      (filters.language === "" ||
        d.languages.toLowerCase().includes(filters.language.toLowerCase()))
  );

  return (
    <div className="font-[Poppins] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen pt-[9rem] pb-20 overflow-hidden">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <p className="text-sm text-gray-600">
          Home &gt; <span className="text-blue-700">Healthcare Experts</span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-2 tracking-wide">
          DOCTOR DIRECTORY / HEALTHCARE EXPERTS
        </h2>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mt-10 px-6 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {[
          {
            icon: <FaSearch />,
            type: "input",
            placeholder: "Search by Name",
            key: "name",
          },
          {
            icon: <FaUserMd />,
            type: "select",
            key: "speciality",
            options: ["Cardiologist", "Neurologist", "Orthopaedic"],
          },
          {
            icon: <FaTransgender />,
            type: "select",
            key: "gender",
            options: ["Male", "Female"],
          },
          {
            icon: <FaLanguage />,
            type: "select",
            key: "language",
            options: ["English", "Hindi", "Tamil"],
          },
        ].map((field) => (
          <div
            key={field.key}
            className="flex items-center border rounded-full px-4 bg-white/90 shadow-sm hover:shadow-md transition"
          >
            <div className="text-gray-400 mr-2">{field.icon}</div>
            {field.type === "input" ? (
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full py-2 outline-none text-gray-600 bg-transparent"
                value={filters[field.key]}
                onChange={(e) =>
                  setFilters({ ...filters, [field.key]: e.target.value })
                }
              />
            ) : (
              <select
                className="w-full py-2 outline-none bg-transparent text-gray-600"
                value={filters[field.key]}
                onChange={(e) =>
                  setFilters({ ...filters, [field.key]: e.target.value })
                }
              >
                <option value="">Select {field.key.charAt(0).toUpperCase() + field.key.slice(1)}</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-full px-6 py-2 shadow-md transition">
          SEARCH
        </button>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {filteredDoctors.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 text-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={doc.image}
              alt={doc.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-100"
            />
            <h3 className="mt-4 text-blue-900 font-bold text-xl">{doc.name}</h3>
            <p className="text-gray-600 text-sm">{doc.speciality}</p>
            <p className="text-gray-500 text-sm mt-1">{doc.experience} Experience</p>

            <div className="mt-3 text-sm text-gray-600">
              <p className="flex justify-center items-center gap-2">
                <FaMapMarkerAlt /> {doc.location}
              </p>
              <p className="flex justify-center items-center gap-2 mt-1">
                <FaGraduationCap /> {doc.qualification}
              </p>
              <p className="text-gray-500 mt-1">🗣 {doc.languages}</p>
            </div>

            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={() => setSelectedDoctor(doc)}
                className="px-5 py-2 border border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition"
              >
                View Details
              </button>
              <button className="px-5 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition">
                Book
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative overflow-hidden"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-lg"
              onClick={() => setSelectedDoctor(null)}
            >
              <FaTimes />
            </button>

            <div className="text-center">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-gray-100 shadow-md"
              />
              <h3 className="text-2xl font-bold text-blue-900 mt-3">
                {selectedDoctor.name}
              </h3>
              <p className="text-gray-600">{selectedDoctor.speciality}</p>
              <p className="text-gray-500 mt-2">{selectedDoctor.bio}</p>

              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>📍 {selectedDoctor.location}</p>
                <p>🎓 {selectedDoctor.qualification}</p>
                <p>🗣 {selectedDoctor.languages}</p>
                <p>🩺 {selectedDoctor.experience} Experience</p>
              </div>

              <button
                onClick={() => alert("Appointment booking feature coming soon!")}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-semibold shadow-md hover:from-blue-800 hover:to-blue-700 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-20 mt-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-red-100/10"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 relative z-10">
          <motion.img
            src={appointmentImg}
            alt="Doctors"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-72 rounded-3xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-blue-900 text-2xl sm:text-3xl font-extrabold leading-snug">
              Looking for professional & trusted medical healthcare?
            </h2>
            <p className="text-gray-700 mt-3 text-lg font-medium">
              DON’T HESITATE TO CONTACT US.
            </p>
            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full font-semibold shadow-md hover:from-blue-800 hover:to-blue-700 transition">
              MAKE APPOINTMENT
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
