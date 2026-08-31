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

            (filters.speciality === "" ||
                d.speciality === filters.speciality) &&

            (filters.gender === "" ||
                d.gender === filters.gender)

        );

    });


    return (

        <div className="font-[Poppins] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen pt-[9rem] pb-20">

            {/* Filters */}

            <div className="max-w-7xl mx-auto mt-10 px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-4">

                {/* NAME SEARCH */}

                <div className="flex items-center border rounded-full px-4 bg-white shadow">

                    <FaSearch className="mr-2 text-gray-400" />

                    <input
                        placeholder="Search Doctor"
                        className="w-full py-2 outline-none"
                        value={filters.name}
                        onChange={e => setFilters({ ...filters, name: e.target.value })}
                    />

                </div>


                {/* SPECIALITY */}

                <div className="flex items-center border rounded-full px-4 bg-white shadow">

                    <FaUserMd className="mr-2 text-gray-400" />

                    <select
                        className="w-full py-2 outline-none bg-transparent"
                        value={filters.speciality}
                        onChange={e => setFilters({ ...filters, speciality: e.target.value })}
                    >

                        <option value="">Speciality</option>

                        {specialities.map(sp => (
                            <option key={sp}>{sp}</option>
                        ))}

                    </select>

                </div>


                {/* GENDER */}

                <div className="flex items-center border rounded-full px-4 bg-white shadow">

                    <FaTransgender className="mr-2 text-gray-400" />

                    <select
                        className="w-full py-2 outline-none"
                        value={filters.gender}
                        onChange={e => setFilters({ ...filters, gender: e.target.value })}
                    >

                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>

                    </select>

                </div>

            </div>



            {/* DOCTOR CARDS */}

            <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

                {filteredDoctors.map((doc, index) => (

                    <motion.div
                        key={doc.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: index * .1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 text-center"
                    >

                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src={doc.image}
                            alt={doc.name}
                            className="w-full h-62 object-cover rounded-xl"
                        />

                        <h3 className="mt-4 font-bold text-xl text-blue-900">

                            {doc.name}

                        </h3>

                        <p className="text-gray-600">

                            {doc.speciality}

                        </p>

                        <div className="mt-5 flex justify-center gap-3">

                            <button
                                onClick={() => setSelectedDoctor(doc)}
                                className="px-5 py-2 border border-blue-700 text-blue-700 rounded-full">

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
  className="px-5 py-2 bg-blue-700 text-white rounded-full"
>
  Book
</button>

                        </div>

                    </motion.div>

                ))}

            </div>



            {/* MODAL */}

            {selectedDoctor && (

                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

                    <div className="bg-white p-8 rounded-2xl max-w-lg relative">

                        <button
                            className="absolute right-4 top-4"
                            onClick={() => setSelectedDoctor(null)}>

                            <FaTimes />

                        </button>

                        <img
                            src={selectedDoctor.image}
                            className="w-40 h-40 object-cover rounded-full mx-auto"
                        />

                        <h3 className="text-xl font-bold text-center mt-3">

                            {selectedDoctor.name}

                        </h3>

                        <p className="text-center">

                            {selectedDoctor.speciality}

                        </p>

                    </div>

                </div>

            )}

        </div>

    );

}

