"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Training", href: "#training" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          data-cursor-hover
          onClick={() => handleNav("#home")}
          className="font-heading text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">SS</span>
          <span className="sr-only">Saravanan Sekar</span>
        </button>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              data-cursor-hover
              onClick={() => handleNav(link.href)}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          data-cursor-hover
          onClick={() => handleNav("#contact")}
          className="hidden rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-5 py-2.5 text-sm font-semibold text-black md:inline-flex"
        >
          Let&apos;s Talk
        </button>

        <button
          data-cursor-hover
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-11 w-11 items-center justify-center rounded-full md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass-strong mx-4 mt-3 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="rounded-xl px-4 py-3 text-left text-sm text-muted hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
