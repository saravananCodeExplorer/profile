"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/BrandIcons";
import { personal } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

const contactInfo = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "saravanansekar2003", href: personal.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "saravananCodeExplorer", href: personal.github },
  { icon: YoutubeIcon, label: "YouTube", value: "Learn ReactJS Tutorials", href: personal.youtube },
  { icon: Globe, label: "Portfolio", value: "Bug 2 Build", href: personal.portfolio },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Let's build something" title="Contact" />
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted">
          Have a project in mind or want to talk training? Reach out through
          any of the channels below.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor-hover
                  className="group flex h-full items-center gap-4 p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted">
                      {label}
                    </span>
                    <span className="block text-sm font-medium text-foreground group-hover:text-neon-cyan">
                      {value}
                    </span>
                  </span>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
