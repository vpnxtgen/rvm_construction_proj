import React from "react";
import customFurtinuredesign    from "../assets/images/customfurtinuredesign.png";
import customInteriorDesignService    from "../assets/images/customInteriorDesignService.png";
import restortationbeforeAndAfter    from "../assets/images/renovation_before_after_1783993818914.jpg";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  fallback: string;
  isLarge?: boolean;
  isBeforeAfter?: boolean;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Residential Construction",
      description: "We build high-quality homes tailored to your vision, ensuring durability, functionality, and exceptional craftsmanship.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Construction Consultant",
      description: "Our expert consultation services guide you through every stage of your project, helping you plan, design, and build with confidence, clarity, and efficiency.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      fallback: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Interior Design Services",
      description: "Thoughtfully designed interiors that combine timeless aesthetics with modern functionality.",
      image: customInteriorDesignService,
      fallback: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Resdential Interior Design",
      description: "Transform your living and working spaces with innovative interior design solutions that blend style, comfort, and practicality.",
      image: "/src/assets/images/interior_design_luxury_1783993803474.jpg",
      fallback: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Custom Functional Furniture",
      description: "Transform your living and workspaces with innovative interior design solutions that seamlessly blend style, comfort, and functionality.",
      image: customFurtinuredesign,
      fallback: "https://www.istockphoto.com/photo/vintage-cozy-living-room-interior-with-yellow-sofa-white-wood-panelling-and-green-gm2201897278-619529170?searchscope=image%2Cfilm"
    },
    {
      title: "Renovation Services",
      description: "Upgrade and revitalize existing properties with our comprehensive renovation and remodeling services.",
      image: restortationbeforeAndAfter,
      fallback: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      isBeforeAfter: true
    }
  ];

  return (
    <section id="services-section" className="py-20 xl:py-28 bg-white dark:bg-[#0B122C] transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl xl:text-5xl text-rvm-gold tracking-tight leading-tight uppercase">
            Services
          </h2>
          <div className="w-16 h-1 bg-rvm-gold mx-auto mt-4 rounded-sm"></div>
        </div>

        {/* All 4 services in a single responsive grid — avoids a half-empty row on wide screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white dark:bg-[#111A3E] rounded-sm overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative h-64 xl:h-72 overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = service.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Before/After overlay labels — only for the renovation card */}
                {service.isBeforeAfter && (
                  <>
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">
                      Before
                    </div>
                    <div className="absolute top-2 right-2 bg-emerald-600/80 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">
                      After
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 xl:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg xl:text-xl text-[#0B122C] dark:text-white mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm xl:text-[15px] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}