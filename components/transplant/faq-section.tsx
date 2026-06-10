"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Which is the best hair transplant clinic in Chennai?",
    answer:
      "Advanced Grohair is one of the leading hair transplant clinics in Chennai offering advanced FUE and FUT hair transplant procedures with natural results.",
  },
  {
    question: "What is the hair transplant cost in Chennai?",
    answer:
      "Hair transplant cost in Chennai depends on graft count, hair loss stage, and treatment technique. Consultation helps determine exact pricing.",
  },
  {
    question: "What is the recovery time after hair transplantation?",
    answer:
      "Most patients recover within a few days, while complete hair growth gradually improves over several months.",
  },
  {
    question: "Is FUE hair transplant permanent?",
    answer:
      "Yes, FUE hair transplant is considered a permanent hair restoration solution when performed by experienced specialists.",
  },
  {
    question: "Do you provide hair transplant for women?",
    answer:
      "Yes, we offer customized hair transplant treatments for women experiencing thinning hair and hairline loss.",
  },
  {
    question: "Which is better – FUE or FUT hair transplant?",
    answer:
      "Both are effective procedures. Our hair transplant doctor recommends the best option based on your scalp condition and graft requirement.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 max-sm:py-6 px-4 sm:px-6 lg:px-8 bg-[#fff7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 max-sm:gap-6 lg:gap-16 items-start">

          {/* ── Left: FAQ ── */}
          <div className="w-full lg:w-[55%]">

            {/* Header */}
            <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-5 h-px bg-[#e82625]" />
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1f2430] leading-tight mb-8">
              Frequently Asked{" "}
              <span className="text-[#e82625]">Questions</span>
            </h2>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#e82625] shadow-[0_4px_20px_rgba(232,38,37,0.10)]"
                        : "border-gray-200 bg-white hover:border-[#e82625]/40"
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white"
                    >
                      <span
                        className={`font-semibold text-sm sm:text-[0.95rem] leading-snug transition-colors duration-200 ${
                          isOpen ? "text-[#e82625]" : "text-[#1f2430]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      {/* Plus / Minus icon */}
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#e82625] border-[#e82625]"
                            : "border-gray-300"
                        }`}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-45 text-white" : "text-gray-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="w-full h-px bg-[#e82625]/15 mb-3" />
                        <p className="text-[#6b7280] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Two images with relative + absolute ── */}
          <div className="w-full lg:w-[45%] relative h-[300px] sm:h-[380px] lg:h-[520px] flex-shrink-0">

            {/* Main image — large, top-left */}
            <div className="absolute top-0 left-0 w-[82%] h-[82%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/faq-img1.jpg"
                alt="Hair Transplant Clinic"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Second image — smaller, bottom-right, overlapping */}
            <div className="absolute bottom-0 right-0 w-[52%] h-[48%] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/faq-img.jpg"
                alt="Hair Transplant Result"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Red accent dots */}
            <div className="absolute bottom-[52%] left-[14%] w-10 h-10 rounded-full bg-[#e82625]/10" />
            <div className="absolute bottom-[46%] left-[22%] w-5 h-5 rounded-full bg-[#e82625]/20" />

          </div>

        </div>
      </div>
    </section>
  );
}
