import React, { useState, useEffect } from "react";
import news1 from "../assets/hospital.jpg";
import news2 from "../assets/pediatrics.jpg";
import news3 from "../assets/surgery.jpg";

export default function News() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Load data from backend (Dynamic)
  useEffect(() => {
    fetch("https://your-backend-url/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading news:", err);

        // fallback: load your existing static list if server fails
        setNewsList([
          {
            id: 1,
            title: "Hindusthan Hospital Launches Advanced Cardiac Wing",
            image: news1,
            date: "05 Nov 2025",
            content:
              "Hindusthan Hospital has inaugurated a state-of-the-art cardiac facility featuring advanced diagnostic labs, ICU, and 24x7 emergency care...",
          },
          {
            id: 2,
            title: "New Pediatrics Intensive Care Unit Unveiled",
            image: news2,
            date: "27 Oct 2025",
            content:
              "The new PICU includes world-class ventilators, neonatal monitoring, and a multi-disciplinary specialist team available round-the-clock...",
          },
          {
            id: 3,
            title: "Robotic Surgery Department Now Operational",
            image: news3,
            date: "18 Oct 2025",
            content:
              "Hindusthan Hospital introduces next-gen robotic surgical equipment enabling minimally invasive procedures...",
          },
        ]);

        setLoading(false);
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

      {/* Loading Screen */}
      {loading && (
        <div className="text-center py-20 text-lg font-semibold text-gray-500">
          Loading news...
        </div>
      )}

      {/* News Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10 pb-20">
        {!loading &&
          newsList.map((n) => (
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
