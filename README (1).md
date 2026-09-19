# AdmuseAi — Portfolio

Static portfolio for **AdmuseAi** (AI UGC & product ads agency).  
Pure HTML / CSS / JS — **no build step**. Free to host on Vercel.

Visual system matched to a dark mint-glass personal-portfolio layout (fixed blur nav, status chip, glass cards, service pills) — branded for **AdmuseAi**, not a personal CV.

**No prices.** Portfolio + contact only.

---

## Files

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Page structure (Home, About, Services, Work, Contact) |
| `styles.css` | Dark mint glass styles |
| `content.js` | **All copy, projects, contact** — edit here |
| `main.js` | Renders content, mobile nav, HTML5 video cards |
| `videos/` | Drop MP4s here (see `videos/README.md`) |
| `vercel.json` | Static hosting helpers |

---

## Edit content (Jay)

1. Open `content.js`.
2. Change hero copy, services tags, project titles/descriptions, Instagram, or email.
3. Save → refresh the browser. No install or build.

### Contact (already set)

- Instagram: [@admusebyruby](https://instagram.com/admusebyruby)
- Email: [contact@admuseai.com](mailto:contact@admuseai.com)

Edit under `contact` in `content.js`.

### Add / wire a project video

```js
{
  id: "billboard-throw",
  title: "Billboard product throw",
  description: "…",
  aspect: "9 / 16",
  mediaLabel: "Add your MP4 in /videos",
  video: "videos/billboard.mp4",  // or null until ready
  poster: null,                   // optional poster image
  externalUrl: null,              // optional Drive / unlisted link
  tags: ["Vertical reel", "Product"]
}
```

- When `video` is set, Work renders `<video controls playsinline preload="metadata">`.
- Keep MP4s under **~50–80 MB** each for GitHub, or use `externalUrl` for large files.
- See `videos/README.md` for drop-in instructions.

**Do not add prices or rate cards.**

---

## Local preview

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

---

## Upload to GitHub

Repo: [github.com/automate13/Admuseai](https://github.com/automate13/Admuseai)

```bash
cd path/to/admuseai   # folder that contains index.html
git init              # skip if already a repo
git add .
git commit -m "AdmuseAi portfolio — dark mint glass + video Work"
git branch -M main
git remote add origin https://github.com/automate13/Admuseai.git
# if remote already exists: git remote set-url origin https://github.com/automate13/Admuseai.git
git push -u origin main
```

---

## Deploy / redeploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New Project** → import `automate13/Admuseai`  
   (or open the existing project if already linked).
3. Framework preset: **Other**. Root directory: `.`
4. Click **Deploy**. No build command needed.
5. Every push to `main` redeploys automatically.
6. Optional: Project → Settings → Domains for a custom domain.

---

## Design notes

- Background: `#050a0f`
- Text: `#e2e8f0` · muted `#7a8fa6`
- Accent mint: `#64ffda` · optional violet `#7b61ff` (sparingly in glows)
- Glass: `rgba(255,255,255,0.04)` · borders `rgba(255,255,255,0.09)`
- Type: **Syne** (display) + **DM Sans** (body) via Google Fonts
- Fixed blur nav, wordmark with mint period, uppercase links
- Hero status chip + pill CTAs + white/mint Syne headline split
- Content column ~900px centered
- Mobile nav, skip link, focus styles, reduced-motion respect
