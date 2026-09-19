# Videos folder

Drop your project MP4s here, then point to them from `content.js`.

## How to add a video

1. Put an MP4 in this folder, e.g. `billboard.mp4`.
2. Open `content.js` and find the matching project.
3. Set the path:

```js
{
  id: "billboard-throw",
  title: "Billboard product throw",
  // ...
  video: "videos/billboard.mp4",   // relative path from site root
  poster: "videos/billboard.jpg",  // optional still frame
  externalUrl: null                // or a Drive / unlisted URL
}
```

4. Save and refresh. The Work grid renders an HTML5 player:

```html
<video controls playsinline preload="metadata" poster="...">
  <source src="videos/billboard.mp4" type="video/mp4" />
</video>
```

## Size tips (GitHub + Vercel)

- Keep each MP4 under **~50–80 MB** so GitHub pushes stay reliable.
- Prefer H.264 + AAC in an `.mp4` container for broad browser support.
- For larger files, host on Google Drive / Vimeo unlisted / Cloudflare R2 and set `externalUrl` instead of `video` (the card will show a “Watch externally” link; leave `video: null` or still set a short preview MP4).

## Placeholder state

Seed projects ship with `video: null`. Cards show:

> **Add your MP4 in /videos**

until you wire a real file.
