const $ = (selector, scope = document) => scope.querySelector(selector);

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList(title, items = []) {
  if (!items.length) return "";
  return `
    <section class="detail-section">
      <h2>${escapeHTML(title)}</h2>
      <ul class="detail-list">
        ${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderInfoTable(info = {}) {
  const rows = Object.entries(info);
  if (!rows.length) return "";
  return `
    <section class="detail-section">
      <h2>Informasi Praktis</h2>
      <div class="info-table">
        ${rows.map(([key, value]) => `
          <div class="info-row">
            <strong>${escapeHTML(key)}</strong>
            <span>${escapeHTML(value)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function contactUrl(item) {
  const message = `Halo, saya ingin bertanya tentang ${item.title} di Desa Argosari.`;
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function renderNotFound() {
  const root = $("#detailRoot");
  root.innerHTML = `
    <section class="not-found">
      <div class="container">
        <div class="not-found-card">
          <span class="section-label">Data tidak ditemukan</span>
          <h1>Halaman detail belum tersedia.</h1>
          <p>Pastikan parameter ID pada alamat sudah benar, atau tambahkan data baru di file <strong>data.js</strong>.</p>
          <a class="btn btn-primary" href="index.html#wisata">Kembali ke daftar wisata</a>
        </div>
      </div>
    </section>
  `;
}

function renderDetail(item) {
  document.title = `${item.title} | QR-ONE ARGOSARI`;
  const category = getCategory(item.category || "budaya");
  const routeUrl = getMapsUrl(item);
  const verifiedText = item.verified ? "Koordinat terverifikasi" : "Koordinat perlu verifikasi lapangan";

  const root = $("#detailRoot");
  root.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero-bg" style="background-image: url('${escapeHTML(item.image)}')"></div>
      <div class="container">
        <div class="breadcrumb"><a href="index.html">Beranda</a> / <a href="index.html#wisata">Daftar Wisata</a> / ${escapeHTML(item.title)}</div>
        <span class="section-label">${category.icon} ${escapeHTML(category.label)} • ${escapeHTML(item.badge || "Detail")}</span>
        <h1>${escapeHTML(item.title)}</h1>
        <p>${escapeHTML(item.summary || "Informasi detail Desa Argosari.")}</p>
      </div>
    </section>

    <section class="container detail-layout">
      <article class="detail-main">
        <span class="status ${item.verified ? "ok" : ""}">${item.verified ? "✓ Terverifikasi" : "! Perlu verifikasi"}</span>
        <h2>Tentang lokasi ini</h2>
        <p>${escapeHTML(item.description || item.summary || "Deskripsi belum tersedia.")}</p>
        <p class="source-note">Sumber awal: ${escapeHTML(item.sourcePage || SITE_CONFIG.sourceNote)}</p>
        ${renderList("Daya Tarik Utama", item.highlights)}
        ${renderList("Aktivitas yang Bisa Dilakukan", item.activities)}
        ${renderList("Fasilitas / Layanan", item.facilities)}
        ${renderList("Tips Kunjungan", item.tips)}
        ${renderInfoTable(item.info)}
      </article>

      <aside class="detail-sidebar">
        <div class="detail-side-card">
          <h3>Peta Lokasi</h3>
          <div id="detailMap" class="detail-map" aria-label="Peta lokasi ${escapeHTML(item.title)}"></div>
          <a class="btn btn-primary" href="${escapeHTML(routeUrl)}" target="_blank" rel="noopener">Buka Rute Google Maps</a>
          <a class="btn btn-muted" href="${escapeHTML(contactUrl(item))}" target="_blank" rel="noopener">Tanya Admin</a>
        </div>

        <div class="detail-side-card">
          <h3>Status Data</h3>
          <p><strong>${escapeHTML(verifiedText)}</strong></p>
          <p class="source-note">Silakan lengkapi koordinat, harga, kontak, dan fasilitas dari hasil survei lapangan.</p>
        </div>
      </aside>
    </section>
  `;

  initDetailMap(item);
}

function initDetailMap(item) {
  if (typeof L === "undefined" || typeof item.lat !== "number" || typeof item.lng !== "number") return;
  const detailMap = L.map("detailMap", { scrollWheelZoom: false }).setView([item.lat, item.lng], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(detailMap);

  const category = getCategory(item.category || "budaya");
  const icon = L.divIcon({
    html: `<div class="custom-marker"><span>${category.icon}</span></div>`,
    className: "marker-shell",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -34]
  });
  L.marker([item.lat, item.lng], { icon }).addTo(detailMap).bindPopup(`<strong>${escapeHTML(item.title)}</strong>`);
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = getAllDetailItems().find((entry) => entry.id === id);
  if (!item) {
    renderNotFound();
    return;
  }
  renderDetail(item);
}

document.addEventListener("DOMContentLoaded", init);
