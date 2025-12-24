export default function Footer() {
  const footerItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-black border-t border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Links */}
        <div className="hidden md:flex gap-10">
          {footerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm uppercase tracking-wider text-gray-300 hover:text-white transition group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Brand */}
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold hover:text-indigo-500">
            Anas<span className="text-indigo-400">.</span>
          </span>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
