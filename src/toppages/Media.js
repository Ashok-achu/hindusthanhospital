import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaCamera, FaVideo, FaSearch, FaArrowRight } from "react-icons/fa";

// Placeholder images - using imports from home.js equivalent if possible, or just paths if they work. 
// Assuming assets exist in ../assets based on home.js
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/h1.jpg";
import hero3 from "../assets/h2.jpg";
import team from "../assets/team.jpg";
import facility from "../assets/h3.jpg";
import h12 from "../assets/h12.jpg";

const mediaItems = [
    { id: 1, type: "image", category: "Hospital", src: hero1, title: "State of Art Facility", date: "Dec 2024" },
    { id: 2, type: "video", category: "Events", src: hero2, title: "Annual Health Camp", date: "Nov 2024" },
    { id: 3, type: "image", category: "Team", src: team, title: "Our Expert Surgeons", date: "Oct 2024" },
    { id: 4, type: "image", category: "Infrastructure", src: facility, title: "Advanced ICU", date: "Sep 2024" },
    { id: 5, type: "image", category: "Hospital", src: hero3, title: "Patient Care", date: "Aug 2024" },
    { id: 6, type: "image", category: "Events", src: h12, title: "Award Ceremony", date: "July 2024" },
];

const categories = ["All", "Hospital", "Events", "Team", "Infrastructure"];

export default function Media() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredItems = activeTab === "All"
        ? mediaItems
        : mediaItems.filter(item => item.category === activeTab);

    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden pt-24">

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-rose-600 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-orange-600 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Media Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-xl max-w-2xl mx-auto"
                    >
                        A visual journey through our moments of care, excellence, and community impact.
                    </motion.p>
                </div>
            </section>

            {/* ================= FEATURED VIDEO ================= */}
            <section className="py-20 container mx-auto px-6 -mt-16 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] group cursor-pointer"
                >
                    <img src={hero2} alt="Featured Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                            <FaPlay className="text-white text-3xl ml-2" />
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-10 text-white">
                        <span className="bg-rose-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Featured</span>
                        <h3 className="text-3xl font-bold">Years of Healing & Hope</h3>
                        <p className="opacity-80 mt-2">Watch our journey of transforming lives since 1998.</p>
                    </div>
                </motion.div>
            </section>

            {/* ================= GALLERY FILTERS ================= */}
            <section className="mb-12 container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === cat
                                    ? "bg-rose-600 text-white shadow-lg shadow-rose-200 scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ================= MASONRY GRID ================= */}
            <section className="pb-24 container mx-auto px-6">
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group relative rounded-[2rem] overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 h-80"
                            >
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase mb-2">
                                            {item.type === 'video' ? <FaVideo /> : <FaCamera />}
                                            {item.category}
                                        </div>
                                        <h3 className="text-white text-xl font-bold leading-tight">{item.title}</h3>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-gray-400 text-sm">{item.date}</span>
                                            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-rose-600 transition-colors">
                                                <FaArrowRight size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Load More */}
                <div className="text-center mt-16">
                    <button className="px-10 py-4 border-2 border-gray-200 rounded-full font-bold text-gray-600 hover:border-rose-600 hover:text-rose-600 transition-colors">
                        Load More Memories
                    </button>
                </div>
            </section>
        </div>
    );
}
