"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------------------------------------
 * Header
 * ---------------------------------------------------------------------------
 * Fixed top navigation bar.
 *  • Desktop (md+): Logo, nav pills, bag icon, and "APPLY NOW" CTA.
 *  • Mobile (<md):  Logo + hamburger toggle → slide-down mobile nav overlay.
 * --------------------------------------------------------------------------- */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Invert when scrolled past 90vh (roughly the hero section)
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-3 left-0 w-full z-50 px-4 md:px-10 transition-[filter] duration-300 ${isScrolled ? 'invert' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >

      {/* ── Desktop header bar ───────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-1 pointer-events-none ">

        {/* Left — Logo + desktop nav pills */}
        <div className="col-span-2 md:col-span-2 flex items-center gap-5 pointer-events-auto">
          <div className="flex items-center">
            <svg className="logo reveal" width="46" height="46" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="52" y="40" width="152" height="28" rx="14" fill="var(--primary-fg)" />
              <path d="M108 68H154L136 112H176L100 216L118 144H92L108 68Z" fill="var(--primary-fg)" />
            </svg>
          </div>
          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex gap-1 font-medium rounded-full p-1 border border-border/40 text-sm text-primary-fg/80">
            <a href="#" className="hover:opacity-70 transition-opacity bg-primary-fg text-primary p-2.5 px-4 rounded-full">Home</a>
            <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">Course</a>
            <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">About</a>
            <a href="#" className="hover:opacity-70 transition-opacity p-2.5 px-4 rounded-full">Contact</a>
          </nav>
          <div className="w-9 hidden md:block"></div> {/* Spacer for symmetry */}
        </div>

        {/* Right — Desktop: bag + CTA | Mobile: hamburger */}
        <div className="col-span-1 flex justify-end items-center gap-3 pointer-events-auto">
          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-12 h-12 border rounded-full flex items-center justify-center text-primary-fg hover:bg-primary/80 pl-1 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7 8.97989L4.14 17.7099C4.05 17.3799 4 17.0299 4 16.6699V7.32989C4 4.24989 7.33 2.32989 10 3.86989L14.04 6.19989L18.09 8.53989C18.31 8.66989 18.52 8.80989 18.7 8.97989Z" fill="white" />
                <path opacity="0.4" d="M18.0902 15.4598L14.0402 17.7998L10.0002 20.1298C8.09022 21.2298 5.84021 20.5698 4.72021 18.9598L5.14021 18.7098L19.5802 10.0498C20.5802 11.8498 20.0902 14.3098 18.0902 15.4598Z" fill="white" />
              </svg>
            </button>
            <button className="bg-primary-fg text-primary px-6 py-3.5 rounded-full font-medium text-sm transition-colors">
              START NOW
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden w-11 h-11 bg-primary rounded-full flex items-center justify-center text-primary-fg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              /* Close (×) icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger (≡) icon */
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav overlay ───────────────────────────────────────── */}
      {mobileOpen && (
        <nav className="md:hidden mt-3 bg-muted rounded-2xl p-4 flex flex-col gap-2 text-sm font-medium text-fg shadow-lg pointer-events-auto">
          <a href="#" className="bg-primary text-primary-fg p-3 px-5 rounded-full text-center">Home</a>
          <a href="#" className="hover:bg-hover p-3 px-5 rounded-full text-center transition-colors">Course</a>
          <a href="#" className="hover:bg-hover p-3 px-5 rounded-full text-center transition-colors">About</a>
          <a href="#" className="hover:bg-hover p-3 px-5 rounded-full text-center transition-colors">Contact</a>
          <button className="bg-primary text-primary-fg px-6 py-3.5 rounded-full font-medium text-sm mt-2 transition-colors">
            START NOW
          </button>
        </nav>
      )}
    </motion.header>
  );
}
