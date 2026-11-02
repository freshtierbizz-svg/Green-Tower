Document: Current State
Version: v003
Date: 2026-11-01
Status: Current
Supersedes: v002
Superseded by: (none)
Authoring agent/department: Cross-Department Strategy, UX, Engineering Council
Human approval status: Current Operational Baseline

# AeroHarvest.com.au — CURRENT STATE (v003)

## Operational Dashboard
- **Current Phase**: Phase 4 — Autonomous QA & Commercial Integration Hand-off
- **Governance Version**: Master Project Governance Prompt v004
- **Approved State**:
  - Blueprint v002 formally drafted and adopted as operational baseline (`docs/blueprints/blueprint_v002.md`).
  - Unresolved Decision Register from v001 (REG-DEC-01 through REG-DEC-04) fully resolved in `docs/DECISIONS.md`.
  - Multi-tier B2C pricing approved: AUD $299 (5-Tier) / $349 (7-Tier) / $449 (11-Tier) Base (+AUD $100 Complete Kit).
  - B2B Commercial Pilot approved: AUD $49.99/week 6-week pilot with $799 buyout and $1,099 direct RRP.
  - Lead Ingestion Architecture approved: Webhook dispatch with local backup and email notification fallback.
  - Headless React + Shopify Buy Button & Direct Cart Permalink architecture direction approved.
- **Built State**:
  - Dual-market web application built with React, TypeScript, Vite, and Vanilla CSS design system.
  - B2C Storefront with interactive 3-step configurator, pain-point education, and grocery savings calculator.
  - B2B Storefront with hospitality garnish calculator, Week 5 automation journey, and 2-step onboarding application.
  - Seedling Nursery refill catalog with 15% recurring pod subscription toggle.
  - Pilot 2 (Warm Lifestyle Baseline): Photography-first hero, warm ivory/soft sage palette, clarified 3-tier shopping guide, plain English package comparison, and dedicated Australian proof section ([DEC-008](file:///c:/Users/sean_/Documents/Green%20Tower/docs/DECISIONS.md#L22)). Pilot 1 preserved intact with instant version switcher.
  - B2B Lead Service (`src/services/leadService.ts`) with webhook posting, localStorage backup, and email fallback.
  - Centralized Product Configuration (`src/config/product.config.ts`) with tier/variant mappings and direct checkout URL builder.
- **TBD Fields / Pending Verification**:
  - `[PRODUCT_YIELD_TBD]` — Aeroponic crop harvest mass and cycle times pending localized Australian lab test.
  - `[POWER_CONSUMPTION_TBD]` — Daily kWh draw of water pump and optional LED lights pending electrical test.
  - `[DIMENSIONS_MATERIALS_TBD]` — Food-grade HDPE/BPA-free plastic certification documentation.
  - Production Shopify credentials & Storefront access token.
- **Pending Human Approval Decisions**:
  - None. All high-impact decisions from Blueprint v001 have been resolved in Blueprint v002.

## Next Agent Guidance
- **MUST NOT DO**: Do not build custom cart databases, parallel authentication systems, or custom checkout payment pages.
- **MUST DO**: Keep all product specifications, pricing, and claims synchronized across `product.config.ts`, `storefrontConfig.ts`, and `PRODUCT_TRUTH.md`.
