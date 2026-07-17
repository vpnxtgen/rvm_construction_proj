import React from "react";

export default function Founder() {
  return (
    <section id="founder-section" className="py-20 bg-[#FAF8F5] dark:bg-[#111A3E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-lg text-rvm-gold tracking-widest uppercase pb-1 border-b border-rvm-gold/30 inline-block">
            About Founder
          </h2>
        </div>

        {/* Founder Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Image (Left side) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl bg-gradient-to-t from-black/80 via-black/20 to-transparent group border border-rvm-gold/20">
              <img
                src="/src/assets/images/Vishwas_Image.jpeg"
                alt="Vishwas Thyagaraja - Founder"
                className="w-full h-auto aspect-[4/5] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay labels directly on image as requested/shown in user screenshot */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <h3 className="font-display font-bold text-2xl tracking-wide">
                  Vishwas Thyagaraja
                </h3>
                <p className="text-xs sm:text-sm text-rvm-gold font-medium uppercase tracking-widest mt-1">
                  Founder
                </p>
              </div>
            </div>
          </div>

          {/* Founder Bio (Right side) */}
          <div className="lg:col-span-8 space-y-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            <p>
              As the Co-Founder of RVM Constructions, I am driven by a passion for creating exceptional residential and commercial spaces that stand the test of time. With a hands-on approach to project planning, execution, and client engagement, I ensure that every project reflects our commitment to quality, innovation, safety, and timely delivery.
            </p>
            <p>
              Throughout my journey, I have collaborated closely with architects, engineers, contractors, and clients to transform visions into thoughtfully designed and structurally sound spaces. I strongly believe that transparency, integrity, and customer satisfaction are the foundations of lasting success and the core values that define RVM Constructions.
            </p>
            <p>
              At RVM Constructions, we specialize in delivering durable, vastu-compliant, and cost-effective construction solutions tailored to our clients' needs. Our mission is to combine modern construction practices with uncompromising craftsmanship, building not just structures, but trust, relationships, and a legacy of excellence for generations to come.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
