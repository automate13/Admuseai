# Admuse AI — Marketing Site

Static site for **Admuse AI** (premium creative · AI UGC & product ads).  
Pure HTML / CSS / JS — **no build step**. Hosts free on Vercel.

**Live (after deploy):** https://admuseai.vercel.app  
**Repo:** https://github.com/automate13/Admuseai

---

## What’s in this build

Soft-ruby editorial dark layout (Stitch-like landing feel). Accent family: muted ruby / soft magenta (`#9B2335` → `#C75B78` → `#E082B4`) — not loud purple SaaS.

1. Hero — badge, bold headline, dual CTAs  
2. Value strip  
3. Featured work — **3 real videos** (`video-one`, `video-two`, `video-three` / floating drink)  
4. Services (4 lanes)  
5. Process / how it works  
6. Why Admuse (honest comparison, no fake dollar figures)  
7. FAQ  
8. Final CTA — Instagram [@admusebyruby](https://instagram.com/admusebyruby) + [auto.mate0313@gmail.com](mailto:auto.mate0313@gmail.com)  
9. Footer + Privacy / Terms stubs  

**Not included:** pricing section, fake ROAS/views, fake client logos, satisfaction guarantees.

Sticky header + mobile hamburger. `content.js` drives all copy. 3D pop interactions kept.

---

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Soft-ruby Stitch-style styles |
| `content.js` | **All copy & projects** — edit here |
| `main.js` | Renders content, nav, FAQ, HTML5 video |
| `videos/` | Project MP4s (keep on GitHub as-is) |
| `images/` | Optional static assets |
| `privacy/` · `terms/` | Simple placeholder legal pages |
| `vercel.json` | Static hosting headers |

---

## Videos (important)

This zip ships **code only** — large `.mp4` files are omitted.

Keep the `videos/` folder on GitHub as-is. Expected project paths in `content.js`:

- `videos/video-one.mp4.mp4`
- `videos/video-two.mp4.mp4`
- `videos/video-three.mp4.mp4` (floating drink)

See `videos/README.md`.

---

## Edit content (Jay)

1. Open `content.js`.
2. Change hero, services, projects, FAQ, contact.
3. Save → refresh. No install or build.

### Contact (already set)

- Instagram: [@admusebyruby](https://instagram.com/admusebyruby)
- Email: [auto.mate0313@gmail.com](mailto:auto.mate0313@gmail.com)

### Add / swap a project video

```js
{
  id: "floating-drink",
  title: "Floating drink",
  aspect: "9 / 16",
  mediaLabel: "Sample coming soon", // shown when video is null
  video: "videos/video-three.mp4.mp4",
  poster: null,
  externalUrl: null,
  tags: ["Vertical", "Lifestyle"]
}
```

**Do not invent client names, testimonials, stats, or sales/virality guarantees.**

---

## Local preview

```bash
cd path/to/this/folder   # contains index.html
npx --yes serve .
```

Or open `index.html` directly in a browser (video may need a local server).

---

## Upload / overwrite on GitHub

Repo: [github.com/automate13/Admuseai](https://github.com/automate13/Admuseai)

Overwrite site files at **repo root**, but **keep existing `videos/` MP4s** on the remote:

```bash
cd path/to/unzipped-site    # folder that contains index.html

# Prefer copying over a clone so large videos stay put:
# cp -R index.html styles.css content.js main.js vercel.json README.md privacy terms images ./your-clone/
# (do not delete remote videos/)

git add index.html styles.css content.js main.js vercel.json README.md privacy terms images videos/README.md
git commit -m "Admuse AI — soft ruby Stitch landing, honest work videos"
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

- Base near-black / charcoal `#0c0a0b` · elevated `#141012` · cards `#181214`
- Text white / `#f3eef1` · muted `#9a8f95` · soft ruby accent `#C75B78` · soft `#E082B4` · deep `#9B2335`
- Type: **Syne** (display) + **DM Sans** (body)
- Rounded cards, premium spacing, light atmospheric haze (not heavy glow)
- Sticky blurred header, mobile nav, skip link, focus styles, reduced-motion
- **Depth:** card shadows + hover 3D pop; soft parallax on glow; hero canvas particles in soft ruby
