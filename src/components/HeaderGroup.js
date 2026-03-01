import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
FaMapMarkerAlt,
FaPhoneAlt,
FaChevronDown,
FaBars,
FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import certLogo from "../assets/NABH.jpg";

export default function HeaderGroup(){

const [menuOpen,setMenuOpen]=useState(false);
const [activeDropdown,setActiveDropdown]=useState(null);
const [scrolled,setScrolled]=useState(false);
const [mobileDropdown,setMobileDropdown]=useState(null);

const closeTimer=useRef(null);

const location=useLocation();
const navigate=useNavigate();

const isHome = location.pathname === "/";


/* ---------- SLUG MAP ---------- */

const slugMap={

Anaesthesiology:"anaesthesiology",
Cardiology:"cardiology",
Dermatology:"dermatology",
Dentistry:"dentistry",
Diabetology:"diabetology",
"Emergency Care":"emergency-care",
ENT:"ent",
"General Medicine":"general-medicine",
"General Surgery":"general-surgery",
Gastroenterology:"gastroenterology",
"Internal Medicine":"internal-medicine",
ICU:"icu",
Neonatology:"neonatology",
"Neuro & Vascular Surgery":"neurovascular-surgery",
Nephrology:"nephrology",
"Obstetrics & Gynaecology":"obgyn",
Orthopaedics:"orthopaedics",
Rehabilitation:"rehab",
Paediatrics:"paediatrics",
"Paediatric Surgery":"paediatric-surgery",
Psychiatry:"psychiatry",
"Plastic Surgery":"plastic-surgery",
Pulmonology:"pulmonology",
Radiology:"radiology",
"Surgical Oncology":"surgical-oncology",
Urology:"urology",

};

const toSlug=(label)=>"/departments/"+slugMap[label];



/* ---------- NAV ---------- */

const nav=[

{label:"Home",to:"/"},

{
label:"About",
children:[
{label:"About Trust",to:"/abouttrust"},
{label:"Mission & Vision",to:"/mission"},
{label:"Our Profile",to:"/profile"},
{label:"Milestones",to:"/milestones"},
],
},

{label:"Doctors",to:"/doctors"},

{label:"Departments",mega:true,children:Object.keys(slugMap)},

{
label:"Facilities",
children:[
{label:"Ambulance",to:"/facilities/ambulance"},
{label:"Birth Center",to:"/facilities/birthing-centre"},
{label:"Blood Bank",to:"/facilities/blood-bank"},
{label:"Insurance",to:"/facilities/insurance"},
{label:"MHC",to:"/facilities/mhc"},
{label:"Rooms",to:"/facilities/rooms"},
{label:"IT",to:"/facilities/it"},
{label:"Canteen",to:"/facilities/canteen"},
{label:"Pharmacy",to:"/facilities/pharmacy"},
],
},

{label:"Packages",to:"/health"},

{
label:"Media",
children:[
{label:"Gallery",to:"/gallery"},
{label:"News",to:"/news"},
{
label:"Brochure",
to:"/myapp/public/brochure/hindusthan-hospital-brochure.pdf",
external:true,
},
],
},

{
label:"Academics",
children:[
{label:"Institutions",to:"https://hindusthan.net",external:true},
{label:"Courses",to:"/academics/courses"},
],
},

{
label:"Contact",
children:[
{label:"Careers",to:"/careers"},
{label:"Testimonials",to:"/testimonials"},
{label:"Reach Us",to:"/contact"},
],
},

];



/* ---------- DROPDOWN ---------- */

const openDropdown=(i)=>{

if(closeTimer.current) clearTimeout(closeTimer.current);

setActiveDropdown(i);

};

const closeDropdown=()=>{

closeTimer.current=setTimeout(()=>{

setActiveDropdown(null);

},200);

};


useEffect(()=>{

setMenuOpen(false);

},[location]);



/* ---------- SCROLL ---------- */

useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>40);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);



return(

<>

{/* ---------- TOP HEADER ---------- */}

{isHome &&(

<div
className={`w-full bg-gray-100 border-b transition-all duration-500 overflow-hidden
${scrolled ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}
`}
>

<div className="max-w-[1400px] mx-auto px-8 py-3">

<div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 items-center">

<img src={logo} className="w-44 lg:w-60"/>

<div className="text-sm font-medium">

<div className="flex gap-3">

<FaPhoneAlt/>

<div>

<div>+91 4224327777</div>
<div>+91 4224327778</div>

</div>

</div>

<div className="ml-7">

Emergency <b>+91 4224327799</b>

</div>

</div>


<div className="flex gap-3">

<FaMapMarkerAlt/>

<div>

522/3 Hindusthan Hospital Road<br/>

Avinashi Road Coimbatore

</div>

</div>


<div className="flex justify-end gap-6">

<button className="bg-purple-600 text-white px-8 py-3 rounded-full">

BOOK AN APPOINTMENT

</button>

<img src={certLogo} className="w-24"/>

</div>

</div>

</div>

</div>

)}



{/* ---------- NAVBAR ---------- */}

<div className="sticky top-0 z-[9999] w-full flex justify-center bg-white py-3 shadow">

<div className="bg-white w-[94%] max-w-7xl rounded-full shadow-xl px-6 py-3 flex items-center gap-8">


{/* DESKTOP MENU */}

<nav className="hidden lg:flex gap-6 flex-1">

{nav.map((item,i)=>(

<div

key={i}

className="relative"

onMouseEnter={()=>openDropdown(i)}

onMouseLeave={closeDropdown}

>

<div className="flex items-center gap-1 font-bold text-sm cursor-pointer">

{item.to?

<NavLink to={item.to}>{item.label}</NavLink>

:

<span>{item.label}</span>

}

{item.children && <FaChevronDown className="text-xs"/>}

</div>


{/* DESKTOP DROPDOWN */}

{activeDropdown===i && item.children &&(

<div className={`absolute top-full mt-3 bg-white rounded-xl shadow-xl p-2 z-50

${item.mega ? "w-[900px] grid grid-cols-4":"w-64"}

`}>

{item.children.map((sub,j)=>(

typeof sub==="string"?

<NavLink

key={j}

to={toSlug(sub)}

className="block px-4 py-2 text-sm hover:text-rose-600"

>

{sub}

</NavLink>

:

<NavLink

key={j}

to={sub.to}

className="block px-4 py-2 text-sm hover:text-rose-600"

>

{sub.label}

</NavLink>

))

}

</div>

)}

</div>

))}

</nav>



{/* RIGHT BUTTON */}

<div className="hidden lg:flex ml-auto">

<button

onClick={()=>navigate("/Mettupalayam")}

className="bg-green-600 text-white px-5 py-2 rounded-full text-xs font-bold"

>

BRANCH

</button>

</div>



{/* MOBILE ICON */}

<div className="lg:hidden">

<button onClick={()=>setMenuOpen(!menuOpen)}>

{menuOpen?<FaTimes/>:<FaBars/>}

</button>

</div>


</div>

</div>



{/* ---------- MOBILE MENU ---------- */}

<AnimatePresence>

{menuOpen &&(

<motion.div

initial={{height:0}}

animate={{height:"auto"}}

exit={{height:0}}

className="lg:hidden fixed top-[95px] left-0 right-0 bg-white shadow-xl mx-4 rounded-xl overflow-hidden z-[9998]"

>

{nav.map((item,i)=>(

<div key={i} className="border-b">

<div

className="flex justify-between items-center px-4 py-3 font-semibold"

onClick={()=>{

if(item.children){

setMobileDropdown(mobileDropdown===i?null:i);

}

}}

>

{item.to?

<NavLink to={item.to}>{item.label}</NavLink>

:

item.label

}

{item.children &&(

<FaChevronDown

className={`transition ${mobileDropdown===i?"rotate-180":""}`}

/>

)}

</div>



{item.children && mobileDropdown===i &&(

<div className="bg-gray-50">

{item.children.map((sub,j)=>(

typeof sub==="string"?

<NavLink

key={j}

to={toSlug(sub)}

className="block px-6 py-3 text-sm"

onClick={()=>setMenuOpen(false)}

>

{sub}

</NavLink>

:

<NavLink

key={j}

to={sub.to}

className="block px-6 py-3 text-sm"

onClick={()=>setMenuOpen(false)}

>

{sub.label}

</NavLink>

))

}

</div>

)}

</div>

))}

</motion.div>

)}

</AnimatePresence>

</>

);

}