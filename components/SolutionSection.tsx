"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CountUp } from "./ScrollAnimations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DottedIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-fg">
    <circle cx="6" cy="6" r="1.5" />
    <circle cx="12" cy="6" r="1.5" />
    <circle cx="18" cy="6" r="1.5" />
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="18" cy="12" r="1.5" />
    <circle cx="6" cy="18" r="1.5" />
    <circle cx="12" cy="18" r="1.5" />
    <circle cx="18" cy="18" r="1.5" />
  </svg>
);

export default function SolutionSection() {
  const [activeClient, setActiveClient] = useState(2); // Default to Casey Quinn
  const sectionRef = useRef<HTMLElement>(null);

  // Refs for GSAP
  const statsTitleRef = useRef<HTMLHeadingElement>(null);
  const statsCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const worksTitleRef = useRef<HTMLHeadingElement>(null);
  const worksCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileTopCardRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const pricingTitleRef = useRef<HTMLHeadingElement>(null);
  const pricingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const driverLeftRef = useRef<HTMLDivElement>(null);
  const driverMidRef = useRef<HTMLDivElement>(null);
  const driverRightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reusable animation configs
    const fadeUpConfig = { y: 60, opacity: 0, duration: 1, ease: "power3.out" };
    
    // 1. Stats Section
    gsap.from(statsTitleRef.current, {
      ...fadeUpConfig,
      scrollTrigger: { trigger: statsTitleRef.current, start: "top 85%" }
    });
    
    if (statsCardsRef.current.length > 0) {
      gsap.from(statsCardsRef.current, {
        ...fadeUpConfig,
        y: 40,
        stagger: 0.1,
        scrollTrigger: { trigger: statsCardsRef.current[0], start: "top 85%" }
      });
    }

    // 2. How does it work? Section
    gsap.from(worksTitleRef.current, {
      ...fadeUpConfig,
      scrollTrigger: { trigger: worksTitleRef.current, start: "top 85%" }
    });
    
    if (worksCardsRef.current.length > 0) {
      gsap.from(worksCardsRef.current, {
        ...fadeUpConfig,
        stagger: 0.2,
        scrollTrigger: { trigger: worksCardsRef.current[0], start: "top 80%" }
      });
    }

    // 3. Tezpass Mobile Section
    gsap.from(mobileTitleRef.current, {
      ...fadeUpConfig,
      scrollTrigger: { trigger: mobileTitleRef.current, start: "top 85%" }
    });
    
    gsap.from(mobileTopCardRef.current, {
      ...fadeUpConfig,
      scale: 0.95,
      scrollTrigger: { trigger: mobileTopCardRef.current, start: "top 85%" }
    });

    if (mobileCardsRef.current.length > 0) {
      gsap.from(mobileCardsRef.current, {
        ...fadeUpConfig,
        stagger: 0.15,
        scrollTrigger: { trigger: mobileCardsRef.current[0], start: "top 85%" }
      });
    }

    // 4. Pricing Section
    gsap.from(pricingTitleRef.current, {
      ...fadeUpConfig,
      scrollTrigger: { trigger: pricingTitleRef.current, start: "top 85%" }
    });

    if (pricingCardsRef.current.length > 0) {
      gsap.from(pricingCardsRef.current, {
        ...fadeUpConfig,
        stagger: 0.15,
        scrollTrigger: { trigger: pricingCardsRef.current[0], start: "top 80%" }
      });
    }

    // 5. Drivers Section
    gsap.from(driverLeftRef.current, {
      x: -60, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: driverLeftRef.current, start: "top 80%" }
    });
    
    gsap.from(driverMidRef.current, {
      y: 60, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: driverMidRef.current, start: "top 80%" }
    });
    
    gsap.from(driverRightRef.current, {
      x: 60, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: driverRightRef.current, start: "top 80%" }
    });

  }, { scope: sectionRef });

  const clientsData = [
    {
      id: 0,
      name: "Priya Sharma",
      role: "Daily EV Commuter, Bengaluru",
      quote: "I used to waste 20 minutes just finding a working charger. TezPass shows me what's available in real time — every single time.",
      description: "Before TezPass, I had three different apps and none of them synced. Now it's one wallet, one tap, and I'm charging. My daily commute is finally stress-free.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-fg text-bg text-sm">T</span>
          tezpass
        </div>
      ),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 1,
      name: "Rahul Verma",
      role: "Fleet Manager, Delhi NCR",
      quote: "Managing 40+ EVs across different CPOs was a nightmare. TezPass unified everything under one dashboard.",
      description: "Our drivers no longer carry multiple RFID cards. One TezPass card works everywhere. Billing is consolidated, and I can track every session from my phone.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-fg">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
          fleet
        </div>
      ),
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Ananya Iyer",
      role: "EV Owner, Mumbai",
      quote: "One tap to start charging. That's it. No scanning, no logging in. TezPass made it that simple.",
      description: "I switched from a petrol car last year and was overwhelmed by the charging ecosystem. TezPass made the transition seamless — I just drive and charge.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-fg">
            <circle cx="12" cy="8" r="5" />
            <circle cx="8" cy="16" r="5" />
            <circle cx="16" cy="16" r="5" />
          </svg>
          driver
        </div>
      ),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "Long-distance EV Traveler",
      quote: "Smart routing planned my entire 800km road trip — every charging stop was ready when I arrived.",
      description: "I was nervous about taking my EV on a highway trip. TezPass mapped out every stop, showed real-time availability, and even let me reserve slots in advance.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-fg">
             <path d="M4 12h16M4 6h16M4 18h16" />
          </svg>
          route
        </div>
      ),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      role: "CPO Partner, ChargePro",
      quote: "TezPass brought us 3x more users without us spending a rupee on marketing.",
      description: "As a CPO, onboarding with TezPass was effortless. Their unified wallet system means our chargers are always utilized, and drivers discover us through the app.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-fg">
             <polygon points="12 2 22 22 2 22" />
          </svg>
          partner
        </div>
      ),
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Arjun Nair",
      role: "Tech Enthusiast & EV Advocate",
      quote: "Finally, an EV charging app that feels as polished as the car itself.",
      description: "The app is beautiful, fast, and intelligent. CarPlay integration, live maps, unified billing — TezPass is what EV infrastructure should have been from day one.",
      logo: (
        <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-fg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-fg">
             <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
          advocate
        </div>
      ),
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveClient((prev) => (prev + 1) % clientsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [clientsData.length]);

  const stats = [
    { title: "Charging points", value: "15K+" },
    { title: "CPO partners", value: "5" },
    { title: "QSR brands", value: "40+" },
    { title: "Active customers", value: "10K+" },
    { title: "Cities covered", value: "50+" },
    { title: "Sessions completed", value: "200K+" },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen w-full py-14 px-3 md:px-6 relative overflow-hidden z-1 bg-bg font-sans flex flex-col items-center justify-center">

      {/* TezPass in numbers */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto">
        <h2 ref={statsTitleRef} className="text-fg text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-15 text-center">
          TezPass in numbers
        </h2>
        
        {/* Grid Container */}
        <div className="w-full rounded-lg border-2 border-primary/40 p-1 md:p-1.5 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5">
            {stats.map((stat, i) => (
              <div 
                key={i}
                ref={el => { statsCardsRef.current[i] = el; }}
                className="border-2 border-primary/30 rounded-md p-5 bg-hover/50 flex flex-col justify-between min-h-[120px]"
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-muted-fg text-[15px] font-medium tracking-wide">{stat.title}</span>
                  <DottedIcon />
                </div>
                <div className="text-fg text-4xl md:text-[2.75rem] font-bold tracking-tighter mt-6">
                  <CountUp value={stat.value} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section: From chaos to clarity */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto mt-32 md:mt-40">
        <h2 ref={worksTitleRef} className="text-fg text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-12 md:mb-16 text-center">
          How does it work?
        </h2>
        
        {/* Outer Container */}
        <div className="w-full rounded-lg border-2 border-primary/40 p-1 md:p-1.5 flex flex-col gap-1.5">
          
          {/* Card 1 */}
          <div ref={el => { worksCardsRef.current[0] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 flex flex-col md:flex-row overflow-hidden lg:min-h-[450px]">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full border-b-2 md:border-b-0 md:border-r-2 border-primary/40 bg-muted">
              <img 
                src="/card/step1.png" 
                alt="Locate and Navigate" 
                className="absolute inset-0 w-full h-full object-cover  mix-blend-luminosity opacity-80" 
              />
            </div>
            
            {/* Right: Content */}
            <div className="w-full md:w-1/2 p-8 lg:py-10 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="text-5xl md:text-[5rem] font-bold text-fg tracking-tighter leading-none"> 01 </div>
                <DottedIcon />
              </div>
              <h3 className="text-3xl md:text-[2.5rem] font-bold text-fg mb-4 md:mb-6 tracking-tight leading-none">Locate & Navigate</h3>
              <p className="text-muted-fg text-base md:text-[17px] leading-relaxed md:leading-[1.6] mb-6 w-[95%]">
                Open the TezPass/CPO app to find the nearest available charger from our unified network map. Real-time status ensures no dead ends.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Unified network map</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Real-time charger availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">GPS navigation to station</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={el => { worksCardsRef.current[1] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 flex flex-col md:flex-row-reverse overflow-hidden lg:min-h-[450px]">
            {/* Right: Image (Top on Mobile) */}
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full border-b-2 md:border-b-0 md:border-l-2 border-primary/40 bg-muted">
              <img 
                src="/card/step2.png" 
                alt="Your Favorite CPO App" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" 
              />
            </div>

            {/* Left: Content */}
            <div className="w-full md:w-1/2 p-8 lg:py-10 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="text-5xl md:text-[5rem] font-bold text-fg tracking-tighter leading-none"> 02 </div>
                <DottedIcon />
              </div>
              <h3 className="text-3xl md:text-[2.5rem] font-bold text-fg mb-4 md:mb-6 tracking-tight leading-none">Your Favorite CPO App</h3>
              <p className="text-muted-fg text-base md:text-[17px] leading-relaxed md:leading-[1.6] mb-6 w-[95%]">
                Start your session through the CPO app you already know. TezPass works silently in the background — no extra steps, no new interface to learn.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Works with any CPO app</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Zero learning curve</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Silent background sync</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={el => { worksCardsRef.current[2] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 flex flex-col md:flex-row overflow-hidden lg:min-h-[450px]">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full border-b-2 md:border-b-0 md:border-r-2 border-primary/40 bg-muted">
              <img 
                src="/card/step3.png" 
                alt="Bill on TezPass" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" 
              />
            </div>
            
            {/* Right: Content */}
            <div className="w-full md:w-1/2 p-8 lg:py-10 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="text-5xl md:text-[5rem] font-bold text-fg tracking-tighter leading-none"> 03 </div>
                <DottedIcon />
              </div>
              <h3 className="text-3xl md:text-[2.5rem] font-bold text-fg mb-4 md:mb-6 tracking-tight leading-none">Bill on TezPass</h3>
              <p className="text-muted-fg text-base md:text-[17px] leading-relaxed md:leading-[1.6] mb-6 w-[95%]">
                When your session ends, TezPass automatically settles the cost from your unified balance. One bill, across every network, every time.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Unified wallet balance</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Automatic settlement</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[15px] md:text-[17px] font-medium text-fg">Cross-network billing</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* New Section: Powering the next generation */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto mt-32 md:mt-40">
        <h2 ref={mobileTitleRef} className="text-fg text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-10 md:mb-16 text-center">
          Tezpass Mobile
        </h2>
       
        {/* Outer Container */}
        <div className="w-full rounded-lg border-2 border-primary/40 p-1 md:p-1.5 flex flex-col gap-1.5">
          <div ref={mobileTopCardRef} className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
            
            {/* Top Featured Review Image (Spans 1 column) */}
            <div className="col-span-1 border-2 border-primary/40 rounded-md overflow-hidden min-h-[300px] md:min-h-[450px] max-h-[500px]">
              <img 
                src="/card/app.png" 
                alt="Marcus Chen" 
                className="w-full h-full object-cover mix-blend-luminosity " 
              />
            </div>

            {/* Top Featured Review Text (Spans 2 columns) */}
            <div className="col-span-1 md:col-span-2 border-2 border-primary/40 rounded-md bg-hover/50 p-8  flex flex-col justify-between">
              <div>
                <div className="text-accent text-[4.5rem] md:text-[8rem] font-bold leading-[0.7] tracking-tighter font-sans">
                  &ldquo;
                </div>
                <h3 className="text-[26px] md:text-4xl lg:text-[2.4rem] font-bold text-fg leading-[1.1] tracking-tighter w-full lg:w-[95%] max-w-xl">
                  Stop juggling five different charging apps. TezPass just works — one tap, one wallet, every station.
                </h3>
              </div>
              <div className="flex flex-col mt-16 md:mt-20">
                <span className="text-fg text-[16px] md:text-[17px] font-semibold mb-0.5 tracking-tight">TEZPASS</span>
                <span className="text-muted-fg text-[13px] md:text-[14px] font-medium tracking-tight">Tech Team</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
            {/* Bottom Card 1: Android */}
            <div ref={el => { mobileCardsRef.current[0] = el; }} className="col-span-1 border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-8 h-8 text-fg flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2.245a.751.751 0 0 0-1.046.177l-1.589 2.26A7.718 7.718 0 0 0 12 4.002c-1.04 0-2.036.232-2.888.68L7.523 2.422a.751.751 0 1 0-1.223.869l1.49 2.12A5.85 5.85 0 0 0 5 10.002h14a5.85 5.85 0 0 0-2.79-4.59l1.49-2.12a.751.751 0 0 0-.177-1.047zM9 8.002a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm6 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM5 11.002v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7H5z" /></svg>
                  <span className="text-fg text-lg font-bold tracking-tight">TezPass for Android</span>
                </div>
                <p className="text-fg text-[16px] md:text-[18px] font-semibold leading-[1.2] tracking-tighter mb-2 w-[95%]">
                  Charge smarter on the go — download TezPass from the Play Store.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="flex-1 h-[45px] rounded-full bg-primary text-primary-fg font-bold text-[13px] transition-colors flex items-center justify-center">Download</button>
                <button className="flex-1 h-[45px] rounded-full border border-primary/30 bg-transparent text-fg font-bold text-[13px] transition-colors flex items-center justify-center">Learn more</button>
              </div>
            </div>

            {/* Bottom Card 2: iOS */}
            <div ref={el => { mobileCardsRef.current[1] = el; }} className="col-span-1 border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-7 h-7 text-fg flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <span className="text-fg text-lg font-bold tracking-tight">TezPass for iOS</span>
                </div>
                <p className="text-fg/90 text-[16px] md:text-[18px] font-semibold leading-[1.2] tracking-tighter mb-2 w-[95%]">
                  Seamless charging from your iPhone — available on the App Store.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="flex-1 h-[45px] rounded-full bg-primary text-primary-fg font-bold text-[13px] transition-colors flex items-center justify-center">Download</button>
                <button className="flex-1 h-[45px] rounded-full border border-primary/30 bg-transparent text-fg font-bold text-[13px] transition-colors flex items-center justify-center">Learn more</button>
              </div>
            </div>

            {/* Bottom Card 3: Web */}
            <div ref={el => { mobileCardsRef.current[2] = el; }} className="col-span-1 border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-7 h-7 text-fg flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path d="M2 12h20" /></svg>
                  <span className="text-fg text-lg font-bold tracking-tight">TezPass Web</span>
                </div>
                <p className="text-fg/90 text-[16px] md:text-[18px] font-semibold leading-[1.2] tracking-tighter mb-2 w-[95%]">
                  Manage your charging from any browser — no install required.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button className="flex-1 h-[45px] rounded-full bg-primary text-primary-fg font-bold text-[13px] transition-colors flex items-center justify-center">Download</button>
                <button className="flex-1 h-[45px] rounded-full border border-primary/30 bg-transparent text-fg font-bold text-[13px] transition-colors flex items-center justify-center">Learn more</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* New Section: Pricing */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto mt-32 md:mt-40 mb-32">
        <h2 ref={pricingTitleRef} className="text-fg text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-12 md:mb-16 text-center">
          TezPass plan
        </h2>

        <div className="w-full rounded-lg border-2 border-primary/40 p-1 md:p-1.5 flex flex-col gap-1.5">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-1.5">
            {/* Lite Card */}
            <div ref={el => { pricingCardsRef.current[0] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col">
              <h3 className="text-[22px] md:text-[24px] font-bold text-fg tracking-tight leading-none">Tezpass Lite</h3>
              <p className="text-muted-fg text-[13px] md:text-[14px] mt-2 font-medium">Occasional charger</p>
              
              <div className="mt-5 mb-6 flex items-baseline">
                <span className="text-[42px] md:text-[48px] font-bold text-fg tracking-tighter leading-none">&#8377;1900</span>
                <span className="text-muted-fg text-[12px] md:text-[13px] font-medium ml-2">/ 100 units</span>
              </div>
              
              <button className="w-full h-[42px] md:h-[46px] rounded-full border border-primary bg-transparent text-fg font-bold text-[14px] transition-colors flex items-center justify-center">
                Get started
              </button>

              <div className="w-full h-[2px] bg-primary mt-6 mb-6"></div>

              <ul className="flex flex-col gap-3.5 md:gap-4">
                {[
                  "Access all live networks",
                  "Pay-as-you-go credits",
                  "Email support",
                  "100 Units included",
                  "₹19 per unit",
                  "30 days validity",
                  "Billed at ₹19 / unit"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-fg/80 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14px] md:text-lg font-semibold leading-[1.2] text-muted-fg tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Card */}
            <div ref={el => { pricingCardsRef.current[1] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <h3 className="text-[22px] md:text-[24px] font-bold text-fg tracking-tight leading-none">Tezpass Pro</h3>
                  <span className="text-[11px] font-bold bg-primary text-primary-fg px-2.5 py-0.5 rounded-full">MP</span>
                </div>
                <p className="text-muted-fg text-[13px] md:text-[14px] mt-2 font-medium">Regular EV commuter</p>
                
                <div className="mt-5 mb-6 flex items-baseline">
                  <span className="text-[42px] md:text-[48px] font-bold text-fg tracking-tighter leading-none">&#8377;3600</span>
                  <span className="text-muted-fg text-[12px] md:text-[13px] font-medium ml-2">/ 200 units</span>
                </div>
                
                <button className="w-full h-[42px] md:h-[46px] rounded-full bg-primary text-primary-fg font-semibold text-base transition-colors flex items-center justify-center">
                  Get started
                </button>

                <div className="w-full h-[2px] bg-[#10b981] mt-6 mb-6"></div>

                <ul className="flex flex-col gap-3.5 md:gap-4">
                  {[
                    "Everything in Lite",
                    "Dedicated 24/7 support",
                    "Custom credit packages",
                    "200 Units included",
                    "₹18 per unit",
                    "45 days validity",
                    "Billed at ₹18 / unit"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#10b981] flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[14px] md:text-lg font-semibold leading-[1.2] text-muted-fg tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ultra Card */}
            <div ref={el => { pricingCardsRef.current[2] = el; }} className="border-2 border-primary/40 rounded-md bg-hover/50 p-6 flex flex-col relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-[22px] md:text-[24px] font-bold text-fg tracking-tight leading-none">Tezpass Ultra</h3>
                <p className="text-muted-fg text-[13px] md:text-[14px] mt-2 font-medium">Fleet &amp; power users</p>
                
                <div className="mt-5 mb-6 flex items-baseline">
                  <span className="text-[42px] md:text-[48px] font-bold text-fg tracking-tighter leading-none">&#8377;5400</span>
                  <span className="text-muted-fg text-[12px] md:text-[13px] font-medium ml-2">/ 300 units</span>
                </div>
                
                <button className="w-full h-[42px] md:h-[46px] rounded-full bg-accent text-white font-semibold text-base transition-colors flex items-center justify-center">
                  Get started
                </button>

                <div className="w-full h-[2px] bg-accent mt-6 mb-6"></div>

                <ul className="flex flex-col gap-3.5 md:gap-4">
                  {[
                    "Everything in Pro",
                    "Monthly bonus credits",
                    "Priority in-app support",
                    "300 Units included",
                    "₹18 per unit",
                    "90 days validity",
                    "Billed at ₹18 / unit",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4C00] flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[14px] md:text-lg font-semibold leading-[1.2] text-muted-fg tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Clients */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start w-full max-w-[1600px] mx-auto mt-22 mb-20 gap-10 lg:gap-16">
        
        {/* Left Column: Title */}
        <div ref={driverLeftRef} className="w-full lg:w-[30%] flex flex-col pt-2">
          <h2 className="text-fg text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[7.5rem] font-medium tracking-tighter leading-[0.9]">
            Drivers
          </h2>
          <p className="text-muted-fg text-[16px] md:text-[17px] leading-relaxed mt-6 md:mt-8 w-[90%] font-medium">
            Real stories from EV drivers who switched to TezPass — simpler charging, one wallet, zero friction.
          </p>
        </div>

        {/* Middle Column: Images */}
        <div ref={driverMidRef} className="lg:w-[38%] w-full flex flex-col items-center">
          {/* Main Image */}
          <div className="w-full aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-muted mb-4 md:mb-5">
            <img 
              src={clientsData[activeClient].image} 
              alt={clientsData[activeClient].name}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex justify-between w-full gap-2">
            {clientsData.map((client, idx) => (
              <button 
                key={client.id}
                onClick={() => setActiveClient(idx)}
                className={`w-[15%] aspect-square overflow-hidden transition-all duration-300 ${
                  activeClient === idx ? 'rounded-full grayscale-0 opacity-100 border' : 'rounded-lg border border-primary/50 grayscale opacity-60 hover:grayscale-0'
                }`}
              >
                <img 
                  src={client.image} 
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Quote */}
        <div ref={driverRightRef} className="w-full lg:w-[40%] flex flex-col justify-center lg:py-8">
          {/* Logo & Stars */}
          <div className="flex items-center gap-4 mb-8 w-full ">
            {clientsData[activeClient].logo}
            <div className="flex-1 h-[1px] bg-primary/50"></div>
            <div className="flex gap-1 text-[#FF8A65]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Quote */}
          <h3 className="text-[28px] md:text-[34px] lg:text-[38px] font-medium text-fg mb-6 tracking-tight leading-[1.15]">
            {clientsData[activeClient].quote}
          </h3>
          
          {/* Description */}
          <p className="text-muted-fg text-[16px] md:text-[17px] leading-[1.6] mb-10">
            {clientsData[activeClient].description}
          </p>
          
          {/* Author */}
          <div className="flex flex-col gap-1">
            <span className="text-fg font-semibold text-[15px]">{clientsData[activeClient].name}</span>
            <span className="text-muted-fg font-medium text-[14px]">{clientsData[activeClient].role}</span>
          </div>
        </div>

      </div>

    </section>
  );
}
