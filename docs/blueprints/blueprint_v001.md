Document: E-commerce Architecture Blueprint
Version: v001
Date: 2026-09-07
Status: Approved Baseline
Supersedes: (none)
Superseded by: (none)
Authoring agent/department: Cross-Department Deliberation Council (Strategy, UX, Engineering)
Human approval status: Approved by Human on 2026-09-08

Working Instruction Status: Until a specific version of this Governance Prompt is explicitly approved by a human, agents must follow it as the current working instruction but must not represent it as an approved project baseline.

CHANGE IMPACT SUMMARY — Initial Baseline (v001)
1. E-Commerce Architecture Blueprint v001 initialized following multi-department deliberation across Strategy, UX, and Engineering.
2. Recommended Retail Price baseline set at AUD $599 Base System / AUD $699 Complete Kit.
3. Headless Next.js + Shopify Buy Button SDK validated as primary commerce architecture.
4. Unresolved High-Impact Decision Register established for Phase 2 Human Approval Gate.

---

# E-COMMERCE ARCHITECTURE BLUEPRINT (v001)
**Project**: AeroHarvest.com.au  
**Date**: 2026-09-07  
**Governance Version**: Master Project Governance Prompt v004  

---

## 1. Executive Summary & Strategic Core
This Blueprint establishes the complete commercial, user experience, and engineering specification for **AeroHarvest.com.au**. AeroHarvest is a premium, high-converting e-commerce web platform for an advanced vertical aeroponic greenhouse system.

The platform combines a **headless Next.js static frontend** (delivering Apple-grade visual aesthetics, lightning performance, and AI-search discoverability) with **Shopify's proven commerce infrastructure** (handling product management, inventory, cart session, payment processing, PCI compliance, and customer accounts).

---

## 2. Recommended Commercial Strategy & Pricing Justification

### Pricing Baseline
- **AeroHarvest Base System**: **AUD $299.00** (5-Tier Compact) / **AUD $349.00** (7-Tier Standard) / **AUD $449.00** (11-Tier Family Powerhouse) (GST Inclusive).
- **AeroHarvest Complete Growing Kit**: **+$100.00 AUD** add-on (**AUD $399.00** / **AUD $449.00** / **AUD $549.00** GST Inclusive — includes starter nutrients, nursery tray, pH testing kit, and coco plugs).

### "Why This Price?" Justification (Grounded in `docs/research/competitive_pricing_research_v001.md`)
- **Landed Cost & Gross Margin**: Landed cost is **AUD $159–$170**. At $599 AUD, gross profit is ~$430 AUD (~73% gross margin). At $699 AUD, gross profit is ~$530 AUD (~77% gross margin). This provides the capital necessary for customer acquisition, local Australian warranty fulfillment, and business scaling.
- **Competitor Benchmarking**:
  - Undercuts primary residential competitor **Airgarden** ($799 AUD RRP) by $100–$200 AUD while presenting a more modern, high-tech aesthetic.
  - Aligns with mid-range modular competitor **Mr Stacky Air Stacky** ($580–$680 AUD), winning on brand trust and materials.
  - Distances AeroHarvest from cheap, low-grade unbranded PVC imports ($120–$350 AUD).

---

## 3. Commerce Architecture & Integration Model

### Architecture Paradigm: Headless AeroHarvest Frontend + Shopify Backend
- **Frontend Layer**: Next.js / React + Tailwind CSS hosted on Vercel/Netlify.
- **Commerce Infrastructure**: Shopify Core (Storefront & Admin).
- **Checkout & Payments**: Native Shopify Checkout (Shop Pay, Credit Card, Afterpay, Apple Pay).

### Prohibited Architecture Elements (Non-Negotiable)
- NO custom payment gateways or custom payment forms.
- NO custom cart database or server-side cart state.
- NO custom checkout pages or order processing logic.
- NO parallel customer authentication database.

### Shopify Buy Button Containers & Centralized Configuration
Frontend provides pre-styled, shift-free container elements:
- Hero Purchase Area: `<div id="shopify-buy-button-hero"></div>`
- Final Purchase Area: `<div id="shopify-buy-button-final"></div>`

All configuration driven by `src/config/product.config.ts` using centralized fallbacks:
- `SHOPIFY_BUY_BUTTON_ENABLED`
- `SHOPIFY_PRODUCT_ID` (`[SHOPIFY_PRODUCT_ID_TBD]`)
- `SHOPIFY_STORE_DOMAIN`

---

## 4. Customer Account Architecture

### Recommendation: Shopify-Hosted Customer Accounts
- **Mechanism**: Subtle "My Account" link in header navigation pointing directly to Shopify's hosted customer portal (`https://aeroharvest.myshopify.com/account` or custom domain `account.aeroharvest.com.au`).
- **Benefits**:
  - Zero custom authentication code or database overhead.
  - Zero password liability or security vulnerability.
  - Out-of-the-box order tracking, historical invoices, and customer profile management.

---

## 5. AI Search & Discoverability Architecture

### Implementation Strategy
1. **Semantic HTML5**: Crawlable, machine-readable headings and definition lists (`<dl>`) for specifications.
2. **Structured Data (Schema.org)**: Complete JSON-LD `Product` and `Offer` schema dynamically linked to `product.config.ts`.
3. **AI Commerce Reality Check**: Strictly separate implementable features (Schema.org, Open Graph, Sitemap) from merchant feed sync (Google Merchant Center) and speculative AI checkout capabilities.

---

## 6. Australian Legal & Regulatory Compliance Framework
- **Australian Consumer Law (ACL)**: Clear disclosure of statutory consumer rights; warranty terms must complement ACL guarantees.
- **GST Compliance**: All prices presented on AeroHarvest.com.au displayed inclusive of 10% GST.
- **Privacy Principles**: Privacy policy adhering to Australian Privacy Principles (APPs); no user credentials collected on custom servers.

---

## 7. BLUEPRINT READINESS GATE — Unresolved High-Impact Decision Register

Before Phase 2 Approval and Phase 3 Engineering Execution, the following decisions require human confirmation:

| Decision ID | Subject / Topic | Option A (Recommended) | Option B (Alternative) | Required Human Action |
| :--- | :--- | :--- | :--- | :--- |
| **REG-DEC-01** | Retail Price Point | **AUD $599 Base / $699 Kit** (~75% Margin) | AUD $699 Base / $799 Kit | Approve Recommended Price |
| **REG-DEC-02** | Customer Account Model | **Shopify-Hosted Account Portal** | Custom Storefront API Auth (Higher Complexity) | Approve Hosted Accounts |
| **REG-DEC-03** | Product Yield Wording | **Use `[PRODUCT_YIELD_TBD]`** until tested | State estimated 5–8kg/mo with disclaimer | Approve Placeholder Policy |
| **REG-DEC-04** | Warranty Duration | **2-Year Replacement Warranty** | 1-Year Standard Warranty | Confirm Warranty Term |

---

## 8. Next Steps & Approval Protocol
1. **Human Approval Gate (Phase 2)**: Human reviewer must review and explicitly approve `blueprint_v001.md`.
2. **Phase 3 Transition**: Upon approval, create `IMPLEMENTATION_BASELINE_v001.md` and initiate frontend component development.
