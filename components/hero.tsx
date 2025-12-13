import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 mt-16">
      {/* Left Side – Indigo Background + Text */}
      <div className="bg-indigo-600 flex items-center px-8 lg:px-20">
        <div className="text-white max-w-xl">
          <p className="uppercase tracking-widest text-sm text-indigo-200">
            Software Engineer
          </p>

          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 leading-tight">
            Hi, I’m <br />
            <span className="text-black">Anas Ghnaim</span>
          </h1>

          <p className="mt-6 text-indigo-100">
            I build modern web and mobile applications using React, Next.js, and
            Node.js with a strong focus on performance and clean UI.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center">
        {/* Right Side – Black Background + Photo */}
        <div className="w-64 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-indigo-500">
          <Image
            src="/me.jpeg" // put your image in /public
            alt="Anas Ghnaim"
            width={400}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
