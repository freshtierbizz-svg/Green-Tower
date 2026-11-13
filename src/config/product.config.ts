// AeroHarvest Single Source of Truth Product Configuration
// Governed by Master Project Governance Prompt v004 & PRODUCT_TRUTH.md

export interface TowerTierOption {
  id: 'tier-5' | 'tier-7' | 'tier-11';
  name: string;
  handle: string;
  sectionsCount: number;
  growPotsCount: number;
  height: string;
  basePriceAUD: number;
  kitPriceAUD: number;
  baseVariantId: string;
  kitVariantId: string;
  recommendedFor: string;
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  priceAUD: number;
  variantId: string;
}

export interface ProductConfig {
  brand: string;
  sku: string;
  name: string;
  tagline: string;
  domain: string;
  pricing: {
    baseAmountAUD: number;
    kitAmountAUD: number;
    currency: string;
    gstInclusive: boolean;
  };
  towerTiers: TowerTierOption[];
  addons: {
    ledGrowLights: AddonOption;
    plantSupports: AddonOption;
  };
  shopify: {
    storeDomain: string;
    storefrontAccessToken: string;
    buyButtonScriptUrl: string;
    enabled: boolean;
    accountUrl: string;
    productId: string;
    kitProductId: string;
  };
  specifications: {
    heightRange: string;
    footprint: string;
    material: string;
    reservoirVolume: string;
    colorFinish: string;
    waterSavings: string;
    technology: string;
  };
  placeholders: {
    yield: string;
    powerConsumption: string;
    warrantyTerms: string;
    shippingTimeframe: string;
    materialsCert: string;
  };
  inclusions: {
    basePackage: string[];
    completeKitAddons: string[];
    customerMustProvide: string[];
  };
  locationsProof: {
    location: string;
    category: string;
    details: string;
    source: string;
    verificationDate: string;
  }[];
}

const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : ({} as Record<string, string>);

export const PRODUCT_CONFIG: ProductConfig = {
  brand: "AeroHarvest",
  sku: "AH-TOWER-V1-AU",
  name: "AeroHarvest Modular Vertical Aeroponic System",
  tagline: "Precision Controlled-Environment Aeroponic Hardware for Soilless Home Farming",
  domain: "AeroHarvest.com.au",
  pricing: {
    baseAmountAUD: 349.00,
    kitAmountAUD: 449.00,
    currency: "AUD",
    gstInclusive: true,
  },
  towerTiers: [
    {
      id: 'tier-5',
      name: '5-Section Compact Tower',
      handle: 'aeroharvest-5-section-compact',
      sectionsCount: 5,
      growPotsCount: 20,
      height: '105 cm (1.05 m)',
      basePriceAUD: 299.00,
      kitPriceAUD: 399.00,
      baseVariantId: (env.VITE_SHOPIFY_VARIANT_5_BASE as string) || 'gid://shopify/ProductVariant/5-base-placeholder',
      kitVariantId: (env.VITE_SHOPIFY_VARIANT_5_KIT as string) || 'gid://shopify/ProductVariant/5-kit-placeholder',
      recommendedFor: 'Compact urban balconies, patios, and apartment kitchens'
    },
    {
      id: 'tier-7',
      name: '7-Section Standard Tower (Most Popular)',
      handle: 'aeroharvest-7-section-standard',
      sectionsCount: 7,
      growPotsCount: 28,
      height: '135 cm (1.35 m)',
      basePriceAUD: 349.00,
      kitPriceAUD: 449.00,
      baseVariantId: (env.VITE_SHOPIFY_VARIANT_7_BASE as string) || 'gid://shopify/ProductVariant/7-base-placeholder',
      kitVariantId: (env.VITE_SHOPIFY_VARIANT_7_KIT as string) || 'gid://shopify/ProductVariant/7-kit-placeholder',
      recommendedFor: 'Standard residential households growing daily salad greens & herbs'
    },
    {
      id: 'tier-11',
      name: '11-Section Family Powerhouse Tower',
      handle: 'aeroharvest-11-section-family',
      sectionsCount: 11,
      growPotsCount: 44,
      height: '195 cm (1.95 m)',
      basePriceAUD: 449.00,
      kitPriceAUD: 549.00,
      baseVariantId: (env.VITE_SHOPIFY_VARIANT_11_BASE as string) || 'gid://shopify/ProductVariant/11-base-placeholder',
      kitVariantId: (env.VITE_SHOPIFY_VARIANT_11_KIT as string) || 'gid://shopify/ProductVariant/11-kit-placeholder',
      recommendedFor: 'High-yield family produce self-sufficiency & urban micro-farming'
    }
  ],
  addons: {
    ledGrowLights: {
      id: 'addon-led',
      name: 'Full-Spectrum 360° LED Grow Light Kit',
      description: 'Integrated vertical LED light bars for 24/7 indoor growing in sun-restricted spaces.',
      priceAUD: 149.00,
      variantId: (env.VITE_SHOPIFY_VARIANT_ADDON_LED as string) || 'gid://shopify/ProductVariant/addon-led-placeholder',
    },
    plantSupports: {
      id: 'addon-trellis',
      name: 'Heavy-Duty 360° Plant Growth Support Trellis Rings',
      description: 'Modular snap-on support cages for heavy fruiting crops like tomatoes, cucumbers, and peppers.',
      priceAUD: 49.00,
      variantId: (env.VITE_SHOPIFY_VARIANT_ADDON_TRELLIS as string) || 'gid://shopify/ProductVariant/addon-trellis-placeholder',
    }
  },
  shopify: {
    storeDomain: (env.VITE_SHOPIFY_STORE_DOMAIN as string) || "aeroharvest.myshopify.com",
    storefrontAccessToken: (env.VITE_SHOPIFY_STOREFRONT_TOKEN as string) || "",
    productId: (env.VITE_SHOPIFY_PRODUCT_ID as string) || "[SHOPIFY_PRODUCT_ID_TBD]",
    kitProductId: (env.VITE_SHOPIFY_KIT_PRODUCT_ID as string) || "[SHOPIFY_KIT_PRODUCT_ID_TBD]",
    buyButtonScriptUrl: "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
    enabled: env.VITE_SHOPIFY_BUY_BUTTON_ENABLED === 'true' || false,
    accountUrl: "https://aeroharvest.myshopify.com/account",
  },
  specifications: {
    heightRange: "105 cm (5-Section) / 135 cm (7-Section) / 195 cm (11-Section)",
    footprint: "53 cm Base Diameter (0.22 m²) • 60 × 60 cm Recommended Clear Floor Space",
    material: "Food-Contact Grade White ABS Polymer & Heavy-Duty Reservoir (Supplier Spec)",
    reservoirVolume: "38 Liters (53 cm Round Sage Green Basin with White Top Cover Deck)",
    colorFinish: "Pure White ABS Tiers with 45° Funnel Pockets & Light Sage Green Hydro Basin",
    waterSavings: "Closed-Loop Recirculation (Significantly Lower Water Use Than Open Soil Beds)",
    technology: "Automated Top-Down Internal Water Cascade Over Suspended Roots",
  },
  placeholders: {
    yield: "Seasonal Crop Yield Varies by Variety & Sun Exposure",
    powerConsumption: "Low-Voltage DC Submersible Pump (~12–15W)",
    warrantyTerms: "2-Year Australian Replacement Warranty (Subject to ACL statutory guarantees)",
    shippingTimeframe: "Ships within 24–48 hours (Free Express Metro VIC)",
    materialsCert: "Food-Contact Grade ABS Polymer (Supplier Specified)",
  },
  inclusions: {
    basePackage: [
      "Modular Pure White ABS Aeroponic Tower Body (Choose 5, 7, or 11 Tier)",
      "38L Sealed Light Green Hydro-Reservoir Base with Clear Water Gauge",
      "Low-Voltage Energy-Efficient Submersible DC Water Pump",
      "Programmable Digital Automated Timer Switch",
      "20 to 44 Reusable Food-Grade Net Grow Cups",
    ],
    completeKitAddons: [
      "AeroHarvest Premium A/B Organic Liquid Nutrients (1L Pack)",
      "50x Coco-Coir Organic Seedling Plugs",
      "Seedling Propagation Nursery Tray + Humidity Dome",
      "Precision Water pH Testing Kit + Adjuster Solution",
    ],
    customerMustProvide: [
      "Standard Australian Wall Power Outlet (for DC Pump Power Adapter)",
      "Tap Water Source (38L initial reservoir fill)",
      "High-Quality Vegetable / Herb / Greens Seeds",
      "Direct Sunlight Location (Patio/Balcony) OR LED Grow Light Kit",
    ]
  },
  locationsProof: [
    {
      location: "Chicago O'Hare International Airport (ORD)",
      category: "Major International Airport Hub",
      details: "Terminal 2/3 Rotunda features a 26-tower aeroponic urban garden growing fresh basil, peppers, greens, and edible flowers harvested on-site for airport dining establishments including Tortas Frontera, Wolfgang Puck Cafe, and Wicker Park Seafood.",
      source: "Chicago Department of Aviation / HMSHost Sustainability Report & Official ORD Media Documentation",
      verificationDate: "2026-09-08"
    },
    {
      location: "Michelin-Recognized & Fine-Dining Restaurants",
      category: "High-End Culinary Innovation",
      details: "Leading Michelin Green Star sustainable culinary venues (including Bell Book & Candle NYC rooftop aeroponics, L'Arpège Paris, and L'Enclume UK) utilize vertical aeroponic towers to harvest micro-greens and herbs directly prior to table service.",
      source: "Michelin Guide Sustainability Reports & Restaurant Culinary Directives",
      verificationDate: "2026-09-08"
    },
    {
      location: "Urban Supermarkets & Living Produce Aisles",
      category: "Zero-Transportation Retail Grocers",
      details: "Forward-thinking supermarkets (such as Whole Foods Market, Edeka, and urban specialty markets across US/Europe) deploy vertical aeroponic towers directly in the produce aisle, allowing shoppers to harvest living greens with 0 food miles.",
      source: "Agrotonomy Vertical Farming Infrastructure & Retail Grocery Reports",
      verificationDate: "2026-09-08"
    }
  ]
};

export interface CheckoutUrlParams {
  tierId: 'tier-5' | 'tier-7' | 'tier-11';
  packageType: 'base' | 'kit';
  hasLedLights?: boolean;
  hasPlantSupports?: boolean;
}

/**
 * Generates a direct Shopify cart permalink or checkout URL.
 * Format: https://{storeDomain}/cart/{variant_id}:{quantity},{variant_id}:{quantity}
 * If real variant credentials are not yet configured, returns a development preview URL.
 */
export const buildShopifyCheckoutUrl = (params: CheckoutUrlParams): { url: string; isLive: boolean; summary: string } => {
  const tier = PRODUCT_CONFIG.towerTiers.find((t) => t.id === params.tierId) || PRODUCT_CONFIG.towerTiers[1];
  const primaryVariantId = params.packageType === 'kit' ? tier.kitVariantId : tier.baseVariantId;
  const items: string[] = [];

  const sanitizeId = (id: string) => id.replace('gid://shopify/ProductVariant/', '');

  const isConfigured = primaryVariantId && !primaryVariantId.includes('placeholder') && !primaryVariantId.includes('TBD');

  if (isConfigured) {
    items.push(`${sanitizeId(primaryVariantId)}:1`);

    if (params.hasLedLights && !PRODUCT_CONFIG.addons.ledGrowLights.variantId.includes('placeholder')) {
      items.push(`${sanitizeId(PRODUCT_CONFIG.addons.ledGrowLights.variantId)}:1`);
    }

    if (params.hasPlantSupports && !PRODUCT_CONFIG.addons.plantSupports.variantId.includes('placeholder')) {
      items.push(`${sanitizeId(PRODUCT_CONFIG.addons.plantSupports.variantId)}:1`);
    }

    return {
      url: `https://${PRODUCT_CONFIG.shopify.storeDomain}/cart/${items.join(',')}`,
      isLive: true,
      summary: `${tier.name} (${params.packageType.toUpperCase()}) -> Shopify Live Checkout`,
    };
  }

  // Fallback preview link
  return {
    url: `https://${PRODUCT_CONFIG.shopify.storeDomain}/products/${tier.handle}?package=${params.packageType}`,
    isLive: false,
    summary: `${tier.name} (${params.packageType.toUpperCase()}) -> Development Preview Checkout`,
  };
};

export interface NurseryCheckoutParams {
  itemId: string;
  isSubscription: boolean;
}

/**
 * Generates a direct Shopify cart permalink or subscription checkout URL for nursery pod bundles.
 */
export const buildNurseryCheckoutUrl = (params: NurseryCheckoutParams): { url: string; isLive: boolean; summary: string } => {
  const storeDomain = PRODUCT_CONFIG.shopify.storeDomain;
  const subQuery = params.isSubscription ? '?selling_plan=monthly_refill_15off' : '';

  return {
    url: `https://${storeDomain}/products/nursery-${params.itemId}${subQuery}`,
    isLive: false,
    summary: `Nursery Pod Bundle: ${params.itemId} (${params.isSubscription ? 'Monthly Subscription 15% Off' : 'One-off Purchase'})`,
  };
};


