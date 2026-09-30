"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/tours";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Traveler Stories
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            12,000+ travelers, <span className="text-gold">zero</span> boring
            trips
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-glow flex flex-col rounded-2xl bg-[#062025] p-7"
            >
              <Quote className="h-8 w-8 text-amber-400/40" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">
                  {t.city} · {t.tour}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
