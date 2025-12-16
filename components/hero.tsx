"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen mt-16 flex items-center
        bg-[linear-gradient(110deg,black_0%,black_50%,#302b63_50%,black_100%)]
      "
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-20">
        {/* Left Content with motion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-white max-w-xl"
        >
          <p className="uppercase tracking-widest text-sm text-indigo-200">
            Software Engineer
          </p>

          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Hi, I’m <br />
            <span className="text-indigo-400">Anas Ghnaim</span>
          </h1>

          <p className="mt-6 text-indigo-100">
            I build modern web and mobile applications using React, Next.js,
            <span className="block">
              and Node.js with a strong focus on performance and clean UI.
            </span>
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-400 text-white rounded-lg font-medium hover:bg-black transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-400 text-indigo-200 rounded-lg font-medium hover:bg-indigo-400 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image with motion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex items-center justify-center mt-16 lg:mt-0"
        >
          <div className="w-64 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ">
            <Image
              src="/me.jpeg"
              alt="Anas Ghnaim"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
