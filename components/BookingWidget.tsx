"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Users,
  MessageCircle,
  Compass,
  UserRound,
  UsersRound,
} from "lucide-react";
import { TOURS, WHATSAPP_NUMBER, formatPKR } from "@/data/tours";

interface Props {
  tourId: string;
  onTourChange: (id: string) => void;
}

function prettyDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BookingWidget({ tourId, onTourChange }: Props) {
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [kind, setKind] = useState<"group" | "private">("group");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const tour = TOURS.find((t) => t.id === tourId) ?? TOURS[0];
  const perPerson = kind === "group" ? tour.groupPrice : tour.privatePrice;
  const total = perPerson * travelers;
  const valid = date !== "" && travelers >= 1;

  const waLink = useMemo(() => {
    const lines = [
      "Assalam-o-Alaikum SafarNama! I would like to book a tour:",
      "",
      `Tour: ${tour.name} (${tour.region})`,
      `Departure: ${date ? prettyDate(date) : "—"}`,
      `Travelers: ${travelers}`,
      `Package: ${kind === "group" ? "Group departure" : "Private trip"}`,
      `Estimated total: ${formatPKR(total)}`,
      "",
      "Please confirm availability. Thank you!",
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [tour, date, travelers, kind, total]);

  return (
    <section id="booking" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] via-[#062025] to-[#062025]">
          <div className="grid lg:grid-cols-2">
            {/* pitch */}
            <div className="p-8 sm:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                Reserve your seats
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white">
                Build your trip in <span className="text-gold">30 seconds</span>
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Pick a tour, choose your date and travelers — we&apos;ll do the
                math and open WhatsApp with your booking request ready to send.
                Only <span className="font-semibold text-amber-300">30% advance</span> confirms
                your seats.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {[
                  "Instant quote — no waiting for replies",
                  "Free date change up to 7 days before",
                  "Pay balance via bank, JazzCash or EasyPaisa",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Compass className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* widget */}
            <div className="border-t border-white/10 bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-300">
                    Select tour
                  </label>
                  <select
                    value={tour.id}
                    onChange={(e) => onTourChange(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#04181c] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
                  >
                    {TOURS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} — {t.days} days
                      </option>
                    ))}
                  </select>
                </div>

                {/* group / private toggle */}
                <div className="grid grid-cols-2 gap-2 rounded-xl bg-white/5 p-1.5">
                  <button
                    onClick={() => setKind("group")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                      kind === "group"
                        ? "bg-amber-400 text-black"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <UsersRound className="h-4 w-4" />
                    Group
                  </button>
                  <button
                    onClick={() => setKind("private")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                      kind === "private"
                        ? "bg-amber-400 text-black"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <UserRound className="h-4 w-4" />
                    Private
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                      <CalendarDays className="h-4 w-4 text-amber-400" />
                      Departure
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#04181c] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
                    />
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                      <Users className="h-4 w-4 text-amber-400" />
                      Travelers
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={travelers}
                      onChange={(e) =>
                        setTravelers(
                          Math.max(1, Math.min(30, Number(e.target.value) || 1))
                        )
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#04181c] px-4 py-3 text-white outline-none transition-colors focus:border-amber-400/60"
                    />
                  </div>
                </div>

                {/* live quote */}
                <div className="rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-5 py-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">
                      {formatPKR(perPerson)} × {travelers} traveler
                      {travelers === 1 ? "" : "s"}
                      {kind === "private" ? " (private)" : " (group)"}
                    </span>
                    <span className="text-zinc-500">
                      {date ? prettyDate(date) : "Pick a date"}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-300">
                      Estimated total
                    </span>
                    <span className="font-display text-3xl font-bold text-amber-400">
                      {formatPKR(total)}
                    </span>
                  </div>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!valid) e.preventDefault();
                  }}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold transition-all ${
                    valid
                      ? "bg-amber-400 text-black shadow-[0_0_32px_rgba(245,158,11,0.4)] hover:bg-amber-300"
                      : "cursor-not-allowed bg-zinc-800 text-zinc-500"
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirm via WhatsApp
                </a>
                {!valid && (
                  <p className="text-center text-xs text-zinc-500">
                    Select a departure date to enable booking.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
