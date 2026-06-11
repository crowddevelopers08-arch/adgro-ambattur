"use client";

import React from "react";

const testimonials = [
  {
    text: `I visited this clinic for hair fall and dandruff issues.Had a great experience,I can see good improvement in my hair growth... highly recommended one in Ambattur.`,
    name: "S. R. Vishwa Rajan",
    role: "Hair Transplant Patient",
  },
  {
    text: `Last month i take a prp treatment here, Excellent Results,I wud surely recommend this place for prp treatments thank you so much especially loved my last session.`,
    name: "Adhil Ashik",
    role: "FUE Hair Transplant Patient",
  },
  {
    text: `I have taken 6 PRP session and the result was good. Regarding the session my hairfall was low nowadays. I suggest everyone to visit adgro ambattur clinic for treatment.`,
    name: "Karthik Selvam",
    role: "Hair Restoration Patient",
  },
  {
    text: `I have completed my final PRP session today in adgro ambattur. I am very happy with the results. My hair fall has been controlled and my hair density has increased.Thank to Dr.Thilaga.`,
    name: "Priya Nandakumar",
    role: "Hair Transplant Patient",
  },
  {
    text: `I went for a HAIR PRP and GFC treatment I have completed my 2 sessions, it gives visible results. Doctor's are very professional they did a painless treatment and staffs were also good and friendly and clinic is very hygienic`,
    name: "Sowmiya S",
    role: "Hair Transplant Patient",
  },
];

const allCards = [...testimonials, ...testimonials];

export default function TestimonialCard() {
  return (
    <section className="w-full bg-[#fff7f7] py-14 max-[470px]:py-8">
      <style jsx>{`
        @keyframes reviewScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-track {
          animation: reviewScroll 28s linear infinite;
        }
        .review-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-[470px]:mb-6">
          <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4">
            <span className="w-5 h-px bg-[#e82625]" />
            Clients Reviews
            <span className="w-5 h-px bg-[#e82625]" />
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1f2430] leading-tight">
            Discover Why We&apos;re the{" "}
            <span className="text-[#e82625]">Trusted Choice of Many!</span>
          </h2>
        </div>
      </div>

      {/* Marquee — full width, no side padding */}
      <div className="overflow-hidden relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #fff7f7, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #fff7f7, transparent)" }} />

        <div className="review-track flex gap-5 w-max px-4">
          {allCards.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 w-[300px] sm:w-[360px] flex-shrink-0"
            >
              {/* Quote icon */}
              <div className="w-9 h-9 rounded-xl bg-[#fff1f1] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#e82625]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Review text */}
              <p className="text-[#6b7280] text-sm leading-relaxed flex-1">
                {item.text}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100" />

              {/* Name + Stars */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#1f2430] text-sm">{item.name}</p>
                  <p className="text-[#6b7280] text-xs mt-0.5">{item.role}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
