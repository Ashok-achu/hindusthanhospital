import React, { useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

const packages = [
  {
    name: "Silver",
    price: "₹1,500",
    tests: "40 Tests",
    color: "border-green-500",
    items: [
      "Blood Grouping & Rh Typing",
      "RBS (Random Blood Sugar)",
      "Complete Blood Count",
      "LDL Cholesterol",
      "Serum Creatinine",
      "Total Cholesterol",
      "Triglycerides",
      "Urine Complete Analysis",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Gold",
    price: "₹2,750",
    tests: "56 Tests",
    color: "border-blue-500",
    items: [
      "FBS",
      "PPBS",
      "Blood Urea",
      "Complete Blood Count",
      "Liver Function Test",
      "Lipid Profile",
      "Serum Creatinine",
      "TSH",
      "Urine Complete Analysis",
      "Chest PA",
      "ECG",
      "Physician Consultation"
    ]
  },
  {
    name: "Platinum",
    price: "₹4,500",
    tests: "45 Tests",
    color: "border-purple-500",
    items: [
      "FBS",
      "PPBS",
      "HbA1c",
      "Liver Function Test",
      "Lipid Profile",
      "Renal Function Test",
      "TSH",
      "CBC",
      "Chest PA",
      "USG Abdomen",
      "ECG",
      "ECHO + Reporting",
      "Physician Consultation"
    ]
  },
  {
    name: "Diamond",
    price: "₹7,000",
    tests: "65 Tests",
    color: "border-red-500",
    items: [
      "FBS",
      "PPBS",
      "Blood Grouping & Rh Typing",
      "CBC",
      "HbA1c",
      "Liver Profile",
      "Lipid Profile",
      "PSA (Total)",
      "Renal Function Test",
      "Serum Uric Acid",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine Complete Analysis",
      "USG Abdomen",
      "Chest PA",
      "ECG",
      "TMT",
      "ECHO + Reporting",
      "Physician Consultation"
    ]
  }
];

export default function MHC() {
  const [selectedPkg, setSelectedPkg] = useState(null);

  return (
    <div className="pt-[9rem] pb-24 bg-gray-50 font-[Poppins]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img src={hero} className="w-full h-72 object-cover brightness-75" />
          <div className="absolute inset-0 bg-green-900/70 flex items-center">
            <h1 className="ml-8 text-white text-4xl md:text-5xl font-extrabold">
              Master Health Checkup
            </h1>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-2xl shadow-lg border-t-4 ${pkg.color} flex flex-col`}
            >
              {/* HEADER */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-sm text-gray-500">{pkg.tests}</p>
                <p className="text-3xl font-extrabold text-green-600 mt-2">
                  {pkg.price}
                </p>
              </div>

              {/* SCROLLABLE LIST */}
              <div className="px-6 flex-1 overflow-y-auto max-h-[320px]">
                <ul className="space-y-2 text-sm">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FIXED ACTION BAR */}
              <div className="p-4 border-t flex flex-col gap-2">
                <button
                  onClick={() => setSelectedPkg(pkg)}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
                >
                  Book Appointment
                </button>

                <a
                  href={`https://wa.me/919XXXXXXXXX?text=I want to book ${pkg.name} Master Health Checkup`}
                  target="_blank"
                  className="border border-green-600 text-green-600 py-2 rounded-lg text-center font-semibold hover:bg-green-50"
                >
                  WhatsApp Booking
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MODAL */}
      {selectedPkg && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-2xl font-bold mb-2">
              Book {selectedPkg.name} Package
            </h3>
            <p className="text-gray-600 mb-4">
              Our team will contact you shortly
            </p>

            <input
              placeholder="Patient Name"
              className="w-full border p-3 rounded mb-3"
            />
            <input
              placeholder="Mobile Number"
              className="w-full border p-3 rounded mb-3"
            />
            <button
              onClick={() => setSelectedPkg(null)}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Submit Request
            </button>

            <button
              onClick={() => setSelectedPkg(null)}
              className="w-full mt-2 text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
