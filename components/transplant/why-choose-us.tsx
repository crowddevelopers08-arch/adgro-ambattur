"use client";

import React from "react";
import { Check, CircleDollarSign } from "lucide-react";

export default function HairTransplantInfo() {
  const factors = [
    "Number of grafts required",
    "Extent of hair loss",
    "Technique recommended",
    "Donor area availability",
    "Hair density & coverage goals",
  ];

  return (
    <section className="w-full bg-white px-3 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[4px] bg-[#f8f8f7] shadow-[0_0_18px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT SECTION */}
          <div className="border-b border-[#dedede] px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-9">
            <h2 className="text-center text-[22px] font-extrabold uppercase tracking-[-0.4px] text-[#1f2430] sm:text-[25px]">
              How Many Grafts Do You Need?
            </h2>

            <p className="mx-auto mt-2 max-w-[530px] text-center text-[14px] font-medium leading-6 text-[#6b7280] sm:text-[15px]">
              The graft requirement depends on the extent of hair loss
              <br className="hidden sm:block" />
              and the area you want to restore.
            </p>

            {/* Hair Loss Illustrations */}
            <div className="mx-auto mt-7 grid max-w-[680px] grid-cols-3 gap-4 sm:gap-8">
              {/* Hairline */}
              <div className="flex flex-col items-center text-center">
                <HairIllustration type="hairline" />

                <h3 className="mt-3 text-[12px] font-bold text-[#1f2430] sm:text-[14px]">
                  Hairline
                  <br />
                  Restoration
                </h3>

                <p className="mt-1 text-[11px] font-semibold text-[#e82625] sm:text-[13px]">
                  800 - 1500 Grafts
                </p>
              </div>

              {/* Moderate */}
              <div className="flex flex-col items-center text-center">
                <HairIllustration type="moderate" />

                <h3 className="mt-3 text-[12px] font-bold text-[#1f2430] sm:text-[14px]">
                  Moderate Hair Loss
                </h3>

                <p className="mt-1 text-[11px] font-semibold text-[#e82625] sm:text-[13px]">
                  1500 - 3000 Grafts
                </p>
              </div>

              {/* Advanced */}
              <div className="flex flex-col items-center text-center">
                <HairIllustration type="advanced" />

                <h3 className="mt-3 text-[12px] font-bold text-[#1f2430] sm:text-[14px]">
                  Advanced Hair Loss
                </h3>

                <p className="mt-1 text-[11px] font-semibold text-[#e82625] sm:text-[13px]">
                  3000+ Grafts
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-center sm:mt-7">
              <button className="w-full max-w-[340px] rounded-md bg-[#e82625] px-5 py-4 text-[13px] font-bold uppercase tracking-[0.2px] text-white shadow-md transition duration-300 hover:bg-[#b80012] sm:text-[15px]">
                Check Your Graft Requirement
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="px-6 py-8 sm:px-10 lg:px-12 lg:py-9">
            <h2 className="text-[22px] font-extrabold uppercase tracking-[-0.4px] text-[#1f2430] sm:text-[25px]">
              Hair Transplant Cost in Chennai
            </h2>

            <p className="mt-2 max-w-[700px] text-[14px] font-medium leading-6 text-[#6b7280] sm:text-[15px]">
              The cost of hair transplant varies for each individual depending on
              multiple factors.
            </p>

            {/* CHECKLIST + WIDER COST CARD */}
            <div className="mt-6 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_360px]">
              {/* Checklist */}
              <div className="space-y-4">
                {factors.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#e82625]">
                      <Check
                        size={15}
                        strokeWidth={3}
                        className="text-white"
                      />
                    </div>

                    <span className="text-[14px] font-semibold text-[#1f2430] sm:text-[15px]">
                      {factor}
                    </span>
                  </div>
                ))}
              </div>

              {/* COST ESTIMATE CARD */}
              <div className="mx-auto flex w-full max-w-[360px] flex-col items-center rounded-[14px] bg-[#1f2430] px-7 py-6 text-center shadow-[0_5px_18px_rgba(0,0,0,0.2)] lg:mx-0">
                {/* Icon */}
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-[3px] border-[#e82625]">
                  <CircleDollarSign
                    size={36}
                    strokeWidth={1.8}
                    className="text-[#e82625]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[19px] font-bold leading-7 text-white">
                  Get a Personalized
                  <br />
                  Cost Estimate
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14px] leading-6 text-[#d1d5db]">
                  Know your estimated cost
                  <br />
                  based on your assessment.
                </p>

                {/* Button */}
                <button className="mt-5 w-full rounded-[10px] bg-[#e82625] px-4 py-3 text-[15px] font-bold uppercase text-white shadow-md transition duration-300 hover:bg-[#b80012]">
                  Get Cost Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   HAIR LOSS SVG ILLUSTRATION COMPONENT
========================================= */

function HairIllustration({
  type,
}: {
  type: "hairline" | "moderate" | "advanced";
}) {
  return (
    <div className="relative h-[92px] w-[90px] sm:h-[110px] sm:w-[105px]">
      <svg
        viewBox="0 0 120 135"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neck */}
        <path
          d="M48 91 L48 105 L35 113"
          fill="none"
          stroke="#c7bfb6"
          strokeWidth="1.5"
        />

        <path
          d="M72 91 L72 105 L85 113"
          fill="none"
          stroke="#c7bfb6"
          strokeWidth="1.5"
        />

        {/* Shoulders */}
        <path
          d="M35 112 C25 115 15 120 8 125"
          fill="none"
          stroke="#c7bfb6"
          strokeWidth="1.5"
        />

        <path
          d="M85 112 C95 115 105 120 112 125"
          fill="none"
          stroke="#c7bfb6"
          strokeWidth="1.5"
        />

        {/* Face */}
        <path
          d="
            M34 45
            C34 27 46 17 60 17
            C74 17 86 27 86 45
            L86 65
            C86 86 75 101 60 101
            C45 101 34 86 34 65
            Z
          "
          fill="#f5f0e8"
          stroke="#c8c0b7"
          strokeWidth="1.5"
        />

        {/* Hairline Restoration */}
        {type === "hairline" && (
          <path
            d="
              M34 50
              C33 31 43 15 60 15
              C77 15 87 29 86 49
              L80 44
              C77 34 70 29 60 29
              C50 29 42 34 39 44
              Z
            "
            fill="#211b17"
          />
        )}

        {/* Moderate Hair Loss */}
        {type === "moderate" && (
          <>
            <path
              d="
                M33 51
                C33 28 44 16 60 16
                C76 16 87 29 87 51
                L80 48
                L80 39
                C76 31 70 28 67 27
                L67 20
                C72 21 77 25 80 30
                C74 20 67 16 60 16
                C48 16 39 24 36 37
                L36 50
                Z
              "
              fill="#211b17"
            />

            <ellipse
              cx="60"
              cy="25"
              rx="13"
              ry="10"
              fill="#eadacb"
            />
          </>
        )}

        {/* Advanced Hair Loss */}
        {type === "advanced" && (
          <>
            <path
              d="
                M33 52
                C32 33 42 18 60 18
                C78 18 88 33 87 52
                L81 49
                L81 37
                C77 31 73 29 70 28
                L70 20
                C80 25 87 35 87 52
                Z
              "
              fill="#211b17"
            />

            <ellipse
              cx="60"
              cy="27"
              rx="22"
              ry="16"
              fill="#eadacb"
            />
          </>
        )}

        {/* Ears */}
        <path
          d="M34 58 C28 58 28 69 35 70"
          fill="none"
          stroke="#c8c0b7"
          strokeWidth="1.3"
        />

        <path
          d="M86 58 C92 58 92 69 85 70"
          fill="none"
          stroke="#c8c0b7"
          strokeWidth="1.3"
        />

        {/* Eyes */}
        <path
          d="M46 60 Q50 57 54 60"
          fill="none"
          stroke="#b9b1aa"
          strokeWidth="1.2"
        />

        <path
          d="M66 60 Q70 57 74 60"
          fill="none"
          stroke="#b9b1aa"
          strokeWidth="1.2"
        />

        {/* Nose */}
        <path
          d="M60 61 L57 74 L62 74"
          fill="none"
          stroke="#c1b9b0"
          strokeWidth="1.1"
        />

        {/* Mouth */}
        <path
          d="M53 84 Q60 87 67 84"
          fill="none"
          stroke="#bcb4ac"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}