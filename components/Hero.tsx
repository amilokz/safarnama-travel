"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, MapPin, Star } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/tours";

const STATS = [
  { value: "12k+", label: "Happy travelers" },
  { value: "4.9", label: "Average rating" },
  { value: "120+", label: "Departures / year" },
  { value: "8 yrs", label: "On the road" },
];

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* cinematic video backdrop (static poster for reduced motion) */}
      <div className="absolute inset-0" aria-hidden="true">
        {reducedMotion ? (
          <Image
            src="/tour-hunza.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            src="/hero.mp4"
            poster="/tour-hunza.webp"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04181c] via-[#04181c]/70 to-[#04181c]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04181c] via-transparent to-[#04181c]/60" />
        <div className="stars animate-twinkle absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200 backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Hunza · Skardu · Naran · Kashmir
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where the Mountains
            <br />
            <span className="text-gold">Call You Home</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Handcrafted group &amp; private tours to Pakistan&apos;s north —
            turquoise lakes, 7,000 m peaks and bonfires under impossible stars.
            You pack a bag; we handle everything else.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#tours"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-black shadow-[0_0_36px_rgba(245,158,11,0.45)] transition-all hover:bg-amber-300 hover:shadow-[0_0_48px_rgba(245,158,11,0.65)]"
            >
              Explore Tours
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-amber-400/50 hover:text-amber-300"
            >
              <MessageCircle className="h-5 w-5" />
              Plan on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            4.9 rating from 800+ verified travelers
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-glow rounded-2xl bg-white/[0.03] p-5 text-center backdrop-blur"
            >
              <div className="font-display text-3xl font-bold text-amber-400">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
