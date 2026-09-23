"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#262626]/80 bg-[#0a0a0a]/95 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#262626] text-sm font-semibold transition group-hover:border-[#f59e0b] group-hover:text-[#f59e0b]">
              M
            </span>

            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              MAHESWARAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#a3a3a3] transition hover:text-[#f5f5f5]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-[#f59e0b] px-4 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#fbbf24] md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#262626] text-[#f5f5f5] transition hover:border-[#525252] md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-[#262626] py-5 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#1f1f1f] py-4 text-sm text-[#a3a3a3] transition hover:text-[#f5f5f5]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#f59e0b] px-5 py-3 text-sm font-semibold text-[#0a0a0a]"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}