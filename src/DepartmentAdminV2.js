import { useEffect, useState } from "react";
import departmentsData from "./departments/departmentsData";

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";
const empty = { name:"", slug:"", description:"", services:"", advantages:"", technology:"", doctors:"[]", visitingConsultants:"[]", image:"" };
const Card = ({ title, help, children, className="" }) => <section className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}><h2 className="text-base font-bold text-[#0E5260]">{title}</h2>{help && <p className="mt-1 text-xs text-slate-500">{help}</p>}<div className="mt-4 grid gap-3">{children}</div></section>;
const Field = ({ label, help, ...props }) => <label className="grid gap-1 text-sm font-semibold text-slate-700">{label}{help && <span className="font-normal text-xs text-slate-500">{help}</span>}<input {...props} className="rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-[#0E5260] focus:ring-2 focus:ring-[#0E5260]/15" /></label>;

export default function DepartmentAdminV2() {
  const [token, setToken] = useState(() => localStorage.getItem("departmentAdminToken") || "");
  const [credentials, setCredentials] = useState({ email:"", password:"" }); const [items, setItems] = useState([]);
  const [form, setForm] = useState(() => { try { return { ...empty, ...JSON.parse(localStorage.getItem("departmentAdminDraft") || "{}") }; } catch { return empty; } });
  const [editing, setEditing] = useState(null); const [hero, setHero] = useState(null); const [gallery, setGallery] = useState([]); const [kept, setKept] = useState([]); const [message, setMessage] = useState("");
  const load = async () => setItems(await (await fetch(`${API}/api/departments`)).json());
  useEffect(() => { if (token) load().catch(() => setMessage("Could not load local data.")); }, [token]);
  useEffect(() => localStorage.setItem("departmentAdminDraft", JSON.stringify(form)), [form]);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const login = async (e) => { e.preventDefault(); const r = await fetch(`${API}/api/admin/login`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(credentials) }); const d = await r.json(); if (!r.ok) return setMessage(d.message); localStorage.setItem("departmentAdminToken", d.token); setToken(d.token); };
  const edit = (d) => {
    const saved = items.find((x) => x.slug === d.slug);
    const defaultVersion = departmentsData.find((x) => x.slug === d.slug);
    const source = saved ? { ...defaultVersion, ...saved, image: saved.image || defaultVersion?.image } : d;
    setEditing(saved || d);
    setForm({
      name: source.name,
      slug: source.slug,
      description: source.description || "",
      services: (source.services || []).join("\n"),
      advantages: (source.advantages || []).join("\n"),
      technology: (source.technology || []).join("\n"),
      doctors: JSON.stringify(source.doctors || [], null, 2),
      visitingConsultants: JSON.stringify(source.visitingConsultants || [], null, 2),
      image: source.image || ""
    });
    setKept(saved?.gallery || []);
    setHero(null);
    setGallery([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const save = async (e) => { e.preventDefault(); try { JSON.parse(form.doctors); JSON.parse(form.visitingConsultants); } catch { return setMessage("Doctors must be valid JSON. Keep the square brackets."); } const data = new FormData(); Object.entries(form).forEach(([k,v]) => data.append(k,v)); if (hero) data.append("hero",hero); Array.from(gallery).forEach((file) => data.append("gallery",file)); if (kept.length) data.append("keepGallery", kept.join("\n")); const update = editing?._id; let r = await fetch(`${API}/api/departments${update?`/${editing._id}`:""}`, {method:update?"PUT":"POST",headers:{Authorization:`Bearer ${token}`},body:data}); if (update && r.status===404) r=await fetch(`${API}/api/departments`,{method:"POST",headers:{Authorization:`Bearer ${token}`},body:data}); const d=await r.json().catch(()=>({})); if(!r.ok)return setMessage(d.message||"Could not save."); localStorage.removeItem("departmentAdminDraft"); setForm(empty); setEditing(null); setKept([]); setMessage("Department saved locally."); load(); };
  if (!token) return <main className="mx-auto max-w-md p-6"><Card title="Department admin" help="Sign in to manage local department content."><form onSubmit={login} className="grid gap-3"><Field label="Username" required onChange={(e)=>setCredentials({...credentials,email:e.target.value})}/><Field label="Password" type="password" required onChange={(e)=>setCredentials({...credentials,password:e.target.value})}/><button className="rounded-lg bg-[#0E5260] p-3 font-bold text-white">Sign in</button>{message&&<p className="text-sm text-red-600">{message}</p>}</form></Card></main>;
  const all = departmentsData.map((defaultDept) => {
    const managed = items.find((m) => m.slug === defaultDept.slug);
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
    items.filter((m) => !departmentsData.some((d) => d.slug === m.slug))
  );
  return <main className="mx-auto max-w-6xl bg-slate-50 p-4 sm:p-8"><header className="mb-6 flex items-center justify-between"><div><h1 className="text-2xl font-bold text-[#0E5260]">Department editor</h1><p className="text-sm text-slate-500">Clear sections. Saved locally.</p></div><button onClick={()=>{localStorage.removeItem("departmentAdminToken");setToken("")}} className="text-sm font-bold text-red-700">Sign out</button></header><form onSubmit={save} className="grid gap-5 md:grid-cols-2"><Card title="1. Department basics" help="This appears in the page title and URL."><Field label="Department name" name="name" value={form.name} onChange={change} required/><Field label="URL slug" name="slug" value={form.slug} onChange={change} help="Example: pulmonology"/></Card><Card title="2. Hero image" help="Main image at the top of the page."><input accept="image/*" type="file" onChange={(e)=>setHero(e.target.files[0])}/>{form.image&&<img src={form.image} alt="Current hero" className="h-28 w-full rounded-lg object-cover"/>}</Card><Card title="3. Main description" className="md:col-span-2"><textarea name="description" value={form.description} onChange={change} placeholder="Write the department introduction and detailed content here." className="min-h-44 rounded-lg border p-3"/></Card><Card title="4. Services" help="One service per line."><textarea name="services" value={form.services} onChange={change} placeholder="Pulmonary Function Testing" className="min-h-36 rounded-lg border p-3"/></Card><Card title="5. Why choose us" help="One benefit per line; shown in the sidebar."><textarea name="advantages" value={form.advantages} onChange={change} placeholder="Experienced specialists" className="min-h-36 rounded-lg border p-3"/></Card><Card title="6. Technology and infrastructure" help="One item per line."><textarea name="technology" value={form.technology} onChange={change} className="min-h-32 rounded-lg border p-3"/></Card><Card title="7. Gallery" help="Add new images or remove an existing image."><input accept="image/*" multiple type="file" onChange={(e)=>setGallery(e.target.files)}/><div className="flex flex-wrap gap-2">{kept.map((image)=><button key={image} type="button" onClick={()=>setKept(kept.filter((x)=>x!==image))} className="relative h-16 w-20 overflow-hidden rounded"><img src={image} alt="Gallery" className="h-full w-full object-cover"/><b className="absolute right-0 top-0 bg-red-600 px-1 text-white">×</b></button>)}</div></Card><Card title="8. Doctors" help="Use the existing format; doctor photos can be uploaded in order." className="md:col-span-2"><textarea name="doctors" value={form.doctors} onChange={change} className="min-h-44 rounded-lg border p-3 font-mono text-xs"/><textarea name="visitingConsultants" value={form.visitingConsultants} onChange={change} className="min-h-32 rounded-lg border p-3 font-mono text-xs" placeholder="Visiting consultants"/></Card><div className="md:col-span-2 flex gap-3"><button className="rounded-lg bg-[#0E5260] px-6 py-3 font-bold text-white">Save department</button>{editing&&<button type="button" onClick={()=>{setEditing(null);setForm(empty);setKept([])}} className="rounded-lg border px-6 py-3">Cancel</button>}{message&&<p className="self-center text-sm text-[#0E5260]">{message}</p>}</div></form><section className="mt-10"><h2 className="mb-3 text-lg font-bold">All departments</h2><div className="grid gap-2 sm:grid-cols-2">{all.map((d)=><button key={d.slug} onClick={()=>edit(d)} className="rounded-lg bg-white p-4 text-left font-semibold shadow-sm hover:ring-2 hover:ring-[#0E5260]/20">{d.name}<span className="float-right text-sm text-[#0E5260]">Edit</span></button>)}</div></section></main>;
}
