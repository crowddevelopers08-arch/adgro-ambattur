"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThankTopBar from "@/components/thanknavbar";

const steps = [
  {
    step: "01",
    title: "Confirmation Received",
    desc: "Your appointment request has been successfully recorded in our system.",
    done: true,
  },
  {
    step: "02",
    title: "Team Review",
    desc: "Our hair transplant specialists will review your details within 2 hours.",
    done: false,
  },
  {
    step: "03",
    title: "Call Scheduled",
    desc: "Our coordinator will call you to confirm your consultation slot.",
    done: false,
  },
  {
    step: "04",
    title: "Your Consultation",
    desc: "Meet our expert surgeon for a personalised hair restoration assessment.",
    done: false,
  },
];

const trustPoints = [
  { label: "Years Experience", value: "10+" },
  { label: "Happy Patients", value: "5000+" },
  { label: "Success Rate", value: "98%" },
  { label: "Expert Surgeons", value: "4+" },
];

export default function ThankYouPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

        @keyframes checkDraw {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes circlePop {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .check-circle { animation: circlePop 0.5s ease forwards; }
        .check-path   { stroke-dasharray: 60; stroke-dashoffset: 60; animation: checkDraw 0.5s ease 0.4s forwards; }
        .fade-up-1    { animation: fadeUp 0.5s ease 0.3s both; }
        .fade-up-2    { animation: fadeUp 0.5s ease 0.5s both; }
        .fade-up-3    { animation: fadeUp 0.5s ease 0.7s both; }
        .fade-up-4    { animation: fadeUp 0.5s ease 0.9s both; }
        .fade-up-5    { animation: fadeUp 0.5s ease 1.1s both; }
      `}</style>

      <ThankTopBar />

      <div
        className="min-h-screen bg-[#fafafa]"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {/* ── Top accent bar ── */}
        <div className="h-1 w-full bg-[#e82625]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

          {/* ── Hero: Check + Message ── */}
          <div className="text-center mb-14 sm:mb-18">
            {/* Animated checkmark */}
            {visible && (
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-[#e82625]/10 scale-[1.3]" />
                  <svg
                    className="check-circle w-24 h-24 sm:w-28 sm:h-28 relative"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle cx="50" cy="50" r="46" fill="#e82625" />
                    <circle cx="50" cy="50" r="46" stroke="#fff1f1" strokeWidth="1" />
                    <path
                      className="check-path"
                      d="M28 50 L44 66 L72 35"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="fade-up-1">
              <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4">
                <span className="w-5 h-px bg-[#e82625]" />
                Booking Confirmed
                <span className="w-5 h-px bg-[#e82625]" />
              </span>
            </div>

            <h1 className="fade-up-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2430] leading-tight mb-4">
              Thank You for{" "}
              <span className="text-[#e82625]">Choosing Us!</span>
            </h1>
            <p className="fade-up-3 text-[#6b7280] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Your appointment request has been received. Our team at{" "}
              <span className="font-semibold text-[#1f2430]">Advanced Grohair Ambattur</span>{" "}
              will contact you shortly to confirm your free consultation.
            </p>
          </div>

          {/* ── What Happens Next ── */}
          <div className="fade-up-4 mb-14">
            <h2 className="text-center text-lg sm:text-xl font-bold text-[#1f2430] mb-8">
              What Happens Next?
            </h2>

            {/* Timeline steps */}
            <div className="relative">
              {/* connector line (desktop) */}
              <div className="hidden sm:block absolute top-7 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gray-200" />

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4">
                {steps.map((s, i) => (
                  <div key={i} className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-3 relative">
                    {/* mobile vertical connector */}
                    {i < steps.length - 1 && (
                      <div className="sm:hidden absolute left-5 top-12 bottom-0 w-px bg-gray-200 -mb-6" />
                    )}
                    {/* dot */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-xs z-10 ${
                      s.done
                        ? "bg-[#e82625] text-white shadow-[0_0_0_4px_#fff1f1]"
                        : "bg-white border-2 border-gray-200 text-[#6b7280]"
                    }`}>
                      {s.done ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        s.step
                      )}
                    </div>
                    <div className="sm:text-center">
                      <p className={`font-bold text-sm mb-1 ${s.done ? "text-[#e82625]" : "text-[#1f2430]"}`}>
                        {s.title}
                      </p>
                      <p className="text-[#6b7280] text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Trust Numbers ── */}
          <div className="fade-up-5 bg-[#1f2430] rounded-2xl px-6 py-8 sm:py-10 mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#e82625]/10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#e82625]/5 -translate-x-1/3 translate-y-1/3" />
            <p className="relative text-center text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-7">
              Why Patients Trust Us
            </p>
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {trustPoints.map((tp, i) => (
                <div key={i} className="text-center">
                  <p className="text-[#e82625] text-3xl sm:text-4xl font-black leading-none mb-1">
                    {tp.value}
                  </p>
                  <p className="text-white/60 text-xs font-medium">{tp.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+917409256789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#e82625] text-white font-bold px-8 py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_rgba(232,38,37,0.25)] text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8Z" />
              </svg>
              Call Now — +91 74092 56789
            </a>
            <Link
              href="/hair-transplant"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#1f2430] text-[#1f2430] font-bold px-8 py-4 rounded-full hover:bg-[#1f2430] hover:text-white transition-all duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* footer note */}
          <p className="text-center text-gray-400 text-xs mt-10">
            Questions? Email us at{" "}
            <a href="mailto:customercare@adgrohairambattur.in" className="text-[#e82625] underline underline-offset-2">
              customercare@adgrohairambattur.in
            </a>
          </p>

        </div>
      </div>
    </>
  );
}
