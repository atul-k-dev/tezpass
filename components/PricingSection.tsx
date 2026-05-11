"use client";

/* ---------------------------------------------------------------------------
 * PricingSection
 * ---------------------------------------------------------------------------
 * Membership plan cards: TEZPASS LITE, PRO, ULTRA.
 *
 *  Desktop (md+): 3-column grid.
 *  Tablet (sm):   2-column grid, last card spans full width.
 *  Mobile (<sm):  Single-column stack, scaled typography.
 * --------------------------------------------------------------------------- */

type Feature = {
  label: string;
  available: boolean;
};

type PlanCardProps = {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: Feature[];
  description: string;
  featureBg: string;
  buttonClass: string;
  badge?: string;
  featured?: boolean;
};

const plans: PlanCardProps[] = [
  {
    name: "TEZPASS LITE",
    subtitle: "Great Starter",
    price: "₹1900",
    period: "30 Days",
    features: [
      { label: "100 Units", available: true },
      { label: "₹19 Per Unit", available: true },
      { label: "30 Days Validity", available: true },
    ],
    description:
      "A perfect entry-point for individual EV owners looking for a simple and reliable charging plan.",
    featureBg: "bg-[#e8f0e2]",
    buttonClass: "bg-primary text-primary-fg hover:bg-primary/80",
  },
  {
    name: "TEZPASS PRO",
    subtitle: "Power User",
    price: "₹3600",
    period: "45 Days",
    features: [
      { label: "200 Units", available: true },
      { label: "₹18 Per Unit", available: true },
      { label: "45 Days Validity", available: true },
    ],
    description:
      "Ideal for regular commuters who need consistent charging availability and better value.",
    featureBg: "bg-[#fce8e8]",
    buttonClass: "bg-primary text-primary-fg hover:bg-primary/80",
  },
  {
    name: "TEZPASS ULTRA",
    subtitle: "Best Value",
    price: "₹5400",
    period: "90 Days",
    features: [
      { label: "300 Units", available: true },
      { label: "₹18 Per Unit", available: true },
      { label: "90 Days Validity", available: true },
    ],
    description:
      "The ultimate plan for high-mileage drivers, offering the lowest cost per unit and maximum flexibility.",
    featureBg: "bg-[#eef6e2]",
    buttonClass: "bg-accent text-primary-fg hover:bg-accent/80",
    badge: "Most Popular",
    featured: true,
  },
];

function FeatureItem({ label, available }: Feature) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium text-[#252525]">
      {available ? (
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
          ✓
        </span>
      ) : (
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-400 flex items-center justify-center text-white text-xs font-bold">
          ✗
        </span>
      )}
      {label}
    </li>
  );
}

function PlanCard({
  name,
  subtitle,
  price,
  period,
  features,
  description,
  featureBg,
  buttonClass,
  badge,
}: PlanCardProps) {
  return (
    <div className="bg-muted rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col gap-5 sm:gap-6 hover:border-primary/20 transition-all duration-300">
      {/* Header */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">{subtitle}</p>
          {badge && (
            <span className="inline-block bg-accent text-primary-fg text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-fg mb-1">{name}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-4xl sm:text-5xl font-bold text-fg leading-none tracking-tight">
          {price}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-muted-fg uppercase tracking-widest">
          / {period}
        </span>
      </div>

      {/* Feature list */}
      <div className="bg-bg rounded-2xl sm:rounded-3xl p-4 sm:p-5">
        <ul className="flex flex-col gap-3 sm:gap-4">
          {features.map((f) => (
            <FeatureItem key={f.label} label={f.label} available={f.available} />
          ))}
        </ul>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-fg leading-relaxed font-medium">
        {description}
      </p>

      {/* CTA */}
      <button
        className={`w-full py-3.5 sm:py-4 rounded-full font-bold text-sm transition-all duration-300 active:scale-[0.98] ${buttonClass}`}
      >
        Select Plan
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 md:px-6" id="pricing">
      {/* Section header */}
      <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          Membership Plans
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-fg leading-tight mb-4 sm:mb-6">
          Choose A plan
        </h2>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div key={plan.name} className={i === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
            <PlanCard {...plan} />
          </div>
        ))}
      </div>
    </section>
  );
}
