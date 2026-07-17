import React, { useState, useEffect } from "react";
import { X, CheckCircle, Calculator, Download, Check, ExternalLink, Calendar, Smartphone } from "lucide-react";
import { Package, RoadmapStep } from "../data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Success Modal
interface SuccessModalProps extends ModalProps {
  details: { name: string; phone: string; location: string } | null;
}

export function SuccessModal({ isOpen, onClose, details }: SuccessModalProps) {
  if (!isOpen || !details) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111A3E] border border-rvm-gold/30 text-white max-w-md w-full p-6 sm:p-8 rounded-sm shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-rvm-gold/15 border border-rvm-gold/30 text-rvm-gold mb-2">
            <CheckCircle className="h-10 w-10 animate-pulse" />
          </div>

          <h3 className="font-display font-bold text-2xl text-white">
            Enquiry Submitted!
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            Thank you, <span className="font-semibold text-white">{details.name}</span>. Your requirement has been registered. An expert architect from our <span className="text-rvm-gold font-medium">{details.location}</span> office will contact you on <span className="font-semibold text-white">{details.phone}</span> within 24 business hours.
          </p>

          <div className="pt-4 border-t border-white/5 space-y-2 text-left text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Location Center:</span>
              <span className="text-white font-medium">{details.location}</span>
            </div>
            <div className="flex justify-between">
              <span>Reference Code:</span>
              <span className="text-rvm-gold font-mono uppercase">RVM-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] py-3 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300 mt-4"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}

// 2. Step Detail Modal
interface StepModalProps extends ModalProps {
  step: RoadmapStep | null;
}

export function StepModal({ isOpen, onClose, step }: StepModalProps) {
  if (!isOpen || !step) return null;

  const milestoneChecklists: Record<string, string[]> = {
    "01": [
      "Site feasibility report and dimensional analysis",
      "One-on-one consultation with senior structural architect",
      "Initial cost estimation based on carpet area",
      "Project timeline definition and milestones layout"
    ],
    "02": [
      "Vaastu-compliant custom architectural floor plans",
      "Interactive 3D elevation renders and layouts",
      "Virtual Reality walk-through experience set up",
      "Detailed structural, electrical, and plumbing engineering designs"
    ],
    "03": [
      "Legally-binding contracts with zero price escalation clauses",
      "Schedule of materials detailing every brand and quality grade",
      "Detailed payment schedules synchronized with structural phases",
      "Local municipal permission and approvals documentation assistance"
    ],
    "04": [
      "Excavation, foundation laying, and plinth beam construction",
      "RCC columns, framing structure, and brickwork updates",
      "Real-time progress dashboard on our RVM Homeowner App",
      "Daily material delivery checks and curing process logs"
    ],
    "05": [
      "Independent 350+ point quality audits by project management unit",
      "Architect visits at critical structural junctions",
      "Client site visits with structured progress report cards",
      "Soil, cement, and concrete strength testing certificate registry"
    ],
    "06": [
      "Complete deep cleaning and finishing audits of the entire site",
      "Comprehensive Handover Kit with all structural drawings",
      "Handover of manufacturer warranties and building certificates",
      "RVM 10-Year Structural Warranty certificate activation"
    ]
  };

  const checklist = milestoneChecklists[step.number] || [
    "Expert construction management and material checks",
    "Complete transparency and scheduled review cycles"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111A3E] border border-white/10 text-white max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="font-display font-bold text-4xl text-rvm-gold/30">
              {step.number}
            </span>
            <div>
              <p className="text-[10px] tracking-widest text-rvm-gold uppercase font-semibold">PROCESS MILESTONE</p>
              <h3 className="font-display font-bold text-xl text-white tracking-wide">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
            {step.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              WHAT WE GUARANTEE IN THIS PHASE:
            </h4>
            
            <ul className="space-y-2.5">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs">
                  <Check className="h-4 w-4 text-rvm-gold shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-light leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300 mt-2"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
}

// 3. Calculator and Booking Modal (Choose Plan)
interface BookingModalProps extends ModalProps {
  pkg: Package | null;
  onSuccessSubmit: (details: { name: string; phone: string; location: string }) => void;
}

export function BookingModal({ isOpen, onClose, pkg, onSuccessSubmit }: BookingModalProps) {
  const [area, setArea] = useState<number>(1800);
  const [bookName, setBookName] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookLocation, setBookLocation] = useState("");
  const [isCalculated, setIsCalculated] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (pkg) {
      setBookLocation("");
      setErrorMsg("");
    }
  }, [pkg]);

  if (!isOpen || !pkg) return null;

  // Clean raw price (e.g. ₹1,899 -> 1899)
  const pricePerSqft = parseInt(pkg.price.replace(/[^\d]/g, ""));
  const estimatedCost = area * pricePerSqft;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    if (!bookPhone.trim()) {
      setErrorMsg("Please enter your phone number");
      return;
    }
    if (bookPhone.trim().length < 10) {
      setErrorMsg("Please enter a valid phone number");
      return;
    }
    if (!bookLocation) {
      setErrorMsg("Please select a target construction city");
      return;
    }

    setErrorMsg("");
    onClose();
    onSuccessSubmit({
      name: bookName,
      phone: bookPhone,
      location: `${bookLocation} (${pkg.name} Package, ${area} sqft, Est: ₹${estimatedCost.toLocaleString("en-IN")})`
    });

    setBookName("");
    setBookPhone("");
    setBookLocation("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-[#111A3E] border border-rvm-gold/30 text-white max-w-xl w-full p-6 sm:p-8 rounded-sm shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-white/5 pb-4">
            <span className="bg-rvm-gold/15 border border-rvm-gold/30 text-rvm-gold text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
              {pkg.name} Package Selector
            </span>
            <h3 className="font-display font-bold text-2xl text-white tracking-wide mt-3">
              Configure Your Estimate
            </h3>
          </div>

          {/* Interactive Calculator Section */}
          <div className="bg-[#0B122C] border border-white/5 p-5 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5 uppercase tracking-wide">
                <Calculator className="h-4 w-4 text-rvm-gold" />
                BUILT-UP AREA CALCULATOR
              </span>
              <span className="font-display font-bold text-sm text-rvm-gold">
                {pkg.price} / sqft
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Plot / Carpet Builtup Area:</span>
                <span className="font-semibold text-white">{area} SQFT</span>
              </div>
              <input
                type="range"
                min={800}
                max={6000}
                step={50}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-rvm-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-light">
                <span>800 sqft</span>
                <span>3,000 sqft</span>
                <span>6,000 sqft</span>
              </div>
            </div>

            {/* Dynamic Result Box */}
            <div className="bg-white/5 p-4 rounded-sm flex justify-between items-center border-l-2 border-rvm-gold">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">ESTIMATED TOTAL BUILDING COST</p>
                <p className="text-xs text-gray-500 font-light mt-0.5">Civil structures, basics, standard finishing *</p>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-2xl text-white tracking-tight">
                  ₹{estimatedCost.toLocaleString("en-IN")}
                </p>
                <p className="text-[10px] text-rvm-gold font-light mt-0.5">Turnkey project cost</p>
              </div>
            </div>
          </div>

          {/* Contact Reservation Form */}
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Reserve This Package Rate & Consultation
            </h4>

            {errorMsg && (
              <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-sm text-xs text-red-200">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="YOUR NAME *"
                value={bookName}
                onChange={(e) => {
                  setBookName(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                className="bg-white/5 border border-white/10 focus:border-rvm-gold rounded-sm px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-400 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="PHONE NUMBER *"
                value={bookPhone}
                onChange={(e) => {
                  setBookPhone(e.target.value.replace(/\D/g, ""));
                  if (errorMsg) setErrorMsg("");
                }}
                maxLength={15}
                className="bg-white/5 border border-white/10 focus:border-rvm-gold rounded-sm px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-400 outline-none transition-all"
              />
            </div>

            <div>
              <select
                value={bookLocation}
                onChange={(e) => {
                  setBookLocation(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                className="w-full bg-[#111A3E] border border-white/10 focus:border-rvm-gold rounded-sm px-4 py-3 text-xs sm:text-sm text-white outline-none cursor-pointer appearance-none"
              >
                <option value="" disabled>SELECT TARGET CITY *</option>
                <option value="Bengaluru">Bengaluru Hub (H.O)</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <button
                type="submit"
                className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] py-3 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300"
              >
                PROCEED WITH RVM ESTIMATION
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// 4. Download Brochure Modal
export function BrochureModal({ isOpen, onClose }: ModalProps) {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadedIndices, setDownloadedIndices] = useState<number[]>([]);

  const brochures = [
    { name: "Standard Architectural Brochure", size: "4.2 MB", type: "PDF" },
    { name: "Cost estimation & materials schedule", size: "2.8 MB", type: "PDF" },
    { name: "Vaastu-compliant custom villa designs", size: "5.5 MB", type: "PDF" },
  ];

  const handleDownload = (idx: number) => {
    if (downloadingIndex !== null) return;
    setDownloadingIndex(idx);
    setDownloadProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (downloadingIndex !== null && downloadProgress < 100) {
      interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setDownloadedIndices((d) => [...d, downloadingIndex]);
            setDownloadingIndex(null);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [downloadingIndex, downloadProgress]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#111A3E] border border-white/10 text-white max-w-md w-full p-6 sm:p-8 rounded-sm shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-white/5 pb-3">
            <h3 className="font-display font-bold text-xl text-white">
              Download Media Center
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-normal font-light">
              Get the complete blueprint materials schedules and structural warranties.
            </p>
          </div>

          <div className="space-y-3.5">
            {brochures.map((item, idx) => {
              const isDownloading = downloadingIndex === idx;
              const isDownloaded = downloadedIndices.includes(idx);

              return (
                <div
                  key={idx}
                  className="bg-[#0B122C] border border-white/5 p-4 rounded-sm flex flex-col justify-between space-y-3"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-xs sm:text-sm text-white leading-normal">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase font-medium">
                        {item.type} • {item.size}
                      </p>
                    </div>

                    <button
                      disabled={isDownloading}
                      onClick={() => handleDownload(idx)}
                      className={`p-2 rounded-sm shrink-0 transition-all ${
                        isDownloaded
                          ? "bg-emerald-900/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-rvm-gold text-[#0B122C] hover:bg-rvm-gold-hover"
                      }`}
                    >
                      {isDownloaded ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Progress bar */}
                  {isDownloading && (
                    <div className="space-y-1.5">
                      <div className="w-full bg-white/10 rounded-full h-1">
                        <div
                          className="bg-rvm-gold h-1 rounded-full transition-all duration-150"
                          style={{ width: `${downloadProgress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-gray-400 font-mono">
                        <span>DOWNLOADING BLUEPRINT...</span>
                        <span>{downloadProgress}%</span>
                      </div>
                    </div>
                  )}

                  {isDownloaded && (
                    <div className="text-[9px] text-emerald-400 font-semibold uppercase flex items-center gap-1">
                      <Check className="h-3.5 w-3.5" />
                      <span>Ready to view / Saved locally</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300 mt-2"
          >
            Close Media Center
          </button>
        </div>
      </div>
    </div>
  );
}

// 5. Portfolio Detail Modal (Know More About Us)
export function PortfolioModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-[#111A3E] border border-rvm-gold/30 text-white max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-white/5 pb-4">
            <span className="text-[10px] bg-rvm-gold/15 border border-rvm-gold/30 text-rvm-gold px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              COMPANY OVERVIEW
            </span>
            <h3 className="font-display font-bold text-2xl text-white tracking-wide mt-3">
              RVM Constructions Group
            </h3>
          </div>

          <div className="space-y-4 font-light text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p>
              Since our inception, RVM Constructions has established itself as India's preeminent custom-home building team. We offer an integrated, digital-first approach to architecture, engineering, project planning, and execution.
            </p>
            <p>
              We believe in <strong className="text-white font-medium">Architectural Honesty</strong> — delivering precisely what was planned with zero compromises on grade strength. Our team utilizes a combined staff of over 120 in-house civil engineers, licensed structural architects, Vaastu consultants, and dedicated quality controllers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#0B122C] p-4 border border-white/5 rounded-sm">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">In-house Tech</p>
              <p className="text-xs text-white font-medium mt-1">VR 3D Walkthroughs</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Quality Gates</p>
              <p className="text-xs text-white font-medium mt-1">350+ Points Audit</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Materials</p>
              <p className="text-xs text-white font-medium mt-1">Brand-locked Contracts</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Warranties</p>
              <p className="text-xs text-white font-medium mt-1">10-Year Structural</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs bg-rvm-gold/5 border border-rvm-gold/20 p-3 rounded-sm text-rvm-gold">
            <Calendar className="h-5 w-5 shrink-0" />
            <span>Ready to plan? Set up a physical meeting at any of our 4 local branches.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

  {/*return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-[#111A3E] border border-rvm-gold/30 text-white max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-white/5 pb-4">
            <span className="text-[10px] bg-rvm-gold/15 border border-rvm-gold/30 text-rvm-gold px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
              COMPANY OVERVIEW
            </span>
            <h3 className="font-display font-bold text-2xl text-white tracking-wide mt-3">
              RVM Constructions Group
            </h3>
          </div>

          <div className="space-y-4 font-light text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p>
              Since our inception, RVM Constructions has established itself as India's preeminent custom-home building team. We offer an integrated, digital-first approach to architecture, engineering, project planning, and execution.
            </p>
            <p>
              We believe in <strong className="text-white font-medium">Architectural Honesty</strong> — delivering precisely what was planned with zero compromises on grade strength. Our team utilizes a combined staff of over 120 in-house civil engineers, licensed structural architects, Vaastu consultants, and dedicated quality controllers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#0B122C] p-4 border border-white/5 rounded-sm">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">In-house Tech</p>
              <p className="text-xs text-white font-medium mt-1">VR 3D Walkthroughs</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Quality Gates</p>
              <p className="text-xs text-white font-medium mt-1">350+ Points Audit</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Materials</p>
              <p className="text-xs text-white font-medium mt-1">Brand-locked Contracts</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Warranties</p>
              <p className="text-xs text-white font-medium mt-1">10-Year Structural</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs bg-rvm-gold/5 border border-rvm-gold/20 p-3 rounded-sm text-rvm-gold">
            <Calendar className="h-5 w-5 shrink-0" />
            <span>Ready to plan? Set up a physical meeting at any of our 4 local branches.</span>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] py-3.5 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300"
          >
            Acknowledge Overview
          </button>
        </div>
      </div>
    </div>
  );
}*/}
