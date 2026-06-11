"use client";

import { MapPin, Phone, ChevronUp, PhoneCall, Calendar } from "lucide-react";
import Image from "next/image";

const ICON_SIZE = 18;

export default function Footer() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <footer className="w-full" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {/* MOBILE ACTION BUTTONS */}
        <div className="fixed bottom-0 left-0 right-0 z-50 flex sm:hidden">
          <a
            href="tel:+917409256789"
            className="flex-1 flex items-center justify-center gap-2 bg-[#ea2424] text-white py-3 px-4 font-medium hover:bg-[#ea2424]/90 transition-colors"
          >
            <PhoneCall size={ICON_SIZE} className="shrink-0" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 px-4 font-medium hover:bg-gray-900 transition-colors"
          >
            <Calendar size={ICON_SIZE} className="shrink-0" />
            <span>Book Now</span>
          </button>
        </div>

        {/* TOP SECTION */}
        <div className="bg-[#ea2424] text-white sm:pb-0">
          <div className="max-w-6xl mx-auto px-6 py-14 max-[470px]:py-7 text-center">
            {/* LOGO */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-[270px] h-[100px] max-[470px]:w-[220px] max-[470px]:h-[80px]">
                <Image
                  src="https://ik.imagekit.io/cbvg612cb/public/ambatur-logo.jpg?updatedAt=1773379062806"
                  alt="Adgro Hair Ambattur Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start justify-center gap-2 text-[16px] mb-3 opacity-90">
              <MapPin
                size={ICON_SIZE}
                className="text-white shrink-0 mt-[2px]"
              />
              <p className="leading-relaxed">
                New No 124/102, Redhills Main Road, Vijaylakshmipuram, NVA FTTH RSU, Ambattur, Thiruvallur, Tamil Nadu – 600053
              </p>
            </div>

            {/* PHONE & EMAIL */}
            <div className="flex flex-col items-center gap-3 text-[16px] opacity-90">
              <div className="flex items-center gap-2">
                <Phone size={ICON_SIZE} className="text-white shrink-0" />
                <p>+91 7409256789</p>
              </div>
              
              <p>customercare@adgrohairambattur.in</p>
              <a
                href="tel:+917409256789"
                className="flex items-center gap-2 bg-white text-[#e82625] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#e82625] hover:text-white border-2 border-white transition-colors duration-200"
              >
                <Phone size={14} className="shrink-0" />
                Call Us Directly
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative max-[470px]:mb-12 bg-black text-gray-300 text-sm py-4">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-center sm:text-left">
              © 2026 Advanced Grohair chennai. All rights reserved | Powered By Crowd
              Developers
            </p>

            <a
              href="/hair-transplant/privacy-policy"
              className="text-gray-300 hover:text-white hover:underline transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>

          {/* SCROLL TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md hover:bg-gray-200 transition"
            aria-label="Scroll to top"
          >
            <ChevronUp size={ICON_SIZE} className="text-[#ea2424]" />
          </button>
        </div>
      </footer>
    </>
  );
}
