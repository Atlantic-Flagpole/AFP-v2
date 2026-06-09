/**
 * FLAGGY'S COMPREHENSIVE KNOWLEDGE BASE FOR AFP-V2
 * Real product specs from Shopify + comprehensive brand intelligence
 * Flaggy uses this to answer ANY question about AFP products
 */

// Real product specs pulled from Shopify + memory
export const FLAGPOLE_SPECS = {
  "phoenix-premier-15ft": {
    name: "Phoenix Premier 15ft Flagpole Kit",
    height: "15 feet",
    material: "12-Gauge Aircraft Aluminum",
    wallThickness: "0.125 inches",
    diameterBase: "3.5 inches",
    diameterTop: "1.5 inches",
    weight: "8.5 lbs",
    windRating: "75 mph",
    installationTime: "30 minutes",
    flashCollarSize: "3 inch",
    flagIncluded: "3x5 American Flag",
    includes: [
      "Telescoping aluminum pole",
      "3x5 American Flag (Double-Stitched Nylon)",
      "Ground spike base mount",
      "Halyard & pulley system",
      "Installation hardware kit",
      "Instructions & warranty",
    ],
    useCases: ["Residential homes", "Small yards", "First-time flag flyers"],
    colors: ["Silver", "White", "Bronze"],
    warranty: "Forever Warranty™",
  },

  "phoenix-premier-20ft": {
    name: "Phoenix Premier 20ft Flagpole Kit",
    height: "20 feet",
    material: "12-Gauge Aircraft Aluminum",
    wallThickness: "0.125 inches",
    diameterBase: "4 inches",
    diameterTop: "1.75 inches",
    weight: "12 lbs",
    windRating: "80 mph",
    installationTime: "30 minutes",
    flashCollarSize: "4 inch",
    flagIncluded: "4x6 Embroidered American Flag",
    includes: [
      "Telescoping aluminum pole",
      "4x6 Embroidered American Flag",
      "Ground spike base mount",
      "Halyard & pulley system",
      "Installation hardware kit",
      "Instructions & warranty",
    ],
    useCases: ["Residential homes", "Medium yards", "More visibility"],
    colors: ["Silver", "White", "Bronze"],
    warranty: "Forever Warranty™",
  },

  "phoenix-premier-25ft": {
    name: "Phoenix Premier 25ft Flagpole Kit",
    height: "25 feet",
    material: "12-Gauge Aircraft Aluminum",
    wallThickness: "0.125 inches",
    diameterBase: "4.5 inches",
    diameterTop: "2 inches",
    weight: "15 lbs",
    windRating: "85 mph",
    installationTime: "45 minutes",
    flashCollarSize: "4.5 inch",
    flagIncluded: "4x6 Embroidered American Flag",
    includes: [
      "Telescoping aluminum pole (25ft reach)",
      "4x6 Embroidered American Flag",
      "Weighted ground base (20 lbs)",
      "Heavy-duty halyard & pulley",
      "Stainless steel hardware",
      "Installation hardware kit",
      "Instructions & Forever Warranty™",
    ],
    useCases: ["Residential homes", "Large properties", "Maximum presence"],
    colors: ["Silver", "White", "Bronze"],
    warranty: "Forever Warranty™",
  },
};

export const ADD_ONS = {
  "solar-light-800": {
    name: "800-Series Solar Light Kit",
    price: 89,
    description: "Auto on/off at dusk/dawn. Ultra-bright LED. Perfect night visibility.",
    brightness: "800 lumens",
    compatibility: "All flagpole sizes",
    features: ["Auto on/off sensor", "Waterproof", "Weatherproof", "Easy installation"],
  },

  "solar-light-1000": {
    name: "1000-Series Solar Light Kit",
    price: 129,
    description: "Premium ultra-bright LED. Maximum nighttime presence.",
    brightness: "1000 lumens",
    compatibility: "All flagpole sizes",
    features: ["Ultra-bright premium LED", "Extended battery life", "Waterproof", "Professional grade"],
  },

  "hardware-titanium": {
    name: "Titanium Hardware Upgrade",
    price: 45,
    description: "Premium 360° rotation bearing. Lifelong durability.",
    material: "Aerospace-grade titanium",
    features: ["Smooth 360° rotation", "Corrosion resistant", "Lifetime durability"],
  },

  "flag-embroidered": {
    name: "Embroidered American Flag",
    price: 49,
    description: "Premium embroidered flag. More durable than printed.",
    sizes: ["3x5", "4x6", "5x8"],
    features: ["Hand-embroidered", "Double-stitched", "5+ year lifespan", "UV resistant"],
  },
};

export const FAQ_KNOWLEDGE = {
  "wind-rating": {
    question: "What does the wind rating mean?",
    answer: "Wind rating indicates the maximum safe wind speed your flagpole can withstand. Our Phoenix poles range from 75-115 MPH depending on size and model. This means they can safely fly flags in normal weather conditions including storms.",
  },

  "installation": {
    question: "How long does installation take?",
    answer: "Most installations take 30-45 minutes with our included hardware kit. No special tools required. Complete instructions are provided. Many customers complete it themselves, though you can hire local help if preferred.",
  },

  "warranty": {
    question: "What's the Forever Warranty™?",
    answer: "Forever Warranty™ is our lifetime guarantee covering all manufacturing defects. If your Phoenix flagpole has a defect, we'll replace it free. This is why we call it 'The Last Flagpole You'll Ever Need.'",
  },

  "materials": {
    question: "Why aircraft aluminum?",
    answer: "Aircraft-grade aluminum is stronger, lighter, and more corrosion-resistant than regular aluminum. It won't rust, dent as easily, or require maintenance. That's why it's used in airplanes and our premium flagpoles.",
  },

  "colors": {
    question: "What colors are available?",
    answer: "All Phoenix models come in Silver, White, and Bronze. Silver is our classic look. White blends into most homes. Bronze has a rich, elegant appearance. Choose based on your home's exterior.",
  },

  "365-day-trial": {
    question: "What's the 365-Day Trial?",
    answer: "Try your flagpole risk-free for a full year. If you're not completely satisfied, return it for a full refund. No questions asked. We're confident you'll love your Phoenix.",
  },

  "assembly": {
    question: "Does it come fully assembled?",
    answer: "The pole comes ready to use—just mount it to the base. The flag attaches via halyard and pulley (ropes). Takes about 30 minutes total.",
  },

  "sizes": {
    question: "How do I choose between 15ft, 20ft, and 25ft?",
    answer: "15ft is perfect for residential homes with standard yards. 20ft is great for medium to larger properties and gives more presence. 25ft is maximum visibility for large estates or commercial areas. Taller = more visible.",
  },

  "ground-spike": {
    question: "Does the ground spike base work in all soil?",
    answer: "Yes! The ground spike design works in most soil types. For very hard ground, you can dig a small pilot hole. For sandy soil, it grips perfectly. Additional weighted bases available for extreme conditions.",
  },

  "flag-replacement": {
    question: "Can I change flags?",
    answer: "Absolutely! The halyard system makes flag changes easy. Swap between American flags, state flags, or specialty flags (POW-MIA, military branch flags, etc.) in seconds.",
  },

  "theft": {
    question: "Can my flag or pole be stolen?",
    answer: "Our SECURI-SHUR™ anti-theft system is available to protect your investment. It uses a locking mechanism that prevents unauthorized removal of the flag or pole.",
  },

  "maintenance": {
    question: "Does it need maintenance?",
    answer: "Almost none! Aluminum doesn't rust. The halyard should be checked annually for wear. That's it. No painting, sealing, or special care needed.",
  },
};

export const BRAND_KNOWLEDGE = {
  name: "Atlantic Flag & Pole",
  tagline: "The Last Flagpole You'll Ever Need",
  founding: "Veteran-owned and operated",
  madeIn: "100% Made in USA",
  values: [
    "American pride and patriotism",
    "Veteran-powered business",
    "Lifetime quality guarantee",
    "Customer-first service",
    "Domestic manufacturing",
  ],
  keyProducts: [
    "Phoenix Premier Series (15ft, 20ft, 25ft)",
    "Phoenix Patriot Series (with solar lights)",
    "Phoenix Presidential Series (premium commercial-grade)",
  ],
  warranties: ["Forever Warranty™ - Lifetime coverage", "365-Day Trial - Risk-free guarantee"],
  exclusiveFeatures: [
    "SECURI-SHUR™ - Anti-theft system",
    "Forever Warranty™ - Lifetime guarantee",
    "Made in USA - Domestic manufacturing",
    "Veteran-owned - Supporting American values",
  ],
};

export const FLASH_COLLAR_COMPATIBILITY = {
  "15ft": "3 inch flash collar",
  "20ft": "4 inch flash collar",
  "25ft": "4.5 inch flash collar",
};

export interface Product {
  id: string;
  handle: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export function formatPrice(price: number | string): string {
  const num = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
}

export function getProductRecommendation(keyword: string, products: Product[]) {
  const lowerKeyword = keyword.toLowerCase();
  return products.find((p) => p.title.toLowerCase().includes(lowerKeyword) || p.handle.includes(lowerKeyword));
}
