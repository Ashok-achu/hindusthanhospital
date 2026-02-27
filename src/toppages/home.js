import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaStethoscope,
  FaBaby,
  FaBone,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaUserMd,
  FaAmbulance,
  FaMicroscope,
  FaHandHoldingHeart
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/h1.jpg";
import hero3 from "../assets/h2.jpg";
import cardiology from "../assets/team.jpg";
import surgery from "../assets/team.jpg";
import pediatrics from "../assets/team.jpg";
import doctorTeam from "../assets/h12.jpg";
import testimonial from "../assets/testimonial.jpg";
import news1 from "../assets/hero.jpg";
import news2 from "../assets/team.jpg";
import news3 from "../assets/appointment.jpg";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const heroSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    fade: true,
    pauseOnHover: false,
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden font-sans">

      {/* ================= HERO SECTION (SLIDER) ================= */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Slider {...heroSliderSettings}>
            {[hero1, hero2, hero3].map((img, index) => (
              <div key={index} className="w-full h-[85vh] relative">
                <img src={img} alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-rose-900/40 to-transparent mix-blend-multiply"></div>
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wider mb-6 shadow-lg">
            WELCOME TO HINDUSTHAN HOSPITAL 👋
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
            Healing Hands, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-orange-200">
              Caring Hearts
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Delivering advanced medical care with a touch of humanity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-orange-500 text-white font-bold shadow-xl transition">
              Book Appointment
            </button>
            <Link
              to="/mettupalayam"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white hover:text-rose-600 transition shadow-lg"
            >
              Explore Mettupalayam Branch
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ================= TRANSFORMING HEALTHCARE (New Section) ================= */}
      <section className="py-24 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Image Composition */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={doctorTeam} alt="Medical Team" className="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 w-48 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">25+</div>
                  <div className="text-sm font-bold text-gray-800">Years of<br />Experience</div>
                </div>
                <p className="text-xs text-gray-500">Trusted by thousands of families for three decades.</p>
              </div>
            </motion.div>

            {/* RIGHT: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Transforming Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">For A Better Tomorrow</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Hindusthan Hospital, we believe in a holistic approach to healing. Our dedicated team of specialists utilizes cutting-edge technology to diagnose, treat, and rehabilitate patients with the utmost care and compassion.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it is complex surgery or routine checkups, our mission is to provide accessible, affordable, and high-quality healthcare to every individual. We are not just a hospital; we are a partner in your journey to wellness.
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-10">
                {[
                  "24/7 Emergency & Trauma Care",
                  "Advanced Robotic Surgery Units",
                  "Comprehensive Diagnostic Services",
                  "Patient-Centric Recovery Plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✔</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1">
                More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CENTRES OF EXCELLENCE (Glass Cards) ================= */}
      <section className="py-20 relative bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Centres of <span className="text-rose-500">Excellence</span>
            </h2>
            <p className="text-gray-500 mt-2">Specialized care for every need</p>
          </div>

          <Slider {...sliderSettings} className="pb-10">
            {[
              { img: cardiology, title: "Cardiology", desc: "Advanced heart care & surgery", icon: <FaHeartbeat /> },
              { img: surgery, title: "Surgery", desc: "Minimally invasive procedures", icon: <FaStethoscope /> },
              { img: pediatrics, title: "Pediatrics", desc: "Care for your little ones", icon: <FaBaby /> },
              { img: doctorTeam, title: "Orthopaedics", desc: "Bone & Joint specialized care", icon: <FaBone /> },
            ].map((item, i) => (
              <div key={i} className="px-4 py-6">
                <div className="group relative bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)] border border-transparent hover:border-rose-100">

                  {/* Image Section with Curve */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute -bottom-6 right-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 z-10 border-4 border-gray-50 text-3xl text-rose-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="pt-10 pb-8 px-8 relative">
                    <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <button className="text-rose-500 font-bold text-sm tracking-wide group-hover:underline">
                        View Specialists
                      </button>
                      <span className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all cursor-pointer">
                        ➜
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (Redesigned) ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image Composition (Linear Vertical) */}
            <div className="relative order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                {/* Image 1: Main Large Image */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-64 md:h-80 w-full group">
                  <img src={hero2} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" alt="Hospital Interior" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">State-of-the-art Facilities</div>
                </div>

                {/* Linear Row of Smaller Images */}
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
                  {[
                    { img: hero3, label: "Expert Doctors" },
                    { img: cardiology, label: "Cardiology" },
                    { img: surgery, label: "Surgery" }
                  ].map((item, idx) => (
                    <div key={idx} className="min-w-[140px] h-32 rounded-2xl overflow-hidden relative shadow-lg group snap-center flex-shrink-0">
                      <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" alt={item.label} />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Redefining Healthcare <br />
                <span className="relative inline-block z-10">
                  Standards
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/50 -z-10 -skew-x-12"></div>
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We combine state-of-the-art technology with a human touch to provide the best possible care for you and your family. Experience world-class medical excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "World-Class Doctors", icon: <FaUserMd />, desc: "Expert specialists from around the globe." },
                  { title: "24/7 Emergency", icon: <FaAmbulance />, desc: "Round-the-clock critical care support." },
                  { title: "Advanced Tech", icon: <FaMicroscope />, desc: "Cutting-edge diagnostic equipment." },
                  { title: "Advanced Hospital Beds", icon: <FaHandHoldingHeart />, desc: "Supporting modern medical care" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.2)] hover:border-rose-100 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT CTA ================= */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-rose-600 to-orange-500 p-8 md:p-16 overflow-hidden shadow-2xl text-white">

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Prioritize Your Health?</h2>
                <p className="text-white/90 text-lg mb-8">Book an appointment online easily and skip the queue. Your health is our top priority.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>📞</span>
                    <span className="font-semibold">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>📧</span>
                    <span className="font-semibold">help@hindusthan.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl text-gray-800">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
                    <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
                  </div>
                  <textarea placeholder="Tell us about your symptoms" rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"></textarea>
                  <button className="w-full bg-gray-800 text-white font-bold py-3.5 rounded-lg hover:bg-black transition">
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS (Chat Bubbles) ================= */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50/40 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-16">
      Happy <span className="text-blue-700">Stories</span>
    </h2>

    {/* Testimonials Data */}
    {(() => {
      const testimonials = [
        {
          id: 1,
          name: "Nandhini Anandhan",
          role: "C-Section Patient",
          text: "Excellent care from Dr. Abinaya and the entire team. The experience was comforting and professional."
        },
        {
          id: 2,
          name: "Saravanan Saro",
          role: "Pulmonology Patient",
          text: "Dr. Srikanth explains everything clearly and ensures patients feel confident and relaxed."
        },
        {
          id: 3,
          name: "Punitha",
          role: "Surgery Patient",
          text: "We trusted Dr. V.P. Shanmugasundaram for decades. His expertise and kindness are unmatched."
        }
      ];

      return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 relative border border-gray-100"
            >

              {/* Decorative Quote */}
              <div className="absolute -top-6 left-6 bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-xl">
                “
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mt-4 mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Text */}
              <p className="text-gray-600 italic leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      );
    })()}

  </div>
</section>

      {/* ================= LATEST NEWS (Youthful & Vibrant) ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-rose-500 font-bold tracking-wider text-sm uppercase mb-2 block">Updates & Insights</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">News</span>
              </h2>
            </div>
            <a href="/news" className="group flex items-center gap-2 text-gray-500 hover:text-rose-600 font-bold transition-colors">
              View All Articles
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-rose-100 group-hover:text-rose-600 transition-all">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: news1, date: "12 Dec, 2024", category: "Hospital", title: "New Advanced Cardiac Unit Opening Soon", desc: "We are expanding our services to serve you better with world-class equipment." },
              { img: news2, date: "05 Nov, 2024", category: "Health Tips", title: "5 Tips for a Healthy Heart this Winter", desc: "Expert advice from our top cardiologists on maintaining heart health during cold weather." },
              { img: news3, date: "28 Oct, 2024", category: "Community", title: "Free Health Camp for Senior Citizens", desc: "Join us for a complimentary checkup camp dedicated to our elderly community members." }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white rounded-[2rem] border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)] transition-all duration-300 overflow-hidden flex flex-col h-full">

                {/* Image Wrapper */}
                <div className="relative h-60 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold text-gray-800">
                    <FaCalendarAlt className="text-rose-500" />
                    {item.date}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <FaUser className="text-gray-300" />
                      <span>Admin</span>
                    </div>
                    <button className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:text-rose-600 transition-colors">
                      Read More <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Styles for Slider dots/etc if needed */}
      <style>{`
        .slick-dots li button:before { font-size: 12px; color: #cbd5e1; }
        .slick-dots li.slick-active button:before { color: #f43f5e; }
      `}</style>
    </div>
  );
}
