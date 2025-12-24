"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-black fixed top-0 left-0 w-full z-50  backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide hover:text-indigo-500"
        >
          Anas<span className="text-indigo-400 hover:text-indigo-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
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

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-indigo-400 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="flex flex-col items-center gap-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
