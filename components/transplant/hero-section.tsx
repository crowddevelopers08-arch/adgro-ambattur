"use client";

import React from "react";
import HairTreatmentsForm from "./hair-treatments-form";

const IVFHeroExact = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#eef2f3] to-[#fbf7f3]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 max-[470px]:py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Heading */}
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] font-extrabold text-[#1f2430] mb-4">
              #1 Hair Transplant Clinic
              <br className="hidden sm:block" />
              in Chennai
            </h1>

            {/* Sub-description */}
            <p className="text-[18px] sm:text-[20px] text-[#6b7280] max-w-[520px] mx-auto lg:mx-0 leading-[1.7] mb-5">
              Proven Solutions for Lasting Results
            </p>

            {/* Badge image */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="overflow-hidden rounded-[16px] w-full max-w-[300px] sm:max-w-[360px] h-[60px] sm:h-[72px] md:h-[80px]">
                <img
                  src="https://ik.imagekit.io/cbvg612cb/public/add.png?updatedAt=1773379064271"
                  alt="Additional Information"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="overflow-hidden rounded-[20px] w-full max-w-[420px] sm:max-w-[480px] h-[220px] sm:h-[260px]">
                <img
                  src="https://ik.imagekit.io/cbvg612cb/public/befaftttt.png?updatedAt=1773379067896"
                  alt="Hair Transplant Result"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="border-t border-b border-gray-200 py-5 mb-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                {[
                  { val: "97%",    label: "Success Rate" },
                  { val: "5+",     label: "Years Of Experience" },
                  { val: "2,000+", label: "Happy Patients" },
                  { val: "10+",    label: "Certified Doctors" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-[#e82625] leading-none">
                      {stat.val}
                    </p>
                    <p className="text-[11px] sm:text-[12px] md:text-[13px] text-[#6b7280] mt-1.5 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto cursor-pointer bg-[#e82625] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3 sm:py-[8px] rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Book a Consultation
                <span className="text-lg">↗</span>
              </button>
              <a href="tel:+917409256789" className="w-full sm:w-auto">
                <button className="w-full cursor-pointer bg-[#e82625] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3 sm:py-[10px] rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  Get Started Today!
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div id="form" className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[480px]">
              <HairTreatmentsForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IVFHeroExact;
