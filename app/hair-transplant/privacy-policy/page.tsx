"use client";

import React from "react";
import Link from "next/link";
import ThankTopBar from "@/components/thanknavbar";

export default function HairTreatmentsPrivacyPolicyPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <ThankTopBar />

      <div style={{ fontFamily: "'Outfit', sans-serif" }}>

        {/* ── Diagonal Hero ── */}
        <div className="relative bg-[#e82625] overflow-hidden">
          {/* diagonal white slice bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
          {/* faint grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 sm:pt-20 sm:pb-32">
            <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Advanced Grohair Ambattur
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none mb-5">
              Privacy<br />
              <span className="text-white/30">Policy</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
              Applies to visitors who submit enquiry or appointment forms through
              the Adgor Hair Ambattur hair transplant page.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Effective 2025
            </div>
          </div>
        </div>

        {/* ── Timeline Body ── */}
        <div className="bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

            {/* Timeline wrapper */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] sm:left-[27px] top-0 bottom-0 w-px bg-gray-100" />

              <div className="space-y-14 sm:space-y-16">

                {/* ── 01: Information We Collect ── */}
                <div className="relative pl-12 sm:pl-16">
                  {/* dot */}
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#e82625] flex items-center justify-center shadow-[0_0_0_6px_#fff1f1]">
                    <span className="text-white font-black text-xs sm:text-sm">01</span>
                  </div>
                  {/* giant faded number */}
                  <div className="absolute -top-4 right-0 text-[100px] sm:text-[140px] font-black text-gray-50 leading-none select-none pointer-events-none hidden sm:block">
                    01
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-6">
                      Information We Collect
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border-l-2 border-[#e82625] pl-5">
                        <h3 className="text-[#1f2430] font-bold text-sm mb-3">Information You Provide</h3>
                        <ul className="space-y-2">
                          {["Full name", "Phone number", "Email address", "Selected treatment", "PIN code"].map((item, i) => (
                            <li key={i} className="text-[#6b7280] text-sm flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#e82625] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-[#1f2430] font-bold text-sm mb-3">Technical Information</h3>
                        <ul className="space-y-2">
                          {[
                            "Page URL from which the form was submitted",
                            "Browser and device information",
                            "Technical data for analytics and lead tracking",
                          ].map((item, i) => (
                            <li key={i} className="text-[#6b7280] text-sm flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 02: How We Use ── */}
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1f2430] flex items-center justify-center shadow-[0_0_0_6px_#f3f4f6]">
                    <span className="text-white font-black text-xs sm:text-sm">02</span>
                  </div>
                  <div className="absolute -top-4 right-0 text-[100px] sm:text-[140px] font-black text-gray-50 leading-none select-none pointer-events-none hidden sm:block">
                    02
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-6">
                      How We Use Your Information
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "To contact you about the hair treatment you selected",
                        "To schedule consultations and appointments",
                        "To share service details, pricing, and treatment guidance",
                        "To record and manage leads in our internal dashboard and TeleCRM",
                        "To improve the performance of our hair treatments landing page",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e82625] flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="text-[#6b7280] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── 03: Lead Management ── */}
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#e82625] flex items-center justify-center shadow-[0_0_0_6px_#fff1f1]">
                    <span className="text-white font-black text-xs sm:text-sm">03</span>
                  </div>
                  <div className="absolute -top-4 right-0 text-[100px] sm:text-[140px] font-black text-gray-50 leading-none select-none pointer-events-none hidden sm:block">
                    03
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-4">
                      Lead Management
                    </h2>
                    <div className="bg-[#fff7f7] border border-[#e82625]/15 rounded-xl p-5">
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        When you submit the hair treatments form, your information may be stored in our secure systems and shared with our lead management platform so our team can follow up on your enquiry efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── 04: Data Security ── */}
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1f2430] flex items-center justify-center shadow-[0_0_0_6px_#f3f4f6]">
                    <span className="text-white font-black text-xs sm:text-sm">04</span>
                  </div>
                  <div className="absolute -top-4 right-0 text-[100px] sm:text-[140px] font-black text-gray-50 leading-none select-none pointer-events-none hidden sm:block">
                    04
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-4">
                      Data Security
                    </h2>
                    <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1f2430] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </div>
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        We use reasonable administrative and technical safeguards to protect your personal data. While we take care to secure the information you submit, no internet-based transmission can be guaranteed to be fully secure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── 05: Your Choices ── */}
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#e82625] flex items-center justify-center shadow-[0_0_0_6px_#fff1f1]">
                    <span className="text-white font-black text-xs sm:text-sm">05</span>
                  </div>
                  <div className="absolute -top-4 right-0 text-[100px] sm:text-[140px] font-black text-gray-50 leading-none select-none pointer-events-none hidden sm:block">
                    05
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-4">
                      Your Choices
                    </h2>
                    <p className="text-[#6b7280] text-sm mb-5">
                      If you would like to access, correct, or delete your submitted information, please contact us directly:
                    </p>
                    <a
                      href="mailto:customercare@adgrohairambattur.in"
                      className="group inline-flex items-center gap-3 border-2 border-[#e82625] rounded-xl px-5 py-3.5 hover:bg-[#e82625] transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-[#e82625] group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="text-[#e82625] group-hover:text-white font-semibold text-sm transition-colors duration-200">
                        customercare@adgrohairambattur.in
                      </span>
                    </a>
                  </div>
                </div>

                {/* ── 06: Contact (end dot) ── */}
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1f2430] flex items-center justify-center shadow-[0_0_0_6px_#f3f4f6]">
                    <span className="text-white font-black text-xs sm:text-sm">06</span>
                  </div>
                  <div className="relative pt-1 sm:pt-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#1f2430] mb-6">
                      Contact Us
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <a href="mailto:customercare@adgrohairambattur.in"
                        className="group flex flex-col gap-2 border border-gray-100 rounded-xl p-5 hover:border-[#e82625] hover:shadow-[0_4px_20px_rgba(232,38,37,0.10)] transition-all duration-200">
                        <div className="w-9 h-9 rounded-lg bg-[#fff1f1] flex items-center justify-center text-[#e82625]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-xs">Email</p>
                        <p className="text-[#1f2430] text-xs font-semibold group-hover:text-[#e82625] transition-colors duration-200 break-all">customercare@adgrohairambattur.in</p>
                      </a>
                      <a href="tel:+917409256789"
                        className="group flex flex-col gap-2 border border-gray-100 rounded-xl p-5 hover:border-[#e82625] hover:shadow-[0_4px_20px_rgba(232,38,37,0.10)] transition-all duration-200">
                        <div className="w-9 h-9 rounded-lg bg-[#fff1f1] flex items-center justify-center text-[#e82625]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-xs">Phone</p>
                        <p className="text-[#1f2430] text-sm font-semibold group-hover:text-[#e82625] transition-colors duration-200">+91 7409256789</p>
                      </a>
                      <div className="flex flex-col gap-2 border border-gray-100 rounded-xl p-5">
                        <div className="w-9 h-9 rounded-lg bg-[#fff1f1] flex items-center justify-center text-[#e82625]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-xs">Address</p>
                        <p className="text-[#6b7280] text-xs leading-relaxed">Redhills Main Road, Vijaylakshmipuram, Ambattur, Thiruvallur, TN — 600053</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/hair-transplant"
                className="inline-flex items-center gap-2 text-[#e82625] font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Hair Transplant
              </Link>
              <span className="text-gray-300 text-xs">© 2025 Advanced Grohair</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
