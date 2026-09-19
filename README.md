# AdmuseAi — Soft Luxury Portfolio

Static portfolio site for **AdmuseAi** (AI UGC / product ads).  
Pure HTML, CSS, and JS — no build step. Free to host on Vercel.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Soft-luxury styles (cream / soft black / ruby `#9B2335`) |
| `content.js` | **All copy, projects, and contact** — edit here |
| `main.js` | Renders content + mobile nav |
| `vercel.json` | Static hosting helpers |

## Edit content

1. Open `content.js`.
2. Change brand text, hero copy, project titles/descriptions, Instagram, or email.
3. Save and refresh the browser — no install or build required.

To add a project, append an object to the `projects` array:

```js
{
  id: "my-new-piece",
  title: "Project title",
  description: "One-line description.",
  aspect: "4 / 5",           // CSS aspect-ratio
  mediaLabel: "Still placeholder"
}
```

Later you can replace media placeholders with real `<img>` / video tags in `main.js` if you want.

**Do not add prices or rate cards** — this site is portfolio + contact only.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## Upload to GitHub

Repo target: [github.com/automate13/Admuseai](https://github.com/automate13/Admuseai)

```bash
cd path/to/admuseai   # folder that contains index.html
git init
git add .
git commit -m "Initial AdmuseAi portfolio site"
git branch -M main
git remote add origin https://github.com/automate13/Admuseai.git
git push -u origin main
```

If the repo already exists and is empty, the same `git push` works after `git remote add`.

## Deploy free on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is fine).
2. **Add New Project** → import `automate13/Admuseai`.
3. Framework preset: **Other** (or leave blank). Root directory: `.`
4. Click **Deploy**. No build command needed.
5. Optional: add a custom domain under Project → Settings → Domains.

Every push to `main` will redeploy automatically.

## Contact placeholders

- Instagram: [@admusebyruby](https://instagram.com/admusebyruby)
- Email: [contact@admuseai.com](mailto:contact@admuseai.com)

Edit these in `content.js` → `contact`.

## Design notes

- Background: cream / ivory  
- Text: soft black  
- Accent: muted ruby `#9B2335`  
- Type: Cormorant Garamond (display) + Outfit (body) via Google Fonts  
- Mobile-first, accessible skip link, focus styles, reduced-motion respect  
