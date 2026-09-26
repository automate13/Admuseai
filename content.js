/**
 * Admuse AI — single source of truth for copy & projects.
 * Edit this file, save, refresh. No build step.
 *
 * Soft ruby Stitch-style landing — no pricing, no fake metrics.
 *
 * Projects support optional media fields:
 *   video:       "videos/your-file.mp4"   → HTML5 <video> player
 *   poster:      "videos/poster.jpg"      → poster frame for video
 *   externalUrl: "https://..."            → link out (Drive / unlisted host)
 *   Leave video: null for a “Sample coming soon” placeholder.
 */
window.ADMUSE_CONTENT = {
  brand: "ADMUSE AI",
  brandShort: "Admuse AI",
  tagline: "AI UGC & product ads for modern brands",

  seo: {
    title: "Admuse AI — AI UGC & Product Ads for Modern Brands",
    description:
      "Create scroll-stopping UGC videos, product ads, and social creatives with Admuse AI — premium AI-powered production without expensive photoshoots."
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" }
  ],

  navCta: {
    label: "Start a Project",
    href: "mailto:auto.mate0313@gmail.com"
  },

  navCtaSecondary: {
    label: "IG DM",
    href: "https://instagram.com/admusebyruby"
  },

  hero: {
    badge: "Admuse · AI UGC studio",
    eyebrow: "Admuse · AI UGC studio",
    headline: "AI-Powered UGC Ads That Sell.",
    subhead:
      "Scroll-stopping UGC, product ads, and social creatives — premium AI production without the photoshoot overhead.",
    ctaPrimary: {
      label: "Start a Project",
      href: "mailto:auto.mate0313@gmail.com"
    },
    ctaSecondary: { label: "View Work", href: "#work" },
    frameLabel: "UGC · 9:16",
    frameHint: "Your next ad lives here",
    popImage: "images/hero-pop.png"
  },

  valueStrip: [
    "AI UGC",
    "Product Ads",
    "Product Photography",
    "Social Creatives",
    "Video Ads"
  ],

  services: {
    eyebrow: "Services",
    title: "What We Create",
    intro:
      "Four core lanes — mix and match for launch packs, always-on social, or a single hero concept.",
    items: [
      {
        id: "ai-ugc",
        title: "AI UGC",
        description:
          "Native-feeling creator-style videos tuned for TikTok, Reels, and Shorts — authentic pacing, product-first framing.",
        icon: "ugc"
      },
      {
        id: "product-ads",
        title: "Product Ads",
        description:
          "Conversion-minded product spots with editorial light, clean motion, and clear offer storytelling.",
        icon: "ads"
      },
      {
        id: "product-photo",
        title: "AI Product Photography",
        description:
          "Hero stills and lifestyle sets without a studio day — consistent lighting, brand-ready crops for ecom and ads.",
        icon: "photo"
      },
      {
        id: "social",
        title: "Social Ad Creatives",
        description:
          "Feed-native statics and short motion for Meta, TikTok, and Stories — designed to stop the thumb.",
        icon: "social"
      }
    ]
  },

  work: {
    eyebrow: "Featured work",
    title: "Built for the Feed.",
    intro:
      "Real production samples — honest titles, real files. No invented metrics or brand logos."
  },

  projects: [
    {
      id: "video-one",
      title: "Product motion study",
      description:
        "Clean product-led motion with soft light and feed-ready framing — built to hold attention in a vertical scroll.",
      aspect: "9 / 16",
      mediaLabel: "Sample coming soon",
      video: "videos/video-one.mp4.mp4?v=2",
      poster: null,
      externalUrl: null,
      tags: ["Vertical", "Product"]
    },
    {
      id: "video-two",
      title: "Menu pop concept",
      description:
        "Menu items that bloom into frame with warm light and appetite-forward pacing.",
      aspect: "1 / 1",
      mediaLabel: "Sample coming soon",
      video: "videos/video-two.mp4.mp4",
      poster: null,
      externalUrl: null,
      tags: ["Food", "Square"]
    },
    {
      id: "floating-drink",
      title: "Floating drink",
      description:
        "Kinetic beverage moment with soft ruby grade — product-first, lifestyle energy, scroll-stopping motion.",
      aspect: "9 / 16",
      mediaLabel: "Sample coming soon",
      video: "videos/video-three.mp4.mp4",
      poster: null,
      externalUrl: null,
      tags: ["Vertical", "Lifestyle"]
    }
  ],

  process: {
    eyebrow: "How it works",
    title: "From Product to Ad",
    intro: "A clear path from what you sell to what the feed sees.",
    steps: [
      {
        num: "01",
        title: "Brief",
        body: "Share your product, brand refs, offer, and platforms. Email or Instagram works."
      },
      {
        num: "02",
        title: "Direction",
        body: "We lock creative angles, formats, and UGC styles that fit your category — no wasted shoots."
      },
      {
        num: "03",
        title: "Produce",
        body: "AI-assisted production under human creative direction — generate, refine, and polish."
      },
      {
        num: "04",
        title: "Deliver",
        body: "Platform-ready exports plus room to iterate on winners for the next flight."
      }
    ]
  },

  comparison: {
    eyebrow: "Why Admuse",
    title: "Traditional vs Admuse",
    intro:
      "A practical comparison — not a promise of results. Every brand and campaign is different.",
    columns: [
      {
        label: "Traditional",
        items: [
          "Studio booking & crew logistics",
          "Long lead times per concept",
          "High cost per variation",
          "Hard to test many angles fast",
          "One shoot = limited assets"
        ]
      },
      {
        label: "Admuse",
        highlight: true,
        items: [
          "Remote, creative-led workflow",
          "Faster concept-to-delivery cycles",
          "More variations per budget",
          "Built for rapid creative testing",
          "Ongoing packs for always-on social"
        ]
      }
    ]
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What is AI UGC?",
        a: "AI UGC is creator-style video and imagery produced with modern AI tools under human creative direction — built to feel native on social, not like a traditional TV spot."
      },
      {
        q: "How is this different from a traditional photoshoot?",
        a: "You skip much of the studio logistics and can explore more concepts per budget. We still treat brand, lighting, and offer clarity with the same care as a premium shoot."
      },
      {
        q: "What do you need from us to start?",
        a: "Product details or sample refs, brand guidelines or mood refs, target platforms, and your offer or CTA. A short brief on Instagram or email is enough to begin."
      },
      {
        q: "How long does a project take?",
        a: "Timelines depend on scope. Focused packs move faster; multi-asset work needs more review cycles. We’ll confirm dates when we scope."
      },
      {
        q: "Can you match our existing brand look?",
        a: "Yes. Share fonts, colors, past ads, and references. Direction is locked before production so outputs stay on-brand."
      },
      {
        q: "Do you guarantee sales or virality?",
        a: "No. We deliver strong, scroll-ready creatives designed for testing — performance depends on offer, audience, media, and many factors outside the asset alone."
      }
    ]
  },

  finalCta: {
    eyebrow: "Next step",
    title: "Ready when your product is.",
    body:
      "Tell us what you’re launching. Reach us on Instagram @admusebyruby or email — we’ll reply with a clear next step.",
    ctaPrimary: {
      label: "Email Us",
      href: "mailto:auto.mate0313@gmail.com"
    },
    ctaSecondary: {
      label: "Instagram @admusebyruby",
      href: "https://instagram.com/admusebyruby"
    }
  },

  contact: {
    email: {
      address: "auto.mate0313@gmail.com",
      mailto: "mailto:auto.mate0313@gmail.com"
    },
    instagram: {
      handle: "@admusebyruby",
      url: "https://instagram.com/admusebyruby"
    }
  },

  footer: {
    note: "© 2026 Admuse AI · Soft ruby creative",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy", href: "privacy/" },
      { label: "Terms", href: "terms/" }
    ]
  }
};
