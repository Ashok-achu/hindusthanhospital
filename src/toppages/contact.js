import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import mapImg from "../assets/hospital.jpg";

const DEPARTMENTS = [
  "Anaesthesiology", "Cardiology", "Dermatology", "Dentistry", "Diabetology",
  "Emergency Care", "ENT", "General Medicine", "General Surgery", "Gastroenterology",
  "Internal Medicine", "ICU", "Neonatology", "Neuro & Vascular Surgery", "Nephrology",
  "Obstetrics & Gynaecology", "Orthopaedics", "Rehabilitation", "Paediatrics",
  "Paediatric Surgery", "Psychiatry", "Plastic Surgery", "Pulmonology", "Radiology",
  "Surgical Oncology", "Urology"
];

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    department: "",
    doctor: "",
    date: "",
    timeSlot: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedMessage = `
Patient Appointment Details:
----------------------------
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}
Age: ${form.age || "N/A"} | Gender: ${form.gender || "N/A"}
Department: ${form.department || "General"}
Doctor: ${form.doctor || "Any Available"}
Preferred Date: ${form.date || "N/A"}
Time Slot: ${form.timeSlot || "N/A"}
Symptoms / Message: ${form.message || "None"}
    `.trim();

    emailjs.send(
      "service_dlvo84b",
      "template_7jiay8f",
      {
        from_name: form.name,
        from_email: form.email || "no-reply@hindusthanhospital.com",
        phone: form.phone,
        message: formattedMessage,
      },
      "DTOngBDwQgHZbeDox"
    )
    .then(() => {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        department: "",
        doctor: "",
        date: "",
        timeSlot: "",
        message: "",
      });
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((error) => {
      console.error(error);
      // Fallback: Open WhatsApp booking if EmailJS service fails
      const waMsg = `*Appointment Request (Reach Us)*
👤 *Name*: ${form.name}
📱 *Phone*: ${form.phone}
📧 *Email*: ${form.email || "N/A"}
🎂 *Age*: ${form.age || "N/A"} | 🚻 *Gender*: ${form.gender || "N/A"}
🏥 *Department*: ${form.department || "General"}
👨‍⚕️ *Doctor*: ${form.doctor || "Any Available"}
📅 *Preferred Date*: ${form.date || "N/A"}
⏰ *Time Slot*: ${form.timeSlot || "N/A"}
💬 *Message*: ${form.message || "None"}`;

      window.open(`https://wa.me/916380015975?text=${encodeURIComponent(waMsg)}`, "_blank");
      setSuccess(true);
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    });
  };

  return (
    <div className="pt-4 sm:pt-6 pb-20 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-blue-900"
        >
          Reach Us & Book Appointment
        </motion.h1>
        <p className="text-gray-600 mt-2">We are here to assist you 24×7. Book your consultation or send an enquiry below.</p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-1">Patient Booking & Enquiry</h3>
          <p className="text-xs text-gray-500 mb-6">Provide patient details for instant appointment scheduling.</p>

          {success && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-sm text-center shadow-sm">
              ✅ Appointment request submitted successfully! Our patient care team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Patient Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Mobile Number *</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  placeholder="10-digit Phone"
                  required
                />
              </div>
            </div>

            {/* Email + Age/Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  placeholder="Email ID"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Age</label>
                  <input
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                    placeholder="Age"
                    min="1"
                    max="120"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Gender</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Department + Doctor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Department</label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                >
                  <option value="">Select Department</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Preferred Doctor</label>
                <input
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                  placeholder="Doctor Name (Optional)"
                />
              </div>
            </div>

            {/* Date + Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Time Slot</label>
                <select
                  name="timeSlot"
                  value={form.timeSlot}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                >
                  <option value="">Select Time Slot</option>
                  <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Symptoms / Reason for Visit</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                rows="3"
                placeholder="Brief description of symptoms or healthcare needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl w-full hover:bg-blue-900 transition shadow-lg hover:shadow-blue-900/30"
            >
              {loading ? "Submitting Booking..." : "Submit Appointment Request"}
            </button>

          </form>

          {/* CONTACT INFO */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-3 text-sm text-gray-600">
            <p><FaMapMarkerAlt className="inline mr-2.5 text-blue-700 text-base" /> <strong>Address:</strong> Hindusthan Hospital, Coimbatore</p>
            <p><FaPhoneAlt className="inline mr-2.5 text-blue-700 text-base" /> <strong>Helpline:</strong> +91 422 4327777</p>
            <p><FaEnvelope className="inline mr-2.5 text-blue-700 text-base" /> <strong>Email:</strong> hindusthanreception@gmail.com</p>
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Find Us & Hours</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Located conveniently in the heart of Coimbatore with 24/7 emergency & outpatient services.
            </p>

            <img
              src={mapImg}
              alt="Hospital Location"
              className="w-full h-72 object-cover rounded-2xl mt-5 shadow-md border border-slate-200"
            />
          </div>

          <div className="mt-6 rounded-2xl bg-blue-50/80 p-5 border border-blue-100 text-xs sm:text-sm text-blue-950 space-y-2">
            <div className="flex justify-between font-semibold border-b border-blue-200/60 pb-2">
              <span>Emergency Services</span>
              <span className="text-rose-600 font-bold">24 / 7 Available</span>
            </div>
            <div className="flex justify-between">
              <span>OPD Timings</span>
              <span>08:00 AM - 08:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Pharmacy & Lab</span>
              <span>24 Hours Open</span>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}