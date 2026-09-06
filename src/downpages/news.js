import React, { useState, useEffect } from "react";
import news1 from "../assets/hospital.jpg";
import news2 from "../assets/pediatrics.jpg";
import news3 from "../assets/surgery.jpg";

export default function News() {
  const staticArticles = [
    {
      id: 1,
      title: "Hindusthan Hospital Launches Advanced Cardiac & Robotic Surgery Wing",
      image: news1,
      date: "05 Nov 2025",
      content:
        "Hindusthan Hospital has inaugurated a state-of-the-art cardiac facility and robotic surgical center featuring advanced diagnostic labs, ICU, and 24x7 emergency care. Equipped with cutting-edge surgical robotics, the new wing enables world-class minimally invasive interventions with faster patient recovery times."
    },
    {
      id: 2,
      title: "New Pediatrics & Neonatal Intensive Care Unit Unveiled",
      image: news2,
      date: "27 Oct 2025",
      content:
        "The new PICU and Level-3 NICU includes world-class incubators, radiant warmers, advanced neonatal ventilators, and a multi-disciplinary specialist team available round-the-clock for critical newborn care."
    },
    {
      id: 3,
      title: "SWARNAM - Senior Citizen Wellness & Health Club Launched",
      image: news3,
      date: "18 Oct 2025",
      content:
        "Hindusthan Hospital introduces SWARNAM, a dedicated health initiative designed for senior citizens. Members enjoy priority consultations, specialized geriatric health checkups, home healthcare assistance, and wellness workshops."
    },
  ];

  const [activeArticle, setActiveArticle] = useState(null);
  const [newsList, setNewsList] = useState(staticArticles);

  useEffect(() => {
    fetch("https://your-backend-url/api/news")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) setNewsList(data);
      })
      .catch((err) => {
        // static fallback active by default
      });
  }, []);

  return (
    <div className="pt-[10rem] font-[Poppins]">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-600">
          Home &gt; <span className="text-blue-700 font-semibold">News</span>
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2">
          LATEST NEWS & UPDATES
        </h2>
      </div>

      {/* News Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10 pb-20">
        {newsList.map((n) => (
          <div
            key={n._id || n.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 cursor-pointer"
            onClick={() => setActiveArticle(n)}
          >
              <img
                src={n.image}
                alt="news"
                className="h-48 w-full object-cover rounded-xl"
              />
              <p className="text-xs text-gray-400 mt-2">{n.date}</p>
              <h3 className="text-blue-900 font-bold text-lg mt-1">{n.title}</h3>

              <button className="mt-4 px-4 py-2 text-sm rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition">
                Read More
              </button>
            </div>
          ))}
      </div>

      {/* Article Popup */}
      {activeArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 overflow-y-auto max-h-[90vh] relative">

            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
              onClick={() => setActiveArticle(null)}
            >
              ✖
            </button>

            <img
              src={activeArticle.image}
              alt="news"
              className="rounded-xl w-full h-56 object-cover"
            />
            <p className="mt-3 text-gray-500 text-sm">{activeArticle.date}</p>

            <h2 className="text-2xl font-bold text-blue-900 mt-2">
              {activeArticle.title}
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {activeArticle.content}
            </p>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="bg-[#eef5ff] mt-20 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">

          <img
            src={news1}
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
