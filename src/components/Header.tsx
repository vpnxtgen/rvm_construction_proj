import { useState, useEffect } from "react";
import { Menu, X, Phone, Building2, Sun, Moon } from "lucide-react";
import companyLogo  from "../assets/images/RVM_Construction_main_logo.png";

interface HeaderProps {
  onStartBuildingClick: () => void;
  onContactClick: () => void;
  onPackagesClick: () => void;
  onRoadmapClick: () => void;
  theme: string;
  onToggleTheme: () => void;
  onProjectsClick: () => void;

}

export default function Header({
  onStartBuildingClick,
  onContactClick,
  onPackagesClick,
  onRoadmapClick,
  theme,
  onToggleTheme,
  onProjectsClick
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (selector: string, callback?: () => void) => {
    setIsOpen(false);
    if (callback) {
      callback();
    } else {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B122C]/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5"
          : "bg-gradient-to-b from-[#0B122C]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="logo"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <header>
              {/* 2. Use the variable inside curly braces */}
              <img src={companyLogo} alt="Company Logo" width="200" height="100" />
            </header>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => handleLinkClick("#about-section")}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick("#roadmap-section", onRoadmapClick)}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => handleLinkClick("#projects-section", onProjectsClick)}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => handleLinkClick("#packages-section", onPackagesClick)}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              PACKAGES
            </button>
            <button
              onClick={() => handleLinkClick("#footer", onContactClick)}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="text-white hover:text-rvm-gold p-2 transition-colors rounded-full focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-rvm-gold" />
              ) : (
                <Moon className="h-5 w-5 text-white hover:text-rvm-gold" />
              )}
            </button>

            <a
              href="tel:+919876543210"
              className="text-white hover:text-rvm-gold flex items-center gap-1.5 text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4 text-rvm-gold" />
              <span>+91 98765 43210</span>
            </a>
            <button
              id="cta-start-building"
              onClick={onStartBuildingClick}
              className="bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] text-xs font-semibold tracking-wider px-5 py-2.5 rounded-sm transition-all duration-200 uppercase"
            >
              START BUILDING
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="text-white hover:text-rvm-gold p-2 transition-colors rounded-full focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-rvm-gold" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1 hover:text-rvm-gold transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#0B122C] border-t border-white/10 py-4 px-4 space-y-3 absolute top-full left-0 right-0 shadow-xl animate-fade-in"
        >
          <button
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="block w-full text-left text-white hover:text-rvm-gold py-2 text-sm font-medium"
          >
            HOME
          </button>
          <button
            onClick={() => handleLinkClick("#about-section")}
            className="block w-full text-left text-white hover:text-rvm-gold py-2 text-sm font-medium"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleLinkClick("#roadmap-section", onRoadmapClick)}
            className="block w-full text-left text-white hover:text-rvm-gold py-2 text-sm font-medium"
          >
            HOW IT WORKS
          </button>
          <button
              onClick={() => handleLinkClick("#projects-section", onProjectsClick)}
              className="text-white hover:text-rvm-gold text-sm font-medium tracking-wide transition-colors"
            >
              PROJECTS
            </button>
          <button
            onClick={() => handleLinkClick("#packages-section", onPackagesClick)}
            className="block w-full text-left text-white hover:text-rvm-gold py-2 text-sm font-medium"
          >
            PACKAGES
          </button>
          <button
            onClick={() => handleLinkClick("#footer", onContactClick)}
            className="block w-full text-left text-white hover:text-rvm-gold py-2 text-sm font-medium"
          >
            CONTACT
          </button>
          <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
            {/* Mobile Drawer Theme Toggle */}
            <button
              onClick={() => {
                onToggleTheme();
              }}
              className="flex items-center justify-between text-white hover:text-rvm-gold py-2 text-sm font-medium border-b border-white/5"
            >
              <span>THEME</span>
              <span className="flex items-center gap-1 text-xs text-rvm-gold">
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4" /> LIGHT MODE
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" /> DARK MODE
                  </>
                )}
              </span>
            </button>

            <a
              href="tel:+919876543210"
              className="text-white hover:text-rvm-gold flex items-center gap-2 text-sm font-medium py-1"
            >
              <Phone className="h-4 w-4 text-rvm-gold" />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onStartBuildingClick();
              }}
              className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] text-xs font-semibold tracking-wider py-3 rounded-sm text-center transition-all duration-200 uppercase"
            >
              START BUILDING
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
