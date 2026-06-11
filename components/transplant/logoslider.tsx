"use client";
import React from "react";

const features = [
  {
    title: "2000+ Hair Transformations",
    image: "https://ik.imagekit.io/cbvg612cb/public/1042037.png?updatedAt=1773379062378",
    alt: "Diagnostic Imaging Icon",
  },
  {
    title: "Board Certified Experts",
    image: "https://ik.imagekit.io/cbvg612cb/public/12563520.png?updatedAt=1773379062362",
    alt: "Treatment Strategy Icon",
  },
  {
    title: "FDA-Approved Equipment",
    image: "https://ik.imagekit.io/cbvg612cb/public/12401842.png?updatedAt=1773379062382",
    alt: "Recovery Support Icon",
  },
  {
    title: "24/7 Support",
    image: "https://ik.imagekit.io/cbvg612cb/public/4233817.png?updatedAt=1773379062819",
    alt: "Consultation Icon",
  },
  {
    title: "No Cost EMI",
    image: "https://ik.imagekit.io/cbvg612cb/public/14075405.png?updatedAt=1773379062497",
    alt: "Case Review Icon",
  },
  {
    title: "60+ Clinics Nationwide",
    image: "https://ik.imagekit.io/cbvg612cb/public/17343127.png?updatedAt=1773379062669",
    alt: "Root Cause Analysis Icon",
  },
];

// Duplicate for seamless infinite loop
const allItems = [...features, ...features];

const CareFeaturesExact = () => {
  return (
    <section className="w-full bg-white py-10 max-sm:py-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Stats That Tell a {" "}
              <span className="text-[#e82625]">Gleeful Story</span>
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            animation: "marquee 22s linear infinite",
            width: "max-content",
          }}
        >
          {allItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-10 py-10 group flex-shrink-0"
            >
              {/* Icon */}
              <div className="w-[64px] h-[64px] mb-4 rounded-full bg-[#fee7e7] flex items-center justify-center p-3 group-hover:bg-[#e82625] transition-colors duration-300">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              {/* Title */}
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#111827] group-hover:text-[#e82625] transition-colors duration-300 whitespace-nowrap">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 max-sm:mt-5">
        <button
          onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-[#e82625] cursor-pointer text-white text-base sm:text-md font-medium px-8 py-2.5 rounded-full hover:scale-105 transition-all duration-300"
        >
          Book an Appointment
        </button>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CareFeaturesExact;
