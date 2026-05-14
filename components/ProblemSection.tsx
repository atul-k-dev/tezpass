"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // References for elements to animate
  const headerRowRef = useRef<HTMLDivElement>(null);
  const bigNumberRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLParagraphElement>(null);
  const mobileHeadlineRef = useRef<HTMLParagraphElement>(null);
  const brandLogosRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);
  
  // Interactive element references
  const phonesRef = useRef<HTMLDivElement>(null);
  const mapImgRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // 1. Top Header Row Animation
    gsap.fromTo(headerRowRef.current, 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
          trigger: headerRowRef.current,
          start: "top 90%",
      }}
    );

    // 2. Brand Logos Stagger
    if (brandLogosRef.current) {
      gsap.fromTo(brandLogosRef.current.children, 
        { opacity: 0, x: 20 }, 
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: {
            trigger: brandLogosRef.current,
            start: "top 85%",
        }}
      );
    }

    // 3. Big "01" Number Reveal (Scale and slide)
    gsap.fromTo(bigNumberRef.current,
      { scale: 0.5, opacity: 0, transformOrigin: "left center" },
      { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", scrollTrigger: {
          trigger: bigNumberRef.current,
          start: "top 80%",
      }}
    );

    // 4. Headline Text Scrubbing Animation (Desktop & Mobile)
    const splitText = (textElement: HTMLElement | null) => {
      if (!textElement) return;
      const text = textElement.innerText;
      textElement.innerHTML = "";
      text.split(" ").forEach(word => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.opacity = "0.2";
        textElement.appendChild(span);
      });

      gsap.to(textElement.children, {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textElement,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        }
      });
    };

    splitText(headlineRef.current);
    splitText(mobileHeadlineRef.current);

    // 5. Bento Grid Cards Stagger Entrance
    if (bentoGridRef.current) {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: bentoGridRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // 6. Interactive Phones Animation (Card 1)
    if (phonesRef.current) {
      const phones = phonesRef.current.children;
      gsap.fromTo(phones[0], 
        { rotate: 0, x: 0, y: 50 }, 
        { rotate: -15, x: 20, y: 20, duration: 1.5, scrollTrigger: {
            trigger: phonesRef.current, start: "top 90%", scrub: 1
        }}
      );
      gsap.fromTo(phones[1], 
        { y: 50 }, 
        { y: 0, duration: 1.5, scrollTrigger: {
            trigger: phonesRef.current, start: "top 90%", scrub: 1
        }}
      );
      gsap.fromTo(phones[2], 
        { rotate: 0, x: 0, y: 50 }, 
        { rotate: 15, x: -20, y: 20, duration: 1.5, scrollTrigger: {
            trigger: phonesRef.current, start: "top 90%", scrub: 1
        }}
      );
    }

    // 7. Universal Map Parallax (Card 3)
    if (mapImgRef.current) {
      gsap.fromTo(mapImgRef.current,
        { scale: 1.2, y: -20 },
        { scale: 1, y: 20, ease: "none", scrollTrigger: {
            trigger: mapImgRef.current?.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }}
      );
    }

    // 8. Magnetic Hover Effects on Cards
    cardsRef.current.forEach(card => {
      if (!card) return;
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -8, scale: 1.01, duration: 0.4, ease: "power2.out", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out", boxShadow: "none" });
      });
    });

  }, { scope: sectionRef });

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-bg z-1 relative flex flex-col rounded-t-4xl pb-32">

      {/* Top Header Row */}
      <div ref={headerRowRef} className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-10 py-8">
        <div className="flex items-center w-full md:flex-1 md:mr-12 mb-6 md:mb-0">
          <span className="text-lg text-muted-fg font-medium whitespace-nowrap md:mr-6">
            Powering your drive with
          </span>
          <div className="hidden md:block flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div ref={brandLogosRef} className="grid grid-cols-3 md:flex items-center gap-y-4 gap-x-2 md:gap-8 text-fg w-full md:w-auto">
          {/* FOX HUB */}
          <div className="flex items-center justify-center md:justify-start text-base md:text-base tracking-widest uppercase">
            <span className="font-bold">FOX</span>
            <span className="font-light text-muted-fg ml-1">HUB</span>
          </div>

          {/* kanba */}
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 font-bold text-base md:text-lg lowercase tracking-tighter">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <circle cx="12" cy="12" r="3" />
              <path d="M4.93 4.93l4.24 4.24M19.07 19.07l-4.24-4.24M19.07 4.93l-4.24 4.24M4.93 19.07l4.24-4.24" />
            </svg>
            kanba
          </div>

          {/* amara */}
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 font-semibold text-base md:text-lg lowercase">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#252525] text-white flex items-center justify-center text-[8px] md:text-[10px] font-bold">@</div>
            amara
          </div>

          {/* goldline */}
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 font-semibold text-base md:text-base lowercase">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
            </svg>
            goldline
          </div>

          {/* CodeLab */}
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 font-semibold text-sm md:text-base">
            <span className="font-mono text-muted-fg">{`{:}`}</span>
            Code<span className="font-light">Lab</span>
          </div>

          {/* treva. */}
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-1.5 font-bold text-base md:text-xl tracking-tight lowercase">
            <svg className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
            </svg>
            treva.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row mt-12 md:mt-20 px-6 md:px-10 max-w-[1700px] mx-auto">
        {/* Mobile: 0-1 and Info side-by-side, Paragraph below */}
        <div className="flex flex-row items-center md:items-start w-full">
          {/* Left: 0-1 */}
          <div className="flex flex-shrink-0">
            <h1
              ref={bigNumberRef}
              className="text-[6rem] md:text-[12rem] font-bold text-fg tracking-tighter leading-[1]"
            >
              01
            </h1>
          </div>

          {/* Right: Info (Stats) */}
          <div className="flex flex-col items-start justify-center ml-6 md:ml-0 md:max-w-3xl md:pl-25">
            {/* TEZPASS Brand */}
            <div className="flex items-center gap-0.5 mb-4 md:mb-8 mt-2 md:mt-0">
              <span className="font-bold text-lg md:text-xl tracking-widest text-fg uppercase">TEZPASS</span>
              <div className="flex text-[0.45rem] md:text-[0.55rem] font-black -mt-4 ml-1">
                <span className="text-blue-600">T</span>
                <span className="text-red-500">M</span>
              </div>
            </div>

            {/* Avatars */}
            <div className="flex items-center mb-2">
              <div className="flex -space-x-3 md:-space-x-5">
                <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#f4f4f4] z-40 object-cover" />
                <img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#f4f4f4] z-30 object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#f4f4f4] z-20 object-cover" />
                <img src="https://i.pravatar.cc/100?img=53" alt="avatar" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-[#f4f4f4] z-10 object-cover" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-fg text-white flex items-center justify-center text-[10px] md:text-[11px] font-bold -ml-3 md:-ml-5 z-0 border-[2px] md:border-[3px] border-[#f4f4f4]">
                95+
              </div>
            </div>

            {/* Trusted text & Stars */}
            <div className="text-[11px] md:text-base text-muted-fg font-medium mb-1">Trusted by industry leaders</div>
            <div className="flex gap-1 mb-0 md:mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#ff7143] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Headline (Desktop only, hidden on mobile in this container) */}
            <p ref={headlineRef} className="hidden md:block text-[2.2rem] font-medium text-fg leading-[1.2] w-[100%] tracking-tight">
              One pass. One app. One seamless charging network — built to make EV charging predictable, connected, and stress-free.
            </p>
          </div>
        </div>

        {/* Headline (Mobile only, shown below the row) */}
        <p ref={mobileHeadlineRef} className="block md:hidden text-[1.6rem] font-medium text-fg leading-[1.2] tracking-tight mt-10">
          One pass. One app. One seamless charging network — built to make EV charging predictable, connected, and stress-free.
        </p>
      </div>

      {/* Bento Grid Section */}
      <div ref={bentoGridRef} className="w-full max-w-[1700px] mx-auto sm:px-10 px-3 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">

          {/* Card 1: Thoughtful design */}
          <div ref={setCardRef(0)} className=" bg-hover rounded-xl p-4 sm:p-6 relative overflow-hidden flex flex-col h-[350px]">
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-fg mb-6 w-3/4 leading-snug">
                Works with apps<br />you already use.
              </h3>
              <p className="text-muted-fg text-[15px] leading-relaxed mb-auto w-[90%]">
                No new habits. No extra downloads. TezPass plugs into your existing CPO apps and handles everything in the background.
              </p>
              <div ref={phonesRef} className="flex items-start justify-center mt-4">
                <img src="/card/phone2.webp" alt="" className="max-w-[32%] w-[130px] h-[220px] lg:h-[290px] object-cover rounded-t-2xl lg:border-0 z-1 relative origin-bottom" />
                <img src="/card/phone.webp" alt="" className="max-w-[32%] w-[130px] h-[220px] lg:h-[290px] object-cover rounded-t-2xl lg:border-0 z-2 relative origin-bottom" />
                <img src="/card/phone3.webp" alt="" className="max-w-[32%] w-[130px] h-[220px] lg:h-[290px] object-cover rounded-t-2xl lg:border-0 z-1 relative origin-bottom" />
              </div>
            </div>
          </div>

          {/* Card 2: One Tap Charge */}
          <div ref={setCardRef(1)} className=" bg-hover relative overflow-hidden rounded-xl p-4 sm:p-6 flex flex-col sm:h-[350px]">
            <div className="flex justify-between items-start mb-auto relative z-2">
              <span className="text-xl font-semibold text-muted-fg">One Tap Charge</span>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
              </div>
            </div>
            <div className="relative z-2">
              <div className="text-[6rem] font-bold text-fg tracking-tighter leading-none mb-4 flex items-baseline">
                1<span className="text-[3.5rem] font-semibold">Tap</span>
              </div>
              <p className="text-[15px] text-muted-fg w-3/4 leading-snug">
                Start sessions instantly with a single tap — use your TezPass RFID card or unlock directly from the app.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 z-1 w-[60%] lg:w-[65%] filter mix-blend-darken">
              <video src="/card/feature-tap.mp4" autoPlay loop muted playsInline className="w-[100%] object-cover" />
            </div>
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-hover via-hover/0 to-transparent z-1"></div>
          </div>

          {/* Card 3: Universal Map */}
          <div ref={setCardRef(2)} className=" bg-hover rounded-xl relative overflow-hidden flex flex-col h-[350px]">
            {/* Background Image */}
            <img
              ref={mapImgRef}
              src="/charger2.png"
              alt="Universal Map"
              className="object-cover w-full h-[120%] z-0 absolute top-[-10%]"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            <div className="relative z-20 mt-auto p-4 sm:p-6 flex flex-col items-start">
              <h3 className="text-white text-xl font-medium mb-4 w-[90%] leading-snug">
                Universal Map — discover nearby chargers across every supported network in real time.
              </h3>
              <button className="flex items-center gap-1.5 text-accent border p-2 rounded-full px-4 text-sm font-bold hover:opacity-80 transition-opacity">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                Explore the map
              </button>
            </div>
          </div>

          {/* Card 4: Smart Routing (Spans 2 columns) */}
          <div ref={setCardRef(3)} className="col-span-1 md:col-span-2  bg-hover rounded-xl p-1.5 flex flex-col md:flex-row sm:h-[350px]">
            {/* Left Content */}
            <div className="flex flex-col lg:h-full p-4 sm:p-6 lg:max-w-[40%]">
              <h3 className="text-2xl font-semibold text-fg mb-6 w-5/6 leading-snug">
                Smart Routing — plan your trip with confidence.
              </h3>
              <p className="text-muted-fg text-[15px] leading-relaxed mb-auto w-[85%]">
                Plan your trip with automatic charging stops based on your vehicle's range and battery. No more range anxiety — just drive.
              </p>
              <button className="flex items-center gap-1.5 border text-accent max-w-min min-w-max p-2 px-4 rounded-full text-sm font-bold mt-8 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                Explore smart routing
              </button>
            </div>

            {/* Right Graph */}
            <div className="flex-1 flex flex-col h-full bg-muted  rounded-lg relative overflow-hidden">
              <video src="/card/feature-routing.mp4"  loop muted playsInline className="min-w-full h-full object-cover rounded-xl hidden"></video>
              <img src="/card/map.png" alt="map" className="w-full" />
            </div>
          </div>

          {/* Card 5: Unified Wallet */}
          <div ref={setCardRef(4)} className=" bg-hover rounded-xl p-4 sm:p-6 flex flex-col sm:h-[350px]">
            <div className="flex justify-between items-start mb-auto">
              <span className="text-xl font-semibold text-muted-fg">Unified Wallet</span>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
              </div>
            </div>
            <div>
              <div className="text-[6rem] font-bold text-fg tracking-tighter leading-none mb-4 flex items-baseline">
                1<span className="text-[3.5rem] font-semibold">₹</span>
              </div>
              <p className="text-[15px] text-muted-fg w-[90%] leading-snug">
                Top up one balance and use it across any supported CPO. One wallet for every charge, everywhere.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
