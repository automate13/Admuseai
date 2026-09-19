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

  function renderNav() {
    var list = document.querySelector('[data-bind="nav"]');
    if (!list || !content.nav) return;
    list.innerHTML = "";
    content.nav.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function renderHero() {
    var hero = content.hero || {};
    text(document.querySelector('[data-bind="brand"]'), content.brand);
    text(document.querySelector('[data-bind="hero.badge"]'), hero.badge);
    text(document.querySelector('[data-bind="hero.eyebrow"]'), hero.eyebrow);
    text(document.querySelector('[data-bind="hero.headline"]'), hero.headline);
    text(document.querySelector('[data-bind="hero.headlineAccent"]'), hero.headlineAccent);
    text(document.querySelector('[data-bind="hero.subhead"]'), hero.subhead);

    var actions = document.querySelector('[data-bind="hero.actions"]');
    if (!actions) return;
    actions.innerHTML = "";

    function addBtn(cta, primary) {
      if (!cta) return;
      var a = document.createElement("a");
      a.className = "btn " + (primary ? "btn-primary" : "btn-ghost");
      a.href = cta.href;
      a.textContent = cta.label;
      actions.appendChild(a);
    }

    addBtn(hero.ctaPrimary, true);
    addBtn(hero.ctaSecondary, false);
  }

  function renderAbout() {
    var about = content.about || {};
    text(document.querySelector('[data-bind="about.eyebrow"]'), about.eyebrow);
    text(document.querySelector('[data-bind="about.title"]'), about.title);
    text(document.querySelector('[data-bind="about.body"]'), about.body);
  }

  function renderServices() {
    var services = content.services || {};
    text(document.querySelector('[data-bind="services.eyebrow"]'), services.eyebrow);
    text(document.querySelector('[data-bind="services.title"]'), services.title);
    text(document.querySelector('[data-bind="services.intro"]'), services.intro);

    var cloud = document.querySelector('[data-bind="services.tags"]');
    if (!cloud || !services.tags) return;
    cloud.innerHTML = "";
    services.tags.forEach(function (tag) {
      var li = document.createElement("li");
      li.className = "tag-pill";
      li.setAttribute("role", "listitem");
      li.textContent = tag;
      cloud.appendChild(li);
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
    label.textContent = project.mediaLabel || "Add your MP4 in /videos";

    var hint = document.createElement("p");
    hint.className = "project-media-hint";
    hint.textContent = "Set video in content.js";

    inner.appendChild(dot);
    inner.appendChild(label);
    inner.appendChild(hint);
    return inner;
  }

  function buildVideo(project) {
    var video = document.createElement("video");
    video.controls = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "metadata");
    video.className = "project-video";
    if (project.poster) {
      video.setAttribute("poster", project.poster);
    }
    video.setAttribute(
      "aria-label",
      (project.title || "Project") + " video"
    );

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
    grid.innerHTML = "";

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

  function renderContact() {
    var contact = content.contact || {};
    text(document.querySelector('[data-bind="contact.eyebrow"]'), contact.eyebrow);
    text(document.querySelector('[data-bind="contact.title"]'), contact.title);
    text(document.querySelector('[data-bind="contact.intro"]'), contact.intro);

    var list = document.querySelector('[data-bind="contact.links"]');
    if (!list) return;
    list.innerHTML = "";

    function addLink(label, value, href) {
      if (!value || !href) return;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = href;
      if (href.indexOf("http") === 0) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      var lab = document.createElement("span");
      lab.className = "contact-label";
      lab.textContent = label;

      var val = document.createElement("span");
      val.className = "contact-value";
      val.textContent = value;

      a.appendChild(lab);
      a.appendChild(val);
      li.appendChild(a);
      list.appendChild(li);
    }

    if (contact.instagram) {
      addLink("Instagram", contact.instagram.handle, contact.instagram.url);
    }
    if (contact.email) {
      addLink("Email", contact.email.address, contact.email.mailto);
    }
  }

  function renderFooter() {
    text(
      document.querySelector('[data-bind="footer.note"]'),
      (content.footer && content.footer.note) || content.brand
    );
  }

  function setupNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      nav.classList.remove("is-open");
    }

    function open() {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      nav.classList.add("is-open");
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
  }

  function setupActiveNav() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-list a")
    );
    var sections = ["home", "services", "work", "contact"]
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
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  setSeo();
  renderNav();
  renderHero();
  renderAbout();
  renderServices();
  renderWork();
  renderContact();
  renderFooter();
  setupNavToggle();
  setupActiveNav();
})();
