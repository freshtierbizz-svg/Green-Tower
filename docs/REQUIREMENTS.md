Document: Requirements Registry
Version: v002
Date: 2026-11-01
Status: Current
Supersedes: v001
Superseded by: (none)
Authoring agent/department: Cross-Department Strategy, UX, Engineering Council
Human approval status: Approved Baseline

# AeroHarvest.com.au — REQUIREMENTS REGISTRY (v002)

| Requirement ID | Category | Summary / Description | Status | Approval Source | Verification Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-001** | Pricing | RRP derived from landed cost (AUD $159–$170) and structured AU competitor benchmarking (AUD $450–$800 range). | **Verified & Implemented** | Blueprint v002 & DEC-005 | Dynamic multi-tier pricing ($299/$349/$449 Base; $399/$449/$549 Kit) displayed in Hero, B2CStorefront, and `product.config.ts`. |
| **REQ-002** | Business Ethics | Strict Business Reality Rule: No deceptive urgency, fake timers, fake reviews, or misleading price anchors. | **Verified & Implemented** | Governance v004 | Zero fake scarcity timers or deceptive review widgets implemented in frontend components. |
| **REQ-003** | Product Truth | Zero fabrication of specs, yields, power draw, or materials. Require `[PLACEHOLDER_TBD]` tags for unverified facts. | **Verified & Implemented** | Governance v004 & DEC-004 | Enforced explicit `[PRODUCT_YIELD_TBD]` and `[POWER_CONSUMPTION_TBD]` badges in Hero, SpecsGrid, and Product Truth. |
| **REQ-004** | Claim Control | Every material customer claim registered in `PRODUCT_TRUTH.md` with Claim ID, Evidence Tier, and verification status. | **Verified & Implemented** | Governance v004 | `PRODUCT_TRUTH.md` registered claims CLM-001 through CLM-013 with formal evidence tiers. |
| **REQ-005** | Claim Status | Unverified, pending, or supplier-only claims strictly barred from production customer-facing copy. | **Verified & Implemented** | Governance v004 | Unverified supplier assertions displayed with explicit TBD badges rather than factual claims. |
| **REQ-006** | Architecture | Headless AeroHarvest frontend (React + TypeScript + Vite) with Shopify commerce backend. | **Verified & Implemented** | Blueprint v002 & DEC-002 | Decoupled React application compiled cleanly via Vite with zero Liquid app bloat. |
| **REQ-007** | Guardrails | Prohibit custom cart DB, custom checkout, custom payment gateways, or parallel customer auth databases. | **Verified & Implemented** | Governance v004 | Verified zero custom credit card forms, checkout processing, or parallel user databases built. |
| **REQ-008** | Shopify Integration | Frontend provides centralized Buy Button injection containers (`#shopify-buy-button-hero`, `#shopify-buy-button-final`) and direct cart permalinks. | **Verified & Implemented** | Blueprint v002 & DEC-002 | Container embeds and dynamic checkout permalinks generated via `buildShopifyCheckoutUrl`. |
| **REQ-009** | Configuration | Single source of product truth in `src/config/product.config.ts` and `src/config/storefrontConfig.ts`. | **Verified & Implemented** | Blueprint v002 | All components consume pricing, dimensions, and variant mappings strictly from centralized config. |
| **REQ-010** | Customer Accounts | Shopify-hosted customer account pages linked from AeroHarvest header navigation. | **Verified & Implemented** | Blueprint v002 & DEC-003 | Header navigation bar includes "My Account" link pointing to Shopify hosted customer portal. |
| **REQ-011** | AI Discoverability | Semantic HTML, crawlable headings, and Schema.org Product structured data for AI engines. | **Verified & Implemented** | Blueprint v002 | `StructuredData.tsx` injects valid Schema.org JSON-LD `Product` and `Offer` data into the DOM. |
| **REQ-012** | AI Commerce | Implement AI Commerce Reality Check (Tier A-E separation). No reliance on speculative AI checkout. | **Verified & Implemented** | Governance v004 | Tier A and B capabilities implemented without dependency on speculative native AI checkout. |
| **REQ-013** | Compliance | Adhere to Australian Consumer Law (ACL), 10% GST inclusive display, and Australian Privacy Principles. | **Verified & Implemented** | Blueprint v002 | Footer and configurator display ACL statutory guarantee notice, 10% GST inclusive text, and APPs statement. |
| **REQ-014** | Governance | Monotonically versioned documents, immutable snapshots, and zero-loss change impact protocols. | **Verified & Implemented** | Governance v004 | All project control files versioned with snapshots in `docs/state/`, `docs/changelog/`, and `docs/blueprints/`. |
| **REQ-015** | Dual-Market Architecture | Dual-market split interface distinguishing B2C residential systems from B2B commercial hospitality pilots. | **Verified & Implemented** | Blueprint v002 & DEC-006 | `SplitMarketHero.tsx`, `B2CStorefront.tsx`, and `B2BStorefront.tsx` provide tailored user journeys. |
| **REQ-016** | Commercial Lead Ingestion | Dedicated 2-step onboarding application with webhook dispatch, localStorage backup, and email notification. | **Verified & Implemented** | Blueprint v002 | `B2BIntakeForm.tsx` and `leadService.ts` transmit leads to webhooks and provide direct `mailto:` draft fallbacks. |
| **REQ-017** | Consumables Subscription | Nursery replenishment catalog with 15% recurring auto-refill toggle and direct Shopify checkout links. | **Verified & Implemented** | Blueprint v002 | `SeedlingNursery.tsx` displays categorized plant pod bundles with subscription pricing and Shopify cart triggers. |
