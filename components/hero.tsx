"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mt-16">
      {/* Left Side */}
      <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center px-8 lg:px-20">
        <motion.div
          className="text-white max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 1.5,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.p
            className="uppercase tracking-widest text-sm text-indigo-300"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Software Engineer
          </motion.p>

          <motion.h1
            className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Anas Ghnaim
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-indigo-200"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I build modern web and mobile applications using React, Next.js, and
            Node.js with a strong focus on performance and clean UI.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-indigo-400 text-indigo-200 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="bg-black flex items-center justify-center">
        <motion.div
          className="w-64 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/me.jpeg"
            alt="Anas Ghnaim"
            width={400}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
