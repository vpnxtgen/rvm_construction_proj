import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandItem {
  name: string;
  tagline: string;
  badge: string;
  logoUrl: string;
}

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const brands: BrandItem[] = [
    {
      name: "UltraTech",
      tagline: "India's No. 1 Cement",
      badge: "CEMENT",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2020/09/ultratech-cement-logo.png",
    },
    {
      name: "Adani ACC",
      tagline: "Cementing Trust",
      badge: "CONCRETE",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2020/09/acc-limited-logo.png",
    },
    {
      name: "Asian Paints",
      tagline: "Inspiring Beautiful Homes",
      badge: "COATINGS",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2023/05/asian-paints_logo-freelogovectors.net_.png",
    },
    {
      name: "Dulux",
      tagline: "Let's Colour Our World",
      badge: "FINISHES",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2021/07/dulux-logo.png",
    },
    {
      name: "Tata Steel",
      tagline: "Joy of Building Steel",
      badge: "REBAR STEEL",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2020/09/tata_steel_logo.png",
    },
    {
      name: "Birla White",
      tagline: "The Whitest White",
      badge: "WALL CARE",
      logoUrl: "https://www.freelogovectors.net/wp-content/uploads/2020/09/ultratech-cement-logo.png",
    },
    {
      name: "Jaquar",
      tagline: "Luxury Bath Fittings",
      badge: "FITTINGS",
      logoUrl: "https://cdn.brandfetch.io/idP20HEYHh/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
  ];

  // Dynamic items per view on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth < 1600) {
        setItemsPerView(5);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = brands.length;
  const maxIndex = Math.max(0, totalSlides - itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Keep autoPlay callback reference up to date
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  // Autoplay loop
  useEffect(() => {
    const timer = setInterval(() => {
      if (autoPlayRef.current) autoPlayRef.current();
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="brands-section" className="py-20 xl:py-28 bg-[#FAF8F5] dark:bg-[#111A3E] transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 text-center">
        
        {/* Carets and Section Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-rvm-gold text-sm font-semibold tracking-widest uppercase flex items-center gap-1.5 mb-2">
            <span>^</span>
            <span>Our Brands</span>
            <span>^</span>
          </div>
          
          {/* Sub-badge pill with gradient as shown in user screenshot */}
          <div className="bg-gradient-to-r from-[#D29F3E] to-[#E2851A] text-white px-8 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider shadow-md inline-block uppercase">
            Most Trusted & Loyal Partners
          </div>
        </div>

        {/* Brand Carousel Wrapper */}
        <div className="relative mt-12 max-w-[1600px] mx-auto px-8 group">
          
          {/* Outer Slider container */}
          <div className="overflow-hidden py-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  style={{ width: `calc(${100 / itemsPerView}% - ${(6 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  className="shrink-0 flex flex-col bg-white dark:bg-[#0B122C] border border-gray-100 dark:border-white/5 py-8 px-5 rounded-lg items-center text-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-72 xl:h-80"
                >
                  {/* Brand Logo Container */}
                  <div className="w-28 h-28 xl:w-32 xl:h-32 p-2 bg-gray-50 dark:bg-white/5 rounded-full mb-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <img
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Info */}
                  <div>
                    <span className="text-[9px] font-bold text-rvm-gold bg-rvm-gold/10 px-2 py-0.5 rounded-full tracking-wider uppercase">
                      {brand.badge}
                    </span>
                    <h4 className="font-display font-bold text-base xl:text-lg text-[#0B122C] dark:text-white mt-2 tracking-tight">
                      {brand.name}
                    </h4>
                    <p className="text-[10px] xl:text-xs text-gray-400 mt-1 leading-normal">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Navigation Chevron */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0B122C] text-[#0B122C] dark:text-white flex items-center justify-center shadow-md hover:shadow-lg border border-gray-100 dark:border-white/10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous Brand"
          >
            <ChevronLeft className="h-5 w-5 text-rvm-gold" />
          </button>

          {/* Right Navigation Chevron */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0B122C] text-[#0B122C] dark:text-white flex items-center justify-center shadow-md hover:shadow-lg border border-gray-100 dark:border-white/10 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next Brand"
          >
            <ChevronRight className="h-5 w-5 text-rvm-gold" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? "w-5 bg-rvm-gold" : "w-1.5 bg-gray-300 dark:bg-white/20"
              }`}
              aria-label={`Go to brand group ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}