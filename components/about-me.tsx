"use client";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left – Title */}
        <div>
          <p className="text-indigo-400 uppercase tracking-widest text-sm">
            About Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
            Passionate Software Engineer <br />
            building modern applications
          </h2>
        </div>

        {/* Right – Content */}
        <div className="text-gray-300 text-lg leading-relaxed">
          <p>
            I’m <span className="text-white font-semibold">Anas Ghnaim</span>, a
            motivated Software Engineer with experience in front-end, back-end,
            and mobile development. I enjoy turning complex problems into
            simple, clean, and scalable solutions.
          </p>

          <p className="mt-6">
            I’ve worked with technologies like{" "}
            <span className="text-indigo-400">
              React, Next.js, Node.js, React Native, Fluter and modern databases
            </span>{" "}
            to build real-world applications including learning management
            systems, task management tools, and live production platforms.
          </p>

          <p className="mt-6">
            I’m constantly learning, improving my skills, and focusing on
            building user-centric experiences with strong performance and
            maintainable code.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-indigo-400">10+</h3>
              <p className="mt-2 text-sm text-gray-400">Projects Built</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="text-3xl font-bold text-indigo-400">3+</h3>
              <p className="mt-2 text-sm text-gray-400">Years of Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
