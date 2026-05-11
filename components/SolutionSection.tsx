/* ---------------------------------------------------------------------------
 * SolutionSection — "A Unified Ecosystem"
 * ---------------------------------------------------------------------------
 * Three feature cards: Real-Time Availability, Book & Navigate, Unified Payments.
 *
 *  Desktop (md+): 3-column grid with decorative images at top-right of each card.
 *  Tablet (sm):   2-column grid, last card spans full width.
 *  Mobile (<sm):  Single column stack with scaled fonts and images.
 * --------------------------------------------------------------------------- */

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function SolutionSection() {
  return (
    <section className="min-h-screen w-full py-10 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto relative z-10 mt-6 sm:mt-10">

        {/* ── Section header ──────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-16 md:mb-20 text-center flex flex-col justify-center items-center px-2">
          <h2 className="text-3xl sm:text-4xl md:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-fg mb-4 sm:mb-6 md:mb-8">
            A Unified Ecosystem
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-muted-fg max-w-4xl">
            Instead of dealing with multiple charging apps, payment systems,
            and uncertainty, TezPass combines everything into one platform.
            One pass. One app. One charging network.
          </p>
        </div>

        {/* ── Feature cards grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          {/* Card 1 — Real-Time Availability */}
          <div className="bg-muted/80 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
            {/* Decorative map-pin graphic — scaled for mobile */}
            <div className="absolute top-3 right-2 sm:top-5 sm:right-3">
              <img src="/card/pin.png" alt="icon" className="w-32 sm:w-40 md:w-55" />
            </div>
            <div className="mt-16 sm:mt-20 md:mt-28">
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-6 sm:mb-8 text-fg">
                Real-Time <br /> Availability
              </h3>
              <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-8 sm:mb-12">
                Instantly discover nearby chargers and check their live status.
                Know exactly which chargers are free, occupied, or offline
                before you arrive.
              </p>
            </div>
            {/* Action bar */}
            <div className="mt-auto flex justify-between items-end w-full">
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Live Map</button>
                <button className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Status</button>
              </div>
              <button className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors flex-shrink-0"><ArrowIcon /></button>
            </div>
          </div>

          {/* Card 2 — Book & Navigate */}
          <div className="bg-muted/80 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
            <div className="absolute top-3 right-2 sm:top-5 sm:right-3">
              <img src="/card/book.png" alt="icon" className="w-40 sm:w-56 md:w-75" />
            </div>
            <div className="mt-16 sm:mt-20 md:mt-28">
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-6 sm:mb-8 text-fg">
                Book &amp; <br /> Navigate
              </h3>
              <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-8 sm:mb-12">
                Reserve your charging slot in advance to avoid waiting. Get
                optimized route suggestions and battery-safe navigation for
                stress-free long trips.
              </p>
            </div>
            <div className="mt-auto flex justify-between items-end w-full">
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Reserve</button>
                <button className="px-4 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Routes</button>
              </div>
              <button className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors flex-shrink-0"><ArrowIcon /></button>
            </div>
          </div>

          {/* Card 3 — Unified Payments (spans full row on tablet) */}
          <div className="sm:col-span-2 md:col-span-1 bg-muted/80 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] overflow-hidden">
            <div className="absolute top-3 right-2 sm:top-5 sm:right-3">
              <img src="/card/card.png" alt="icon" className="w-40 sm:w-56 md:w-75" />
            </div>
            <div className="mt-16 sm:mt-20 md:mt-28 flex-grow">
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-6 sm:mb-8 text-fg">
                Unified <br /> Payments
              </h3>
              <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-6 sm:mb-8">
                Scan and charge with zero friction. TezPass handles payments
                centrally across all networks, providing seamless billing.
              </p>
              {/* Payment methods */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] md:text-sm font-medium mb-5 text-fg/40 mt-6 sm:mt-10">
                <div>UPI &amp; Cards</div>
                <div>Wallet Balance</div>
                <div>Subscriptions</div>
                <div>Loyalty Points</div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-auto flex justify-between items-end w-full">
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Wallet</button>
                <button className="px-4 py-2.5 sm:py-3 rounded-full border border-fg text-xs sm:text-sm font-medium hover:bg-hover transition-colors">Rewards</button>
              </div>
              <button className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors flex-shrink-0"><ArrowIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
