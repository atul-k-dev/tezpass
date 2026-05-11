/* ---------------------------------------------------------------------------
 * WhatWeDoSection
 * ---------------------------------------------------------------------------
 * Horizontally-scrollable card carousel showcasing four TezPass capabilities.
 *
 *  Desktop (md+): Title on the left, carousel offset to the right via left-70.
 *  Tablet / Mobile: Title stacks on top, carousel starts from the left edge
 *    with proper padding so cards are fully visible and scrollable.
 * --------------------------------------------------------------------------- */

export default function WhatWeDoSection() {
  return (
    <section className="w-full min-h-[auto] md:min-h-screen py-10 sm:py-16 px-4 md:px-12 relative overflow-hidden bg-bg flex flex-col gap-4">

      {/* ── Decorative background video (bottom-left) ─────────────────── */}
      <div className="absolute -bottom-2 left-0 opacity-70 fliter blur-[2px] hidden sm:block">
        <video src="/flower.mp4" autoPlay loop className="w-90"></video>
      </div>

      {/* ── Section header + CTA ─────────────────────────────────────── */}
      <div className="w-full flex flex-col justify-between relative z-10 pt-4">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-[5.5rem] font-medium leading-[1] tracking-tight text-fg mb-4 flex items-center gap-2">
            What We Do
            {/* Decorative rotated arrow icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-45 relative top-1 w-7 h-7 sm:w-10 sm:h-10"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </h2>
          <button className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors w-max bg-transparent">
            About Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="-rotate-45 w-4 h-4 sm:w-[18px] sm:h-[18px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Hidden navigation arrows (kept for future use) */}
        <div className="mt-16 md:mt-auto hidden">
          <p className="text-[#a0a0a0] font-medium max-w-[200px] leading-[1.4] mb-12 text-[15px]">
            Design, Develop And Run Any Business Software You Need.
          </p>
          <div className="flex items-center gap-6 text-[#a0a0a0]">
            <button className="hover:text-fg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="hover:text-fg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Horizontal scroll carousel ───────────────────────────────── */}
      {/* On mobile: starts at left edge with padding.
          On desktop: offset to the right via left-70 for the peek effect. */}
      <div className="w-full relative left-0 md:left-70 -top-2 md:-top-5 flex overflow-x-auto gap-3 sm:gap-4 pb-4 pt-4 snap-x snap-mandatory relative z-10">

        {/* Card 1 — Smart EV Profiles */}
        <div className="snap-start min-w-[280px] w-[280px] sm:min-w-[340px] sm:w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col relative">
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-4 sm:mb-6 text-fg mt-3 sm:mt-4 tracking-tight">
            Smart EV Profiles
          </h3>
          <div className="w-full h-40 sm:h-52 rounded-xl mb-4 sm:mb-6 relative overflow-hidden flex items-center justify-center">
            <img src="/card/business_blocks.png" alt="Smart EV Profiles" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-8 border-b-[1.5px] border-fg mb-4 sm:mb-6"></div>
          <p className="text-[13px] sm:text-sm md:text-lg font-medium text-fg leading-[1.6]">
            Register your vehicle once to get personalized charging speeds,
            connector compatibility, and tailored station recommendations for
            your specific car model.
          </p>
        </div>

        {/* Card 2 — Tiered Memberships */}
        <div className="snap-start min-w-[280px] w-[280px] sm:min-w-[340px] sm:w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col relative">
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-4 sm:mb-6 text-fg mt-3 sm:mt-4 tracking-tight">
            Tiered Memberships
          </h3>
          <div className="w-full h-40 sm:h-52 rounded-xl mb-4 sm:mb-6 relative overflow-hidden flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop" alt="Tiered Memberships" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-8 border-b-[1.5px] border-fg mb-4 sm:mb-6"></div>
          <p className="text-[13px] sm:text-sm md:text-lg font-medium text-fg leading-[1.6]">
            Choose from Lite, Pro, or Ultra plans tailored for casual users,
            daily commuters, and frequent travelers to unlock lower fees and
            priority booking.
          </p>
        </div>

        {/* Card 3 — Rewards Ecosystem */}
        <div className="snap-start min-w-[280px] w-[280px] sm:min-w-[340px] sm:w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col relative">
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-4 sm:mb-6 text-fg mt-3 sm:mt-4 tracking-tight">
            Rewards Ecosystem
          </h3>
          <div className="w-full h-40 sm:h-52 rounded-xl mb-4 sm:mb-6 relative overflow-hidden flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" alt="Rewards Ecosystem" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-8 border-b-[1.5px] border-fg mb-4 sm:mb-6"></div>
          <p className="text-[13px] sm:text-sm md:text-lg font-medium text-fg leading-[1.6]">
            Turn every charging session into points. Redeem your loyalty
            rewards for cashback, food coupons, charging credits, and
            exclusive partner offers.
          </p>
        </div>

        {/* Card 4 — Intelligent Insights */}
        <div className="snap-start min-w-[280px] w-[280px] sm:min-w-[340px] sm:w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-3xl sm:rounded-4xl p-4 sm:p-6 md:p-8 flex flex-col relative">
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-4 sm:mb-6 text-fg mt-3 sm:mt-4 tracking-tight">
            Intelligent Insights
          </h3>
          <div className="w-full h-40 sm:h-52 rounded-xl mb-4 sm:mb-6 relative overflow-hidden flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" alt="Intelligent Insights" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-8 border-b-[1.5px] border-fg mb-4 sm:mb-6"></div>
          <p className="text-[13px] sm:text-sm md:text-lg font-medium text-fg leading-[1.6]">
            Go beyond simple billing. Track your battery health trends,
            monthly usage efficiency, and long-term travel insights through
            our intelligent platform.
          </p>
        </div>
      </div>
    </section>
  );
}
