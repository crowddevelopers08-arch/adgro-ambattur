"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  { src: "/images/bfafs-imgs-1.png", alt: "Before After 1" },
  { src: "/images/bfafs-imgs-2.png", alt: "Before After 2" },
  { src: "/images/bfafs-imgs-4.png", alt: "Before After 3" },
  { src: "/images/bfafs-imgs-5.png", alt: "Before After 4" },
  { src: "/images/bfaf-img-7.png", alt: "Before After 5" },
  // { src: "/images/bfafs-imgs-6.png", alt: "Before After 6" },
];

const ImageGridCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update visible items based on screen size - SIMPLIFIED
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile
        setVisibleItems(1);
      } else if (width < 1024) { // Tablet
        setVisibleItems(2);
      } else { // Desktop
        setVisibleItems(3);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide(); // Swipe left
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // Swipe right
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Get images to display based on current index and visible items
  const getDisplayImages = () => {
    const displayImages = [];
    
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % images.length;
      displayImages.push(images[index]);
    }
    
    return displayImages;
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <section 
        className="bg-[#fff7f7] w-full px-4 sm:px-5 md:px-6 lg:px-8 py-6 sm:py-8 md:py-8 lg:py-8"
        style={{fontFamily: "'Outfit', sans-serif"}}
      >
        <div className="max-w-7xl mx-auto"style={{fontFamily: "'Outfit', sans-serif"}}>
          {/* Title */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
             Real {" "}
             <span className="text-[#e82625]">Results!</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Witness the transformation with our proven hair treatments
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Carousel Wrapper */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden mx-auto"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 transition-transform duration-500 ease-in-out">
                {getDisplayImages().map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className={`
                      flex-shrink-0 transition-all duration-300
                      ${visibleItems === 1 ? 'w-full max-w-[300px] sm:max-w-[320px]' : ''}
                      ${visibleItems === 2 ? 'w-[calc(50%-12px)] sm:w-[calc(50%-16px)] max-w-[340px] md:max-w-[360px]' : ''}
                      ${visibleItems === 3 ? 'w-[calc(33.333%-16px)] max-w-[380px]' : ''}
                    `}
                  >
                    <div
                      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto"
                      style={{
                        border: '3px solid #ea2424',
                        boxShadow: '0 4px 12px rgba(211, 49, 92, 0.15)',
                      }}
                    >
                      {/* MOBILE: Fixed aspect ratio container */}
                      <div className="relative w-full" style={{
                        aspectRatio: '4/3',
                        maxHeight: visibleItems === 1 ? '280px' :
                                   visibleItems === 2 ? '300px' : '340px'
                      }}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 300px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 380px"
                        />
                      </div>

                      {/* Google Review Badge — top-right inside card */}
                      <div className="absolute top-2 right-2 z-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-md px-2.5 py-1.5 flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <div>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, s) => (
                              <svg key={s} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-[9px] text-gray-500 leading-none mt-0.5">4.9 · 200+ Reviews</p>
                        </div>
                      </div>

                      {/* Pink overlay on hover */}
                      <div className="absolute inset-0 bg-[#ea2424] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - SIMPLIFIED for mobile */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={prevSlide}
                className={`
                  relative pointer-events-auto
                  bg-[#ea2424]/90 hover:bg-[#ea2424] 
                  p-2 sm:p-3 
                  rounded-full shadow-lg transition-colors z-10
                  ${visibleItems === 1 ? '-left-2 sm:-left-4' : ''}
                  ${visibleItems === 2 ? 'sm:-left-6' : ''}
                  ${visibleItems === 3 ? 'md:-left-8 lg:-left-12' : ''}
                `}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className={`
                  relative pointer-events-auto
                  bg-[#ea2424]/90 hover:bg-[#ea2424] 
                  p-2 sm:p-3 
                  rounded-full shadow-lg transition-colors z-10
                  ${visibleItems === 1 ? '-right-2 sm:-right-4' : ''}
                  ${visibleItems === 2 ? 'sm:-right-6' : ''}
                  ${visibleItems === 3 ? 'md:-right-8 lg:-right-12' : ''}
                `}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Dots Indicator - SIMPLIFIED */}
            <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8 space-x-2 sm:space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? "bg-[#ea2424] scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGridCarousel;