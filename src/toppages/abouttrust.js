import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

// Trustee placeholder images – replace anytime
import trustee1 from "../assets/trustee1.jpg";
import trustee2 from "../assets/trustee2.jpg";
import trustee3 from "../assets/trustee3.jpg";
import trustee4 from "../assets/trustee4.jpg";

export default function AboutTrust() {
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-[9rem] pb-20 bg-gradient-to-b from-red-50 to-white min-h-screen font-[Poppins]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={hero}
            className="w-full h-64 md:h-80 object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-700/50 to-transparent flex items-center">
            <div className="ml-6 md:ml-12 text-white">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-extrabold"
              >
                About The Trust
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT DESCRIPTION ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="bg-white/90 p-8 rounded-3xl shadow-lg border-t-4 border-red-600 backdrop-blur-xl"
        >
          <p className="text-gray-700 leading-8 text-lg">
            Hindusthan Educational and Charitable Trust (HECT) was established in 1992
            with a mission to uplift the poor and needy. In 1998, the Trust founded
            Hindusthan College of Arts & Science (HICAS), which has become one of the
            most prestigious institutions in Tamil Nadu.
            <br /><br />
            Guided by the visionary <b>Shri. T.S.R. Khannaiyann</b>, the Hindusthan Group
            has grown into a massive educational empire with world-class infrastructure
            and a strong commitment to quality education.
            <br /><br />
            Today, the Group manages <b>11 institutions</b> across <b>6 campuses</b> with
            over <b>22,000 students</b>, <b>1000+ teaching staff</b> and <b>500+
            administrative staff</b>.
            <br /><br />
            The Trust believes in holistic development through these core principles:
          </p>

          <ul className="mt-6 text-gray-700 leading-7 list-disc ml-6 text-lg">
            <li>Develop a spirit of inquiry and achieve academic excellence.</li>
            <li>Inculcate discipline and strong character.</li>
            <li>Build a sense of social commitment.</li>
            <li>Promote a culture of peace and unity.</li>
            <li>Strengthen Industry–Institute partnerships.</li>
          </ul>

          <p className="text-gray-700 mt-6 leading-8 text-lg">
            For over 26 years, Hindusthan has continued to evolve with modern needs,
            shaping responsible global citizens and setting new benchmarks in education.
          </p>
        </motion.div>
      </section>

      {/* ================= TRUSTEES SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-14">
          Our Trustees
        </h2>

        <div className="space-y-16">

          {/* ================= TRUSTEE BLOCKS ================= */}
          {[
            {
              img: trustee1,
              name: "Shri. T.S.R. Khannaiyann",
              title: "Chairman, Hindusthan Group",
              content: [
                `A visionary industrialist who transformed the educational landscape 
                 through dedication, innovation and a strong desire to uplift society.`,
                `Founder of HECT in 1992 to support the poor, needy and rural communities.`,
                `His leadership continues to guide the Group with the belief — 
                “Bringing the best to this competitive world.”`
              ],
            },
            {
              img: trustee2,
              name: "Smt. T.R.K. Sarasuwathi",
              title: "Managing Trustee",
              content: [
                `A compassionate leader dedicated to community upliftment, welfare 
                 initiatives and women empowerment.`,
                `Spearheaded eco-friendly programs, scholarships and rural school 
                 adoption projects.`,
                `Her values form the foundation of Hindusthan’s culture of service.`
              ],
            },
            {
              img: trustee3,
              name: "Dr. K. Priya",
              title: "Executive Trustee & Secretary",
              content: [
                `A rank holder Engineer with MBA and Doctorate in Management.`,
                `Over 15 years of experience managing 8 colleges and 3 schools.`,
                `Her leadership established world-class infrastructure and enhanced 
                academic excellence across institutions.`
              ],
            },
            {
              img: trustee4,
              name: "Er. K. Sakthivel",
              title: "Executive Trustee",
              content: [
                `A dynamic engineer and administrator who contributed significantly 
                 to modernization and youth development.`,
                `Introduced new-age strategies for student engagement and institutional growth.`
              ],
            }
          ].map((t, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-red-200 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">

                {/* ========== IMAGE (350 × 450 fixed) ========== */}
                <div className="flex justify-center items-center bg-gray-50">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-[350px] h-[450px] object-cover rounded-xl shadow-md my-6"
                  />
                </div>

                {/* ========== CONTENT ========== */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-red-700">{t.name}</h3>
                  <h4 className="text-gray-700 font-semibold mt-2">{t.title}</h4>

                  <div className="mt-4 space-y-4 text-gray-700 leading-7 text-[15.5px]">
                    {t.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}
