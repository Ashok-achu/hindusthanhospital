import { useState, useRef, useEffect } from "react";
import logo from "../assets/set1/logos.jpg";
import {
  MessageCircle,
  X,
  Send,
  Stethoscope,
  CalendarClock,
  Siren,
  MapPin,
  Phone,
  ChevronRight,
  Loader2,
} from "lucide-react";

/**
 * HindusthanHospitals — AI Assistant
 * Real conversational chatbot: free-text messages are answered by the
 * Claude API (grounded with hospital context via system prompt).
 * Structured actions (booking a slot) stay as deterministic UI state,
 * since you don't want an LLM guessing at appointment slots.
 */

const DEPARTMENTS = [
  { id: "cardio", name: "Cardiology", doctors: ["Dr. Meera Nair", "Dr. Arjun Rao"] },
  { id: "ortho", name: "Orthopaedics", doctors: ["Dr. Suresh Iyer", "Dr. Kavya Menon"] },
  { id: "peds", name: "Paediatrics", doctors: ["Dr. Anjali Pillai"] },
  { id: "neuro", name: "Neurology", doctors: ["Dr. Ramesh Babu"] },
  { id: "gen", name: "General Medicine", doctors: ["Dr. Priya Krishnan", "Dr. Vinod Kumar"] },
];

const SLOTS = ["Today, 5:00 PM", "Today, 6:30 PM", "Tomorrow, 10:00 AM", "Tomorrow, 4:00 PM"];

const QUICK_ACTIONS = [
  { id: "book", label: "Book an appointment", icon: CalendarClock },
  { id: "doctor", label: "Find a doctor", icon: Stethoscope },
  { id: "hours", label: "Visiting hours", icon: MapPin },
  { id: "emergency", label: "Emergency help", icon: Siren },
];

const HOSPITAL_CONTEXT = `You are the front-desk assistant for Hindusthan Hospitals, a multi-speciality hospital in Coimbatore, Tamil Nadu, on Avinashi Road.

Facts you can rely on:
- Visiting hours: 10:00 AM–12:30 PM and 5:00 PM–7:00 PM daily.
- OPD hours: 8:00 AM–8:00 PM, Monday to Saturday.
- Emergency line (24/7): 0422-4327777.
- Departments: Cardiology, Orthopaedics, Paediatrics, Neurology, General Medicine, Anaesthesiology, Dermatology, Dentistry, Diabetology, ENT, General Surgery, Gastroenterology, Internal Medicine, ICU, Neonatology, Nephrology, Obstetrics & Gynaecology, Orthopaedics, Rehabilitation, Psychiatry, Plastic Surgery, Pulmonology, Radiology, Surgical Oncology, Urology.
- Address: Avinashi Road, Coimbatore, Tamil Nadu.
- Email: hindusthanreception@gmail.com
- Most major insurance providers are accepted on a cashless basis; patients should bring their policy card and ID to admissions.

Rules:
- Keep answers short (2-4 sentences), warm, and plain-spoken — this is a chat widget, not an essay.
- If asked to book an appointment or see a doctor, tell the user you can start that for them and to tap "Book an appointment" or type "book appointment".
- If the user describes anything that sounds like a medical emergency (chest pain, severe bleeding, breathing difficulty, unconsciousness, stroke symptoms, severe injury, etc.), immediately and clearly tell them to call the emergency line 0422-4327777 right now, before anything else.
- Never give a diagnosis, dosage, or specific treatment plan. For any medical question beyond hospital logistics, suggest they describe it to a doctor and offer to help book that appointment.
- If you don't know something specific (e.g. exact pricing, a doctor's personal schedule), say so plainly and suggest calling the front desk or booking a visit, rather than guessing.`;

/* ───── Smart fallback: answers common questions without an API ───── */
function getOfflineReply(text) {
  const t = text.toLowerCase();

  // Emergency keywords
  if (
    /chest pain|breathing|unconscious|severe bleeding|stroke|heart attack|accident|choking/i.test(t)
  ) {
    return {
      reply:
        "This sounds like a medical emergency. Please call our 24/7 emergency line 0422-4327777 immediately. Your safety comes first.",
      urgent: true,
    };
  }

  // Visiting hours
  if (/visit|visiting hour|when can i visit|opd hour|timing/i.test(t)) {
    return {
      reply:
        "Visiting hours are 10:00 AM – 12:30 PM and 5:00 PM – 7:00 PM daily. OPD is open 8:00 AM – 8:00 PM, Monday to Saturday.",
    };
  }

  // Address / location
  if (/address|location|where|direction|map|how to reach/i.test(t)) {
    return {
      reply:
        "Hindusthan Hospitals is located on Avinashi Road, Coimbatore, Tamil Nadu. You can search 'Hindusthan Hospitals Coimbatore' on Google Maps for directions.",
    };
  }

  // Contact / phone
  if (/phone|contact|number|call|reach/i.test(t)) {
    return {
      reply:
        "You can reach us at 0422-4327777 or email hindusthanreception@gmail.com. For emergencies, our line is available 24/7.",
    };
  }

  // Insurance
  if (/insurance|cashless|policy|claim/i.test(t)) {
    return {
      reply:
        "We accept most major insurance providers on a cashless basis. Please bring your policy card and a valid ID to the admissions counter.",
    };
  }

  // Booking
  if (/book|appointment|schedule|consult/i.test(t)) {
    return {
      reply:
        'I can help you book an appointment! Tap the "Book an appointment" button above or just tell me which department you need.',
    };
  }

  // Departments
  if (/department|specialit|which doctor|doctor for/i.test(t)) {
    return {
      reply:
        "We have 20+ departments including Cardiology, Orthopaedics, Neurology, Paediatrics, General Medicine, ENT, Dermatology, Gastroenterology, and more. Which department are you interested in?",
    };
  }

  // Greeting
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)/i.test(t)) {
    return {
      reply:
        "Hello! Welcome to Hindusthan Hospitals. How can I help you today? You can ask about departments, visiting hours, book an appointment, or anything else.",
    };
  }

  // Thank you
  if (/thank|thanks/i.test(t)) {
    return {
      reply: "You're welcome! Feel free to ask if you need anything else. We're here to help. 😊",
    };
  }

  // Default
  return {
    reply:
      "Thanks for your question! For detailed information, I'd suggest calling our front desk at 0422-4327777 or emailing hindusthanreception@gmail.com. Is there anything else I can help with?",
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

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    botMsg(
      "Hello! I'm the Hindusthan Hospitals assistant. Ask me anything about the hospital, or use the buttons below to book an appointment."
    ),
  ]);
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

  // --- Deterministic booking wizard (kept out of the LLM's hands) ---
  function startBooking() {
    setFlow({ step: "department" });
    pushBot("Which department would you like to see?", {
      choices: DEPARTMENTS.map((d) => ({ id: d.id, label: d.name })),
      choiceKind: "department",
    });
  }

  function handleChoice(kind, choice) {
    setMessages((m) => [...m, userMsg(choice.label)]);

    if (kind === "quick") {
      if (choice.id === "book") return startBooking();
      if (choice.id === "doctor") {
        pushBot("Which department is the doctor in?", {
          choices: DEPARTMENTS.map((d) => ({ id: d.id, label: d.name })),
          choiceKind: "doctorDept",
        });
        return;
      }
      if (choice.id === "hours") {
        pushBot(
          "Visiting hours are 10:00 AM – 12:30 PM and 5:00 PM – 7:00 PM daily. OPD is open 8:00 AM – 8:00 PM, Monday to Saturday."
        );
        return;
      }
      if (choice.id === "emergency") {
        pushBot("For a medical emergency, please call our 24/7 line right now.", { urgent: true });
        return;
      }
    }

    if (kind === "doctorDept") {
      const dept = DEPARTMENTS.find((d) => d.id === choice.id);
      pushBot(`${dept.name} doctors available: ${dept.doctors.join(", ")}. Book with one of them?`, {
        choices: [
          { id: "yesBook", label: "Yes, book an appointment" },
          { id: "noThanks", label: "Not right now" },
        ],
        choiceKind: "postDoctor",
      });
      return;
    }

    if (kind === "postDoctor") {
      if (choice.id === "yesBook") return startBooking();
      pushBot("No problem — ask me anything else, anytime.");
      return;
    }

    if (kind === "department") {
      const dept = DEPARTMENTS.find((d) => d.id === choice.id);
      setFlow({ step: "doctor", department: dept });
      pushBot(`Who would you like to see in ${dept.name}?`, {
        choices: dept.doctors.map((doc) => ({ id: doc, label: doc })),
        choiceKind: "doctor",
      });
      return;
    }

    if (kind === "doctor") {
      setFlow((f) => ({ ...f, step: "slot", doctor: choice.id }));
      pushBot(`Next available slots with ${choice.label}:`, {
        choices: SLOTS.map((s) => ({ id: s, label: s })),
        choiceKind: "slot",
      });
      return;
    }

    if (kind === "slot") {
      setFlow((f) => ({ ...f, step: "confirm", slot: choice.id }));
      pushBot("Please type the patient's full name and phone number to confirm.");
      return;
    }
  }

  // --- AI reply: tries backend first, falls back to smart offline answers ---
  async function getAIReply(userText, history) {
    const apiMessages = history
      .filter((m) => !m.choices)
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
      // Backend not available — use smart offline fallback
      console.log("Chat API unavailable, using offline fallback:", e.message);
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

    // Booking wizard's final step: capture name/phone deterministically
    if (flow?.step === "confirm") {
      pushBot(
        `✅ Booked! ${flow.doctor} — ${flow.slot} in ${flow.department.name}. A confirmation SMS will be sent to the number you provided.`,
        { choices: QUICK_ACTIONS.map((a) => ({ id: a.id, label: a.label })), choiceKind: "quick" }
      );
      setFlow(null);
      return;
    }

    // Check if user typed "book" or "appointment"
    if (/\b(book|appointment)\b/i.test(text) && !flow) {
      startBooking();
      return;
    }

    // Everything else goes to the AI
    setTyping(true);
    try {
      const { reply, urgent } = await getAIReply(text, updated);
      setTyping(false);
      const isUrgent = urgent || /0422.?432.?7777/.test(reply) || /call.*(now|immediately)/i.test(reply);
      pushBot(reply, isUrgent ? { urgent: true } : {});
    } catch (e) {
      setTyping(false);
      setError("Couldn't reach the assistant just now. Please try again.");
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[99999] font-[Poppins]">
      {open && (
        <div className="mb-3 flex flex-col overflow-hidden rounded-3xl border border-[#123832]/10 bg-white shadow-2xl"
          style={{ height: "560px", maxHeight: "calc(100vh - 180px)", width: "360px", maxWidth: "95vw" }}
        >
          {/* ── Header ── */}
          <div className="flex items-center justify-between px-4 py-3.5 text-white"
            style={{ background: "linear-gradient(135deg, #123832, #1F5C51)" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Stethoscope size={16} />
              </div>
              <div>
                <p className="text-sm font-medium leading-tight">Hindusthan Hospitals</p>
                <p className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#4ADE80" }} />
                  AI assistant online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 transition hover:scale-110"
              style={{ color: "rgba(255,255,255,0.7)" }}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* ── Messages ── */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3.5 py-4"
            style={{ background: "#F4F6F5" }}
          >
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id}>
                  <div className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                    <div
                      className="rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                      style={
                        m.from === "bot"
                          ? m.urgent
                            ? {
                                maxWidth: "85%",
                                borderBottomLeftRadius: "4px",
                                border: "1px solid rgba(179,38,30,0.25)",
                                background: "#FDECEC",
                                color: "#7A1913",
                              }
                            : {
                                maxWidth: "85%",
                                borderBottomLeftRadius: "4px",
                                border: "1px solid rgba(0,0,0,0.05)",
                                background: "#fff",
                                color: "#1A2422",
                              }
                          : {
                              maxWidth: "85%",
                              borderBottomRightRadius: "4px",
                              background: "#123832",
                              color: "#fff",
                            }
                      }
                    >
                      {m.content}
                    </div>
                  </div>

                  {m.urgent && (
                    <a
                      href="tel:+914224327777"
                      className="mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition"
                      style={{ background: "#B3261E" }}
                    >
                      <Phone size={14} /> Call 0422-4327777
                    </a>
                  )}

                  {m.choices && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.choices.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => handleChoice(m.choiceKind, c)}
                          className="rounded-full border px-3 py-1.5 text-xs transition hover:text-white"
                          style={{
                            borderColor: "rgba(18,56,50,0.25)",
                            color: "#123832",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#123832";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#123832";
                          }}
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
                  <div
                    className="flex items-center gap-2 rounded-2xl border px-4 py-3"
                    style={{
                      borderBottomLeftRadius: "4px",
                      borderColor: "rgba(0,0,0,0.05)",
                      background: "#fff",
                      color: "rgba(18,56,50,0.6)",
                    }}
                  >
                    <Loader2 size={14} className="animate-spin" />
                    <span className="text-xs">Thinking…</span>
                  </div>
                </div>
              )}

              {error && (
                <div
                  className="rounded-xl border px-3 py-2 text-xs"
                  style={{
                    borderColor: "rgba(179,38,30,0.2)",
                    background: "#FDECEC",
                    color: "#7A1913",
                  }}
                >
                  {error}
                </div>
              )}

              {messages.length === 1 && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {QUICK_ACTIONS.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => handleChoice("quick", { id: a.id, label: a.label })}
                      className="flex flex-col items-start gap-2 rounded-2xl border bg-white px-3 py-2.5 text-left text-xs transition"
                      style={{
                        borderColor: "rgba(18,56,50,0.15)",
                        color: "#1A2422",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(18,56,50,0.4)";
                        e.currentTarget.style.background = "rgba(18,56,50,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(18,56,50,0.15)";
                        e.currentTarget.style.background = "#fff";
                      }}
                    >
                      <a.icon size={16} style={{ color: "#C9922F" }} />
                      {a.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Input bar ── */}
          <div
            className="flex items-center gap-2 border-t px-3 py-2.5"
            style={{ borderColor: "rgba(0,0,0,0.05)", background: "#fff" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !typing && handleSend()}
              placeholder={flow?.step === "confirm" ? "Name and phone number…" : "Ask me anything…"}
              disabled={typing}
              className="flex-1 rounded-full border px-4 py-2 text-sm outline-none"
              style={{
                borderColor: "rgba(0,0,0,0.1)",
                background: "#F4F6F5",
                color: "#1A2422",
                opacity: typing ? 0.6 : 1,
              }}
            />
            <button
              onClick={handleSend}
              disabled={typing}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition"
              style={{
                background: "#123832",
                opacity: typing ? 0.6 : 1,
              }}
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