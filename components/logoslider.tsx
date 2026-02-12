"use client";
import React from "react";
import Image from "next/image";

/* ---------- IMAGE BOX COMPONENTS ---------- */
const ImageBox = ({ src, alt }) => (
  <div className="w-[64px] h-[64px] mx-auto mb-6 rounded-full bg-[#fee7e7] flex items-center justify-center p-3">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
    />
  </div>
);

const ImageBoxSmall = ({ src, alt }) => (
  <div className="w-[60px] h-[60px] mx-auto mb-6 rounded-full bg-[#fee7e7] flex items-center justify-center p-3">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
    />
  </div>
);

/* ---------- DATA WITH IMAGES ---------- */
const featuresTop = [
  {
    title: "2000+ Hair Transformations",
    desc: "State-of-the-art imaging for accurate hair and scalp assessment.",
    image: "/1042037.png",
    alt: "Diagnostic Imaging Icon"
  },
  {
    title: "Board Certified Experts",
    desc: "Evidence-based, minimally invasive hair restoration techniques.",
    image: "/12563520.png",
    alt: "Treatment Strategy Icon"
  },
  {
    title: "FDA-Approved Equipment",
    desc: "Holistic rehabilitation and follow-up care for lasting results.",
    image: "/12401842.png",
    alt: "Recovery Support Icon"
  },
];

const featuresBottom = [
  {
    title: "24/7 Support",
    desc: "Meet our experienced hair specialists for a detailed evaluation.",
    image: "/4233817.png",
    alt: "Consultation Icon"
  },
  {
    title: "No Cost EMI",
    desc: "We analyze your medical history, hair condition, and goals thoroughly.",
    image: "/14075405.png",
    alt: "Case Review Icon"
  },
  {
    title: "60+ Clinics Nationwide",
    desc: "Identifying the exact cause of hair loss, not just treating symptoms.",
    image: "/17343127.png",
    alt: "Root Cause Analysis Icon"
  },
];

/* ---------- COMPONENT ---------- */
const CareFeaturesExact = () => {
  return (
    <section className="w-full bg-white py-10 max-[470px]:py-6 md:py-10 lg:py-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ea2424] mb-2 sm:mb-3">
             Stats That Tell a Gleeful Story
            </h2>
          </div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* TOP ROW - 3 Features */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-10 mb-8 md:mb-10 lg:mb-12 text-center">
          {featuresTop.map((item, index) => (
            <div key={index} className="px-2 group">
              <ImageBox src={item.image} alt={item.alt} />
              <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#111827] mb-3 group-hover:text-[#e82625] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW - 4 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 text-center">
          {featuresBottom.map((item, index) => (
            <div key={index} className="px-2 group">
              <ImageBoxSmall src={item.image} alt={item.alt} />
              <h3 className="text-[17px] md:text-[18px] lg:text-[19px] font-semibold text-[#111827] mb-3 group-hover:text-[#e82625] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
            <div className="flex justify-center mt-10 max-[470px]:mt-6 md:mt-10 lg:mt-10">
              <a href="#form">
          <button className="bg-[#e82625] cursor-pointer text-white text-base sm:text-lg md:text-[18px] font-medium px-8 md:px-10 py-3.5 md:py-4
                             rounded-full shadow-[0_8px_20px_rgba(232,38,37,0.3)] md:shadow-[0_10px_30px_rgba(232,38,37,0.35)]
                             hover:bg-[#e82625] hover:scale-105 transition-all duration-300">
            Book an Appointment
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareFeaturesExact;