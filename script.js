let activeCategory = "semua";
let map;
let markerLayer;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function contactUrl(message) {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function renderHeaderData() {
  const meta = $("#heroMeta");
  if (meta) {
    meta.innerHTML = [
      { n: DESTINATIONS.length, t: "Titik awal wisata" },
      { n: CULTURE_ITEMS.length, t: "Konten budaya" },
      { n: "WebGIS", t: "Peta interaktif" }
    ].map((item) => `
      <div class="meta-item">
        <strong>${escapeHTML(item.n)}</strong>
        <span>${escapeHTML(item.t)}</span>
      </div>
    `).join("");
  }

  const waMessage = "Halo, saya ingin bertanya tentang wisata Desa Argosari.";
  ["#waFooter", "#waUpdate"].forEach((selector) => {
    const el = $(selector);
    if (el) el.href = contactUrl(waMessage);
  });

  const ig = $("#igFooter");
  if (ig) {
    ig.href = SITE_CONFIG.instagramUrl;
    ig.textContent = `${SITE_CONFIG.instagramHandle}`;
  }

  const email = $("#emailFooter");
  if (email) {
    email.href = `mailto:${SITE_CONFIG.email}`;
    email.textContent = SITE_CONFIG.email;
  }
}

function setupMenu() {
  const toggle = $(".menu-toggle");
  const nav = $("#navLinks");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  $$("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderGallery() {
  const root = $("#galleryTrack");
  if (!root) return;
  root.innerHTML = GALLERY.map((item) => `
    <figure class="gallery-card">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" />
      <span>${escapeHTML(item.title)}</span>
    </figure>
  `).join("");
}

function renderCategoryFilter() {
  const root = $("#categoryFilter");
  if (!root) return;
  root.innerHTML = CATEGORIES.map((cat) => `
    <button class="filter-btn ${cat.id === activeCategory ? "active" : ""}" type="button" data-category="${cat.id}">
      ${cat.icon} ${cat.label}
    </button>
  `).join("");

  $$(".filter-btn", root).forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategoryFilter();
      renderDestinations();
      renderMapMarkers();
    });
  });
}

function getFilteredDestinations() {
  const query = ($("#searchInput")?.value || "").toLowerCase().trim();
  return DESTINATIONS.filter((item) => {
    const categoryMatch = activeCategory === "semua" || item.category === activeCategory;
    const text = `${item.title} ${item.summary} ${item.badge} ${getCategory(item.category).label}`.toLowerCase();
    const queryMatch = !query || text.includes(query);
    return categoryMatch && queryMatch;
  });
}

function renderDestinations() {
  const root = $("#destinationGrid");
  if (!root) return;
  const items = getFilteredDestinations();

  if (!items.length) {
    root.innerHTML = `<div class="not-found-card"><h3>Data tidak ditemukan</h3><p>Coba kata kunci lain atau pilih kategori berbeda.</p></div>`;
    return;
  }

  root.innerHTML = items.map((item) => {
    const cat = getCategory(item.category);
    return `
      <article class="destination-card">
        <div class="card-image">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" />
          <span class="card-badge">${escapeHTML(item.badge)}</span>
        </div>
        <div class="card-body">
          <span class="card-category">${cat.icon} ${escapeHTML(cat.label)}</span>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.summary)}</p>
          <div class="card-source">${escapeHTML(item.sourcePage || "Guidebook Desa Argosari")}</div>
          <div class="card-footer">
            <a class="btn btn-primary" href="detail.html?id=${encodeURIComponent(item.id)}">Informasi lebih lanjut</a>
            <a class="small-link" href="${escapeHTML(getMapsUrl(item))}" target="_blank" rel="noopener">Rute Maps</a>
            <span class="status ${item.verified ? "ok" : ""}">${item.verified ? "✓ Terverifikasi" : "! Perlu verifikasi"}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderCulture() {
  const root = $("#cultureGrid");
  if (!root) return;
  root.innerHTML = CULTURE_ITEMS.map((item) => `
    <article class="culture-card">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" />
      <div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.summary)}</p>
        <a class="btn" href="detail.html?id=${encodeURIComponent(item.id)}">Informasi lebih lanjut</a>
      </div>
    </article>
  `).join("");
}

function renderTips() {
  const root = $("#tipsGrid");
  if (!root) return;
  root.innerHTML = GUIDE_TIPS.map((item) => `
    <article class="tip-card">
      <div class="tip-icon">${item.icon}</div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.text)}</p>
    </article>
  `).join("");
}

function renderSurveyFields() {
  const root = $("#surveyFields");
  if (!root) return;
  root.innerHTML = SURVEY_FIELDS.map((field) => `<li>${escapeHTML(field)}</li>`).join("");
}

function renderQuickLinks() {
  const root = $("#quickLinks");
  if (!root) return;
  root.innerHTML = QUICK_LINKS.map((link) => {
    const isExternal = link.url.startsWith("http") || link.url.startsWith("mailto:");
    return `
      <a class="quick-link" href="${escapeHTML(link.url)}" ${isExternal ? 'target="_blank" rel="noopener"' : ""}>
        <span>${link.icon}</span>
        <div>
          <h3>${escapeHTML(link.title)}</h3>
          <p>${escapeHTML(link.text)}</p>
        </div>
      </a>
    `;
  }).join("");
}

function getCategoryCount(categoryId) {
  if (categoryId === "semua") return DESTINATIONS.length;
  return DESTINATIONS.filter((item) => item.category === categoryId).length;
}

function renderMapLegend() {
  const root = $("#mapLegend");
  if (!root) return;
  root.innerHTML = CATEGORIES.map((cat) => `
    <button class="legend-btn ${cat.id === activeCategory ? "active" : ""}" type="button" data-category="${cat.id}">
      <span>${cat.icon} ${escapeHTML(cat.label)}</span>
      <span class="legend-count">${getCategoryCount(cat.id)}</span>
    </button>
  `).join("");

  $$(".legend-btn", root).forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderMapLegend();
      renderCategoryFilter();
      renderDestinations();
      renderMapMarkers();
    });
  });
}

function createMarkerIcon(item) {
  const cat = getCategory(item.category);
  return L.divIcon({
    html: `<div class="custom-marker"><span>${cat.icon}</span></div>`,
    className: "marker-shell",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -34]
  });
}

function renderMapMarkers() {
  if (!map || !markerLayer) return;
  markerLayer.clearLayers();
  const items = getFilteredDestinations();
  const bounds = [];

  items.forEach((item) => {
    if (typeof item.lat !== "number" || typeof item.lng !== "number") return;
    const marker = L.marker([item.lat, item.lng], { icon: createMarkerIcon(item), title: item.title });
    marker.bindPopup(`
      <div class="popup-title">${escapeHTML(item.title)}</div>
      <p class="popup-text">${escapeHTML(item.summary)}</p>
      <div class="popup-actions">
        <a href="detail.html?id=${encodeURIComponent(item.id)}">Detail</a>
        <a class="secondary" href="${escapeHTML(getMapsUrl(item))}" target="_blank" rel="noopener">Rute</a>
      </div>
    `);
    marker.addTo(markerLayer);
    bounds.push([item.lat, item.lng]);
  });

  if (bounds.length === 1) {
    map.setView(bounds[0], 15);
  } else if (bounds.length > 1) {
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
  }
}

function initMap() {
  const mapEl = $("#map");
  if (!mapEl || typeof L === "undefined") return;

  map = L.map("map", { scrollWheelZoom: true }).setView(SITE_CONFIG.center, SITE_CONFIG.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  markerLayer = L.layerGroup().addTo(map);
  renderMapMarkers();

  const locateBtn = $("#locateBtn");
  if (locateBtn) {
    locateBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        alert("Browser belum mendukung fitur lokasi.");
        return;
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = [position.coords.latitude, position.coords.longitude];
        L.circleMarker(latlng, {
          radius: 8,
          color: "#0f766e",
          fillColor: "#0f766e",
          fillOpacity: .45
        }).addTo(map).bindPopup("Lokasi Anda saat ini").openPopup();
        map.setView(latlng, 15);
      }, () => alert("Lokasi tidak dapat ditampilkan. Pastikan izin lokasi sudah diberikan."));
    });
  }
}

function setupSearch() {
  const input = $("#searchInput");
  if (!input) return;
  input.addEventListener("input", () => {
    renderDestinations();
    renderMapMarkers();
  });
}

function init() {
  renderHeaderData();
  setupMenu();
  renderGallery();
  renderCategoryFilter();
  renderDestinations();
  renderMapLegend();
  setupSearch();
  initMap();
  renderCulture();
  renderTips();
  renderSurveyFields();
  renderQuickLinks();
}

document.addEventListener("DOMContentLoaded", init);
