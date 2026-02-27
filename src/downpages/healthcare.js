
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
FaSearch,
FaUserMd,
FaTransgender,
FaTimes,
} from "react-icons/fa";

import appointmentImg from "../assets/appointment.jpg";

import jaymohan from "../assets/Final/DR. M.R. JAYMOHAN UNNITHAN.jpg";
import sathish from "../assets/Final/DR.  M.SATHISH KUMAR .jpg";
import vaidyanathan from "../assets/Final/DR. P.R.VAIDYNATHAN.jpg";
import balakumar from "../assets/Final/DR. S. BALAKUMAR.jpg";
import vinodh from "../assets/Final/DR. K.VINODH.jpg";
import nagarajan from "../assets/Final/DR. S. NAGARAJAN.jpg";
import senthilkumar from "../assets/Final/DR. M. SENTHILKUMAR.jpg";
import murugesan from "../assets/Final/DR.G. MURUGESAN.jpg";
import madhan from "../assets/Final/DR. N. MADHAN.jpg";
import venkataraman from "../assets/Final/DR. V. VENKATRAMAN.jpg";
import eswaran from "../assets/Final/DR. ESWARAN MOORTHY.jpg";
import srikanth from "../assets/Final/DR. K.SRIKANTH.jpg";
import ksenthil from "../assets/Final/DR.K. SENTHILjpg.jpg";
import ponni from "../assets/Final/DR.PONNI SUNDER.jpg";
import kokila from "../assets/Final/DR.K.KOKILA.jpg";
import gandhimohan from "../assets/Final/DR. R. GANDHIMOHAN.jpg";
import jayakumar from "../assets/Final/DR.R. JAYAKUMAR.jpg";
import saranya from "../assets/Final/DR. S.SARANYA VISHUMATHY.jpg";
import shanumgapriya from "../assets/Final/DR. V. SHANUMGAPRIYA.jpg";
import shanmuga from "../assets/Final/DR. V.P.SHANUMGA SUNDARAM.jpg";
import ramalingam from "../assets/Final/DR. M. RAMALINGAM.jpg";

export default function Healthcare() {

const [filters,setFilters]=useState({
name:"",
speciality:"",
gender:""
});

const [selectedDoctor,setSelectedDoctor]=useState(null);


const doctors=[

{id:1,name:"Dr. M.R. Jaymohan Unnithan",speciality:"Pulmonology",gender:"Male",image:jaymohan},

{id:2,name:"Dr. K. Srikanth",speciality:"Pulmonology",gender:"Male",image:srikanth},

{id:3,name:"Dr. V. Nandagopal",speciality:"Pulmonology",gender:"Male",image:ramalingam},

{id:4,name:"Dr. M. Sathish Kumar",speciality:"Cardiology",gender:"Male",image:sathish},

{id:5,name:"Dr. P.R. Vaidyanathan",speciality:"Cardiology",gender:"Male",image:vaidyanathan},

{id:6,name:"Dr. S. Balakumar",speciality:"General Surgery",gender:"Male",image:balakumar},

{id:7,name:"Dr. V.P. Shanmuga Sundaram",speciality:"General Surgery",gender:"Male",image:shanmuga},

{id:8,name:"Dr. K. Vinodh",speciality:"Orthopaedics",gender:"Male",image:vinodh},

{id:9,name:"Dr. S. Nagarajan",speciality:"Diabetology",gender:"Male",image:nagarajan},

{id:10,name:"Dr. M. Senthil Kumar",speciality:"Diabetology",gender:"Male",image:senthilkumar},

{id:11,name:"Dr. G. Murugesan",speciality:"Neuro Surgery",gender:"Male",image:murugesan},

{id:12,name:"Dr. N. Madhan",speciality:"Neuro Surgery",gender:"Male",image:madhan},

{id:13,name:"Dr. V. Venkataraman",speciality:"ENT",gender:"Male",image:venkataraman},

{id:14,name:"Dr. Eswaran Moorthy",speciality:"ENT",gender:"Male",image:eswaran},

{id:15,name:"Dr. S. Abinaya",speciality:"Obstetrics & Gynaecology",gender:"Female",image:saranya},

{id:16,name:"Dr. Ponni Sunder",speciality:"Obstetrics & Gynaecology",gender:"Female",image:ponni},

{id:17,name:"Dr. K. Kokila",speciality:"Paediatrics",gender:"Female",image:kokila},

{id:18,name:"Dr. R. Gandhimohan",speciality:"Nephrology",gender:"Male",image:gandhimohan},

{id:19,name:"Dr. R. Jayakumar",speciality:"Psychiatry",gender:"Male",image:jayakumar},

{id:20,name:"Dr. M. Ramalingam",speciality:"Urology",gender:"Male",image:ramalingam},

{id:21,name:"Dr. V. Shanumgapriya",speciality:"General Medicine",gender:"Female",image:shanumgapriya}

];


// ⭐ AUTO SPECIALITY DROPDOWN
const specialities=[
...new Set(doctors.map(doc=>doc.speciality))
];


// ⭐ FILTER SEARCH
const filteredDoctors=doctors.filter(d=>{

return(

d.name.toLowerCase().includes(filters.name.toLowerCase()) &&

(filters.speciality==="" ||
d.speciality===filters.speciality) &&

(filters.gender==="" ||
d.gender===filters.gender)

);

});


return(

<div className="font-[Poppins] bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen pt-[9rem] pb-20">

{/* Filters */}

<div className="max-w-7xl mx-auto mt-10 px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-4">

{/* NAME SEARCH */}

<div className="flex items-center border rounded-full px-4 bg-white shadow">

<FaSearch className="mr-2 text-gray-400"/>

<input
placeholder="Search Doctor"
className="w-full py-2 outline-none"
value={filters.name}
onChange={e=>setFilters({...filters,name:e.target.value})}
/>

</div>


{/* SPECIALITY */}

<div className="flex items-center border rounded-full px-4 bg-white shadow">

<FaUserMd className="mr-2 text-gray-400"/>

<select
className="w-full py-2 outline-none bg-transparent"
value={filters.speciality}
onChange={e=>setFilters({...filters,speciality:e.target.value})}
>

<option value="">Speciality</option>

{specialities.map(sp=>(
<option key={sp}>{sp}</option>
))}

</select>

</div>


{/* GENDER */}

<div className="flex items-center border rounded-full px-4 bg-white shadow">

<FaTransgender className="mr-2 text-gray-400"/>

<select
className="w-full py-2 outline-none"
value={filters.gender}
onChange={e=>setFilters({...filters,gender:e.target.value})}
>

<option value="">Gender</option>
<option>Male</option>
<option>Female</option>

</select>

</div>

</div>



{/* DOCTOR CARDS */}

<div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

{filteredDoctors.map((doc,index)=>(

<motion.div
key={doc.id}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.5,delay:index*.1}}
className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 text-center"
>

<motion.img
whileHover={{scale:1.05}}
src={doc.image}
alt={doc.name}
className="w-full h-62 object-cover rounded-xl"
/>

<h3 className="mt-4 font-bold text-xl text-blue-900">

{doc.name}

</h3>

<p className="text-gray-600">

{doc.speciality}

</p>

<div className="mt-5 flex justify-center gap-3">

<button
onClick={()=>setSelectedDoctor(doc)}
className="px-5 py-2 border border-blue-700 text-blue-700 rounded-full">

View Details

</button>

<button
className="px-5 py-2 bg-blue-700 text-white rounded-full">

Book

</button>

</div>

</motion.div>

))}

</div>



{/* MODAL */}

{selectedDoctor &&(

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

<div className="bg-white p-8 rounded-2xl max-w-lg relative">

<button
className="absolute right-4 top-4"
onClick={()=>setSelectedDoctor(null)}>

<FaTimes/>

</button>

<img
src={selectedDoctor.image}
className="w-40 h-40 object-cover rounded-full mx-auto"
/>

<h3 className="text-xl font-bold text-center mt-3">

{selectedDoctor.name}

</h3>

<p className="text-center">

{selectedDoctor.speciality}

</p>

</div>

</div>

)}

</div>

);

}

