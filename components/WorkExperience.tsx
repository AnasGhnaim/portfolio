"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/exp";


export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-black via-indigo-950 to-black text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="text-indigo-400 uppercase tracking-widest text-sm">
            Experience
          </p>
          <h2 className="text-4xl lg:text-6xl font-extrabold mt-4 uppercase leading-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group border border-white/10 bg-white/5 backdrop-blur rounded-xl p-6 lg:p-8
              hover:border-indigo-400 hover:shadow-indigo-500/20 hover:shadow-lg transition
              grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6"
            >
              {/* Left meta column */}
              <div className="text-sm text-gray-400">
                <p>{exp.meta}</p>
                <p className="text-indigo-300 font-semibold mt-1">{exp.period}</p>

                {exp.logo && (
                  <div className="mt-4 w-28 h-28 flex items-center justify-center overflow-hidden">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
                )}
              </div>

              {/* Right content column */}
              <div>
                <h3 className="text-lg lg:text-xl font-bold">
                  <span className="text-white">{exp.role}</span>
                  <span className="text-indigo-400"> — {exp.company}</span>
                </h3>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}