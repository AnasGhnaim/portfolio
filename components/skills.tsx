"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Database, Globe, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Front-End",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
      "React Native",
    ],
  },
  {
    icon: Zap,
    title: "Back-End",
    items: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Oracle", "MySQL"],
  },
  {
    icon: Globe,
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Dart"],
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
          className="text-center max-w-2xl mx-auto"
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

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group border border-white/10 bg-white/5 backdrop-blur
                rounded-xl p-6 hover:border-indigo-400 hover:shadow-indigo-500/20 hover:shadow-lg transition"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-3 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition"
                  >
                    <Icon className="text-indigo-400" size={24} />
                  </motion.div>

                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md
                      bg-black/40 text-gray-300
                      group-hover:bg-indigo-500/20 group-hover:text-white transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
