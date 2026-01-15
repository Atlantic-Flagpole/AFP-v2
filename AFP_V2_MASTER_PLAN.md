# AFP-v2 Master Implementation Plan & SEO Strategy

## Executive Summary
This document serves as the master blueprint for transforming the AFP-v2 codebase into a high-performance, SEO-dominant, headless e-commerce platform for Atlantic Flagpole. It allows an AI developer to execute a complete site buildout, prioritizing "Headless Theme" functionality and "Massive SEO" impact.

---

## Phase 1: Core Architecture & Asset Integration
**Objective:** Establish a robust connection to Shopify for all assets and data, removing hardcoded placeholders where appropriate.

1.  **Dynamic Asset Fetching (The "Hybrid" Approach)**
    *   *Strategy:* While core LCP (Largest Contentful Paint) assets like the Logo and absolute Hero image should remain local for speed, secondary assets should be fetched.
    *   *Action:* Implement a `getShopMetadata()` function using Shopify's `shop` query to fetch:
        *   Store Name & Description
        *   Primary Domain
    *   *Action:* Create a "Global Settings" concept (possibly using a specific Product or Collection handle like `site-settings`) to store "Hero Images" or "Promo Banners" as images/metafields if the user wants to update them from Shopify without redeploying code.

2.  **Navigation & Menu System (Completed)**
    *   *Status:* `main-menu-new` handle is now driving the header.
    *   *Next:* Implement a robust **Mega Menu** visual design if the menu structure supports nesting (levels 2 & 3).

---

## Phase 2: Massive SEO Backend (The "Google Dominance" Engine)
**Objective:** Rank for thousands of long-tail keywords (location-based, feature-based) automatically.

1.  **Programmatic SEO (pSEO) Engine**
    *   *Concept:* Generate thousands of landing pages for "Flagpoles in [City], [State]".
    *   *Implementation:*
        *   Expand `src/data/locations.ts` or fetch from a database.
        *   Enhance `src/app/flagpoles/[state]/[city]/page.tsx`.
        *   **Content Injection:** Dynamically inject localized weather data (e.g., "Built to withstand [City]'s 40mph wind gusts") to make pages unique and valuable, avoiding "thin content" penalties.
        *   **Internal Linking:** Create a "Locations" directory page linking to top cities to ensure Google crawls them.

2.  **Advanced Metadata & Schema.org (JSON-LD)**
    *   *Product Schema:* Ensure every product page outputs full `Product` schema (Price, Stock, Reviews, SKU, Brand).
    *   *Breadcrumb Schema:* Implement `BreadcrumbList` on all pages for rich snippets.
    *   *Organization Schema:* On the home page (Logo, Contact, SameAs social links).
    *   *FAQ Schema:* For the FAQ page to capture "People Also Ask" snippets.

3.  **Dynamic Sitemap Generation**
    *   *Action:* Overhaul `src/app/sitemap.ts` to fetch **ALL** products, collections, and pSEO location pages (up to 50k URLs).
    *   *Compliance:* Ensure `lastModified` dates are accurate to encourage crawling.

---

## Phase 3: Complete Site Buildout (Headless Theme)
**Objective:** Functionality parity with `atlanticflagpole.com` with superior performance.

1.  **Product Page Overhaul (`/products/[handle]`)**
    *   *Gallery:* Implement a mobile-swipeable, desktop-grid gallery.
    *   *Variant Selector:* Visual swatches (color/finish) instead of dropdowns.
    *   *Sticky Add-to-Cart:* A bar that appears when scrolling past the main buy button.
    *   *Reviews Integration:* Fetch and display **real** reviews (e.g., from Judge.me or Stamped.io API if available, or Shopify metaobjects).
    *   *Cross-Sell:* "Frequently Bought Together" section using Shopify Recommendations API.

2.  **Collection Pages (`/collections/[handle]`)**
    *   *Filtering:* Implement server-side or client-side filtering (by Price, Availability, Type).
    *   *Sorting:* Best Selling, Price (Low-High), Newest.
    *   *SEO Description:* Render the collection description at the bottom of the grid for SEO content without pushing products down.

3.  **Cart & Checkout**
    *   *Cart Drawer:* Ensure "Free Shipping Progress Bar" (e.g., "Spend $50 more for free shipping").
    *   *Checkout:* Verify the redirect passes all UTM parameters and line item properties correctly.

4.  **Static/Info Pages**
    *   *About Us:* Rich storytelling layout with "Veteran Owned" emphasis.
    *   *Contact:* Functional API form (using server actions or Shopify contact form API).
    *   *Warranty/Installation:* Resource pages with PDF downloads and video embeds.

---

## Phase 4: Performance & Refactoring
**Objective:** 100/100 Core Web Vitals.

1.  **Image Optimization**
    *   Use `next/image` with proper `sizes` prop for responsive loading.
    *   Enforce `priority` loading for LCP elements (Hero image).
    *   Use `.webp` or `.avif` formats where possible.

2.  **Code Maintenance**
    *   Strict TypeScript typing (remove all `any`).
    *   Component atomicity (break large pages into smaller, reusable components).
    *   **Environment Validation:** Ensure the app fails gracefully or strictly based on env var presence.

---

## Execution Prompt (For AI Developer)

```markdown
**Role:** Senior Full-Stack Next.js Developer & SEO Specialist
**Task:** Execute Phase [X] of the AFP-v2 Master Plan.
**Context:** properly connected to Shopify Storefront API.
**Guidelines:**
1.  **SEO First:** Every new page must have dynamic metadata and JSON-LD schema.
2.  **Performance:** No layout shifts (CLS). Images must be optimized.
3.  **Design:** Match the premium "Atlantic Flagpole" aesthetic (Navy Blue, Gold/Accent Red, Bold Typography).
4.  **Shopify:** Use the `shopifyFetch` utility in `src/lib/shopify` for all data.

**Immediate Goal:** [Insert Phase 2 or 3 objective here]
```
