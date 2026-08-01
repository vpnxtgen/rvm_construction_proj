import React, { useState } from "react";
import { ChevronDown, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { LOCATIONS, STATS } from "../data";

interface HeroProps {
  onSuccessSubmit: (details: { name: string; phone: string; location: string }) => void;
  onContactClick: () => void;
}

export default function Hero({ onSuccessSubmit, onContactClick }: HeroProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number");
      return;
    }
    if (phone.trim().length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!location) {
      setError("Please select a location");
      return;
    }

    setError("");
    onSuccessSubmit({ name, phone, location });
    // Reset form
    setName("");
    setPhone("");
    setLocation("");
  };

  return (
    <section
      id="hero-section"
      aria-label="RVM Constructions - Premium Home and Villa Construction Company"
      className="relative bg-[#0B122C] text-white pt-20 md:pt-28 pb-10 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/rvm_hero_house_1783953334166.jpg"
          alt="RVM Constructions - custom home and luxury villa construction company showcasing premium residential building craftsmanship"
          className="w-full h-full object-cover object-center opacity-40 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B122C] via-[#0B122C]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B122C] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center min-h-[500px] lg:min-h-[calc(100vh-300px)] lg:max-h-[680px] pt-2">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-4 xl:space-y-5">
            <div className="inline-flex items-center space-x-2 bg-rvm-gold/15 border border-rvm-gold/30 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-rvm-gold animate-pulse"></span>
              <span className="text-xs font-semibold tracking-widest text-rvm-gold uppercase">
                BUILD WITH EXCELLENCE
              </span>
            </div>

            {/* H1 stays as the primary keyword-rich heading for SEO */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight">
              Stop Dreaming and <br />
              <span className="text-rvm-gold text-glow">Start Building.</span>
            </h1>

            {/* Keyword-rich supporting line (visible, natural placement — not stuffed) */}
            <p className="text-gray-400 text-xs tracking-wide uppercase font-medium">
              Trusted Home & Villa Construction Company
            </p>

            <p className="text-gray-300 text-sm sm:text-base xl:text-lg max-w-xl xl:max-w-2xl leading-relaxed font-light">
              RVM Constructions brings architectural integrity and premium craftsmanship to your doorstep.
              As a leading residential and villa construction company, we turn your vision into a structural
              reality with an uncompromising focus on quality, transparency, and timely project delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={onContactClick}
                aria-label="Contact RVM Constructions for a home construction quote"
                className="bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] px-6 py-3 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 shadow-lg shadow-rvm-gold/20 uppercase"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#packages-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="View RVM Constructions completed building and villa projects"
                className="border border-white/30 hover:border-white hover:bg-white/5 text-white px-6 py-3 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 uppercase"
              >
                View Our Work
              </button>
            </div>

            {/* Trust strip - fills leftover space under CTAs on large screens */}
            <div className="hidden xl:flex items-center gap-6 pt-6 border-t border-white/10 mt-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-rvm-gold" />
                <span className="text-xs text-gray-300 font-medium">Licensed & Insured Builders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-rvm-gold" />
                <span className="text-xs text-gray-300 font-medium">Transparent Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-rvm-gold" />
                <span className="text-xs text-gray-300 font-medium">On-Site Quality Audits</span>
              </div>
            </div>
          </div>

          {/* Consultation Form (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111A3E]/90 border border-white/10 p-6 sm:p-7 xl:p-8 rounded-sm shadow-2xl backdrop-blur-md xl:max-w-md xl:ml-auto">
              <h2 className="font-display font-bold text-xl xl:text-2xl text-white mb-2 tracking-wide text-center lg:text-left">
                Quick Consultation
              </h2>
              <p className="text-xs text-gray-400 mb-5 text-center lg:text-left">
                Get a personalized estimation & layout consultation for your dream home construction project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3" aria-label="Home construction consultation request form">
                {error && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-sm text-xs text-red-200" role="alert">
                    {error}
                  </div>
                )}

                <div className="relative">
                  <label htmlFor="hero-name" className="sr-only">Full Name</label>
                  <input
                    id="hero-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="NAME *"
                    className="w-full bg-white/5 border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3 text-sm font-medium placeholder-gray-400 text-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                  <input
                    id="hero-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ""));
                      if (error) setError("");
                    }}
                    placeholder="PHONE NO *"
                    maxLength={15}
                    className="w-full bg-white/5 border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3 text-sm font-medium placeholder-gray-400 text-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="hero-location" className="sr-only">Select Location</label>
                  <select
                    id="hero-location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (error) setError("");
                    }}
                    className="w-full bg-[#111A3E] border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3 text-sm font-medium text-white placeholder-gray-400 outline-none appearance-none cursor-pointer transition-all"
                  >
                    <option value="" disabled className="text-gray-400">
                      SELECT LOCATION
                    </option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#111A3E] text-white">
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  aria-label="Submit construction requirement form"
                  className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] py-3.5 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300"
                >
                  SUBMIT REQUIREMENT
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Stats Section bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-8 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-rvm-gold tracking-tight">
                  {stat.value}
                </p>
                <p className="font-sans font-medium text-[10px] sm:text-xs xl:text-sm tracking-widest text-gray-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}