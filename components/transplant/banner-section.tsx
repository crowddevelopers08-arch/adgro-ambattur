"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import HairTreatmentsForm from "./hair-treatments-form";
import { scrollToLeadForm } from "./scroll-to-form";

const banners = [
  { src: "/ddd.png", alt: "Advanced Grohair Ambattur Banner 1" },
  { src: "/ddd.png", alt: "Advanced Grohair Ambattur Banner 2" },
  { src: "/ddd.png", alt: "Advanced Grohair Ambattur Banner 3" },
];

/** Heading + enquiry form + CTAs + trust badges, shared by every breakpoint. */
function BannerLeadPanel({
  media,
}: {
  /** Optional visual rendered between the heading and the form (mobile banner). */
  media?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div className="w-full max-w-[540px] text-center xl:max-w-[600px]">
        <p className="text-base font-semibold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] xl:text-lg">
          Chennai&rsquo;s No.1 Most Trusted
        </p>
        <h2 className="mt-1 text-3xl font-extrabold uppercase leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] xl:text-4xl">
          Hair Transplant
        </h2>
        <p className="mt-1 text-sm font-medium text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] xl:text-base">
          Restoration Clinic Right Here in Ambattur
        </p>
      </div>

      {media}

      <div
        data-lead-form
        className="w-full max-w-[540px] xl:max-w-[600px]"
      >
        <HairTreatmentsForm variant="grid" />
      </div>

      <div className="flex w-full max-w-[540px] flex-wrap items-center justify-center gap-3 xl:max-w-[600px]">
        <a
          href="tel:+917409256789"
          className="rounded-full bg-[#ffe45c] px-6 py-3 text-sm font-bold text-[#b80012] shadow-lg transition-all duration-200 hover:bg-white hover:text-[#e82625] lg:px-8 lg:text-base"
        >
          Call Now
        </a>
        {/* <a
          href="https://wa.me/917409256789"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#e82625] shadow-lg transition-all duration-200 hover:bg-[#ffe45c] hover:text-[#b80012] lg:px-8 lg:text-base"
        >
          Chat on WhatsApp
        </a> */}
      </div>

      {/* Trust badges */}
      <div className="w-full max-w-[540px] xl:max-w-[600px]">
        <Image
          src="/cts.png"
          alt="Google 4.9 rating, 100% satisfaction guaranteed, FDA approved, 97% success rate, 5+ years of experience, 2,000+ happy patients, 10+ certified doctors"
          width={2172}
          height={724}
          className="h-auto w-full object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          sizes="600px"
        />
      </div>
    </div>
  );
}

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
      {/* Mobile — banner image sits between the heading and the form */}
      <section className="relative block w-full overflow-hidden bg-[#de0005] md:hidden">
        <div className="px-4 py-8">
          <BannerLeadPanel
            media={
              <div className="-mx-4 w-[calc(100%+2rem)]">
                <Image
                  src="/mobban.png"
                  alt="Advanced Grohair Ambattur"
                  width={1080}
                  height={1350}
                  priority
                  className="h-auto w-full"
                  sizes="100vw"
                />
              </div>
            }
          />
        </div>
      </section>

      {/* Tablet */}
      <section className="relative hidden w-full overflow-hidden md:block lg:hidden">
        <Image
          src="/ambattur-tablet.png"
          alt="Advanced Grohair Ambattur"
          width={1448}
          height={1086}
          priority
          className="h-auto w-full"
        />
        <div className="bg-[#de0005] px-6 py-10">
          <BannerLeadPanel />
        </div>
      </section>

      {/* Desktop — banner as background, panel on the right */}
      <section className="relative hidden w-full overflow-hidden bg-[#de0005] lg:block">
        {/* Background banner slides */}
        <div className="absolute inset-0">
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
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Gradient overlay — bottom fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Foreground content over the banner */}
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl pb-16 pl-8 pr-8 pt-6 lg:pl-16 lg:pr-14 xl:pl-24 xl:pr-20 2xl:pl-32 2xl:pr-28">
          <div className="grid min-h-[480px] grid-cols-[1fr_540px] items-start gap-10 xl:min-h-[520px] xl:grid-cols-[1fr_600px]">
            {/* Left: artwork stays visible */}
            <div aria-hidden="true" />

            {/* Right: heading, enquiry form, CTAs, badges */}
            <BannerLeadPanel />
          </div>
        </div>

        {/* Slider controls — kept under the left half so they clear the form */}
        <div className="absolute bottom-5 left-0 z-10 flex w-1/2 items-center justify-center gap-4">
          <button
            onClick={() => goTo((current - 1 + banners.length) % banners.length)}
            aria-label="Previous banner"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/40"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to banner ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "h-2.5 w-6 bg-[#e82625]"
                    : "h-2.5 w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo((current + 1) % banners.length)}
            aria-label="Next banner"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/40"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
