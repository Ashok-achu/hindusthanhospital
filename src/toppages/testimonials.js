import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import hero from "../assets/hero.jpg";
import timg from "../assets/team.jpg";

export default function Testimonials() {

  /* ================= REAL REVIEWS ================= */

  const items = [
    {
      id: 1,
      name: "Nandhini Anandhan",
      role: "C-Section Patient",
      text: "Excellent care from Dr. Abinaya and the entire team. The experience was comforting and professional.",
    },
    {
      id: 2,
      name: "Saravanan Saro",
      role: "Pulmonology Patient",
      text: "Dr. Srikanth explains treatments clearly and ensures patients feel confident and comfortable.",
    },
    {
      id: 3,
      name: "Gowthame Jahan",
      role: "Patient Attender",
      text: "Grateful for the honesty and support shown by the staff in safely returning my lost gold ring.",
    },
    {
      id: 4,
      name: "Vibha A",
      role: "Urology Patient",
      text: "Special thanks to Dr. Ramalingam and Dr. Senthil Kumar for compassionate and exceptional treatment.",
    },
    {
      id: 5,
      name: "Shikha Gouthaman",
      role: "Family Member",
      text: "Dr. K. Srikanth has treated my mother for six years. Truly one of the best pulmonologists.",
    },
    {
      id: 6,
      name: "Punitha",
      role: "Surgery Patient",
      text: "We trusted Dr. V.P. Shanmugasundaram for decades. His care and expertise are truly a blessing.",
    },
  ];

  return (

<div className="pt-[9rem] pb-24 font-[Poppins] bg-gradient-to-b from-gray-50 to-blue-50/40 min-h-screen">

{/* ================= HERO ================= */}

<section className="max-w-7xl mx-auto px-6">

<div className="relative overflow-hidden rounded-3xl shadow-2xl">

<img
src={hero}
alt="Testimonials"
className="w-full h-72 md:h-[24rem] object-cover brightness-75"
/>

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">

<div className="text-white ml-6 md:ml-14">

<motion.h1
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: .7 }}
className="text-3xl md:text-5xl font-extrabold tracking-wide"
>

Patient Testimonials

</motion.h1>

<motion.p
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: .8 }}
className="text-gray-200 mt-4 md:text-lg max-w-xl"
>

Real experiences shared by patients who trusted Hindusthan Hospital.

</motion.p>

</div>

</div>

</div>

</section>


{/* ================= TESTIMONIALS ================= */}

<section className="max-w-7xl mx-auto px-6 mt-16">

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

{items.map((it,index)=> (

<motion.div
key={it.id}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}

transition={{duration:.6,delay:index*.1}}

whileHover={{
y:-8,
scale:1.02
}}

className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-7 border border-gray-200 hover:shadow-blue-200/60 transition-all duration-500 relative overflow-hidden"
>

{/* Glow Hover */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-100/20 via-transparent to-blue-200/20"/>

{/* Quote */}
<FaQuoteLeft className="absolute right-6 top-6 text-blue-700 opacity-20 text-4xl"/>


{/* Profile */}

<div className="flex items-center gap-4">

<img
src={timg}
alt={it.name}
className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover group-hover:scale-105 transition"
/>

<div>

<h4 className="font-semibold text-blue-900 text-lg">

{it.name}

</h4>

<p className="text-gray-500 text-sm">

{it.role}

</p>

</div>

</div>


{/* Stars */}

<div className="flex gap-1 mt-4 text-yellow-400">

<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>

</div>


{/* Text */}

<p className="text-gray-700 mt-4 leading-relaxed">

{it.text}

</p>

</motion.div>

))}

</div>

</section>



{/* ================= CTA ================= */}

<section className="max-w-7xl mx-auto px-6 mt-24">

<div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-10 flex flex-col md:flex-row gap-10 items-center">

<img
src={timg}
alt="appointment"
className="w-full md:w-80 h-60 object-cover rounded-2xl shadow-xl"
/>


<div className="flex-1">

<h3 className="text-2xl md:text-3xl font-semibold text-blue-900">

Need Trusted Medical Care?

</h3>

<p className="text-gray-700 mt-4">

Our expert doctors and compassionate staff are here to provide the best healthcare experience for you and your loved ones.

</p>

<button className="mt-7 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white font-semibold px-9 py-3 rounded-full shadow-lg transition hover:scale-105">

MAKE APPOINTMENT

</button>

</div>

</div>

</section>

</div>

  );
}