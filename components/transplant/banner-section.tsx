"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const banners = [
  { src: "/images/LP-Banner-Ambattur3.jpeg", alt: "Advanced Grohair Ambattur Banner 1" },
  { src: "/images/LP-Banner-Ambattur3.jpeg", alt: "Advanced Grohair Ambattur Banner 2" },
  { src: "/images/LP-Banner-Ambattur3.jpeg", alt: "Advanced Grohair Ambattur Banner 3" },
];

export default function BannerSection() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative block w-full overflow-hidden md:hidden">
        <Image
          src="/ambattur-mobile.png"
          alt="Advanced Grohair Ambattur"
          width={1080}
          height={1350}
          priority
          className="h-auto w-full"
        />
      </section>
      <section className="relative hidden w-full overflow-hidden md:block lg:hidden">
        <Image
          src="/ambattur-tablet.png"
          alt="Advanced Grohair Ambattur"
          width={1448}
          height={1086}
          priority
          className="h-auto w-full"
        />
      </section>
    <section className="hidden lg:block w-full relative overflow-hidden bg-[#1f2430]">
      {/* Banner Images */}
      <div className="relative w-full aspect-[13/7] sm:aspect-[16/6] lg:aspect-[14/6]">
        {banners.map((banner, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Gradient overlay — bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        <div className="absolute right-[7%] bottom-[12%] z-10 flex items-center gap-3 sm:right-[11%] sm:bottom-[11%] md:right-[21%] md:bottom-[16%]">
          <a
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}

            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#e82625] shadow-lg transition-all duration-200 hover:bg-[#ffe45c] hover:text-[#b80012] sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:text-base"
          >
            Book Your Consultation
          </a>
          <a
            href="tel:+917409256789"
            className="rounded-full bg-[#ffe45c] px-4 py-2 text-xs font-bold text-[#b80012] shadow-lg transition-all duration-200 hover:bg-white hover:text-[#e82625] sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:text-base"
          >
            Call Now
          </a>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to banner ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-[#e82625]"
                  : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => goTo((current - 1 + banners.length) % banners.length)}
          aria-label="Previous banner"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % banners.length)}
          aria-label="Next banner"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
    </>
  );
}
