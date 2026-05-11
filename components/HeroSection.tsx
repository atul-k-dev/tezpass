"use client";

import { useState, useEffect } from "react";

/* ---------------------------------------------------------------------------
 * HeroSection
 * ---------------------------------------------------------------------------
 * Top-of-page hero area composed of three visual rows:
 *
 *  Desktop (md+):
 *    3-col grid, 3 rows — headline + carousel span top 2 rows,
 *    3 stat cards fill bottom row side-by-side.
 *
 *  Mobile / Tablet (<md):
 *    Single column stack — headline → carousel → stat cards vertically.
 *    Heights and font sizes are scaled down for comfortable reading.
 * --------------------------------------------------------------------------- */

// ── Carousel image configuration ────────────────────────────────────────────
const baseImages = ["/charger.png", "/charger2.png", "/charger3.png"];
const images = [...baseImages, baseImages[0]];

export default function HeroSection() {
  // ── Carousel state ──────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-advance the carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // When the carousel reaches the cloned first slide, snap back instantly
  useEffect(() => {
    if (currentIndex === images.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="w-full">

      {/* ── Main hero area: headline + carousel ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full md:h-[66.67vh]">

        {/* Hero headline & CTA buttons */}
        <div className="md:col-span-2 bg-bg flex flex-col justify-end p-4 pt-24 pb-10 md:p-12 md:pb-24">
          <div className="flex flex-col max-w-4xl">
            <h1 className="text-5xl sm:text-5xl md:text-[8rem] font-medium leading-[.9] mb-4 md:mb-8 tracking-tight text-fg">
              One pass for <br /> every charger
            </h1>
            <p className="max-w-2xl text-sm sm:text-base md:text-xl md:ml-4 mb-6 md:mb-10 leading-relaxed font-medium text-muted-fg">
              India's first EV charging pass that gives you access to India's
              largest EV Charging Network. creating stunning 3D models.
            </p>

            {/* CTA button group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button className="bg-primary text-primary-fg px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                START NOW
              </button>
              <button className="flex items-center gap-2 sm:gap-3 font-medium border-2 py-1.5 px-2 rounded-full border-fg pr-3 sm:pr-4 text-xs sm:text-sm hover:opacity-70 transition-opacity text-primary">
                <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-primary pl-1 text-primary-fg rounded-full text-xs">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z" fill="white" />
                    <path opacity="0.4" d="M18.0902 15.4598L14.0402 17.7998L10.0002 20.1298C8.09022 21.2298 5.84021 20.5698 4.72021 18.9598L5.14021 18.7098L19.5802 10.0498C20.5802 11.8498 20.0902 14.3098 18.0902 15.4598Z" fill="white" />
                  </svg>
                </span>
                SEE HOW IT WORKS
              </button>
            </div>
          </div>
        </div>

        {/* Charger image carousel */}
        <div className="h-[300px] sm:h-[350px] md:h-full bg-muted relative overflow-hidden flex flex-col p-8 md:rounded-bl-4xl">
          <div
            className={`absolute top-0 left-0 h-full flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
            }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
                <img
                  src={src}
                  alt={`tezpass charger ${i + 1}`}
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom stat / info cards ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">

        {/* Card 1 — Network stats */}
        <div className="relative min-h-[250px] md:min-h-[280px] bg-muted p-6 sm:p-8 md:p-10 flex flex-col justify-between text-fg md:rounded-tr-4xl overflow-hidden">
          {/* Decorative map graphic — scaled for mobile */}
          <div className="absolute top-1 right-2 md:top-3 md:right-3">
            <img src="/card/map2.png" alt="map" className="w-28 sm:w-35 md:w-60" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-fg mb-3 uppercase tracking-wider">
              Network
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-tight">
              120+
              <br />
              Charging Stations
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-tight">
              Nation Wide
            </h2>
          </div>
          <div className="flex justify-between items-end w-full mt-4">
            <div className="text-sm font-medium space-y-2 w-full max-w-[220px]">
              <p className="flex justify-between items-center w-full">
                <span className="text-gray-700">Single payment</span>
                <span>£1.990</span>
              </p>
            </div>
            {/* Arrow link button */}
            <button className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-primary-fg rounded-full flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 ml-4">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2 — Rewards counter with avatar stack */}
        <div className="relative min-h-[250px] md:min-h-[280px] bg-muted p-6 sm:p-8 md:p-10 flex flex-col justify-between text-fg md:rounded-t-4xl overflow-hidden">
          <div className="absolute top-1 right-1 md:top-3 md:right-3">
            <img src="/card/reward2.png" alt="reward" className="w-36 sm:w-50 md:w-70" />
          </div>
          <p className="text-xl sm:text-2xl font-medium uppercase tracking-wider text-muted-fg leading-snug">
            Free
            <br />
            Rewards
          </p>
          <div className="flex items-end justify-between w-full">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium mb-1">
                1437+
              </h2>
              <p className="text-xs font-medium text-gray-600">
                Rewards Redeemed
              </p>
            </div>
            {/* Overlapping user avatars */}
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--hover)] object-cover" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--hover)] object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--hover)] object-cover" />
            </div>
          </div>
        </div>

        {/* Card 3 — Book & Reserve promo (dark background) */}
        <div className="relative min-h-[280px] md:min-h-[280px] bg-fg p-6 sm:p-8 md:p-10 flex flex-col justify-end md:rounded-tl-4xl overflow-hidden">
          {/* Profile avatar */}
          <div className="absolute top-4 left-4 w-14 h-14 md:left-10 md:top-8 md:w-20 md:h-20 rounded-full border md:border-3 border-bg overflow-hidden bg-bg z-20">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sofia Zinchenko" className="w-full h-full object-cover" />
          </div>
          {/* Calendar graphic */}
          <div className="absolute top-2 right-2 md:top-3 md:right-3">
            <img src="/card/calender3.png" alt="calender" className="w-28 sm:w-32 md:w-55" />
          </div>
          <div className="mt-8">
            <h3 className="font-medium text-xl sm:text-2xl md:text-3xl uppercase tracking-wider mb-1 text-bg">
              Book and Reserve
            </h3>
            <p className="text-lg sm:text-xl text-bg mb-3 sm:mb-5">Anytime , Anywhere</p>
            <p className="text-base sm:text-lg md:text-xl text-bg/70 leading-relaxed font-thin">
              Tap to reserve your charging station in advance and enjoy a
              seamless charging experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
