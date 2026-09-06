import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaBed,
  FaClinicMedical,
  FaClock,
  FaFlask,
  FaHeartbeat,
  FaHospital,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
  FaUserNurse,
} from "react-icons/fa";

const ICONS = {
  ambulance: FaAmbulance,
  bed: FaBed,
  clinic: FaClinicMedical,
  clock: FaClock,
  flask: FaFlask,
  heart: FaHeartbeat,
  hospital: FaHospital,
  nurse: FaUserNurse,
  shield: FaShieldAlt,
  stethoscope: FaStethoscope,
};

export default function FacilityPageTemplate({ facility }) {
  const {
    title,
    eyebrow,
    tagline,
    description,
    featuredNote,
    heroImage,
    featureImage = heroImage,
    highlights,
    services,
    safetyNote,
    phone = "0422 432 7777",
    ctaTitle = "Here When You Need Us",
  } = facility;

  return (
    <main className="bg-[#f7f8f6] pb-16 pt-0 font-[Poppins] text-[#102b31]">
      <section className="relative isolate min-h-[420px] overflow-hidden bg-[#061d29] sm:min-h-[560px] lg:min-h-[620px]">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-center opacity-90 sm:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03121d]/90 via-[#03121d]/75 to-[#03121d]/90 sm:bg-[linear-gradient(90deg,rgba(3,18,29,.98)_0%,rgba(3,18,29,.87)_36%,rgba(3,18,29,.38)_68%,rgba(3,18,29,.08)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-8 sm:py-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-white/70" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/35">›</span>
            <Link to="/facilities" className="transition hover:text-white">Facilities</Link>
            <span className="text-white/35">›</span>
            <span className="text-[#5dd3c3]">{title}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl pt-6 sm:pt-24 lg:pt-32"
          >
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e9b45b]">
              {eyebrow}<span className="h-px w-12 bg-[#e9b45b]/60" />
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-7xl">{title}</h1>
            <p className="mt-2 font-serif text-lg text-[#e9b45b] sm:text-3xl lg:text-4xl">{tagline}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/90 sm:mt-6 sm:text-base sm:leading-7">{description}</p>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-6 inline-flex w-full items-center justify-center gap-4 rounded-2xl border border-[#d5b875]/70 bg-[#062430]/80 px-5 py-3.5 text-white shadow-xl backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#0b3542] sm:w-auto">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b615f] text-xl text-[#61e0cf]"><FaPhoneAlt /></span>
              <span><span className="block text-[10px] font-bold uppercase tracking-[.14em] text-white/70">24×7 Helpline</span><strong className="text-lg tracking-wide sm:text-xl">{phone}</strong></span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-4 sm:-mt-10 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_44px_rgba(8,37,43,.15)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = ICONS[item.icon] || FaShieldAlt;
            return <div key={item.title} className="flex gap-3 border-b border-slate-100 p-4 sm:p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c79d] bg-[#f6faf8] text-xl text-[#0b5c59]"><Icon /></span>
              <div><h2 className="text-sm font-bold text-[#152d35]">{item.title}</h2><p className="mt-1 text-xs leading-5 text-slate-600">{item.text}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-10 sm:gap-10 sm:px-8 sm:pb-14 sm:pt-14 lg:grid-cols-2 lg:items-center lg:px-10">
        <motion.img
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={featureImage}
          alt={`${title} at Hindusthan Hospital`}
          className="h-[280px] xs:h-[340px] sm:h-[450px] w-full rounded-3xl object-contain sm:object-cover bg-white shadow-[0_16px_35px_rgba(15,43,49,.16)] p-2 sm:p-0"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c78f35]">Fully equipped</p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#123940] sm:mt-3 sm:text-4xl">Care built around every patient</h2>

          {featuredNote && (
            <div className="mt-4 rounded-2xl border-l-4 border-[#c78f35] bg-gradient-to-r from-amber-50 to-teal-50/60 p-4 shadow-sm sm:mt-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c78f35]">Key Highlight</span>
              <p className="mt-1 text-xs font-semibold text-[#102b31] leading-relaxed sm:text-sm">
                {featuredNote}
              </p>
            </div>
          )}

          <div className="mt-5 grid gap-x-8 gap-y-2.5 grid-cols-1 sm:mt-6 sm:gap-y-3 sm:grid-cols-2">
            {services.map((service) => <p key={service} className="flex items-start gap-2 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6"><span className="mt-0.5 text-[#0b6965]">✓</span>{service}</p>)}
          </div>
          <div className="mt-6 flex gap-4 rounded-2xl border border-[#d5e3e0] bg-[#eef6f4] p-4 sm:mt-7 sm:p-5">
            <FaShieldAlt className="mt-0.5 shrink-0 text-2xl text-[#c29141] sm:text-3xl" />
            <div><h3 className="text-sm font-bold text-[#17363b] sm:text-base">Your Safety. Our Priority.</h3><p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{safetyNote}</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(110deg,#062b32,#0c4c51)] px-5 py-7 text-white shadow-xl sm:px-10 sm:py-9">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e9b45b]">Hindusthan Hospital</p>
          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><h2 className="font-serif text-2xl sm:text-4xl">{ctaTitle}</h2><p className="mt-1.5 text-xs text-white/80 sm:mt-2 sm:text-base">Safe, supportive and dependable care—whenever you need it.</p></div>
            <Link to="/appointment" className="w-full rounded-xl bg-[#e1ad55] px-6 py-3 text-center text-sm font-bold text-[#173137] transition hover:bg-[#f2c778] sm:w-auto">Book an Appointment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
