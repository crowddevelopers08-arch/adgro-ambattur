import React from "react";

const IVFHeroExact = () => {
  return (
    <section className="w-full py-20 max-[470px]:py-4 bg-gradient-to-r from-[#eef2f3] to-[#fbf7f3] flex items-center">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-center py-8 max-[470px]:py-4 md:py-0">

        {/* LEFT CONTENT - Desktop */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.2] lg:leading-[1.15] font-extrabold text-[#1f2430] mb-4 lg:mb-6">
            Reclaim Confidence With 
            <br className="hidden sm:block" />
            Revolutionary Hair Restoration
            <br className="hidden sm:block" />
            Now at Ambattur
          </h1>

          {/* Description */}
          <p className="text-[20px] sm:text-[20px] md:text-[20px] text-[#6b7280] max-w-[520px] mx-auto lg:mx-0 leading-[1.6] md:leading-[1.7] mb-2 lg:mb-4">
            Proven Solutions for Lasting Results
          </p>

          {/* Small Image below paragraph - Responsive for all screens */}
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-6 max-[470px]:mb-6">
            <div className="overflow-hidden rounded-[16px] w-full max-[470px]:h-20 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[350px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]">
              <img
                src="/add.png"
                alt="Additional Information"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* RIGHT IMAGE BLOCK - Mobile Only (between para and stats) */}
          <div className="lg:hidden order-1 relative flex justify-center max-[470px]:mb-4 mb-8">
            {/* Image - Slightly increased height for mobile */}
            <div className="overflow-hidden rounded-[20px] w-full max-w-[400px] sm:max-w-[480px] h-[240px] sm:h-[280px]">
              <img
                src="/befaftttt.png"
                alt="Happy Family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            {/* Top horizontal line - hidden on mobile, shown on sm and above */}
            <div className="hidden sm:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d1d5db] to-transparent"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-2 sm:py-2 mb-6 lg:mb-6 max-[470px]:mb-4">
              <div className="text-center lg:text-left">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#e82625]">97%</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6b7280] mt-1">
                  Success Rate
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#e82625]">5+</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6b7280] mt-1">
                  Years Of Experience
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#e82625]">2,000+</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6b7280] mt-1">
                  Happy Patients
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#e82625]">10+</p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#6b7280] mt-1">
                  Certified Doctors
                </p>
              </div>
            </div>
            
            {/* Bottom horizontal line - hidden on mobile, shown on sm and above */}
            <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d1d5db] to-transparent"></div>
          </div>
          
          {/* CTA Buttons with Anchor Tags */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center lg:justify-start">
            <a 
              href="#form" 
              className="w-full max-w-[250px] xs:max-w-[280px] sm:w-auto sm:max-w-none"
            >
              <button className="w-full cursor-pointer bg-[#e82625] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3 sm:py-[14px] rounded-full shadow-[0_10px_30px_rgba(232,38,37,0.35)] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Book a Consultation
                <span className="text-lg">↗</span>
              </button>
            </a>
            <a 
              href="tel:+917409256789" 
              className="w-full max-w-[250px] xs:max-w-[280px] sm:w-auto sm:max-w-none"
            >
              <button className="w-full cursor-pointer bg-[#e82625] text-white text-[14px] sm:text-[15px] font-semibold px-6 sm:px-8 py-3 sm:py-[14px] rounded-full shadow-[0_10px_30px_rgba(232,38,37,0.35)] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Get Started Today!
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK - Desktop Only */}
        <div className="hidden lg:flex order-1 lg:order-2 relative justify-center lg:justify-end">
          {/* Image - Increased width, reduced height */}
          <div className="overflow-hidden rounded-[28px] w-full max-w-[580px] h-[400px]">
            <img
              src="/befaftttt.png"
              alt="Happy Family"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IVFHeroExact;