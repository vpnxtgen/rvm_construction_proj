/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Building2,
  ChevronRight,
  Shield,
  Cpu,
  Compass,
  HeartHandshake,
  Users,
  CheckCircle2,
  Calculator,
  X,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  Building,
  Check,
  Briefcase,
  Clock,
  Wrench,
  Info,
  Send,
  Sparkles,
  MapPin,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

import companyLogo from "./assets/images/Rvm_Main_logo.png";
import founderImage from "./assets/images/Vishwas_Image.jpeg";

// Interfaces for State & Data
interface TimelineItem {
  years: string;
  title: string;
  description: string;
  details: string[];
  projects: string[];
  highlightColor: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: 'design' | 'tech' | 'safety' | 'support';
  tags: string[];
  specs: string[];
}

interface ValueItem {
  id: string;
  title: string;
  description: string;
  caseStudy: {
    title: string;
    location: string;
    highlights: string[];
  };
}


export default function App() {
  // Navigation & Scroll Tracking
  const [activeSection, setActiveSection] = useState('about-us');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal States
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  // Timeline / Success Story State
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number | null>(null);

  // Core Values interactive visual state
  const [activeValueId, setActiveValueId] = useState<string>('trust');

  // Multi-step Calculator State
  const [calcStep, setCalcStep] = useState(1);
  const [calcType, setCalcType] = useState<'residential' | 'commercial' | 'renovation'>('residential');
  const [calcArea, setCalcArea] = useState<number>(1500);
  const [calcFloors, setCalcFloors] = useState<number>(2);
  const [calcMaterial, setCalcMaterial] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [calcVastu, setCalcVastu] = useState(true);
  const [calcSmart, setCalcSmart] = useState(false);
  const [calcSolar, setCalcSolar] = useState(false);
  const [calcLandscape, setCalcLandscape] = useState(false);
  const [calcName, setCalcName] = useState('');
  const [calcEmail, setCalcEmail] = useState('');
  const [calcPhone, setCalcPhone] = useState('');
  const [calcSubmitted, setCalcSubmitted] = useState(false);
  const [calcReference, setCalcReference] = useState('');

  // Support Bot State
  const [supportName, setSupportName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportDept, setSupportDept] = useState('sales');
  const [supportMsg, setSupportMsg] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  // Refs for Scroll Anchors
  const heroRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Section observer for high-fidelity active underline in Header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      const offsets = [
        { id: 'home', ref: heroRef },
        { id: 'about-us', ref: successRef },
        { id: 'services', ref: servicesRef },
        { id: 'values', ref: valuesRef },
        { id: 'strength', ref: statsRef },
        { id: 'contact', ref: ctaRef },
      ];

      for (let i = offsets.length - 1; i >= 0; i--) {
        const item = offsets[i];
        if (item.ref.current && scrollPosition >= item.ref.current.offsetTop) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 85,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Generate Reference ID for estimator submission
  const generateRefId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'RVM-';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Live Estimate Calculator
  const calculateEstimate = () => {
    let baseRate = 0;
    if (calcType === 'residential') baseRate = 1800; // Rs/sqft base
    else if (calcType === 'commercial') baseRate = 2200;
    else baseRate = 900; // renovation

    // Material adjustment
    let materialMultiplier = 1.0;
    if (calcMaterial === 'premium') materialMultiplier = 1.35;
    else if (calcMaterial === 'luxury') materialMultiplier = 1.8;

    // Floor count incremental cost multiplier (+5% per additional floor above 1)
    const floorMultiplier = 1 + (calcFloors - 1) * 0.05;

    let subtotal = calcArea * baseRate * materialMultiplier * floorMultiplier;

    // Fixed add-ons
    if (calcVastu) subtotal += 45000;
    if (calcSmart) subtotal += calcArea * 120; // 120 Rs per sqft
    if (calcSolar) subtotal += 180000; // 3kW standard setup
    if (calcLandscape) subtotal += 150000;

    return Math.round(subtotal);
  };

  // Timeline Milestone data
  const timelineData: TimelineItem[] = [
    {
      years: '2023 – 2024',
      title: 'The Inception',
      description: 'Started with a passionate team of Two. Kicked off our journey by building homes.',
      details: [
        'Founded with just 2 elite engineers and architects in a small workspace.',
        'Successfully delivered our first residential project 15 days ahead of schedule.',
        'Engineered a prototype eco-friendly net-zero home, proving early technical leadership.',
        'Established rigid foundation standards exceeding standard civil codes.'
      ],
      projects: ['Location : Sir M Visvesvaraya (MV) Layout', 'Type of Building : G+3 Luxury Residence', 'Owner Name : Dr Thyagaraja'],
      highlightColor: 'from-amber-500 to-yellow-600'
    },
    {
      years: '2025 – 2026',
      title: 'Strategic Growth & Diversification',
      description: 'Strengthened our presence by successfully delivering residential projects and interior design solutions while adopting modern construction practices and expanding our portfolio with innovative, sustainable, and customer-focused solutions.',
      details: [
        'Successfully delivered a diverse portfolio of residential projects and interior design solutions with a strong focus on quality and timely execution.',
        'Earned client trust through superior workmanship, transparent business practices, and reliable project delivery.',
        'Expanded into premium residential home construction, including luxury homes, G+3 residences, and customized dream homes.',
        'Enhanced project management capabilities by adopting modern construction techniques and innovative, cost-effective building solutions.',
        'Strengthened our interior design division, offering end-to-end interior solutions tailored to modern living spaces.',
        'Focused on sustainable construction practices and technology-driven execution to deliver lasting value and exceed customer expectations.'
      ],
      projects: ['Location : Sir M Visvesvayaraya (MV) Layout', 'Type of building : G+2 luxury Residence + Interior Design', 'Owner Name :  Mr Raja Gopal' ],
      highlightColor: 'from-blue-500 to-indigo-600'
    },
    {
      years: '2026 - 2027',
      title: 'Platinum Standards',
      description: 'RVM Constructions introduced its Platinum Standards, establishing a new benchmark for quality, craftsmanship, and customer satisfaction. This initiative reflects the company commitment to delivering projects that meet the highest standards of construction, interior design, safety, sustainability, and timely execution',
     details: [
        'Established Platinum Standards to ensure exceptional quality, precision, and consistency across every project.',
        'Committed to using premium construction materials and delivering superior craftsmanship with meticulous attention to detail.',
        'Implemented transparent project management practices to provide clients with complete visibility throughout the construction journey.',
        'Integrated modern construction techniques, innovative interior design solutions, and sustainable building practices.',
        'Successfully commenced a premium G+3 residential home project at Kempegowda Layout, Bengaluru, built to RVM Platinum Standards.',
        'Launched a high-end interior design project, delivering customized turnkey interiors with a focus on functionality, elegance, and premium finishes.',
        'Focused on safety, quality assurance, and timely project execution while maintaining the highest industry standards.',
        'Delivered a seamless end-to-end experience, from planning and design to construction and project handover.'
      ],
      projects: [
      'Location: Kempegowda Layout, Bengaluru',
      'Type of Building: G+3 Luxury Residence + Interior Design',
      'Owner Name: [Owner Name]',
      'Location: JP Nagar, Bengaluru',
      'Type of Building: Interior Design for G+3 Residential Building',
      'Owner Name: Mr. [Owner Name]'
    ],
      highlightColor: 'from-emerald-500 to-teal-600'
    }
  ];

  // Service Offerings data
  const serviceOfferings: ServiceItem[] = [
    {
      id: 'custom-design',
      title: 'Custom Design',
      description: 'Vastu-compliant, bespoke floor plans meticulously crafted to your unique vision.',
      fullDetails: 'Our custom design service bridges your life vision with premium spatial science. Our specialized architects create customized residential and commercial masterpieces ensuring optimal solar alignment, wind circulation, and space utilization.',
      iconName: 'design',
      tags: ['Bespoke Architecture', 'Vastu Shastra Planning', '3D Walkthroughs', 'Structural Engineering'],
      specs: ['100% Custom Layouts', 'Zero Compromise Vastu Rules', 'High-Fidelity Virtual Renderings', 'Optimized Floor Ratios']
    },
    {
      id: 'tech-integration',
      title: 'Tech Integration',
      description: 'Advanced project management and MEP engineering for seamless on-site operations.',
      fullDetails: 'We deploy top-tier technology frameworks, utilizing Building Information Modeling (BIM) to simulate construction, preempt clash detections, and optimize Mechanical, Electrical, and Plumbing (MEP) systems for energy efficiency.',
      iconName: 'tech',
      tags: ['BIM Modelling', 'MEP Optimizations', 'Smart Controls', 'Energy Audits'],
      specs: ['Clash-free MEP Layouts', '20% Average Energy Savings', 'Live Site Drone Feed access', 'Precision-Costing Reports']
    },
    {
      id: 'safety-first',
      title: 'Safety First',
      description: 'Strict adherence to highest safety measures and industry compliance regulations.',
      fullDetails: 'Safety forms the bedrock of RVM Constructions. We employ rigid heavy-lifting guidelines, real-time wearable telemetry on site, and regular safety drills to maintain our proud record of zero critical incidents.',
      iconName: 'safety',
      tags: ['OSHA Standards', 'Zero-Accident Protocol', 'Structural Integrity Assurance', 'Fire-Safe Design'],
      specs: ['Double-layer scaffolding', 'Weekly Safety Inspections', 'Premium Grade Fire Retardants', 'Seismic-Resistant Structures']
    },
    {
      id: 'support',
      title: 'Support',
      description: 'Ongoing maintenance guides and warranties long after the project handover.',
      fullDetails: 'Our relationship does not end at key handover. We offer a industry-leading 10-year structural warranty alongside a comprehensive maintenance manual and immediate on-call support team for peace of mind.',
      iconName: 'support',
      tags: ['10-Year Warranty', 'Post-Handover Audits', 'Annual Wellness Checkup', 'Rapid Response Team'],
      specs: ['Waterproofing warranty', 'Plumbing emergency lines', 'Bi-annual physical checks', 'Transferrable Ownership Warranties']
    }
  ];

  // Values data
  const valuesData: ValueItem[] = [
    {
      id: 'trust',
      title: 'Trust',
      description: 'Transparent communication and honest delivery in every square foot.',
      caseStudy: {
        title: 'Project G+3 Luxury Residency',
        location: 'Sir M. Vishweshwaraiah (SMV) Layout , Bengaluru',
        highlights: [
          'Fixed cost guarantee ensuring zero budget overruns for clients.',
          'Open ledger material invoices made accessible to the homebuyer.',
          'Delivered precisely on the promised date without single-day delays.'
        ]
      }
    },
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Leveraging cutting-edge tech to solve complex construction challenges.',
      caseStudy: {
        title: 'Varthur Tech Park Annex',
        location: 'Varthur, East Bengaluru',
        highlights: [
          'Implemented post-tensioned slab technology to maximize pillar-free spans.',
          'Integrated smart water recycling recycling 90% of structural outflow.',
          'Used autonomous leveling instrumentation for 100% true floor elevations.'
        ]
      }
    },
    {
      id: 'passion',
      title: 'Passion',
      description: 'Driven by the love of creating spaces that resonate with families.',
      caseStudy: {
        title: 'The Retreat Villa Colony',
        location: 'Coimbatore, TN',
        highlights: [
          'Designed personalized creative nooks customized for family members.',
          'Preserved 45 mature local trees by weaving structural layouts around them.',
          'Hand-built child-safe visual pathways within the outdoor community parks.'
        ]
      }
    },
    {
      id: 'perfection',
      title: 'Perfection',
      description: 'Meticulous attention to detail, from foundation to finishing touches.',
      caseStudy: {
        title: 'The Summit Presidential Penthouses',
        location: 'Indiranagar, Bengaluru',
        highlights: [
          'Laser-aligned Italian marble flooring down to fractions of a millimeter.',
          'Custom triple-glazed acoustic windows eliminating 98% of urban noise.',
          'Premium grade moisture barrier membranes guaranteeing lifetime mold-free walls.'
        ]
      }
    }
  ];

  // Helper to get service icon
  const getServiceIcon = (name: string, className = "w-6 h-6 text-white") => {
    switch (name) {
      case 'design':
        return <Compass className={className} />;
      case 'tech':
        return <Cpu className={className} />;
      case 'safety':
        return <Shield className={className} />;
      case 'support':
        return <HeartHandshake className={className} />;
      default:
        return <Building2 className={className} />;
    }
  };

  // Handle quote modal open
  const openQuoteModal = () => {
    setCalcStep(1);
    setCalcSubmitted(false);
    setQuoteModalOpen(true);
  };

  // Submit quote calculator
  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!calcName || !calcEmail || !calcPhone) {
      alert('Please fill out all contact fields.');
      return;
    }
    setCalcReference(generateRefId());
    setCalcSubmitted(true);
  };

  // Submit support form
  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportName || !supportEmail || !supportMsg) {
      alert('Please fill out all required fields.');
      return;
    }
    setSupportSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
       
      {/* HEADER / NAVIGATION */}
      <header id="app-header" className="sticky top-0 z-40 w-full bg-white border-b border-slate-100 shadow-sm backdrop-blur-md bg-white/90 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

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
          
            {/* Right Button (Always visible on mobile & desktop, no navigation tabs) */}
          <div className="flex items-center">
              <button
                id="header-btn-quote"
                onClick={openQuoteModal}
                className="bg-[#111] text-white px-5 py-2.5 rounded-sm text-xs sm:text-sm font-semibold hover:bg-amber-500 hover:text-[#111] transition-all duration-300 shadow-md flex items-center space-x-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>
            </div>

          </div>
        </div>
      </header>
      

      {/* HERO SECTION */}
      <section
        id="hero-section"
        ref={heroRef}
        className="relative bg-[#687182] text-white py-20 sm:py-28 overflow-hidden min-h-[580px] flex items-center"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Abstract vector shape lines overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-24"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-black/5 -skew-x-12 -translate-x-12"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-block">
                <span className="bg-[#b38600] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-sm uppercase inline-flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Established Excellence</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Building Your Legacy with Excellence
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 max-w-2xl font-light leading-relaxed">
                For over 9 years, RVM Constructions has been redefining the skyline. We translate your vision into a living, breathing space where memories are created through elite craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  id="hero-btn-explore"
                  onClick={() => scrollTo(successRef)}
                  className="bg-[#b38600] text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-[#997300] hover:scale-[1.02] transition-all duration-300 text-center shadow-lg hover:shadow-amber-900/20"
                >
                  Discover Our Story
                </button>
                <button
                  id="hero-btn-process"
                  onClick={() => scrollTo(valuesRef)}
                  className="border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-sm font-semibold transition-all duration-300 text-center"
                >
                  Our Core Values
                </button>
              </div>

            </div>

            {/* Right Media Placeholder Box as shown in layout */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] aspect-[4/3] bg-[#535a68] rounded-md border border-white/15 shadow-2xl p-8 flex flex-col justify-between relative group hover:scale-[1.01] transition-transform duration-300">
                
                {/* Visual Architectural Grid Effect */}
                <div className="absolute inset-4 border border-dashed border-white/10 pointer-events-none"></div>
                
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-2.5 rounded-sm">
                    <Building2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-300">ESTD_PORTAL_2016</span>
                </div>

                <div className="flex flex-col items-center justify-center py-6 text-center">
                  {/* Icon Landscape Placeholder styled with custom SVG look */}
                  <div className="w-20 h-14 bg-[#454b57] rounded-sm border border-white/20 flex items-center justify-center relative shadow-inner">
                    {/* Tiny landscape mountains shape */}
                    <svg className="w-12 h-8 text-amber-500/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 6l-3.75 5 2.85 3.8H5.1l3.75-5z"/>
                    </svg>
                    <div className="absolute top-2 right-4 w-2.5 h-2.5 rounded-full bg-amber-400 opacity-80"></div>
                  </div>
                  <p className="text-xs text-slate-300 mt-4 font-mono">ARCHITECTURAL SCHEMATIC STAGE</p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
                    <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider block">RVM Craftsmanship</span>
                  </div>
                  <button
                    onClick={openQuoteModal}
                    className="text-xs text-amber-400 hover:text-white font-semibold flex items-center space-x-1 transition-colors"
                  >
                    <span>Instant Estimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTAL NOTICE FOR DYNAMIC DEMO */}
      <div className="bg-amber-50 border-y border-amber-200 py-3 text-center px-4">
        <p className="text-sm text-amber-800 font-medium flex items-center justify-center flex-wrap gap-2">
          <Info className="w-4 h-4 flex-shrink-0" />
          <span>Interactive App Enabled: Use the top menu links to scroll or open the live quote generator form!</span>
          <button 
            onClick={openQuoteModal} 
            className="underline hover:text-amber-900 font-bold ml-1 inline-flex items-center gap-1"
          >
            Try Calculator <Calculator className="w-3.5 h-3.5" />
          </button>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <br/>
        <br/>
        
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
                src={founderImage}
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

      {/* OUR SUCCESS STORY (TIMELINE) */}
      <section
        id="success-story"
        ref={successRef}
        className="py-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1c2230] tracking-tight relative inline-block pb-3">
              Our Success Story
              <span className="absolute bottom-0 left-1/3 right-1/3 h-1 bg-amber-500 rounded-full" />
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed font-light">
              From a small passionate team to a leading turnkey construction firm, our journey is built on trust and innovation.
            </p>
          </div>

          {/* Interactive Timeline Layout matching screenshot */}
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-48 pl-8 md:pl-12 py-4 space-y-12">
            
            {timelineData.map((item, index) => {
              const isSelected = selectedTimelineIndex === index;
              return (
                <div
                  key={item.years}
                  className="relative group transition-all duration-300"
                >
                  {/* Left Floating Year Label (Desktop only) */}
                  <div className="hidden md:block absolute -left-60 top-1 w-44 text-right">
                    <span className="text-lg font-bold text-amber-600 block tracking-wider font-mono">
                      {item.years}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block tracking-widest mt-0.5">
                      Milestone
                    </span>
                  </div>

                  {/* Timeline Node Point */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-white border-4 border-amber-500 group-hover:scale-125 transition-transform duration-200 z-10 shadow-sm" />

                  {/* Body Content */}
                  <div className="space-y-2">
                    {/* Mobile Only Year Badge */}
                    <span className="md:hidden inline-block text-xs font-bold text-amber-600 font-mono tracking-wider mb-1 bg-amber-50 px-2 py-0.5 rounded">
                      {item.years}
                    </span>
                    
                    <h3 className="text-xl font-bold text-[#1c2230] group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed font-light text-base max-w-2xl">
                      {item.description}
                    </p>

                    {/* Interactive Expand Controls */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedTimelineIndex(isSelected ? null : index)}
                        className="text-xs font-semibold text-slate-500 hover:text-[#1c2230] flex items-center space-x-1.5 focus:outline-none"
                      >
                        <span className="underline decoration-dotted">{isSelected ? "Close Timeline Details" : "Inspect Key Achievements"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Expandable Project Details Box */}
                    {isSelected && (
                      <div className="mt-4 p-5 bg-slate-50 border border-slate-100 rounded-sm animate-fade-in space-y-4 shadow-inner">
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Key Records
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600 font-light">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-amber-500 mt-1">▪</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-slate-200/60">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Featured Projects Completed</p>
                          <div className="flex flex-wrap gap-2">
                            {item.projects.map((proj) => (
                              <span key={proj} className="bg-white px-3 py-1 rounded-sm border border-slate-200 text-xs text-slate-700 font-medium shadow-sm">
                                {proj}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>



      {/* OUR VALUES DEFINE OUR CRAFT */}
      <section
        id="our-values"
        ref={valuesRef}
        className="bg-[#0a0e17] text-white py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Grid of Values */}
            <div className="lg:col-span-7 space-y-10">
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Our Values Define Our Craft
                </h2>
                <div className="h-1 w-20 bg-amber-500 rounded-full mt-4"></div>
              </div>

              {/* Grid of 4 Values as shown in design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {valuesData.map((val) => {
                  const isActive = activeValueId === val.id;
                  return (
                    <div
                      key={val.id}
                      onClick={() => setActiveValueId(val.id)}
                      className={`cursor-pointer p-5 rounded-sm border transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/5 border-amber-500 shadow-lg' 
                          : 'border-white/5 hover:border-white/15 hover:bg-white/5'
                      }`}
                    >
                      {/* Title in gold font */}
                      <h3 className="text-xl font-bold text-amber-500 flex items-center space-x-2">
                        <span>{val.title}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed font-light">
                        {val.description}
                      </p>

                      <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-3 hover:text-white transition-colors flex items-center space-x-1">
                        <span>View Live Proof</span>
                        <ChevronRight className="w-3 h-3" />
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right side: Dynamic Case Study Block matching design */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[420px] bg-[#121829] rounded-md border border-white/10 shadow-2xl overflow-hidden relative group">
                
                {/* Visual Header Grid pattern */}
                <div className="bg-[#182035] px-6 py-4 border-b border-white/10 flex justify-between items-center">
                  <span className="text-xs font-mono text-amber-500 font-bold uppercase tracking-widest">
                    Value Validation Panel
                  </span>
                  <div className="flex space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
                  </div>
                </div>

                {/* Body Content based on active state */}
                <div className="p-6 space-y-6">
                  
                  {/* Mini Blueprint representation */}
                  <div className="h-44 bg-[#0a0e17] rounded-sm border border-white/5 relative flex items-center justify-center p-4">
                    <div className="absolute inset-2 border border-dashed border-amber-500/20 pointer-events-none"></div>
                    <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500">SYS_VIEW_2A</div>

                    {/* SVG Blueprint grid simulation */}
                    <div className="w-full h-full flex flex-col justify-between opacity-80">
                      <div className="flex justify-between text-[10px] font-mono text-amber-500/40">
                        <span>A-01</span>
                        <span>GRID SECTOR 9</span>
                      </div>
                      <div className="flex items-center justify-center">
                        {/* Dynamic custom icon */}
                        <div className="bg-amber-500/10 p-4 rounded-full border border-amber-500/30 text-amber-400">
                          {activeValueId === 'trust' && <Shield className="w-8 h-8" />}
                          {activeValueId === 'innovation' && <Cpu className="w-8 h-8" />}
                          {activeValueId === 'passion' && <HeartHandshake className="w-8 h-8" />}
                          {activeValueId === 'perfection' && <CheckCircle2 className="w-8 h-8" />}
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-mono text-amber-500/40">SCALE: 1:150</span>
                        <span className="text-[10px] font-mono text-green-400 font-semibold uppercase tracking-wider">● ACTIVE CASE</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Value Text validation */}
                  {(() => {
                    const activeVal = valuesData.find(v => v.id === activeValueId) || valuesData[0];
                    return (
                      <div className="space-y-4 animate-fade-in">
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Featured Milestone Case</p>
                          <h4 className="text-lg font-bold text-white mt-1">{activeVal.caseStudy.title}</h4>
                          <span className="text-xs text-amber-400 flex items-center mt-1">
                            <MapPin className="w-3.5 h-3.5 mr-1" /> {activeVal.caseStudy.location}
                          </span>
                        </div>

                        <div className="space-y-2 border-t border-white/5 pt-3">
                          {activeVal.caseStudy.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start text-xs text-slate-300 font-light">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0 mr-2 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                </div>

                {/* Overlapping badge on bottom left as shown in design layout */}
                <div className="absolute bottom-0 left-0 bg-[#a27b1e] text-white px-6 py-4 shadow-xl z-20 w-full flex justify-between items-center sm:w-auto sm:max-w-xs rounded-tr-md">
                  <div className="flex flex-col">
                    <span className="text-3xl font-extrabold tracking-tight leading-none text-white">5+</span>
                    <span className="text-[10px] text-amber-100 font-bold uppercase tracking-widest mt-1 block">Projects Completed</span>
                  </div>
                  <Sparkles className="w-6 h-6 text-amber-200 hidden sm:block opacity-60 ml-4" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE STRENGTH BEHIND OUR PROJECTS */}
      <section
        id="strength-stats"
        ref={statsRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#1c2230] tracking-tight">
              The Strength Behind Our Projects
            </h2>
            <p className="text-slate-500 mt-3 font-light leading-relaxed">
              A multidisciplinary team of elite professionals dedicated to groundbreaking architectural ideas.
            </p>
          </div>

          {/* Stats Grid Layout as shown in layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: '1', label: 'ARCHITECTS', desc: 'Masters of spatial aesthetics & Vastu' },
              { num: '1', label: 'STRUCTURAL ENG.', desc: 'High-seismic design & structure load safety' },
              { num: '1', label: 'SITE ENGINEERS', desc: 'Precision on-site execution managers' },
              { num: '11', label: 'COORDINATORS', desc: 'Liaison & compliance clearance officers' },
              { num: '1', label: 'DESIGNERS', desc: 'Interior ergonomics & custom spaces' },
              { num: '40+', label: 'SKILLED LABOUR', desc: 'Masonry, metallurgy, carpentry craftsmen' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#edf2f9] rounded-md p-6 border border-slate-100 flex flex-col justify-between h-44 text-center group hover:bg-[#1c2230] hover:text-white hover:border-[#1c2230] hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Visual Grid Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-5 bg-[linear-gradient(135deg,transparent_50%,#000_50%)]"></div>

                <div className="text-3xl font-black tracking-tight text-[#1c2230] group-hover:text-amber-400 transition-colors duration-300">
                  {stat.num}
                </div>
                
                <div className="space-y-1 mt-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-700 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors duration-300 font-light line-clamp-2 mt-1">
                    {stat.desc}
                  </div>
                </div>

                {/* Micro info dot */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MOST TRUSTED PARTNERS */}
      {/*<section
        id="trusted-partners"
        className="py-16 bg-slate-50 border-t border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Most Trusted Partners
          </p>

         
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {[
              { name: 'APEX STRUCTURES', symbol: '▲' },
              { name: 'VERTEX GLASS', symbol: '◆' },
              { name: 'ECOSTONE CEMENT', symbol: '◼' },
              { name: 'IRONCLAD STEEL', symbol: '⬢' },
              { name: 'LUMINA LIGHTING', symbol: '★' }
            ].map((partner, index) => (
              <div
                key={index}
                className="h-12 w-full max-w-[160px] bg-slate-200/60 rounded-sm hover:bg-slate-300/40 transition-colors flex items-center justify-center p-3 text-slate-500 hover:text-slate-800 cursor-pointer text-xs font-bold tracking-wider space-x-1.5 shadow-inner"
              >
                <span className="text-slate-400">{partner.symbol}</span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>*/}

      {/* READY TO BUILD YOUR DREAM? (CTA SECTION) */}
      {/*<section
        id="ready-cta"
        ref={ctaRef}
        className="bg-[#dce4f4] text-slate-900 py-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cbd5eb] rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2230]">
            Ready to Build Your Dream?
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Experience personalized, hassle-free construction with RVM Constructions. Let's create your legacy together.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4">
            <button
              id="cta-btn-get-started"
              onClick={openQuoteModal}
              className="bg-[#111] text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-amber-500 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Now
            </button>
            <button
              id="cta-btn-support"
              onClick={() => {
                setSupportSent(false);
                setSupportModalOpen(true);
              }}
              className="bg-white border border-slate-200 text-slate-800 px-8 py-3.5 rounded-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm"
            >
              Contact Support
            </button>
          </div>

        </div>
      </section>*/}

      {/* FOOTER */}
      <footer className="bg-[#0c101b] text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Brand Block */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-amber-500 p-2 rounded-sm flex items-center justify-center">
                  <span className="text-[#0c101b] font-black tracking-tight text-sm">RVM</span>
                </div>
                <span className="text-lg font-bold tracking-wide text-white">RVM Constructions</span>
              </div>
              <p className="text-slate-400 text-sm font-light max-w-md leading-relaxed">
                One stop solution for all your home construction needs, providing comprehensive end-to-end services.
              </p>
            </div>

            {/* Links Block */}
            <div className="md:col-span-6 flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
              <button onClick={() => alert('Our Privacy Policy ensures your data is safe and never shared.')} className="hover:text-amber-500 transition-colors">Privacy Policy</button>
              <button onClick={() => alert('Terms of Service outlines legal project guidelines.')} className="hover:text-amber-500 transition-colors">Terms of Service</button>
              <button onClick={() => alert('RVM holds IGBC Platinum and ISO 9001 certifications.')} className="hover:text-amber-500 transition-colors">Certifications</button>
              <button onClick={() => alert('We are hiring site engineers and architects! Email careers@rvmconstructions.com')} className="hover:text-amber-500 transition-colors">Careers</button>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 RVM Constructions. All rights reserved.</p>
            <div className="flex space-x-4">
              <span className="hover:text-white cursor-pointer">Facebook</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">LinkedIn</span>
              <span>•</span>
              <span className="hover:text-white cursor-pointer">Instagram</span>
            </div>
          </div>
        </div>
      </footer>


      {/* INTERACTIVE MODAL 1: PROJECT QUOTE ESTIMATOR (MULTI-STEP) */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            {/* Backdrop */}
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setQuoteModalOpen(false)}></div>

            {/* Trick browser into centering */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal Body */}
            <div className="inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-slate-100">
              
              {/* Header */}
              <div className="bg-[#1c2230] px-6 py-4 flex justify-between items-center text-white border-b border-amber-500/20">
                <div className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-amber-500" />
                  <span className="font-bold text-lg">Project Quote Estimator</span>
                </div>
                <button
                  id="quote-modal-close"
                  onClick={() => setQuoteModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="bg-slate-100 h-1 w-full relative">
                <div 
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${(calcStep / 4) * 100}%` }}
                ></div>
              </div>

              {!calcSubmitted ? (
                <div className="p-6">
                  
                  {/* STEP 1: PROJECT SPEC */}
                  {calcStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">Step 1: Select Project Parameters</h3>
                        <p className="text-xs text-slate-500">Provide the fundamental specifications of your plot and project.</p>
                      </div>

                      {/* Project Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Project Class</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'residential', label: 'Residential', desc: 'Villas & Apartments' },
                            { id: 'commercial', label: 'Commercial', desc: 'Offices & Retail' },
                            { id: 'renovation', label: 'Renovation', desc: 'Structural Upgrades' }
                          ].map((type) => (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setCalcType(type.id as any)}
                              className={`p-3 border rounded text-left transition-all ${
                                calcType === type.id 
                                  ? 'border-amber-500 bg-amber-50/50 text-amber-900 shadow-sm' 
                                  : 'border-slate-200 hover:border-slate-300 text-slate-700'
                              }`}
                            >
                              <span className="font-bold text-sm block">{type.label}</span>
                              <span className="text-[10px] text-slate-500 mt-1 block">{type.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Area Slider */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Estimated Built-up Area</label>
                          <span className="text-sm font-bold font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {calcArea} Sq Ft
                          </span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="10000"
                          step="100"
                          value={calcArea}
                          onChange={(e) => setCalcArea(Number(e.target.value))}
                          className="w-full accent-amber-500"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>500 sqft (Compact row house)</span>
                          <span>10,000 sqft (Estate mansion)</span>
                        </div>
                      </div>

                      {/* Floor Count */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Number of Floors</label>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4].map((floor) => (
                            <button
                              key={floor}
                              type="button"
                              onClick={() => setCalcFloors(floor)}
                              className={`w-12 h-10 border rounded font-semibold text-sm transition-all ${
                                calcFloors === floor 
                                  ? 'bg-amber-500 text-black border-amber-500 shadow-md font-bold' 
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {floor === 1 ? 'G' : `G+${floor - 1}`}
                            </button>
                          ))}
                        </div>
                        <p className="text-[10px] text-slate-500">Multi-story foundations incorporate additional structural steel reinforcements.</p>
                      </div>

                      {/* Next button */}
                      <div className="flex justify-end pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setCalcStep(2)}
                          className="bg-[#111] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-amber-500 hover:text-black flex items-center space-x-1"
                        >
                          <span>Next: Quality Package</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: QUALITY TIER */}
                  {calcStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">Step 2: Material & Construction Package</h3>
                        <p className="text-xs text-slate-500">Select the grade of finishings, steel, cement, and electrical/plumbing fixtures.</p>
                      </div>

                      <div className="space-y-3">
                        {[
                          { 
                            id: 'standard', 
                            name: 'Classic Standard', 
                            price: '₹1,800/sqft', 
                            details: ['Fe-500 TMT Steel', 'Coromandel Cement', 'Vitrified tiling (2x2)', 'Anchor electrical, Finolex wires', 'Parryware bathroom fixtures'] 
                          },
                          { 
                            id: 'premium', 
                            name: 'Elite Premium (Most Popular)', 
                            price: '₹2,430/sqft', 
                            details: ['Fe-550D TMT Steel (Tata/JSW)', 'UltraTech Cement', 'Double charged glazed vitrified tiles', 'Havells/Legrand modular switches', 'Jaquar sanitaryware & CP fittings'] 
                          },
                          { 
                            id: 'luxury', 
                            name: 'Ultra Luxury Supreme', 
                            price: '₹3,240/sqft', 
                            details: ['Fe-600 Super-ductile steel', 'Lafarge premium cement', 'Premium Italian marble & Teak woodwork', 'Schneider home automation ready switches', 'Kohler & Grohe fully concealed fixtures'] 
                          }
                        ].map((pkg) => (
                          <div
                            key={pkg.id}
                            onClick={() => setCalcMaterial(pkg.id as any)}
                            className={`p-4 border rounded-sm cursor-pointer transition-all ${
                              calcMaterial === pkg.id 
                                ? 'border-amber-500 bg-amber-50/20 shadow-md' 
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-bold text-sm text-slate-900">{pkg.name}</span>
                              <span className="text-xs font-bold font-mono text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">{pkg.price}</span>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-500">
                              {pkg.details.map((det) => (
                                <span key={det} className="flex items-center">
                                  <span className="text-amber-500 mr-1">✔</span> {det}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setCalcStep(1)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCalcStep(3)}
                          className="bg-[#111] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-amber-500 hover:text-black flex items-center space-x-1"
                        >
                          <span>Next: Upgrades</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: UPGRADES */}
                  {calcStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">Step 3: Integrated Upgrades & Services</h3>
                        <p className="text-xs text-slate-500">Incorporate key specialty engineering and architectural design parameters.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'vastu', label: 'Strict Vastu Consultation', desc: 'Comprehensive alignment analysis, layout orientations, and entrance sizing audits.', price: '+ ₹45,000 flat', val: calcVastu, set: setCalcVastu },
                          { id: 'smart', label: 'Smart Home Pre-Conduiting', desc: 'Pre-wiring for multi-zone speakers, touch screens, and security cams.', price: '+ ₹120 / sqft', val: calcSmart, set: setCalcSmart },
                          { id: 'solar', label: '3kW On-Grid Solar Infrastructure', desc: 'Premium monocrystalline panels with hybrid inverter and bi-directional meter.', price: '+ ₹1,80,000 flat', val: calcSolar, set: setCalcSolar },
                          { id: 'landscape', label: 'Professional Landscape Design', desc: 'Bespoke garden architecture, micro-sprinklers, and custom patio plans.', price: '+ ₹1,50,000 flat', val: calcLandscape, set: setCalcLandscape }
                        ].map((upg) => (
                          <div
                            key={upg.id}
                            onClick={() => upg.set(!upg.val)}
                            className={`p-4 border rounded-sm cursor-pointer transition-all flex flex-col justify-between h-40 ${
                              upg.val 
                                ? 'border-amber-500 bg-amber-50/10 shadow-sm' 
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div>
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-slate-800">{upg.label}</span>
                                <input
                                  type="checkbox"
                                  checked={upg.val}
                                  onChange={() => {}} // handled by div onClick
                                  className="accent-amber-500"
                                />
                              </div>
                              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{upg.desc}</p>
                            </div>
                            <span className="text-[10px] font-bold text-amber-600 block mt-2">{upg.price}</span>
                          </div>
                        ))}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setCalcStep(2)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCalcStep(4)}
                          className="bg-[#111] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-amber-500 hover:text-black flex items-center space-x-1"
                        >
                          <span>Next: Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: CONTACT & ESTIMATE */}
                  {calcStep === 4 && (
                    <form onSubmit={handleCalcSubmit} className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="text-base font-bold text-slate-800">Step 4: Contact Details & Estimate Calculation</h3>
                        <p className="text-xs text-slate-500">Provide details to generate your official PDF-styled breakdown estimate instantly.</p>
                      </div>

                      {/* Cost Summary Preview box */}
                      <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Pre-calculations Sheet</span>
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-semibold text-slate-700">Estimated Total Cost</span>
                          <span className="text-2xl font-black font-mono text-amber-600">
                            ₹{calculateEstimate().toLocaleString('en-IN')}*
                          </span>
                        </div>
                        <p className="text-[9px] text-slate-400 leading-none mt-1">*Excluding dynamic GST, municipal registration, and physical site soil structural tests.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={calcName}
                              onChange={(e) => setCalcName(e.target.value)}
                              placeholder="e.g. Anand Kumar"
                              className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Phone Number *</label>
                            <input
                              type="tel"
                              required
                              value={calcPhone}
                              onChange={(e) => setCalcPhone(e.target.value)}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={calcEmail}
                            onChange={(e) => setCalcEmail(e.target.value)}
                            placeholder="e.g. anand@example.com"
                            className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setCalcStep(3)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm"
                        >
                          Back
                        </button>
                        <button
                          id="btn-estimate-submit"
                          type="submit"
                          className="bg-[#b38600] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-[#997300] flex items-center space-x-2 shadow-lg"
                        >
                          <Calculator className="w-4 h-4" />
                          <span>Generate Dynamic Quote</span>
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              ) : (
                /* SUCCESS SCREEN */
                <div className="p-8 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto border-2 border-green-300">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Quote Successfully Generated!</h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto">
                      Thank you <span className="font-semibold text-slate-800">{calcName}</span>. Your dynamic construction pre-estimate has been configured and registered under reference number <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-amber-600 font-bold">{calcReference}</span>.
                    </p>
                  </div>

                  {/* Summary Sheet */}
                  <div className="bg-slate-50 border border-slate-200 rounded p-6 max-w-lg mx-auto text-left space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 pb-2 border-b border-slate-200">RVM Pre-Estimate Breakdown</h4>
                    
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-600 font-light">
                      <span>Project Class:</span>
                      <span className="font-bold text-slate-800 capitalize">{calcType}</span>
                      
                      <span>Built-up Area:</span>
                      <span className="font-bold text-slate-800">{calcArea} Sq Ft</span>
                      
                      <span>Height:</span>
                      <span className="font-bold text-slate-800">{calcFloors} Floors (G+{calcFloors-1})</span>
                      
                      <span>Material Package:</span>
                      <span className="font-bold text-slate-800 capitalize">{calcMaterial} Package</span>

                      <span>Integrated Add-ons:</span>
                      <span className="font-bold text-slate-800">
                        { [calcVastu && 'Vastu', calcSmart && 'Smart Home', calcSolar && 'Solar', calcLandscape && 'Landscape'].filter(Boolean).join(', ') || 'None Selected' }
                      </span>
                    </div>

                    <div className="border-t border-slate-200 pt-3 flex justify-between items-baseline">
                      <span className="text-sm font-bold text-slate-800">Total Estimate (Rough Cost):</span>
                      <span className="text-xl font-black font-mono text-amber-600">₹{calculateEstimate().toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    A copy of this technical breakdown sheet has been sent to <span className="font-medium text-slate-800">{calcEmail}</span>. An RVM architectural consultant will reach you at <span className="font-medium text-slate-800">{calcPhone}</span> within 24 working hours for a precise virtual schematic review.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(false)}
                      className="bg-[#111] text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      Close Portal Panel
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL 2: SERVICE DETAILS DRAWER/POPUP */}
      {serviceModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setServiceModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full border border-slate-100">
              
              {/* Header */}
              <div className="bg-[#1c2230] px-6 py-4 flex justify-between items-center text-white border-b border-amber-500/20">
                <div className="flex items-center space-x-2">
                  <div className="bg-amber-500/10 p-1.5 rounded">
                    {getServiceIcon(selectedService.iconName, "w-5 h-5 text-amber-500")}
                  </div>
                  <span className="font-bold text-lg">{selectedService.title}</span>
                </div>
                <button
                  onClick={() => setServiceModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Service Blueprint Summary</span>
                  <p className="text-slate-700 text-sm leading-relaxed font-light">{selectedService.fullDetails}</p>
                </div>

                {/* Sub-areas Tags */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Scope of Deliverables</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 px-3 py-1 text-xs text-slate-700 rounded-sm font-medium border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Standard Engineering Specs */}
                <div className="space-y-2 bg-slate-50 p-4 rounded border border-slate-150">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 block">Standard Technical Benchmarks</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light mt-2">
                    {selectedService.specs.map((spec) => (
                      <div key={spec} className="flex items-center space-x-2">
                        <span className="text-amber-500">✔</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded text-xs text-amber-800 leading-normal font-light flex items-start space-x-2">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>All specifications are dynamic and audited bi-annually to stay aligned with the latest National Building Codes.</span>
                </div>

                {/* Footer Action buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setServiceModalOpen(false);
                      openQuoteModal();
                    }}
                    className="bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-amber-600 shadow flex items-center space-x-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Quote with this Service</span>
                  </button>
                  <button
                    onClick={() => setServiceModalOpen(false)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                  >
                    Close Specs Sheet
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL 3: CONTACT SUPPORT ASSISTANT */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSupportModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full border border-slate-100">
              
              {/* Header */}
              <div className="bg-[#1c2230] px-6 py-4 flex justify-between items-center text-white border-b border-amber-500/20">
                <div className="flex items-center space-x-2">
                  <HeartHandshake className="w-5 h-5 text-amber-500" />
                  <span className="font-bold text-lg">Contact RVM Support</span>
                </div>
                <button
                  onClick={() => setSupportModalOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!supportSent ? (
                <form onSubmit={handleSupportSubmit} className="p-6 space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={supportName}
                      onChange={(e) => setSupportName(e.target.value)}
                      placeholder="e.g. Radhika Sen"
                      className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={supportEmail}
                      onChange={(e) => setSupportEmail(e.target.value)}
                      placeholder="e.g. radhika@example.com"
                      className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Target Department</label>
                    <select
                      value={supportDept}
                      onChange={(e) => setSupportDept(e.target.value)}
                      className="w-full border border-slate-200 rounded p-2.5 bg-white text-sm focus:border-amber-500 focus:outline-none"
                    >
                      <option value="sales">New Construction Queries (Sales)</option>
                      <option value="architecture">Architectural Review & Floor Plans</option>
                      <option value="careers">Careers & Subcontracting</option>
                      <option value="support">Post-Handover Maintenance Warranty</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">How can we assist you?</label>
                    <textarea
                      required
                      rows={4}
                      value={supportMsg}
                      onChange={(e) => setSupportMsg(e.target.value)}
                      placeholder="Specify plot dimensions, structural requirements, or warranty questions..."
                      className="w-full border border-slate-200 rounded p-2.5 text-sm focus:border-amber-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setSupportModalOpen(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#111] hover:bg-amber-500 hover:text-black text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-sm flex items-center space-x-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Query</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-300">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900">Query Registered Successfully</h4>
                    <p className="text-sm text-slate-500">
                      Hello {supportName}, your message has been delivered directly to our <span className="font-semibold text-[#1c2230]">{supportDept} team</span>. 
                    </p>
                  </div>
                  <p className="text-xs text-slate-400">
                    We will respond back on {supportEmail} within 2 hours. Have a productive day!
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSupportModalOpen(false)}
                      className="bg-[#111] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-sm"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
