require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const uploadDir = path.join(__dirname, "uploads", "departments");
fs.mkdirSync(uploadDir, { recursive: true });
const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname).toLowerCase()}`),
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => cb(null, /^image\/(jpeg|png|webp|gif)$/.test(file.mimetype)),
});

const Department = mongoose.model("Department", new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, default: "" },
  services: [String], advantages: [String], technology: [String],
  doctors: [{ name: String, designation: String, description: String, image: String }],
  visitingConsultants: [{ name: String, designation: String, description: String, image: String }],
  image: String, gallery: [String],
}, { timestamps: true }));

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:3000" }));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const tokenFor = () => jwt.sign({ role: "department-admin" }, process.env.JWT_SECRET, { expiresIn: "8h" });
function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  try { jwt.verify(token, process.env.JWT_SECRET); next(); }
  catch { res.status(401).json({ message: "Please sign in again." }); }
}
function slugify(value = "") { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function list(value) { return Array.isArray(value) ? value : String(value || "").split("\n").map((item) => item.trim()).filter(Boolean); }
function doctors(value) { try { const items = JSON.parse(value || "[]"); return Array.isArray(items) ? items.map(({ name, designation, description, image }) => ({ name, designation, description, image })) : []; } catch { return []; } }
function payload(req, existing = {}) {
  const body = req.body;
  const galleryFiles = req.files?.gallery || [];
  const doctorList = doctors(body.doctors);
  (req.files?.doctorPhotos || []).forEach((file, index) => { if (doctorList[index] && !doctorList[index].image) doctorList[index].image = `/uploads/departments/${file.filename}`; });
  return {
    name: body.name?.trim(), slug: slugify(body.slug || body.name), description: body.description || "",
    services: list(body.services), advantages: list(body.advantages), technology: list(body.technology),
    doctors: doctorList, visitingConsultants: doctors(body.visitingConsultants),
    image: req.files?.hero?.[0] ? `/uploads/departments/${req.files.hero[0].filename}` : (body.image || existing.image),
    gallery: [...(body.keepGallery ? list(body.keepGallery) : existing.gallery || []), ...galleryFiles.map((file) => `/uploads/departments/${file.filename}`)],
  };
}

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) return res.status(503).json({ message: "Admin credentials are not configured on the server." });
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) return res.status(401).json({ message: "Invalid email or password." });
  res.json({ token: tokenFor() });
});
app.get("/api/departments", async (_req, res, next) => { try { res.json(await Department.find().sort("name").lean()); } catch (err) { next(err); } });
app.get("/api/departments/:slug", async (req, res, next) => { try { const item = await Department.findOne({ slug: req.params.slug }).lean(); item ? res.json(item) : res.status(404).json({ message: "Department not found" }); } catch (err) { next(err); } });
const departmentUpload = upload.fields([{ name: "hero", maxCount: 1 }, { name: "gallery", maxCount: 12 }, { name: "doctorPhotos", maxCount: 30 }]);
app.post("/api/departments", requireAdmin, departmentUpload, async (req, res, next) => { try { res.status(201).json(await Department.create(payload(req))); } catch (err) { next(err); } });
app.put("/api/departments/:id", requireAdmin, departmentUpload, async (req, res, next) => { try { const existing = await Department.findById(req.params.id); if (!existing) return res.status(404).json({ message: "Department not found" }); Object.assign(existing, payload(req, existing)); res.json(await existing.save()); } catch (err) { next(err); } });
app.delete("/api/departments/:id", requireAdmin, async (req, res, next) => { try { await Department.findByIdAndDelete(req.params.id); res.status(204).end(); } catch (err) { next(err); } });
app.use((err, _req, res, _next) => res.status(err.name === "ValidationError" || err.code === 11000 ? 400 : 500).json({ message: err.code === 11000 ? "A department with that slug already exists." : err.message || "Server error" }));

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI).then(() => app.listen(port, () => console.log(`Department API running on ${port}`))).catch((err) => { console.error("MongoDB connection failed:", err.message); process.exit(1); });
