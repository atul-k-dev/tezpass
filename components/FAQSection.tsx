"use client";

import { useState } from "react";

/* ---------------------------------------------------------------------------
 * FAQSection
 * ---------------------------------------------------------------------------
 * Collapsible FAQ accordion with two-column layout.
 *
 *  Desktop (md+): Left col = "FAQ" title + button, Right col = accordion.
 *  Mobile (<md):  Single column — title on top, accordion below.
 *    Font sizes and spacing scaled for comfortable mobile reading.
 * --------------------------------------------------------------------------- */

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is TezPass?",
    answer:
      "TezPass is India's first unified EV charging pass — a single subscription that gives you seamless access to India's largest network of EV charging stations. No more juggling multiple apps or payment methods.",
  },
  {
    question: "How does TezPass work across different charging networks?",
    answer:
      "TezPass integrates with all major charging networks via a unified API layer. When you scan a QR code at any partner station, TezPass authenticates your session and handles billing automatically through your linked account — regardless of the network operator.",
  },
  {
    question: "Do I need a separate app for each charging station?",
    answer:
      "Not at all. That's exactly what TezPass eliminates. One app, one pass, and you're covered at every station on our network — whether it's ChargeGrid, GreenwheelZ, or any other partner.",
  },
  {
    question: "What membership plans are available?",
    answer:
      "We offer three plans: Studio for individuals, Starter for growing teams, and Pro for large agencies and fleets. Each plan unlocks different levels of access, support, and analytics. Visit our Pricing section to compare features.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. TezPass uses bank-grade encryption and complies with PCI-DSS standards. Your payment credentials are tokenized and never stored on our servers. All transactions go through a certified payment gateway.",
  },
  {
    question: "Can I book a charging slot in advance?",
    answer:
      "Yes! With TezPass, you can reserve a charging slot at any compatible station up to 24 hours in advance. You'll receive a confirmation and navigation assistance straight to the slot.",
  },
];

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="border-t border-[#252525]/15 py-4 sm:py-5">
        <button
          className="w-full flex items-center justify-between gap-3 sm:gap-4 text-left group"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-fg leading-snug">
            {question}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-fg/40 flex items-center justify-center text-fg/70 text-lg font-light transition-transform duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          >
            +
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm sm:text-base text-[#3d3d3d]/80 leading-relaxed font-medium pr-8 sm:pr-14">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-bg py-14 sm:py-20 pb-0 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 sm:gap-12 md:gap-20">
        {/* Left column — title + button */}
        <div className="flex flex-col gap-4 sm:gap-6 md:pt-2">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-fg leading-none tracking-tight">
            FAQ
          </h2>
          <button className="rounded-full border border-fg px-4 py-1.5 text-xs font-medium text-fg w-max hover:bg-hover transition-colors uppercase tracking-wide">
            All Questions
          </button>
        </div>

        {/* Right column — accordion items */}
        <div>
          {faqs.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
          {/* Bottom divider */}
          <div className="border-t border-[#252525]/15" />
        </div>
      </div>
    </section>
  );
}
