import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle, Calculator, Download, Check, Calendar } from "lucide-react";
import { Package, RoadmapStep } from "../data";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
const API_URL = import.meta.env.VITE_API_URL;

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
// 3. Calculator and Booking Modal (Choose Plan)
interface BookingModalProps extends ModalProps {
  pkg: Package | null;
  onSuccessSubmit: (details: { name: string; phone: string; location: string }) => void;
}

export function BookingModal({ isOpen, onClose, pkg, onSuccessSubmit }: BookingModalProps) {

  // Quote form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [consent, setConsent] = useState(true);
  const [formError, setFormError] = useState("");
  const [area, setArea] = useState<number>(1800);
  const [submitting, setSubmitting] = useState(false);

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (pkg) {
      setFormError("");
    }
  }, [pkg]);

  // Render the Turnstile widget once, after Cloudflare's script has loaded.
  // Runs on every render regardless of isOpen, so it stays above the
  // early-return below (Rules of Hooks).
  useEffect(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
      });
    }
    // Clean up when the modal closes so it re-renders next open
    if (!isOpen && widgetIdRef.current) {
      window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }
  }, [isOpen]);

  if (!isOpen || !pkg) return null;

  // Clean raw price (e.g. ₹1,899 -> 1899)
  const pricePerSqft = parseInt(pkg.price.replace(/[^\d]/g, ""));
  const estimatedCost = area * pricePerSqft;

  const resetForm = () => {
    setName("");
    setPhone("");
    setLocation("");
    setConstructionType("");
    setPlotSize("");
    setFloors("");
    setBudget("");
    setRequirements("");
    setConsent(true);
    setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setFormError("Please enter a valid phone number");
      return;
    }
    if (!location) {
      setFormError("Please select your location");
      return;
    }
    if (!constructionType) {
      setFormError("Please select a construction type");
      return;
    }
    if (!requirements.trim() || requirements.trim().length < 3) {
      setFormError("Please explain your construction requirements (Min 3 chars)");
      return;
    }
    if (!consent) {
      setFormError("You must consent to receive communications to proceed");
      return;
    }

    // Turnstile check before hitting the API
    const turnstileToken = window.turnstile?.getResponse(widgetIdRef.current);
    if (!turnstileToken) {
      setFormError("Please complete the verification check before submitting.");
      return;
    }

    setFormError("");
    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          constructionType,
          plotSize,
          floors,
          budget,
          requirements,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFormError(data.message || "Something went wrong. Please try again.");
        window.turnstile?.reset(widgetIdRef.current);
        return;
      }

      // Close the booking form immediately on a successful submit
      onClose();

      // Hand off to the parent so it can show the SuccessModal
      onSuccessSubmit({
        name,
        phone: `+91 ${phone}`,
        location: `${location} (${constructionType}, ${plotSize || "Standard"} plot, ${floors || "G"} Floors, Est Budget: ${budget || "Flexible"})`
      });

      resetForm();
    } catch (err) {
      console.error("Lead submission error:", err);
      setFormError("Network error. Please check your connection and try again.");
      window.turnstile?.reset(widgetIdRef.current);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh] my-8">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Left Side Branding */}
          <div className="bg-gradient-to-b from-[#0a1f44] to-[#0d2d6b] md:w-[40%] flex flex-col items-center justify-center p-8 text-center shrink-0 text-white">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
              alt="RVM Constructions"
              className="w-32 h-32 object-cover rounded-lg mb-6 border-2 border-emerald-500/30"
            />
            <div className="space-y-1">
              <p className="font-display font-black text-6xl text-emerald-400 tracking-tight leading-none">
                5
              </p>
              <p className="text-xs text-emerald-400 font-light italic uppercase tracking-widest">
                Years of
              </p>
              <h4 className="font-display font-bold text-lg text-emerald-400">
                RVM Constructions™
              </h4>
              <p className="text-[10px] text-gray-400 font-light italic mt-4 tracking-wider">
                Let's build your dream home!
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white text-gray-700">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1f44] tracking-tight leading-tight">
              Stop Dreaming and Start Building.
            </h3>
            <p className="text-emerald-500 text-sm font-semibold mt-1 mb-6">
              Contact Us Today!
            </p>

            {formError && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-semibold">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-800 focus:border-b-2 focus:border-emerald-600 outline-none bg-transparent transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Phone No <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border-b border-emerald-500">
                  <span className="text-xs sm:text-sm text-gray-600 pr-2 pb-1 font-medium flex items-center gap-1">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    maxLength={10}
                    placeholder="81234 56789"
                    className="w-full py-2 text-xs sm:text-sm text-gray-800 outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">--Select Location--</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                </div>

                {/* Construction Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Construction Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={constructionType}
                    onChange={(e) => setConstructionType(e.target.value)}
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">--Select Construction Type--</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Extension / Addition">Extension / Addition</option>
                    <option value="Interior Design">Interior Design</option>
                  </select>
                </div>

                {/* Plot Size */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Plot Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={plotSize}
                    onChange={(e) => setPlotSize(e.target.value)}
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">--Select Plot Size--</option>
                    <option value="Below 1000 sq ft">Below 1000 sq ft</option>
                    <option value="1000 - 1500 sq ft">1000 - 1500 sq ft</option>
                    <option value="1500 - 2000 sq ft">1500 - 2000 sq ft</option>
                    <option value="2000 - 3000 sq ft">2000 - 3000 sq ft</option>
                    <option value="Above 3000 sq ft">Above 3000 sq ft</option>
                  </select>
                </div>

                {/* Floors */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Number of Floors <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">--Select Number of Floors--</option>
                    <option value="Ground Floor (G)">Ground Floor (G)</option>
                    <option value="G + 1">G + 1</option>
                    <option value="G + 2">G + 2</option>
                    <option value="G + 3">G + 3</option>
                    <option value="G + 4 & above">G + 4 & above</option>
                  </select>
                </div>
              </div>

              {/* Approximate Budget */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Approximate Budget <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="">--Select Approximate Budget--</option>
                  <option value="Below ₹20 Lakhs">Below ₹20 Lakhs</option>
                  <option value="₹20 - 40 Lakhs">₹20 - 40 Lakhs</option>
                  <option value="₹40 - 60 Lakhs">₹40 - 60 Lakhs</option>
                  <option value="₹60 - 80 Lakhs">₹60 - 80 Lakhs</option>
                  <option value="₹80 Lakhs - 1 Crore">₹80 Lakhs - 1 Crore</option>
                  <option value="Above 1 Crore">Above 1 Crore</option>
                </select>
              </div>

              {/* Requirements */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Construction Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Minimum 3 Characters detailing requirements..."
                  rows={2}
                  className="w-full border-b border-emerald-500 py-1 text-xs sm:text-sm text-gray-800 outline-none resize-none bg-transparent font-sans"
                />
              </div>

              {/* Consent */}
              <div className="flex gap-2.5 items-start pt-2">
                <input
                  type="checkbox"
                  id="ws-consent-booking"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 shrink-0 accent-emerald-500 h-4 w-4 rounded cursor-pointer"
                />
                <label htmlFor="ws-consent-booking" className="text-[10px] sm:text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                  I authorize RVM Constructions & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
                </label>
              </div>

              {/* Turnstile widget */}
              <div ref={turnstileRef}></div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-lg text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 shadow-md uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh] my-8">

            {/* Close Button */}
             <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

            {/* Left Side Branding */}
            <div className="bg-gradient-to-b from-[#0a1f44] to-[#0d2d6b] md:w-[40%] flex flex-col items-center justify-center p-8 text-center shrink-0 text-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
                alt="RVM Constructions"
                className="w-32 h-32 object-cover rounded-lg mb-6 border-2 border-emerald-500/30"
              />
              <div className="space-y-1">
                <p className="font-display font-black text-6xl text-emerald-400 tracking-tight leading-none">
                  5
                </p>
                <p className="text-xs text-emerald-400 font-light italic uppercase tracking-widest">
                  Years of
                </p>
                <h4 className="font-display font-bold text-lg text-emerald-400">
                  RVM Constructions™
                </h4>
                <p className="text-[10px] text-gray-400 font-light italic mt-4 tracking-wider">
                  Let's build your dream home!
                </p>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white text-gray-700">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1f44] tracking-tight leading-tight">
                Stop Dreaming and Start Building.
              </h3>
              <p className="text-emerald-500 text-sm font-semibold mt-1 mb-6">
                Contact Us Today!
              </p>

              {formError && (
                <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-semibold">
                  {formError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-800 focus:border-b-2 focus:border-emerald-600 outline-none bg-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Phone No <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border-b border-emerald-500">
                    <span className="text-xs sm:text-sm text-gray-600 pr-2 pb-1 font-medium flex items-center gap-1">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      maxLength={10}
                      placeholder="81234 56789"
                      className="w-full py-2 text-xs sm:text-sm text-gray-800 outline-none bg-transparent"
                    />
                  </div>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0a1f44] block">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">--Select Location--</option>
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>

                  {/* Construction Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0a1f44] block">
                      Construction Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={constructionType}
                      onChange={(e) => setConstructionType(e.target.value)}
                      className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">--Select Construction Type--</option>
                      <option value="New Construction">New Construction</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Extension / Addition">Extension / Addition</option>
                      <option value="Interior Design">Interior Design</option>
                    </select>
                  </div>

                  {/* Plot Size */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0a1f44] block">
                      Plot Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={plotSize}
                      onChange={(e) => setPlotSize(e.target.value)}
                      className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">--Select Plot Size--</option>
                      <option value="Below 1000 sq ft">Below 1000 sq ft</option>
                      <option value="1000 - 1500 sq ft">1000 - 1500 sq ft</option>
                      <option value="1500 - 2000 sq ft">1500 - 2000 sq ft</option>
                      <option value="2000 - 3000 sq ft">2000 - 3000 sq ft</option>
                      <option value="Above 3000 sq ft">Above 3000 sq ft</option>
                    </select>
                  </div>

                  {/* Floors */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0a1f44] block">
                      Number of Floors <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={floors}
                      onChange={(e) => setFloors(e.target.value)}
                      className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">--Select Number of Floors--</option>
                      <option value="Ground Floor (G)">Ground Floor (G)</option>
                      <option value="G + 1">G + 1</option>
                      <option value="G + 2">G + 2</option>
                      <option value="G + 3">G + 3</option>
                      <option value="G + 4 & above">G + 4 & above</option>
                    </select>
                  </div>
                </div>

                {/* Approximate Budget */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Approximate Budget <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                  >
                    <option value="">--Select Approximate Budget--</option>
                    <option value="Below ₹20 Lakhs">Below ₹20 Lakhs</option>
                    <option value="₹20 - 40 Lakhs">₹20 - 40 Lakhs</option>
                    <option value="₹40 - 60 Lakhs">₹40 - 60 Lakhs</option>
                    <option value="₹60 - 80 Lakhs">₹60 - 80 Lakhs</option>
                    <option value="₹80 Lakhs - 1 Crore">₹80 Lakhs - 1 Crore</option>
                    <option value="Above 1 Crore">Above 1 Crore</option>
                  </select>
                </div>

                {/* Requirements */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0a1f44] block">
                    Construction Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Minimum 3 Characters detailing requirements..."
                    rows={2}
                    className="w-full border-b border-emerald-500 py-1 text-xs sm:text-sm text-gray-800 outline-none resize-none bg-transparent font-sans"
                  />
                </div>

                {/* Consent */}
                <div className="flex gap-2.5 items-start pt-2">
                  <input
                    type="checkbox"
                    id="ws-consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 shrink-0 accent-emerald-500 h-4 w-4 rounded cursor-pointer"
                  />
                  <label htmlFor="ws-consent" className="text-[10px] sm:text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                    I authorize RVM Constructions & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
                  </label>
                </div>

                {/* Turnstile widget — Added */}
                <div ref={turnstileRef}></div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-lg text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 shadow-md uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>

              </form>
            </div>

          </div>
      </div>
    </div>
  );
}

// 4. Quote Request Modal ("Stop Dreaming and Start Building")
interface QuoteModalProps extends ModalProps {
  onSuccessSubmit: (details: { name: string; phone: string; location: string }) => void;
}

export function QuoteModal({ isOpen, onClose, onSuccessSubmit }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [constructionType, setConstructionType] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("");
  const [budget, setBudget] = useState("");
  const [requirements, setRequirements] = useState("");
  const [consent, setConsent] = useState(true);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  // Render the Turnstile widget once, after Cloudflare's script has loaded.
  // This hook must run on every render regardless of isOpen, so it stays
  // above the early-return below (Rules of Hooks).
  useEffect(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
      });
    }
  }, []);

  if (!isOpen) return null;

  const resetForm = () => {
    setName("");
    setPhone("");
    setLocation("");
    setConstructionType("");
    setPlotSize("");
    setFloors("");
    setBudget("");
    setRequirements("");
    setConsent(true);
    setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setFormError("Please provide consent to be contacted before submitting.");
      return;
    }
    if (!name.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (phone.trim().length < 10) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!location) {
      setFormError("Please select a location");
      return;
    }
    if (!constructionType) {
      setFormError("Please select a construction type");
      return;
    }
    if (!plotSize) {
      setFormError("Please select a plot size");
      return;
    }
    if (!floors) {
      setFormError("Please select the number of floors");
      return;
    }
    if (!budget) {
      setFormError("Please select an approximate budget");
      return;
    }
    if (requirements.trim().length < 3) {
      setFormError("Please describe your requirements (minimum 3 characters)");
      return;
    }

    const turnstileToken = window.turnstile?.getResponse(widgetIdRef.current);
    if (!turnstileToken) {
      setFormError("Please complete the verification check before submitting.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          constructionType,
          plotSize,
          floors,
          budget,
          requirements,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setFormError(data.message || "Something went wrong. Please try again.");
        window.turnstile?.reset(widgetIdRef.current);
        return;
      }

      onSuccessSubmit({
        name,
        phone,
        location: `${location} (${constructionType}, ${plotSize}, ${floors}, Budget: ${budget})`,
      });

      resetForm();
      onClose();
    } catch (err) {
      console.error("Lead submission error:", err);
      setFormError("Network error. Please check your connection and try again.");
      window.turnstile?.reset(widgetIdRef.current);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="ws-quote-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh] my-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold cursor-pointer z-20 flex items-center justify-center transition-colors shadow-md"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left Side Branding */}
        <div className="bg-gradient-to-b from-[#0a1f44] to-[#0d2d6b] md:w-[40%] flex flex-col items-center justify-center p-8 text-center shrink-0 text-white">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
            alt="RVM Constructions"
            className="w-32 h-32 object-cover rounded-lg mb-6 border-2 border-emerald-500/30"
          />
          <div className="space-y-1">
            <p className="font-display font-black text-6xl text-emerald-400 tracking-tight leading-none">
              5
            </p>
            <p className="text-xs text-emerald-400 font-light italic uppercase tracking-widest">
              Years of
            </p>
            <h4 className="font-display font-bold text-lg text-emerald-400">
              RVM Constructions™
            </h4>
            <p className="text-[10px] text-gray-400 font-light italic mt-4 tracking-wider">
              Let's build your dream home!
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white text-gray-700">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0a1f44] tracking-tight leading-tight">
            Stop Dreaming and Start Building.
          </h3>
          <p className="text-emerald-500 text-sm font-semibold mt-1 mb-6">
            Contact Us Today!
          </p>

          {formError && (
            <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 font-semibold">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0a1f44] block">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-800 focus:border-b-2 focus:border-emerald-600 outline-none bg-transparent transition-all"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0a1f44] block">
                Phone No <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border-b border-emerald-500">
                <span className="text-xs sm:text-sm text-gray-600 pr-2 pb-1 font-medium flex items-center gap-1">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  maxLength={10}
                  placeholder="81234 56789"
                  className="w-full py-2 text-xs sm:text-sm text-gray-800 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Grid Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Location <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="">--Select Location--</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>
              </div>

              {/* Construction Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Construction Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={constructionType}
                  onChange={(e) => setConstructionType(e.target.value)}
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="">--Select Construction Type--</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Extension / Addition">Extension / Addition</option>
                  <option value="Interior Design">Interior Design</option>
                </select>
              </div>

              {/* Plot Size */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Plot Size <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={plotSize}
                  onChange={(e) => setPlotSize(e.target.value)}
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="">--Select Plot Size--</option>
                  <option value="Below 1000 sq ft">Below 1000 sq ft</option>
                  <option value="1000 - 1500 sq ft">1000 - 1500 sq ft</option>
                  <option value="1500 - 2000 sq ft">1500 - 2000 sq ft</option>
                  <option value="2000 - 3000 sq ft">2000 - 3000 sq ft</option>
                  <option value="Above 3000 sq ft">Above 3000 sq ft</option>
                </select>
              </div>

              {/* Floors */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0a1f44] block">
                  Number of Floors <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                  className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
                >
                  <option value="">--Select Number of Floors--</option>
                  <option value="Ground Floor (G)">Ground Floor (G)</option>
                  <option value="G + 1">G + 1</option>
                  <option value="G + 2">G + 2</option>
                  <option value="G + 3">G + 3</option>
                  <option value="G + 4 & above">G + 4 & above</option>
                </select>
              </div>
            </div>

            {/* Approximate Budget */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0a1f44] block">
                Approximate Budget <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border-b border-emerald-500 py-2 text-xs sm:text-sm text-gray-600 outline-none bg-transparent cursor-pointer"
              >
                <option value="">--Select Approximate Budget--</option>
                <option value="Below ₹20 Lakhs">Below ₹20 Lakhs</option>
                <option value="₹20 - 40 Lakhs">₹20 - 40 Lakhs</option>
                <option value="₹40 - 60 Lakhs">₹40 - 60 Lakhs</option>
                <option value="₹60 - 80 Lakhs">₹60 - 80 Lakhs</option>
                <option value="₹80 Lakhs - 1 Crore">₹80 Lakhs - 1 Crore</option>
                <option value="Above 1 Crore">Above 1 Crore</option>
              </select>
            </div>

            {/* Requirements */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#0a1f44] block">
                Construction Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Minimum 3 Characters detailing requirements..."
                rows={2}
                minLength={3}
                className="w-full border-b border-emerald-500 py-1 text-xs sm:text-sm text-gray-800 outline-none resize-none bg-transparent font-sans"
              />
            </div>

            {/* Consent */}
            <div className="flex gap-2.5 items-start pt-2">
              <input
                type="checkbox"
                id="ws-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 shrink-0 accent-emerald-500 h-4 w-4 rounded cursor-pointer"
              />
              <label htmlFor="ws-consent" className="text-[10px] sm:text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                I authorize RVM Constructions & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC settings.
              </label>
            </div>

            {/* Turnstile widget */}
            <div ref={turnstileRef}></div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-lg text-sm font-bold tracking-wider cursor-pointer transition-all duration-300 shadow-md uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}


// 5. Download Brochure Modal
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

// 6. Portfolio Detail Modal (Know More About Us)
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