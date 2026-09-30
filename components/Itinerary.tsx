"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { FEATURED_ITINERARY } from "@/data/tours";

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative py-20 sm:py-28">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Day by Day
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The <span className="text-gold">Hunza Explorer</span> itinerary
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Our bestselling 7-day journey, hour-by-hour crafted over 8 years on
            the Karakoram Highway. This is what your week looks like.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* sticky visual */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96">
                <Image
                  src="/tour-hunza.webp"
                  alt="Hunza Valley — Attabad Lake and Rakaposhi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04181c]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                    Featured tour
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    7 Days · 6 Nights · Hunza
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-5">
                <p className="text-sm leading-relaxed text-zinc-300">
                  <span className="font-semibold text-amber-300">Good to know: </span>
                  every itinerary is flexible — add a day in Karimabad, swap a
                  fort for a glacier hike, or upgrade to a private jeep. Just
                  tell us on WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* timeline */}
          <div className="lg:col-span-3">
            <ol className="relative space-y-6 border-l border-teal-800/60 pl-0">
              {FEATURED_ITINERARY.map((d, i) => (
                <li key={d.day} className="relative pl-10">
                  <span className="absolute -left-[13px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-amber-400/50 bg-[#04181c]">
                    <MapPin className="h-3 w-3 text-amber-400" />
                  </span>
                  <div className="card-glow rounded-2xl bg-[#062025] p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        {d.day}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {d.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {d.detail}
                    </p>
                  </div>
                  {i === 0 && <span className="sr-only">Start of itinerary</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
