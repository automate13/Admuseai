# Videos folder

Drop project MP4s here, then point to them from `content.js`.

## How to add a video

1. Put an MP4 in this folder, e.g. `billboard.mp4`.
2. Open `content.js` and find the matching project under `projects`.
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

4. Save and refresh. The Work grid renders an HTML5 player with controls.

## Size tips (GitHub + Vercel)

- Keep each MP4 under **~50–80 MB** so GitHub pushes stay reliable.
- Prefer H.264 + AAC in an `.mp4` container.
- For larger files, host elsewhere and set `externalUrl` (card shows “Watch externally →”).

## Empty media

When `video` is `null`, cards show a client-facing **Sample coming soon** placeholder (no developer instructions on the public site).
