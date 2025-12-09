import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/h1.jpg";
import hero3 from "../assets/h2.jpg";
import cardiology from "../assets/team.jpg";
import surgery from "../assets/team.jpg";
import pediatrics from "../assets/team.jpg";
import doctorTeam from "../assets/h12.jpg";
import appointment from "../assets/h3.jpg";
import testimonial from "../assets/testimonial.jpg";
import news1 from "../assets/hero.jpg";
import news2 from "../assets/team.jpg";
import news3 from "../assets/appointment.jpg";

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // 🔥 Smart responsive optimized slider config
  const mobileSlider = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2600,
    swipeToSlide: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const multiSlider = {
    ...mobileSlider,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 768, settings: { slidesToShow: 1 }},
    ],
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 pb-20 overflow-hidden">

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[68vh] sm:h-[78vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={hero1} alt="Hospital" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 container px-5 sm:px-10 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-snug">
            WELCOME TO{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              HINDUSTHAN HOSPITAL
            </span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg mt-3 max-w-xl">
            Delivering compassionate healthcare through innovation & excellence.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm shadow-lg">
              Know More
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-red-600 px-6 py-2 rounded-full text-sm transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========== CENTRES OF EXCELLENCE ========== */}
      <section className="py-14 bg-white slider-section">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">
          OUR <span className="text-red-600">CENTRES OF EXCELLENCE</span>
        </h2>

        <div className="mt-10 px-4">
          <Slider {...multiSlider}>
            {[cardiology, surgery, pediatrics, doctorTeam].map((img, i) => (
              <div key={i} className="slide-card">
                <div className="rounded-2xl shadow-lg bg-white overflow-hidden">
                  <img src={img} className="w-full h-44 sm:h-56 object-cover" alt="" />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-red-600">
                      {["Cardiology","General Surgery","Paediatrics","Orthopaedics"][i]}
                    </h3>
                    <p className="text-gray-600 text-sm slide-card-text mt-2">
                      Expert patient-focused medical excellence.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 bg-gray-50">
        <div className="px-6 md:px-14 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3">
            {[hero2, hero3, cardiology, surgery].map((src,i)=>
              <img key={i} src={src} className="rounded-xl object-cover shadow-md h-32 sm:h-40 w-full"/>
            )}
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">WHY CHOOSE US?</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✔ World-class doctors</li>
              <li>✔ 24x7 Emergency Response</li>
              <li>✔ Advanced Medical Technology</li>
              <li>✔ Patient-centric care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== APPOINTMENT FORM ========== */}
      <section className="py-14 bg-gradient-to-r from-red-50 to-white">
        <div className="container px-6 md:flex gap-10">
          <img src={appointment} alt="" className="rounded-xl shadow-md w-full md:w-1/2" />

          <div className="bg-red-600 text-white p-6 sm:p-8 rounded-xl shadow-md w-full md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-3xl font-semibold mb-4">BOOK APPOINTMENT</h3>
            <input className="w-full p-3 rounded-lg text-black mb-3" placeholder="Full Name"/>
            <input className="w-full p-3 rounded-lg text-black mb-3" placeholder="Email"/>
            <input className="w-full p-3 rounded-lg text-black mb-3" placeholder="Phone"/>
            <textarea className="w-full p-3 rounded-lg text-black mb-3" placeholder="Message"/>
            <button className="bg-white text-red-600 font-semibold py-3 px-6 rounded-full shadow-md">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-14 bg-gray-50 slider-section">
        <h2 className="text-center text-2xl font-bold mb-6">TESTIMONIALS</h2>

        <Slider {...mobileSlider}>
          {[1,2,3].map((i)=>(
            <div key={i} className="slide-card px-3">
              <div className="bg-white rounded-2xl shadow-md p-6 text-center">
                <img src={testimonial} className="w-16 h-16 rounded-full mx-auto mb-3"/>
                <h4 className="text-red-600 font-bold">Patient {i}</h4>
                <p className="text-gray-600 text-sm slide-card-text mt-2">
                  Great experience, caring staff & excellent treatment.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ========== NEWS ========== */}
      <section className="py-14 bg-white slider-section">
        <h2 className="text-center text-2xl font-bold">LATEST NEWS</h2>

        <Slider {...multiSlider}>
          {[news1, news2, news3].map((img, i)=>(
            <div key={i} className="slide-card">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={img} className="w-full h-44 object-cover"/>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-red-600">Hospital News Update</h3>
                  <p className="text-sm text-gray-600 mt-2">Latest medical advancements and updates.</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ========== BLOGS ========== */}
      <section className="py-14 bg-gray-50 slider-section">
        <h2 className="text-center text-2xl font-bold">
          OUR <span className="text-red-600">BLOGS</span>
        </h2>

        <Slider {...multiSlider}>
          {[cardiology, surgery, pediatrics].map((img, i)=>
            <div key={i} className="slide-card">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img src={img} className="w-full h-46 object-cover"/>
                <div className="p-5">
                  <h3 className="text-gray-800 font-bold text-lg">
                    {["Heart Health","Surgical Innovations","Child Wellness"][i]}
                  </h3>
                  <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full text-sm mt-3">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          )}
        </Slider>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-14 bg-red-600 text-white text-center">
        <h2 className="text-xl sm:text-3xl font-bold">Need Immediate Assistance?</h2>
        <button className="mt-5 bg-white text-red-700 px-6 py-3 rounded-full shadow-md">
          CONTACT NOW
        </button>
      </section>

      {/* ========== MOBILE CTA BAR ========== */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex md:hidden z-50">
        <a href="tel:+919876543210" className="flex-1 py-2 text-center text-red-600 font-semibold text-xs">📞 Call</a>
        <a href="https://wa.me/919876543210" className="flex-1 py-2 text-center text-green-600 font-semibold text-xs">💬 WhatsApp</a>
        <a href="/book" className="flex-1 py-2 text-center bg-red-600 text-white rounded-t-xl font-semibold text-xs">Book</a>
      </div>

      {/* MOBILE STYLES FIX */}
      <style>{`
        @media (max-width: 768px) {
          .slider-section { padding: 0 10px; }
          .slide-card { width: 92% !important; margin: auto; }
          .slide-card img { height: 180px !important; }
          .slide-card-text { font-size: 13px; }
        }
      `}</style>
    </div>
  );
}
