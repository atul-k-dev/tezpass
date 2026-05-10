"use client";

import React from "react";

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full text-white overflow-hidden font-sans">
      {/* 3D Title Section */}
      <div className="relative w-full z-20  -bottom-[8vw] h-[30vw] md:h-[20vw] flex justify-center items-end overflow-hidden ">
        <h1
          className="absolute bottom-[3vw] text-[18vw]   font-black tracking-tighter leading-none select-none"
          style={{
            color: "#FF4C00",
            WebkitTextStroke: "1px #FA4A00",
            textShadow: `
              0 1px 0 #D83600, 
              0 2px 0 #D83600, 
              0 3px 0 #D83600, 
              0 4px 0 #D83600, 
              0 5px 0 #D83600, 
              0 6px 0 #D83600, 
              0 7px 0 #D83600, 
              0 8px 0 #D83600, 
              0 9px 0 #D83600, 
              0 10px 0 #D83600, 
              0 11px 0 #D83600, 
              0 12px 0 #D83600, 
              0 13px 0 #D83600, 
              0 14px 0 #D83600, 
              0 15px 0 #D83600, 
              0 25px 30px rgba(0,0,0,0.3)
            `,
          }}
        >
          TezPass
        </h1>
        {/* Gradient blend
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF4C00] to-transparent z-10"></div> */}
      </div>

      {/* Main Content Area */}
      <div className="relative z-5 px-6 md:px-12 lg:px-20 pt-10 pb-10 bg-[#FF4C00] rounded-t-4xl overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 ">

          {/* Left Column */}
          <div className="flex flex-col max-w-xl">
            {/* Social Icons */}
            <div className="flex items-center gap-5 mb-14">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <XIcon />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <LinkedInIcon />
              </a>
            </div>

            {/* Huge Heading */}
            <h2 className="text-4xl md:text-[3.5rem]  font-black leading-[1] tracking-tight mb-10">
              READY TO TAKE<br />
              CONTROL OF YOUR<br />
              FINANCIAL FUTURE
            </h2>

            {/* CTA Button */}
            <div>
              <button className="bg-white text-[#FF4C00] font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors tracking-wide">
                GET STARTED
              </button>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-16 lg:gap-24 pt-4 lg:pt-20">
            {/* Features */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="font-bold text-lg mb-1">Features</h3>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Analytics</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Collaboration</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Data Management</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Integrations</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Security</a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="font-bold text-lg mb-1">Company</h3>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">About us</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Blog</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Careers</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Cookie Policy</a>
            </div>

            {/* Resource */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="font-bold text-lg mb-1">Resource</h3>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Customers</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Strategic</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">E books & Guides</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Webinar</a>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-5 min-w-[120px]">
              <h3 className="font-bold text-lg mb-1">Support</h3>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Help Center</a>
              <a href="#" className="text-white hover:opacity-80 text-[15px] font-medium transition-opacity">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-6 flex flex-col md:flex-row justify-between items-center text-[15px] font-medium gap-4">
          <div className="opacity-90">© 2024 finguard</div>
          <div className="opacity-90 md:absolute md:left-1/2 md:-translate-x-1/2">All Rights Reserved.</div>
          <div className="flex gap-6 opacity-90">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>


      </div>


    </footer>
  );
}

