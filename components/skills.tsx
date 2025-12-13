const skills = [
  {
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
    title: "Back-End",
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Oracle", "MySQL"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Dart"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-black to-indigo-900 text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-indigo-400 uppercase tracking-widest text-sm">
            Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4">
            Technologies I Work With
          </h2>
          <p className="mt-6 text-gray-400">
            A collection of tools and technologies I use to build modern,
            scalable, and high-quality applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border border-white/10 rounded-xl p-8 hover:border-indigo-400 transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-400">
                {skill.title}
              </h3>

              <ul className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-indigo-500 hover:text-white transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
