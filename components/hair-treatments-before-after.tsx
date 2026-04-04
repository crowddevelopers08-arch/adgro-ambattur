"use client";

import React from "react";
import { BeforeAfter } from "@/components/drag";
import HairTreatmentsForm from "@/components/hair-treatments-form";

export default function HairTreatmentsBeforeAfter() {
  return (
    <div
      className="bg-gradient-to-b from-red-50 to-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      id="form"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[500px]">
              <BeforeAfter
                width="100%"
                height="500px"
                showLabels={true}
                beforeLabel="Before"
                afterLabel="After"
                defaultPosition={50}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[500px]">
              <HairTreatmentsForm />
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          Drag the slider to compare results • Book your appointment today
        </p>
      </div>
    </div>
  );
}
