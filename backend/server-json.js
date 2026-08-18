require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const app = express();
const uploads = path.join(__dirname, "uploads", "departments");
const database = path.join(__dirname, "data", "departments.json");
const doctorDatabase = path.join(__dirname, "data", "doctors.json");
fs.mkdirSync(uploads, { recursive: true });
fs.mkdirSync(path.dirname(database), { recursive: true });
if (!fs.existsSync(database)) fs.writeFileSync(database, "[]\n");
if (!fs.existsSync(doctorDatabase)) fs.writeFileSync(doctorDatabase, "[]\n");
const read = () => { try { return JSON.parse(fs.readFileSync(database, "utf8")); } catch { return []; } };
const write = (value) => fs.writeFileSync(database, `${JSON.stringify(value, null, 2)}\n`);
const readDoctors = () => { try { return JSON.parse(fs.readFileSync(doctorDatabase, "utf8")); } catch { return []; } };
const writeDoctors = (value) => fs.writeFileSync(doctorDatabase, `${JSON.stringify(value, null, 2)}\n`);
const list = (value) => String(value || "").split("\n").map((item) => item.trim()).filter(Boolean);
const people = (value) => { try { const valueAsJson = JSON.parse(value || "[]"); return Array.isArray(valueAsJson) ? valueAsJson : []; } catch { return null; } };
const slug = (value = "") => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const localUpload = (value) => typeof value === "string" && value.startsWith("/uploads/departments/");
const removeUpload = (value) => {
  if (!localUpload(value)) return;
  const target = path.join(uploads, path.basename(value));
  if (fs.existsSync(target)) fs.unlinkSync(target);
};
const upload = multer({ storage: multer.diskStorage({ destination: (_req, _file, done) => done(null, uploads), filename: (_req, file, done) => done(null, `${Date.now()}-${crypto.randomUUID()}${path.extname(file.originalname)}`) }), limits: { fileSize: 8 * 1024 * 1024 }, fileFilter: (_req, file, done) => done(null, /^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)) });
const files = upload.fields([{ name: "hero", maxCount: 1 }, { name: "gallery", maxCount: 12 }, { name: "doctorPhotos", maxCount: 30 }]);
const doctorImage = upload.single("image");
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:3000" }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/api/health", (_req, res) => res.json({ status: "ok", database: "json-file" }));
function auth(req, res, next) { try { jwt.verify(req.headers.authorization?.replace(/^Bearer\s+/i, ""), process.env.JWT_SECRET); next(); } catch { res.status(401).json({ message: "Please sign in again." }); } }
function department(req, previous = {}) {
  const doctors = people(req.body.doctors); const visitingConsultants = people(req.body.visitingConsultants);
  if (!doctors || !visitingConsultants) throw new Error("Doctors and visiting consultants must be valid JSON.");
  (req.files?.doctorPhotos || []).forEach((file, index) => { if (doctors[index] && !doctors[index].image) doctors[index].image = `/uploads/departments/${file.filename}`; });
  return { name: req.body.name?.trim(), slug: slug(req.body.slug || req.body.name), description: req.body.description || "", services: list(req.body.services), advantages: list(req.body.advantages), technology: list(req.body.technology), doctors, visitingConsultants, image: req.files?.hero?.[0] ? `/uploads/departments/${req.files.hero[0].filename}` : (req.body.removeHero === "true" ? "" : (req.body.image || previous.image)), gallery: [...(req.body.keepGallery ? list(req.body.keepGallery) : []), ...(req.files?.gallery || []).map((file) => `/uploads/departments/${file.filename}`)] };
}
function doctor(req, previous = {}) {
  const name = req.body.name?.trim();
  const speciality = req.body.speciality?.trim();
  if (!name || !speciality) throw new Error("Doctor name and speciality are required.");
  const gender = ["Male", "Female", "Other"].includes(req.body.gender) ? req.body.gender : "Other";
  return { name, speciality, gender, bio: req.body.bio || "", image: req.file ? `/uploads/departments/${req.file.filename}` : (req.body.image || previous.image || "") };
}
app.post("/api/admin/login", (req, res) => { if (req.body.email !== process.env.ADMIN_EMAIL || req.body.password !== process.env.ADMIN_PASSWORD) return res.status(401).json({ message: "Invalid email or password." }); res.json({ token: jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "8h" }) }); });
app.get("/api/doctors", (_req, res) => res.json(readDoctors().sort((a, b) => a.name.localeCompare(b.name))));
app.post("/api/doctors", auth, doctorImage, (req, res, next) => { try { const item = { _id: crypto.randomUUID(), ...doctor(req), createdAt: new Date().toISOString() }; const all = readDoctors(); all.push(item); writeDoctors(all); res.status(201).json(item); } catch (error) { next(error); } });
app.put("/api/doctors/:id", auth, doctorImage, (req, res, next) => { try { const all = readDoctors(); const index = all.findIndex((entry) => entry._id === req.params.id); if (index < 0) return res.status(404).json({ message: "Doctor not found" }); const item = { ...all[index], ...doctor(req, all[index]), updatedAt: new Date().toISOString() }; all[index] = item; writeDoctors(all); res.json(item); } catch (error) { next(error); } });
app.delete("/api/doctors/:id", auth, (req, res) => { const all = readDoctors(); const remaining = all.filter((entry) => entry._id !== req.params.id); if (remaining.length === all.length) return res.status(404).json({ message: "Doctor not found" }); writeDoctors(remaining); res.status(204).end(); });
app.get("/api/departments", (_req, res) => res.json(read().sort((a, b) => a.name.localeCompare(b.name))));
app.get("/api/departments/:slug", (req, res) => { const item = read().find((entry) => entry.slug === req.params.slug); item ? res.json(item) : res.status(404).json({ message: "Department not found" }); });
app.post("/api/departments", auth, files, (req, res, next) => { try { const all = read(); const item = { _id: crypto.randomUUID(), ...department(req), createdAt: new Date().toISOString() }; if (all.some((entry) => entry.slug === item.slug)) return res.status(400).json({ message: "A department with that slug already exists." }); all.push(item); write(all); res.status(201).json(item); } catch (error) { next(error); } });
app.put("/api/departments/:id", auth, files, (req, res, next) => { try { const all = read(); const index = all.findIndex((entry) => entry._id === req.params.id); if (index < 0) return res.status(404).json({ message: "Department not found" }); const previous = all[index]; const item = { ...previous, ...department(req, previous), updatedAt: new Date().toISOString() }; if (all.some((entry, i) => i !== index && entry.slug === item.slug)) return res.status(400).json({ message: "A department with that slug already exists." }); all[index] = item; write(all); if (previous.image !== item.image) removeUpload(previous.image); previous.gallery.filter((image) => !item.gallery.includes(image)).forEach(removeUpload); res.json(item); } catch (error) { next(error); } });
app.delete("/api/departments/:id", auth, (req, res) => { const all = read(); const item = all.find((entry) => entry._id === req.params.id); if (!item) return res.status(404).json({ message: "Department not found" }); write(all.filter((entry) => entry._id !== req.params.id)); removeUpload(item.image); (item.gallery || []).forEach(removeUpload); (item.doctors || []).forEach((doctor) => removeUpload(doctor.image)); (item.visitingConsultants || []).forEach((doctor) => removeUpload(doctor.image)); res.status(204).end(); });
app.use((error, _req, res, _next) => res.status(400).json({ message: error.message || "Request failed" }));
app.listen(process.env.PORT || 5000, () => console.log(`Department API running on ${process.env.PORT || 5000}`));
