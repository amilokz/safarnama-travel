"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Itinerary from "@/components/Itinerary";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";
import { TOURS, type Tour } from "@/data/tours";

export default function Home() {
  const [tourId, setTourId] = useState(TOURS[0].id);

  const handleBook = (tour: Tour) => {
    setTourId(tour.id);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Tours onBook={handleBook} />
      <Itinerary />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <BookingWidget tourId={tourId} onTourChange={setTourId} />
      <FAQ />
      <Footer />
    </main>
  );
}
