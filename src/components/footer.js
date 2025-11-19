export default function Footer() {
  const columns = [
    { title: "Patient Care", items: ["Find A Doctor", "Medical Services", "Pay Online"] },
    { title: "Centres Of Excellence", items: ["Cardiology", "Orthopaedics", "Neurology"] },
    { title: "Medical Procedures", items: ["Plastic Surgery", "Organ Transplant"] },
    { title: "Corporate", items: ["Management", "Careers"] },
    { title: "Hospitals", items: ["Contact Us", "Courses"] },
  ];

  return (
    <footer className="bg-blue-800 text-white px-8 py-10">
      <div className="grid md:grid-cols-5 gap-6 text-sm">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-bold mb-2">{col.title}</h4>
            {col.items.map((item, j) => (
              <p key={j}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
