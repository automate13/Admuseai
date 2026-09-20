/**
 * Admuse AI — single source of truth for copy, projects, pricing, FAQ.
 * Edit this file, save, refresh. No build step.
 *
 * Projects support optional media fields:
 *   video:       "videos/your-file.mp4"   → HTML5 <video> player
 *   poster:      "videos/poster.jpg"      → poster frame for video
 *   externalUrl: "https://..."            → link out (Drive / unlisted host)
 *   Leave video: null for a client-facing “Sample coming soon” placeholder.
 *
 * Hero is typography + atmospheric particles/haze (no phone mockup).
 * Unused-but-kept API fields (safe to leave or delete later):
 *   hero.frameLabel, hero.frameHint, hero.popImage
 *
 * Pricing: set price to "Contact for quote", "—", or your own string.
 * Do NOT invent dollar amounts unless Jay confirms them.
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
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" }
  ],

  navCta: {
    label: "Start a Project →",
    href: "mailto:auto.mate0313@gmail.com"
  },

  hero: {
    eyebrow: "Premium creative · AI-assisted production",
    headline: "AI-Powered UGC Ads That Sell.",
    subhead:
      "Create scroll-stopping UGC videos, product ads, and social creatives without expensive photoshoots or traditional production.",
    ctaPrimary: {
      label: "Start a Project →",
      href: "mailto:auto.mate0313@gmail.com"
    },
    ctaSecondary: { label: "View Our Work →", href: "#work" },
    /* Unused legacy fields — kept so older content.js forks stay valid */
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

  intro: {
    eyebrow: "The shift",
    title: "Your product deserves more than another static ad.",
    body:
      "Feeds move fast. Attention is scarce. Brands that win show up with native-feeling UGC, product-led motion, and social creatives built for the scroll — not leftover campaign leftovers. Admuse AI blends modern AI production with premium creative direction so you can ship more concepts, faster, without booking a full shoot every time.",
    cta: { label: "Explore Our Services →", href: "#services" }
  },

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
    eyebrow: "Work",
    title: "Built for the Feed.",
    intro:
      "Selected concepts and production styles. Media slots update as new samples are ready."
  },

  projects: [
    {
      id: "billboard-throw",
      title: "Billboard product throw",
      description:
        "Dynamic product toss against a soft urban billboard — kinetic, branded, scroll-stopping.",
      aspect: "9 / 16",
      mediaLabel: "Sample coming soon",
      video: "videos/girl-drink.mp4",
      poster: null,
      externalUrl: null,
      tags: ["Vertical", "Product"]
    },
    {
      id: "prime-steak",
      title: "Menu pop concept",
      description:
        "Menu items that bloom into frame with warm light and appetite-forward pacing.",
      aspect: "1 / 1",
      mediaLabel: "Sample coming soon",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Food", "Square"]
    },
    {
      id: "one-cherry-rule",
      title: "Beauty hero concept",
      description:
        "Soft-focus beauty hero with intimate framing — glossy, editorial UGC energy.",
      aspect: "4 / 5",
      mediaLabel: "Sample coming soon",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Beauty", "UGC"]
    },
    {
      id: "soft-luxury-hero",
      title: "Soft luxury product hero",
      description:
        "Quiet-confidence product hero for ecom — generous space, refined light.",
      aspect: "16 / 9",
      mediaLabel: "Sample coming soon",
      video: null,
      poster: null,
      externalUrl: null,
      tags: ["Ecom", "Wide"]
    }
  ],

  process: {
    eyebrow: "Process",
    title: "From Product to Ad",
    intro: "A clear path from what you sell to what the feed sees.",
    steps: [
      {
        num: "01",
        title: "Product intake",
        body: "Share your product, brand refs, offer, and platforms. We lock creative direction early."
      },
      {
        num: "02",
        title: "Concept & direction",
        body: "We propose angles, formats, and UGC styles that fit your category — no wasted shoots."
      },
      {
        num: "03",
        title: "AI-assisted production",
        body: "Generate, refine, and edit stills and video into feed-ready creatives."
      },
      {
        num: "04",
        title: "Delivery & iteration",
        body: "You get export-ready assets plus room to iterate on winners for the next flight."
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

  directions: {
    eyebrow: "Creative range",
    title: "One Product. Endless Creative Possibilities.",
    intro:
      "The same SKU can live as UGC, product hero, lifestyle still, or motion ad — different jobs, one brand system.",
    items: [
      { title: "Creator UGC", body: "Handheld energy, talking-to-camera feel, native captions." },
      { title: "Product hero", body: "Clean light, sharp detail, offer-forward framing." },
      { title: "Lifestyle set", body: "Context, mood, and desire without a full location shoot." },
      { title: "Motion ad", body: "Short cuts, hooks, and end-card clarity for paid social." },
      { title: "Static social", body: "Thumb-stopping frames for feeds and Stories." },
      { title: "Launch pack", body: "A coordinated set for drop day across platforms." }
    ]
  },

  howItWorks: {
    eyebrow: "How it works",
    title: "How It Works",
    intro: "Four steps from first message to assets in your ad account.",
    steps: [
      {
        num: "01",
        title: "Brief",
        body: "Tell us about the product, audience, and goal. Email or Instagram works."
      },
      {
        num: "02",
        title: "Scope",
        body: "We align on formats, quantity, timeline, and package — Starter, Growth, or Custom."
      },
      {
        num: "03",
        title: "Create",
        body: "Direction, production, and polish. You review; we refine."
      },
      {
        num: "04",
        title: "Ship",
        body: "Receive platform-ready files plus guidance on how to cut and test."
      }
    ],
    cta: {
      label: "Start a Project →",
      href: "mailto:auto.mate0313@gmail.com"
    }
  },

  whoWeServe: {
    eyebrow: "Who we serve",
    title: "Who We Serve",
    intro: "Built for brands that need social-first creative — not a bloated production calendar.",
    tags: [
      "Beauty & skincare",
      "Fashion & accessories",
      "Food & beverage",
      "CPG & lifestyle",
      "DTC / ecom",
      "Wellness",
      "Home & living",
      "Startups & launches"
    ]
  },

  platforms: {
    eyebrow: "Made for the scroll",
    title: "Made for the Scroll",
    intro:
      "Creatives shaped for the platforms your audience already scrolls — we do not claim official partnerships.",
    items: [
      { name: "TikTok", note: "Vertical UGC & hooks" },
      { name: "Instagram", note: "Reels, Stories, feed" },
      { name: "Meta Ads", note: "Paid social formats" },
      { name: "YouTube Shorts", note: "Short-form motion" },
      { name: "Pinterest", note: "Visual discovery stills" },
      { name: "Shopify / ecom", note: "PDP & launch assets" }
    ]
  },

  pricing: {
    eyebrow: "Pricing",
    title: "Pricing",
    intro:
      "Packages scale with volume and complexity. Exact quotes depend on scope — amounts below are editable placeholders until Jay sets them.",
    note: "Prices are placeholders. Edit content.js → pricing.tiers[].price",
    tiers: [
      {
        id: "starter",
        name: "STARTER",
        price: "Contact for quote",
        blurb: "A focused set to test one product or offer.",
        features: [
          "Core UGC or product ad concepts",
          "Limited asset pack",
          "One revision round",
          "Platform-ready exports"
        ],
        cta: { label: "Inquire →", href: "mailto:auto.mate0313@gmail.com?subject=Starter%20package" }
      },
      {
        id: "growth",
        name: "GROWTH",
        price: "Contact for quote",
        featured: true,
        blurb: "More concepts and variations for always-on testing.",
        features: [
          "Expanded creative directions",
          "UGC + product + social mix",
          "Multiple revision rounds",
          "Priority turnaround"
        ],
        cta: { label: "Inquire →", href: "mailto:auto.mate0313@gmail.com?subject=Growth%20package" }
      },
      {
        id: "custom",
        name: "CUSTOM",
        price: "—",
        blurb: "Launch systems, retainers, or multi-SKU campaigns.",
        features: [
          "Bespoke scope & timeline",
          "Brand system & packs",
          "Ongoing creative support",
          "Direct creative partnership"
        ],
        cta: { label: "Talk to us →", href: "mailto:auto.mate0313@gmail.com?subject=Custom%20project" }
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
        a: "Product details or samples refs, brand guidelines or mood refs, target platforms, and your offer or CTA. A short brief on Instagram or email is enough to begin."
      },
      {
        q: "How long does a project take?",
        a: "Timelines depend on scope and package. Starter packs move faster; multi-asset Growth and Custom work need more review cycles. We’ll confirm dates when we scope."
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

  about: {
    eyebrow: "About",
    title: "A creative agency for social-first brands.",
    body:
      "Admuse AI is a premium creative practice: modern AI production with editorial taste. We help brands ship UGC, product ads, and social creatives that feel intentional — without the overhead of traditional production for every concept."
  },

  finalCta: {
    eyebrow: "Next step",
    title: "Ready when your product is.",
    body:
      "Tell us what you’re launching. We’ll reply with a clear next step — no pressure pitch deck.",
    ctaPrimary: {
      label: "Start a Project →",
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
    note: "© 2026 Admuse AI",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
      { label: "Privacy", href: "privacy/" },
      { label: "Terms", href: "terms/" }
    ]
  }
};
