import { Check } from "lucide-react";
import { useNavigate } from 'react-router-dom'; // Only import what you actually use

interface AboutProps {
  onLearnMoreClick?: () => void; // Made optional in case you only want router navigation
}

export default function About({ onLearnMoreClick }: AboutProps) {
  const navigate = useNavigate(); // 1. Properly initialize the hook

  // 2. Clear, scoped navigation handler function
  const handleNavigateToAboutUs = () => {
    // If you still have parent state modal logic to execute, run it first
    if (onLearnMoreClick) {
      onLearnMoreClick();
    }
    
    // Redirect to your absolute router path
    navigate('/About_us'); 
  };

  return (
    <section id="about-section" className="py-20 bg-white dark:bg-[#0B122C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image side (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
              <img
                src="/src/assets/images/rvm_construction_site_1783953351313.jpg"
                alt="Construction site"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square lg:aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Experience Badge overlay */}
            <div className="absolute bottom-6 right-6 lg:-right-6 bg-rvm-gold text-[#0B122C] p-6 rounded-sm shadow-xl max-w-[200px] text-center transform hover:scale-105 transition-transform duration-300">
              <p className="font-display font-bold text-3xl leading-none">10+</p>
              <p className="font-sans font-medium text-[10px] tracking-widest uppercase mt-2 leading-tight">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Content side (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="font-sans font-semibold text-xs tracking-widest text-rvm-gold uppercase">
                ABOUT RVM CONSTRUCTIONS
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B122C] dark:text-white tracking-tight leading-tight">
                One-Stop Solution for Your <br />
                <span className="text-rvm-gold">Dream Home Construction</span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              Our hands-on experience sets the stage for exceptional home building. With extensive expertise, we meet both your essential needs and professional standards, making us pioneers in the home construction industry.
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-rvm-gold/10 p-1.5 rounded-full mt-0.5">
                  <Check className="h-4 w-4 text-rvm-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B122C] dark:text-white uppercase tracking-wider">
                    SITE VISIT
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    Our expert team will visit your location, understand your requirements, and provide the best construction solutions tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-rvm-gold/10 p-1.5 rounded-full mt-0.5">
                  <Check className="h-4 w-4 text-rvm-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B122C] dark:text-white uppercase tracking-wider">
                    END-TO-END SUPPORT
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    From the initial consultation and planning to construction and final handover, we manage every stage of your dream home with complete transparency and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button linked to handler */}
            <div className="pt-4">
              <button
                onClick={handleNavigateToAboutUs}
                className="bg-[#0B122C] hover:bg-slate-800 dark:bg-rvm-gold dark:hover:bg-rvm-gold-hover dark:text-[#0B122C] text-white font-bold text-xs tracking-widest px-8 py-4 rounded-sm uppercase transition-all duration-300"
              >
                Know More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
