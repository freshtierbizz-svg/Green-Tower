Document: Project Memory Snapshot
Version: v001
Date: 2026-09-07
Status: Current (Snapshot v001)
Supersedes: (none)
Superseded by: (none)
Authoring agent/department: Cross-Department Strategy, UX, Engineering Lead
Human approval status: Pending Approval (Phase 1 Baseline)

# AeroHarvest.com.au — PROJECT MEMORY (v001 Snapshot)

## 1. Brand Identity & Positioning Context
- **Brand**: AeroHarvest
- **Primary Domain**: AeroHarvest.com.au
- **Product Focus**: Premium high-tech vertical aeroponics greenhouse system for residential and urban agricultural use.
- **Brand Essence**: Sophisticated agricultural technology / controlled-environment hardware brand. Anti-template, anti-dropshipping, anti-cheap garden blog.
- **Target Persona**: Affluent homeowners, urban farmers, eco-conscious technology enthusiasts, health-conscious families growing clean produce.

## 2. Commercial & Pricing Principles
- **Landed Cost**: Approximately AUD $159–$170 (product + shipping to Australia).
- **Pricing Mandate**: Do not automatically position as a $1,000+ item. Benchmarked against real Australian competitors in the AUD $450–$800 range.
- **Recommended Retail Price**: AUD $599 – $649 (Base System) / AUD $699 (Complete Growing Kit with Starter Nutrients & Seedling Trays).
- **Margin Structure**: ~72%–75% gross margin, providing sustainable CAC, localized Australian warranty support, and business scalability.
- **Business Reality Rule**: Zero deceptive urgency, zero fake countdowns, zero fake social proof, zero fake scarcity. Conversions must be driven by absolute transparency and genuine product value.

## 3. Product Truth & Claim Control (Non-Negotiable)
- **Product Truth Authority**: Every material factual claim must be registered in `PRODUCT_TRUTH.md` with a unique Claim ID, evidence tier (1-6), verification status, verification date, and restrictions.
- **Claim Status Rule**: Claims marked `Supplier Claim — Unverified`, `Pending Verification`, or `Requires Review` MUST NOT appear in customer-facing production copy as established facts. Unverified product specs or yield figures use explicit placeholders (e.g. `[PRODUCT_YIELD_TBD]`, `[REPLACE_WITH_VERIFIED_DATA]`).

## 4. Commerce Architecture Principles
- **Architecture Direction**: Headless AeroHarvest frontend (Next.js/React + Tailwind CSS) with Shopify providing commerce infrastructure (products, inventory, checkout, payment gateway, order processing).
- **Core Engineering Constraint**: Do NOT build custom payment processors, custom cart databases, custom checkout, custom order-processing, or parallel authentication systems.
- **Customer Account Strategy**: Shopify-hosted customer account pages linked seamlessly from AeroHarvest (simplest, safest, most maintainable for v1).
- **Shopify Buy Button Integration**: Frontend provides clean injection containers (`#shopify-buy-button-hero`, `#shopify-buy-button-final`) with centralized configuration fallbacks (`SHOPIFY_BUY_BUTTON_ENABLED`, `SHOPIFY_PRODUCT_ID`).

## 5. AI Search & AI Commerce Strategy
- **4 Outcomes**:
  1. AI Discoverability (crawlable semantic HTML markup).
  2. AI Recommendation (authoritative product info via Schema.org Product markup).
  3. AI Click-through (clear canonical product URLs and landing paths).
  4. AI-native Commerce (compatibility for future feed-based / native platform checkout).
- **AI Commerce Reality Check**: Strictly separate immediate website features from feed dependencies (Google Merchant Center) and speculative AI purchasing capabilities.

## 6. Australian Commerce & Legal Governance
- **Consumer Law (ACL)**: Statutory guarantees on durability and fitness for purpose apply regardless of manufacturer warranty duration. Clear Australian refund/return policy required.
- **Pricing & GST**: Displayed retail prices in AUD must be inclusive of 10% GST. Shipping costs must be clearly disclosed before checkout.
- **Privacy & Data**: Privacy Policy compliant with Australian Privacy Principles (APPs). No independent customer credential storage.
