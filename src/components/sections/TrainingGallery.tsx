"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { trainingPhotos } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

const spanClasses = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "",
  "",
];

export default function TrainingGallery() {
  return (
    <section id="training" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Beyond development"
          title="Training & Workshops"
        />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted">
          Conducting guest lectures, workshops, and hands-on sessions on
          modern web development for students and professionals across Tamil
          Nadu.
        </p>

        <div className="mt-14 grid grid-cols-2 auto-rows-[150px] gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {trainingPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group glass relative overflow-hidden rounded-2xl ${spanClasses[i % spanClasses.length]}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="font-heading text-xs font-semibold leading-snug text-white sm:text-sm">
                  {photo.caption}
                </p>
                <p className="mt-1 flex items-center gap-1 text-[10px] text-neon-cyan sm:text-xs">
                  <MapPin size={11} />
                  {photo.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
