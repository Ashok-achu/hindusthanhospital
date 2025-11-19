import React, { useState } from "react";
import blog1 from "../assets/appointment.jpg";
import blog2 from "../assets/hospital.jpg";
import blog3 from "../assets/surgery.jpg";

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "10 Signs You Should See a Cardiologist Soon",
      date: "02 Nov 2025",
      image: blog1,
      content:
        "Chest pain, shortness of breath, and constant fatigue are early indicators of cardiac issues...",
    },
    {
      id: 2,
      title: "How to Prepare for Your Surgery – Complete Guide",
      date: "21 Oct 2025",
      image: blog2,
      content:
        "Pre-surgery preparation involves eating right, avoiding stress, and following your surgeon’s instructions...",
    },
    {
      id: 3,
      title: "Top 7 Tips to Boost Your Immunity",
      date: "10 Oct 2025",
      image: blog3,
      content:
        "Healthy diet, regular sleep, hydration, and exercise are key factors that help keep your immunity strong...",
    },
  ];

  return (
    <div className="pt-[10rem] font-[Poppins]">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-600">
          Home &gt; <span className="text-blue-700 font-semibold">Blog</span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">
          HEALTH TIPS & BLOGS
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10 pb-20">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 cursor-pointer"
            onClick={() => setActiveBlog(b)}
          >
            <img
              src={b.image}
              alt="blog"
              className="h-48 w-full object-cover rounded-xl"
            />
            <p className="text-xs text-gray-400 mt-2">{b.date}</p>
            <h3 className="text-blue-900 font-bold text-lg mt-1">{b.title}</h3>

            <button className="mt-4 px-4 py-2 text-sm rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Blog Popup */}
      {activeBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 overflow-y-auto max-h-[90vh] relative">

            <button
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-red-600"
              onClick={() => setActiveBlog(null)}
            >
              ✖
            </button>

            <img
              src={activeBlog.image}
              alt="blog"
              className="rounded-xl w-full h-56 object-cover"
            />
            <p className="mt-3 text-gray-500 text-sm">{activeBlog.date}</p>

            <h2 className="text-2xl font-bold text-blue-900 mt-2">
              {activeBlog.title}
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {activeBlog.content}
            </p>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="bg-[#eef5ff] mt-20 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">

          <img
            src={blog2}
            alt="Hospital"
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
              Need trusted & professional healthcare?
            </h2>

            <p className="text-gray-700 mt-3 text-lg">
              We are always available for you. Contact our expert team today.
            </p>

            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
              MAKE APPOINTMENT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
