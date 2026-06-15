import React from "react";
import Image from "next/image";

const searchTerms = [
  "Hair loss and hair regrowth concerns",
  "Severe hair thinning",
  "Weak hair roots",
  "Receding hairline",
  "Bald patches",
  "Excessive hair fall",
];

export default function ClinicIntro() {
  return (
    <section className="py-10 max-sm:py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Top — Label + Heading */}
        <div className="text-center mb-10 max-sm:mb-4">
          <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4 max-sm:mb-2">
            <span className="w-5 h-px bg-[#e82625]" />
            About Us
            <span className="w-5 h-px bg-[#e82625]" />
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-[32px] font-extrabold text-[#1f2430] leading-snug max-w-3xl mx-auto">
            Best Hair Regrowth Treatment{" "}
            <span className="text-[#e82625]">Near You</span>
          </h2>
          <div className="mt-4 mx-auto w-12 h-1 rounded-full bg-[#e82625]" />
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left — Text content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-5">

            {/* First description */}
            <p className="text-[#6b7280] text-sm sm:text-[0.95rem] leading-[1.85]">
              Looking for the best treatment for hair regrowth or advanced hair regrowth
              treatment in Chennai? Advanced Grohair offers medically backed hair regrowth
              treatment solutions designed to reduce hair fall, stimulate natural hair
              regrowth, and improve scalp health for both men and women.
            </p>

            {/* ── MOBILE ONLY: Image appears here (after first desc) ── */}
            <div className="lg:hidden relative w-full h-[240px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/doctor-hair-treatment.jpg"
                alt="Best Hair Transplant Clinic Chennai"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Search terms */}
            <div>
              <p className="text-[#1f2430] font-semibold text-md sm:text-[0.95rem] mb-4">
                Whether you are facing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {searchTerms.map((term, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e82625] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-[#1f2430] text-sm font-medium group-hover:text-[#e82625] transition-colors duration-200">
                      {term}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust line */}
            <div className="border-l-4 border-[#e82625] pl-4">
              <p className="text-[#6b7280] text-sm leading-relaxed">
                Our customized{" "}
                <span className="font-semibold text-[#1f2430]">hair treatment for regrowth</span>{" "}
                helps restore healthier, thicker, and stronger hair naturally.
              </p>
            </div>

          </div>

          {/* Right — Image (desktop only) */}
          <div className="hidden lg:block w-full lg:w-[45%] flex-shrink-0">
            <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/doctor-hair-treatment.jpg"
                alt="Best Hair Transplant Clinic Chennai"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
