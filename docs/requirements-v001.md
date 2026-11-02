Document: Requirements Registry Snapshot
Version: v001
Date: 2026-09-07
Status: Current (Snapshot v001)
Supersedes: (none)
Superseded by: (none)
Authoring agent/department: Cross-Department Strategy, UX, Engineering Lead
Human approval status: Pending Approval (Phase 1 Baseline)

# AeroHarvest.com.au — REQUIREMENTS REGISTRY (v001 Snapshot)

| Requirement ID | Category | Summary / Description | Status | Approval Source |
| :--- | :--- | :--- | :--- | :--- |
| **REQ-001** | Pricing | RRP derived from landed cost (AUD $159–$170) and structured AU competitor benchmarking (AUD $450–$800 range). | Proposed | Governance v004 |
| **REQ-002** | Business Ethics | Strict Business Reality Rule: No deceptive urgency, fake timers, fake reviews, or misleading price anchors. | Approved | Governance v004 |
| **REQ-003** | Product Truth | Zero fabrication of specs, yields, power draw, or materials. Require `[PLACEHOLDER_TBD]` tags for unverified facts. | Approved | Governance v004 |
| **REQ-004** | Claim Control | Every material customer claim registered in `PRODUCT_TRUTH.md` with Claim ID, Evidence Tier, and verification status. | Approved | Governance v004 |
| **REQ-005** | Claim Status | Unverified, pending, or supplier-only claims strictly barred from production customer-facing copy. | Approved | Governance v004 |
| **REQ-006** | Architecture | Headless AeroHarvest frontend (Next.js/React + Tailwind) with Shopify commerce backend. | Proposed | Governance v004 |
| **REQ-007** | Guardrails | Prohibit custom cart DB, custom checkout, custom payment gateways, or parallel customer auth databases. | Approved | Governance v004 |
| **REQ-008** | Shopify Integration| Frontend provides centralized Buy Button injection containers (`#shopify-buy-button-hero`, `#shopify-buy-button-final`). | Proposed | Governance v004 |
| **REQ-009** | Configuration | Single source of product truth in `src/config/product.config.ts` (or central config layer). | Proposed | Governance v004 |
| **REQ-010** | Customer Accounts| Shopify-hosted customer account pages linked from AeroHarvest header navigation. | Proposed | Governance v004 |
| **REQ-011** | AI Discoverability | Semantic HTML, crawlable headings, and Schema.org Product structured data for AI engines. | Proposed | Governance v004 |
| **REQ-012** | AI Commerce | Implement AI Commerce Reality Check (Tier A-E separation). No reliance on speculative AI checkout. | Approved | Governance v004 |
| **REQ-013** | Compliance | Adhere to Australian Consumer Law (ACL), 10% GST inclusive display, and Australian Privacy Principles. | Proposed | Governance v004 |
| **REQ-014** | Governance | Monotonically versioned documents, immutable snapshots, and zero-loss change impact protocols. | Approved | Governance v004 |
