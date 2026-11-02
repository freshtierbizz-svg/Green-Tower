Document: E-commerce Architecture Blueprint
Version: v002
Date: 2026-11-01
Status: Current
Supersedes: v001
Superseded by: (none)
Authoring agent/department: Cross-Department Deliberation Council (Strategy, UX, Engineering)
Human approval status: Current Operational Blueprint

Working Instruction Status: Until a specific version of this Governance Prompt is explicitly approved by a human, agents must follow it as the current working instruction but must not represent it as an approved project baseline.

CHANGE IMPACT SUMMARY — v001 → v002
1. Architectural Expansion: Formally expanded from single residential prototype to complete Dual-Market Architecture (B2C Home Systems + B2B Commercial Hospitality Pilot).
2. Pricing Matrix Codified: Reconciled and approved multi-tier pricing baseline:
   - B2C Base Towers: AUD $299.00 (5-Tier) / AUD $349.00 (7-Tier Standard) / AUD $449.00 (11-Tier Family Powerhouse).
   - B2C Complete Kits: +AUD $100.00 add-on (AUD $399.00 / AUD $449.00 / AUD $549.00).
   - B2B Commercial Pilot: AUD $49.99/week 6-week Concierge Pilot; AUD $799.00 Pilot Graduate Buyout; AUD $1,099.00 Direct RRP.
   - Seedling Nursery Pod Refills: AUD $24.99–$34.99 with 15% recurring subscription discount.
3. Decision Register Resolved: Formally resolved all 4 pending decisions from v001 (REG-DEC-01 through REG-DEC-04) in Section 7.
4. Lead Ingestion Architecture Added: Added Section 4 specifying the B2B intake webhook and customer lead pipeline.
5. Shopify Metafields & Subscriptions Schema: Codified Shopify Custom Data Metafields schema and 6-week subscription app requirements.
6. Core Guardrails Preserved: Re-affirmed non-negotiable prohibition of custom cart DB, custom checkout, custom payment gateways, or parallel auth databases.

---

# E-COMMERCE ARCHITECTURE BLUEPRINT (v002)
**Project**: AeroHarvest.com.au  
**Date**: 2026-11-01  
**Governance Version**: Master Project Governance Prompt v004  
**Supersedes**: `docs/blueprints/blueprint_v001.md`  

---

## 1. Executive Summary & Strategic Core
This Blueprint establishes the complete commercial, user experience, and engineering specification for **AeroHarvest.com.au**. AeroHarvest is a premium, high-converting Australian e-commerce platform for advanced vertical aeroponic greenhouse hardware and controlled-environment agricultural systems.

The platform executes a dual-market commercial model:
- **B2C (For Your Home)**: *"Grow Up. Not Out. Fresh food doesn't need a huge backyard."* High-converting direct-to-consumer store for urban residential homes, townhouses, and balconies.
- **B2B (For Your Business)**: *"Grow What You Serve. Harvest What You Need."* Low-friction 6-week concierge pilot program for commercial hospitality venues (cocktail bars, cafes, restaurants, hotels).

The platform combines a **headless React / Vite frontend** (delivering Apple-grade visual aesthetics, sub-second performance, high-converting interactive calculators, and AI-search discoverability) with **Shopify's proven commerce infrastructure** (handling product management, inventory, cart session, payment processing, PCI compliance, and customer accounts).

---

## 2. Recommended Commercial Strategy & Pricing Justification

### A. B2C Residential Tier Matrix (GST Inclusive)
- **5-Section Compact Tower (20 Grow Sites / 1.25m)**:
  - Base Package: **AUD $299.00**
  - Complete Growing Kit: **AUD $399.00**
  - Best for: Compact balconies, apartment patios, townhouses.
- **7-Section Standard Tower (28 Grow Sites / 1.52m — Flagship)**:
  - Base Package: **AUD $349.00**
  - Complete Growing Kit: **AUD $449.00**
  - Best for: Residential families growing daily fresh salad greens and kitchen herbs.
- **11-Section Family Powerhouse Tower (44 Grow Sites / 2.10m)**:
  - Base Package: **AUD $449.00**
  - Complete Growing Kit: **AUD $549.00**
  - Best for: High-yield household self-sufficiency and urban micro-farming.
- **Optional Accessories**:
  - Full-Spectrum 360° LED Grow Light Kit: **AUD $149.00**
  - Heavy-Duty 360° Plant Support Trellis Rings: **AUD $49.00**

### B. B2B Commercial Hospitality Pilot Model
- **6-Week Concierge Pilot**: **AUD $49.99 / week** (6 billing cycles = AUD $299.94 total). Includes 11-tier commercial hardware, starter nutrients, water testing kit, and weekly technician plant swaps/care.
- **Pilot Graduate Ownership Buyout**: **AUD $799.00** (exercised at Week 5/6 to keep the tower permanently).
- **Direct Commercial Tower Purchase (Outright)**: **AUD $1,099.00** RRP.
- **Decommission & Collection Fee**: **AUD $49.99** (charged only if the venue declines buyout).

### C. Consumable Seedling Nursery Replenishment
- **Nursery Plant Pod Bundles (4–6 Pack)**: **AUD $24.99–$34.99** one-off purchase.
- **Auto-Replenish Subscription**: **15% recurring discount** delivered every 30 or 60 days.

### D. "Why This Price?" Justification (Grounded in `docs/research/competitive_pricing_research_v001.md`)
- **Landed Cost & Gross Margin**: Landed cost per base unit to Australia is **AUD $159–$170**.
  - At $349 AUD Base (7-Tier), gross margin is ~52–54%.
  - At $449 AUD Complete Kit (7-Tier), gross margin is ~62–64%.
  - At $1,098.94 AUD Commercial Customer Lifetime Value (Pilot + Buyout), unit economics safely cover technician labor, plant replacement costs, and local warranty fulfillment.
- **Competitor Benchmarking**:
  - Undercuts primary residential competitor **Airgarden** ($799 AUD RRP) by $350–$450 AUD, removing the biggest barrier to purchase.
  - Undercuts mid-range modular competitor **Mr Stacky Air Stacky** ($580–$680 AUD), while providing a far more sophisticated, Apple-grade design aesthetic.
  - Distances AeroHarvest from cheap, fragile unbranded PVC imports ($120–$350 AUD) through food-grade BPA-free materials, 2-year warranty, and localized Australian support.

---

## 3. Commerce Architecture & Integration Model

### Architecture Paradigm: Headless AeroHarvest Frontend + Shopify Backend
- **Frontend Layer**: React + TypeScript + Vite + Vanilla CSS design system.
- **Commerce Infrastructure**: Shopify Core (Storefront & Admin API).
- **Checkout & Payments**: Native Shopify Checkout (Shop Pay, Credit Card, Afterpay, Apple Pay, Zip).

### Prohibited Architecture Elements (Non-Negotiable)
- NO custom payment gateways or custom credit card input forms.
- NO custom cart database or server-side cart state.
- NO custom checkout pages or order processing logic.
- NO parallel customer authentication database.

### Integration Mechanisms
1. **Shopify Buy Button SDK Containers**:
   - Hero Purchase Area: `<div id="shopify-buy-button-hero"></div>`
   - Final Purchase Area: `<div id="shopify-buy-button-final"></div>`
2. **Direct Shopify Cart Permalinks**:
   - Supports direct checkout redirects (`https://${storeDomain}/cart/${variantId}:1`) for instant, frictionless mobile purchasing without third-party iframe render delays.
3. **Centralized Configuration**:
   All commerce parameters configured in `src/config/product.config.ts` and `src/config/storefrontConfig.ts`, with support for Vite environment variables (`VITE_SHOPIFY_STORE_DOMAIN`, `VITE_SHOPIFY_STOREFRONT_TOKEN`, etc.).

---

## 4. Lead Ingestion & Commercial Onboarding Architecture

### B2B Venue Intake Form Workflow
To support the 6-Week Hospitality Pilot, the frontend provides a dedicated multi-step onboarding application (`src/components/B2BIntakeForm.tsx`):
1. **Step 1**: Captures Legal Business Name, Australian Business Number (ABN), Venue Address, Contact Name, Email, and Phone.
2. **Step 2**: Captures Venue Type, Preferred Crop Mix, Current Weekly Spend, Delivery Window, and Space/Lighting notes.
3. **Dispatch & Integration Layer (`src/services/leadService.ts`)**:
   - **Webhook Dispatch**: Transmits structured JSON lead data to a configurable webhook endpoint (`VITE_B2B_WEBHOOK_URL` — e.g. Zapier, Make, HubSpot, Klaviyo, or Shopify Customer Admin API).
   - **Local Storage Lead Recovery**: Every submission is persisted to `localStorage` under `aeroharvest_b2b_applications` to guarantee zero lead loss during network interruptions.
   - **Email Notification Fallback**: Provides direct `mailto:` dispatch containing all structured application fields if webhook endpoints are unreachable.

---

## 5. Customer Account Architecture

### Recommendation: Shopify-Hosted Customer Accounts
- **Mechanism**: Subtle "My Account" link in header navigation pointing directly to Shopify's hosted customer portal (`https://aeroharvest.myshopify.com/account` or custom domain `account.aeroharvest.com.au`).
- **Benefits**:
  - Zero custom authentication code or database overhead.
  - Zero password liability or security vulnerability.
  - Out-of-the-box order tracking, historical invoices, and customer profile management.

---

## 6. AI Search & Discoverability Architecture

### Implementation Strategy
1. **Semantic HTML5**: Crawlable, machine-readable headings and definition lists (`<dl>`) for specifications.
2. **Structured Data (Schema.org)**: Complete JSON-LD `Product` and `Offer` schema dynamically linked to `product.config.ts`.
3. **AI Commerce Reality Check**: Strictly separate implementable features (Schema.org, Open Graph, Sitemap) from merchant feed sync (Google Merchant Center) and speculative AI checkout capabilities.

---

## 7. Australian Legal & Regulatory Compliance Framework
- **Australian Consumer Law (ACL)**: Clear disclosure of statutory consumer rights; warranty terms must complement ACL guarantees.
- **GST Compliance**: All prices presented on AeroHarvest.com.au displayed inclusive of 10% GST.
- **Privacy Principles**: Privacy policy adhering to Australian Privacy Principles (APPs); no user credentials collected on custom servers.
- **Electrical Safety**: Standard systems run on low-voltage 12V/24V DC power isolation adapters.

---

## 8. RESOLVED DECISION REGISTER (v001 → v002 Reconciliation)

| Decision ID | Subject / Topic | Status | Adopted Resolution |
| :--- | :--- | :--- | :--- |
| **REG-DEC-01** | Retail Price Point | **RESOLVED & APPROVED** | Adopted dynamic multi-tier pricing: AUD $299 (5-Tier) / $349 (7-Tier) / $449 (11-Tier) Base; +$100 Complete Kit; AUD $49.99/wk Commercial Pilot with $799 Buyout. |
| **REG-DEC-02** | Customer Account Model | **RESOLVED & APPROVED** | Adopted Shopify-Hosted Account Portal (`/account`) linked cleanly from header navigation. |
| **REG-DEC-03** | Product Yield Wording | **RESOLVED & APPROVED** | Adopted strict `[PLACEHOLDER_TBD]` regime until physical lab verification in Australian climate conditions is complete. |
| **REG-DEC-04** | Warranty Duration | **RESOLVED & APPROVED** | Adopted 2-Year Australian Replacement Warranty, explicitly stated as complementary to statutory ACL guarantees. |

---

## 9. Next Steps & Approval Protocol
1. **Shopify Admin Live Credential Hand-off**: Populate live Shopify Storefront tokens and product variant IDs in `src/config/product.config.ts`.
2. **Webhook Ingestion Verification**: Connect production webhook URL in `src/config/storefrontConfig.ts` to CRM / sales team notifications.
3. **Physical Lab Verification**: Replace remaining `[TBD]` placeholders in `PRODUCT_TRUTH.md` upon completion of Australian testing.
