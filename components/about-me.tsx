"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left – Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-indigo-400 uppercase tracking-widest text-sm">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
            Passionate Software Engineer <br />
            building modern applications
          </h2>
        </motion.div>

        {/* Right – Content */}
        <motion.div
          className="text-gray-300 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            <>
              I’m <span className="text-white font-semibold">Anas Ghnaim</span>,
              a motivated Software Engineer with experience in front-end,
              back-end, and mobile development. I enjoy turning complex problems
              into simple, clean, and scalable solutions.
            </>,
            <>
              I’ve worked with technologies like{" "}
              <span className="text-indigo-400">
                React, Next.js, Node.js, React Native, Flutter and modern
                databases
              </span>{" "}
              to build real-world applications including learning management
              systems, task management tools, and live production platforms.
            </>,
            <>
              I’m constantly learning, improving my skills, and focusing on
              building user-centric experiences with strong performance and
              maintainable code.
            </>,
          ].map((text, i) => (
            <motion.p
              key={i}
              className={i !== 0 ? "mt-6" : ""}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {text}
            </motion.p>
          ))}

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { value: "10+", label: "Projects Built" },
              { value: "3+", label: "Years of Learning" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/10 rounded-lg p-6 bg-white/5"
              >
                <h3 className="text-3xl font-bold text-indigo-400">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
