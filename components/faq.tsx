import React from "react";

const FAQExactReplica = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-[72px] items-center">

        {/* LEFT IMAGE BLOCK */}
        <div className="relative w-full">
          {/* Image Container */}
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="/genetic.jpg"
              alt="Medical Team"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Floating Play Button */}
          <div className="absolute -bottom-[26px] right-[36px]">
            <div className="w-[64px] h-[64px] rounded-full bg-[#00B6D9] flex items-center justify-center shadow-[0_12px_30px_rgba(0,182,217,0.35)]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EAF9FD] px-4 py-[6px] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#00B6D9] rounded-full"></span>
            <span className="text-[12px] tracking-widest font-semibold text-[#00B6D9]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] font-extrabold text-[#0B1B3B] mb-10">
            Popular Questions
          </h2>

          {/* Questions */}
          <div className="space-y-7">

            {[
              "Dental crown vs veneer: what’s the difference?",
              "How does root canal therapy preserve a tooth?",
              "Benefits of professional teeth whitening?",
              "How do dental sealants protect teeth?",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 pb-6 border-b border-[#E6EEF4]"
              >
                <div className="w-[26px] h-[26px] rounded-full border border-[#00B6D9] flex items-center justify-center text-[14px] font-semibold text-[#00B6D9]">
                  ?
                </div>
                <p className="text-[16px] font-medium text-[#0B1B3B]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-12 bg-[#00B6D9] text-white text-[15px] font-semibold px-10 py-[14px] rounded-full inline-flex items-center gap-2 shadow-[0_14px_30px_rgba(0,182,217,0.35)]">
            EXPLORE FAQS
            <span className="text-lg">↗</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default FAQExactReplica;
