import { useEffect, useState } from "react";
import departmentsData from "./departments/departmentsData";

/* eslint-disable no-unreachable */

const API = process.env.REACT_APP_API_URL || "http://localhost:5000";
const blank = { name: "", slug: "", description: "", services: "", advantages: "", technology: "", doctors: "[]", visitingConsultants: "[]", image: "" };

export default function DepartmentAdmin() {
  const [token, setToken] = useState(() => localStorage.getItem("departmentAdminToken") || "");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState(() => {
    try { return { ...blank, ...JSON.parse(localStorage.getItem("departmentAdminDraft") || "{}")} } catch { return blank; }
  });
  const [editing, setEditing] = useState(null);
  const [hero, setHero] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [doctorPhotos, setDoctorPhotos] = useState([]);
  const [keptGallery, setKeptGallery] = useState([]);
  const [removeHero, setRemoveHero] = useState(false);
  const [message, setMessage] = useState("");

  const load = async () => setDepartments(await (await fetch(`${API}/api/departments`)).json());
  useEffect(() => { if (token) load().catch(() => setMessage("Could not load departments.")); }, [token]);
  useEffect(() => { localStorage.setItem("departmentAdminDraft", JSON.stringify(form)); }, [form]);
  const field = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const login = async (event) => {
    event.preventDefault(); setMessage("");
    const response = await fetch(`${API}/api/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) });
    const data = await response.json();
    if (!response.ok) return setMessage(data.message);
    localStorage.setItem("departmentAdminToken", data.token); setToken(data.token);
  };
  const edit = (department) => {
    const managedVersion = departments.find((item) => item.slug === department.slug);
    const defaultVersion = departmentsData.find((item) => item.slug === department.slug);
    const source = managedVersion ? { ...defaultVersion, ...managedVersion, image: managedVersion.image || defaultVersion?.image } : department;
    setEditing(source); setForm({ name: source.name, slug: source.slug, description: source.description || "", services: (source.services || []).join("\n"), advantages: (source.advantages || []).join("\n"), technology: (source.technology || []).join("\n"), doctors: JSON.stringify(source.doctors || [], null, 2), visitingConsultants: JSON.stringify(source.visitingConsultants || [], null, 2), image: source.image || "" }); setHero(null); setGallery([]); setKeptGallery(source.gallery || []); setRemoveHero(false); window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const save = async (event) => {
    event.preventDefault(); const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    try { JSON.parse(form.doctors); JSON.parse(form.visitingConsultants); } catch { return setMessage("Doctors and visiting consultants must contain valid JSON."); }
    if (hero) data.append("hero", hero); if (removeHero) data.append("removeHero", "true"); Array.from(gallery).forEach((file) => data.append("gallery", file)); Array.from(doctorPhotos).forEach((file) => data.append("doctorPhotos", file));
    if (keptGallery.length) data.append("keepGallery", keptGallery.join("\n"));
    const isEdit = !!(editing && editing._id);
    const request = (method, id = "") => fetch(`${API}/api/departments${id ? `/${id}` : ""}`, {
      method,
      headers: { Authorization: `Bearer ${token}` },
      body: data
    });
    let response = await request(isEdit ? "PUT" : "POST", isEdit ? editing._id : "");
    let result = await response.json().catch(() => ({}));

    // Built-in departments are saved as API overrides. If an override was
    // deleted outside this page, its stored id is stale; recreate it instead
    // of leaving the editor with an unhelpful "Department not found" error.
    if (isEdit && response.status === 404) {
      response = await request("POST");
      result = await response.json().catch(() => ({}));
    }
    if (!response.ok) return setMessage(result.message || "Could not save department.");
    setMessage("Department saved locally."); localStorage.removeItem("departmentAdminDraft"); setForm(blank); setEditing(null); setHero(null); setGallery([]); setKeptGallery([]); setRemoveHero(false); load();
  };
  const remove = async (department) => {
    if (!window.confirm(`Delete ${department.name}?`)) return;
    await fetch(`${API}/api/departments/${department._id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }); load();
  };
  if (!token) return <main className="mx-auto max-w-md p-6"><h1 className="text-2xl font-bold text-[#0E5260]">Department admin</h1><form onSubmit={login} className="mt-6 space-y-4 rounded-xl bg-white p-6 shadow"><input required type="text" placeholder="Username" autoComplete="username" className="w-full rounded border p-3" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}/><input required type="password" placeholder="Password" autoComplete="current-password" className="w-full rounded border p-3" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/><button className="w-full rounded bg-[#0E5260] p-3 font-semibold text-white">Sign in</button>{message && <p className="text-sm text-red-600">{message}</p>}</form></main>;
  const editableDepartments = departmentsData.map((defaultDept) => {
    const managed = departments.find((m) => m.slug === defaultDept.slug);
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
    departments.filter((m) => !departmentsData.some((d) => d.slug === m.slug))
  );
  return <main className="mx-auto max-w-6xl p-4 sm:p-8"><div className="mb-6 flex items-center justify-between"><div><h1 className="text-2xl font-bold text-[#0E5260]">Department content manager</h1><p className="text-sm text-slate-500">Saved locally on this computer.</p></div><button onClick={() => { localStorage.removeItem("departmentAdminToken"); setToken(""); }} className="text-sm font-semibold text-red-700">Sign out</button></div><form onSubmit={save} className="grid gap-4 rounded-xl bg-white p-5 shadow sm:grid-cols-2"><h2 className="sm:col-span-2 text-lg font-bold">{editing ? `Edit ${editing.name}` : "Add department"}</h2><input required name="name" value={form.name} onChange={field} placeholder="Department name" className="rounded border p-3"/><input name="slug" value={form.slug} onChange={field} placeholder="URL slug (optional)" className="rounded border p-3"/><textarea name="description" value={form.description} onChange={field} placeholder="Description" className="min-h-28 rounded border p-3 sm:col-span-2"/><textarea name="services" value={form.services} onChange={field} placeholder="Services — one per line" className="min-h-28 rounded border p-3"/><textarea name="advantages" value={form.advantages} onChange={field} placeholder="Why choose us — one per line" className="min-h-28 rounded border p-3"/><textarea name="technology" value={form.technology} onChange={field} placeholder="Technology — one per line" className="min-h-28 rounded border p-3"/><div><label className="block text-sm font-semibold">Hero image</label><input accept="image/*" type="file" onChange={(e) => { setHero(e.target.files[0]); setRemoveHero(false); }}/>{form.image && !form.image.startsWith("/static/") && !removeHero && <button type="button" onClick={() => setRemoveHero(true)} className="mt-2 block text-xs font-semibold text-red-700">Remove current hero</button>}{removeHero && <button type="button" onClick={() => setRemoveHero(false)} className="mt-2 block text-xs font-semibold text-[#0E5260]">Keep current hero</button>}</div><div><label className="block text-sm font-semibold">Add gallery images</label><input accept="image/*" multiple type="file" onChange={(e) => setGallery(e.target.files)}/><p className="mt-1 text-xs text-slate-500">New images are added on save.</p></div>{editing && <div className="sm:col-span-2"><p className="mb-2 text-sm font-semibold">Current gallery — click to remove</p><div className="flex flex-wrap gap-2">{keptGallery.length ? keptGallery.map((image) => <button key={image} type="button" onClick={() => setKeptGallery((items) => items.filter((item) => item !== image))} className="relative h-16 w-20 overflow-hidden rounded border" title="Remove image"><img src={image} alt="Gallery" className="h-full w-full object-cover"/><span className="absolute right-0 top-0 bg-red-600 px-1 text-xs text-white">×</span></button>) : <p className="text-sm text-slate-500">No gallery images.</p>}</div></div>}<textarea required name="doctors" value={form.doctors} onChange={field} placeholder='Doctors JSON: [{"name":"Dr Name","designation":"Consultant","description":"Bio"}]' className="min-h-48 rounded border p-3 font-mono text-xs sm:col-span-2"/><div className="sm:col-span-2"><label className="block text-sm font-semibold">Doctor profile images</label><p className="mb-1 text-xs text-slate-500">Upload in the same order as the doctors list.</p><input accept="image/*" multiple type="file" onChange={(e) => setDoctorPhotos(e.target.files)}/></div><textarea required name="visitingConsultants" value={form.visitingConsultants} onChange={field} placeholder="Visiting consultants JSON — same format" className="min-h-36 rounded border p-3 font-mono text-xs sm:col-span-2"/><div className="sm:col-span-2 flex gap-3"><button className="rounded bg-[#0E5260] px-5 py-3 font-semibold text-white">Save department</button>{editing && <button type="button" onClick={() => { setEditing(null); setForm(blank); setKeptGallery([]); setRemoveHero(false); }} className="rounded border px-5 py-3">Cancel</button>}</div>{message && <p className="sm:col-span-2 text-sm text-[#0E5260]">{message}</p>}</form><section className="mt-8 grid gap-3"><h2 className="text-lg font-bold">All departments</h2>{editableDepartments.map((department) => <article key={department.slug} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"><span className="font-semibold">{department.name}</span><span className="flex gap-3"><button onClick={() => edit(department)} className="text-[#0E5260]">Edit</button>{department._id && <button onClick={() => remove(department)} className="text-red-700">Delete override</button>}</span></article>)}</section></main>;
  return <main className="mx-auto max-w-6xl p-4 sm:p-8"><div className="mb-6 flex items-center justify-between"><h1 className="text-2xl font-bold text-[#0E5260]">Department content manager</h1><button onClick={() => { localStorage.removeItem("departmentAdminToken"); setToken(""); }} className="text-sm font-semibold text-red-700">Sign out</button></div><form onSubmit={save} className="grid gap-4 rounded-xl bg-white p-5 shadow sm:grid-cols-2"><h2 className="sm:col-span-2 text-lg font-bold">{editing ? `Edit ${editing.name}` : "Add department"}</h2><input required name="name" value={form.name} onChange={field} placeholder="Department name" className="rounded border p-3"/><input name="slug" value={form.slug} onChange={field} placeholder="URL slug (optional)" className="rounded border p-3"/><textarea name="description" value={form.description} onChange={field} placeholder="Description" className="min-h-28 rounded border p-3 sm:col-span-2"/><textarea name="services" value={form.services} onChange={field} placeholder="Services — one per line" className="min-h-28 rounded border p-3"/><textarea name="advantages" value={form.advantages} onChange={field} placeholder="Why choose us — one per line" className="min-h-28 rounded border p-3"/><textarea name="technology" value={form.technology} onChange={field} placeholder="Technology — one per line" className="min-h-28 rounded border p-3"/><div><label className="block text-sm font-semibold">Hero image</label><input accept="image/*" type="file" onChange={(e) => setHero(e.target.files[0])}/></div><div><label className="block text-sm font-semibold">Service/gallery images</label><input accept="image/*" multiple type="file" onChange={(e) => setGallery(e.target.files)}/></div><textarea required name="doctors" value={form.doctors} onChange={field} placeholder='Doctors JSON: [{"name":"Dr Name","designation":"Consultant","description":"Bio","image":"https://..."}]' className="min-h-48 rounded border p-3 font-mono text-xs sm:col-span-2"/><div className="sm:col-span-2"><label className="block text-sm font-semibold">Doctor profile images</label><p className="mb-1 text-xs text-slate-500">Upload in the same order as the doctors JSON. Existing image URLs are preserved.</p><input accept="image/*" multiple type="file" onChange={(e) => setDoctorPhotos(e.target.files)}/></div><textarea required name="visitingConsultants" value={form.visitingConsultants} onChange={field} placeholder="Visiting consultants JSON — same format" className="min-h-36 rounded border p-3 font-mono text-xs sm:col-span-2"/><div className="sm:col-span-2 flex gap-3"><button className="rounded bg-[#0E5260] px-5 py-3 font-semibold text-white">Save department</button>{editing && <button type="button" onClick={() => { setEditing(null); setForm(blank); }} className="rounded border px-5 py-3">Cancel</button>}</div>{message && <p className="sm:col-span-2 text-sm text-[#0E5260]">{message}</p>}</form><section className="mt-8 grid gap-3"><h2 className="text-lg font-bold">All departments</h2>{editableDepartments.map((department) => <article key={department.slug} className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"><span className="font-semibold">{department.name}</span><span className="flex gap-3"><button onClick={() => edit(department)} className="text-[#0E5260]">Edit</button>{department._id && <button onClick={() => remove(department)} className="text-red-700">Delete override</button>}</span></article>)}</section></main>;
}
