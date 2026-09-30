"use client";

import { Compass, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/data/tours";

export default function Footer() {
  return (
    <>
      {/* floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SafarNama on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <footer className="border-t border-white/10 bg-[#031114]">
        {/* CTA band */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-teal-900/60 via-[#062025] to-[#062025] p-10 text-center sm:p-14">
            <div className="stars absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
                The mountains are <span className="text-gold">calling</span>.
                <br />
                Answer this Friday.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Seats on group departures fill fast in season. Message us now —
                we reply within minutes, 9am to 11pm.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-black shadow-[0_0_36px_rgba(245,158,11,0.45)] transition-all hover:bg-amber-300"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* columns */}
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600">
                <Compass className="h-5 w-5 text-[#04181c]" />
              </span>
              <span className="font-display text-2xl font-bold text-white">
                Safar<span className="text-gold">Nama</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Pakistan&apos;s wanderlust crew since 2018 — crafting
              unforgettable journeys to Hunza, Skardu, Naran and Kashmir.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
              Tours
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
              {["Hunza Autumn Explorer", "Skardu & Deosai Odyssey", "Naran Kaghan Escape", "Hunza Jeep Safari"].map((t) => (
                <li key={t}>
                  <a href="#tours" className="transition-colors hover:text-amber-300">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-500">
              {[
                { label: "Itinerary", href: "#itinerary" },
                { label: "Why book with us", href: "#why-us" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-amber-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-amber-300">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href="mailto:hello@safarnama.pk" className="hover:text-amber-300">
                  hello@safarnama.pk
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>Office 12, Saddar Road,<br />Rawalpindi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-zinc-600 sm:flex-row sm:px-6 lg:px-8">
            <p>© 2026 SafarNama Travel &amp; Tours. All rights reserved.</p>
            <p>Demo website — fictional business, crafted for illustration.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
