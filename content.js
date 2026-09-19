/**
 * AdmuseAi — all site copy, projects, and contact live here.
 * Edit this file, save, refresh. No build step needed.
 *
 * Projects support optional media fields:
 *   video:       "videos/your-file.mp4"   → HTML5 <video> player
 *   poster:      "videos/poster.jpg"      → poster frame for video
 *   externalUrl: "https://..."            → link out (Drive / unlisted host)
 *   Leave video: null to show the placeholder until you drop an MP4 in /videos.
 */
window.ADMUSE_CONTENT = {
  brand: "AdmuseAi",
  tagline: "AI UGC & product ads",
  seo: {
    title: "AdmuseAi — AI UGC & Product Ads",
    description:
      "AdmuseAi creates refined AI UGC and product ads for brands — cinematic, conversion-ready creatives."
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    badge: "Open for brand partnerships",
    eyebrow: "AI UGC · Product Ads",
    headline: "Soft luxury ads",
    headlineAccent: "that feel handmade.",
    subhead:
      "AdmuseAi crafts cinematic product stories and UGC-style creatives — refined, warm, and built to convert without looking like AI slop.",
    ctaPrimary: { label: "View work", href: "#work" },
    ctaSecondary: { label: "Get in touch", href: "#contact" }
  },
  about: {
    eyebrow: "About",
    title: "An agency for brands that want quiet polish.",
    body:
      "We specialize in AI-assisted UGC and product ads with a soft-luxury finish — cream light, editorial pacing, and conversion-minded framing. Less noise. More desire."
  },
  services: {
    eyebrow: "Services",
    title: "What we make",
    intro: "Pick a lane or combine — every deliverable is tuned for brands that want polish without the fluff.",
    tags: [
      "AI UGC",
      "Product ads",
      "Vertical reels",
      "Hero stills",
      "Beauty & lifestyle",
      "Food & CPG",
      "Ecom launch packs",
      "Storyboard + edit"
    ]
  },
  work: {
    eyebrow: "Selected work",
    title: "Recent projects",
    intro:
      "Drop your MP4s into /videos and set the video path in content.js. Until then, each card shows a clear placeholder."
  },
  projects: [
    {
      id: "billboard-throw",
      title: "Billboard product throw",
      description:
        "Dynamic product toss against a soft urban billboard — kinetic, branded, scroll-stopping.",
      aspect: "9 / 16",
      mediaLabel: "Add your MP4 in /videos",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Vertical reel", "Product"]
    },
    {
      id: "prime-steak",
      title: "Prime Steak House menu pop",
      description:
        "Menu items that bloom into frame with warm light and appetite-forward pacing.",
      aspect: "1 / 1",
      mediaLabel: "Add your MP4 in /videos",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Food", "Square"]
    },
    {
      id: "one-cherry-rule",
      title: "One Cherry Rule lipstick",
      description:
        "Soft-focus beauty hero with cherry accents — intimate, glossy, editorial UGC.",
      aspect: "4 / 5",
      mediaLabel: "Add your MP4 in /videos",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Beauty", "UGC"]
    },
    {
      id: "soft-luxury-hero",
      title: "Soft luxury product hero",
      description:
        "Cream-and-ruby product hero for ecom — quiet confidence, generous negative space.",
      aspect: "16 / 9",
      mediaLabel: "Add your MP4 in /videos",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Ecom", "Wide hero"]
    }
  ],
  contact: {
    eyebrow: "Contact",
    title: "Let's make something refined.",
    intro:
      "For brand collaborations, UGC packs, and product ad systems — reach out on Instagram or email.",
    instagram: {
      handle: "@admusebyruby",
      url: "https://instagram.com/admusebyruby"
    },
    email: {
      address: "contact@admuseai.com",
      mailto: "mailto:contact@admuseai.com"
    }
  },
  footer: {
    note: "AdmuseAi — AI UGC & product ads."
  }
};
