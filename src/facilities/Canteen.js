import React from "react";
import { motion } from "framer-motion";
import canteenImg from "../assets/hospital/canteen.jpg";
import {
FaUtensils,
FaLeaf,
FaAppleAlt,
FaClock,
FaUserNurse,
} from "react-icons/fa";

export default function Canteen() {

const highlights = [
{
icon:<FaLeaf />,
title:"Hygienic Preparation",
desc:"Strict hygiene standards are followed with regular quality checks to ensure safe and clean food."
},
{
icon:<FaAppleAlt />,
title:"Nutritious Meals",
desc:"Balanced meals prepared under dietary guidance to support patient recovery and wellness."
},
{
icon:<FaUtensils />,
title:"Variety of Food",
desc:"South Indian, North Indian and light meals available for patients, visitors, and staff."
},
{
icon:<FaClock />,
title:"Timely Service",
desc:"Meals and refreshments are served on time to meet patient and attendant needs."
},
{
icon:<FaUserNurse />,
title:"Patient-Focused Diet",
desc:"Special diet plans available based on medical advice and nutritional requirements."
},
];

return(
<div className="pt-[9rem] pb-24 bg-gradient-to-b from-orange-50 to-white font-[Poppins]">

{/* HERO */}
<section className="max-w-7xl mx-auto px-6">

<div className="relative rounded-3xl overflow-hidden shadow-xl">

<img
src={canteenImg}
alt="Hospital Canteen"
className="w-full h-96 object-cover brightness-75"
/>

<div className="absolute inset-0  flex items-center justify-center">

<h1 className="text-white text-5xl font-extrabold">
Hospital Canteen
</h1>

</div>

</div>

</section>

{/* INTRO */}

<section className="max-w-7xl mx-auto px-6 mt-16">

<div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-orange-600">

<h2 className="text-3xl font-bold text-orange-700">
Hygienic, Nutritious & Patient-Friendly Food
</h2>

<p className="text-gray-700 mt-4 leading-7 text-lg">
The Hindusthan Hospital Canteen provides hygienic and nutritious meals for patients, attendants, and hospital staff. Special care is taken to maintain cleanliness and nutritional value in every meal.
</p>

</div>

</section>

{/* HIGHLIGHTS */}

<section className="max-w-7xl mx-auto px-6 mt-20">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

{highlights.map((item,index)=>(
<div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

<div className="flex items-center gap-4 mb-4 text-orange-600">
<div className="text-3xl">{item.icon}</div>
<h3 className="text-xl font-bold">{item.title}</h3>
</div>

<p className="text-gray-600 leading-7">
{item.desc}
</p>

</div>
))}

</div>

</section>

</div>
);

}