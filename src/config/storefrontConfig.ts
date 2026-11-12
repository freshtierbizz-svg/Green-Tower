import { B2CTierOption, B2CPackageAddon, B2BOffer, NurseryItem } from '../types/storefront';

// Feature toggle: set to true when ready to launch the B2B / Hospitality Commercial portal
export const ENABLE_B2B_SECTION = false;

export const STORE_META = {
  brandName: 'AeroHarvest',
  countryTag: 'AUSTRALIA',
  headline: 'GROW UP. NOT OUT.',
  subheadline: 'Fresh food does not need a huge backyard.',
  b2cHeroTitle: 'Grow Up. Not Out.',
  b2cHeroSubtitle: 'Fresh food doesn\'t need a huge backyard.',
  b2cHeroCopy: 'Grow herbs, greens, microgreens, strawberries and other compact crops in just 0.22 m² of space. Harvest what you need, when you need it — from your balcony, patio, courtyard or backyard.',
  b2bHeroTitle: 'Your garnish shouldn\'t arrive in a plastic box.',
  b2bHeroCopy: 'Grow living herbs, microgreens and edible flowers directly in your venue and harvest them when your kitchen or bar actually needs them.',
  contactEmail: 'hello@aeroharvest.com.au',
  phone: '0432 777 813',
  warehouseLocation: 'Melbourne, Victoria (Australian Owned & Operated)',
};

export const B2C_TIERS: B2CTierOption[] = [
  {
    id: '5-tier',
    name: '5-Section Compact Tower',
    subtitle: 'Ideal for small balconies, inner-city apartments & singles/couples',
    growSites: 20,
    heightMeter: 1.25,
    basePrice: 299,
    completeKitPrice: 399,
    idealFor: '1-2 People / Balconies',
    footprint: '60 × 60 cm (0.22 m²)',
    image: 'assets/tower-with-lights-lit.jpg',
  },
  {
    id: '7-tier',
    name: '7-Section Standard Tower',
    subtitle: 'Our most versatile tower for everyday fresh herbs & salad greens',
    growSites: 28,
    heightMeter: 1.52,
    basePrice: 349,
    completeKitPrice: 449,
    popular: true,
    idealFor: '2-4 People / Family Favorites',
    footprint: '60 × 60 cm (0.22 m²)',
    image: 'assets/tier-7-studio.png',
  },
  {
    id: '11-tier',
    name: '11-Section Family Powerhouse',
    subtitle: 'Maximum vertical productivity for high-yield family harvesting',
    growSites: 44,
    heightMeter: 2.10,
    basePrice: 449,
    completeKitPrice: 549,
    idealFor: '4+ People / High-Frequency Harvest',
    footprint: '60 × 60 cm (0.22 m²)',
    image: 'assets/tier-11-commercial.png',
  },
];

export const B2C_ADDONS: B2CPackageAddon[] = [
  {
    id: 'led-lighting',
    name: 'Full-Spectrum 24V DC LED Grow Light System',
    price: 149,
    description: 'Energy-efficient LED bars engineered for indoor growing in low-light apartments & shaded patios.',
    image: 'assets/addon-led-lights.png',
  },
  {
    id: 'trellis-support',
    name: 'Heavy-Duty Vertical Trellis & Plant Support',
    price: 49,
    description: 'Stabilises climbing crops like strawberries, vine tomatoes & heavy herb branches.',
    image: 'assets/real-tower-hardware.png',
  },
];

export const B2B_OFFERS: B2BOffer[] = [
  {
    id: 'pilot-6week',
    name: '6-Week Hospitality Pilot Concierge Service',
    priceTag: '$49.99 / week',
    weeklyPrice: 49.99,
    totalServiceFee: 299.94,
    buyoutPrice: 799,
    badge: 'MOST POPULAR FOR VENUES',
    description: 'Low-risk concierge pilot where we deliver, set up, stock, and maintain the system weekly while your team harvests.',
    features: [
      'Fully assembled 11-tier commercial tower (44 grow sites)',
      '24V DC full-spectrum grow light kit & caster base',
      'Pre-planted with mature starter crops near harvest stage',
      'Weekly on-site technician visits (refill, balance nutrients, swap plants)',
      'Staff harvesting & system management training',
      'Unlock exclusive $799 Pilot Graduate Ownership Price at Week 6 (Save $300)',
      'Hassle-free return option ($49.99 packdown fee if you don\'t continue)',
    ],
  },
  {
    id: 'direct-purchase',
    name: 'Commercial Tower Direct Purchase',
    priceTag: '$1,099 AUD',
    directPrice: 1099,
    badge: 'FULL OWNERSHIP',
    description: 'Outright commercial hardware purchase for established hospitality groups & farm-to-table venues.',
    features: [
      'Complete 11-tier commercial tower & 38L heavy-duty reservoir',
      '44 active growing sites with quick-swap pods',
      '24V DC grow light assembly & heavy-duty lockable caster base',
      'Commercial starter pack (nutrients, pH/EC meters, starter plugs)',
      'Initial setup guidance & staff onboarding kit',
      '2-Year Australian Commercial Hardware Warranty',
      'Access to ongoing seedling nursery plant swaps & consumable subscriptions',
    ],
  },
];

export const NURSERY_CATALOG: NurseryItem[] = [
  {
    id: 'mint-spearmint',
    name: 'Vietnamese & Spearmint Pods (4-Pack)',
    category: 'Cocktail Herbs',
    price: 24.99,
    description: 'Essential high-oil mint variety grown specifically for high-volume Mojitos & cocktail maddling.',
    growthDays: 14,
    tags: ['High Yield', 'Cocktail Essential', 'Fast Regrowth'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'thai-basil',
    name: 'Sweet & Thai Basil Bundle (6-Pack)',
    category: 'Kitchen Herbs',
    price: 32.99,
    description: 'Aromatic basil grown for pesto, pasta, stir-fries, and fragrant garnishes.',
    growthDays: 18,
    tags: ['Kitchen Staple', 'Aromatic', 'Pesto Grade'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1608681290374-27909eb09264?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'salad-crunch',
    name: 'Butterhead & Oakleaf Lettuce Mix (6-Pack)',
    category: 'Salad Greens',
    price: 29.99,
    description: 'Crisp, sweet butterhead and red oakleaf lettuce heads ready to pick leaf-by-leaf.',
    growthDays: 21,
    tags: ['Daily Harvest', 'Crisp Texture', 'Zero Miles'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07ebd1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'microgreens-spicy',
    name: 'Radish & Mustard Microgreen Trays (3-Pack)',
    category: 'Microgreens',
    price: 27.99,
    description: 'Peppery, nutrient-dense microgreens for burger topping, steak garnish, and salads.',
    growthDays: 10,
    tags: ['High Protein', 'Peppery Bite', 'Quick Crop'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'edible-viola',
    name: 'Viola & Nasturtium Edible Flowers (4-Pack)',
    category: 'Edible Flowers',
    price: 34.99,
    description: 'Vibrant, food-safe edible blossoms to elevate desserts, cocktails, and visual plating.',
    growthDays: 25,
    tags: ['Boutique Garnish', 'Pastry & Bar', 'Vibrant Colors'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'family-starter',
    name: 'Family Garden Essentials Bundle (12-Pack)',
    category: 'Family Favourites',
    price: 59.99,
    description: 'Balanced mix of parsley, chives, cos lettuce, baby spinach, and strawberry plugs.',
    growthDays: 20,
    tags: ['Kid Friendly', 'Best Value', 'Multi-Crop'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
  },
];

export const COMPLIANCE_STATEMENT = {
  aclNotice: 'All AeroHarvest products come with guarantees that cannot be excluded under the Australian Consumer Law (ACL). You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage.',
  electricalNotice: 'AeroHarvest growing systems utilize a certified low-voltage DC power architecture powered by an Australian-standard 240V AC to 24V/12V DC safety isolated adapter.',
  disclaimerNotice: 'Yield, savings, and payback figures presented on this website are illustrative estimates based on typical home and hospitality usage patterns, proper plant care, and crop selection. Actual individual performance may vary.',
};

export const B2B_INTEGRATION_CONFIG = {
  // Webhook endpoint (e.g. Zapier, Make, HubSpot, Klaviyo, Slack, or custom API)
  webhookUrl: (import.meta.env.VITE_B2B_WEBHOOK_URL as string) || '',
  // Direct notification email for commercial pilot applications
  leadNotificationEmail: (import.meta.env.VITE_B2B_LEAD_EMAIL as string) || 'commercial@aeroharvest.com.au',
  // Enable browser local persistence so zero venue applications are lost
  enableLocalLeadBackup: true,
  // Simulated processing delay in ms for realistic loading UX
  simulateNetworkLatencyMs: 650,
};

