import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

/* ================= EQUIPMENT IMAGE IMPORTS ================= */

import eq1 from "../assets/Equipments/Equipments-1.jpg";
import eq2 from "../assets/Equipments/Equipments-2.jpg";
import eq3 from "../assets/Equipments/Equipments-3.jpg";
import eq4 from "../assets/Equipments/Equipments-4.jpg";
import eq5 from "../assets/Equipments/Equipments-5.jpg";
import eq6 from "../assets/Equipments/Equipments-6.jpg";
import eq7 from "../assets/Equipments/Equipments-7.jpg";
import eq8 from "../assets/Equipments/Equipments-8.jpg";
import eq9 from "../assets/Equipments/Equipments-9.jpg";
import eq10 from "../assets/Equipments/Equipments-10.jpg";
import eq11 from "../assets/Equipments/Equipments-11.jpg";
import eq12 from "../assets/Equipments/Equipments-12.jpg";
import eq13 from "../assets/Equipments/Equipments-13.jpg";
import cardiologyImg from "../assets/Equipments/Cardiology_.jpg";
import diabetologyImg from "../assets/Equipments/Diabteology_.jpg";
import emergencyImg from "../assets/Equipments/Emergency medicine_.jpg";
import endoscopyImg from "../assets/Equipments/ENDOSCOPY.jpg";
import emrImg from "../assets/Equipments/EMR_.jpg";
import labImg from "../assets/Equipments/Laboratory_.jpg";
import paediatricsImg from "../assets/Equipments/Paediatrics.jpg";
import gynaeImg from "../assets/Equipments/Gynaecology.jpg";
import pulmonologyImg from "../assets/Equipments/PULMONOLOGY_.jpg";
import nicuImg from "../assets/Equipments/NICU PHOTOTHERAPY.jpg";
import nephrologyImg from "../assets/Equipments/Nephrology_(1).jpg";
import physioImg from "../assets/Equipments/Physiotherapy_.jpg";
import pftImg from "../assets/Equipments/PFT PROCEDURE_.jpg";
import ecgImg from "../assets/Equipments/ECG.jpg";
import radiologyImg from "../assets/Equipments/RADIANT WARMER_.jpg";
import spirometerImg from "../assets/Equipments/SPIROMETER.jpg";

/* ================= IMAGE LIST ================= */

const mediaItems = [
eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8,eq9,eq10,eq11,eq12,eq13,cardiologyImg,
  diabetologyImg,
  emergencyImg,
  endoscopyImg,
  emrImg,
  labImg,
  paediatricsImg,
  gynaeImg,
  pulmonologyImg,
  nicuImg,
  nephrologyImg,
  physioImg,
  pftImg,
  ecgImg,
  radiologyImg,
  spirometerImg
];

export default function Media(){

const [selectedImage,setSelectedImage] = useState(null);

return(

<div className="bg-white min-h-screen pt-24">

{/* ================= HEADER ================= */}

<section className="py-16 text-center bg-gray-900">

<h1 className="text-4xl md:text-5xl font-bold text-white">
Hospital <span className="text-red-500">Equipments</span>
</h1>

<p className="text-gray-300 mt-4 max-w-xl mx-auto">
Explore the advanced medical equipment and technologies used in our hospital to deliver world-class healthcare services.
</p>

</section>


{/* ================= GALLERY ================= */}

<section className="py-20 max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{mediaItems.map((img,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="cursor-pointer rounded-xl overflow-hidden shadow-lg"
onClick={()=>setSelectedImage(img)}
>

<img
src={img}
alt="Hospital Equipment"
className="w-full h-[280px] object-cover"
/>

</motion.div>

))}

</div>

</section>



{/* ================= FULL SCREEN VIEWER ================= */}

{selectedImage && (

<div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]">

{/* CLOSE BUTTON */}

<button
onClick={()=>setSelectedImage(null)}
className="absolute top-6 right-8 text-white text-4xl hover:text-red-500 transition"
>
<FaTimes/>
</button>

{/* IMAGE */}

<img
src={selectedImage}
alt="Equipment"
className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg"
/>

</div>

)}

</div>

);
}