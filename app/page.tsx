"use client";

import Image from "next/image";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const baseImages = ["/charger.png", "/charger2.png", "/charger3.png"];
const images = [...baseImages, baseImages[0]];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex === images.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  return (
    <div className="w-full h-screen bg-bg text-fg font-sans overflow-y-auto relative">
      {/* Separate Header Component */}
      <Header />

      {/* hero section */}

      <section className="grid grid-cols-3 gap-1 w-full h-[calc(100vh+810px)] md:h-screen grid-rows-3 pt-0">
        {/* hero main text card */}
        <div className="col-span-3 md:col-span-2 row-span-2 bg-bg  flex flex-col justify-end p-4 md:p-8 md:p-12 md:pb-24">
          {/* Main Content */}
          <div className="flex flex-col max-w-4xl">
            <h1 className="text-5xl md:text-[8rem] font-medium leading-[.9] mb-4 md:mb-8 tracking-tight text-fg">
              One pass for <br /> every charger
            </h1>
            <p className="max-w-2xl text-sm md:text-xl md:ml-4 mb-6 md:mb-10 leading-relaxed font-medium text-muted-fg">
              India's first EV charging pass that gives you access to India's
              largest EV Charging Network. creating stunning 3D models.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary text-primary-fg px-8 py-4.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                START NOW
              </button>
              <button className="flex items-center gap-3 font-medium border-2 py-1.5 px-2 rounded-full border-fg pr-4 text-sm hover:opacity-70 transition-opacity text-primary">
                <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-fg rounded-full text-xs">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                SEE HOW IT'S WORK
              </button>
            </div>
          </div>
        </div>

        {/* hero charger image card */}

        <div className="col-span-3 md:col-span-1 row-span-2 bg-muted relative overflow-hidden flex flex-col p-8 rounded-bl-4xl">
          <div
            className={`absolute top-0 left-0 h-full flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-full"
                style={{ width: `${100 / images.length}%` }}
              >
                <img
                  src={src}
                  alt={`tezpass charger ${i + 1}`}
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* hero cards */}

        <div className="col-span-3 row-span-1 ">
          <div className="w-full md:h-full gap-1 grid grid-cols-3 ">
            <div className="col-span-3 rounded-tr-4xl relative h-[250px] md:col-span-1 md:h-full bg-muted p-4 md:p-10 flex flex-col justify-between text-fg">
              <div className="absolute top-1 right-2 md:top-3 md:right-3">
                {" "}
                <img src="/card/map2.png" alt="map" className="md:w-60 w-35 " />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-fg mb-3 uppercase tracking-wider">
                  Network
                </p>
                <h2 className="text-4xl md:text-[2.75rem] font-medium leading-tight">
                  120+
                  <br />
                  Charging Stations
                </h2>
                <h2 className="text-4xl md:text-[2.75rem] font-medium leading-tight">
                  Nation Wide
                </h2>
              </div>
              <div className="flex justify-between items-end w-full">
                <div className="text-sm font-medium space-y-2 w-full max-w-[220px]">
                  <p className="flex justify-between items-center w-full">
                    <span className="text-gray-700">Single payment</span>
                    <span>£1.990</span>
                  </p>
                </div>
                <button className="w-16 h-16 bg-primary text-primary-fg rounded-full flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 ml-4">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 19L19 5M19 5v10M19 5H9"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="col-span-3 rounded-t-4xl relative h-[250px] md:col-span-1 md:h-full bg-muted p-4 md:p-10 flex flex-col justify-between text-fg">
              <div className="absolute top-1 right-1 md:top-3 md:right-3">
                {" "}
                <img
                  src="/card/reward2.png"
                  alt="reward"
                  className="w-50 md:w-70"
                />
              </div>
              <p className="text-2xl font-medium uppercase tracking-wider text-muted-fg leading-snug">
                Free
                <br />
                Rewards
              </p>
              <div className="flex items-end justify-between w-full">
                <div>
                  <h2 className="text-4xl md:text-[2.75rem] font-medium mb-1">
                    1437+
                  </h2>
                  <p className="text-xs font-medium text-gray-600">
                    Rewards Redeemed
                  </p>
                </div>
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
                    alt="Student"
                    className="w-12 h-12 rounded-full border-2 border-[var(--hover)] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                    alt="Student"
                    className="w-12 h-12 rounded-full border-2 border-[var(--hover)] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Student"
                    className="w-12 h-12 rounded-full border-2 border-[var(--hover)] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-3 rounded-tl-4xl relative h-[300px] md:h-[250px] md:col-span-1 md:h-full bg-fg relative p-4 md:p-10 flex flex-col justify-end ">
              <div className="absolute top-4 w-14 h-14 left-4  md:left-10  md:top-8 md:w-20 md:h-20 rounded-full border md:border-3 border-bg overflow-hidden bg-bg z-20">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                  alt="Sofia Zinchenko"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 md:top-3 right-2 md:right-3">
                {" "}
                <img
                  src="/card/calender3.png"
                  alt="calender"
                  className="w-32 md:w-55"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-medium text-2xl md:text-3xl uppercase  tracking-wider mb-1 text-bg">
                  Book and Reserve
                </h3>
                <p className="text-xl text-bg mb-5">Anytime , Anywhere</p>
                <p className="text-lg md:text-xl text-bg/70 leading-relaxed font-thin">
                  Tap to reserve your charging station in advance and enjoy a
                  seamless charging experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="grid grid-cols-3 gap-1 w-full mt-1 md:mt-[27px] mb-1">
        {/* Main Problem Card (2 cols) */}
        <div className="col-span-3 relative rounded-br-4xl md:col-span-2 bg-muted p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
          <div className="absolute bottom-0 right-0">
            {" "}
            <img src="/card/road.png" alt="" className="w-100" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-fg mb-3 uppercase tracking-wider">
              The Challenge
            </p>
            <h2 className="text-4xl md:text-[4rem] font-medium leading-[1.05] tracking-tight text-fg mb-6">
              Charging is broken.
              <br />
              We're fixing it.
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed font-medium text-muted-fg">
              Range anxiety, fragmented networks, and endless app downloads have
              made the EV experience frustrating. It’s time for a unified
              solution that puts the driver first.
            </p>
          </div>
        </div>

        {/* Side stat card (1 col) */}
        <div className="col-span-3 rounded-bl-4xl md:col-span-1 bg-fg p-8 md:p-10 md:pb-0  flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          <div className="mt-16 md:mt-0 z-10">
            <h3 className="text-6xl md:text-[4rem] font-medium text-bg leading-none mb-4">
              One App
            </h3>
            <p className="text-xl md:text-2xl font-medium text-bg leading-tight">
              For all yours EV problems solved. Book & Pay.
            </p>
          </div>

          <div className="w-full h-full pt-7 justify-center flex gap-2">
            <div className="min-w-40 h-full bg-card rounded-t-2xl border-3 border-border -rotate-10 top-10 relative z-1 border-b-0"></div>
            <div className="min-w-40 h-full bg-card rounded-t-2xl border-3 border-border relative z-2 border-b-0"></div>
            <div className="min-w-40 h-full bg-card rounded-t-2xl border-3 border-border rotate-10 top-10 relative z-1 border-b-0"></div>
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="min-h-screen w-full py-10 px-4 md:px-6 relative overflow-hidden">
        {/*
        <div className="absolute bottom-0 left-0 opacity-70 fliter blur-[2px] "> <video src="/flower.mp4" autoPlay loop className="w-90"></video></div>
 */}

        <div className="max-w-[1700px] mx-auto relative z-10 mt-10">
          <div className="mb-20  text-center  flex flex-col justify-center items-center">
            <h2 className="text-5xl md:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-fg mb-8">
              A Unified Ecosystem
            </h2>
            <p className="text-sm md:text-lg leading-relaxed font-medium text-muted-fg max-w-4xl">
              Instead of dealing with multiple charging apps, payment systems,
              and uncertainty, TezPass combines everything into one platform.
              One pass. One app. One charging network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-muted/80 rounded-[2rem] p-4 md:p-8 flex flex-col relative min-h-[500px] ">
              <div className="absolute top-5 right-3 ">
                <img src="/card/pin.png" alt="icon" className="w-55 " />
              </div>
              <div className="mt-20 md:mt-28">
                <h3 className="text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-8 text-fg">
                  Real-Time <br /> Availability
                </h3>
                <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-12">
                  Instantly discover nearby chargers and{" "}
                  <br className="hidden xl:block" />
                  check their live status. Know exactly{" "}
                  <br className="hidden xl:block" />
                  which chargers are free, occupied,{" "}
                  <br className="hidden xl:block" />
                  or offline before you arrive.
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end w-full">
                <div className="flex gap-2">
                  <button className="px-6 py-3 rounded-full border border-fg  text-sm font-medium hover:bg-hover transition-colors">
                    Live Map
                  </button>
                  <button className="px-6 py-3 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors">
                    Status
                  </button>
                </div>
                <button className="w-14 h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-muted/80 rounded-[2rem] p-4 md:p-8 flex flex-col relative min-h-[500px] ">
              <div className="absolute top-5 right-3">
                <img src="/card/book.png" alt="icon" className="w-75" />
              </div>
              <div className="mt-20 md:mt-28">
                <h3 className="text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-8 text-fg">
                  Book & <br /> Navigate
                </h3>
                <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-12">
                  Reserve your charging slot in advance{" "}
                  <br className="hidden xl:block" />
                  to avoid waiting. Get optimized route{" "}
                  <br className="hidden xl:block" />
                  suggestions and battery-safe navigation{" "}
                  <br className="hidden xl:block" />
                  for stress-free long trips.
                </p>
              </div>
              <div className="mt-auto flex justify-between items-end w-full">
                <div className="flex gap-2">
                  <button className="px-4 py-3 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors">
                    Reserve
                  </button>
                  <button className="px-4 py-3 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors">
                    Routes
                  </button>
                </div>
                <button className="w-14 h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-muted/80 rounded-[2rem] p-4 md:p-8 flex flex-col relative min-h-[500px] ">
              <div className="absolute top-5 right-3">
                <img src="/card/card.png" alt="icon" className="w-75" />
              </div>
              <div className="mt-20 md:mt-28 flex-grow">
                <h3 className="text-4xl md:text-[2.75rem] font-medium leading-[1.1] mb-8 text-fg">
                  Unified <br /> Payments
                </h3>
                <p className="text-sm md:text-base text-muted-fg leading-relaxed font-medium mb-8">
                  Scan and charge with zero friction.{" "}
                  <br className="hidden xl:block" />
                  TezPass handles payments centrally across{" "}
                  <br className="hidden xl:block" />
                  all networks, providing seamless billing.
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[13px] md:text-sm font-medium mb-5 text-fg/40 mt-10">
                  <div>UPI & Cards</div>
                  <div>Wallet Balance</div>
                  <div>Subscriptions</div>
                  <div>Loyalty Points</div>
                </div>
              </div>
              <div className="mt-12 md:mt-auto flex justify-between items-end w-full">
                <div className="flex gap-2">
                  <button className="px-4 py-3 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors">
                    Wallet
                  </button>
                  <button className="px-4 py-3 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors">
                    Rewards
                  </button>
                </div>
                <button className="w-14 h-14 rounded-full border border-fg flex items-center justify-center text-fg hover:bg-hover transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full min-h-screen py-16 px-4 md:px-12 relative overflow-hidden bg-bg flex flex-col  gap-4">
        <div className="absolute -bottom-2 left-0 opacity-70 fliter blur-[2px] ">
          {" "}
          <video src="/flower.mp4" autoPlay loop className="w-90"></video>
        </div>

        {/* Left Column */}
        <div className="w-full  flex flex-col justify-between relative z-10 pt-4">
          <div>
            <h2 className="text-5xl md:text-[5.5rem] font-medium leading-[1] tracking-tight text-fg mb-4 flex items-center gap-2">
              What We Do
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-45 relative top-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </h2>
            <button className="flex items-center gap-4 px-5 py-3.5 rounded-full border border-fg text-sm font-medium hover:bg-hover transition-colors w-max bg-transparent">
              About Us
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="-rotate-45"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-16 md:mt-auto hidden">
            <p className="text-[#a0a0a0] font-medium max-w-[200px] leading-[1.4] mb-12 text-[15px]">
              Design, Develop And Run Any Business Software You Need.
            </p>
            <div className="flex items-center gap-6 text-[#a0a0a0]">
              <button className="hover:text-fg transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="hover:text-fg transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className="w-full relative left-70 -top-5 flex overflow-x-auto gap-4 pb-0 pt-4 snap-x snap-mandatory  relative z-10">
          {/* Card 1 */}
          <div className="snap-start min-w-[340px] w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-4xl p-4 md:p-8 flex flex-col relative">
            <h3 className="text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-6 text-fg mt-4 tracking-tight">
              Smart EV Profiles
            </h3>
            <div className="w-full h-52 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img
                src="/card/business_blocks.png"
                alt="Smart EV Profiles"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-8 border-b-[1.5px] border-fg mb-6"></div>

            <p className="text-[13px] md:text-lg font-medium text-fg leading-[1.6]">
              Register your vehicle once to get personalized charging speeds,
              connector compatibility, and tailored station recommendations for
              your specific car model.
            </p>
          </div>

          {/* Card 2 */}
          <div className="snap-start min-w-[340px] w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-4xl p-4 md:p-8 flex flex-col relative">
            <h3 className="text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-6 text-fg mt-4 tracking-tight">
              Tiered Memberships
            </h3>

            <div className="w-full h-52 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
                alt="Tiered Memberships"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-8 border-b-[1.5px] border-fg mb-6"></div>

            <p className="text-[13px] md:text-lg font-medium text-fg leading-[1.6]">
              Choose from Lite, Pro, or Ultra plans tailored for casual users,
              daily commuters, and frequent travelers to unlock lower fees and
              priority booking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="snap-start min-w-[340px] w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-4xl p-4 md:p-8 flex flex-col relative">
            <h3 className="text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-6 text-fg mt-4 tracking-tight">
              Rewards Ecosystem
            </h3>

            <div className="w-full h-52 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                alt="Rewards Ecosystem"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-8 border-b-[1.5px] border-fg mb-6"></div>

            <p className="text-[13px] md:text-lg font-medium text-fg leading-[1.6]">
              Turn every charging session into points. Redeem your loyalty
              rewards for cashback, food coupons, charging credits, and
              exclusive partner offers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="snap-start min-w-[340px] w-[340px] md:min-w-[450px] md:w-[450px] bg-muted rounded-4xl p-4 md:p-8 flex flex-col relative">
            <h3 className="text-[2rem] md:text-[2.25rem] font-medium leading-[1.15] mb-6 text-fg mt-4 tracking-tight">
              Intelligent Insights
            </h3>

            <div className="w-full h-52 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                alt="Intelligent Insights"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-8 border-b-[1.5px] border-fg mb-6"></div>

            <p className="text-[13px] md:text-lg font-medium text-fg leading-[1.6]">
              Go beyond simple billing. Track your battery health trends,
              monthly usage efficiency, and long-term travel insights through
              our intelligent platform.
            </p>
          </div>
        </div>
      </section>

      {/* our benifits section */}

      <PricingSection />
      <FAQSection />
 
      <Footer />
    </div>
  );
}
