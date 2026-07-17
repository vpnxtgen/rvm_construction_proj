import React from "react";

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
      title: "Interior Design",
      description: "Transform your living and working spaces with innovative interior design solutions that blend style, comfort, and practicality.",
      image: "/src/assets/images/interior_design_luxury_1783993803474.jpg",
      fallback: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Renovation Services",
      description: "Upgrade and revitalize existing properties with our comprehensive renovation and remodeling services.",
      image: "/src/assets/images/renovation_before_after_1783993818914.jpg",
      fallback: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
      isBeforeAfter: true
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-white dark:bg-[#0B122C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-rvm-gold tracking-tight leading-tight uppercase">
            Services
          </h2>
          <div className="w-16 h-1 bg-rvm-gold mx-auto mt-4 rounded-sm"></div>
        </div>

        {/* First Row: 3 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white dark:bg-[#111A3E] rounded-sm overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = service.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-[#0B122C] dark:text-white mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Renovation Services (With before/after style card) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col bg-white dark:bg-[#111A3E] rounded-sm overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 group">
            
            {/* Split Before/After layout */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src={services[3].image} 
                alt={services[3].title} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = services[3].fallback;
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlays for Before and After labels */}
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">
                Before
              </div>
              <div className="absolute top-2 right-2 bg-emerald-600/80 backdrop-blur-sm text-white px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider">
                After
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-[#0B122C] dark:text-white mb-2 tracking-wide">
                  {services[3].title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                  {services[3].description}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
