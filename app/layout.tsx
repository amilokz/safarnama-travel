import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafarNama — Hunza, Skardu & Naran Tour Packages from Pakistan",
  description:
    "Book unforgettable Hunza, Skardu, Naran and Kashmir tours with SafarNama. Group & private packages, expert local guides, 4x4 jeeps, transparent PKR pricing. Reserve on WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#04181c] font-sans text-zinc-200">
        {children}
      </body>
    </html>
  );
}
