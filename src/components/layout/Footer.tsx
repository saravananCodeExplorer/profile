"use client";

import { Mail, Globe, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { personal } from "@/data/content";
import { useScrollTo } from "@/hooks/useScrollTo";

const socials = [
  { icon: GithubIcon, href: personal.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  { icon: Globe, href: personal.portfolio, label: "Portfolio" },
];

export default function Footer() {
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden">
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        className="w-full text-surface"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
        />
      </svg>

      <div className="bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-14">
          <button
            data-cursor-hover
            onClick={() => scrollTo("#home")}
            className="font-heading text-2xl font-bold text-gradient"
          >
            Saravanan Sekar
          </button>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-neon-cyan hover:border-neon-blue/50"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-4 border-t border-white/5 pt-6 text-sm text-muted sm:flex-row sm:justify-between">
            <p>© {year} Saravanan Sekar. All rights reserved.</p>
            <button
              data-cursor-hover
              onClick={() => scrollTo("#home")}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 hover:text-neon-cyan"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
