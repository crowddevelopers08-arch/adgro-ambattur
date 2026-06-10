"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `I had always struggled with thinning hair, and it affected my confidence. After hearing about Adgro Hair Ambattur, I decided to take the plunge and try their hair transplant services. From the moment I walked into the clinic, I was impressed with the professionalism and care of the team. The procedure was smooth, and the results were life-changing! My hair looks fuller, and I feel more confident than ever. Thank you, Adgro Hair Ambattur, for helping me reclaim my confidence!`,
    name: "- S. R. Vishwa Rajan",
    image:
      "https://ik.imagekit.io/cbvg612cb/public/Before-After-2amba.jpg?updatedAt=1773379064179",
  },
  {
    text: `I had tried every hair growth product out there with no success, and I was losing hope. Then I found Adgro Hair Ambattur and decided to give their hair transplant a chance. The staff made me feel at ease from the consultation to the procedure. The results have been amazing—my hair looks natural and thick again! I couldn't be happier with the transformation. Thanks to Adgro Hair Ambattur, I'm finally feeling like myself again!`,
    name: "- Adhil Ashik",
    image:
      "https://ik.imagekit.io/cbvg612cb/public/Before-After-6amba.jpg?updatedAt=1773379064239",
  },
  {
    text: `I was very skeptical at first, but the team at Adgro Hair Ambattur completely changed my perspective. The doctors explained every step of the process clearly, making sure I felt comfortable. Within months, I noticed significant regrowth and my hairline looked completely restored. The staff was kind, professional, and genuinely cared about my results. I would absolutely recommend Adgro Hair Ambattur to anyone dealing with hair loss!`,
    name: "- Karthik Selvam",
    image:
      "https://ik.imagekit.io/cbvg612cb/public/Before-After-3amba.jpg?updatedAt=1773379064179",
  },
  {
    text: `After years of dealing with hair loss, I finally decided to visit Adgro Hair Ambattur. The consultation was thorough and the team addressed all my concerns patiently. The treatment was comfortable and the recovery was faster than I expected. The transformation in my appearance has been remarkable—I look years younger! I am truly grateful to the entire team at Adgro Hair Ambattur for their outstanding work.`,
    name: "- Priya Nandakumar",
    image:
      "https://ik.imagekit.io/cbvg612cb/public/Before-After-5amba.jpg?updatedAt=1773379064239",
  },
];

export default function TestimonialCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <div className="w-full bg-[#fff7f7] max-w-8xl py-10 max-[470px]:py-6 mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-semibold mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4">
          Discover Why We're the{" "} 
          
              <span className="text-[#e82625]">Trusted Choice of Many!</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="relative px-0 sm:px-10">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full md:basis-1/2"
              >
                <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  {/* LEFT CONTENT */}
                  <div className="flex-1 order-2 sm:order-1 w-full flex flex-col h-full">
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed flex-1">
                      {item.text}
                    </p>
                    <div className="mt-auto">
                      <p className="mt-3 sm:mt-4 font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-orange-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex-shrink-0 order-1 sm:order-2 mx-auto sm:mx-0 self-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 lg:w-48 lg:h-56 xl:w-52 max-[470px]:w-[250px] xl:h-60 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* PREV BUTTON */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-[#e82625]" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
