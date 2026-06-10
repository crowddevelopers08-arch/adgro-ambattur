import React from "react";
import Image from "next/image";

const points = [
  "Advanced Hair Transplant Technology",
  "Experienced Hair Transplant Surgeon Chennai",
  "Personalized Treatment Plans",
  "FDA-Approved Equipment",
  "Natural Hairline Design",
  "Affordable Hair Transplant Price Chennai",
  "High Patient Satisfaction",
  "Trusted Hair Transplant Center",
];

export default function WhyBestClinic() {
  return (
    <section className="py-16 max-sm:py-6 px-4 sm:px-6 lg:px-8 bg-[#fff7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-16">

          {/* ── MOBILE ONLY: Label + Title (shown above image) ── */}
          <div className="order-1 lg:hidden">
            <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-5 h-px bg-[#e82625]" />
              Why Us
            </span>
            <h2 className="text-2xl font-extrabold text-[#1f2430] leading-tight">
              Why Patients Choose Us as the{" "}
              <span className="text-[#e82625]">Best Hair Transplant Clinic</span>{" "}
              in Chennai
            </h2>
          </div>

          {/* ── Image (order-2 on mobile, left col on desktop) ── */}
          <div className="order-2 lg:order-1 w-full lg:w-[45%] relative min-h-[300px] lg:min-h-[380px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
            <Image
              src="/doctor-hair-treatment.jpg"
              alt="Best Hair Transplant Clinic in Chennai"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* ── Right content (order-3 on mobile, right col on desktop) ── */}
          <div className="order-3 lg:order-2 w-full lg:w-[55%] flex flex-col justify-center">

            {/* Label + Title — desktop only */}
            <div className="hidden lg:block">
              <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4">
                <span className="w-5 h-px bg-[#e82625]" />
                Why Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1f2430] leading-tight mb-8">
                Why Patients Choose Us as the{" "}
                <span className="text-[#e82625]">Best Hair Transplant Clinic</span>{" "}
                in Chennai
              </h2>
            </div>

            {/* 2-column checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-6 lg:mt-0">
              {points.map((point, i) => (
                <div key={i} className="group flex items-start gap-3 cursor-default">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e82625] group-hover:bg-[#1f2430] flex items-center justify-center mt-0.5 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-[#1f2430] group-hover:text-[#e82625] text-sm sm:text-[0.92rem] font-medium leading-snug transition-colors duration-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 max-sm:mt-5">
              <button className="bg-[#e82625] text-white text-sm font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Book Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
