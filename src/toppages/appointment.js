import React,{useState} from "react";
import { motion } from "framer-motion";

import appointmentHero from "../assets/appointment.jpg";

export default function Appointment(){

const [form,setForm]=useState({

name:"",
phone:"",
department:"",
doctor:"",
date:"",
message:""

});


const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

});

};


const handleSubmit=(e)=>{

e.preventDefault();

if(!form.name || !form.phone){

alert("Please fill required fields");

return;

}


const message = `Appointment Request

Name : ${form.name}

Phone : ${form.phone}

Department : ${form.department}

Doctor : ${form.doctor}

Date : ${form.date}

Message : ${form.message}

`;

window.open(

`https://wa.me/916380015975?text=${encodeURIComponent(message)}`,

"_blank"

);

};


return(

<div className="pt-[9rem] pb-24 bg-gray-50 font-[Poppins]">


{/* HERO */}

<section className="max-w-7xl mx-auto px-6">

<div className="relative rounded-3xl overflow-hidden shadow-xl">

<img
src={appointmentHero}
className="w-full h-64 md:h-80 object-cover brightness-75"
/>

<div className="absolute inset-0 bg-blue-900/70 flex items-center">

<h1 className="ml-8 text-white text-4xl md:text-5xl font-extrabold">

Book Appointment

</h1>

</div>

</div>

</section>




{/* FORM */}

<section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">

<motion.form

onSubmit={handleSubmit}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.6}}

className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-6"

>

<h2 className="text-2xl sm:text-3xl font-bold text-gray-900">

Quick Appointment Booking

</h2>


{/* NAME + PHONE */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<input

name="name"

placeholder="Patient Name *"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4 outline-none focus:ring-2 focus:ring-rose-500"

/>


<input

name="phone"

type="tel"

placeholder="Mobile Number *"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4 outline-none focus:ring-2 focus:ring-rose-500"

/>

</div>



{/* DEPARTMENT */}

<select

name="department"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4"

>

<option value="">Select Department</option>

<option>Anaesthesiology</option>
<option>Cardiology</option>
<option>Dermatology</option>
<option>Dentistry</option>
<option>Diabetology</option>
<option>Emergency Care</option>
<option>ENT</option>
<option>General Medicine</option>
<option>General Surgery</option>
<option>Gastroenterology</option>
<option>Internal Medicine</option>
<option>ICU</option>
<option>Neonatology</option>
<option>Neuro & Vascular Surgery</option>
<option>Nephrology</option>
<option>Obstetrics & Gynaecology</option>
<option>Orthopaedics</option>
<option>Rehabilitation</option>
<option>Paediatrics</option>
<option>Paediatric Surgery</option>
<option>Psychiatry</option>
<option>Plastic Surgery</option>
<option>Pulmonology</option>
<option>Radiology</option>
<option>Surgical Oncology</option>
<option>Urology</option>

</select>



{/* DOCTOR */}

<input

name="doctor"

placeholder="Preferred Doctor (Optional)"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4"

/>



{/* DATE */}

<input

type="date"

name="date"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4"

/>



{/* MESSAGE */}

<textarea

name="message"

placeholder="Symptoms / Message"

rows="4"

onChange={handleChange}

className="w-full border rounded-xl p-3 sm:p-4"

/>



{/* BUTTON */}

<button

type="submit"

className="w-full bg-gradient-to-r from-rose-600 to-orange-500 text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition"

>

Submit Appointment

</button>

</motion.form>

</section>

</div>

);

}