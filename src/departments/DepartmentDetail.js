import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import departmentsData from "../departments/departmentsData";

/* ------------------------------------------------------------------
   EDIT THESE TWO TO MATCH YOUR SITE
------------------------------------------------------------------- */
const APPOINTMENT_LINK = "/appointment"; // your booking / enquiry route
const HOSPITAL_PHONE = "+91-00000-00000"; // shown on the floating call button

/* ------------------------------------------------------------------
   Which sections exist for a department, and in what order they
   should appear as tabs. A tab only shows up if the department
   actually has data for it — no more empty "Services Offered"
   headings on departments that don't have any.
------------------------------------------------------------------- */
const SECTION_DEFS = [
  { key: "overview", label: "Overview" },
  { key: "services", label: "Services", field: "services", heading: "Services Offered" },
  { key: "cathLab", label: "Cath Lab", field: "cathLab", heading: "24/7 Cath Lab Services" },
  { key: "subSpecialities", label: "Sub Specialities", field: "subSpecialities", heading: "Sub Specialities" },
  { key: "procedures", label: "Procedures", field: "procedures", heading: "Procedures" },
  { key: "specialClinics", label: "Special Clinics", field: "specialClinics", heading: "Special Clinics" },
  { key: "advantages", label: "Advantages", field: "advantages", heading: "Why Choose This" },
  { key: "doctors", label: "Our Doctors", field: "doctors" },
  { key: "visitingConsultants", label: "Visiting Consultants", field: "visitingConsultants" },
  { key: "gallery", label: "Gallery", field: "gallery" },
];

function getAvailableSections(department) {
  return SECTION_DEFS.filter((s) => {
    if (s.key === "overview") return !!(department.description || "").trim();
    const value = department[s.field];
    return Array.isArray(value) && value.length > 0;
  });
}

/* ------------------------------------------------------------------
   Description parser — same rules as before (ALL CAPS heading,
   "1. " numbered sub-heading, "•" bullet, plain paragraph) just
   pulled out so it can be reused / tested on its own.
------------------------------------------------------------------- */
function DescriptionBlock({ text }) {
  const lines = (text || "").split("\n");

  return (
    <div className="relative bg-[#FDFBF6] border border-[#E7DCC0] rounded-2xl px-6 sm:px-10 py-8 sm:py-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C6A15B]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C6A15B]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C6A15B]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C6A15B]" />

      <div className="space-y-4">
        {lines.map((line, index) => {
          const clean = line.trim();
          if (!clean) return null;

          if (clean === clean.toUpperCase() && clean.length > 6) {
            return (
              <div key={index} className="flex items-center gap-3 mt-8 mb-3 first:mt-0">
                <span className="w-8 h-[2px] bg-[#C6A15B]" />
                <h3 className="font-serif text-lg sm:text-xl tracking-wide text-[#6B0F2A]">
                  {clean}
                </h3>
                <span className="flex-1 h-px bg-[#E7DCC0]" />
              </div>
            );
          }

          if (clean.match(/^[0-9]+\./)) {
            return (
              <h4
                key={index}
                className="inline-flex items-center gap-2 text-[#6B0F2A] font-semibold text-base sm:text-lg mt-5 mb-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
                {clean}
              </h4>
            );
          }

          if (clean.startsWith("•")) {
            return (
              <p key={index} className="flex items-start gap-3 pl-2 text-gray-700 leading-7">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
                <span>{clean.replace("•", "").trim()}</span>
              </p>
            );
          }

          return (
            <p key={index} className="text-gray-700 leading-7 sm:leading-8 text-[15px] sm:text-[16px]">
              {clean}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/* Simple two-column bullet list used for services / procedures / etc. */
function SimpleList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700 text-sm sm:text-base">
      {items.map((item, i) => (
        <li
          key={i}
          className="list-none flex items-start gap-2 dept-fade-in"
          style={{ animationDelay: `${Math.min(i, 10) * 30}ms` }}
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Doctor / consultant card with a "read more" toggle so long bios
   don't force every card in the row to stretch to match. */
function PersonCard({ person, index }) {
  const [expanded, setExpanded] = useState(false);
  const bio = person.description || "";
  const isLong = bio.length > 110;

  return (
    <div
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dept-fade-in"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="w-full h-[220px] sm:h-[260px] bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">{person.name}</h3>
        <p className="text-red-600 text-sm font-medium mt-1">{person.designation}</p>

        {bio && (
          <>
            <p
              className={`text-gray-600 text-sm mt-3 transition-all ${
                expanded || !isLong ? "" : "line-clamp-2"
              }`}
            >
              {bio}
            </p>
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="text-xs font-semibold text-red-600 mt-2 hover:underline"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function DepartmentDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const department = useMemo(
    () => departmentsData.find((d) => d.slug === slug),
    [slug]
  );

  const availableSections = useMemo(
    () => (department ? getAvailableSections(department) : []),
    [department]
  );

  const [activeTab, setActiveTab] = useState(availableSections[0]?.key);
  const [deptSearch, setDeptSearch] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Reset tab + scroll position whenever the department changes.
  useEffect(() => {
    setActiveTab(availableSections[0]?.key);
    setLightboxIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const filteredDepartments = useMemo(() => {
    const q = deptSearch.trim().toLowerCase();
    if (!q) return departmentsData;
    return departmentsData.filter((d) => d.name.toLowerCase().includes(q));
  }, [deptSearch]);

  const gallery = department?.gallery || [];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [gallery.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  if (!department) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Department Not Found</h2>
        <p className="text-gray-500 text-sm">
          The department you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/departments"
          className="mt-2 inline-block bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-red-700 transition"
        >
          Browse all departments
        </Link>
      </div>
    );
  }

  const stats = [
    department.services?.length ? { label: "Services", value: department.services.length } : null,
    (department.doctors?.length || department.visitingConsultants?.length)
      ? {
          label: "Doctors",
          value: (department.doctors?.length || 0) + (department.visitingConsultants?.length || 0),
        }
      : null,
    department.gallery?.length ? { label: "Photos", value: department.gallery.length } : null,
  ].filter(Boolean);

  return (
    <div className="bg-gray-100 pb-24 lg:pb-10">
      {/* Local animation keyframes — scoped, no build config changes needed */}
      <style>{`
        @keyframes deptFadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
        .dept-fade-in { animation: deptFadeIn .4s ease both; }
        @keyframes deptPop { from { opacity:0; transform:scale(.97); } to { opacity:1; transform:scale(1); } }
        .dept-pop { animation: deptPop .2s ease both; }
        .no-scrollbar::-webkit-scrollbar { display:none; }
        .no-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
        @media (prefers-reduced-motion: reduce) {
          .dept-fade-in, .dept-pop { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <span>/</span>
          <Link to="/departments" className="hover:text-red-600 transition">Departments</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{department.name}</span>
        </nav>

        {/* MOBILE DEPARTMENT SWITCHER */}
        <div className="lg:hidden mb-6">
          <select
            value={slug}
            onChange={(e) => navigate(`/departments/${e.target.value}`)}
            className="w-full border border-gray-300 bg-white rounded-md px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
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
          {/* SIDEBAR — sticky, searchable */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-3 border-b">
                <div className="relative">
                  <input
                    type="text"
                    value={deptSearch}
                    onChange={(e) => setDeptSearch(e.target.value)}
                    placeholder="Search departments..."
                    className="w-full text-sm rounded-md border border-gray-200 bg-gray-50 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
                  />
                  <svg
                    className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {filteredDepartments.length === 0 && (
                  <p className="px-5 py-4 text-sm text-gray-400">No departments match.</p>
                )}
                {filteredDepartments.map((dept) => (
                  <Link
                    key={dept.slug}
                    to={`/departments/${dept.slug}`}
                    className={`block px-5 py-3 border-b text-sm font-medium transition
                    ${dept.slug === slug
                        ? "bg-red-600 text-white"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                      }`}
                  >
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* IMAGE BANNER */}
              <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[400px]">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                <div className="absolute bottom-5 left-5 sm:left-8 right-5 sm:right-8">
                  <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold dept-fade-in">
                    {department.name}
                  </h1>

                  {stats.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {stats.map((s) => (
                        <span
                          key={s.label}
                          className="bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-white/30"
                        >
                          {s.value} {s.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* TAB BAR — sticky under the banner, horizontally scrollable on mobile */}
              <div className="sticky top-0 z-20 bg-white border-b overflow-x-auto no-scrollbar">
                <div className="flex gap-1 px-3 sm:px-6">
                  {availableSections.map((section) => (
                    <button
                      key={section.key}
                      onClick={() => setActiveTab(section.key)}
                      className={`relative whitespace-nowrap px-4 py-3.5 text-sm sm:text-[15px] font-medium transition-colors
                        ${activeTab === section.key
                          ? "text-red-600"
                          : "text-gray-500 hover:text-red-500"
                        }`}
                    >
                      {section.label}
                      {activeTab === section.key && (
                        <span className="absolute left-3 right-3 -bottom-px h-[2.5px] bg-red-600 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* TAB PANELS */}
              <div className="p-6 sm:p-8 lg:p-12">
                {availableSections.map((section) => {
                  if (section.key !== activeTab) return null;

                  return (
                    <div key={section.key} className="dept-fade-in">
                      {section.key === "overview" && (
                        <DescriptionBlock text={department.description} />
                      )}

                      {section.field &&
                        !["doctors", "visitingConsultants", "gallery"].includes(section.key) && (
                          <>
                            <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-red-600">
                              {section.heading}
                            </h2>
                            <SimpleList items={department[section.field]} />
                          </>
                        )}

                      {section.key === "doctors" && (
                        <>
                          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-8">
                            Our Doctors
                          </h2>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {department.doctors.map((doc, i) => (
                              <PersonCard key={i} person={doc} index={i} />
                            ))}
                          </div>
                        </>
                      )}

                      {section.key === "visitingConsultants" && (
                        <>
                          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-8">
                            Visiting Consultants
                          </h2>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {department.visitingConsultants.map((doc, i) => (
                              <PersonCard key={i} person={doc} index={i} />
                            ))}
                          </div>
                        </>
                      )}

                      {section.key === "gallery" && (
                        <section>
                          <div className="flex items-center gap-4 mb-8 sm:mb-10">
                            <span className="flex-1 h-px bg-[#E7DCC0]" />
                            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#6B0F2A] tracking-wide whitespace-nowrap">
                              Department Gallery
                            </h2>
                            <span className="flex-1 h-px bg-[#E7DCC0]" />
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                            {gallery.map((img, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setLightboxIndex(i)}
                                className="group relative bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-[#E7DCC0] shadow-sm hover:shadow-xl transition duration-300 dept-fade-in text-left"
                                style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
                              >
                                <div className="relative rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-[#C6A15B]/40">
                                  <img
                                    src={img}
                                    alt={`${department.name} gallery ${i + 1}`}
                                    loading="lazy"
                                    className="w-full h-[130px] sm:h-[220px] md:h-[240px] object-cover transition duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-3 sm:pb-5">
                                    <span className="text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase border border-white/70 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                                      View
                                    </span>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING CALL / ENQUIRE BUTTON */}
      

      {/* LIGHTBOX */}
      {lightboxIndex !== null && gallery.length > 0 && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 dept-pop"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white text-3xl font-bold w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 sm:left-6 text-white text-2xl sm:text-3xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 sm:right-6 text-white text-2xl sm:text-3xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative p-2 rounded-2xl ring-1 ring-[#C6A15B]/60 bg-black/40 max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightboxIndex]}
              alt={`${department.name} full view`}
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl object-contain"
            />
            {gallery.length > 1 && (
              <div className="text-center text-white/70 text-xs mt-2 tracking-wide">
                {lightboxIndex + 1} / {gallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}