import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
FaHandHoldingHeart,

// ✅ ADD THESE ONLY

FaBrain,
FaLungs,
FaProcedures,
FaTooth

} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assets
import hero1 from "../assets/hospital/1920_1080 Green removed.jpg";
import hero2 from "../assets/Equipments/Equipments-1.jpg";
import hero3 from "../assets/Equipments/Equipments-3.jpg";
import cardiology from "../assets/Equipments/Equipments-2.jpg";
import surgery from "../assets/Equipments/Equipments-6.jpg";
import pediatrics from "../assets/team.jpg";
import doctorTeam from "../assets/hospital/1920_1080 Green removed.jpg";
import testimonial from "../assets/testimonial.jpg";
import news1 from "../assets/hero.jpg";
import news2 from "../assets/team.jpg";
import news3 from "../assets/appointment.jpg";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const navigate = useNavigate();

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

dots:false,
arrows:true,
infinite:true,
autoplay:true,
autoplaySpeed:3000,
speed:800,

slidesToShow:3,
slidesToScroll:1,

responsive:[

{
breakpoint:1280,
settings:{
slidesToShow:2
}
},

{
breakpoint:768,
settings:{
slidesToShow:1,
centerMode:true,
centerPadding:"40px"
}
},

{
breakpoint:480,
settings:{
slidesToShow:1,
centerMode:true,
centerPadding:"20px"
}
}

]

};

  return (
    <div className="bg-gray-50 overflow-x-hidden font-sans">

      {/* ================= HERO SECTION (SLIDER) ================= */}
      {/* ================= HERO SECTION (FULL SCREEN FIXED) ================= */}

<section className="relative min-h-[calc(100vh-90px)] flex items-center justify-center overflow-hidden mt-[80px]">

{/* Background Slider */}

<div className="absolute inset-0 z-0">

<Slider {...heroSliderSettings}>

{[hero1, hero2, hero3].map((img,index)=>(

<div
key={index}
className="w-full min-h-[calc(100vh-110px)] relative"
>

<img
src={img}
alt="Hero"
className="w-full h-full object-cover md:object-contain"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-rose-900/40 to-transparent mix-blend-multiply"></div>

</div>

))}

</Slider>

</div>



{/* Hero Content */}

<motion.div

className="relative z-10 text-center px-4 max-w-5xl mx-auto"

initial="hidden"

whileInView="visible"

viewport={{once:true}}

variants={fadeUp}

>

{/* Badge */}

<span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wider mb-80 shadow-lg">

WELCOME TO HINDUSTHAN HOSPITAL 👋

</span>


{/* Heading */}





{/* Description */}

<p className="mt-8 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">

Delivering advanced medical care with a touch of humanity.

</p>



{/* Buttons */}

<div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

<button className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-orange-500 text-white font-bold shadow-xl hover:scale-105 transition">

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
                
             <button
  onClick={() => navigate("./abouttrust")}
  className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1"
>
  More About Us
</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CENTRES OF EXCELLENCE (Glass Cards) ================= */}
      {/* ================= TRENDY OUR SPECIALITIES ================= */}

{/* ================= OUR SPECIALITIES (ROYAL CARE STYLE) ================= */}

{/* ================= OUR SPECIALITIES ================= */}

{/* ================= OUR SPECIALITIES ================= */}

<section className="py-24 bg-gradient-to-b from-white to-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">

Our Medical <span className="text-rose-600">Specialities</span>

</h2>

<p className="text-gray-500 mt-3">

Expert care across advanced departments

</p>

</div>


{(() => {

const departments=[

{ name:"Cardiology",slug:"cardiology",icon:<FaHeartbeat/>},

{ name:"Pulmonology",slug:"pulmonology",icon:<FaLungs/>},

{ name:"Orthopaedics",slug:"orthopaedics",icon:<FaBone/>},

{ name:"Paediatrics",slug:"paediatrics",icon:<FaBaby/>},

{ name:"General Medicine",slug:"general-medicine",icon:<FaUserMd/>},

{ name:"General Surgery",slug:"general-surgery",icon:<FaStethoscope/>},

{ name:"Nephrology",slug:"nephrology",icon:<FaUserMd/>},

{ name:"Urology",slug:"urology",icon:<FaProcedures/>},

{ name:"ENT",slug:"ent",icon:<FaUserMd/>},

// PAGE 2

{ name:"Dermatology",slug:"dermatology",icon:<FaUserMd/>},

{ name:"Dentistry",slug:"dentistry",icon:<FaTooth/>},

{ name:"Radiology",slug:"radiology",icon:<FaMicroscope/>},

{ name:"Psychiatry",slug:"psychiatry",icon:<FaBrain/>},

{ name:"Diabetology",slug:"diabetology",icon:<FaHeartbeat/>},

{ name:"Emergency Care",slug:"emergency-care",icon:<FaAmbulance/>},

{ name:"ICU",slug:"icu",icon:<FaHandHoldingHeart/>},

{ name:"Neonatology",slug:"neonatology",icon:<FaBaby/>},

{ name:"Plastic Surgery",slug:"plastic-surgery",icon:<FaUserMd/>},

// PAGE 3

{ name:"Gastroenterology",slug:"gastroenterology",icon:<FaUserMd/>},

{ name:"Internal Medicine",slug:"internal-medicine",icon:<FaUserMd/>},

{ name:"Oncology",slug:"surgical-oncology",icon:<FaUserMd/>},

{ name:"Anaesthesiology",slug:"anaesthesiology",icon:<FaUserMd/>},

{ name:"Rehabilitation",slug:"rehab",icon:<FaHandHoldingHeart/>},

{ name:"Paediatric Surgery",slug:"paediatric-surgery",icon:<FaUserMd/>},

{ name:"Neuro Surgery",slug:"neurovascular-surgery",icon:<FaBrain/>},

{ name:"Obstetrics & Gynaecology",slug:"obgyn",icon:<FaBaby/>}

];


// Split into pages of 9

const pages=[];

for(let i=0;i<departments.length;i+=9){

pages.push(departments.slice(i,i+9));

}


const settings={

dots:false,

arrows:true,

infinite:true,

autoplay:true,

autoplaySpeed:4500,

speed:1000,

slidesToShow:1,

slidesToScroll:1,

pauseOnHover:true

};


return(

<Slider {...settings}>

{pages.map((group,index)=>(

<div key={index}>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

{group.map((dept,i)=>(

<motion.div

key={i}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.5,delay:i*.05}}

>

<Link

to={`/departments/${dept.slug}`}

className="group relative block rounded-3xl overflow-hidden"

>

{/* Glow Border */}

<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400 via-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>


{/* Card */}

<div className="relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition duration-500 p-10 text-center group-hover:-translate-y-2">

{/* Icon */}

<div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-3xl bg-rose-50 text-rose-600 group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-orange-500 group-hover:text-white transition duration-500">

{dept.icon}

</div>


<h3 className="mt-6 font-bold text-xl tracking-wide text-black-1000 group-hover:text-rose-600 transition">

{dept.name}

</h3>




</div>

</Link>

</motion.div>

))}

</div>

</div>

))}

</Slider>

);

})()}

</div>

</section>



<style>
{`
.slick-prev,
.slick-next {
  width: 45px;
  height: 45px;
  background: white !important;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  z-index: 10;
}

.slick-prev:hover,
.slick-next:hover {
  background: linear-gradient(45deg,#f43f5e,#f97316) !important;
}

.slick-prev:before,
.slick-next:before {
  font-size: 20px;
  color: #111827;
}

.slick-prev:hover:before,
.slick-next:hover:before {
  color: white;
}

.slick-prev {
  left: -60px;
}

.slick-next {
  right: -60px;
}
`}
</style>

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
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-56 sm:h-64 md:h-80 w-full group">
                  <img src={hero2} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" alt="Hospital Interior" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-bold text-xl">State-of-the-art Facilities</div>
                </div>

                {/* Linear Row of Smaller Images */}
                <div className="flex gap-4 flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide px-1">
                  {[
                    { img: hero3, label: "Expert Doctors" },
                    { img: cardiology, label: "Cardiology" },
                    { img: surgery, label: "Surgery" }
                  ].map((item, idx) => (
                    <div key={idx} className="min-w-[120px] sm:min-w-[140px] h-32 rounded-2xl overflow-hidden relative shadow-lg group snap-center flex-shrink-0">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
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
                    <span className="font-semibold">0422 - 4327777</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                    <span>📧</span>
                    <span className="font-semibold">info@hindusthanhospital.com</span>
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
{/* ================= PREMIUM TESTIMONIALS ================= */}

<section className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
Patient <span className="text-rose-600">Testimonials</span>
</h2>
<p className="text-gray-500 mt-4 text-lg">
Real experiences from our valued patients
</p>
</div>

{(() => {

const testimonials = [

{
id:1,
name:"Nandhini Anandhan",
text:"The doctors and nurses were extremely caring. The entire treatment process was smooth and professional."
},

{
id:2,
name:"Saravanan Saro",
text:"The hospital environment is very clean and the doctors explain everything clearly. Highly satisfied."
},

{
id:3,
name:"Punitha",
text:"We have trusted this hospital for years. Their expertise and compassion are truly commendable."
},

{
id:4,
name:"Arun Kumar",
text:"Emergency care response was quick and efficient. Staff handled everything calmly."
},

{
id:5,
name:"Divya Lakshmi",
text:"Excellent maternity care experience. Doctors ensured complete comfort."
},

{
id:6,
name:"Ravi Prakash",
text:"Advanced medical equipment and very experienced specialists."
},

{
id:7,
name:"Keerthana",
text:"Doctors made us feel confident and safe during the treatment."
},

{
id:8,
name:"Manoj Kumar",
text:"ICU care and post-treatment support were exceptional."
},

{
id:9,
name:"Lakshmi Priya",
text:"Very satisfied with pediatric services and friendly doctors."
}

];

const settings = {
dots:false,
arrows:false,
infinite:true,
autoplay:true,
autoplaySpeed:4000,
speed:1000,
slidesToShow:3,
slidesToScroll:1,
pauseOnHover:true,
responsive:[
{
breakpoint:1024,
settings:{ slidesToShow:2 }
},
{
breakpoint:768,
settings:{ slidesToShow:1 }
}
]
};

return(

<Slider {...settings}>

{testimonials.map((item,index)=>(

<div key={item.id} className="px-4">

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:.6}}
whileHover={{y:-6}}
className="
bg-white/80 backdrop-blur-lg
rounded-3xl
p-10
shadow-lg
hover:shadow-2xl
transition-all duration-500
border border-gray-100
relative
h-full
"
>

{/* Decorative Quote */}

<div className="absolute -top-6 left-8 text-6xl text-rose-200 font-serif">
“
</div>

{/* Review Text */}

<p className="text-gray-700 leading-relaxed text-lg italic mt-6">
{item.text}
</p>

{/* Divider */}

<div className="w-12 h-1 bg-rose-500 rounded-full mt-8 mb-6"></div>

{/* Name */}

<h4 className="font-semibold text-gray-900 text-lg">
{item.name}
</h4>

</motion.div>

</div>

))}

</Slider>

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
