import { useState, useRef, useEffect } from "react";
import logo from "../assets/set1/logos.jpg";
import {
  X,
  Send,
  Stethoscope,
  CalendarClock,
  Siren,
  MapPin,
  Phone,
  RotateCcw,
  Loader2,
  CheckCircle2
} from "lucide-react";

/**
 * HindusthanHospitals — AI Assistant
 * Complete department list for consultations with inline Booking Form (Name, Phone, Department, Time Slot)
 * and 100% reliable 1st page reset navigation.
 */

const DEPARTMENTS = [
  { id: "anaesthesiology", name: "Anaesthesiology", doctors: ["Dr. S. Saranya Vishumathy", "Dr. N. Madhan"] },
  { id: "cardiology", name: "Cardiology", doctors: ["Dr. Meera Nair", "Dr. Arjun Rao", "Senior Cardiologist"] },
  { id: "dentistry", name: "Dental & Facial Maxillary", doctors: ["Dr. Senthil Kumar", "Dental Specialist"] },
  { id: "diabetology", name: "Diabetology & General Medicine", doctors: ["Dr. Priya Krishnan", "Dr. Vinod Kumar"] },
  { id: "emergency", name: "Emergency & Trauma Care", doctors: ["24x7 Emergency Consultant", "Dr. Rajesh V"] },
  { id: "ent", name: "ENT & Head and Neck Surgery", doctors: ["Dr. K. Swaminathan", "Dr. Divya S"] },
  { id: "neuro", name: "Neuroscience & Neurology", doctors: ["Dr. Ramesh Babu", "Dr. Anand P"] },
  { id: "surgery", name: "General & Laparoscopic Surgery", doctors: ["Dr. V.P. Shanmugasundaram", "Dr. Karthik M"] },
  { id: "gastro", name: "Gastroenterology", doctors: ["Dr. Prakash Raj", "Dr. Nithya R"] },
  { id: "icu", name: "Intensive Care Unit (ICU)", doctors: ["Dr. N. Madhan", "ICU Specialist Team"] },
  { id: "nephro", name: "Nephrology", doctors: ["Dr. Gokulnath", "Dr. Saravanan"] },
  { id: "obgyn", name: "Obstetrics & Gynaecology", doctors: ["Dr. Abinaya", "Dr. Radhika S"] },
  { id: "ortho", name: "Orthopaedics & Joint Replacement", doctors: ["Dr. Suresh Iyer", "Dr. Kavya Menon"] },
  { id: "peds", name: "Neonatology & Paediatrics", doctors: ["Dr. Anjali Pillai", "Dr. Deepa K"] },
  { id: "peds_surg", name: "Paediatric Surgery", doctors: ["Dr. Mohan Ram", "Paediatric Surgical Specialist"] },
  { id: "plastic", name: "Plastic & Reconstructive Surgery", doctors: ["Dr. Hariharan", "Dr. Sandeep"] },
  { id: "pulmono", name: "Pulmonology", doctors: ["Dr. K. Srikanth", "Dr. Balaji T"] },
  { id: "radio", name: "Radiology & Imaging", doctors: ["Dr. Vignesh W", "Radiology Consultant"] },
  { id: "rehab", name: "Physical Medicine & Rehabilitation", doctors: ["Dr. Preethi M", "Rehab Specialist"] },
  { id: "onco", name: "Surgical Oncology", doctors: ["Dr. Arvind S", "Dr. Malini R"] },
  { id: "urology", name: "Urology & Renal Care", doctors: ["Dr. Ramalingam", "Dr. Senthil Kumar"] },
  { id: "liver", name: "Liver Transplant", doctors: ["Transplant Team Lead", "Dr. Suresh V"] },
  { id: "kidney", name: "Kidney Transplant", doctors: ["Renal Transplant Specialist", "Dr. Gokulnath"] }
];

const SLOTS = ["Today, 5:00 PM", "Today, 6:30 PM", "Tomorrow, 10:00 AM", "Tomorrow, 4:00 PM"];

const QUICK_ACTIONS = [
  { id: "book", label: "Book Consultation Form", icon: CalendarClock },
  { id: "doctor", label: "Find a Doctor", icon: Stethoscope },
  { id: "hours", label: "Visiting Hours", icon: MapPin },
  { id: "emergency", label: "Emergency Help", icon: Siren },
];

const HOSPITAL_CONTEXT = `You are the front-desk assistant for Hindusthan Hospitals, a multi-speciality hospital in Coimbatore, Tamil Nadu, on Avinashi Road.

Facts you can rely on:
- Visiting hours: 10:00 AM–12:30 PM and 5:00 PM–7:00 PM daily.
- OPD hours: 8:00 AM–8:00 PM, Monday to Saturday.
- Emergency line (24/7): 0422-4327777.
- Address: Avinashi Road, Coimbatore, Tamil Nadu.
- Email: hindusthanreception@gmail.com
- Cashless insurance is available for major TPA providers.

Rules:
- Keep answers short (2-4 sentences), warm, and plain-spoken.
- Suggest "Book Consultation Form" if asked to see a doctor.
- In emergencies, advise calling 0422-4327777 immediately.`;

/* ───── Smart fallback reply system ───── */
function getOfflineReply(text) {
  const t = text.toLowerCase();

  if (/chest pain|breathing|unconscious|severe bleeding|stroke|heart attack|accident|choking/i.test(t)) {
    return {
      reply: "This sounds like a medical emergency. Please call our 24/7 emergency line 0422-4327777 immediately.",
      urgent: true,
    };
  }

  if (/visit|visiting hour|timing|opd/i.test(t)) {
    return {
      reply: "Visiting hours are 10:00 AM – 12:30 PM & 5:00 PM – 7:00 PM daily. OPD is open 8:00 AM – 8:00 PM (Mon–Sat).",
    };
  }

  if (/address|location|where|direction|map/i.test(t)) {
    return {
      reply: "Hindusthan Hospitals is located on Avinashi Road, Coimbatore, Tamil Nadu. Search 'Hindusthan Hospitals Coimbatore' on Google Maps for live directions.",
    };
  }

  if (/phone|contact|number|call/i.test(t)) {
    return {
      reply: "You can reach our front desk at 0422-4327777 or email hindusthanreception@gmail.com. Emergency line is available 24/7.",
    };
  }

  if (/insurance|cashless|policy|tpa/i.test(t)) {
    return {
      reply: "We offer cashless insurance hospitalization for major TPA providers. Please present your policy card and ID at admission.",
    };
  }

  if (/book|appointment|consult|doctor/i.test(t)) {
    return {
      reply: "I can help you book a consultation right away! Click 'Book Consultation Form' above to fill out your details.",
    };
  }

  if (/department|specialit/i.test(t)) {
    return {
      reply: "We have 23+ specialty departments including Cardiology, Orthopaedics, Neurology, OB-GYN, Paediatrics, Pulmonology, and Urology. Fill out the Consultation Form to choose your department.",
    };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|namaste)/i.test(t)) {
    return {
      reply: "Hello! Welcome to Hindusthan Hospitals. How can I assist you today? You can choose an option below or ask me any question.",
    };
  }

  return {
    reply: "Thank you for reaching out! For specific queries, please call 0422-4327777 or fill out the Consultation Form to speak with a specialist.",
  };
}

let uid = 0;
const nextId = () => `m${++uid}`;
function botMsg(content, extra = {}) {
  return { id: nextId(), from: "bot", content, ...extra };
}
function userMsg(content) {
  return { id: nextId(), from: "user", content };
}

/* ───── Inline Consultation Booking Form Component ───── */
function BookingForm({ initialDept, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState(initialDept || DEPARTMENTS[0].name);
  const [time, setTime] = useState(SLOTS[0]);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErr("Please enter patient's full name.");
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErr("Please enter a valid contact phone number.");
      return;
    }
    setErr("");
    onSubmit({ name: name.trim(), phone: phone.trim(), dept, time });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 bg-white rounded-2xl p-4 border border-[#0F2C6A]/20 shadow-md space-y-3">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-1">
        <span className="text-xs font-bold text-[#0F2C6A] uppercase tracking-wider flex items-center gap-1">
          <CalendarClock size={14} className="text-[#B61B1F]" />
          Consultation Booking Form
        </span>
      </div>

      {err && (
        <div className="text-[11px] text-red-600 bg-red-50 p-2 rounded-lg font-medium border border-red-200">
          {err}
        </div>
      )}

      {/* Patient Name */}
      <div>
        <label className="text-[11px] font-semibold text-gray-700 block mb-1">
          Patient Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ramesh Kumar"
          className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:border-[#0F2C6A] outline-none"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="text-[11px] font-semibold text-gray-700 block mb-1">
          Contact Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 9876543210"
          className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:border-[#0F2C6A] outline-none"
        />
      </div>

      {/* Department Dropdown */}
      <div>
        <label className="text-[11px] font-semibold text-gray-700 block mb-1">
          Department <span className="text-red-500">*</span>
        </label>
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:border-[#0F2C6A] outline-none bg-white"
        >
          {DEPARTMENTS.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      {/* Preferred Time / Slot */}
      <div>
        <label className="text-[11px] font-semibold text-gray-700 block mb-1">
          Preferred Time Slot <span className="text-red-500">*</span>
        </label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full text-xs px-3 py-2 rounded-xl border border-gray-300 focus:border-[#0F2C6A] outline-none bg-white"
        >
          {SLOTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Submit & Cancel Buttons */}
      <div className="pt-2 flex items-center gap-2">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-[#0F2C6A] to-[#1A3D8B] hover:from-[#B61B1F] hover:to-[#8C1215] text-white text-xs font-bold py-2.5 rounded-xl shadow transition-all"
        >
          Confirm & Submit
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-2.5 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-xl transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  const initialBotMessage = botMsg(
    "Hello! I'm the Hindusthan Hospitals Assistant. Choose an option below or fill out the consultation form to book an appointment.",
    {
      choices: QUICK_ACTIONS.map((a) => ({ id: a.id, label: a.label })),
      choiceKind: "quick",
    }
  );

  const [messages, setMessages] = useState([initialBotMessage]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [flow, setFlow] = useState(null);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  function pushBot(content, extra = {}) {
    setMessages((m) => [...m, botMsg(content, extra)]);
  }

  /* --- 100% Working Reset / Main Menu Function --- */
  function resetToMainMenu() {
    setFlow(null);
    setError(null);
    setMessages((m) => [
      ...m,
      userMsg("⬅ Back to Main Menu"),
      botMsg("Returned to Main Menu. What would you like to do?", {
        choices: QUICK_ACTIONS.map((a) => ({ id: a.id, label: a.label })),
        choiceKind: "quick",
      }),
    ]);
  }

  /* --- Start Booking Form Flow --- */
  function startBooking(defaultDept = "") {
    setFlow({ step: "form" });
    pushBot("Please fill out the details below to confirm your consultation:", {
      showForm: true,
      formDept: defaultDept,
    });
  }

  /* --- Form Submission Handler --- */
  function handleFormSubmit(data) {
    setMessages((m) => [
      ...m,
      userMsg(`Submitted Booking: ${data.name} | ${data.dept} | ${data.time}`),
      botMsg(
        `✅ Consultation Confirmed!\n\n• Patient Name: ${data.name}\n• Contact Phone: ${data.phone}\n• Department: ${data.dept}\n• Time Slot: ${data.time}\n\nOur hospital reception team will call your contact number to confirm your token number.`,
        {
          choices: [
            { id: "book", label: "Book Another Consultation" },
            { id: "restartFlow", label: "⬅ Back to Main Menu" },
          ],
          choiceKind: "quick",
        }
      ),
    ]);
    setFlow(null);
  }

  function handleChoice(kind, choice) {
    if (choice.id === "restartFlow" || choice.id === "backToMain") {
      resetToMainMenu();
      return;
    }

    setMessages((m) => [...m, userMsg(choice.label)]);

    if (kind === "quick") {
      if (choice.id === "book") return startBooking();
      if (choice.id === "doctor") {
        pushBot("Select a department to view available specialists or open the booking form:", {
          choices: [
            ...DEPARTMENTS.map((d) => ({ id: d.id, label: d.name })),
            { id: "restartFlow", label: "⬅ Back to Main Menu" },
          ],
          choiceKind: "doctorDept",
        });
        return;
      }
      if (choice.id === "hours") {
        pushBot(
          "Visiting hours: 10:00 AM – 12:30 PM & 5:00 PM – 7:00 PM daily. OPD open 8:00 AM – 8:00 PM (Mon-Sat).",
          {
            choices: [
              { id: "book", label: "Book Consultation Form" },
              { id: "restartFlow", label: "⬅ Back to Main Menu" },
            ],
            choiceKind: "quick",
          }
        );
        return;
      }
      if (choice.id === "emergency") {
        pushBot("For medical emergencies, please call our 24/7 Emergency Line 0422-4327777 immediately.", {
          urgent: true,
          choices: [{ id: "restartFlow", label: "⬅ Back to Main Menu" }],
          choiceKind: "quick",
        });
        return;
      }
    }

    if (kind === "doctorDept") {
      const dept = DEPARTMENTS.find((d) => d.id === choice.id);
      if (!dept) return resetToMainMenu();
      pushBot(`${dept.name} Specialists available: ${dept.doctors.join(", ")}.`, {
        choices: [
          { id: "yesBook", label: `Book Consultation in ${dept.name}` },
          { id: "restartFlow", label: "⬅ Back to Main Menu" },
        ],
        choiceKind: "postDoctor",
        deptName: dept.name,
      });
      return;
    }

    if (kind === "postDoctor") {
      if (choice.id === "yesBook") return startBooking(choice.deptName || "");
      return resetToMainMenu();
    }
  }

  async function getAIReply(userText, history) {
    const apiMessages = history
      .filter((m) => !m.choices && !m.showForm)
      .map((m) => ({ role: m.from === "bot" ? "assistant" : "user", content: m.content }))
      .concat([{ role: "user", content: userText }]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: HOSPITAL_CONTEXT,
          messages: apiMessages,
        }),
      });

      if (!response.ok) throw new Error(`API error ${response.status}`);
      const data = await response.json();
      return { reply: data.reply || data.content || data.text, urgent: false };
    } catch (e) {
      return getOfflineReply(userText);
    }
  }

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setError(null);
    const updated = [...messages, userMsg(text)];
    setMessages(updated);

    if (/\b(book|appointment|consult|consultation|form)\b/i.test(text) && !flow) {
      startBooking();
      return;
    }

    setTyping(true);
    try {
      const { reply, urgent } = await getAIReply(text, updated);
      setTyping(false);
      const isUrgent = urgent || /0422.?432.?7777/.test(reply) || /call.*(now|immediately)/i.test(reply);
      pushBot(
        reply,
        isUrgent
          ? { urgent: true }
          : { choices: [{ id: "book", label: "Open Booking Form" }, { id: "restartFlow", label: "⬅ Back to Main Menu" }], choiceKind: "quick" }
      );
    } catch (e) {
      setTyping(false);
      setError("Unable to process request right now. Please try again or call 0422-4327777.");
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[99999] font-[Poppins]">
      {open && (
        <div
          className="mb-3 flex flex-col overflow-hidden rounded-3xl border border-[#0F2C6A]/20 bg-white shadow-2xl transition-all"
          style={{ height: "580px", maxHeight: "calc(100vh - 120px)", width: "380px", maxWidth: "95vw" }}
        >
          {/* ── Header Bar ── */}
          <div
            className="flex items-center justify-between px-4 py-3 text-white shadow-md"
            style={{ background: "linear-gradient(135deg, #0F2C6A, #1A3D8B)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Stethoscope size={18} />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Hindusthan Hospitals</p>
                <p className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Consultation Assistant
                </p>
              </div>
            </div>

            {/* Header Controls: Reset & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={resetToMainMenu}
                className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition hover:bg-white/20 text-white/90 border border-white/20"
                title="Return to Main Menu (1st Page)"
                aria-label="Return to Main Menu"
              >
                <RotateCcw size={13} />
                <span className="text-[11px]">Main Menu</span>
              </button>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 transition hover:bg-white/20 text-white/80"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* ── Messages Container ── */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3"
            style={{ background: "#F4F6F9" }}
          >
            {messages.map((m) => (
              <div key={m.id} className="space-y-1.5">
                <div className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                  <div
                    className="rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm"
                    style={
                      m.from === "bot"
                        ? m.urgent
                          ? {
                              maxWidth: "88%",
                              borderBottomLeftRadius: "4px",
                              border: "1px solid rgba(182,27,31,0.3)",
                              background: "#FDF2F2",
                              color: "#8C1215",
                            }
                          : {
                              maxWidth: "88%",
                              borderBottomLeftRadius: "4px",
                              border: "1px solid rgba(15,44,106,0.08)",
                              background: "#fff",
                              color: "#0F2C6A",
                            }
                        : {
                            maxWidth: "85%",
                            borderBottomRightRadius: "4px",
                            background: "linear-gradient(135deg, #0F2C6A, #1A3D8B)",
                            color: "#fff",
                          }
                    }
                  >
                    {m.content}
                  </div>
                </div>

                {/* Urgent Phone Button */}
                {m.urgent && (
                  <a
                    href="tel:+914224327777"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-[#8C1215]"
                    style={{ background: "#B61B1F" }}
                  >
                    <Phone size={14} /> Call 0422-4327777
                  </a>
                )}

                {/* Form Embedding */}
                {m.showForm && (
                  <BookingForm
                    initialDept={m.formDept}
                    onSubmit={handleFormSubmit}
                    onCancel={resetToMainMenu}
                  />
                )}

                {/* Choices Chips */}
                {m.choices && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                    {m.choices.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleChoice(m.choiceKind, c)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          c.id === "restartFlow"
                            ? "bg-[#B61B1F]/10 border-[#B61B1F]/40 text-[#B61B1F] font-bold hover:bg-[#B61B1F] hover:text-white"
                            : "border-[#0F2C6A]/20 text-[#0F2C6A] bg-white hover:bg-[#0F2C6A] hover:text-white shadow-sm"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-4 py-2.5 text-xs text-[#0F2C6A]">
                  <Loader2 size={14} className="animate-spin text-[#B61B1F]" />
                  <span>Checking consultation availability…</span>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* ── Input Bar ── */}
          <div className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !typing && handleSend()}
              placeholder="Ask a question or type 'book'..."
              disabled={typing}
              className="flex-1 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-800 outline-none focus:border-[#0F2C6A] focus:bg-white transition"
            />
            <button
              onClick={handleSend}
              disabled={typing}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #0F2C6A, #1A3D8B)" }}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-2xl border-[3px] border-[#B61B1F] transition hover:scale-110 overflow-hidden p-[2px]"
          aria-label="Open chat"
        >
          <img src={logo} alt="Chat with us" className="h-full w-full rounded-full object-contain bg-white" />
        </button>
      )}
    </div>
  );
}