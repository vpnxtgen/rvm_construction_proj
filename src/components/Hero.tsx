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
    <section id="hero-section" className="relative bg-[#0B122C] text-white pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/rvm_hero_house_1783953334166.jpg"
          alt="RVM Luxury Villa Construction"
          className="w-full h-full object-cover object-center opacity-40 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B122C] via-[#0B122C]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B122C] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[550px] pt-4">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-rvm-gold/15 border border-rvm-gold/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-rvm-gold animate-pulse"></span>
              <span className="text-xs font-semibold tracking-widest text-rvm-gold uppercase">
                BUILD WITH EXCELLENCE
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Stop Dreaming and <br />
              <span className="text-rvm-gold text-glow">Start Building.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              RVM Constructions brings architectural integrity and premium craftsmanship to your doorstep. We turn your vision into a structural reality with an uncompromising focus on quality, transparency, and timely delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] px-8 py-4 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 shadow-lg shadow-rvm-gold/20 uppercase"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector("#packages-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-4 font-bold text-sm tracking-wider rounded-sm transition-all duration-300 uppercase"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Consultation Form (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111A3E]/90 border border-white/10 p-6 sm:p-8 rounded-sm shadow-2xl backdrop-blur-md">
              <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-wide text-center lg:text-left">
                Quick Consultation
              </h3>
              <p className="text-xs text-gray-400 mb-6 text-center lg:text-left">
                Get a personalized estimation & layout consultation for your dream home.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-900/40 border border-red-500/50 rounded-sm text-xs text-red-200">
                    {error}
                  </div>
                )}

                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="NAME *"
                    className="w-full bg-white/5 border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3.5 text-sm font-medium placeholder-gray-400 text-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ""));
                      if (error) setError("");
                    }}
                    placeholder="PHONE NO *"
                    maxLength={15}
                    className="w-full bg-white/5 border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3.5 text-sm font-medium placeholder-gray-400 text-white outline-none transition-all"
                  />
                </div>

                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (error) setError("");
                    }}
                    className="w-full bg-[#111A3E] border border-white/15 focus:border-rvm-gold focus:ring-1 focus:ring-rvm-gold rounded-sm px-4 py-3.5 text-sm font-medium text-white placeholder-gray-400 outline-none appearance-none cursor-pointer transition-all"
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
                  className="w-full bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C] py-4 rounded-sm font-bold text-xs tracking-widest uppercase transition-all duration-300"
                >
                  SUBMIT REQUIREMENT
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Stats Section bar */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-rvm-gold tracking-tight">
                  {stat.value}
                </p>
                <p className="font-sans font-medium text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase">
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
