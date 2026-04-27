import React, { useState } from "react";
import { motion } from "framer-motion";
import dchImg from "../assets/pediatrics.jpg";
import dnbImg from "../assets/surgery.jpg";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "DCH - Diploma in Child Health",
      image: dchImg,
      duration: "2 Years",
      description:
        "Focused training in pediatrics including neonatal care, child development, and disease management.",
      details:
        "DCH is a specialized program designed for medical graduates to gain expertise in pediatric care, immunization, neonatal emergencies, and child nutrition.",
    },
    {
      id: 2,
      title: "DMLT",
      image: dnbImg,
      duration: "3 Years",
      description:
        "Advanced postgraduate medical training equivalent to MD/MS with hands-on clinical exposure.",
      details:
        "DNB offers high-quality training across multiple specialties with strong clinical exposure, research opportunities, and national-level recognition.",
    },
  ];

  return (
    <div className="pt-[10rem] font-[Poppins]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          OUR COURSES
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Empowering future healthcare professionals with excellence
        </p>
      </div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-10 px-6 mt-12 pb-20">

        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            onClick={() => setActiveCourse(course)}
          >
            <div className="overflow-hidden">
              <img
                src={course.image}
                alt="course"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900">
                {course.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Duration: {course.duration}
              </p>

              <p className="text-gray-700 mt-3">
                {course.description}
              </p>

              <button className="mt-5 px-5 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
                View Details
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* Popup */}
      {activeCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">

          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 relative animate-fadeIn">

            <button
              className="absolute top-3 right-4 text-xl text-gray-500 hover:text-red-600"
              onClick={() => setActiveCourse(null)}
            >
              ✖
            </button>

            <img
              src={activeCourse.image}
              alt="course"
              className="w-full h-60 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold text-blue-900 mt-4">
              {activeCourse.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Duration: {activeCourse.duration}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {activeCourse.details}
            </p>

            <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition">
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
}