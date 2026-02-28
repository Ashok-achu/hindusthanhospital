import { useState } from "react";
import {
FaWhatsapp,
FaInstagram,
FaPhoneAlt,
FaComments,
FaTimes,
FaYoutube
} from "react-icons/fa";

export default function FloatingSocial(){

const whatsappNumber="918925868782";

const [chatOpen,setChatOpen]=useState(false);

const [step,setStep]=useState("menu");

const [user,setUser]=useState({

name:"",
phone:"",
department:"",
symptoms:""

});


// ================= EMAIL SEND =================

const sendEmail = async () => {

try{

await fetch("http://localhost:5000/send-appointment",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(user)

});

alert("Appointment Request Sent Successfully ✅");

setChatOpen(false);

setStep("menu");

setUser({

name:"",
phone:"",
department:"",
symptoms:""

});

}catch(err){

alert("Something went wrong");

}

};


// ================= FLOATING SOCIAL =================

return(

<>

{/* ================= DESKTOP FLOAT ================= */}

<div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[999] flex-col gap-4">

<a href="tel:+914224327777"
className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition">

<FaPhoneAlt size={20}/>

</a>

<a
href={`https://wa.me/${whatsappNumber}`}
target="_blank"
rel="noopener noreferrer"
className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition">

<FaWhatsapp size={20}/>

</a>

<a
href="https://www.instagram.com/hindusthan_hospital/"
target="_blank"
rel="noopener noreferrer"
className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition">

<FaInstagram size={20}/>

</a>

<a
href="https://youtube.com/"
target="_blank"
rel="noopener noreferrer"
className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-xl hover:scale-110 transition">

<FaYoutube size={20}/>

</a>

<button

onClick={()=>setChatOpen(true)}

className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl hover:scale-110 transition">

<FaComments size={20}/>

</button>

</div>


{/* ================= MOBILE FLOAT ================= */}

<div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] bg-white shadow-2xl rounded-full px-6 py-3 flex gap-7 items-center border">

<a href="tel:+914224327777">

<FaPhoneAlt size={22} className="text-orange-500"/>

</a>

<a
href={`https://wa.me/${whatsappNumber}`}
target="_blank"
rel="noopener noreferrer">

<FaWhatsapp size={24} className="text-green-500"/>

</a>

<a
href="https://www.instagram.com/hindusthan_hospital/"
target="_blank"
rel="noopener noreferrer">

<FaInstagram size={24} className="text-pink-500"/>

</a>

<a
href="https://youtube.com/"
target="_blank"
rel="noopener noreferrer">

<FaYoutube size={24} className="text-red-600"/>

</a>

<button onClick={()=>setChatOpen(true)}>

<FaComments size={24} className="text-blue-600"/>

</button>

</div>



{/* ================= CHATBOT ================= */}

{chatOpen &&(

<div

className="fixed bottom-24 right-6 w-[380px] max-w-[95%]
bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.18)]
z-[1000] overflow-hidden border animate-[fadeIn_.25s_ease]">

{/* HEADER */}

<div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-6 py-5 flex justify-between items-start">

<div>

<h3 className="font-semibold text-lg">

Hindusthan Hospital

</h3>

<p className="text-sm opacity-90">

Smart Care Assistant

</p>

</div>

<button

onClick={()=>{

setChatOpen(false);

setStep("menu");

}}

className="hover:scale-110 transition">

<FaTimes/>

</button>

</div>



{/* BODY */}

<div className="p-6 bg-gray-50 space-y-5">

{/* MENU */}

{step==="menu" &&(

<>

<button

onClick={()=>setStep("name")}

className="w-full bg-blue-50 hover:bg-blue-100 transition p-4 rounded-xl font-semibold">

📅 Book Appointment

</button>

<a

href="tel:+914224327777"

className="block w-full bg-orange-50 hover:bg-orange-100 p-4 rounded-xl font-semibold">

🚑 Emergency Call

</a>

<a

href={`https://wa.me/${whatsappNumber}`}

target="_blank"

rel="noopener noreferrer"

className="block w-full bg-green-50 hover:bg-green-100 p-4 rounded-xl font-semibold">

💬 WhatsApp Chat

</a>

</>

)}



{/* NAME */}

{step==="name" &&(

<div>

<label className="text-sm font-semibold">

Patient Name

</label>

<input

placeholder="Enter your name"

className="mt-2 w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"

value={user.name}

onChange={(e)=>setUser({...user,name:e.target.value})}

/>

<button

onClick={()=>setStep("phone")}

className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">

Next

</button>

</div>

)}



{/* PHONE */}

{step==="phone" &&(

<div>

<label className="text-sm font-semibold">

Phone Number

</label>

<input

placeholder="Enter phone number"

className="mt-2 w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-600 outline-none"

value={user.phone}

onChange={(e)=>setUser({...user,phone:e.target.value})}

/>

<button

onClick={()=>setStep("department")}

className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">

Next

</button>

</div>

)}



{/* DEPARTMENT */}

{step==="department" &&(

<div>

<label className="text-sm font-semibold">

Department

</label>

<select

className="mt-2 w-full border rounded-xl p-4"

onChange={(e)=>{

setUser({...user,department:e.target.value});

setStep("symptoms");

}}

>

<option>Select Department</option>

<option>Cardiology</option>

<option>Orthopaedics</option>

<option>General Medicine</option>

<option>ENT</option>

<option>Paediatrics</option>

<option>Emergency Care</option>

</select>

</div>

)}



{/* SYMPTOMS */}

{step==="symptoms" &&(

<div>

<label className="text-sm font-semibold">

Symptoms / Message

</label>

<textarea

rows="3"

placeholder="Describe symptoms"

className="mt-2 border w-full p-4 rounded-xl"

value={user.symptoms}

onChange={(e)=>setUser({...user,symptoms:e.target.value})}

/>

<button

onClick={sendEmail}

className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">

Send Appointment Request

</button>

</div>

)}

</div>

</div>

)}

</>

);

}