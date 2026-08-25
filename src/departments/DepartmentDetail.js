import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import departmentsData from "../departments/departmentsData";
import sampleGalleryImage from "../assets/set2/Hospital profile edited.jpg";

/* ------------------------------------------------------------------
   EDIT THESE TO MATCH YOUR SITE
------------------------------------------------------------------- */
const APPOINTMENT_LINK = "/appointment"; // your booking / enquiry route
const HOSPITAL_PHONE = "+91-00000-00000"; // shown on the floating call button + sidebar
const HOSPITAL_PHONE_DISPLAY = "0422 424 2424"; // shown as text
const HOSPITAL_EMAIL = "hindusthanreception@gmail.com";
const HOSPITAL_LOCATION = "Hindusthan Hospital, Coimbatore, Tamil Nadu";
const DEPARTMENT_API = process.env.REACT_APP_API_URL || "http://localhost:5000";

/* ------------------------------------------------------------------
   Tiny inline icon set — single-path outline icons so the page
   doesn't need an external icon library. Reused across the quick
   nav strip, the patient-journey steps and the floating hero stats.
------------------------------------------------------------------- */
const ICON_PATHS = {
  clipboard:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  heart:
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  moon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  siren: "M12 8.25v4.5m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  clock: "M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  users:
    "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 2a4 4 0 00-3-3.87",
  image: "M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 12l4-4 3 3 4-5 3 4",
  chevronLeft: "M15 19l-7-7 7-7",
  chevronRight: "M9 5l7 7-7 7",
  check: "M5 13l4 4L19 7",
};

const QUICK_NAV_ICON_ORDER = ["clipboard", "heart", "moon", "shield", "siren"];
const TRUST_PILLARS = [
  { icon: "shield", label: "Patient Safety First" },
  { icon: "image", label: "Advanced Technology" },
  { icon: "users", label: "Expert Specialists" },
  { icon: "clock", label: "24/7 Care & Monitoring" },
  { icon: "heart", label: "Compassionate Care" },
];

function Icon({ name, className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ICON_PATHS[name]} />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Sidebar helpers — pull "Why choose us" bullets and a short list of
   key services straight out of the data we already have, so every
   department page gets a filled-in sidebar without new data entry.
------------------------------------------------------------------- */
function getWhyChooseUs(department) {
  if (Array.isArray(department.advantages) && department.advantages.length) {
    return department.advantages.slice(0, 6);
  }

  const text = department.description || "";
  const lines = text.split("\n").map((l) => l.trim());
  const startIdx = lines.findIndex((l) => /why choose/i.test(l));
  if (startIdx !== -1) {
    const bullets = [];
    for (let i = startIdx + 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      if (line.startsWith("•")) {
        bullets.push(line.replace("•", "").trim());
      } else if (bullets.length) {
        break; // hit the next paragraph/heading — stop collecting
      }
      if (bullets.length >= 6) break;
    }
    if (bullets.length) return bullets;
  }

  return [
    "Highly Experienced Specialists",
    "Advanced Medical Technology",
    "Evidence-Based Treatment Protocols",
    "Patient Safety, Our Priority",
    "Compassionate & Personalized Care",
  ];
}

function getKeyServices(department) {
  const source =
    (Array.isArray(department.services) && department.services.length && department.services) ||
    (Array.isArray(department.procedures) && department.procedures.length && department.procedures) ||
    (Array.isArray(department.subSpecialities) && department.subSpecialities.length && department.subSpecialities) ||
    [];
  return source;
}

/* Generic, index-based blurbs for the patient-journey steps. The
   data model doesn't carry a per-step description, so these read
   sensibly against almost any department's quick-nav items. */
const JOURNEY_BLURBS = [
  "Careful assessment and planning to make sure your care is safe and personalized.",
  "Continuous, expert-led monitoring and support throughout your care.",
  "Attentive observation and guidance as you recover comfortably.",
  "Ongoing management and follow-up for lasting comfort and recovery.",
];

/* ------------------------------------------------------------------
   Description parser — ALL CAPS heading, "1. " numbered sub-heading,
   "•" bullet, plain paragraph.
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
                <h3 className="font-serif text-lg sm:text-xl tracking-wide text-[#6B0F2A]">{clean}</h3>
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

/* Simple two-column bullet list — used for the "view all services"
   expansion under the Centre of Excellence grid. */
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

/* Compact doctor / consultant card for the "Meet Our Specialists"
   grid — photo, name, designation, a one-line bio and a book link. */
function DoctorGridCard({ person, index, tag }) {
  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden dept-fade-in"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="w-full aspect-square bg-gray-50 overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">{person.name}</h3>
        <p className="text-red-600 text-xs sm:text-sm font-medium mt-0.5">{person.designation}</p>
        {tag && (
          <span className="inline-block mt-1 text-[10px] font-semibold tracking-wide uppercase text-[#0E3B39] bg-[#0E3B39]/10 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        )}
        {person.description && (
          <p className="text-gray-500 text-xs mt-2 line-clamp-2">{person.description}</p>
        )}
        <Link
          to={APPOINTMENT_LINK}
          className="mt-3 inline-block text-xs font-semibold text-white bg-[#0E3B39] px-4 py-1.5 rounded-full hover:bg-[#0a2b2a] transition"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

/* "Centre of Excellence" card — icon + title + short blurb over a
   photo, so the row reads the same as a real photographed service
   without requiring a dedicated image per data entry. */
function ServiceCard({ title, blurb, image, index, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden dept-fade-in"
      style={{ animationDelay: `${Math.min(index, 10) * 50}ms` }}
    >
      <div className="p-5 pb-4">
        <div className="w-10 h-10 rounded-full bg-[#0E3B39]/10 flex items-center justify-center mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0E3B39]" />
        </div>
        <p className="text-sm sm:text-[15px] font-semibold text-gray-800 leading-snug">{title}</p>
        {blurb && <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">{blurb}</p>}
      </div>
      {image && (
        <div className="h-28 sm:h-32 w-full overflow-hidden">
          <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}
    </button>
  );
}

/* Right-hand contextual sidebar — "Why Choose Us", the Book
   Appointment CTA, Key Services and (optionally) Technology We Use.
   Renders identically on every department page. */
function InfoSidebar({ department }) {
  const whyChooseUs = getWhyChooseUs(department);
  const keyServices = getKeyServices(department).slice(0, 7);
  const technology = Array.isArray(department.technology) ? department.technology : [];

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6">
        <h3 className="text-xs font-bold tracking-[0.15em] text-gray-500 mb-4">WHY CHOOSE US</h3>
        <ul className="space-y-3">
          {whyChooseUs.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {keyServices.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6">
          <h3 className="text-xs font-bold tracking-[0.15em] text-gray-500 mb-4">KEY SERVICES</h3>
          <ul className="space-y-3">
            {keyServices.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {technology.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-6">
          <h3 className="text-xs font-bold tracking-[0.15em] text-gray-500 mb-4">TECHNOLOGY WE USE</h3>
          <ul className="space-y-3">
            {technology.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Icon name="check" className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex items-center gap-4">
        <span className="text-2xl font-bold text-[#0E3B39]">24/7</span>
        <span className="text-sm text-gray-600">Emergency care &amp; support available</span>
      </div>
    </div>
  );
}

export default function DepartmentDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [managedDepartments, setManagedDepartments] = useState([]);

  useEffect(() => {
    fetch(`${DEPARTMENT_API}/api/departments`)
      .then((response) => response.ok ? response.json() : [])
      .then((items) => setManagedDepartments(items.map((item) => ({
        ...item,
        image: (item.image?.startsWith("/") && !item.image.startsWith("/static/")) ? `${DEPARTMENT_API}${item.image}` : item.image,
        gallery: (item.gallery || []).map((image) => (image.startsWith("/") && !image.startsWith("/static/")) ? `${DEPARTMENT_API}${image}` : image),
      }))))
      .catch(() => setManagedDepartments([]));
  }, []);

  const allDepartments = useMemo(() => {
    return departmentsData.map((defaultDept) => {
      const managed = managedDepartments.find((m) => m.slug === defaultDept.slug);
      if (managed) {
        return {
          ...defaultDept,
          ...managed,
          image: managed.image || defaultDept.image,
          gallery: (managed.gallery && managed.gallery.length > 0) ? managed.gallery : defaultDept.gallery,
        };
      }
      return defaultDept;
    }).concat(
      managedDepartments.filter((m) => !departmentsData.some((d) => d.slug === m.slug))
    );
  }, [managedDepartments]);
  const department = useMemo(() => allDepartments.find((d) => d.slug === slug), [allDepartments, slug]);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  useEffect(() => {
    setLightboxIndex(null);
    setShowAllDoctors(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const gallery = department?.gallery || [];
  // Keep a gallery area visible for departments that do not yet have photos.
  // This sample is replaced automatically once gallery images are added in admin.
  const displayedGallery = gallery.length > 0 ? gallery : [sampleGalleryImage];
  const hasSingleGalleryImage = displayedGallery.length === 1;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + displayedGallery.length) % displayedGallery.length)),
    [displayedGallery.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % displayedGallery.length)),
    [displayedGallery.length]
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
          Browse Centre of Excellence
        </Link>
      </div>
    );
  }

  const quickNav = (department.highlights?.length ? department.highlights : getKeyServices(department)).slice(0, 5);
  const allServiceItems = getKeyServices(department);
  const doctorCount = (department.doctors?.length || 0) + (department.visitingConsultants?.length || 0);
  const heroHighlights = [
    { icon: "clock", value: "24/7", label: `${department.name} care` },
    { icon: "clipboard", value: allServiceItems.length ? `${allServiceItems.length}+` : "Care", label: "Specialist services" },
    { icon: "users", value: doctorCount ? `${doctorCount}+` : "Expert", label: "Specialist team" },
    { icon: "shield", value: "Safe", label: "Patient-first care" },
  ];

  const allDoctors = [
    ...(department.doctors || []).map((d) => ({ ...d })),
    ...(department.visitingConsultants || []).map((d) => ({ ...d, tag: "Visiting Consultant" })),
  ];
  const visibleDoctors = showAllDoctors ? allDoctors : allDoctors.slice(0, 4);

  const journeySteps = quickNav.slice(0, 4);

  return (
    <div className="bg-[#f7fafb] pb-24 lg:pb-10">
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
        <section className="mb-5 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm sm:px-8">
          <p className="mb-4 text-center text-xs font-extrabold tracking-wide text-[#0E5260] sm:text-sm">
            MODERN CARE <span className="text-slate-300">•</span> TRUSTED EXPERTISE <span className="text-slate-300">•</span> PATIENT-CENTRIC
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-5">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.label} className="flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-slate-700 sm:text-xs">
                <Icon name={pillar.icon} className="h-5 w-5 shrink-0 text-[#0E5260]" />
                <span>{pillar.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <span>/</span>
          <Link to="/departments" className="hover:text-red-600 transition">Centre of Excellence</Link>
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
            {allDepartments.map((dept) => (
              <option key={dept.slug} value={dept.slug}>{dept.name}</option>
            ))}
          </select>
        </div>

        {/* MAIN GRID: content | sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-12 sm:space-y-16">
            {/* ================= HERO ================= */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="relative w-full h-[350px] sm:h-[440px] lg:h-[500px]">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16">
                  <div className="px-6 sm:px-10">
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={APPOINTMENT_LINK}
                        className="bg-[#22a66c] hover:bg-[#168553] transition text-white text-sm font-semibold px-6 py-2.5 rounded-md"
                      >
                        Book Appointment
                      </Link>
                      <a
                        href={`tel:${HOSPITAL_PHONE}`}
                        className="border border-white/70 hover:bg-white/10 transition text-white text-sm font-semibold px-6 py-2.5 rounded-md"
                      >
                        Talk to Expert
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* QUICK NAV STRIP */}
              {quickNav.length > 0 && (
                <div className="relative z-10 mx-3 -mt-4 rounded-xl border border-slate-100 bg-white shadow-md overflow-x-auto no-scrollbar sm:mx-8">
                  <div className="flex divide-x">
                    {quickNav.map((item, i) => (
                      <div key={i} className="flex-1 min-w-[130px] px-4 py-5 text-center flex flex-col items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-[#0E3B39]/10 flex items-center justify-center text-[#0E3B39]">
                          <Icon name={QUICK_NAV_ICON_ORDER[i % QUICK_NAV_ICON_ORDER.length]} className="w-4.5 h-4.5" />
                        </div>
                        <p className="text-xs sm:text-[13px] font-medium text-gray-600 leading-tight">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ================= DEPARTMENT OVERVIEW ================= */}
            {department.overview && (
              <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E5260]">
                  Department Overview
                </p>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {department.name}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {department.overview}
                </p>
              </section>
            )}

            {/* ================= CENTRE OF EXCELLENCE GRID ================= */}
            {allServiceItems.length > 0 && (
              <section>
                <div className="text-center mb-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#0E5260] font-semibold mb-1">
                    Centre of Excellence
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Comprehensive {department.name} Care
                  </h2>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                  <SimpleList items={allServiceItems} />
                </div>
              </section>
            )}

            {/* ================= DOCTORS ================= */}
            {allDoctors.length > 0 && (
              <section>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold mb-1">
                      Our Expert {department.name} Team
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#6B0F2A]">Meet Our Specialists</h2>
                  </div>
                  {allDoctors.length > 4 && (
                    <button
                      type="button"
                      onClick={() => setShowAllDoctors((v) => !v)}
                      className="text-sm font-semibold text-[#0E3B39] hover:underline whitespace-nowrap"
                    >
                      {showAllDoctors ? "Show Less" : "View All Doctors →"}
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {visibleDoctors.map((doc, i) => (
                    <DoctorGridCard key={i} person={doc} index={i} tag={doc.tag} />
                  ))}
                </div>
              </section>
            )}

            {/* ================= PATIENT JOURNEY ================= */}
            {journeySteps.length > 0 && (
              <section>
                <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold mb-1">
                      Patient Journey
                    </p>
                    <h2 className="font-serif text-xl sm:text-2xl text-[#6B0F2A] mb-6">Your Safety, Our Priority</h2>

                    <ol className="space-y-5">
                      {journeySteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-4 dept-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                          <div className="w-10 h-10 rounded-full bg-[#0E3B39]/10 flex items-center justify-center shrink-0 text-[#0E3B39]">
                            <Icon name={QUICK_NAV_ICON_ORDER[i % QUICK_NAV_ICON_ORDER.length]} className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 mb-0.5">{String(i + 1).padStart(2, "0")}</p>
                            <h4 className="text-sm sm:text-base font-semibold text-gray-800">{step}</h4>
                            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                              {JOURNEY_BLURBS[i % JOURNEY_BLURBS.length]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                </div>
              </section>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-6">
              <InfoSidebar department={department} />
            </div>
          </div>
        </div>

        {/* ================= DEPARTMENT GALLERY ================= */}
        {gallery.length > 0 && (
          <section className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-[#f7f4ef] p-5 shadow-[0_18px_50px_rgba(14,59,57,0.10)] sm:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-red-600">Department Gallery</p>
                <h2 className="mt-2 font-serif text-2xl text-[#5c1029] sm:text-3xl">A Closer Look at Our Care</h2>
                <p className="mt-2 text-sm text-slate-500">Thoughtfully designed spaces for comfortable, expert-led care.</p>
              </div>
              <span className="rounded-full border border-[#0E3B39]/10 bg-white px-3.5 py-2 text-xs font-bold text-[#0E3B39] shadow-sm">
                {gallery.length} facility {gallery.length === 1 ? "photo" : "photos"}
              </span>
            </div>

            <div className={`grid grid-cols-1 gap-3 sm:grid-cols-4 ${hasSingleGalleryImage ? "" : "sm:min-h-[340px]"}`}>
              {displayedGallery.slice(0, 4).map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 text-left ring-1 ring-black/5 shadow-[0_10px_28px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,42,0.18)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    hasSingleGalleryImage
                      ? "w-full aspect-[16/9] md:aspect-[21/9] sm:col-span-4"
                      : index === 0
                        ? "sm:col-span-2 sm:row-span-2 aspect-[16/9] sm:aspect-auto"
                        : "aspect-[16/9]"
                  }`}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${department.name} gallery ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-2 text-xs font-bold text-[#0E3B39] shadow-lg">
                    View gallery ↗
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT / APPOINTMENT STRIP */}
        <div className="mt-10 bg-[#0E3B39] rounded-lg p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-4 gap-6 items-center">
          <div>
            <p className="text-white/60 text-xs tracking-[0.15em] uppercase mb-1">Have Questions?</p>
            <a href={`tel:${HOSPITAL_PHONE}`} className="text-white font-semibold hover:underline">
              {HOSPITAL_PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-white/60 text-xs tracking-[0.15em] uppercase mb-1">Location</p>
            <p className="text-white font-semibold text-sm">{HOSPITAL_LOCATION}</p>
          </div>
          <div>
            <p className="text-white/60 text-xs tracking-[0.15em] uppercase mb-1">Emergency</p>
            <a href={`tel:${HOSPITAL_PHONE}`} className="text-white font-semibold hover:underline">
              24/7 Emergency Care · {HOSPITAL_PHONE_DISPLAY}
            </a>
          </div>
          <Link
            to={APPOINTMENT_LINK}
            className="justify-self-start sm:justify-self-end bg-red-600 hover:bg-red-700 transition text-white font-semibold text-sm px-6 py-3 rounded-full text-center"
          >
            Book Appointment Now
          </Link>
        </div>
      </div>

      {/* FLOATING MOBILE CALL / BOOK BUTTON */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.06)] flex">
        <a
          href={`tel:${HOSPITAL_PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Us
        </a>
        <Link
          to={APPOINTMENT_LINK}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-red-600"
        >
          Book Appointment
        </Link>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && displayedGallery.length > 0 && (
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

          {displayedGallery.length > 1 && (
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
              src={displayedGallery[lightboxIndex]}
              alt={`${department.name} full view`}
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl object-contain"
            />
            {displayedGallery.length > 1 && (
              <div className="text-center text-white/70 text-xs mt-2 tracking-wide">
                {lightboxIndex + 1} / {displayedGallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
