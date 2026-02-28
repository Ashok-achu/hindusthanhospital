
import { useState } from "react";
import {
FaWhatsapp,
FaInstagram,
FaPhoneAlt,
FaComments,
FaTimes
} from "react-icons/fa";

export default function FloatingSocial() {

const [chatOpen,setChatOpen]=useState(false);

return(

<>

{/* ================= DESKTOP FLOATING ================= */}

<div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[999] flex-col gap-4">

<a
href="tel:+918925868782"
className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110">

<FaPhoneAlt size={20}/>

</a>

<a
href="https://wa.me/918925868782"
target="_blank"
rel="noopener noreferrer"
className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110">

<FaWhatsapp size={20}/>

</a>

<a
href="https://www.instagram.com/hindusthan_hospital/?hl=en#/"
target="_blank"
rel="noopener noreferrer"
className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110">

<FaInstagram size={20}/>

</a>

{/* CHATBOT BUTTON */}

<button
onClick={()=>setChatOpen(true)}
className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition hover:scale-110">

<FaComments size={20}/>

</button>

</div>



{/* ================= MOBILE BOTTOM BAR ================= */}

<div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] bg-white shadow-2xl rounded-full px-6 py-3 flex gap-8 items-center border">

<a href="tel:+918925868782" className="text-orange-500">
<FaPhoneAlt size={22}/>
</a>

<a
href="https://wa.me/918925868782"
target="_blank"
rel="noopener noreferrer"
className="text-green-500">

<FaWhatsapp size={24}/>
</a>

<a
href="https://www.instagram.com/hindusthan_hospital/?hl=en#/"
target="_blank"
rel="noopener noreferrer"
className="text-pink-500">

<FaInstagram size={24}/>
</a>

{/* CHATBOT */}

<button
onClick={()=>setChatOpen(true)}
className="text-blue-600">

<FaComments size={24}/>

</button>

</div>



{/* ================= CHATBOT WINDOW ================= */}

{chatOpen &&(

<div className="fixed bottom-24 right-5 w-80 bg-white rounded-2xl shadow-2xl z-[1000] overflow-hidden">

{/* HEADER */}

<div className="bg-blue-700 text-white px-4 py-3 flex justify-between items-center">

<h3 className="font-bold">

Hindusthan Hospital

</h3>

<button onClick={()=>setChatOpen(false)}>

<FaTimes/>

</button>

</div>



{/* CHAT BODY */}

<div className="p-4 space-y-4 text-sm bg-gray-50">

<div className="bg-white p-3 rounded-xl shadow">

👋 Hello! Welcome to Hindusthan Hospital.

How can we help you today?

</div>

<div className="bg-white p-3 rounded-xl shadow">

✔ Book Appointment

<br/>

✔ Doctor Availability

<br/>

✔ Emergency Support

</div>

</div>



{/* QUICK ACTIONS */}

<div className="p-3 border-t flex gap-2">

<a
href="https://wa.me/918925868782"
target="_blank"
rel="noopener noreferrer"
className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg text-sm font-semibold">

WhatsApp

</a>

<a
href="tel:+918925868782"
className="flex-1 bg-orange-500 text-white text-center py-2 rounded-lg text-sm font-semibold">

Call

</a>

</div>

</div>

)}

</>

);

}
