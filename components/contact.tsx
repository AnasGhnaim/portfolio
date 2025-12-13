import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-20 text-white bg-gradient-to-r from-black via-indigo-900 to-black"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <p className="text-indigo-400 uppercase tracking-widest text-sm">
          Contact
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold mt-4">
          Get in Touch
        </h2>
        <p className="mt-4 text-gray-400">
          I’m currently open to new opportunities. Feel free to reach out via
          email, phone, or social channels.
        </p>

        {/* Contact Info */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-10">
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-400 animate-pulse" />
            <span>Amman, Jordan</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-400 animate-pulse" />
            <span>ghnaimanas20@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-indigo-400 animate-pulse" />
            <span>+962788640391</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/anas-ghnaim-520b46247/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-indigo-400 transition duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/AnasGhnaim"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 hover:text-indigo-400 transition duration-300"
          >
            <Github size={28} />
          </a>
        </div>
      </div>

      {/* Optional Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-black/10 to-indigo-900/20 pointer-events-none animate-pulse-slow"></div>
    </section>
  );
}
