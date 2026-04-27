import { useParams, useNavigate, Link } from "react-router-dom";
import departmentsData from "../departments/departmentsData";

export default function DepartmentDetail() {

  const { slug } = useParams();
  const navigate = useNavigate();

  const department = departmentsData.find(
    (d) => d.slug === slug
  );

  if (!department)
    return (
      <h2 className="text-center mt-20 text-xl font-semibold">
        Department Not Found
      </h2>
    );

  return (
    <div className="bg-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-4">

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden mb-6">
          <select
            value={slug}
            onChange={(e) => navigate(`/departments/${e.target.value}`)}
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {departmentsData.map((dept) => (
              <option key={dept.slug} value={dept.slug}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* SIDEBAR */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {departmentsData.map((dept) => (
                <Link
                  key={dept.slug}
                  to={`/departments/${dept.slug}`}
                  className={`block px-5 py-3 border-b text-sm font-medium transition
                  ${dept.slug === slug
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:bg-red-600 hover:text-white"
                    }`}
                >
                  {dept.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">

              {/* IMAGE BANNER */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-6 left-6 sm:left-10">
                  <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {department.name}
                  </h1>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12">

                {/* TITLE */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6">
                  {department.name}
                </h1>

                {/* DESCRIPTION */}
                <div className="leading-7 sm:leading-8 text-gray-700 text-[15px] sm:text-[16px] space-y-3">

                  <ul className="space-y-2">

                    {(department.description || "").split("\n").map((line, index) => {

                      const clean = line.trim();
                      if (!clean) return null;

                      if (clean === clean.toUpperCase() && clean.length > 6) {
                        return (
                          <h3 key={index} className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2">
                            {clean}
                          </h3>
                        );
                      }

                      if (clean.match(/^[0-9]+\./)) {
                        return (
                          <h4 key={index} className="text-base sm:text-lg font-semibold text-gray-800 mt-4">
                            {clean}
                          </h4>
                        );
                      }

                      if (clean.startsWith("•")) {
                        return (
                          <li key={index} className="ml-5 list-disc">
                            {clean.replace("•", "")}
                          </li>
                        );
                      }

                      return <p key={index}>{clean}</p>;
                    })}

                  </ul>

                </div>

                {/* SERVICES */}
                {department.services?.length > 0 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
                      Services Offered
                    </h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
                      {department.services.map((item, i) => (
                        <li key={i} className="list-disc ml-5">{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* CATH LAB */}
                {department.cathLab?.length > 0 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
                      24/7 Cath Lab Services
                    </h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
                      {department.cathLab.map((item, i) => (
                        <li key={i} className="list-disc ml-5">{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* SUB SPECIALITIES */}
                {department.subSpecialities?.length > 0 && (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
                      Sub Specialities
                    </h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
                      {department.subSpecialities.map((item, i) => (
                        <li key={i} className="list-disc ml-5">{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {department.procedures?.length > 0 && (

<>
<h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
Procedures
</h2>

<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
{department.procedures.map((item,i)=>(
<li key={i} className="list-disc ml-5">{item}</li>
))}
</ul>

</>

)}

{department.specialClinics?.length > 0 && (

<>
<h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4 text-red-600">
Special Clinics
</h2>

<ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
{department.specialClinics.map((item,i)=>(
<li key={i} className="list-disc ml-5">{item}</li>
))}
</ul>

</>

)}

                {/* DOCTORS */}
                {department.doctors?.length > 0 && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mt-14 mb-8">
                      Our Doctors
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                      {department.doctors.map((doc, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                          <div className="w-full h-[260px] bg-gray-50 flex items-center justify-center p-4">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-contain" />
                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                            <p className="text-red-600 text-sm font-medium mt-1">{doc.designation}</p>
                            <p className="text-gray-600 text-sm mt-3">{doc.description}</p>
                          </div>

                        </div>
                      ))}

                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}