"use client";
import React from "react";

const solutions = [
  {
    title: "Oxygen Laser Therapy",
    img: "/Oxygen-Laser-Theraphy.png",
    desc: "Oxygen laser therapy soothes your scalp, eliminates dryness and frizz, and strengthens hair to prevent breakage. Experience a noticeable reduction in hair fall under just a few sessions, all while feeling revitalized and healthy.",
  },
  {
    title: "Cosmetic Hair Systems",
    img: "/Cosmetic-Hair-Systems.png",
    desc: "Get the natural, full head of hair you deserve. Our cosmetic hair systems are lightweight, breathable, and completely customizable for a perfect look. Enjoy the freedom of fullness without any invasive application.",
  },
  {
    title: "Mesotherapy",
    img: "/Mesotherapy.png",
    desc: "This non-invasive treatment tackles hair loss at its root, stimulating growth, thickening strands, and improving overall scalp health. Enjoy healthier, fuller hair and regain confidence.",
  },
  {
    title: "Hair Transplant",
    img: "/Hair-Transplantll.png",
    desc: "Consider investing in a permanent, hassle-free solution with our hair transplantation procedure. Our advanced techniques ensure natural-looking results with minimal scarring and downtime.",
  },
  {
    title: "Beard Transplant",
    img: "/Beard-Transplant.png",
    desc: "Achieve fuller, well-defined beards with our beard transplant procedure. Custom-designed to suit your facial features, providing natural results and long-lasting fullness.",
  },
  {
    title: "Eyebrow Transplant",
    img: "/Eyebrow-Transplant.png",
    desc: "If you're looking for natural, fuller eyebrows, our eyebrow transplant technique delivers precise results. Designed to enhance your facial features and restore confidence.",
  },
];

const HairSolutionsExact = () => {
  return (
    <section className="w-full bg-white py-10 max-[470px]:py-6 md:py-10 lg:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 max-[470px]:mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-semibold text-[#e82625] mb-3 md:mb-4 px-4">
            Explore Our Highly Effective Hair Restoration Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-[18px] text-[#6b7280] max-w-[720px] mx-auto leading-relaxed md:leading-[1.7] px-4">
            Advanced GroHair offers a range of hair restoration solutions to combat
            different types of hair loss and achieve lasting results.
          </p>
        </div>

        {/* Cards Grid - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-lg md:rounded-[12px] p-5 md:p-4 bg-white
                         transition-all duration-300
                         hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="overflow-hidden rounded-lg md:rounded-[10px] mb-3 md:mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[220px] md:h-[240px] lg:h-[260px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="text-lg md:text-[19px] lg:text-[20px] font-semibold text-[#111827] mb-1.5 md:mb-2">
                {item.title}
              </h3>

              <p className="text-base md:text-[16px] text-[#6b7280] leading-relaxed md:leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
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

export default HairSolutionsExact;