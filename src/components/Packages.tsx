import { Check, Download } from "lucide-react";
import { PACKAGES, Package } from "../data";

interface PackagesProps {
  onChoosePlan: (pkg: Package) => void;
  onDownloadBrochure: () => void;
}

export default function Packages({ onChoosePlan, onDownloadBrochure }: PackagesProps) {
  return (
    <section id="packages-section" className="py-20 bg-[#0B122C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="space-y-2">
            <p className="font-sans font-semibold text-xs tracking-widest text-rvm-gold uppercase">
              OUR PACKAGES
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-4">
          {PACKAGES.map((pkg) => {
            const isGreen = pkg.id === "green-home";
            
            return (
              <div
                key={pkg.id}
                className={`${pkg.bgColor} flex flex-col justify-between p-8 rounded-sm transition-all duration-300 ${
                  pkg.isPopular ? "hover:scale-105" : "hover:scale-[1.02]"
                }`}
              >
                {/* Popular Tag */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-rvm-gold text-[#0B122C] text-[10px] font-extrabold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}

                {/* Package Head */}
                <div>
                  <h3 className={`font-display font-bold text-2xl mb-4 ${isGreen ? "text-[#0B122C]" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-6 border-b border-white/10 pb-4">
                    <span className={`font-display font-extrabold text-3xl ${isGreen ? "text-[#0B122C]" : "text-rvm-gold"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xs ml-1 font-medium ${isGreen ? "text-gray-500" : "text-gray-400"}`}>
                      {pkg.unit}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs leading-normal">
                        <Check className="h-4 w-4 text-rvm-gold shrink-0 mt-0.5" />
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
                    className={`w-full py-3.5 font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm ${pkg.btnStyle}`}
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
