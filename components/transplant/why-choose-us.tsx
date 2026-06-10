"use client";

import React, { useState } from "react";

const features = [
  {
    step: "01",
    title: "Experienced Hair Transplant Surgeons",
    description:
      "Our expert hair transplant doctors specialize in advanced baldness procedures with precision and natural hairline restoration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Advanced FUE Hair Transplant in Chennai",
    description:
      "We offer minimally invasive FUE hair transplant treatments with faster recovery time and natural results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "FUT Hair Transplant Specialists",
    description:
      "Our FUT procedures are ideal for patients requiring higher graft counts and maximum density results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Hair Transplant for Women",
    description:
      "We provide customized solutions for women experiencing thinning hair, widening partition, and hairline loss.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Natural Hairline Hair Transplant",
    description:
      "Achieve dense, natural-looking hair growth with scientifically designed hair graft placement techniques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.444 7.5-6 10.627-6 13a6 6 0 0012 0c0-2.373-1.556-5.5-6-13z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Affordable Hair Transplant Cost in Chennai",
    description:
      "Get transparent pricing with flexible payment options and dedicated consultation support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 max-sm:py-4 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 max-sm:mb-6">
          <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4 max-sm:mb-2">
            <span className="w-5 h-px bg-[#e82625]" />
            Our Advantages
            <span className="w-5 h-px bg-[#e82625]" />
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1f2430] leading-tight max-w-2xl mx-auto">
            Why Choose Advanced Grohair{" "}
            <span className="text-[#e82625]">Hair Transplant</span> Clinic?
          </h2>
          <div className="mt-5 max-sm:mt-3 mx-auto w-12 h-1 rounded-full bg-[#e82625]" />
        </div>

        {/* 2-column accordion grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#e82625] shadow-[0_4px_24px_rgba(232,38,37,0.12)]"
                    : "border-gray-100 shadow-sm hover:border-[#e82625]/40 hover:shadow-md"
                }`}
              >
                {/* Title row — always visible */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left bg-white"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#e82625] text-white"
                        : "bg-[#fff1f1] text-[#e82625]"
                    }`}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <span
                    className={`flex-1 font-semibold text-sm sm:text-[0.95rem] leading-snug transition-colors duration-200 ${
                      isOpen ? "text-[#e82625]" : "text-[#1f2430]"
                    }`}
                  >
                    {feature.title}
                  </span>

                  {/* Chevron */}
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-[#e82625] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Description — dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <div className="w-full h-px bg-[#e82625]/15 mb-4" />
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom center button */}
        <div className="flex justify-center max-sm:mt-5 mt-10">
          <button className="bg-[#e82625] text-white text-sm sm:text-[15px] font-semibold px-8 py-3.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
            Book Your Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
