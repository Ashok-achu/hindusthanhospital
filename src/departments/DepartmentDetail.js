import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import departmentsData from "../departments/departmentsData";

export default function DepartmentDetail() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
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
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[420px]">
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

                {/* DESCRIPTION — royal card treatment */}
                <div className="relative bg-[#FDFBF6] border border-[#E7DCC0] rounded-2xl px-6 sm:px-10 py-8 sm:py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">

                  {/* corner ornaments */}
                  <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C6A15B]"></span>
                  <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C6A15B]"></span>
                  <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C6A15B]"></span>
                  <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C6A15B]"></span>

                  <div className="space-y-4">

                    {(department.description || "").split("\n").map((line, index) => {

                      const clean = line.trim();
                      if (!clean) return null;

                      // Section heading (ALL CAPS line)
                      if (clean === clean.toUpperCase() && clean.length > 6) {
                        return (
                          <div key={index} className="flex items-center gap-3 mt-8 mb-3 first:mt-0">
                            <span className="w-8 h-[2px] bg-[#C6A15B]"></span>
                            <h3 className="font-serif text-lg sm:text-xl tracking-wide text-[#6B0F2A]">
                              {clean}
                            </h3>
                            <span className="flex-1 h-px bg-[#E7DCC0]"></span>
                          </div>
                        );
                      }

                      // Numbered sub-heading
                      if (clean.match(/^[0-9]+\./)) {
                        return (
                          <h4
                            key={index}
                            className="inline-flex items-center gap-2 text-[#6B0F2A] font-semibold text-base sm:text-lg mt-5 mb-1"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                            {clean}
                          </h4>
                        );
                      }

                      // Bullet line
                      if (clean.startsWith("•")) {
                        return (
                          <p key={index} className="flex items-start gap-3 pl-2 text-gray-700 leading-7">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0"></span>
                            <span>{clean.replace("•", "").trim()}</span>
                          </p>
                        );
                      }

                      // Plain paragraph
                      return (
                        <p key={index} className="text-gray-700 leading-7 sm:leading-8 text-[15px] sm:text-[16px]">
                          {clean}
                        </p>
                      );
                    })}

                  </div>
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
                      {department.procedures.map((item, i) => (
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
                      {department.specialClinics.map((item, i) => (
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

                {/* VISITING CONSULTANTS */}
                {department.visitingConsultants?.length > 0 && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mt-14 mb-8">
                      Visiting Consultants
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {department.visitingConsultants.map((doc, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                          <div className="w-full h-[260px] bg-gray-50 flex items-center justify-center p-4">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {doc.name}
                            </h3>
                            <p className="text-red-600 text-sm font-medium mt-1">
                              {doc.designation}
                            </p>

                            {doc.description && (
                              <p className="text-gray-600 text-sm mt-3">
                                {doc.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* GALLERY — royal frame treatment */}
                {department.gallery?.length > 0 && (
                  <section className="mt-16">

                    <div className="flex items-center gap-4 mb-10">
                      <span className="flex-1 h-px bg-[#E7DCC0]"></span>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#6B0F2A] tracking-wide whitespace-nowrap">
                        Department Gallery
                      </h2>
                      <span className="flex-1 h-px bg-[#E7DCC0]"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                      {department.gallery.map((img, i) => (
                        <div
                          key={i}
                          className="group relative bg-white p-3 rounded-2xl border border-[#E7DCC0] shadow-md hover:shadow-2xl transition duration-300"
                        >
                          {/* thin gold inner frame */}
                          <div className="relative rounded-xl overflow-hidden ring-1 ring-[#C6A15B]/40">
                            <img
                              src={img}
                              alt={`gallery-${i}`}
                              onClick={() => setSelectedImage(img)}
                              className="w-full h-[300px] md:h-[380px] object-cover cursor-pointer transition duration-500 group-hover:scale-105"
                            />

                            {/* hover overlay */}
                            <div
                              onClick={() => setSelectedImage(img)}
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-5 cursor-pointer"
                            >
                              <span className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase border border-white/70 px-4 py-1.5 rounded-full">
                                View
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </section>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FULL SCREEN IMAGE VIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* IMAGE */}
          <div className="relative p-2 rounded-2xl ring-1 ring-[#C6A15B]/60 bg-black/40">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
            />
          </div>

        </div>
      )}
    </div>
  );
}