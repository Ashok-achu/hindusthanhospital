import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import hospitalImg from "../assets/appointment.jpg";
import doctorImg from "../assets/team.jpg";




const doctorsData = [
  {
    id: "1",
    name: "Dr. Arjun Kumar",
    speciality: "Cardiology",
    location: "Hindusthan Hospital, Coimbatore",
    experience: "12 Years",
    profile: "Experienced cardiologist with expertise in heart care.",
    image: doctorImg,
  },
  {
    id: "2",
    name: "Dr. Meena Raj",
    speciality: "Dermatology",
    location: "Hindusthan Hospital, Coimbatore",
    experience: "8 Years",
    profile: "Specialist in skin and cosmetic treatments.",
    image: doctorImg,
  },
];


export default function DoctorProfile() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ First try from location.state
  // ✅ If not available, find from doctorsData using id
  const doctor =
    location.state || doctorsData.find((doc) => doc.id === id);

  const [activeTab, setActiveTab] = useState("profile");
  const availability = [13, 17, 18, 20, 21, 25, 31];

  if (!doctor) {
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
          Home &gt; Healthcare Experts &gt; Doctor Profile
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
            className="w-full h-64 object-cover"
          />

          <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
            <img
              src={doctor.image || doctorImg}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="text-gray-800 text-xl font-semibold">
                {doctor.name}
              </h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <button className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded font-semibold shadow-md transition">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          <div className="px-6 pb-6 text-gray-600 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              {doctor.location}
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
      </div>

    </div>
  );
}
