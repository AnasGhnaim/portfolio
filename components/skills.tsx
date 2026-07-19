"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Front-End Development",
    items: ["React", "Next.js","React Native","Expo", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Back-End & Databases",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "Oracle"],
  },
  {
    number: "03",
    title: "Languages & OOP",
    items: ["JavaScript", "TypeScript", "Java", "Dart", "Object-Oriented Programming"],
  },
  {
    number: "04",
    title: "Engineering Practices",
    items: [
      "State Management (Redux, Zustand)",
      "React Query / Axios",
      "REST API Integration",
      "Type-Safe Architecture",
      "Clean Code",
      "System Design",
    ],
  },
  {
    number: "05",
    title: "Professional Strengths",
    items: [
      "Fast Learner",
      "Problem Solving",
      "Team Collaboration",
      "Analytical Thinking",
      "Clear Communication",
      "Arabic — Native",
      "English — B2 Level",
    ],
    fullWidth: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-black via-indigo-950 to-black text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-indigo-400 uppercase tracking-widest text-sm">
            Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4">
            Technologies I Work With
          </h2>
          <p className="mt-6 text-gray-400">
            Tools and technologies I use to build scalable and high-quality
            applications.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
              className={`group border border-white/10 bg-white/5 backdrop-blur
              rounded-xl p-6 hover:border-indigo-400 hover:shadow-indigo-500/20 hover:shadow-lg transition
              ${group.fullWidth ? "lg:col-span-2" : ""}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <span className="text-3xl font-black text-indigo-400/20 group-hover:text-indigo-400/40 transition">
                  {group.number}
                </span>
              </div>

              {/* Items - two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition">
                    <span className="text-indigo-400 text-xs">●</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}