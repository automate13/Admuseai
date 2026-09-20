# Admuse AI — Marketing Site

Static site for **Admuse AI** (premium creative agency · AI UGC & product ads).  
Pure HTML / CSS / JS — **no build step**. Hosts free on Vercel.

**Live (after deploy):** https://admuseai.vercel.app  
**Repo:** https://github.com/automate13/Admuseai

---

## What’s in this build

Editorial dark/neutral layout with mint accent (`#64ffda`). Full marketing page:

1. Hero — *AI-Powered UGC Ads That Sell.*
2. Value strip
3. Intro
4. Services (4 cards)
5. Work gallery (video-ready)
6. Product → Ad process (01–04)
7. Traditional vs Admuse comparison
8. Creative directions
9. How It Works + CTA
10. Who We Serve
11. Platforms (no partnership claims)
12. Pricing (STARTER / GROWTH / CUSTOM — **placeholder prices**)
13. FAQ (6)
14. Final CTA
15. Footer + Privacy / Terms stubs

Sticky header + mobile hamburger. `content.js` drives all copy.

---

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Editorial dark styles |
| `content.js` | **All copy, projects, pricing, FAQ** — edit here |
| `main.js` | Renders content, nav, FAQ, HTML5 video |
| `videos/` | Drop MP4s here |
| `privacy/` · `terms/` | Simple placeholder legal pages |
| `vercel.json` | Static hosting headers |

---

## Edit content (Jay)

1. Open `content.js`.
2. Change hero, services, projects, pricing strings, FAQ, contact.
3. Save → refresh. No install or build.

### Contact (already set)

- Instagram: [@admusebyruby](https://instagram.com/admusebyruby)
- Email: [auto.mate0313@gmail.com](mailto:auto.mate0313@gmail.com)

### Pricing (important)

Tiers use **editable placeholders** — no invented dollar amounts:

```js
pricing: {
  tiers: [
    { id: "starter", name: "STARTER", price: "Contact for quote", ... },
    { id: "growth",  name: "GROWTH",  price: "Contact for quote", ... },
    { id: "custom",  name: "CUSTOM",  price: "—", ... }
  ]
}
```

Replace `price` with real figures when ready (e.g. `"$X"` or `"From $X"`).

### Add a project video

```js
{
  id: "billboard-throw",
  title: "Billboard product throw",
  aspect: "9 / 16",
  mediaLabel: "Sample coming soon",  // shown when video is null
  video: "videos/billboard.mp4",     // or null
  poster: null,
  externalUrl: null,
  tags: ["Vertical", "Product"]
}
```

See `videos/README.md`.

**Do not invent client names, testimonials, stats, or sales/virality guarantees.**

---

## Local preview

```bash
cd path/to/this/folder   # contains index.html
npx --yes serve .
```

Or open `index.html` directly in a browser.

---

## Upload / overwrite on GitHub

Repo: [github.com/automate13/Admuseai](https://github.com/automate13/Admuseai)

Overwrite the existing site with this folder’s contents (files at **repo root**):

```bash
# unzip AdmuseAi-site.zip somewhere, then:
cd path/to/unzipped-site    # folder that contains index.html

git init                    # skip if already a clone
git remote add origin https://github.com/automate13/Admuseai.git
# or: git remote set-url origin https://github.com/automate13/Admuseai.git

git add .
git commit -m "Admuse AI marketing site — editorial dark + full sections"
git branch -M main
git push -u origin main --force   # only if intentionally overwriting remote history
# Prefer a normal push if the remote already tracks this project:
# git push -u origin main
```

Safer overwrite without force (if you already have a local clone):

```bash
cd your-local-Admuseai-clone
# copy all files from the zip over the clone (replace index.html, styles.css, etc.)
git add .
git commit -m "Admuse AI marketing site redesign"
git push origin main
```

---

## Deploy on Vercel

1. [vercel.com](https://vercel.com) → sign in with GitHub.
2. Import / open project `automate13/Admuseai`.
3. Framework: **Other**. Root: `.`
4. Deploy. No build command.
5. Pushes to `main` redeploy automatically.

---

## Design notes

- Background `#0a0c0f` · elevated `#111418` · cards `#12161b`
- Text `#e8edf2` · muted `#8b97a8` · accent mint `#64ffda`
- Type: **Syne** (display) + **DM Sans** (body)
- Sticky blurred header, strong type, minimal glass
- Mobile nav (hamburger), skip link, focus styles, reduced-motion
- **Depth (no Three.js):** layered card shadows, desktop hover tilt on Work/Service cards, soft transform parallax on hero glow, floating hero media frame
- **Hero ambience:** lightweight vanilla canvas particles behind the hero only (capped on mobile; paused for reduced-motion / hidden tabs)
