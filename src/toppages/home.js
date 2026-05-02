import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat, FaStethoscope, FaBaby, FaBone,
  FaCalendarAlt, FaUser, FaArrowRight, FaUserMd,
  FaAmbulance, FaMicroscope, FaHandHoldingHeart,
  FaBrain, FaLungs, FaProcedures, FaTooth,
  FaBed, FaFlask, FaShieldAlt, FaTrophy,
  FaMedal, FaStar, FaCheckCircle, FaHospital,
  FaSyringe, FaWheelchair
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import doctorTeams  from "../assets/Final/DSC03825.jpg";
import hero1        from "../assets/hospital/1920_1080 Green removed.jpg";
import hero2        from "../assets/Equipments/Equipments-1.jpg";
import hero3        from "../assets/Equipments/Equipments-3.jpg";
import cardiology   from "../assets/Equipments/Equipments-2.jpg";
import surgery      from "../assets/Equipments/Equipments-6.jpg";
import doctorTeam   from "../assets/hospital/1920_1080 Green removed.jpg";
import news1        from "../assets/hero.jpg";
import news2        from "../assets/team.jpg";
import news3        from "../assets/appointment.jpg";

/* ─────────────────────────────────────────
   Animated Counter Hook
───────────────────────────────────────── */
function useCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);
  return count;
}

/* ─────────────────────────────────────────
   Stat Card
───────────────────────────────────────── */
function StatCard({ icon, value, suffix, label, delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const count  = useCounter(value, 2000, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="absolute -top-6 -right-6 w-28 h-28 bg-rose-500 opacity-10 rounded-full" />
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
        style={{ background: "rgba(244,63,94,0.08)" }}>
        <span className="text-rose-600">{icon}</span>
      </div>
      <div className="text-4xl font-extrabold text-gray-900">
        {count.toLocaleString()}<span className="text-rose-500">{suffix}</span>
      </div>
      <p className="text-gray-500 font-medium mt-1">{label}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Departments data
───────────────────────────────────────── */
const DEPARTMENTS = [
  { name:"Cardiology",              slug:"cardiology",            icon:<FaHeartbeat />,        color:"#ef4444", desc:"Advanced heart care & interventional cardiology"      },
  { name:"Pulmonology",             slug:"pulmonology",           icon:<FaLungs />,             color:"#f97316", desc:"Complete respiratory & lung disease management"       },
  { name:"Orthopaedics",            slug:"orthopaedics",          icon:<FaBone />,              color:"#eab308", desc:"Bone, joint & sports injury specialists"              },
  { name:"Paediatrics",             slug:"paediatrics",           icon:<FaBaby />,              color:"#22c55e", desc:"Expert child health & developmental care"             },
  { name:"General Medicine",        slug:"general-medicine",      icon:<FaUserMd />,            color:"#0ea5e9", desc:"Comprehensive primary & internal medicine"            },
  { name:"General Surgery",         slug:"general-surgery",       icon:<FaStethoscope />,       color:"#6366f1", desc:"Minimally invasive & open surgical procedures"        },
  { name:"Nephrology",              slug:"nephrology",            icon:<FaUserMd />,            color:"#8b5cf6", desc:"Kidney disease diagnosis & renal therapy"             },
  { name:"Urology",                 slug:"urology",               icon:<FaProcedures />,        color:"#ec4899", desc:"Urinary tract & male reproductive health"             },
  { name:"ENT",                     slug:"ent",                   icon:<FaUserMd />,            color:"#14b8a6", desc:"Ear, nose & throat surgical specialists"              },
  { name:"Dentistry",               slug:"dentistry",             icon:<FaTooth />,             color:"#f43f5e", desc:"Complete oral health & cosmetic dentistry"            },
  { name:"Radiology",               slug:"radiology",             icon:<FaMicroscope />,        color:"#0284c7", desc:"Advanced diagnostic imaging & interventions"          },
  { name:"Psychiatry",              slug:"psychiatry",            icon:<FaBrain />,             color:"#7c3aed", desc:"Mental health, therapy & behavioural care"            },
  { name:"Diabetology",             slug:"diabetology",           icon:<FaHeartbeat />,         color:"#dc2626", desc:"Diabetes management & metabolic disorders"            },
  { name:"Emergency Care",          slug:"emergency-care",        icon:<FaAmbulance />,         color:"#b91c1c", desc:"24/7 trauma & critical emergency response"            },
  { name:"ICU",                     slug:"icu",                   icon:<FaHandHoldingHeart />,  color:"#0f766e", desc:"Intensive monitoring & critical care support"         },
  { name:"Neonatology",             slug:"neonatology",           icon:<FaBaby />,              color:"#d97706", desc:"Newborn & premature infant specialist care"           },
  { name:"Plastic Surgery",         slug:"plastic-surgery",       icon:<FaUserMd />,            color:"#db2777", desc:"Reconstructive, cosmetic & burn surgery"             },
  { name:"Gastroenterology",        slug:"gastroenterology",      icon:<FaUserMd />,            color:"#16a34a", desc:"Digestive system diseases & endoscopy"               },
  { name:"Internal Medicine",       slug:"internal-medicine",     icon:<FaUserMd />,            color:"#2563eb", desc:"Adult disease diagnosis & long-term care"             },
  { name:"Oncology",                slug:"surgical-oncology",     icon:<FaUserMd />,            color:"#9333ea", desc:"Cancer diagnosis, surgery & oncology care"           },
  { name:"Anaesthesiology",         slug:"anaesthesiology",       icon:<FaUserMd />,            color:"#0369a1", desc:"Perioperative & pain management experts"             },
  { name:"Rehabilitation",          slug:"rehab",                 icon:<FaHandHoldingHeart />,  color:"#15803d", desc:"Physiotherapy & functional recovery programs"        },
  { name:"Paediatric Surgery",      slug:"paediatric-surgery",    icon:<FaUserMd />,            color:"#65a30d", desc:"Surgical care tailored for children & infants"       },
  { name:"Neuro Surgery",           slug:"neurovascular-surgery", icon:<FaBrain />,             color:"#4f46e5", desc:"Brain, spine & complex neurovascular surgery"        },
  { name:"Obstetrics & Gynaecology",slug:"obgyn",                 icon:<FaBaby />,              color:"#e11d48", desc:"Women's health, maternity & gynaecology"             },
];

const PAGE_SIZE = 9;

/* ════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════ */
export default function Home() {
  const navigate = useNavigate();

  const [specPage, setSpecPage] = useState(0);
  const [hovered,  setHovered]  = useState(null);
  const totalPages   = Math.ceil(DEPARTMENTS.length / PAGE_SIZE);
  const currentDepts = DEPARTMENTS.slice(specPage * PAGE_SIZE, specPage * PAGE_SIZE + PAGE_SIZE);

  const heroSliderSettings = {
    dots: false, arrows: false, infinite: true,
    autoplay: true, autoplaySpeed: 4000,
    speed: 1500, fade: true, pauseOnHover: false,
  };

  return (
    <div className="relative overflow-x-hidden font-sans bg-gradient-to-b from-white via-rose-50/30 to-blue-50">

      {/* ── GLOBAL BLOBS ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-rose-200 opacity-30 blur-[160px] rounded-full" />
        <div className="absolute top-[40%] -right-60 w-[700px] h-[700px] bg-blue-200 opacity-30 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-orange-200 opacity-20 blur-[150px] rounded-full" />
      </div>

      {/* ── FLOATING ICONS ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <FaHeartbeat   className="absolute top-20 left-20 text-rose-500 opacity-10 text-[120px] animate-float" />
        <FaStethoscope className="absolute bottom-20 right-20 text-blue-500 opacity-10 text-[140px] animate-float-slow" />
        <FaUserMd      className="absolute top-[40%] right-[30%] text-orange-500 opacity-10 text-[110px] animate-float" />
      </div>

      {/* ════════ HERO ════════ */}
      <section className="relative w-full h-[85vh] md:h-screen pt-[90px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Slider {...heroSliderSettings}>
            {[hero1, hero2, hero3].map((img, i) => (
              <div key={i} className="w-full h-[85vh] md:h-screen relative">
                <img src={img} className="w-full h-full object-cover object-center" alt="" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-rose-900/40 to-transparent" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative z-10 h-full flex items-end justify-center pb-16">
          <button onClick={() => navigate("/appointment")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-600 to-orange-500 text-white font-bold shadow-2xl hover:scale-105 transition">
            Book Appointment
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10 opacity-80">
          <svg viewBox="0 0 1440 100" className="w-full h-[80px]">
            <path d="M0 50 L150 50 L200 20 L250 80 L300 50 L450 50 L500 20 L550 80 L600 50 L1440 50"
              fill="none" stroke="#f43f5e" strokeWidth="3" className="animate-ecg" />
          </svg>
        </div>
      </section>

      {/* ════════ TRANSFORMING HEALTHCARE ════════ */}
      <section className="py-24 bg-white relative">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="relative"
              initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.8 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={doctorTeam} alt="Medical Team"
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">15+</div>
                  <div className="text-sm font-bold text-gray-800">Years of<br />Experience</div>
                </div>
                <p className="text-xs text-gray-500">Trusted by thousands of families for three decades.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.2 }}>
              <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Transforming Healthcare<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">For A Better Tomorrow</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Hindusthan Hospital, we believe in a holistic approach to healing. Our dedicated team of specialists
                utilizes cutting-edge technology to diagnose, treat, and rehabilitate patients with the utmost care and compassion.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether it is complex surgery or routine checkups, our mission is to provide accessible, affordable, and
                high-quality healthcare to every individual.
              </p>
              <ul className="space-y-4 mb-10">
                {["24/7 Emergency & Trauma Care","Advanced Robotic Surgery Units","Comprehensive Diagnostic Services","Patient-Centric Recovery Plans"].map((item,i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate("./abouttrust")}
                className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1">
                More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

     

     

      {/* ════════ PREMIUM MEDICAL SPECIALITIES ════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background:"#0a0a0f" }}>

        {/* background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
            style={{ background:"radial-gradient(circle,#f43f5e,transparent)" }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
            style={{ background:"radial-gradient(circle,#f97316,transparent)" }} />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:"linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize:"80px 80px",
            }} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
            style={{ background:"linear-gradient(135deg,transparent 40%,#f43f5e 100%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* heading */}
          <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
            className="mb-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-rose-500" />
                  <span className="text-rose-400 font-bold tracking-[0.25em] text-xs uppercase">Clinical Excellence</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight">
                  Medical
                  <br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">
                      Specialities
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-rose-500 to-transparent" />
                  </span>
                </h2>
              </div>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed lg:text-right">
                15+ departments staffed by senior consultants, equipped with cutting-edge technology
                for precise diagnosis and world-class treatment.
              </p>
            </div>
          </motion.div>
          

          {/* cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={specPage}
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-24 }}
              transition={{ duration:0.45, ease:"easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {currentDepts.map((dept, i) => (
                <motion.div key={dept.slug}
                  initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.4, delay:i*0.05 }}
                  onMouseEnter={() => setHovered(dept.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-500"
                    style={{
                      background:   hovered===dept.slug ? `linear-gradient(135deg,${dept.color}18,${dept.color}08)` : "rgba(255,255,255,0.03)",
                      borderColor:  hovered===dept.slug ? `${dept.color}60` : "rgba(255,255,255,0.07)",
                      boxShadow:    hovered===dept.slug ? `0 0 40px ${dept.color}25,inset 0 1px 0 ${dept.color}30` : "none",
                    }}
                  >
                    {/* top accent bar */}
                    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                      style={{ background:`linear-gradient(90deg,${dept.color},transparent)` }} />

                    <div className="p-7 flex flex-col gap-4 flex-1">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                          style={{
                            background:`${dept.color}18`, color:dept.color,
                            boxShadow: hovered===dept.slug ? `0 0 24px ${dept.color}40` : "none",
                          }}>
                          {dept.icon}
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                          style={{ background:`${dept.color}20`, color:dept.color }}>
                          <FaArrowRight className="text-xs" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 transition-colors duration-300"
                          style={{ color: hovered===dept.slug ? dept.color : "white" }}>
                          {dept.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                          {dept.desc}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background:`${dept.color}15`, color:dept.color }}>
                          View Department
                        </span>
                        <div className="flex gap-1">
                          {[0,1,2].map(j => (
                            <div key={j} className="w-1 h-1 rounded-full transition-all duration-300"
                              style={{
                                background: hovered===dept.slug ? dept.color : "rgba(255,255,255,0.15)",
                                transitionDelay:`${j*60}ms`,
                                transform:  hovered===dept.slug ? "scale(1.4)" : "scale(1)",
                              }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* pagination */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setSpecPage(i)}>
                  <div className="rounded-full transition-all duration-300"
                    style={{
                      width:  i===specPage ? "36px" : "8px",
                      height: "8px",
                      background: i===specPage ? "linear-gradient(90deg,#f43f5e,#f97316)" : "rgba(255,255,255,0.15)",
                    }} />
                </button>
              ))}
              <span className="text-gray-500 text-sm ml-3">{specPage+1} / {totalPages}</span>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setSpecPage(p => Math.max(0,p-1))} disabled={specPage===0}
                className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                style={{
                  borderColor: specPage===0 ? "rgba(255,255,255,0.1)" : "rgba(244,63,94,0.4)",
                  background:  specPage===0 ? "rgba(255,255,255,0.03)" : "rgba(244,63,94,0.08)",
                }}>
                <FaArrowRight className="text-white rotate-180 text-sm group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={() => setSpecPage(p => Math.min(totalPages-1,p+1))} disabled={specPage===totalPages-1}
                className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                style={{
                  borderColor: specPage===totalPages-1 ? "rgba(255,255,255,0.1)" : "rgba(244,63,94,0.4)",
                  background:  specPage===totalPages-1 ? "rgba(255,255,255,0.03)" : "rgba(244,63,94,0.08)",
                }}>
                <FaArrowRight className="text-white text-sm group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

           
          </div>

        </div>
      </section>
 {/* ════════ MEET OUR DOCTORS ════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Meet Our <span className="text-rose-600">Expert Doctors</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">Dedicated specialists committed to your health and wellbeing</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img src={doctorTeams} alt="Doctors Team"
              className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-bold mb-2">45+ Specialist Doctors</h3>
              <p className="text-lg text-white/90">Providing compassionate and advanced medical care</p>
            </div>
          </div>
        </div>
      </section>
      {/* ════════ OUR FACILITIES ════════ */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:"linear-gradient(rgba(244,63,94,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(244,63,94,0.3) 1px,transparent 1px)",
            backgroundSize:"60px 60px",
          }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            className="text-center mb-16">
            <span className="text-rose-400 font-bold tracking-widest text-sm uppercase mb-2 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Facilities</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg">Everything you need for complete care — under one roof</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon:<FaAmbulance />, title:"24/7 Ambulance",  desc:"Fleet of fully-equipped ambulances with trained paramedics available round the clock.",  link:"/facilities/ambulance",  color:"from-rose-500 to-red-600"      },
              { icon:<FaFlask />,     title:"Blood Bank",       desc:"NABH-accredited blood bank with all blood groups and modern storage infrastructure.",      link:"/facilities/blood-bank", color:"from-red-500 to-rose-600"      },
              { icon:<FaBed />,       title:"Premium Rooms",    desc:"Private, semi-private and general wards equipped with modern amenities for comfort.",      link:"/facilities/rooms",      color:"from-orange-500 to-amber-500"  },
              { icon:<FaShieldAlt />, title:"Insurance Desk",   desc:"Dedicated cashless insurance processing for over 50+ insurance providers.",                link:"/facilities/insurance",  color:"from-blue-500 to-indigo-600"   },
              { icon:<FaSyringe />,   title:"Pharmacy",         desc:"In-house 24/7 pharmacy stocked with all medications and medical supplies.",                link:"/facilities/pharmacy",   color:"from-green-500 to-emerald-600" },
              { icon:<FaWheelchair />,title:"Rehabilitation",   desc:"Comprehensive physiotherapy and rehabilitation centre with experienced therapists.",       link:"/departments/rehab",     color:"from-purple-500 to-violet-600" },
            ].map((f,i) => (
              <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.5, delay:i*0.08 }}
                className="group relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-rose-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-xl mb-6 shadow-lg`}>{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{f.desc}</p>
                <Link to={f.link} className="flex items-center gap-2 text-rose-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HEALTH PACKAGES (SIMPLE) ════════ */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-60" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">
        Master Health Checkup
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Health <span className="text-rose-600">Packages</span>
      </h2>
      <p className="text-gray-500 mt-4 text-lg">
        Click below to explore our complete health checkup packages
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        { name: "Basic Wellness", color: "from-rose-600 to-red-500" },
        { name: "Comprehensive", color: "from-rose-600 to-orange-500" },
        { name: "Executive Plus", color: "from-amber-500 to-yellow-400" },
      ].map((pkg, i) => (
        
        <div
          key={i}
          onClick={() => navigate("/facilities/mhc")}
          className="cursor-pointer group bg-white border rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          
          {/* Icon Circle */}
          <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center text-white text-xl font-bold`}>
            {i + 1}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition">
            {pkg.name}
          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3 text-sm">
            View package details
          </p>

        </div>
      ))}

    </div>

    {/* View All Button */}
    <div className="text-center mt-12">
      <button
        onClick={() => navigate("/facilities/mhc")}
        className="px-8 py-3 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition"
      >
        View All Packages
      </button>
    </div>

  </div>
</section>
 {/* ════════ STATS ════════ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-700 to-orange-600">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage:"radial-gradient(circle at 2px 2px,white 1px,transparent 0)", backgroundSize:"40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            className="text-center mb-16">
            <span className="text-rose-200 font-bold tracking-widest text-sm uppercase mb-2 block">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Numbers That Speak <span className="text-yellow-300">For Themselves</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon:<FaUser />,            value:50000, suffix:"+", label:"Patients Treated",   delay:0   },
              { icon:<FaUserMd />,          value:45,     suffix:"+", label:"Specialist Doctors", delay:0.1 },
              { icon:<FaBed />,             value:150,    suffix:"+", label:"Hospital Beds",       delay:0.2 },
              { icon:<FaHospital />,        value:15,     suffix:"+", label:"Years of Service",    delay:0.3 },
            ].map((s,i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-56 sm:h-64 md:h-80 w-full group">
                  <img src={hero2} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" alt="Hospital" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">State-of-the-art Facilities</div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide px-1">
                  {[{ img:hero3, label:"Expert Doctors" },{ img:cardiology, label:"Cardiology" },{ img:surgery, label:"Surgery" }].map((item,idx) => (
                    <div key={idx} className="min-w-[120px] sm:min-w-[140px] h-32 rounded-2xl overflow-hidden relative shadow-lg group snap-center flex-shrink-0">
                      <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" alt={item.label} />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Redefining Healthcare<br />
                <span className="relative inline-block z-10">Standards
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/50 -z-10 -skew-x-12" />
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We combine state-of-the-art technology with a human touch to provide the best possible care for you and your family.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title:"World-Class Doctors",   icon:<FaUserMd />,           desc:"Expert specialists from around the globe."   },
                  { title:"24/7 Emergency",         icon:<FaAmbulance />,        desc:"Round-the-clock critical care support."      },
                  { title:"Advanced Tech",          icon:<FaMicroscope />,       desc:"Cutting-edge diagnostic equipment."          },
                  { title:"Advanced Hospital Beds", icon:<FaHandHoldingHeart />, desc:"Supporting modern medical care."             },
                ].map((feature,i) => (
                  <motion.div key={i} whileHover={{ y:-5 }}
                    className="p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.2)] hover:border-rose-100 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AWARDS & CERTIFICATIONS ════════ */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:"radial-gradient(circle at 1px 1px,#f43f5e 1px,transparent 0)", backgroundSize:"32px 32px" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-widest text-sm uppercase mb-2 block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Awards & <span className="text-rose-600">Certifications</span>
            </h2>
            <p className="text-gray-500 mt-4 text-lg">Recognised for excellence in patient care and clinical standards</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {[
              { icon:<FaMedal />,    title:"NABH Accredited",     desc:"National Accreditation Board for Hospitals & Healthcare Providers.", color:"from-amber-400 to-yellow-500"  },
              { icon:<FaTrophy />,   title:"CAHO Certified", desc:"Certified for advancing healthcare quality, patient safety, and diagnostic excellence in India and beyond.",    color:"from-rose-500 to-red-500"      },
            ].map((award,i) => (
              <motion.div key={i} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
                transition={{ duration:0.5, delay:i*0.1 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${award.color} rounded-t-3xl`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg`}>{award.icon}</div>
                <div className="text-xs font-bold text-gray-400 mb-1">{award.year}</div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Recognised & Partnered With</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["NABH","CAHO"].map((logo,i) => (
                <motion.div key={i} whileHover={{ scale:1.1 }}
                  className="text-2xl font-extrabold text-gray-300 hover:text-rose-500 transition-colors duration-300 cursor-default">
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ APPOINTMENT CTA ════════ */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-rose-600 to-orange-500 p-8 md:p-16 overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Prioritize Your Health?</h2>
                <p className="text-white/90 text-lg mb-8">Book an appointment online easily and skip the queue. Your health is our top priority.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>📞</span><span className="font-semibold">0422 - 4327777</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>📧</span><span className="font-semibold">info@hindusthanhospital.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl text-gray-800">
                <h3 className="text-xl font-bold mb-4">Quick Appointment</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name"    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
                    <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
                  </div>
                  <textarea placeholder="Tell us about your symptoms" rows="3"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition" />
                  <button className="w-full bg-gray-800 text-white font-bold py-3.5 rounded-lg hover:bg-black transition">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="py-24 sm:py-28 bg-gradient-to-b from-white via-rose-50/30 to-gray-50 overflow-hidden relative">
        <div className="absolute top-20 left-0 w-72 h-72 bg-rose-100 blur-3xl opacity-40 rounded-full" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-orange-100 blur-3xl opacity-40 rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Patient <span className="text-rose-600">Testimonials</span>
            </h2>
            <p className="text-gray-500 mt-4 text-base sm:text-lg">Real experiences from our valued patients</p>
          </div>
          {(() => {
            const testimonials = [
              { id:1, name:"Nandhini Anandhan", rating:5, text:"The doctors and nurses were extremely caring. The entire treatment process was smooth and professional."  },
              { id:2, name:"Saravanan Saro",    rating:4, text:"The hospital environment is very clean and the doctors explain everything clearly. Highly satisfied."       },
              { id:3, name:"Punitha",           rating:5, text:"We have trusted this hospital for years. Their expertise and compassion are truly commendable."             },
              { id:4, name:"Arun Kumar",        rating:4, text:"Emergency care response was quick and efficient. Staff handled everything calmly."                         },
              { id:5, name:"Divya Lakshmi",     rating:5, text:"Excellent maternity care experience. Doctors ensured complete comfort."                                    },
              { id:6, name:"Ravi Prakash",      rating:3, text:"Advanced medical equipment and very experienced specialists."                                               },
              { id:7, name:"Keerthana",         rating:5, text:"Doctors made us feel confident and safe during the treatment."                                             },
              { id:8, name:"Manoj Kumar",       rating:5, text:"ICU care and post-treatment support were exceptional."                                                     },
              { id:9, name:"Lakshmi Priya",     rating:4, text:"Very satisfied with pediatric services and friendly doctors."                                              },
            ];
            const settings = {
              dots:false, arrows:false, infinite:true, autoplay:true,
              autoplaySpeed:4000, speed:900, slidesToShow:3, slidesToScroll:1, pauseOnHover:true,
              responsive:[
                { breakpoint:1024, settings:{ slidesToShow:2 } },
                { breakpoint:768,  settings:{ slidesToShow:1, centerMode:true, centerPadding:"60px" } },
                { breakpoint:480,  settings:{ slidesToShow:1, centerMode:true, centerPadding:"35px" } },
              ],
            };
            return (
              <Slider {...settings}>
                {testimonials.map((item,index) => (
                  <div key={item.id} className="px-2 sm:px-4 py-6">
                    <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
                      transition={{ duration:0.6, delay:index*0.05 }} whileHover={{ y:-8 }}
                      className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-[0_25px_60px_-15px_rgba(244,63,94,0.35)] transition-all duration-500 border border-gray-100 relative h-full min-h-[260px] sm:min-h-[300px] group">
                      <div className="absolute -top-5 left-6 sm:-top-6 sm:left-8 text-6xl sm:text-7xl text-rose-200 font-serif">"</div>
                      <div className="flex gap-1 text-yellow-400 mt-4">
                        {[...Array(item.rating)].map((_,i) => <span key={i} className="text-lg group-hover:scale-110 transition">⭐</span>)}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg italic mt-5">{item.text}</p>
                      <div className="w-14 h-[3px] bg-gradient-to-r from-rose-500 to-orange-400 rounded-full mt-8 mb-6" />
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white font-bold flex items-center justify-center shadow-lg">
                          {item.name.charAt(0)}
                        </div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{item.name}</h4>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            );
          })()}
        </div>
      </section>

      {/* ════════ LATEST NEWS ════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
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
              { img:news1, date:"12 Dec, 2024", category:"Hospital",    title:"New Advanced Cardiac Unit Opening Soon",  desc:"We are expanding our services to serve you better with world-class equipment."                    },
              { img:news2, date:"05 Nov, 2024", category:"Health Tips", title:"5 Tips for a Healthy Heart this Winter",  desc:"Expert advice from our top cardiologists on maintaining heart health during cold weather."         },
              { img:news3, date:"28 Oct, 2024", category:"Community",   title:"Free Health Camp for Senior Citizens",    desc:"Join us for a complimentary checkup camp dedicated to our elderly community members."              },
            ].map((item,i) => (
              <div key={i} className="group relative bg-white rounded-[2rem] border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)] transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative h-60 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs font-bold text-gray-800">
                    <FaCalendarAlt className="text-rose-500" />{item.date}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">{item.category}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <FaUser className="text-gray-300" /><span>Admin</span>
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

      {/* ════════ GLOBAL STYLES ════════ */}
      <style>{`
        @keyframes float     { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-25px)} }
        @keyframes floatSlow { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-40px)} }
        .animate-float      { animation:float 6s ease-in-out infinite; }
        .animate-float-slow { animation:floatSlow 10s ease-in-out infinite; }
        @keyframes ecg { 0%{stroke-dashoffset:1000} 100%{stroke-dashoffset:0} }
        .animate-ecg { stroke-dasharray:1000; stroke-dashoffset:1000; animation:ecg 3s linear infinite; }
        .slick-dots li button:before { font-size:12px; color:#cbd5e1; }
        .slick-dots li.slick-active button:before { color:#f43f5e; }
      `}</style>

    </div>
  );
}