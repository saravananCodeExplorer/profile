"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { projects } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import ProjectPreview from "./ProjectPreview";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Selected work" title="Projects" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard className="group flex h-full flex-col">
                <div
                  className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-90`}
                >
                  <div className="h-full w-full bg-background/70">
                    <ProjectPreview variant={project.preview} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neon-blue/30 bg-neon-blue/5 px-2.5 py-1 text-[11px] text-neon-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      data-cursor-hover
                      className="flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-neon-cyan"
                    >
                      <ExternalLink size={15} /> Live Preview
                    </button>
                    <button
                      data-cursor-hover
                      className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-neon-cyan"
                    >
                      <GithubIcon size={15} /> Source
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
