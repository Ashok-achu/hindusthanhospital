import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/team.jpg";
import hero3 from "../assets/appointment.jpg";
import cardiology from "../assets/cardiology.jpg";
import surgery from "../assets/surgery.jpg";
import pediatrics from "../assets/pediatrics.jpg";
import doctorTeam from "../assets/team.jpg";
import appointment from "../assets/appointment.jpg";
import testimonial from "../assets/testimonial.jpg";
import news1 from "../assets/hero.jpg";
import news2 from "../assets/team.jpg";
import news3 from "../assets/appointment.jpg";

export default function Home() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  const heroSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const excellenceSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const blogSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialsSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const newsSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (

    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* ================= HERO ================= */}
{/* ================= HERO SECTION (No Gap + Background Image) ================= */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden mt-[-2rem]">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={hero1}
      alt="Hospital Banner"
      className="w-full h-full object-cover brightness-75"
    />
    {/* Overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-left">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
        WELCOME TO{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400">
          HINDUSTHAN HOSPITAL
        </span>
      </h1>

      <div className="relative mt-3 mb-6">
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] w-32 bg-gradient-to-r from-red-600 via-pink-500 to-gray-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <p className="text-gray-200 text-lg sm:text-xl max-w-xl leading-relaxed">
        Delivering compassionate healthcare through innovation, integrity, and excellence.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold rounded-full shadow-lg transition-all">
          Know More
        </button>
        <button className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-red-600 font-semibold rounded-full transition-all">
          Contact Us
        </button>
      </div>
    </motion.div>
  </div>
</section>


      {/* ================= CENTRES OF EXCELLENCE ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
            OUR <span className="text-red-600">CENTRES OF EXCELLENCE</span>
          </h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            Excellence in every department, led by world-class specialists.
          </p>
          <div className="mt-10">
            <Slider {...excellenceSettings}>
              {[cardiology, surgery, pediatrics, doctorTeam].map((img, i) => (
                <div key={i} className="px-3">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                    <img
                      src={img}
                      alt="Speciality"
                      className="w-full h-56 object-cover rounded-t-2xl"
                    />
                    <div className="p-5 text-center">
                      <h3 className="font-semibold text-red-600 text-lg">
                        {["Cardiology", "General Surgery", "Paediatrics", "Orthopaedics"][i]}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Trusted professionals delivering excellence and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Trusted Healthcare for Generations
            </h2>
            <p className="mt-4 text-gray-600">
              Hindusthan Hospital combines innovation, expertise, and compassion
              to deliver holistic healing and unmatched care.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition">
                Book Appointment
              </button>
              <button className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
                Explore Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={doctorTeam}
              alt="Doctors"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= BOOK APPOINTMENT ================= */}
      <section className="py-16 bg-gradient-to-r from-red-50 via-gray-50 to-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="md:w-1/2">
            <img
              src={appointment}
              alt="Book Appointment"
              className="rounded-2xl shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-3">BOOK APPOINTMENT</h3>
            <p className="text-sm mb-6">
              Fill in your details and our team will get in touch with you soon.
            </p>
            <form className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg text-black" />
              <input type="email" placeholder="Email ID" className="w-full p-3 rounded-lg text-black" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg text-black" />
              <textarea placeholder="Your Message" rows="3" className="w-full p-3 rounded-lg text-black"></textarea>
              <button className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-full font-semibold shadow-md transition">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
            TESTIMONIALS
          </h2>
          <Slider {...testimonialsSettings}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
                  <img
                    src={testimonial}
                    alt="Person"
                    className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
                  />
                  <h4 className="text-red-600 font-bold">Patient {i}</h4>
                  <p className="text-gray-500 text-sm">Recovered Patient</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    Hindusthan Hospital staff were caring and professional.
                    I felt confident throughout my treatment.
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
            HINDUSTHAN <span className="text-red-600">NEWS</span>
          </h2>
          <Slider {...newsSettings}>
            {[news1, news2, news3].map((img, i) => (
              <div key={i} className="px-4">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                  <img src={img} alt="News" className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="text-red-600 font-semibold text-lg">
                      Hindusthan Launches Advanced Care Unit
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">05 September 2025</p>
                    <p className="text-gray-600 text-sm mt-3">
                      A new medical wing with modern diagnostic technologies and 24x7 emergency support.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
            OUR <span className="text-red-600">BLOGS</span>
          </h2>
          <p className="text-center text-gray-600 mt-3">
            Insights and advice from our healthcare experts.
          </p>
          <div className="mt-10">
            <Slider {...blogSettings}>
              {[cardiology, surgery, pediatrics].map((img, i) => (
                <div key={i} className="px-4">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition">
                    <img src={img} alt="Blog" className="w-full h-56 object-cover" />
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {["Heart Health", "Surgical Innovations", "Child Care Tips"][i]}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        Learn from our healthcare experts and their latest insights.
                      </p>
                      <button className="mt-4 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full text-sm transition">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Need Immediate Medical Assistance?
        </h2>
        <p className="mt-3 text-gray-100">
          We are available 24x7 to serve you with compassion and care.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-red-700 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
          CONTACT US NOW
        </button>
      </section>
    </div>
  );
}
