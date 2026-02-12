"use client";
import React from "react";

const AboutUsExact = () => {
  return (
    <section className="w-full bg-white py-10 max-[470px]:py-6 md:py-10 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 max-[470px]:mb-6 md:mb-10">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-[#e82625] mb-3 md:mb-4 px-4">
            About Us
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#6b7280] max-w-[640px] mx-auto leading-relaxed md:leading-[1.7] px-4">
            Frustrated by a lack of results from your current hair loss treatment?
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[72px] items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl sm:rounded-[24px] md:rounded-[28px]">
            <img
              src="/Hair-transplant-surger.jpg"
              alt="Advanced GroHair Team"
              className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="px-2 sm:px-0">
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6b7280] leading-relaxed sm:leading-[1.7] md:leading-[1.8] mb-4 md:mb-6">
              Advanced GroHair specialises in regrowing hair and restoring natural
              hairlines through safe and effective treatments. Our team of expert
              trichologists meticulously analyses your hair and scalp to tailor
              personalised solutions that promote regrowth and enhance the natural
              hairline.
            </p>

            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#6b7280] leading-relaxed sm:leading-[1.7] md:leading-[1.8] mb-6 md:mb-8 lg:mb-10">
              Our treatments are not only safe but also highly efficient, ensuring
              that you achieve the desired results without compromising on your
              well-being. With our proven track record in hair restoration, you can
              trust Advanced GroHair to deliver the results you've been longing for.
            </p>

            {/* Button */}
            <a href="#form">
            <button className="px-6 cursor-pointer sm:px-7 md:px-8 py-2.5 sm:py-[11px] md:py-[12px] rounded-lg sm:rounded-[10px] border border-[#e82625] text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#e82625] hover:bg-[#e82625] hover:text-white transition-colors duration-300">
              Get in Touch
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsExact;