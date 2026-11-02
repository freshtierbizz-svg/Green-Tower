Document: Changelog
Version: v002
Date: 2026-11-01
Status: Current
Supersedes: v001
Superseded by: (none)
Authoring agent/department: Cross-Department Strategy, UX, Engineering Council
Human approval status: Current Operational Baseline

# AeroHarvest.com.au — CHANGELOG

## [v002] — 2026-11-01
### Added
- Authored E-Commerce Architecture Blueprint v002 (`docs/blueprints/blueprint_v002.md`) codifying the full Dual-Market architecture (B2C Home Systems + B2B Hospitality Pilot) and resolving decision register items REG-DEC-01 through REG-DEC-04.
- Implemented `src/services/leadService.ts` for B2B intake form webhook dispatch, local storage backup, and fallback direct email notification.
- Configured dynamic Shopify checkout permalink builder, Storefront SDK loader, and variant mapping in `src/config/product.config.ts` and `src/components/ShopifyBuyButton.tsx`.
- Recorded decisions DEC-005 (Multi-Tier B2C Pricing), DEC-006 (B2B Hospitality Pilot), and DEC-007 (Blueprint v002 Baseline) in `docs/DECISIONS.md`.
- Updated `docs/CURRENT_STATE.md` to v003 reflecting Phase 4 QA and commercial hand-off.

## [v001] — 2026-09-07
### Added
- Initialized project control documentation structure (`PROJECT_MEMORY.md`, `CURRENT_STATE.md`, `CHANGELOG.md`, `REQUIREMENTS.md`, `DECISIONS.md`, `PRODUCT_TRUTH.md`).
- Executed Australian aeroponic/hydroponic competitive pricing research (`docs/research/competitive_pricing_research_v001.md`).
- Executed AI Search & AI Commerce capability analysis (`docs/research/ai_search_commerce_research_v001.md`).
- Formulated Department 1 Strategy & Copy Deliberation report (`docs/strategy/strategy_deliberation_v001.md`).
- Formulated Department 2 UX/UI Design Deliberation report (`docs/ux/ux_ui_deliberation_v001.md`).
- Formulated Department 3 Engineering Deliberation report (`docs/engineering/commerce_architecture_validation_v001.md`).
- Authored E-commerce Architecture Blueprint v001 (`docs/blueprints/blueprint_v001.md`).
