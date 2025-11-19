import React, { useState } from "react";

import img1 from "../assets/hero.jpg";
import img2 from "../assets/team.jpg";
import img3 from "../assets/appointment.jpg";

// ✔ FULL SPECIALITY DATA (Name, Image, Overview, Facilities)
const SPECIALITY_DETAILS = {
  "Cardiology": {
    image: img1,
    overview:
      "Our Cardiology department provides comprehensive heart care including non-invasive and interventional cardiology supported by expert cardiologists.",
    facilities: [
      "Digital Cath Lab",
      "ECG, Echo, TMT",
      "24/7 Cardiac Emergency Care",
      "Angiogram & Angioplasty",
    ],
  },

  "Orthopaedics & Joint Replacement": {
    image: img2,
    overview:
      "Expert care for fractures, sports injuries, spine, and joint replacement surgeries with advanced orthopaedic technology.",
    facilities: [
      "Knee & Hip Replacement",
      "Arthroscopy",
      "Fracture Care",
      "Sports Injury Management",
    ],
  },

  "Dermatology": {
    image: img3,
    overview:
      "Specialized skin, hair, and nail treatment using modern dermatological technologies for all age groups.",
    facilities: [
      "Laser Skin Treatment",
      "Acne & Scar Management",
      "Cosmetic Dermatology",
      "Psoriasis & Eczema Care",
    ],
  },

  "Neonatology & Paediatric": {
    image: img2,
    overview:
      "Dedicated paediatric and neonatal care offering vaccinations, growth monitoring, and emergency child care.",
    facilities: [
      "NICU Level III",
      "Paediatric Emergency",
      "Vaccination Clinic",
      "Newborn Care",
    ],
  },

  // DEFAULT TEMPLATE (for remaining)
  "Critical Care Unit": {
    image: img1,
    overview:
      "Advanced critical care treatment with continuous monitoring, ventilator support and trained intensivists.",
    facilities: ["24/7 ICU", "Life Support", "Trauma Care", "Ventilator Support"],
  },

  "Dental": {
    image: img2,
    overview:
      "Complete dental care including cosmetic dentistry, orthodontics, endodontics and more.",
    facilities: ["Root Canal", "Braces", "Implants", "Dental Cosmetic Care"],
  },

  "ENT": {
    image: img3,
    overview:
      "Diagnosis and treatment of ear, nose, throat and head-neck conditions using advanced medical tools.",
    facilities: ["Endoscopy", "Tonsil Surgery", "Hearing Tests", "Voice Care"],
  },

  "General Medicine": {
    image: img1,
    overview:
      "Comprehensive adult medical care including lifestyle diseases, infections, and preventive medicine.",
    facilities: ["Diabetes Care", "Fever Management", "BP Control", "Health Checkups"],
  },

  "General Surgery": {
    image: img3,
    overview:
      "Expert surgical care including open and minimally invasive surgeries for major conditions.",
    facilities: ["Laparoscopy", "Appendix Surgery", "Hernia Repair", "Gallbladder Surgery"],
  },

  "Gastroenterology": {
    image: img1,
    overview:
      "Diagnosis and treatment for stomach, liver and intestinal diseases.",
    facilities: ["Endoscopy", "Liver Care", "GERD Management", "Colonoscopy"],
  },

  "Internal Medicine": {
    image: img2,
    overview:
      "Expert physicians handling chronic and infectious diseases with complete medical management.",
    facilities: ["Chronic Disease Care", "Infection Control", "Preventive Care"],
  },

  "Nephrology": {
    image: img3,
    overview:
      "Kidney care services with dialysis and complete renal disease treatment.",
    facilities: ["Dialysis", "Kidney Biopsy", "Renal Failure Treatment"],
  },

  "Obstetrics & Gynaecology": {
    image: img1,
    overview:
      "Complete women's healthcare including pregnancy care, fertility support and gynaec surgeries.",
    facilities: ["Normal & C-section Delivery", "Fertility Care", "PCOS Treatment"],
  },

  "Physical Medicine & Rehabilitation": {
    image: img2,
    overview:
      "Restoring physical function and mobility with physiotherapy and rehabilitation support.",
    facilities: ["Physiotherapy", "Stroke Rehab", "Sports Rehab"],
  },

  "Paediatric Surgery": {
    image: img3,
    overview:
      "Specialized surgical care for newborns and children using advanced procedures.",
    facilities: ["Neonatal Surgery", "Emergency Surgery", "Laparoscopic Paediatric Surgery"],
  },

  "Psychiatry": {
    image: img1,
    overview:
      "Comprehensive mental health care including counselling, therapy and psychiatric treatments.",
    facilities: ["Depression Treatment", "Anxiety Care", "Addiction Therapy"],
  },

  "Plastic & Reconstructive Surgery": {
    image: img2,
    overview:
      "Cosmetic and reconstructive procedures performed with precision.",
    facilities: ["Burn Reconstruction", "Scar Revision", "Cosmetic Surgery"],
  },

  "Pulmonology": {
    image: img3,
    overview:
      "Respiratory care including asthma, COPD, sleep apnea and lung complications.",
    facilities: ["Bronchoscopy", "Asthma Care", "Pulmonary Rehab"],
  },

  "Radiology": {
    image: img1,
    overview:
      "Ultra-modern imaging department offering high-precision diagnostic scans.",
    facilities: ["CT Scan", "MRI", "X-Ray", "Ultrasound"],
  },

  "Surgical Oncology": {
    image: img2,
    overview:
      "Expert cancer surgery department offering advanced surgical cancer treatments.",
    facilities: ["Tumor Removal", "Biopsies", "Cancer Staging"],
  },
};

// ✔ DOCTOR LIST PER SPECIALITY
const DOCTORS = {
  "Cardiology": [
    {
      name: "Dr. Arjun Menon",
      qualification: "MD, DM (Cardiology)",
      experience: "10+ Years",
      languages: "English, Tamil, Hindi",
      image: img1,
    },
    {
      name: "Dr. Priya Chandran",
      qualification: "MD, Cardiac Specialist",
      experience: "7+ Years",
      languages: "English, Tamil",
      image: img3,
    },
  ],

  "Dermatology": [
    {
      name: "Dr. Sandhya Raj",
      qualification: "MD Dermatology",
      experience: "8+ Years",
      languages: "English, Tamil",
      image: img2,
    },
  ],

  "Orthopaedics & Joint Replacement": [
    {
      name: "Dr. Vivek Sharma",
      qualification: "MS Ortho",
      experience: "12+ Years",
      languages: "English, Hindi",
      image: img2,
    },
  ],

  "Neonatology & Paediatric": [
    {
      name: "Dr. Priya Lakshmi",
      qualification: "MD Paediatrics",
      experience: "9+ Years",
      languages: "English, Tamil",
      image: img1,
    },
  ],

  // All others have empty lists for now
};

export default function Specialities() {
  const SPECIALITY_LIST = Object.keys(SPECIALITY_DETAILS);
  const [active, setActive] = useState("Cardiology");

  const details = SPECIALITY_DETAILS[active];
  const doctors = DOCTORS[active] || [];

  return (
    <div className="font-[Poppins] pt-[9rem] pb-20 bg-gray-50 min-h-screen">

      {/* PAGE TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h1 className="text-4xl font-bold text-blue-900">SPECIALITIES</h1>
        <p className="text-gray-600">Explore our complete Centres of Excellence</p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SIDEBAR */}
        <div className="bg-white shadow rounded-2xl p-5 h-fit sticky top-28">
          <h3 className="font-bold text-blue-900 mb-4">Specialities</h3>

          <div className="space-y-2">
            {SPECIALITY_LIST.map((sp) => (
              <button
                key={sp}
                onClick={() => setActive(sp)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  active === sp
                    ? "bg-blue-700 text-white"
                    : "hover:bg-blue-100 text-blue-900"
                }`}
              >
                {sp}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3">

          {/* SPECIALITY NAME */}
          <h2 className="text-3xl font-bold text-blue-900">{active}</h2>

          {/* IMAGE */}
          <img
            src={details.image}
            className="w-full h-72 object-cover rounded-xl mt-4"
          />

          {/* DESCRIPTION */}
          <div className="bg-white p-6 rounded-xl shadow mt-6">
            <h3 className="text-xl font-semibold text-blue-900">Overview</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">{details.overview}</p>

            <h3 className="text-xl font-semibold text-blue-900 mt-6">Facilities</h3>
            <ul className="mt-2 space-y-2 text-gray-800">
              {details.facilities.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          {/* DOCTOR LIST */}
          <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Doctors</h3>

          {doctors.length === 0 && (
            <div className="bg-white p-6 rounded-xl shadow text-gray-600">
              No doctors available for this speciality yet.
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow text-center"
              >
                <img
                  src={doc.image}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-100"
                />
                <h4 className="text-xl font-bold mt-3 text-blue-900">{doc.name}</h4>
                <p className="text-gray-600">{doc.qualification}</p>
                <p className="text-gray-500 text-sm">Experience: {doc.experience}</p>
                <p className="text-gray-500 text-sm">Languages: {doc.languages}</p>

                <button className="mt-4 px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
