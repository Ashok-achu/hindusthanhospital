import React from "react";

export default function MettupalayamHospital() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">

      {/* HOME / HERO */}
      <section
        id="home"
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="bg-black/60 p-10 rounded-3xl text-center max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hindusthan Hospital – Mettupalayam
          </h1>
          <p className="text-lg mb-6">
            Advanced, affordable & compassionate healthcare for everyone
          </p>
          <a
            href="#appointment"
            className="bg-blue-600 px-8 py-3 rounded-2xl font-semibold"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about.jpg')" }}
      >
        <div className="bg-white/90 max-w-5xl mx-auto p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p>
            Hindusthan Hospital – Mettupalayam is a trusted multi-speciality
            hospital delivering high-quality medical care with modern
            infrastructure, experienced doctors, and a patient-first approach.
          </p>
        </div>
      </section>

      {/* OUR SPECIALITIES */}
      <section
        id="specialities"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/specialities.jpg')" }}
      >
        <div className="bg-black/60 max-w-6xl mx-auto p-10 rounded-3xl text-white">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Specialities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Emergency Care",
              "Cardiology",
              "Orthopaedics",
              "Mother & Child Care",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/20 p-6 rounded-2xl text-center font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DOCTORS */}
      <section
        id="doctors"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/doctors.jpg')" }}
      >
        <div className="bg-white/90 max-w-6xl mx-auto p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Experienced Physicians",
              "Specialist Surgeons",
              "Caring Medical Team",
            ].map((doc, i) => (
              <div
                key={i}
                className="border p-6 rounded-2xl text-center font-medium"
              >
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section
        id="facilities"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/facilities.jpg')" }}
      >
        <div className="bg-black/60 max-w-6xl mx-auto p-10 rounded-3xl text-white">
          <h2 className="text-3xl font-bold text-center mb-10">Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Quality Beds", "Modern Equipment", "24/7 Emergency"].map(
              (f, i) => (
                <div
                  key={i}
                  className="bg-white/20 p-6 rounded-2xl text-center font-semibold"
                >
                  {f}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MEDICAL SERVICES */}
      <section
        id="services"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services.jpg')" }}
      >
        <div className="bg-white/90 max-w-6xl mx-auto p-10 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Medical Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "General Medicine",
              "General Surgery",
              "Paediatrics",
              "Gynaecology",
              "ICU & Critical Care",
              "Diagnostics",
            ].map((service, i) => (
              <div
                key={i}
                className="border p-6 rounded-2xl text-center font-medium"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="whyus"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/whyus.jpg')" }}
      >
        <div className="bg-black/60 max-w-5xl mx-auto p-10 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <p>
            Trusted doctors • Affordable care • Modern infrastructure • Patient
            comfort
          </p>
        </div>
      </section>

      {/* PATIENT TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/testimonials.jpg')" }}
      >
        <div className="bg-white/90 max-w-5xl mx-auto p-10 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Patient Testimonials</h2>
          <p>
            “Excellent care and very supportive staff. Highly recommended.”
          </p>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section
        id="appointment"
        className="py-28 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/images/appointment.jpg')" }}
      >
        <div className="bg-blue-900/80 max-w-3xl mx-auto p-10 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="mb-6">
            Call us now for immediate medical assistance
          </p>
          <a
            href="tel:+914254223313"
            className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-semibold"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* CONTACT US */}
      <section
        id="contact"
        className="py-24 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <div className="bg-black/70 max-w-4xl mx-auto p-10 rounded-3xl text-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>
            VIP Nagar, Chickadasampalayam, Mettupalayam Road, Tamil Nadu 641304
          </p>
          <p className="mt-2">Phone: +91 425 422 3313</p>
          <p className="mt-6 text-sm">
            © 2026 Hindusthan Hospital – Mettupalayam
          </p>
        </div>
      </section>

    </div>
  );
}
