Document: AI Search and AI Commerce Research
Version: v001
Date: 2026-09-07
Status: Current
Supersedes: (none)
Superseded by: (none)
Authoring agent/department: Department 3 Engineering Lead & Strategy Lead
Human approval status: Pending Approval (Phase 1 Baseline)

# AI Search & AI Commerce Optimization Research (v001)

## Executive Summary
This document defines AeroHarvest's optimization strategy for AI search engines (ChatGPT Search, Perplexity, Google Gemini, Claude) and AI-native shopping interfaces. It enforces the **AI Commerce Reality Check** to ensure zero reliance on speculative purchasing capabilities while maximizing crawlability, recommendation accuracy, and conversion pathways.

---

## The 4 Optimization Outcomes

### Outcome 1: AI Discoverability
- **Goal**: Ensure search crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot) easily find and parse AeroHarvest product facts.
- **Implementation**:
  - Semantic HTML5 structure (`<article>`, `<section>`, `<h1>`–`<h3>`, `<dl>` definition lists for specifications).
  - Publicly accessible static pages without JavaScript-only client-rendering barriers.
  - Comprehensive `robots.txt` permitting major AI user-agents.
  - Clean XML Sitemap (`/sitemap.xml`) referencing all canonical product and support pages.

### Outcome 2: AI Recommendation
- **Goal**: AI assistants confidently summarize and recommend AeroHarvest when users query queries like "best vertical aeroponic garden Australia" or "indoor tower garden under $700 AUD".
- **Implementation**:
  - Standardized Schema.org JSON-LD structured markup (`Product`, `Offer`, `AggregateRating` [when verified], `FAQPage`, `Brand`).
  - Precise alignment between HTML body text, JSON-LD markup, and centralized `product.config.ts`.
  - Clear, unambiguous answers to common buyer questions (power usage, water capacity, plant count, warranty).

### Outcome 3: AI Click-Through
- **Goal**: Direct AI-referred visitors directly to high-converting purchase pages with clear intent.
- **Implementation**:
  - Direct deep-links to product purchase containers (`/products/aeroharvest-tower#shopify-buy-button-hero`).
  - Open Graph (`og:title`, `og:image`, `og:price:amount`, `og:price:currency`) and Twitter Card metadata for rich social and AI link previews.

### Outcome 4: AI-Native Commerce (Compatibility Layer)
- **Goal**: Ensure product data structure is ready for machine-readable checkout protocols if/when enabled by Shopify or external AI platforms.
- **Implementation**:
  - Canonical product feed readiness (Google Merchant Center XML/JSON integration via Shopify backend).
  - Clean API contract between content layer and Shopify store backend.

---

## AI Commerce Reality Check (Capability Categorization)

| Category | Description | AeroHarvest Strategy / Implementation Status |
| :--- | :--- | :--- |
| **Category A: Implementable Today Directly** | Semantic HTML, Schema.org JSON-LD `Product` & `Offer` markup, crawlable specification lists, canonical URLs, XML sitemaps, Open Graph metadata. | **Active Core Implementation** in Next.js frontend. |
| **Category B: Requires Shopify Configuration / Merchant Feed** | Google Merchant Center XML product feed, Meta Commerce Manager catalog sync, Shopify Sales Channel integrations. | **Phase 3 Shopify Setup** via native Shopify apps. |
| **Category C: Requires External Platform Eligibility** | ChatGPT Instant Checkout / OpenAI Merchant Approval, Google Shopping AI platform eligibility. | **Monitored / Pending External Eligibility** (Does not block web launch). |
| **Category D: Technically Possible, Not Commercially Available** | Autonomous AI agent wallet purchasing via headless Web3/APIs. | **Classified as Non-Commercial** — Not incorporated into website UX. |
| **Category E: Speculative or Unsupported** | Universal background AI zero-click buying without merchant API contracts. | **Strictly Excluded** per Business Reality Rule. |

> [!IMPORTANT]
> **Governance Rule Compliance**: AeroHarvest's primary conversion architecture relies 100% on Category A & B capabilities. The site will be fully operational, high-converting, and SEO-optimized even if Category C, D, or E capabilities remain unavailable.
