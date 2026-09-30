"use client";

import {
  ShieldCheck,
  Mountain,
  Truck,
  BadgeCheck,
  Headset,
  Sparkles,
} from "lucide-react";

const PERKS = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Registered tour operator with insured vehicles and vetted partner hotels in every valley.",
  },
  {
    icon: Mountain,
    title: "Local expert guides",
    text: "Guides born in the mountains — they know the hidden meadows, not just the brochure spots.",
  },
  {
    icon: Truck,
    title: "4x4 jeeps & coasters",
    text: "Late-model Prados, jeeps and coasters, maintained in-house and deep-checked before every departure.",
  },
  {
    icon: BadgeCheck,
    title: "Best-price promise",
    text: "Find the same itinerary cheaper elsewhere and we'll match it — plus a free bonfire night.",
  },
  {
    icon: Headset,
    title: "24/7 on-tour support",
    text: "A dedicated trip manager on WhatsApp from departure to drop-off. Altitude headache at 2am? We're awake.",
  },
  {
    icon: Sparkles,
    title: "Small groups, big moments",
    text: "Max 20 travelers per group so viewpoints never feel crowded and friendships actually form.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Why SafarNama
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Travel with people who <span className="text-gold">live</span> the
            north
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Anyone can sell you a bus seat. We craft the week you&apos;ll talk
            about for years.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p) => (
            <div
              key={p.title}
              className="card-glow rounded-2xl bg-[#062025] p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/25 to-amber-500/20 ring-1 ring-amber-400/30">
                <p.icon className="h-6 w-6 text-amber-300" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
