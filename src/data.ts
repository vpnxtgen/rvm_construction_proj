export interface Package {
  id: string;
  name: string;
  price: string;
  unit: string;
  isPopular?: boolean;
  features: string[];
  textColor: string;
  bgColor: string;
  btnStyle: string;
}

export interface RoadmapStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarLetter: string;
  bgColor: string;
}

export const STATS = [
  { value: "5+", label: "PROJECTS COMPLETED" },
  { value: "5+", label: "CITIES COVERED" },
  { value: "96%", label: "ON-TIME DELIVERY" },
  { value: "10Y", label: "STRUCTURAL WARRANTY" },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: "01",
    title: "Lets Get Started",
    description: "Enquire and schedule an appointment with our experts to discuss your requirements and get an estimated quote.",
  },
  {
    number: "02",
    title: "Design Specification",
    description: "Our in-house architects transform your requirements into a detailed, Vaastu-compliant virtual blueprint.",
  },
  {
    number: "03",
    title: "Client Agreement",
    description: "Transparent pricing and fixed-cost guarantees with legal agreements. No subcontracting involved.",
  },
  {
    number: "04",
    title: "Construction & Updates",
    description: "Execution begins with real-time tracking via our app and monthly expert reviews at the site.",
  },
  {
    number: "05",
    title: "Site Visits",
    description: "Regular inspections by architects and project managers to ensure 100% adherence to quality standards.",
  },
  {
    number: "06",
    title: "Handover",
    description: "Successful completion and transition of the fully finished property to your joy with a handover kit.",
  },
];

export const PACKAGES: Package[] = [
  {
    id: "essential",
    name: "Essential",
    price: "₹2,100",
    unit: "/ sqft",
    features: [
      "Standard design & specs",
      "Quality civil work",
      "Essential finishing",
      "Standard plumbing & electricals",
      "10-Year structural warranty",
    ],
    textColor: "text-white",
    bgColor: "bg-[#111A3E] border border-rvm-card-border",
    btnStyle: "bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C]",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹2,400",
    unit: "/ sqft",
    isPopular: true,
    features: [
      "Enhanced design options",
      "Superior finishing materials",
      "Modular kitchen basic",
      "Premium sanitaryware & flooring",
      "Smart home preparation",
      "Dedicated project manager",
    ],
    textColor: "text-white",
    bgColor: "bg-[#111A3E] border-2 border-rvm-gold relative scale-105 shadow-xl z-10",
    btnStyle: "bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C]",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "₹2,800",
    unit: "/ sqft",
    features: [
      "Architectural masterpieces",
      "Italian marble options",
      "Smart home automation",
      "Premium modular kitchen & wardrobes",
      "Exquisite landscapes & deck design",
      "Lifetime design consultancy support",
    ],
    textColor: "text-white",
    bgColor: "bg-[#111A3E] border border-rvm-card-border",
    btnStyle: "bg-rvm-gold hover:bg-rvm-gold-hover text-[#0B122C]",
  },
  /*{
    id: "green-home",
    name: "Green Home",
    price: "₹1,900",
    unit: "/ sqft",
    features: [
      "Eco-friendly materials",
      "Solar & Rainwater tech",
      "Energy efficient design",
      "Natural lighting optimization",
      "Waste management solutions",
      "Green rating certifications",
    ],
    textColor: "text-[#0B122C]",
    bgColor: "bg-white border border-gray-200",
    btnStyle: "bg-[#0B122C] hover:bg-slate-800 text-white",
  }*/
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "RVM Constructions made our home building journey effortless. Their transparent pricing and the VR walkthrough were game changers for us to visualize our dream home.",
    author: "Deepa R.",
    role: "Homeowner, Bengaluru",
    avatarLetter: "D",
    bgColor: "bg-[#F4F1EA]",
  },
  {
    quote: "The eco-friendly green home package exceeded my expectations. Not only is the house beautiful, but it stays naturally cool and saves significantly on power and water.",
    author: "Sahasra M.",
    role: "Homeowner, Mysuru",
    avatarLetter: "S",
    bgColor: "bg-[#0B122C] text-white",
  },
];

export const LOCATIONS = [
  "Bengaluru (H.O)",
];

export const MEDIA_LOGOS = [
  "YourStory",
  "The Better India",
  "RealtyNxt",
  "StartupPedia",
  "Hindustan Metro",
];
