import React from 'react';
import { PRODUCT_CONFIG } from '../config/product.config';

export const StructuredData: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": PRODUCT_CONFIG.name,
    "image": [
      "assets/real-tower-studio.png"
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
        "name": "FreshTier Base Vertical System",
        "url": "https://freshtier.com.au/#hardware",
        "priceCurrency": PRODUCT_CONFIG.pricing.currency,
        "price": PRODUCT_CONFIG.pricing.baseAmountAUD.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "FreshTier Australia"
        }
      },
      {
        "@type": "Offer",
        "name": "FreshTier Complete Growing Kit",
        "url": "https://freshtier.com.au/#hardware",
        "priceCurrency": PRODUCT_CONFIG.pricing.currency,
        "price": PRODUCT_CONFIG.pricing.kitAmountAUD.toFixed(2),
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "FreshTier Australia"
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
