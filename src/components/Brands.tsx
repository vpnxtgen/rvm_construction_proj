import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandItem {
  name: string;
  tagline: string;
  badge: string;
  svgIcon: React.ReactNode;
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
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#FFB800]" fill="currentColor">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
          <path d="M30 40 L50 25 L70 40 L50 55 Z" />
          <path d="M30 65 L50 50 L70 65 L50 80 Z" />
        </svg>
      )
    },
    {
      name: "Adani ACC",
      tagline: "Cementing Trust",
      badge: "CONCRETE",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#E11D48]" fill="currentColor">
          <rect x="15" y="15" width="70" height="70" rx="12" fillOpacity="0.1" stroke="currentColor" strokeWidth="4" />
          <polygon points="50,25 75,65 25,65" />
          <circle cx="50" cy="45" r="8" className="fill-white dark:fill-[#0B122C]" />
        </svg>
      )
    },
    {
      name: "Asian Paints",
      tagline: "Inspiring Beautiful Homes",
      badge: "COATINGS",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#0ea5e9]" fill="currentColor">
          <circle cx="50" cy="50" r="40" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
          <path d="M40 30 C 50 20, 60 20, 70 30 C 80 40, 80 50, 70 60 C 60 70, 40 70, 30 60 Z" />
          <path d="M30 60 L15 85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Dulux",
      tagline: "Let's Colour Our World",
      badge: "FINISHES",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#8b5cf6]" fill="currentColor">
          <circle cx="50" cy="50" r="40" fillOpacity="0.12" stroke="currentColor" strokeWidth="4" />
          <path d="M25 50 C25 35, 75 35, 75 50 C75 65, 25 65, 25 50 Z" />
          <path d="M35 50 Q 50 65, 65 50" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      name: "Kajaria",
      tagline: "India's No. 1 Tile Brand",
      badge: "CERAMICS",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#14b8a6]" fill="currentColor">
          <rect x="20" y="20" width="60" height="60" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="3" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="3" />
          <rect x="30" y="30" width="12" height="12" />
          <rect x="58" y="58" width="12" height="12" />
        </svg>
      )
    },
    {
      name: "Tata Tiscon",
      tagline: "Joy of Building Steel",
      badge: "REBAR STEEL",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#3b82f6]" fill="currentColor">
          <rect x="15" y="15" width="70" height="70" rx="8" fillOpacity="0.1" stroke="currentColor" strokeWidth="4" />
          <line x1="30" y1="25" x2="70" y2="75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <line x1="40" y1="20" x2="80" y2="70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          <line x1="20" y1="30" x2="60" y2="80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Birla White",
      tagline: "The Whitest White",
      badge: "WALL CARE",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#eab308]" fill="currentColor">
          <polygon points="50,15 85,80 15,80" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
          <polygon points="50,35 70,75 30,75" />
        </svg>
      )
    },
    {
      name: "Jaquar",
      tagline: "Luxury Bath Fittings",
      badge: "FITTINGS",
      svgIcon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#f97316]" fill="currentColor">
          <circle cx="50" cy="50" r="40" fillOpacity="0.1" stroke="currentColor" strokeWidth="4" />
          <path d="M50 20 C65 45, 75 60, 70 75 C65 85, 35 85, 30 75 C25 60, 35 45, 50 20 Z" />
        </svg>
      )
    }
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
      } else {
        setItemsPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = brands.length;
  const maxIndex = totalSlides - itemsPerView;

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
    <section id="brands-section" className="py-20 bg-[#FAF8F5] dark:bg-[#111A3E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
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
        <div className="relative mt-12 max-w-6xl mx-auto px-8 group">
          
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
                  className="shrink-0 flex flex-col bg-white dark:bg-[#0B122C] border border-gray-100 dark:border-white/5 py-8 px-5 rounded-lg items-center text-center justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-64"
                >
                  {/* Brand Logo Container */}
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-full mb-3 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {brand.svgIcon}
                  </div>

                  {/* Brand Info */}
                  <div>
                    <span className="text-[9px] font-bold text-rvm-gold bg-rvm-gold/10 px-2 py-0.5 rounded-full tracking-wider uppercase">
                      {brand.badge}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#0B122C] dark:text-white mt-2 tracking-tight">
                      {brand.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 mt-1 leading-normal">
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
