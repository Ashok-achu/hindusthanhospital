import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCheckCircle, FaPhoneAlt, FaBuilding, FaHandshake, FaChevronDown, FaChevronUp } from "react-icons/fa";
import heroImg from "../assets/bannerimage/insurancebanner.png";

/* ─── Insurance Companies ─── */
const INSURANCE_COMPANIES = [
  "IFFCO TOKIO General Insurance",
  "National Insurance Company",
  "New India Assurance Insurance",
  "Royal Sundaram General Insurance",
  "SBI General Insurance",
  "Star Health and Allied Insurance",
  "The Oriental Insurance Company",
  "United India Insurance Company",
  "TATA AIG General Insurance Company",
  "GPPSA",
];

/* ─── TPAs ─── */
const TPAS = [
  "Medi Assist Insurance TPA Private Limited",
  "MDIndia Health Insurance TPA Private Limited",
  "Heritage Health Insurance TPA Limited",
  "Family Health Plan Insurance TPA Limited",
  "Vidal Health Insurance TPA Limited",
  "Vipul Medcorp TPA Private Limited",
  "East West Assist Insurance TPA Private Limited",
  "GHPL Insurance TPA Limited",
  "Health Insurance TPA Private Limited",
  "Raksha Health Insurance TPA Limited",
];

/* ─── How it works steps ─── */
const HOW_IT_WORKS = [
  { step: "01", title: "Visit Insurance Desk", desc: "Head to our dedicated insurance desk at the admissions counter with your policy card and a valid ID." },
  { step: "02", title: "Pre-Authorisation", desc: "Our team contacts your insurer or TPA and submits the pre-authorisation request on your behalf." },
  { step: "03", title: "Approval & Admission", desc: "Once approved, you are admitted under the cashless scheme — no upfront payment required." },
  { step: "04", title: "Claim Settlement", desc: "We handle documentation and coordinate directly with the insurer for a smooth, hassle-free settlement." },
];

/* ─── Collapsible card for mobile ─── */
function CollapsibleSection({ title, icon: Icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef6f4] text-[#0b5c59]">
            <Icon className="text-base" />
          </span>
          <span className="font-bold text-[#152d35] text-base">{title}</span>
        </span>
        {open ? <FaChevronUp className="text-slate-400 text-sm shrink-0" /> : <FaChevronDown className="text-slate-400 text-sm shrink-0" />}
      </button>
      {open && <div className="border-t border-slate-100">{children}</div>}
    </div>
  );
}

export default function Insurance() {
  return (
    <main className="bg-[#f7f8f6] pb-16 pt-24 font-[Poppins] text-[#102b31] sm:pt-28">

      {/* ── HERO ── */}
      <section className="relative isolate min-h-[340px] overflow-hidden bg-[#061d29] sm:min-h-[520px]">
        <img src={heroImg} alt="Insurance & Cashless at Hindusthan Hospital" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,29,.98)_0%,rgba(3,18,29,.87)_36%,rgba(3,18,29,.38)_68%,rgba(3,18,29,.08)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-white/70" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/35">›</span>
            <Link to="/facilities" className="transition hover:text-white">Facilities</Link>
            <span className="text-white/35">›</span>
            <span className="text-[#5dd3c3]">Insurance & Cashless</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl pt-10 sm:pt-28"
          >
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e9b45b]">
              Hassle-free care <span className="h-px w-12 bg-[#e9b45b]/60" />
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Insurance &<br />Cashless Facility
            </h1>
            <p className="mt-2 font-serif text-lg text-[#e9b45b] sm:text-2xl">Support Beyond Treatment</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/90 sm:text-base">
              Our dedicated insurance desk assists eligible patients with cashless approvals, documentation and seamless coordination with insurers and TPAs — so you can focus entirely on recovery.
            </p>
            <a
              href="tel:04224327777"
              className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-[#d5b875]/70 bg-[#062430]/80 px-5 py-3.5 text-white shadow-xl backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#0b3542]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b615f] text-xl text-[#61e0cf]">
                <FaPhoneAlt />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-white/70">24×7 Helpline</span>
                <strong className="text-xl tracking-wide">0422 432 7777</strong>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:-mt-10 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_44px_rgba(8,37,43,.15)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <FaShieldAlt />, title: "Cashless Hospitalisation", text: "No upfront payments — we handle it directly with your insurer." },
            { icon: <FaHandshake />, title: "TPA Coordination", text: "Seamless liaison with all major TPAs for quick approvals." },
            { icon: <FaCheckCircle />, title: "Pre-Authorisation", text: "Our team submits and follows up on your behalf." },
            { icon: <FaBuilding />, title: "10 + Insurers", text: "Accepted by all major general and health insurance companies." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 border-b border-slate-100 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8c79d] bg-[#f6faf8] text-xl text-[#0b5c59]">
                {item.icon}
              </span>
              <div>
                <h2 className="text-sm font-bold text-[#152d35]">{item.title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c78f35]">Simple Process</p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#123940] sm:text-3xl">How Cashless Works</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-[#eef6f4] absolute top-4 right-5 select-none">{item.step}</span>
              <div className="relative">
                <span className="mb-3 inline-block rounded-xl bg-[#eef6f4] px-3 py-1 text-xs font-bold text-[#0b5c59]">
                  Step {item.step}
                </span>
                <h3 className="font-bold text-[#152d35] text-sm">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INSURANCE COMPANIES & TPAS ── */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c78f35]">Accepted Partners</p>
          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#123940] sm:text-3xl">
            Insurance Companies & TPAs
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500">
            We work with all major insurance providers and Third Party Administrators to ensure a smooth, cashless experience for our patients.
          </p>
        </div>

        {/* Desktop: two columns side by side */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6">

          {/* Insurance Companies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4 bg-gradient-to-r from-[#eef6f4] to-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b5c59]/10 text-[#0b5c59] text-lg">
                <FaBuilding />
              </span>
              <div>
                <h3 className="font-bold text-[#152d35]">Insurance Companies</h3>
                <p className="text-xs text-slate-500">{INSURANCE_COMPANIES.length} empanelled insurers</p>
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              {INSURANCE_COMPANIES.map((name, i) => (
                <li key={i} className="flex items-center gap-3 px-6 py-3.5 hover:bg-[#f6faf8] transition-colors">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef6f4] text-[#0b5c59]">
                    <FaCheckCircle className="text-[10px]" />
                  </span>
                  <span className="text-sm text-slate-700 font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TPAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4 bg-gradient-to-r from-amber-50 to-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c78f35]/10 text-[#c78f35] text-lg">
                <FaHandshake />
              </span>
              <div>
                <h3 className="font-bold text-[#152d35]">Third Party Administrators (TPAs)</h3>
                <p className="text-xs text-slate-500">{TPAS.length} empanelled TPAs</p>
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              {TPAS.map((name, i) => (
                <li key={i} className="flex items-center gap-3 px-6 py-3.5 hover:bg-amber-50/50 transition-colors">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[#c78f35] font-bold text-xs">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700 font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mobile: collapsible cards */}
        <div className="flex flex-col gap-4 sm:hidden">
          <CollapsibleSection title="Insurance Companies" icon={FaBuilding} defaultOpen={true}>
            <ul className="divide-y divide-slate-100">
              {INSURANCE_COMPANIES.map((name, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-[#f6faf8] transition-colors">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef6f4] text-[#0b5c59]">
                    <FaCheckCircle className="text-[9px]" />
                  </span>
                  <span className="text-sm text-slate-700">{name}</span>
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Third Party Administrators (TPAs)" icon={FaHandshake} defaultOpen={true}>
            <ul className="divide-y divide-slate-100">
              {TPAS.map((name, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-3 hover:bg-amber-50/50 transition-colors">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[#c78f35] font-bold text-[10px]">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-700">{name}</span>
                </li>
              ))}
            </ul>
          </CollapsibleSection>
        </div>
      </section>

      {/* ── WHAT TO BRING ── */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-8 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-[#d5e3e0] bg-[#eef6f4] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <FaShieldAlt className="mt-0.5 shrink-0 text-3xl text-[#c29141]" />
            <div>
              <h3 className="font-bold text-[#17363b] text-base sm:text-lg">What to Bring for Cashless Admission</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "Health Insurance Policy Card",
                  "Valid Government Photo ID (Aadhaar / PAN / Passport)",
                  "Doctor's referral letter (if applicable)",
                  "Previous hospital records / prescriptions",
                  "TPA pre-authorisation letter (if already obtained)",
                  "Emergency contact details",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-[#0b6965]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(110deg,#062b32,#0c4c51)] px-6 py-9 text-white shadow-xl sm:px-10">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#e9b45b]">Hindusthan Hospital</p>
          <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">Here When You Need Us</h2>
              <p className="mt-2 text-white/80 text-sm">
                Visit our insurance desk at admissions or call us for guidance on cashless claims and TPA empanelment.
              </p>
            </div>
            <Link
              to="/appointment"
              className="rounded-xl bg-[#e1ad55] px-6 py-3 text-center text-sm font-bold text-[#173137] transition hover:bg-[#f2c778] whitespace-nowrap"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
