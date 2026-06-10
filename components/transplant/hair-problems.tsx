"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const problems = [
  {
    title: "Hair Transplant for Male Pattern Baldness",
    description:
      "Restore confidence with permanent hair transplant solutions for stage 3 hair loss and advanced baldness.",
    icon: "/icon-img-5.png",
  },
  {
    title: "Receding Hairline Hair Transplant",
    description:
      "Correct temple recession and restore youthful hairlines with advanced hair transplantation.",
    icon: "/icon-img-4.png",
  },
  {
    title: "Bald Spots Hair Transplant",
    description:
      "Treat patchy baldness and localized hair loss with targeted graft implantation.",
    icon: "/icon-img-3.png",
  },
  {
    title: "Thinning Crown Hair Transplant",
    description:
      "Improve crown density with customized FUE hair transplant procedures.",
    icon: "/icon-img-1.png",
  },
  {
    title: "Advanced Baldness Hair Transplant",
    description:
      "High graft-count procedures for severe hair loss and scalp coverage restoration.",
    icon: "/icon-img-2.png",
  },
];

export default function HairProblems() {
  const [api, setApi] = useState<CarouselApi>();

  // Auto-advance every 2.5s on mobile carousel
  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 2500);
    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="py-16 max-sm:py-6 px-4 sm:px-6 lg:px-8 bg-[#fff7f7]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 max-sm:mb-6">
          <span className="inline-flex items-center gap-2 text-[#e82625] text-xs font-bold tracking-[0.22em] uppercase mb-4 max-sm:mb-2">
            <span className="w-5 h-px bg-[#e82625]" />
            Conditions We Cover
            <span className="w-5 h-px bg-[#e82625]" />
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1f2430] leading-tight">
            Hair Problems{" "}
            <span className="text-[#e82625]">We Treat</span>
          </h2>
          <div className="mt-4 mx-auto w-12 h-1 rounded-full bg-[#e82625]" />
        </div>

        {/* ── MOBILE ONLY: Embla auto-scroll carousel ── */}
        <div className="sm:hidden">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {problems.map((item, i) => (
                <CarouselItem key={i} className="pl-3 basis-[88%]">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center gap-3 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#fff1f1] flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[#1f2430] font-bold text-[0.85rem] leading-snug">
                      {item.title}
                    </h3>
                    <div className="w-6 h-0.5 rounded-full bg-[#e82625]/40" />
                    <p className="text-[#6b7280] text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* ── DESKTOP ONLY: original grid (untouched) ── */}
        <div className="hidden sm:block">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-3 gap-5 mb-5">
            {problems.slice(0, 3).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-6 gap-5">
            <div className="col-start-2 col-span-2">
              <Card item={problems[3]} />
            </div>
            <div className="col-start-4 col-span-2">
              <Card item={problems[4]} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Card({ item }: { item: (typeof problems)[0] }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_6px_28px_rgba(232,38,37,0.11)] hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-[#fff1f1] flex items-center justify-center group-hover:bg-[#e82625] transition-colors duration-300">
        <Image
          src={item.icon}
          alt={item.title}
          width={36}
          height={36}
          className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
        />
      </div>
      <h3 className="text-[#1f2430] font-bold text-[0.95rem] leading-snug">
        {item.title}
      </h3>
      <div className="w-8 h-0.5 rounded-full bg-[#e82625]/25 group-hover:w-12 group-hover:bg-[#e82625] transition-all duration-300" />
      <p className="text-[#6b7280] text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
