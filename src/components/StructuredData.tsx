import React from 'react';
import { PRODUCT_CONFIG } from '../config/product.config';

export const StructuredData: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": PRODUCT_CONFIG.name,
    "image": [
      "https://aeroharvest.com.au/assets/aeroharvest-tower-hero.jpg"
    ],
    "description": PRODUCT_CONFIG.tagline,
    "sku": PRODUCT_CONFIG.sku,
    "brand": {
      "@type": "Brand",
      "name": PRODUCT_CONFIG.brand
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "AeroHarvest Base Aeroponic System",
        "url": "https://aeroharvest.com.au/#hardware",
        "priceCurrency": PRODUCT_CONFIG.pricing.currency,
        "price": PRODUCT_CONFIG.pricing.baseAmountAUD.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "AeroHarvest Australia"
        }
      },
      {
        "@type": "Offer",
        "name": "AeroHarvest Complete Growing Kit",
        "url": "https://aeroharvest.com.au/#hardware",
        "priceCurrency": PRODUCT_CONFIG.pricing.currency,
        "price": PRODUCT_CONFIG.pricing.kitAmountAUD.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "AeroHarvest Australia"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
    />
  );
};
