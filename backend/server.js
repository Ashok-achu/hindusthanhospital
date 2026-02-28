const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-appointment", async (req, res) => {

const { name, phone, department, symptoms } = req.body;

try {

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: "yourhospitalmail@gmail.com",
pass: "your_app_password"
}
});

await transporter.sendMail({
from: "yourhospitalmail@gmail.com",
to: "ashokachu.17@gmail.com",
subject: "New Appointment Request",
html: `
<h3>New Appointment Request</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Department:</strong> ${department}</p>
<p><strong>Symptoms:</strong> ${symptoms}</p>
`
});

res.json({ success: true });

} catch (err) {
console.log(err);
res.status(500).json({ error: "Mail Failed" });
}

});

app.listen(5000, () => console.log("Server running on port 5000"));