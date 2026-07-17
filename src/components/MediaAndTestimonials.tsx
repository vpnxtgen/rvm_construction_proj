import { Quote } from "lucide-react";
import { MEDIA_LOGOS, TESTIMONIALS } from "../data";

export default function MediaAndTestimonials() {
  return (
    <section id="media-testimonials-section" className="bg-[#FAF8F5] py-20">
      
      {/* Media Logo bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-gray-200">
        <p className="font-sans font-semibold text-[10px] tracking-widest text-center text-gray-400 uppercase mb-8">
          FEATURED IN MEDIA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-between opacity-70">
          {MEDIA_LOGOS.map((logo) => (
            <span
              key={logo}
              className="font-display font-bold text-lg md:text-xl text-gray-500 tracking-wider hover:text-rvm-gold transition-colors duration-300 select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <p className="font-sans font-semibold text-xs tracking-widest text-rvm-gold uppercase">
            TESTIMONIALS
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B122C] tracking-tight leading-tight">
            Listen To Their Experience With Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t, idx) => {
            const isDark = t.bgColor.includes("bg-[#0B122C]");
            
            return (
              <div
                key={idx}
                className={`${t.bgColor} p-8 sm:p-10 rounded-sm shadow-md flex flex-col justify-between relative transform hover:-translate-y-1 transition-all duration-300 min-h-[250px]`}
              >
                {/* Large decorative Quote icon */}
                <span className={`absolute top-6 right-8 font-serif font-bold text-7xl select-none leading-none opacity-20 ${
                  isDark ? "text-rvm-gold" : "text-rvm-gold"
                }`}>
                  ”
                </span>

                {/* Quote Text */}
                <div className="space-y-4">
                  <Quote className={`h-6 w-6 rotate-180 ${isDark ? "text-rvm-gold" : "text-rvm-gold"}`} />
                  <p className={`text-sm sm:text-base leading-relaxed font-light italic ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="flex items-center space-x-4 mt-8 border-t border-white/10 pt-4">
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-sm ${
                    isDark ? "bg-rvm-gold text-[#0B122C]" : "bg-[#0B122C] text-white"
                  }`}>
                    {t.avatarLetter}
                  </div>
                  <div>
                    <h4 className={`font-display font-bold text-sm ${
                      isDark ? "text-white" : "text-[#0B122C]"
                    }`}>
                      {t.author}
                    </h4>
                    <p className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {t.role}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
