"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { personal } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

const contactInfo = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "saravanansekar2003", href: personal.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "saravananCodeExplorer", href: personal.github },
  { icon: Globe, label: "Portfolio", value: "Bug 2 Build", href: personal.portfolio },
];

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Let's build something" title="Contact" />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-cursor-hover
                className="glass group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:border-neon-blue/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple text-black">
                  <Icon size={18} />
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
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlassCard strong className="p-7 sm:p-9">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-muted">
                    Name
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="glass rounded-xl border-0 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:ring-1 focus:ring-neon-blue"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-muted">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="glass rounded-xl border-0 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:ring-1 focus:ring-neon-blue"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm text-muted">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className="glass rounded-xl border-0 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:ring-1 focus:ring-neon-blue"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-muted">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="glass resize-none rounded-xl border-0 bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted/60 focus:ring-1 focus:ring-neon-blue"
                  />
                </label>

                <MagneticButton
                  type="submit"
                  disabled={status !== "idle"}
                  className="mt-2 self-start"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={16} /> Send Message
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
                        />
                        Sending...
                      </motion.span>
                    )}
                    {status === "sent" && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} /> Message Sent
                      </motion.span>
                    )}
                  </AnimatePresence>
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
