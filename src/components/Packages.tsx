import { Check, Download } from "lucide-react";
import { PACKAGES, Package } from "../data";

interface PackagesProps {
  onChoosePlan: (pkg: Package) => void;
  onDownloadBrochure: () => void;
}

export default function Packages({ onChoosePlan, onDownloadBrochure }: PackagesProps) {
  return (
    
    <section id="packages-section" className="py-16 xl:py-20 bg-[#0B122C] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-5">
          <div className="space-y-2">
            <p className="font-sans font-semibold text-xs tracking-widest text-rvm-gold uppercase">
              OUR PACKAGES
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl xl:text-4xl text-white tracking-tight leading-tight">
              Construction Excellence for Every Ambition
            </h2>
          </div>
          
          {/*<div>
            <button
              onClick={onDownloadBrochure}
              className="inline-flex items-center space-x-2 border border-rvm-gold/40 hover:border-rvm-gold hover:bg-rvm-gold/5 text-rvm-gold text-xs font-semibold tracking-wider px-6 py-3.5 rounded-sm transition-all duration-300 uppercase"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD BROCHURE</span>
            </button>
          </div>*/}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch pt-3">
          {PACKAGES.map((pkg) => {
            const isGreen = pkg.id === "green-home";
            
            return (
              <div
                key={pkg.id}
                className={`${pkg.bgColor} relative flex flex-col justify-between p-6 xl:p-7 rounded-sm transition-all duration-300 ${
                  pkg.isPopular ? "hover:scale-105" : "hover:scale-[1.02]"
                }`}
              >
                {/* Popular Tag */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rvm-gold text-[#0B122C] text-[9px] font-extrabold tracking-widest px-3.5 py-1 rounded-full uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}

                {/* Package Head */}
                <div>
                  <h3 className={`font-display font-bold text-xl xl:text-2xl mb-3 ${isGreen ? "text-[#0B122C]" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-5 border-b border-white/10 pb-3">
                    <span className={`font-display font-extrabold text-2xl xl:text-3xl ${isGreen ? "text-[#0B122C]" : "text-rvm-gold"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xs ml-1 font-medium ${isGreen ? "text-gray-500" : "text-gray-400"}`}>
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs leading-normal">
                        <Check className="h-3.5 w-3.5 text-rvm-gold shrink-0 mt-0.5" />
                        <span className={isGreen ? "text-gray-600" : "text-gray-300"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Choose Plan CTA */}
                <div>
                  <button
                    onClick={() => onChoosePlan(pkg)}
                    className={`w-full py-3 font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm ${pkg.btnStyle}`}
                  >
                    CHOOSE PLAN
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}