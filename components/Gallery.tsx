"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

const SHOTS = [
  { src: "/tour-hunza.webp", label: "Hunza Valley" },
  { src: "/tour-skardu.webp", label: "Shangrila, Skardu" },
  { src: "/tour-naran.webp", label: "Babusar Top" },
  { src: "/tour-jeep.webp", label: "Jeep Safari" },
];

export default function Gallery() {
  const loop = [...SHOTS, ...SHOTS];
  return (
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              <Camera className="h-4 w-4" />
              Postcards from the north
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Shot on <span className="text-gold">our</span> tours
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">
            Real frames from recent SafarNama departures — no stock photos, no
            filters needed up there.
          </p>
        </div>
      </div>

      <div
        className="group relative"
        aria-label="Photo gallery of northern Pakistan tours"
      >
        <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <figure
              key={`${s.src}-${i}`}
              className="relative h-64 w-96 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-72 sm:w-[28rem]"
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 24rem, 28rem"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04181c] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04181c] to-transparent" />
      </div>
    </section>
  );
}
