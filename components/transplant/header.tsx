// components/GrohairTopBar.tsx
"use client";

import Image from "next/image";

type Props = {
  logoSrc?: string;
  phone?: string;   // "+91 7409256789"
  buttonText?: string; // "Call Now"
};

export default function GrohairTopBar({
  logoSrc = "https://ik.imagekit.io/cbvg612cb/public/ambatur-logo.jpg?updatedAt=1773379062806",
  phone = "+91 7409256789",
  buttonText = "Call Now",
}: Props) {
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  const handleCallClick = () => {
    // onClick call
    window.location.href = telHref;
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      {/* Spacer - Adjusted for larger logo on desktop */}
      <div className="h-[58px] xs:h-[60px] sm:h-[62px] md:h-[64px] lg:h-[72px] xl:h-[76px] 2xl:h-[84px]" />

      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="mx-auto w-full max-w-screen-2xl px-4 xs:px-5 sm:px-6 md:px-10 lg:px-20 xl:px-28 2xl:px-36">
          <div className="flex items-center justify-between py-2 xs:py-2 sm:py-2 md:py-2 lg:py-2.5 xl:py-2.5 2xl:py-3">
            {/* Left: Logo - Significantly larger on larger screens */}
            <div className="flex items-center">
              <div className="relative h-[40px] w-[140px] xs:h-[42px] xs:w-[150px]
                            sm:h-[44px] sm:w-[160px] md:h-[46px] md:w-[170px]
                            lg:h-[50px] lg:w-[200px] xl:h-[54px] xl:w-[220px]
                            2xl:h-[58px] 2xl:w-[240px]">
                <Image
                  src={logoSrc}
                  alt="Advanced GloSkin"
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 170px, (max-width: 1280px) 200px, (max-width: 1536px) 220px, 240px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Right: Call Now button - Oval/Pill shape */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleCallClick}
                aria-label={`Call ${phone}`}
                className="
                  inline-flex items-center justify-center
                  text-white font-bold
                  whitespace-nowrap
                  transition-all duration-200
                  hover:scale-[1.03]
                  active:scale-[0.98]
                  hover:shadow-lg
                  px-5 py-2
                  xs:px-5 xs:py-2
                  sm:px-6 sm:py-2
                  md:px-5 md:py-2
                  lg:px-6 lg:py-2.5
                  xl:px-6 xl:py-2.5
                  2xl:px-7 2xl:py-2.5
                  cursor-pointer
                "
                style={{
                  backgroundColor: "#ea2424",
                  borderRadius: "9999px", // This creates the oval/pill shape
                }}
              >
                {/* Phone icon - Reduced on desktop */}
                <svg
                  className="
                    w-4 h-4
                    xs:w-4 xs:h-4
                    sm:w-4.5 sm:h-4.5
                    md:w-4 md:h-4
                    lg:w-4 lg:h-4
                    xl:w-4 xl:h-4
                    2xl:w-4.5 2xl:h-4.5
                    mr-2 xs:mr-2 sm:mr-2.5 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2.5
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.4 22 2 13.6 2 3c0-.6.4-1 1-1h4.2c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="
                  text-sm xs:text-sm sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-base
                  font-semibold
                ">
                  {buttonText}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}