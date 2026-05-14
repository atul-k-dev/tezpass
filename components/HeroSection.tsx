"use client";
import React, { useRef } from "react";
import { Oswald } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Elements for initial timeline
  const horizontalLineRef = useRef<HTMLDivElement>(null);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const horizontalLinesGridRef = useRef<(HTMLDivElement | null)[]>([]);
  const tezpassCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const carRef = useRef<HTMLDivElement>(null);
  const chargerRef = useRef<HTMLDivElement>(null);
  const fgContentRef = useRef<HTMLDivElement>(null);
  const fgListItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const fgTitleWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const fgButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Element for scroll parallax
  const bgTextContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Orchestrated Entrance Timeline
    const tl = gsap.timeline();

    // 1. Grid lines animate in
    tl.fromTo(horizontalLineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power3.out" },
      0.1
    );

    verticalLinesRef.current.forEach((line, i) => {
      if (line) {
        tl.fromTo(line,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.8, ease: "power3.out" },
          0.15 + i * 0.1
        );
      }
    });

    horizontalLinesGridRef.current.forEach((line, i) => {
      if (line) {
        tl.fromTo(line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          0.2 + i * 0.15
        );
      }
    });

    // 2. TEZPASS Text & Car
    const tezpassElements = tezpassCharsRef.current.filter(Boolean);
    if (tezpassElements.length) {
      tl.fromTo(tezpassElements,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.08, ease: "power3.out" },
        0.6
      );
    }

    tl.fromTo(carRef.current,
      { right: "-100%" },
      { right: "25%", duration: 1.5, ease: "power3.out" },
      0.6
    );

    // 3. Charger rises & Foreground fades
    tl.fromTo(chargerRef.current,
      { y: "100%", opacity: 0 },
      { y: "2%", opacity: 1, duration: 1.2, ease: "power3.out" },
      1.8
    );

    tl.fromTo(fgContentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      1.8
    );

    const fgListElements = fgListItemsRef.current.filter(Boolean);
    if (fgListElements.length) {
      tl.fromTo(fgListElements,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" },
        2.1
      );
    }

    const fgTitleElements = fgTitleWordsRef.current.filter(Boolean);
    if (fgTitleElements.length) {
      tl.fromTo(fgTitleElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        2.2
      );
    }

    const fgBtnElements = fgButtonsRef.current.filter(Boolean);
    if (fgBtnElements.length) {
      tl.fromTo(fgBtnElements,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
        2.6
      );
    }

    // Scroll Interactive Parallax
    gsap.to(carRef.current, {
      x: -150,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(bgTextContainerRef.current, {
      y: 100,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="sticky top-0 z-0 relative w-full h-screen min-h-[800px] bg-[#2d2f2e] overflow-hidden flex items-center justify-center font-sans text-white">

      {/* Noise overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.08]" />

      {/* Background Grid */}
      <div
        ref={horizontalLineRef}
        style={{ transformOrigin: "left" }}
        className="absolute top-[8%] left-0 w-full h-[1px] bg-[#ffffff1a]"
      />

      <div className="absolute inset-0 pointer-events-none z-[-1]">
        {/* Vertical lines */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`v-${i}`}
            ref={el => { verticalLinesRef.current[i] = el; }}
            style={{ transformOrigin: "top", left: `${(i + 1) * 25}%` }}
            className="absolute top-0 w-[1px] h-full bg-[#ffffff1a]"
          />
        ))}
        {/* Horizontal lines */}
        {[0, 1].map((i) => (
          <div
            key={`h-${i}`}
            ref={el => { horizontalLinesGridRef.current[i] = el; }}
            style={{ transformOrigin: "left", top: `${(i + 1) * 53.333}%` }}
            className="absolute left-0 w-full h-[1px] bg-[rgba(255,255,255,0.10)]"
          />
        ))}
      </div>

      {/* TEZPASS Background Text */}
      <div ref={bgTextContainerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[-1] lg:opacity-50 overflow-hidden max-h-min top-10 2xl:top-0">
        <svg className="w-full h-auto" viewBox="0 0 1600 452" xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%" className="overflow-visible origin-center">
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="font-oswald text-[430px] leading-[1.1] font-medium tracking-[-0.05em] text-center text-[#434645] whitespace-nowrap">
                {"TEZPASS".split("").map((char, i) => (
                  <span
                    key={i}
                    ref={el => { tezpassCharsRef.current[i] = el; }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* 3D Charger Image */}
      <div className="absolute inset-x-0 bottom-25 md:bottom-0 top-0 md:top-1 flex items-end justify-center pointer-events-none z-10">
        <div ref={chargerRef} className="relative w-full max-w-[900px] h-full flex justify-center">
          <img
            src="/charger1.png"
            alt="Statue"
            className="md:w-[115%] md:h-[115%] w-[360px] min-w-[300px] scale-[1.7] md:scale-[1] ml-5 md:ml-0 object-contain object-bottom"
          />
        </div>
      </div>

      {/* Foreground Content Container */}
      <div
        ref={fgContentRef}
        className="relative z-20 w-full h-full max-w-full mx-auto sm:px-12 flex pt-32 pb-15 lg:pb-28 pointer-events-none bg-gradient-to-t from-black/80 via-black/50 lg:via-black/0 lg:from-black/40 to-transparent"
      >
        <div className="flex lg:flex-row flex-col justify-end p-4 lg:p-0 lg:items-end gap-8 lg:gap-0 lg:justify-between max-w-[1800px] mx-auto relative w-full">
          {/* Left Content */}
          <div className="pointer-events-auto">
            <div className="mb-4 ml-3">
              <ul className="text-[14px] md:text-lg font-sm leading-relaxed tracking-wide text-foreground">
                {["Tap Once", "Charge Anywhere", "Drive Further"].map((text, i) => (
                  <li key={i} ref={el => { fgListItemsRef.current[i] = el; }}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <h2 className="text-[3rem] sm:text-[4rem] md:text-[7rem] font-medium leading-[0.9] tracking-tight whitespace-nowrap text-white">
                {["One pass.", "Every charger."].map((word, i) => (
                  <span
                    key={i}
                    ref={el => { fgTitleWordsRef.current[i] = el; }}
                    style={{ display: i === 1 ? "block" : "inline" }}
                  >
                    {word}{i === 0 ? " " : ""}
                  </span>
                ))}
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[430px] pointer-events-auto lg:text-center">
            <p className="text-[1.1rem] md:text-[2rem] leading-[1.2] font-sm text-white mb-8">
              Access India&apos;s growing EV charging ecosystem through a single, seamless experience.
            </p>
            <button
              ref={el => { fgButtonsRef.current[0] = el; }}
              className="border hover:bg-[#e64625] transition-colors text-white text-[15px] font-semibold px-8 py-3.5 rounded-full"
            >
              See pricing
            </button>

            <button
              ref={el => { fgButtonsRef.current[1] = el; }}
              className="ml-3 border hover:bg-[#e64625] transition-colors text-white text-[15px] font-semibold px-8 py-3.5 rounded-full"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Car */}
      <div
        ref={carRef}
        className="absolute bottom-0 z-1 filter blur-[2.5px] mix-blend-lighten"
      >
        <img
          src="/carhero.png"
          alt="herocar"
          className="w-250 filter brightness-45 contrast-90 grayscale-[0.4]"
        />
      </div>
    </section>
  );
}
