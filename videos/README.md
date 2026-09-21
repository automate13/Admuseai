# Videos folder

Keep this folder on GitHub with the project MP4s. Site zips ship **without** large `.mp4` files.

## Expected files (wired in `content.js`)

| File | Project |
|------|---------|
| `video-one.mp4.mp4` | Product motion study |
| `video-two.mp4.mp4` | Menu pop concept |
| `video-three.mp4.mp4` | Floating drink |

## How to add / replace a video

1. Put an MP4 in this folder.
2. Open `content.js` → `projects`.
3. Set `video: "videos/your-file.mp4"`.
4. Save and refresh.

## Size tips

- Keep each MP4 under ~50–80 MB when possible.
- Prefer H.264 + AAC in `.mp4`.
- For larger files, host elsewhere and set `externalUrl`.
