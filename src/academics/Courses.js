import React, { useState } from "react";
import { motion } from "framer-motion";
import course1Img from "../assets/bannerimage/course1.png";
import course2Img from "../assets/bannerimage/course2.png";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Diploma in Tuberculosis and Chest Disease",
      image: course1Img,
      duration: "2 Years",
      description:
        "Advanced postgraduate medical training equivalent to MD/MS with hands-on clinical exposure.",
      details:
        "DNB offers high-quality training across multiple specialties with strong clinical exposure, research opportunities, and national-level recognition.",
    },
    {
      id: 2,
      title: "DCH - Diploma in Child Health",
      image: course2Img,
      duration: "2 Years",
      description:
        "Focused training in pediatrics including neonatal care, child development, and disease management.",
      details:
        "DCH is a specialized program designed for medical graduates to gain expertise in pediatric care, immunization, neonatal emergencies, and child nutrition.",
    },
  ];

  return (
    <div className="pt-3 sm:pt-4 font-[Poppins]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Academics
            </span>

            <h2 className="mt-3 sm:mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900">
              Our Courses
            </h2>

            <div className="w-20 sm:w-24 h-1 bg-blue-700 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="mt-8 sm:mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
              About NBEMS
            </h3>

            <p className="text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6 text-sm sm:text-base">
              Established in <strong>1975</strong> by the Government of India,
              the National Board of Examinations in Medical Sciences (NBEMS)
              sets high, uniform standards for postgraduate medical education
              across the country.
            </p>

            <p className="text-gray-700 leading-relaxed text-justify mb-6 sm:mb-8 text-sm sm:text-base">
              NBEMS conducts standardized examinations across various medical
              specialties, ensuring consistent evaluation of medical knowledge,
              competencies, and clinical skills while maintaining national and
              international academic standards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-blue-50 rounded-2xl p-5 sm:p-6 border border-blue-100">
                <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-3 sm:mb-4">
                  Recognized Qualifications
                </h4>

                <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li>✔ Diplomate of National Board (DNB)</li>
                  <li>✔ DrNB Super Speciality</li>
                  <li>✔ Fellow of National Board (FNB)</li>
                  <li>✔ NBEMS Diploma Courses</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 sm:p-6 border border-green-100">
                <h4 className="text-base sm:text-lg font-semibold text-green-700 mb-3 sm:mb-4">
                  Why Choose NBEMS?
                </h4>

                <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-700">
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
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-10 px-4 sm:px-6 pt-8 pb-16 sm:pb-24">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            onClick={() => setActiveCourse(course)}
          >
            <div>
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                  Duration: {course.duration}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-colors shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCourse(course);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activeCourse && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setActiveCourse(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-3xl p-6 relative animate-fadeIn shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent, easy-to-click Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-red-600 text-gray-700 hover:text-white shadow-lg border border-gray-200 transition-all duration-200 z-30 cursor-pointer"
              onClick={() => setActiveCourse(null)}
            >
              <span className="text-xl font-bold leading-none">&times;</span>
            </button>

            <div className="overflow-hidden rounded-2xl bg-slate-100 mb-5">
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                className="w-full h-56 sm:h-72 object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-blue-900 pr-10">
              {activeCourse.title}
            </h2>

            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              Duration: {activeCourse.duration}
            </span>

            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              {activeCourse.details}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-colors shadow-md text-sm"
                onClick={() => {
                  setActiveCourse(null);
                }}
              >
                APPLY NOW
              </button>
              <button
                type="button"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors text-sm"
                onClick={() => setActiveCourse(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
