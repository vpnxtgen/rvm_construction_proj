import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1Image  from "../assets/images/project_1.png";
import project2Image  from "../assets/images/project_2.png";

interface ProjectItem {
  id: number;
  title: string;
  location: string;
  image: string;
  status: string;
}

export default function LatestProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      title: "Minimalist Brick Tower",
      location: "Bengaluru, India",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      status: "Completed"
    },
    {
      id: 4,
      title: "Premium Luxury Villa",
      location: "Tumkur, India",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
      status: "Completed"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(projects.length / 2));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(projects.length / 2)) % Math.ceil(projects.length / 2));
  };

  return (
    <section id="projects-section" className="py-20 bg-white dark:bg-[#0B122C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-rvm-gold tracking-tight uppercase">
            Latest Projects
          </h2>
          <div className="w-16 h-1 bg-rvm-gold mx-auto mt-4 rounded-sm"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Projects Slider Row */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="w-full md:w-[calc(50%-12px)] shrink-0 rounded-lg overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm group/item relative h-96"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                    referrerPolicy="no-referrer"
                    style={{ aspectRatio: '4/3' , height: '400px'}} // Ensures consistent aspect ratio
                  />
                  {/* Glassmorphism details footer on slide */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                    <h3 className="font-display font-bold text-lg tracking-wide">{project.title}</h3>
                    <p className="text-xs text-rvm-gold/90 font-medium tracking-wider mt-1">{project.location}</p>
                    <p className="text-sm font-bold text-rvm-gold/90 mt-2">{project.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-[#0B122C] dark:bg-[#111A3E]/90 dark:text-white flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Previous Projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-[#0B122C] dark:bg-[#111A3E]/90 dark:text-white flex items-center justify-center shadow-lg cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Next Projects"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
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
