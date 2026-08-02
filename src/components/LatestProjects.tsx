import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1Image  from "../assets/images/project_1.png";
import project2Image  from "../assets/images/project_2.png";
import project3Image  from "../assets/images/RVM_Proj_3.png";
interface ProjectItem {
  id: number;
  title: string;
  location: string;
  image: string;
  status: string;
}

export default function LatestProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "RVM luxury g+3 Standard alone home",
      location: "Bengaluru, India",
      image: project1Image,
      status: "Completed"
    },
    {
      id: 2,
      title: "RVM luxury g+2 Standard alone home",
      location: "Bengaluru, India",
      image: project2Image,
      status: "Completed" 
    },
    {
      id: 3,
      title: "RVM luxury g+3 Standard alone home",
      location: "Bengaluru, India",
      image:project3Image,
      status: "Completed"
    }
  ];

  // Show more cards per view on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.max(1, Math.ceil(projects.length / itemsPerView));

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalGroups);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  return (
    <section id="projects-section" className="py-16 xl:py-20 bg-white dark:bg-[#0B122C] transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl xl:text-4xl text-rvm-gold tracking-tight uppercase">
            Latest Projects
          </h2>
          <div className="w-14 h-1 bg-rvm-gold mx-auto mt-3 rounded-sm"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Projects Slider Row */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  style={{ width: `calc(${100 / itemsPerView}% - ${(20 * (itemsPerView - 1)) / itemsPerView}px)` }}
                  className="shrink-0 rounded-lg overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm group/item relative h-72 xl:h-80"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glassmorphism details footer on slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                    <h3 className="font-display font-bold text-sm tracking-wide">{project.title}</h3>
                    <p className="text-[10px] text-rvm-gold/90 font-medium tracking-wider mt-1">{project.location}</p>
                    <p className="text-xs font-bold text-rvm-gold/90 mt-1.5">{project.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B122C] dark:bg-[#111A3E]/90 dark:text-white flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous Projects"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0B122C] dark:bg-[#111A3E]/90 dark:text-white flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next Projects"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? "w-6 bg-rvm-gold" : "w-2 bg-gray-300 dark:bg-white/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}