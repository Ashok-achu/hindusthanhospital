import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import hospitalImg from "../assets/appointment.jpg";
import doctorImg from "../assets/team.jpg";

export default function DoctorProfile() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state;

  const [activeTab, setActiveTab] = useState("profile");
  const availability = [13, 17, 18, 20, 21, 25, 31];

  if (!doctor) {
    // fallback if user refreshes or navigates directly
    return (
      <div className="text-center pt-40 text-gray-700">
        <h2 className="text-2xl font-semibold">Doctor not found!</h2>
        <button
          onClick={() => navigate("/healthcare")}
          className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
        >
          Back to Directory
        </button>
      </div>
    );
  }

  return (
    <div className="font-[Poppins] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen pt-[10rem] pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-600">
          Home &gt; <span className="text-blue-700">Healthcare Experts</span> &gt;{" "}
          <span className="text-red-600">Doctor Profile</span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">
          {doctor.name}
        </h2>
      </div>

      {/* Doctor Section */}
      <div className="max-w-7xl mx-auto mt-10 px-6 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={hospitalImg}
            alt="Hospital"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
            <img
              src={doctor.image || doctorImg}
              alt={doctor.name}
              className="w-32 h-32 rounded-full border-4 border-gray-100 -mt-16 sm:mt-0 object-cover shadow-md"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-gray-800 text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded font-semibold shadow-md transition">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          <div className="px-6 pb-6 text-gray-600 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" /> {doctor.location}
            </p>
            <p className="flex items-start gap-2">
              <FaClock className="text-blue-700 mt-1" />
              <span>
                Monday - Friday: 9:00AM - 5:00PM <br />
                Saturday: 1:00PM - 5:00PM <br />
                Sunday: Off
              </span>
            </p>
          </div>
        </div>

        {/* Booking Calendar */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="bg-blue-800 text-white text-lg font-bold px-4 py-3 rounded-t-lg -mt-6 mb-4">
            Booking Availability
          </div>

          <div className="text-gray-700 mb-2 font-semibold text-lg">
            November 2025
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-semibold text-blue-700 py-1">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const available = availability.includes(day);
              return (
                <div
                  key={day}
                  className={`py-2 rounded cursor-pointer ${
                    available
                      ? "bg-green-300 hover:bg-green-400"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-12 px-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex border-b text-gray-600 font-semibold text-lg">
            {["profile", "expertise", "certificate"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 border-b-4 transition-all ${
                  activeTab === tab
                    ? "border-blue-700 text-blue-800"
                    : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "profile"
                  ? "Profile"
                  : tab === "expertise"
                  ? "Expertise"
                  : "Certificate / Others"}
              </button>
            ))}
          </div>

          <div className="mt-6 text-gray-700 leading-relaxed">
            {activeTab === "profile" && <p>{doctor.profile}</p>}
            {activeTab === "expertise" && (
              <ul className="list-disc pl-6 space-y-2">
                <li>Speciality: {doctor.speciality}</li>
                <li>Experience: {doctor.experience}</li>
              </ul>
            )}
            {activeTab === "certificate" && (
              <ul className="list-disc pl-6 space-y-2">
                <li>Certified by Hindusthan Hospital</li>
                <li>Member of Medical Council of India</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
