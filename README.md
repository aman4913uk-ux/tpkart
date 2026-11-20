# TavPrasad: one-page website

React + Vite single-page site for the TavPrasad streetwear brand.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Deploy to Vercel
**Option A: GitHub (recommended)**
1. Push this folder to a GitHub repo.
2. On vercel.com choose **Add New, Project**, import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`). Click **Deploy**.

**Option B: CLI**
```bash
npm i -g vercel
vercel          # follow the prompts, then `vercel --prod`
```

After deploying, open `index.html` and change `og:image` to your full URL
(for example `https://yourdomain.com/og.jpg`) so link previews work on WhatsApp and Instagram.

## Where to edit things
| What | File |
|---|---|
| WhatsApp number, email, Instagram links | `src/data/siteConfig.js` |
| Products, names, prices, images | `src/data/products.js` |
| Page sections (order, copy) | `src/components/*.jsx`, `src/App.jsx` |
| Colours, fonts, spacing | `src/styles/global.css` (variables at the top) |
| Images | `src/assets/` (replace with the same filename) |

## Structure
```
src/
  App.jsx                 page assembly
  components/             AnnouncementBar, Navbar, Hero, Marquee, Collection,
                          ProductCard, Story, FeaturedDesign, CustomPrints,
                          InstagramBand, Contact, Footer, Reveal
  data/                   siteConfig.js, products.js
  hooks/useReveal.js      scroll-in animation
  lib/contact.js          WhatsApp / Instagram order links
  styles/global.css
  assets/                 optimized images
```
