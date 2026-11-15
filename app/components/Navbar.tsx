
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-black"
        >
          TemariCom<span className="text-gray-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/#features"
          className="hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 md:inline-block"
        >
          Get Started
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-black md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 transition hover:text-black"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/#features"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-black px-6 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
