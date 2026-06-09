# 🎯 AFP-v2 Handoff Guide

**Status:** ✅ READY TO SHOWCASE & DEPLOY  
**Live URL:** https://afp-final.pages.dev  
**Local Dev:** http://localhost:3000  

---

## 🚀 QUICK START (For Client/New Team)

### 1. Clone & Install (5 min)
```bash
git clone <repo-url> AFP-v2
cd AFP-v2
npm install
```

### 2. Create `.env.local` (1 min)
```bash
cp .env.example .env.local
```

Then edit `.env.local` with:
```env
SHOPIFY_STORE_DOMAIN=atlantic-flag-and-pole-inc.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpf_xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=atlantic-flag-and-pole-inc.myshopify.com
SHOPIFY_ADMIN_API_ACCESS_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Start Development (2 min)
```bash
npm run dev
```

Visit: http://localhost:3000

### 4. Build for Production (5 min)
```bash
npm run build
npm start
```

---

## 📱 What Works

### ✅ Live Features
- Product detail pages (all products working)
- Product gallery with images
- Category pages (Flagpoles, Accessories, Bundles)
- Responsive design (mobile/tablet/desktop)
- Navigation & menus
- Trust badges & reviews
- Add to cart functionality

### ✅ Showcase Pages

**Homepage**
```
https://afp-final.pages.dev/
```

**Premier Kit (Main Showcase)**
```
https://afp-final.pages.dev/products/phoenix-telescoping-flagpole-premier-kit-starter-bundle
```

**Collections**
```
https://afp-final.pages.dev/collections/all
https://afp-final.pages.dev/flagpoles
https://afp-final.pages.dev/accessories
```

---

## 🔧 What You Can Customize

### 1. Navigation Menu
File: `src/components/Header.tsx`

### 2. Homepage Hero
File: `src/app/page.tsx`

### 3. Product Pages
File: `src/app/products/[handle]/page.tsx`

### 4. Collections
File: `src/app/collections/[handle]/page.tsx`

### 5. Styling
- Colors: `src/app/globals.css`
- Component styles: Individual component files

---

## 🎨 Brand Colors (Currently Set)

```css
--navy: #002347 (dark blue)
--accent: #C41E3A (red)
--gold: #C4A86E (gold)
--success: #52C41A (green)
--sky: #5BB8FF (light blue)
--gray: #F5F5F5
```

---

## 📝 Shopify Integration

### Admin API Token
```
shpat_xxxxxxxxxxxxxxxxxxxxx (see .env.local)
```

**Token Created:** June 9, 2026
**Token Expires:** June 9, 2027
**Scopes:** Products, Orders, Customers, Inventory

### Storefront Token
```
7719aa2e309717c071f7bb746c71e455
```

**Scope:** Product listing (public, safe for frontend)

---

## 🚀 Deployment

### Automatic Deployment
1. Push to GitHub `main` branch
2. Cloudflare Pages automatically builds & deploys
3. Live in ~1 minute

```bash
git add .
git commit -m "Update: [your changes]"
git push origin main
```

### Manual Build
```bash
npm run build
```

Output in `.next/` folder - ready for any host (Vercel, Netlify, self-hosted)

---

## 📊 Build Info

- **Framework:** Next.js 15.5.2
- **Package Size:** ~114 KB (First Load JS)
- **Pages:** 68 static pages pre-rendered
- **Build Time:** ~30 seconds
- **Performance:** Lighthouse 95+ expected

---

## ✅ Pre-Handoff Checklist

- [x] Git clean and current
- [x] Build succeeds (68/68 pages)
- [x] All product pages work
- [x] Shopify API integrated
- [x] Responsive design tested
- [x] Live deployment working
- [x] Admin token updated
- [x] Fallback navigation if API fails

---

## 🎯 Next Phase Features (Optional)

### Phase 2: OTO Funnel
Add one-time offers after "Add to Cart":
- Location: `src/components/funnels/PremierKitOTO.tsx`
- Estimated: 2-3 hours

### Phase 2: Contact Page
Create contact/inquiry form:
- Location: `src/app/contact/page.tsx`
- Estimated: 1 hour

### Phase 2: Blog/Articles
Add blog functionality:
- Location: `src/app/blog/[slug]/page.tsx`
- Estimated: 3-4 hours

---

## 🆘 Troubleshooting

### Build Fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 Already In Use
```bash
npm run dev -- -p 3001
# Or kill process on 3000
```

### Images Not Loading
Check Shopify CDN - if images are from old store, need to update image URLs in Shopify admin

### Products Not Showing
1. Check `.env.local` has correct tokens
2. Verify Shopify store domain
3. Clear `.next` folder: `rm -rf .next && npm run build`

---

## 📞 Support Info

**Repository:** AFP-v2  
**Deployment:** https://afp-final.pages.dev  
**Admin Token Updated:** June 9, 2026  
**Token Rotation Due:** June 9, 2027  

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Shopify GraphQL](https://shopify.dev/docs/api/admin-graphql)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Handoff Date:** June 9, 2026  
**Status:** ✅ PRODUCTION READY
