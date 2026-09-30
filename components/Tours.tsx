"use client";

import Image from "next/image";
import {
  CalendarDays,
  Moon,
  Star,
  Check,
  ArrowUpRight,
  Users,
} from "lucide-react";
import { TOURS, formatPKR, type Tour } from "@/data/tours";

export default function Tours({ onBook }: { onBook: (tour: Tour) => void }) {
  return (
    <section id="tours" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Featured Packages
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pick your <span className="text-gold">adventure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Every departure includes transport, hotels, breakfast and an expert
            local guide. Transparent PKR pricing — no hidden charges, ever.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOURS.map((tour) => (
            <article
              key={tour.id}
              className="card-glow group flex flex-col overflow-hidden rounded-2xl bg-[#062025]"
            >
              {/* photo */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={`${tour.name} — ${tour.region}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062025] via-transparent to-transparent" />
                {tour.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
                    {tour.tag}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {tour.rating.toFixed(1)}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-300/80">
                  {tour.region}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {tour.name}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-[13px] text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-amber-400/80" />
                    {tour.days} days
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Moon className="h-4 w-4 text-amber-400/80" />
                    {tour.nights} nights
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {tour.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[13px] text-zinc-400"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-300" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-2xl font-bold text-white">
                      {formatPKR(tour.groupPrice)}
                    </span>
                    <span className="text-xs text-zinc-500">/ person</span>
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <Users className="h-3.5 w-3.5" />
                    Group · Private from {formatPKR(tour.privatePrice)}
                  </p>
                  <p className="mt-1 text-xs text-teal-300/70">
                    Departs {tour.departure}
                  </p>
                </div>
                <button
                  onClick={() => onBook(tour)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all hover:bg-amber-400 hover:text-black hover:ring-amber-400"
                >
                  Reserve Seats
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
