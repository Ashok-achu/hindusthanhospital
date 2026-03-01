import { useParams, useNavigate, Link } from "react-router-dom";
import departmentsData from "../departments/departmentsData";

export default function DepartmentDetail() {

const { slug } = useParams();
const navigate = useNavigate();

const department = departmentsData.find(
(d)=> d.slug === slug
);

if(!department) return <h2>Department Not Found</h2>;

return(

<div className="bg-gray-100 py-10">

<div className="max-w-7xl mx-auto px-4">

{/* 🔽 MOBILE DROPDOWN ONLY */}
<div className="lg:hidden mb-6">

<select
value={slug}
onChange={(e)=>navigate(`/departments/${e.target.value}`)}
className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
>

{departmentsData.map((dept)=>(
<option key={dept.slug} value={dept.slug}>
{dept.name}
</option>
))}

</select>

</div>



{/* MAIN GRID */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


{/* LEFT SIDEBAR (DESKTOP ONLY) */}
<div className="hidden lg:block lg:col-span-3">

<div className="bg-white rounded-lg shadow-sm overflow-hidden">

{departmentsData.map((dept)=>(
<Link
key={dept.slug}
to={`/departments/${dept.slug}`}
className={`block px-5 py-3 border-b text-sm font-medium transition
${dept.slug===slug
? "bg-red-600 text-white"
: "text-gray-700 hover:bg-red-600 hover:text-white"
}
`}
>
{dept.name}
</Link>
))}

</div>

</div>



{/* RIGHT CONTENT */}
<div className="lg:col-span-9">

<div className="bg-white rounded-lg shadow-sm overflow-hidden">

{/* IMAGE */}
<img
src={department.image}
alt={department.name}
className="w-full h-[220px] sm:h-[300px] lg:h-[350px] object-cover"
/>

<div className="p-6 sm:p-8 lg:p-12">

{/* TITLE */}
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6">
{department.name}
</h1>


{/* DESCRIPTION */}
<div className="leading-7 sm:leading-8 text-gray-700 text-[15px] sm:text-[16px] space-y-3">

<ul className="space-y-2">

{
department.description.split("\n").map((line,index)=>{

const clean=line.trim();
if(!clean) return null;


// ALL CAPS HEADING
if(clean === clean.toUpperCase() && clean.length>6){

return(
<h3
key={index}
className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2"
>
{clean}
</h3>
);
}


// NUMBERED HEADING
if(clean.match(/^[0-9]+\./)){

return(
<h4
key={index}
className="text-base sm:text-lg font-semibold text-gray-800 mt-4"
>
{clean}
</h4>
);
}


// BULLET POINT
if(clean.startsWith("•")){

return(
<li
key={index}
className="ml-5 list-disc"
>
{clean.replace("•","")}
</li>
);
}


// NORMAL TEXT
return(
<p key={index}>
{clean}
</p>
);

})
}

</ul>

</div>



{/* SERVICES */}
<h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
Services Offered
</h2>

<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">

{
department.services.map((service,i)=>(
<li key={i} className="list-disc ml-5">
{service}
</li>
))
}

</ul>

</div>

</div>

</div>

</div>

</div>

</div>

);
}