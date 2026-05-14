/* ==========================================================================
 * Home Page — app/page.tsx
 * ==========================================================================
 * Root landing page for TezPass. Composed entirely of section-level
 * components, each responsible for its own layout, state, and styling.
 *
 * Section order (top → bottom):
 *   1. Header        — Fixed top navigation bar with logo, links, and CTAs.
 *   2. HeroSection   — Hero headline, charger carousel, and stat cards.
 *   3. ProblemSection — "The Challenge" — frames the EV charging pain points.
 *   4. SolutionSection — "A Unified Ecosystem" — three feature pillars.
 *   5. WhatWeDoSection — Horizontal scroll showcase of platform capabilities.
 *   6. PricingSection — Membership plan cards (Lite / Pro / Ultra).
 *   7. FAQSection     — Collapsible frequently-asked-questions accordion.
 *   8. Footer         — Site-wide footer with links, socials, and legal.
 * ========================================================================== */

"use client";

// ── Section components ──────────────────────────────────────────────────────
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-bg text-fg font-sans relative">
      {/* ── Global fixed header ──────────────────────────────────────── */}
      <Header />

      {/* ── Page sections (rendered in scroll order) ─────────────────── */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
