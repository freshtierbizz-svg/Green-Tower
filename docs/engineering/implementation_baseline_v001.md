Document: Implementation Baseline
Version: v001
Date: 2026-09-08
Status: Approved Baseline
Supersedes: (none)
Superseded by: (none)
Authoring agent/department: Department 3 Engineering Lead
Human approval status: Approved (Blueprint v001 approved 2026-09-08)

# AeroHarvest.com.au — IMPLEMENTATION BASELINE (v001)

## Executive Summary
This Implementation Baseline establishes the exact technical blueprint for constructing the **AeroHarvest.com.au** web application in Phase 3. All components, styling, centralized configurations, and Shopify Buy Button containers map 1-to-1 with the approved requirements in `docs/blueprints/blueprint_v001.md`.

---

## 1. Project Directory & Technical Stack Layout

```
/ (Workspace Root)
├── docs/                             # Immutable governance & project control files
├── public/                           # Static assets, sitemap, og-image, favicon
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config/
│   │   └── product.config.ts         # SINGLE SOURCE OF TRUTH for pricing, specs, & Shopify IDs
│   ├── components/
│   │   ├── Navbar.tsx                # Header with logo, nav links, and My Account Shopify portal link
│   │   ├── Hero.tsx                  # Hero section with #shopify-buy-button-hero injection point
│   │   ├── TrustBadges.tsx           # 2-Year Warranty, Free Metro Shipping, 30-Day Guarantee
│   │   ├── TechnologyExplainer.tsx   # Interactive aeroponic misting breakdown & diagrams
│   │   ├── SpecsGrid.tsx             # Transparent Included vs. Required comparison grid
│   │   ├── ClaimTruthBadge.tsx       # UI badge enforcing Claim Status Rule
│   │   ├── CompetitorComparison.tsx  # Honest comparison matrix vs soil & cheap PVC towers
│   │   ├── ShopifyBuyButton.tsx      # Hydration wrapper for Shopify Buy Button JS SDK
│   │   ├── Footer.tsx                # Legal compliance, ACL rights, GST notice, Privacy policy
│   │   └── StructuredData.tsx        # Schema.org Product & Offer JSON-LD injector
│   ├── styles/
│   │   └── globals.css               # Vanilla CSS design system with eco-tech variables
│   └── pages/ (or App Router)
│       └── index.tsx / page.tsx      # Main high-converting single-product landing experience
└── package.json                      # Next.js / React application dependencies
```

---

## 2. Mandatory Functional Specifications

### A. Centralized Configuration Layer (`src/config/product.config.ts`)
- Holds product name, RRP (`599.00` Base / `699.00` Kit AUD), GST inclusion, specifications, yield placeholders (`[PRODUCT_YIELD_TBD]`), energy draw placeholders (`[POWER_CONSUMPTION_TBD]`), and Shopify credentials (`SHOPIFY_BUY_BUTTON_ENABLED`, `SHOPIFY_PRODUCT_ID`).

### B. Commerce Injection Points (Shopify Buy Button)
- `#shopify-buy-button-hero`: Injected within `Hero.tsx`.
- `#shopify-buy-button-final`: Injected within `Footer.tsx` / final conversion section.
- Pre-styled skeleton loader prevents Cumulative Layout Shift (CLS = 0.00).
- Fallback preview state handles `SHOPIFY_BUY_BUTTON_ENABLED = false` gracefully.

### C. Account Architecture
- Navigation item: **"My Account"** linking to `https://aeroharvest.myshopify.com/account` (Shopify-hosted accounts).

### D. Compliance & Truth Controls
- All displayed prices show **AUD $599.00** and **AUD $699.00** with explicit label: **"(GST Inclusive)"**.
- Mandatory ACL footer statement: *"Our goods come with guarantees that cannot be excluded under the Australian Consumer Law."*
- Unverified specs render explicit badge: `[PRODUCT_YIELD_TBD]` / `[POWER_CONSUMPTION_TBD]`.

---

## 3. Verification & QA Protocol (Phase 4 Entry Gate)
1. Verify static build compiles cleanly without TypeScript or CSS errors.
2. Verify zero custom cart/checkout/auth DB code exists.
3. Validate Schema.org Product JSON-LD output against Google Rich Results standards.
4. Verify responsive mobile layout and touch targets (minimum 48px x 48px).
