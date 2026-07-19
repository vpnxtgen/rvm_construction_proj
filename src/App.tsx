import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Founder from "./components/Founder";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";
import LatestProjects from "./components/LatestProjects";
import Packages from "./components/Packages";
import Brands from "./components/Brands";
import MediaAndTestimonials from "./components/MediaAndTestimonials";
import Footer from "./components/Footer";
import { SuccessModal, StepModal, BookingModal, BrochureModal, PortfolioModal} from "./components/InteractiveModals";
import { Package, RoadmapStep, PACKAGES } from "./data";
import { MessageSquare, PhoneCall, CheckCircle } from "lucide-react";

const message = encodeURIComponent(
          "Hi! I was browsing your website and wanted some information. Can you help me?"
        );

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Modal states
  const [successDetails, setSuccessDetails] = useState<{
    name: string;
    phone: string;
    location: string;
  } | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [selectedStep, setSelectedStep] = useState<RoadmapStep | null>(null);
  const [isStepOpen, setIsStepOpen] = useState(false);

  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [isPkgOpen, setIsPkgOpen] = useState(false);

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  // Floating button quick chat states
  const [showQuickHelp, setShowQuickHelp] = useState(false);
  const [quickPhone, setQuickPhone] = useState("");
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  // Handlers
  const handleConsultationSuccess = (details: {
    name: string;
    phone: string;
    location: string;
  }) => {
    setSuccessDetails(details);
    setIsSuccessOpen(true);
  };

  const handleStepClick = (step: RoadmapStep) => {
    setSelectedStep(step);
    setIsStepOpen(true);
  };

  const handleStartBuildingClick = () => {
    const premiumPkg = PACKAGES.find((p) => p.id === "premium") || PACKAGES[0];
    setSelectedPkg(premiumPkg);
    setIsPkgOpen(true);
  };

  const handleChoosePlan = (pkg: Package) => {
    setSelectedPkg(pkg);
    setIsPkgOpen(true);
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToPackages = () => {
    const element = document.querySelector("#packages-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToRoadmap = () => {
    const element = document.querySelector("#roadmap-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickHelpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim() || quickPhone.trim().length < 10) return;
    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickPhone("");
      setShowQuickHelp(false);
      handleConsultationSuccess({
        name: "Anonymous Chat Visitor",
        phone: quickPhone,
        location: "Virtual Consultation Center",
      });
    }, 1000);
  };

  return (
    <div className={`font-sans antialiased min-h-screen transition-colors duration-300 selection:bg-rvm-gold/30 selection:text-[#0B122C] ${
      theme === "dark" ? "dark bg-[#0B122C] text-white" : "bg-[#FAF8F5] text-[#0B122C]"
    }`}>
      
      {/* 1. Navbar / Header */}
      <Header
        onStartBuildingClick={handleStartBuildingClick}
        onContactClick={handleScrollToContact}
        onPackagesClick={handleScrollToPackages}
        onRoadmapClick={handleScrollToRoadmap}
        onProjectsClick={handleScrollToProjects}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Hero Section with dynamic Consultation Form */}
      <Hero
        onSuccessSubmit={handleConsultationSuccess}
        onContactClick={handleScrollToContact}
      />

      {/* 3. About Section with overlay experience badge */}
      <About onLearnMoreClick={() => setIsPortfolioOpen(true)} />

      

      {/* 3c. Services Section */}
      <Services />

      {/* 4. Roadmap / Process Section with discovery detail triggers */}
      <Roadmap onSuccessSubmit={handleConsultationSuccess} />

      {/* 4b. Latest Projects Slider Section */}
      <LatestProjects />

      {/* 5. Packages Selection Section with dynamic calculator pricing */}
      <Packages
        onChoosePlan={handleChoosePlan}
        onDownloadBrochure={() => setIsBrochureOpen(true)}
      />

      {/* 5b. Our Trusted Brands Section */}
      <Brands />

      {/* 6. Media and Customer Testimonials */}
      <MediaAndTestimonials />

      {/* 7. Footer containing secondary links and location points */}
      <Footer />

      {/* ==================== INTERACTIVE MODALS ==================== */}
      
      {/* Consultation success notification */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        details={successDetails}
      />

      {/* Roadmap step detail popup */}
      <StepModal
        isOpen={isStepOpen}
        onClose={() => setIsStepOpen(false)}
        step={selectedStep}
      />

      {/* Plan area calculator and consultation submit */}
      <BookingModal
        isOpen={isPkgOpen}
        onClose={() => setIsPkgOpen(false)}
        pkg={selectedPkg}
        onSuccessSubmit={handleConsultationSuccess}
      />

      {/* Material and layout brochure downloader */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Core corporate profile info popup */}
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />

      {/* ==================== FLOATING CONTACT CIRCLES ==================== */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        
        {/* Quick Help popup */}
        {showQuickHelp && (
          <div className="bg-[#111A3E] text-white border border-rvm-gold/30 p-5 rounded-sm shadow-2xl max-w-xs w-72 mb-2 animate-fade-in">
            <div className="flex justify-between items-start mb-3 border-b border-white/5 pb-2">
              <div>
                <h4 className="font-display font-bold text-sm text-white">Live Assist</h4>
                <p className="text-[10px] text-gray-400">Get answers instantly on WhatsApp</p>
              </div>
              <button
                onClick={() => setShowQuickHelp(false)}
                className="text-gray-400 hover:text-white"
              >
                &times;
              </button>
            </div>

            {quickSubmitted ? (
              <div className="text-center py-4 space-y-2">
                <CheckCircle className="h-8 w-8 text-rvm-gold mx-auto animate-bounce" />
                <p className="text-xs text-gray-300">Connecting to our helpdesk...</p>
              </div>
            ) : (
              <form onSubmit={handleQuickHelpSubmit} className="space-y-3">
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Enter your number and our lead design officer will WhatsApp or call you right now.
                </p>
                <input
                  type="tel"
                  placeholder="Your Phone Number *"
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value.replace(/\D/g, ""))}
                  maxLength={15}
                  className="w-full bg-[#0B122C] border border-white/10 text-xs px-3 py-2.5 rounded-sm text-white focus:border-rvm-gold outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] font-semibold text-[10px] py-2 rounded-sm uppercase tracking-wider"
                >
                  Initiate Chat
                </button>
              </form>
            )}
          </div>
        )}

        

        

        {/* WhatsApp Chat Trigger (Green) */}
        <button
            id="whatsapp-floating-btn"
            onClick={() =>
              window.open(
                `https://wa.me/918296777056?text=${message}`,
                "_blank"
              )
              /*window.open(
                "https://api.whatsapp.com/send/?phone=918296777056&text=Hi&type=phone_number&app_absent=0",
                "_blank"
              )*/
            }
            className="bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 relative group cursor-pointer"
            aria-label="WhatsApp Consultation"
          >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0B122C] text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase shadow-md pointer-events-none">
            WhatsApp Live Chat
          </span>
        </button>

        {/* Phone Call Trigger (Yellow) */}
        <a
          id="call-floating-btn"
          href="tel:+918296777056"
          className="bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
          aria-label="Call RVM Team"
        >
          <PhoneCall className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0B122C] text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase shadow-md pointer-events-none">
            Call Construction desk
          </span>
        </a>

      </div>

    </div>
  );
}

