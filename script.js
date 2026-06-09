const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function safeSetText(selector, value) {
  const el = qs(selector);
  if (el && value !== undefined) el.textContent = value;
}

function safeSetSrc(selector, value) {
  const el = qs(selector);
  if (el && value) el.src = value;
}

function getUrl(item) {
  if (item.useFormUrl) return CONFIG.form.url || "#";
  return item.url || "#";
}

function isEmptyUrl(url) {
  return !url || url === "#" || url.includes("ISI_LINK");
}

function renderText() {
  safeSetText("#navTitle", CONFIG.site.title);
  safeSetText("#heroPlace", CONFIG.site.place);
  safeSetText("#heroTitle", CONFIG.site.title);
  safeSetText("#heroKicker", CONFIG.site.kicker);
  safeSetText("#heroDescription", CONFIG.site.description);
  safeSetText("#heroNote", CONFIG.site.note);
  safeSetText("#primaryCta", CONFIG.site.primaryCta);
  safeSetText("#secondaryCta", CONFIG.site.secondaryCta);

  safeSetText("#aboutTitle", CONFIG.about.title);
  safeSetText("#aboutText", CONFIG.about.text);
  safeSetText("#hashtag", CONFIG.about.hashtag);

  safeSetText("#mapTitle", CONFIG.map.title);
  safeSetText("#mapDescription", CONFIG.map.description);
  safeSetText("#listTitle", CONFIG.list.title);
  safeSetText("#listDescription", CONFIG.list.description);

  safeSetText("#formTitle", CONFIG.form.title);
  safeSetText("#formDescription", CONFIG.form.description);
  safeSetText("#formButton", CONFIG.form.buttonText);
  safeSetText("#footerTitle", CONFIG.footer.title);
  safeSetText("#footerText", CONFIG.footer.text);
  safeSetText("#copyright", CONFIG.footer.copyright);
}

function renderAssets() {
  safeSetSrc("#navLogo", CONFIG.assets.navLogo);
  safeSetSrc("#mainLogo", CONFIG.assets.mainLogo);
  safeSetSrc("#kknLogo", CONFIG.assets.kknLogo);
  safeSetSrc("#campusLogo", CONFIG.assets.campusLogo);
  safeSetSrc("#footerLogo", CONFIG.assets.footerLogo);
}

function renderQuickLinks() {
  const root = qs("#quickLinks");
  if (!root) return;
  root.innerHTML = MENU_ITEMS.map((item) => {
    const url = getUrl(item);
    const disabled = isEmptyUrl(url) ? " is-disabled" : "";
    const href = isEmptyUrl(url) ? "#daftar" : url;
    return `
      <a class="quick-card${disabled}" href="${href}" ${!isEmptyUrl(url) ? 'target="_blank" rel="noopener"' : ''}>
        <span class="quick-icon">${item.icon}</span>
        <strong>${item.title}</strong>
        <small>${item.category}</small>
      </a>
    `;
  }).join("");
}

function renderLegend() {
  const root = qs("#legendList");
  if (!root) return;
  root.innerHTML = MENU_ITEMS.map((item, index) => {
    const url = getUrl(item);
    const href = isEmptyUrl(url) ? "#daftar" : url;
    return `
      <a class="legend-item" href="${href}" ${!isEmptyUrl(url) ? 'target="_blank" rel="noopener"' : ''}>
        <span class="legend-no">${String(index + 1).padStart(2, "0")}</span>
        <span class="legend-icon">${item.icon}</span>
        <span>
          <strong>${item.title}</strong>
          <small>${item.category}</small>
        </span>
      </a>
    `;
  }).join("");
}

function renderCards() {
  const root = qs("#cardsGrid");
  if (!root) return;
  root.innerHTML = MENU_ITEMS.map((item) => {
    const url = getUrl(item);
    const empty = isEmptyUrl(url);
    const href = empty ? "#daftar" : url;
    const buttonLabel = empty ? "Link belum diisi" : item.button;
    return `
      <article class="info-card">
        <div class="card-top">
          <span class="card-icon">${item.icon}</span>
          <span class="card-category">${item.category}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="card-link ${empty ? 'disabled' : ''}" href="${href}" ${!empty ? 'target="_blank" rel="noopener"' : ''}>${buttonLabel}</a>
      </article>
    `;
  }).join("");
}

function renderMap() {
  const frame = qs("#mapFrame");
  const empty = qs("#mapEmpty");
  const url = CONFIG.map.embedUrl;
  if (!frame || !empty) return;
  if (isEmptyUrl(url)) {
    frame.style.display = "none";
    empty.style.display = "flex";
  } else {
    frame.src = url;
    frame.style.display = "block";
    empty.style.display = "none";
  }
}

function renderFormAndFooter() {
  const formButton = qs("#formButton");
  if (formButton) formButton.href = isEmptyUrl(CONFIG.form.url) ? "#" : CONFIG.form.url;

  const footer = qs("#footerLinks");
  if (footer) {
    footer.innerHTML = (CONFIG.footer.links || []).map((link) => `
      <a href="${link.url || '#'}" target="_blank" rel="noopener">${link.label}</a>
    `).join("");
  }
}

function setupNav() {
  const toggle = qs("#menuToggle");
  const nav = qs("#navMenu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  renderText();
  renderAssets();
  renderQuickLinks();
  renderLegend();
  renderCards();
  renderMap();
  renderFormAndFooter();
  setupNav();
}

init();
