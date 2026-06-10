import React from "react";
import Image from "next/image";

const cards = [
  {
    icon: "/icon-img-1.png",
    title: "FUE Hair Transplant Chennai",
    description:
      "Advanced follicular unit extraction technique with minimal scarring and faster healing.",
  },
  {
    icon: "/icon-img-2.png",
    title: "FUT Hair Transplant",
    description:
      "Ideal for higher graft requirements and maximum follicle extraction efficiency.",
  },
  {
    icon: "/icon-img-3.png",
    title: "Hair Grafting Treatment",
    description:
      "Precision hair graft transplantation for natural density and hairline restoration.",
  },
  {
    icon: "/icon-img-4.png",
    title: "Permanent Hair Transformation",
    description:
      "Long-lasting and natural-looking hair restoration solutions tailored for your scalp condition.",
  },
];

export default function CareSection() {
  return (
    <section className="py-16 max-sm:py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 max-sm:mb-6">
          <span className="text-[#e82625] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1f2430] leading-tight mb-4">
           Advanced Hair Transplant {" "}
              <span className="text-[#e82625]">Treatments</span>
          </h2>
          <p className="text-[#6b7280] text-[0.97rem] max-w-lg mx-auto leading-relaxed">
            Adgro Grohair has been providing advanced hair transplant solutions
            in Chennai, transforming lives with confidence and expertise.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden flex flex-col items-center text-center px-8 py-10"
            >
              {/* Top-to-bottom fill overlay on hover */}
              <div className="absolute inset-0 bg-[#e82625] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0" />

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={56}
                  height={56}
                  className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-bold text-[1.05rem] leading-snug mb-4 text-[#1f2430] group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed text-[#6b7280] group-hover:text-white/90 transition-colors duration-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
