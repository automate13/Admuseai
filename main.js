(function () {
  "use strict";

  var content = window.ADMUSE_CONTENT;
  if (!content) {
    console.error("ADMUSE_CONTENT missing. Load content.js before main.js.");
    return;
  }

  function text(el, value) {
    if (el && value != null) el.textContent = value;
  }

  function makeBtn(cta, primary) {
    if (!cta || !cta.href) return null;
    var a = document.createElement("a");
    a.className = "btn " + (primary ? "btn-primary" : "btn-ghost");
    a.href = cta.href;
    a.textContent = cta.label || "";
    if (cta.href.indexOf("http") === 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  }

  function clear(el) {
    if (el) el.innerHTML = "";
  }

  function setSeo() {
    if (!content.seo) return;
    if (content.seo.title) document.title = content.seo.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && content.seo.description) {
      meta.setAttribute("content", content.seo.description);
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && content.seo.title) {
      ogTitle.setAttribute("content", content.seo.title);
    }
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && content.seo.description) {
      ogDesc.setAttribute("content", content.seo.description);
    }
  }

  function renderBrand() {
    document.querySelectorAll('[data-bind="brand"]').forEach(function (el) {
      text(el, content.brand);
    });
  }

  function renderNav() {
    var list = document.querySelector('[data-bind="nav"]');
    if (list && content.nav) {
      clear(list);
      content.nav.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        list.appendChild(li);
      });
    }

    var ctaWrap = document.querySelector('[data-bind="navCta"]');
    if (ctaWrap && content.navCta) {
      clear(ctaWrap);
      var btn = makeBtn(content.navCta, true);
      if (btn) {
        btn.classList.add("btn-nav");
        ctaWrap.appendChild(btn);
      }
    }
  }

  function renderHero() {
    var hero = content.hero || {};
    text(document.querySelector('[data-bind="hero.eyebrow"]'), hero.eyebrow);
    text(document.querySelector('[data-bind="hero.headline"]'), hero.headline);
    text(document.querySelector('[data-bind="hero.subhead"]'), hero.subhead);
    text(document.querySelector('[data-bind="hero.frameLabel"]'), hero.frameLabel);
    text(document.querySelector('[data-bind="hero.frameHint"]'), hero.frameHint);

    var popImg = document.querySelector('[data-bind="hero.popImage"]');
    if (popImg) {
      var src = hero.popImage || "images/hero-pop.png";
      popImg.alt = "";
      popImg.addEventListener(
        "load",
        function () {
          popImg.classList.add("is-loaded");
        },
        { once: true }
      );
      popImg.addEventListener(
        "error",
        function () {
          popImg.removeAttribute("src");
          popImg.classList.remove("is-loaded");
        },
        { once: true }
      );
      popImg.src = src;
    }

    var actions = document.querySelector('[data-bind="hero.actions"]');
    if (!actions) return;
    clear(actions);
    var primary = makeBtn(hero.ctaPrimary, true);
    var secondary = makeBtn(hero.ctaSecondary, false);
    if (primary) actions.appendChild(primary);
    if (secondary) actions.appendChild(secondary);
  }

  function renderValueStrip() {
    var wrap = document.querySelector('[data-bind="valueStrip"]');
    if (!wrap || !content.valueStrip) return;
    clear(wrap);
    content.valueStrip.forEach(function (label, i) {
      if (i > 0) {
        var sep = document.createElement("span");
        sep.className = "value-sep";
        sep.setAttribute("aria-hidden", "true");
        sep.textContent = "·";
        wrap.appendChild(sep);
      }
      var span = document.createElement("span");
      span.className = "value-item";
      span.textContent = label;
      wrap.appendChild(span);
    });
  }

  function renderIntro() {
    var intro = content.intro || {};
    text(document.querySelector('[data-bind="intro.eyebrow"]'), intro.eyebrow);
    text(document.querySelector('[data-bind="intro.title"]'), intro.title);
    text(document.querySelector('[data-bind="intro.body"]'), intro.body);
    var ctaWrap = document.querySelector('[data-bind="intro.cta"]');
    if (ctaWrap && intro.cta) {
      clear(ctaWrap);
      var link = document.createElement("a");
      link.className = "text-link";
      link.href = intro.cta.href;
      link.textContent = intro.cta.label;
      ctaWrap.appendChild(link);
    }
  }

  function serviceIcon(type) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("service-icon");

    var paths = {
      ugc: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
      ads: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 4h7M14 14h3",
      photo: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      social: "M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
    };

    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("d", paths[type] || paths.ugc);
    svg.appendChild(path);
    return svg;
  }

  function renderServices() {
    var services = content.services || {};
    text(document.querySelector('[data-bind="services.eyebrow"]'), services.eyebrow);
    text(document.querySelector('[data-bind="services.title"]'), services.title);
    text(document.querySelector('[data-bind="services.intro"]'), services.intro);

    var grid = document.querySelector('[data-bind="services.items"]');
    if (!grid || !services.items) return;
    clear(grid);

    services.items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "service-card";
      card.setAttribute("role", "listitem");

      var iconWrap = document.createElement("div");
      iconWrap.className = "service-icon-wrap";
      iconWrap.appendChild(serviceIcon(item.icon));

      var h3 = document.createElement("h3");
      h3.textContent = item.title || "";

      var p = document.createElement("p");
      p.textContent = item.description || "";

      card.appendChild(iconWrap);
      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });
  }

  function buildPlaceholder(project) {
    var inner = document.createElement("div");
    inner.className = "project-media-inner";

    var dot = document.createElement("div");
    dot.className = "project-media-dot";
    dot.setAttribute("aria-hidden", "true");

    var label = document.createElement("p");
    label.className = "project-media-label";
    label.textContent = project.mediaLabel || "Sample coming soon";

    inner.appendChild(dot);
    inner.appendChild(label);
    return inner;
  }

  function buildVideo(project) {
    var video = document.createElement("video");
    video.controls = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "metadata");
    video.className = "project-video";
    if (project.poster) video.setAttribute("poster", project.poster);
    video.setAttribute("aria-label", (project.title || "Project") + " video");

    var source = document.createElement("source");
    source.src = project.video;
    source.type = "video/mp4";
    video.appendChild(source);

    var fallback = document.createElement("p");
    fallback.className = "project-media-label";
    fallback.textContent = "Your browser does not support HTML5 video.";
    video.appendChild(fallback);

    return video;
  }

  function renderWork() {
    var work = content.work || {};
    text(document.querySelector('[data-bind="work.eyebrow"]'), work.eyebrow);
    text(document.querySelector('[data-bind="work.title"]'), work.title);
    text(document.querySelector('[data-bind="work.intro"]'), work.intro);

    var grid = document.querySelector('[data-bind="projects"]');
    if (!grid || !content.projects) return;
    clear(grid);

    content.projects.forEach(function (project) {
      var card = document.createElement("article");
      card.className = "project-card";
      card.setAttribute("role", "listitem");

      var media = document.createElement("div");
      media.className = "project-media";
      media.style.aspectRatio = project.aspect || "4 / 5";

      if (project.video) {
        media.classList.add("has-video");
        media.appendChild(buildVideo(project));
      } else {
        media.appendChild(buildPlaceholder(project));
      }

      var body = document.createElement("div");
      body.className = "project-body";

      var h3 = document.createElement("h3");
      h3.textContent = project.title || "";

      var p = document.createElement("p");
      p.textContent = project.description || "";

      body.appendChild(h3);
      body.appendChild(p);

      if (project.tags && project.tags.length) {
        var tags = document.createElement("ul");
        tags.className = "project-tags";
        project.tags.forEach(function (t) {
          var li = document.createElement("li");
          li.textContent = t;
          tags.appendChild(li);
        });
        body.appendChild(tags);
      }

      if (project.externalUrl) {
        var ext = document.createElement("a");
        ext.className = "project-external";
        ext.href = project.externalUrl;
        ext.target = "_blank";
        ext.rel = "noopener noreferrer";
        ext.textContent = "Watch externally →";
        body.appendChild(ext);
      }

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function renderProcess() {
    var process = content.process || {};
    text(document.querySelector('[data-bind="process.eyebrow"]'), process.eyebrow);
    text(document.querySelector('[data-bind="process.title"]'), process.title);
    text(document.querySelector('[data-bind="process.intro"]'), process.intro);

    var grid = document.querySelector('[data-bind="process.steps"]');
    if (!grid || !process.steps) return;
    clear(grid);

    process.steps.forEach(function (step) {
      var li = document.createElement("li");
      li.className = "process-step";

      var num = document.createElement("span");
      num.className = "step-num";
      num.textContent = step.num;

      var h3 = document.createElement("h3");
      h3.textContent = step.title || "";

      var p = document.createElement("p");
      p.textContent = step.body || "";

      li.appendChild(num);
      li.appendChild(h3);
      li.appendChild(p);
      grid.appendChild(li);
    });
  }

  function renderComparison() {
    var comparison = content.comparison || {};
    text(document.querySelector('[data-bind="comparison.eyebrow"]'), comparison.eyebrow);
    text(document.querySelector('[data-bind="comparison.title"]'), comparison.title);
    text(document.querySelector('[data-bind="comparison.intro"]'), comparison.intro);

    var grid = document.querySelector('[data-bind="comparison.columns"]');
    if (!grid || !comparison.columns) return;
    clear(grid);

    comparison.columns.forEach(function (col) {
      var card = document.createElement("div");
      card.className = "compare-card" + (col.highlight ? " is-highlight" : "");

      var h3 = document.createElement("h3");
      h3.textContent = col.label || "";

      var ul = document.createElement("ul");
      (col.items || []).forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });

      card.appendChild(h3);
      card.appendChild(ul);
      grid.appendChild(card);
    });
  }

  function renderDirections() {
    var directions = content.directions || {};
    text(document.querySelector('[data-bind="directions.eyebrow"]'), directions.eyebrow);
    text(document.querySelector('[data-bind="directions.title"]'), directions.title);
    text(document.querySelector('[data-bind="directions.intro"]'), directions.intro);

    var grid = document.querySelector('[data-bind="directions.items"]');
    if (!grid || !directions.items) return;
    clear(grid);

    directions.items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "direction-card";
      card.setAttribute("role", "listitem");

      var h3 = document.createElement("h3");
      h3.textContent = item.title || "";

      var p = document.createElement("p");
      p.textContent = item.body || "";

      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });
  }

  function renderHowItWorks() {
    var how = content.howItWorks || {};
    text(document.querySelector('[data-bind="howItWorks.eyebrow"]'), how.eyebrow);
    text(document.querySelector('[data-bind="howItWorks.title"]'), how.title);
    text(document.querySelector('[data-bind="howItWorks.intro"]'), how.intro);

    var grid = document.querySelector('[data-bind="howItWorks.steps"]');
    if (grid && how.steps) {
      clear(grid);
      how.steps.forEach(function (step) {
        var li = document.createElement("li");
        li.className = "how-step";

        var num = document.createElement("span");
        num.className = "step-num";
        num.textContent = step.num;

        var h3 = document.createElement("h3");
        h3.textContent = step.title || "";

        var p = document.createElement("p");
        p.textContent = step.body || "";

        li.appendChild(num);
        li.appendChild(h3);
        li.appendChild(p);
        grid.appendChild(li);
      });
    }

    var ctaWrap = document.querySelector('[data-bind="howItWorks.cta"]');
    if (ctaWrap && how.cta) {
      clear(ctaWrap);
      var btn = makeBtn(how.cta, true);
      if (btn) ctaWrap.appendChild(btn);
    }
  }

  function renderWhoWeServe() {
    var who = content.whoWeServe || {};
    text(document.querySelector('[data-bind="whoWeServe.eyebrow"]'), who.eyebrow);
    text(document.querySelector('[data-bind="whoWeServe.title"]'), who.title);
    text(document.querySelector('[data-bind="whoWeServe.intro"]'), who.intro);

    var list = document.querySelector('[data-bind="whoWeServe.tags"]');
    if (!list || !who.tags) return;
    clear(list);

    who.tags.forEach(function (tag) {
      var li = document.createElement("li");
      li.className = "audience-tag";
      li.setAttribute("role", "listitem");
      li.textContent = tag;
      list.appendChild(li);
    });
  }

  function renderPlatforms() {
    var platforms = content.platforms || {};
    text(document.querySelector('[data-bind="platforms.eyebrow"]'), platforms.eyebrow);
    text(document.querySelector('[data-bind="platforms.title"]'), platforms.title);
    text(document.querySelector('[data-bind="platforms.intro"]'), platforms.intro);

    var grid = document.querySelector('[data-bind="platforms.items"]');
    if (!grid || !platforms.items) return;
    clear(grid);

    platforms.items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "platform-card";
      card.setAttribute("role", "listitem");

      var h3 = document.createElement("h3");
      h3.textContent = item.name || "";

      var p = document.createElement("p");
      p.textContent = item.note || "";

      card.appendChild(h3);
      card.appendChild(p);
      grid.appendChild(card);
    });
  }

  function renderPricing() {
    var pricing = content.pricing || {};
    text(document.querySelector('[data-bind="pricing.eyebrow"]'), pricing.eyebrow);
    text(document.querySelector('[data-bind="pricing.title"]'), pricing.title);
    text(document.querySelector('[data-bind="pricing.intro"]'), pricing.intro);
    text(document.querySelector('[data-bind="pricing.note"]'), pricing.note);

    var grid = document.querySelector('[data-bind="pricing.tiers"]');
    if (!grid || !pricing.tiers) return;
    clear(grid);

    pricing.tiers.forEach(function (tier) {
      var card = document.createElement("article");
      card.className = "pricing-card" + (tier.featured ? " is-featured" : "");
      card.setAttribute("role", "listitem");

      var name = document.createElement("p");
      name.className = "pricing-name";
      name.textContent = tier.name || "";

      var price = document.createElement("p");
      price.className = "pricing-price";
      price.textContent = tier.price || "—";

      var blurb = document.createElement("p");
      blurb.className = "pricing-blurb";
      blurb.textContent = tier.blurb || "";

      var ul = document.createElement("ul");
      ul.className = "pricing-features";
      (tier.features || []).forEach(function (f) {
        var li = document.createElement("li");
        li.textContent = f;
        ul.appendChild(li);
      });

      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(blurb);
      card.appendChild(ul);

      if (tier.cta) {
        var btn = makeBtn(tier.cta, !!tier.featured);
        if (btn) card.appendChild(btn);
      }

      grid.appendChild(card);
    });
  }

  function renderFaq() {
    var faq = content.faq || {};
    text(document.querySelector('[data-bind="faq.eyebrow"]'), faq.eyebrow);
    text(document.querySelector('[data-bind="faq.title"]'), faq.title);

    var list = document.querySelector('[data-bind="faq.items"]');
    if (!list || !faq.items) return;
    clear(list);

    faq.items.forEach(function (item, index) {
      var details = document.createElement("details");
      details.className = "faq-item";
      if (index === 0) details.open = true;

      var summary = document.createElement("summary");
      summary.textContent = item.q || "";

      var p = document.createElement("p");
      p.textContent = item.a || "";

      details.appendChild(summary);
      details.appendChild(p);
      list.appendChild(details);
    });
  }

  function renderAbout() {
    var about = content.about || {};
    text(document.querySelector('[data-bind="about.eyebrow"]'), about.eyebrow);
    text(document.querySelector('[data-bind="about.title"]'), about.title);
    text(document.querySelector('[data-bind="about.body"]'), about.body);
  }

  function renderFinalCta() {
    var cta = content.finalCta || {};
    text(document.querySelector('[data-bind="finalCta.eyebrow"]'), cta.eyebrow);
    text(document.querySelector('[data-bind="finalCta.title"]'), cta.title);
    text(document.querySelector('[data-bind="finalCta.body"]'), cta.body);

    var actions = document.querySelector('[data-bind="finalCta.actions"]');
    if (!actions) return;
    clear(actions);
    var primary = makeBtn(cta.ctaPrimary, true);
    var secondary = makeBtn(cta.ctaSecondary, false);
    if (primary) actions.appendChild(primary);
    if (secondary) actions.appendChild(secondary);
  }

  function renderFooter() {
    text(
      document.querySelector('[data-bind="footer.note"]'),
      (content.footer && content.footer.note) || ""
    );

    var links = document.querySelector('[data-bind="footer.links"]');
    if (links && content.footer && content.footer.links) {
      clear(links);
      content.footer.links.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        links.appendChild(li);
      });
    }

    var contactWrap = document.querySelector('[data-bind="footer.contact"]');
    if (contactWrap && content.contact) {
      clear(contactWrap);
      if (content.contact.email) {
        var email = document.createElement("a");
        email.href = content.contact.email.mailto;
        email.textContent = content.contact.email.address;
        contactWrap.appendChild(email);
      }
      if (content.contact.instagram) {
        var ig = document.createElement("a");
        ig.href = content.contact.instagram.url;
        ig.target = "_blank";
        ig.rel = "noopener noreferrer";
        ig.textContent = content.contact.instagram.handle;
        contactWrap.appendChild(ig);
      }
    }
  }

  function setupNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    var header = document.querySelector(".site-header");
    if (!toggle || !nav) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }

    function open() {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      nav.classList.add("is-open");
      document.body.classList.add("nav-open");
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) close();
      else open();
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    if (header) {
      var onScroll = function () {
        if (window.scrollY > 12) header.classList.add("is-scrolled");
        else header.classList.remove("is-scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  function setupActiveNav() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-list a")
    );
    var ids = ["work", "services", "how-it-works", "pricing", "about", "home"];
    var sections = ids
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!links.length || !sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          links.forEach(function (link) {
            var match = link.getAttribute("href") === "#" + id;
            if (match) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }


  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function setupParallax() {
    if (prefersReducedMotion()) return;
    var layers = document.querySelectorAll("[data-parallax]");
    if (!layers.length) return;

    var ticking = false;
    var apply = function () {
      ticking = false;
      var y = window.scrollY || window.pageYOffset || 0;
      // Soft, transform-only parallax — capped so it stays subtle
      var max = Math.min(y, 720);
      for (var i = 0; i < layers.length; i++) {
        var el = layers[i];
        var factor = parseFloat(el.getAttribute("data-parallax")) || 0.08;
        var offset = Math.round(max * factor * 100) / 100;
        el.style.transform = "translate3d(0, " + offset + "px, 0)";
      }
    };

    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupHeroParticles() {
    var canvas = document.querySelector(".hero-particles");
    var hero = document.querySelector(".hero");
    if (!canvas || !hero || !canvas.getContext) return;
    if (prefersReducedMotion()) {
      canvas.style.display = "none";
      return;
    }

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var particles = [];
    var running = true;
    var rafId = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;

    function countForWidth(w) {
      // ~1.5–2x denser; still capped on small screens
      if (w < 480) return 30;
      if (w < 768) return 48;
      if (w < 1100) return 72;
      return 96;
    }

    function spawn(n) {
      particles = [];
      for (var i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.6 + Math.random() * 1.4,
          a: 0.12 + Math.random() * 0.35,
          vx: (Math.random() - 0.5) * 0.18,
          vy: -0.05 - Math.random() * 0.22,
          tw: Math.random() * Math.PI * 2,
          tws: 0.008 + Math.random() * 0.012
        });
      }
    }

    function resize() {
      var rect = hero.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn(countForWidth(width));
    }

    function draw() {
      if (!running) return;
      rafId = window.requestAnimationFrame(draw);
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.tw += p.tws;

        if (p.y < -4) {
          p.y = height + 4;
          p.x = Math.random() * width;
        }
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;

        var alpha = p.a * (0.55 + 0.45 * Math.sin(p.tw));
        ctx.beginPath();
        ctx.fillStyle = "rgba(100, 255, 218, " + alpha.toFixed(3) + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // sparse soft white sparkles for editorial depth (not purple SaaS)
        if (i % 5 === 0) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(232, 237, 242, " + (alpha * 0.45).toFixed(3) + ")";
          ctx.arc(p.x + 0.4, p.y - 0.4, Math.max(0.4, p.r * 0.55), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function start() {
      if (running) return;
      running = true;
      rafId = window.requestAnimationFrame(draw);
    }

    function stop() {
      running = false;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    function onVisibility() {
      if (document.hidden) stop();
      else {
        if (!prefersReducedMotion()) start();
      }
    }

    var mq = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    function onMotionChange() {
      if (prefersReducedMotion()) {
        stop();
        canvas.style.display = "none";
        ctx.clearRect(0, 0, width, height);
      } else {
        canvas.style.display = "";
        resize();
        start();
      }
    }

    resize();
    if (document.hidden) {
      running = false;
    } else {
      draw();
    }
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    if (mq) {
      if (mq.addEventListener) mq.addEventListener("change", onMotionChange);
      else if (mq.addListener) mq.addListener(onMotionChange);
    }
  }

  function setupScrollReveal() {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    var selector = [
      ".intro .intro-inner",
      ".section-header",
      ".service-card",
      ".project-card",
      ".process-step",
      ".how-step",
      ".compare-card",
      ".direction-card",
      ".platform-card",
      ".pricing-card",
      ".audience-tag",
      ".faq-item",
      ".about .section-inner > *",
      ".final-cta-inner",
      ".value-strip-inner",
      ".section-cta"
    ].join(", ");

    var nodes = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (!nodes.length) return;

    nodes.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
    );

    nodes.forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupCursorGlow() {
    if (prefersReducedMotion()) return;
    if (
      !window.matchMedia ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    var main = document.getElementById("main");
    if (!main) return;

    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);

    var visible = false;
    var x = 0;
    var y = 0;
    var tx = 0;
    var ty = 0;
    var raf = 0;
    var active = true;

    function paint() {
      raf = 0;
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      glow.style.transform = "translate3d(" + tx + "px, " + ty + "px, 0)";
      if (
        active &&
        visible &&
        (Math.abs(x - tx) > 0.4 || Math.abs(y - ty) > 0.4)
      ) {
        raf = window.requestAnimationFrame(paint);
      }
    }

    function requestPaint() {
      if (!raf) raf = window.requestAnimationFrame(paint);
    }

    function onMove(e) {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        glow.classList.add("is-on");
        tx = x;
        ty = y;
        glow.style.transform = "translate3d(" + tx + "px, " + ty + "px, 0)";
      }
      requestPaint();
    }

    function onEnter() {
      visible = true;
      glow.classList.add("is-on");
    }

    function onLeave() {
      visible = false;
      glow.classList.remove("is-on");
    }

    main.addEventListener("pointermove", onMove, { passive: true });
    main.addEventListener("pointerenter", onEnter);
    main.addEventListener("pointerleave", onLeave);

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        active = false;
        glow.classList.remove("is-on");
        if (raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
      } else {
        active = true;
      }
    });

    var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onMotion() {
      if (prefersReducedMotion()) {
        glow.style.display = "none";
        glow.classList.remove("is-on");
        active = false;
      } else {
        glow.style.display = "";
        active = true;
      }
    }
    if (mq.addEventListener) mq.addEventListener("change", onMotion);
    else if (mq.addListener) mq.addListener(onMotion);
  }

  setSeo();
  renderBrand();
  renderNav();
  renderHero();
  renderValueStrip();
  renderIntro();
  renderServices();
  renderWork();
  renderProcess();
  renderComparison();
  renderDirections();
  renderHowItWorks();
  renderWhoWeServe();
  renderPlatforms();
  renderPricing();
  renderFaq();
  renderAbout();
  renderFinalCta();
  renderFooter();
  setupNavToggle();
  setupActiveNav();
  setupParallax();
  setupHeroParticles();
  setupScrollReveal();
  setupCursorGlow();
})();
