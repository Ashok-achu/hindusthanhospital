import React, { useState } from "react";
import { motion } from "framer-motion";
import dchImg from "../assets/set1/course.jpg";
import dnbImg from "../assets/set1/course.jpg";


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
      title: "DTCD",
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
<div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 mb-12">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">
      <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
        Academics
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-blue-900">
        Our Courses
      </h2>

      <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full mt-4"></div>
    </div>

    <div className="mt-12 bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">

      <h3 className="text-2xl font-bold text-blue-900 mb-5">
        About NBEMS
      </h3>

      <p className="text-gray-700 leading-8 text-justify mb-6">
        Established in <strong>1975</strong> by the Government of India,
        the National Board of Examinations in Medical Sciences (NBEMS)
        sets high, uniform standards for postgraduate medical education
        across the country.
      </p>

      <p className="text-gray-700 leading-8 text-justify mb-8">
        NBEMS conducts standardized examinations across various medical
        specialties, ensuring consistent evaluation of medical knowledge,
        competencies, and clinical skills while maintaining national and
        international academic standards.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h4 className="text-lg font-semibold text-blue-900 mb-4">
            Recognized Qualifications
          </h4>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Diplomate of National Board (DNB)</li>
            <li>✔ DrNB Super Speciality</li>
            <li>✔ Fellow of National Board (FNB)</li>
            <li>✔ NBEMS Diploma Courses</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
          <h4 className="text-lg font-semibold text-green-700 mb-4">
            Why Choose NBEMS?
          </h4>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Government Recognized</li>
            <li>✔ National Standard Curriculum</li>
            <li>✔ Excellent Clinical Exposure</li>
            <li>✔ Career-Oriented Medical Education</li>
          </ul>
        </div>

      </div>

    </div>

  </div>
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