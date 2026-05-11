/* ---------------------------------------------------------------------------
 * ProblemSection
 * ---------------------------------------------------------------------------
 * Two-card section framing the core problem TezPass solves.
 *
 *  Desktop (md+): 2-col + 1-col side-by-side grid.
 *  Mobile (<md):  Full-width stacked cards, scaled fonts & images.
 * --------------------------------------------------------------------------- */

export default function ProblemSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full mt-1 md:mt-[27px] mb-1">

      {/* ── Main problem statement card (spans 2 cols on desktop) ─────── */}
      <div className="md:col-span-2 relative bg-muted p-6 sm:p-8 md:p-12 flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:rounded-br-4xl overflow-hidden">
        {/* Decorative road illustration — smaller on mobile */}
        <div className="absolute bottom-0 right-0">
          <img src="/card/road.png" alt="" className="w-48 sm:w-72 md:w-100" />
        </div>

        {/* Section label + headline */}
        <div className="relative z-10">
          <p className="text-xs font-medium text-muted-fg mb-3 uppercase tracking-wider">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[4rem] font-medium leading-[1.05] tracking-tight text-fg mb-6">
            Charging is broken.
            <br />
            We're fixing it.
          </h2>
        </div>

        {/* Supporting description */}
        <div className="max-w-xl relative z-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-muted-fg">
            Range anxiety, fragmented networks, and endless app downloads have
            made the EV experience frustrating. It's time for a unified
            solution that puts the driver first.
          </p>
        </div>
      </div>

      {/* ── "One App" stat card (dark background) ────────────────────── */}
      <div className="md:col-span-1 bg-fg p-6 sm:p-8 md:p-10 md:pb-0 flex flex-col justify-between min-h-[320px] sm:min-h-[400px] relative overflow-hidden md:rounded-bl-4xl">
        {/* Headline text */}
        <div className="mt-8 sm:mt-16 md:mt-0 z-10">
          <h3 className="text-5xl sm:text-6xl md:text-[4rem] font-medium text-bg leading-none mb-4">
            One App
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-bg leading-tight">
            For all yours EV problems solved. Book &amp; Pay.
          </p>
        </div>

        {/* Decorative tilted phone-screen mockups */}
        <div className="w-full h-48 sm:h-full relative top-10  md:top-0 md:pt-7 justify-center flex gap-2 ">
          <div className="min-w-24 sm:min-w-40 h-full bg-card rounded-t-2xl border-3 border-border -rotate-10 top-10 relative z-1 border-b-0"></div>
          <div className="min-w-24 sm:min-w-40 h-full bg-card rounded-t-2xl border-3 border-border relative z-2 border-b-0"></div>
          <div className="min-w-24 sm:min-w-40 h-full bg-card rounded-t-2xl border-3 border-border rotate-10 top-10 relative z-1 border-b-0"></div>
        </div>
      </div>
    </section>
  );
}
