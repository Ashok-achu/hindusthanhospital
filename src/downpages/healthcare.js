import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FaSearch,
    FaUserMd,
    FaTransgender,
    FaTimes,
} from "react-icons/fa";
import doctorsData from "../data/doctors.json";

const resolveImage = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:") || path.startsWith("/static/")) {
    return path;
  }
  if (path.startsWith("assets/")) {
    try {
      return require(`../assets/${path.substring(7)}`);
    } catch (e) {
      console.error("Failed to load image", path, e);
    }
  }
  return path;
};

export default function Healthcare() {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        name: "",
        speciality: "",
        gender: ""
    });

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    const doctors = useMemo(() => {
        return doctorsData.map((doc) => ({
            ...doc,
            image: resolveImage(doc.image)
        })).sort((a, b) => a.speciality.localeCompare(b.speciality) || a.name.localeCompare(b.name));
    }, []);

    // ⭐ AUTO SPECIALITY DROPDOWN
    const specialities = [
        ...new Set(doctors.map(doc => doc.speciality))
    ];

    // ⭐ FILTER SEARCH
    const filteredDoctors = doctors.filter(d => {
        return (
            d.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            (filters.speciality === "" || d.speciality === filters.speciality) &&
            (filters.gender === "" || d.gender === filters.gender)
        );
    });

    return (
        <div className="font-[Poppins] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen pt-28 sm:pt-[9rem] pb-20">

            {/* Filters */}
            <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* NAME SEARCH */}
                <div className="flex items-center border rounded-full px-4 bg-white shadow-sm">
                    <FaSearch className="mr-2 text-gray-400 shrink-0" />
                    <input
                        placeholder="Search Doctor"
                        className="w-full py-2.5 outline-none text-sm bg-transparent"
                        value={filters.name}
                        onChange={e => setFilters({ ...filters, name: e.target.value })}
                    />
                </div>

                {/* SPECIALITY */}
                <div className="flex items-center border rounded-full px-4 bg-white shadow-sm">
                    <FaUserMd className="mr-2 text-gray-400 shrink-0" />
                    <select
                        className="w-full py-2.5 outline-none bg-transparent text-sm"
                        value={filters.speciality}
                        onChange={e => setFilters({ ...filters, speciality: e.target.value })}
                    >
                        <option value="">All Specialities</option>
                        {specialities.map(sp => (
                            <option key={sp} value={sp}>{sp}</option>
                        ))}
                    </select>
                </div>

                {/* GENDER */}
                <div className="flex items-center border rounded-full px-4 bg-white shadow-sm sm:col-span-2 lg:col-span-1">
                    <FaTransgender className="mr-2 text-gray-400 shrink-0" />
                    <select
                        className="w-full py-2.5 outline-none bg-transparent text-sm"
                        value={filters.gender}
                        onChange={e => setFilters({ ...filters, gender: e.target.value })}
                    >
                        <option value="">All Genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

            </div>

            {/* DOCTOR CARDS */}
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
                {filteredDoctors.map((doc, index) => (
                    <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4, delay: Math.min(index, 6) * .05 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 sm:p-6 text-center border border-slate-100"
                    >
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            src={doc.image}
                            alt={doc.name}
                            className="w-full h-64 sm:h-72 object-cover object-top rounded-xl bg-slate-50"
                        />

                        <h3 className="mt-4 font-bold text-lg sm:text-xl text-blue-900 leading-snug">
                            {doc.name}
                        </h3>

                        <p className="text-gray-600 text-sm mt-1">
                            {doc.speciality}
                        </p>

                        <div className="mt-5 flex justify-center gap-3">
                            <button
                                onClick={() => setSelectedDoctor(doc)}
                                className="px-4 sm:px-5 py-2 border border-blue-700 text-blue-700 text-sm font-semibold rounded-full hover:bg-blue-50 transition"
                            >
                                View Details
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/appointment", {
                                        state: {
                                            doctorName: doc.name,
                                            speciality: doc.speciality,
                                            image: doc.image,
                                        },
                                    })
                                }
                                className="px-5 sm:px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded-full hover:bg-blue-800 transition shadow"
                            >
                                Book
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL */}
            {selectedDoctor && (
                <div className="fixed inset-0 bg-black/60 z-[99999] flex justify-center items-center p-4 backdrop-blur-sm">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-2xl">
                        <button
                            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 text-lg p-1"
                            onClick={() => setSelectedDoctor(null)}
                        >
                            <FaTimes />
                        </button>

                        <img
                            src={selectedDoctor.image}
                            alt={selectedDoctor.name}
                            className="w-36 h-36 sm:w-40 sm:h-40 object-cover object-top rounded-full mx-auto shadow"
                        />

                        <h3 className="text-xl font-bold text-center text-slate-900 mt-4">
                            {selectedDoctor.name}
                        </h3>

                        <p className="text-center text-rose-600 font-semibold text-sm mt-1">
                            {selectedDoctor.speciality}
                        </p>

                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => {
                                    setSelectedDoctor(null);
                                    navigate("/appointment", {
                                        state: {
                                            doctorName: selectedDoctor.name,
                                            speciality: selectedDoctor.speciality,
                                            image: selectedDoctor.image,
                                        },
                                    });
                                }}
                                className="w-full py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold text-sm rounded-full shadow hover:opacity-95 transition"
                            >
                                Book Appointment with {selectedDoctor.name.split(" ")[0]}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
