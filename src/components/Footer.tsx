import { Building2, Globe, Heart, Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="footer" className="bg-[#060B1C] text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & Description column */}
          <div className="lg:col-span-5 space-y-5">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleScrollToTop}
            >
              <div className="bg-rvm-gold p-1.5 rounded-sm">
                <Building2 className="h-5 w-5 text-[#0B122C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-white text-base leading-none">
                  RVM
                </span>
                <span className="font-sans font-medium tracking-widest text-rvm-gold text-[10px] leading-none mt-1">
                  CONSTRUCTIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-500 font-light">
              A one-stop solution for all your home construction needs, providing comprehensive turnkey solutions for your architectural desires. We deliver premium homes built on a foundation of trust, quality, and complete transparency.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="bg-white/5 hover:bg-rvm-gold hover:text-[#0B122C] text-gray-400 p-2 rounded-full transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="bg-white/5 hover:bg-rvm-gold hover:text-[#0B122C] text-gray-400 p-2 rounded-full transition-all duration-300"
                aria-label="Secure"
              >
                <Shield className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@rvmconstructions.com"
                className="bg-white/5 hover:bg-rvm-gold hover:text-[#0B122C] text-gray-400 p-2 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase">
              OUR OFFICE ADDRESS
            </h4>
            <div className="flex items-start space-x-2.5 text-xs sm:text-sm font-light leading-relaxed">
              <MapPin className="h-4 w-4 text-rvm-gold mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-white mb-1">RVM Constructions (H.O)</p>
                <p className="text-gray-400">
                  #45, 1st Main Road, Sector 6, <br />
                  HSR Layout, Bengaluru, <br />
                  Karnataka - 560102
                </p>
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest text-white uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-rvm-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-rvm-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-rvm-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-rvm-gold transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-600 gap-4">
          <div>
            <p>© {currentYear} RVM CONSTRUCTIONS. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex items-center space-x-1 uppercase tracking-widest text-[9px] sm:text-[10px] text-gray-500 font-medium">
            <span>SCENEBEAUTY HOMES PVT. LTD.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
