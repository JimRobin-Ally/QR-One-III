/*
  QR-ONE ARGOSARI - Data Website
  Edit file ini untuk memperbarui isi website tanpa mengubah HTML.
  Catatan: beberapa koordinat masih bersifat contoh/awal dan wajib diverifikasi saat survei lapangan.
*/

const SITE_CONFIG = {
  title: "QR-ONE ARGOSARI",
  tagline: "Sistem Informasi Pariwisata dan Pemetaan Desa Berbasis WebGIS & QR Code",
  village: "Desa Argosari, Kecamatan Senduro, Kabupaten Lumajang",
  center: [-7.9699, 112.9938],
  zoom: 13,
  instagramHandle: "@desawisataargosari",
  instagramUrl: "https://www.instagram.com/desawisataargosari/",
  email: "pokdarwisargosari@gmail.com",
  // Ganti dengan nomor admin asli. Format: 62 + nomor tanpa 0 depan.
  whatsapp: "6281234567890",
  googleMapsVillage: "https://www.google.com/maps/search/?api=1&query=Desa%20Argosari%20Senduro%20Lumajang",
  sourceNote: "Konten awal disusun dari Guidebook Desa Argosari dan dapat diperbarui dari hasil survei."
};

const CATEGORIES = [
  { id: "semua", label: "Semua", icon: "✨" },
  { id: "alam", label: "Wisata Alam", icon: "⛰️" },
  { id: "edukasi", label: "Edukasi", icon: "🌱" },
  { id: "budaya", label: "Budaya", icon: "🏛️" },
  { id: "fasilitas", label: "Fasilitas", icon: "🧭" }
];



// Untuk memetakan DAERAH/AREA, isi AREAS dengan koordinat polygon hasil survei.
// Biarkan kosong jika belum ada koordinat batas area yang valid.
// Format koordinat Leaflet: [latitude, longitude].
// Contoh penggunaan:
// {
//   id: "area-pertanian",
//   title: "Kawasan Pertanian Argosari",
//   category: "edukasi",
//   summary: "Area perkiraan kawasan pertanian yang dapat dikembangkan sebagai wisata edukasi.",
//   coords: [
//     [-7.9710, 112.9890],
//     [-7.9700, 112.9940],
//     [-7.9748, 112.9950],
//     [-7.9752, 112.9900]
//   ]
// }
const AREAS = [];

const DESTINATIONS = [
  {
    id: "puncak-b29",
    title: "Puncak B29 / Negeri di Atas Awan",
    category: "alam",
    badge: "Sunrise & Sunset",
    image: "assets/P1.png",
    sourcePage: "Guidebook halaman 4",
    lat: -7.9592318,
    lng: 112.9948334,
    verified: false,
    summary: "Spot unggulan untuk menikmati sunrise, sunset, lautan awan, dan panorama Gunung Bromo dari ketinggian.",
    description: "Puncak B29 merupakan salah satu daya tarik paling dikenal di Desa Argosari. Guidebook menjelaskan tempat ini sebagai spot terbaik untuk menikmati sunrise dengan latar Gunung Bromo maupun sunset yang cantik dari ketinggian. Lokasi ini cocok menjadi halaman prioritas website karena biasanya menjadi tujuan utama wisatawan baru.",
    highlights: [
      "Sunrise dan sunset dari kawasan pegunungan",
      "Pemandangan lautan awan",
      "View Gunung Bromo dan kawasan sekitarnya",
      "Spot foto utama Desa Argosari"
    ],
    activities: ["Menikmati sunrise", "Fotografi lanskap", "Melihat lautan awan", "Tur dengan pemandu/ojek lokal"],
    facilities: ["Area parkir - perlu verifikasi", "Ojek wisata - perlu input kontak", "Warung - perlu verifikasi", "Toilet - perlu verifikasi"],
    tips: ["Datang sebelum matahari terbit", "Gunakan jaket tebal", "Cek cuaca terlebih dahulu", "Gunakan kendaraan yang sesuai medan"],
    info: {
      "Jam buka": "Perlu input data lapangan",
      "Harga tiket": "Perlu input data lapangan",
      "Akses": "Disarankan menggunakan pemandu atau ojek lokal jika belum terbiasa medan",
      "Status koordinat": "Perlu verifikasi lapangan"
    }
  },
  {
    id: "wisata-pertanian",
    title: "Wisata Edukasi dan Pertanian",
    category: "edukasi",
    badge: "Pertanian Lereng",
    image: "assets/img-pertanian.webp",
    sourcePage: "Guidebook halaman 3",
    lat: -7.9727,
    lng: 112.9915,
    verified: false,
    summary: "Kawasan pertanian pegunungan yang tertata di lereng curam dan menjadi daya tarik edukasi bagi wisatawan.",
    description: "Desa Argosari dikenal dengan sistem dan cara bertani yang diwariskan dari nenek moyang. Kawasan pertanian tersusun rapi di lereng gunung yang curam, sehingga dapat dikembangkan sebagai wisata edukasi pertanian, pengenalan komoditas lokal, dan jalur interpretasi lanskap desa.",
    highlights: [
      "Lanskap pertanian bertingkat di lereng gunung",
      "Edukasi sistem pertanian lokal",
      "Potensi paket wisata belajar pertanian",
      "Pemandangan hijau khas dataran tinggi"
    ],
    activities: ["Tur kebun", "Belajar komoditas lokal", "Foto lanskap", "Interaksi dengan petani lokal"],
    facilities: ["Jalur kunjungan - perlu ditentukan", "Pemandu lokal - perlu input", "Titik foto - perlu input"],
    tips: ["Jangan menginjak tanaman", "Minta izin sebelum masuk lahan", "Gunakan alas kaki yang nyaman", "Jaga kebersihan area pertanian"],
    info: {
      "Komoditas": "Perlu input jenis tanaman utama",
      "Paket edukasi": "Perlu input jika tersedia",
      "Harga paket": "Perlu input",
      "Status koordinat": "Perlu verifikasi lapangan"
    }
  },
  {
    id: "view-semeru",
    title: "View Gunung Semeru",
    category: "alam",
    badge: "Panorama Semeru",
    image: "assets/img-semeru.webp",
    sourcePage: "Guidebook halaman 5",
    lat: -7.9705,
    lng: 112.9968,
    verified: false,
    summary: "Titik pandang untuk melihat Gunung Semeru dari kawasan Desa Argosari pada cuaca cerah.",
    description: "Guidebook menampilkan panorama Gunung Semeru yang dapat terlihat dari ketinggian Desa Argosari. Selain Bromo dan hamparan pasir hitam, view Gunung Semeru menjadi daya tarik visual yang perlu ditandai di peta agar wisatawan memahami titik pandang terbaik.",
    highlights: ["Panorama Gunung Semeru", "Lanskap pegunungan", "Spot foto saat cuaca cerah", "View dari kawasan desa"],
    activities: ["Fotografi", "Menikmati pemandangan", "Transit sebelum ke B29"],
    facilities: ["Titik berhenti kendaraan - perlu input", "Area foto - perlu input", "Warung terdekat - perlu input"],
    tips: ["Waktu terbaik pagi hari", "Cuaca cerah sangat menentukan visibility", "Jangan berhenti di badan jalan yang membahayakan"],
    info: {
      "Waktu terbaik": "Pagi hari saat cuaca cerah",
      "Harga tiket": "Belum tersedia / perlu input",
      "Status koordinat": "Perlu verifikasi lapangan"
    }
  },
  {
    id: "edelweiss",
    title: "View Point dan Pembudidayaan Edelweiss",
    category: "edukasi",
    badge: "Konservasi",
    image: "assets/img-edelweiss.webp",
    sourcePage: "Guidebook halaman 7",
    lat: -7.9622,
    lng: 112.9929,
    verified: false,
    summary: "Kawasan pembudidayaan edelweiss yang dekat dari Puncak B29 dan memiliki panorama pegunungan.",
    description: "Desa Argosari memiliki kawasan pembudidayaan bunga edelweiss yang lokasinya tidak jauh dari Puncak B29. Daya tarik ini cocok ditampilkan sebagai wisata edukasi konservasi, dengan catatan penting agar wisatawan tidak merusak atau memetik tanaman sembarangan.",
    highlights: ["Edukasi edelweiss", "Panorama pegunungan", "Spot foto alami", "Potensi interpretasi konservasi"],
    activities: ["Belajar konservasi", "Foto landscape", "Tur singkat setelah B29"],
    facilities: ["Area edukasi - perlu input", "Pemandu/pengelola - perlu input", "Aturan kunjungan - perlu input"],
    tips: ["Jangan memetik edelweiss sembarangan", "Ikuti arahan pengelola", "Jaga jarak dari tanaman", "Gunakan jalur yang tersedia"],
    info: {
      "Jam buka": "Perlu input",
      "Harga tiket": "Perlu input",
      "Kontak pengelola": "Perlu input",
      "Status koordinat": "Perlu verifikasi lapangan"
    }
  },
  {
    id: "kearifan-lokal",
    title: "Kearifan Lokal Suku Tengger",
    category: "budaya",
    badge: "Budaya Lokal",
    image: "assets/img-kearifan.webp",
    sourcePage: "Guidebook halaman 6",
    lat: -7.9787,
    lng: 112.9905,
    verified: false,
    summary: "Pengalaman mengenal kehidupan masyarakat Tengger, adat, tradisi, dan suasana bermalam di Desa Argosari.",
    description: "Guidebook menonjolkan pengalaman menjadi bagian dari masyarakat Suku Tengger yang kaya kearifan lokal, kebudayaan yang kental, dan adat istiadat. Halaman ini perlu memberi penekanan pada etika kunjungan, izin dokumentasi, serta pentingnya menghormati ruang budaya masyarakat lokal.",
    highlights: ["Kehidupan masyarakat Tengger", "Adat dan tradisi lokal", "Interaksi budaya", "Pengalaman bermalam di desa"],
    activities: ["Tur budaya", "Belajar adat lokal", "Menginap di homestay", "Mengikuti kegiatan sesuai izin"],
    facilities: ["Homestay - perlu input", "Pemandu budaya - perlu input", "Kontak tokoh/pengelola - perlu input"],
    tips: ["Minta izin sebelum memotret warga", "Hormati kegiatan adat", "Gunakan pakaian sopan", "Ikuti arahan pemandu lokal"],
    info: {
      "Paket budaya": "Perlu input jika tersedia",
      "Jadwal adat": "Perlu input setelah konfirmasi",
      "Kontak": "Perlu input",
      "Status koordinat": "Titik pusat desa / perlu detail"
    }
  },
  {
    id: "sanggar-agung",
    title: "Sanggar Agung",
    category: "budaya",
    badge: "Adat & Spiritual",
    image: "assets/img-sanggar.webp",
    sourcePage: "Guidebook halaman 11",
    lat: -7.9769,
    lng: 112.9958,
    verified: false,
    summary: "Tempat ibadah dan kegiatan adat-keagamaan masyarakat Hindu Tengger dengan pemandangan alam yang indah.",
    description: "Sanggar Agung merupakan tempat untuk beribadah dan melakukan beberapa upacara adat serta keagamaan masyarakat Hindu Tengger. Karena berkaitan dengan ruang spiritual, informasi pada website harus menampilkan etika kunjungan, aturan dokumentasi, dan waktu berkunjung yang diperbolehkan.",
    highlights: ["Tempat ibadah masyarakat Hindu Tengger", "Kegiatan adat dan keagamaan", "Pemandangan dari kawasan tinggi", "Nilai budaya dan spiritual"],
    activities: ["Kunjungan edukatif", "Mengenal ruang budaya", "Fotografi dari area yang diizinkan"],
    facilities: ["Area ibadah", "Akses jalan - perlu input", "Kontak pengelola - perlu input"],
    tips: ["Hormati kegiatan ibadah", "Ikuti aturan berpakaian", "Minta izin sebelum dokumentasi", "Jangan masuk area tertutup tanpa izin"],
    info: {
      "Jam kunjungan": "Perlu input berdasarkan aturan pengelola",
      "Aturan dokumentasi": "Perlu input",
      "Kontak pengelola": "Perlu input",
      "Status koordinat": "Perlu verifikasi lapangan"
    }
  },
  {
    id: "pusat-informasi",
    title: "Pusat Informasi Pokdarwis",
    category: "fasilitas",
    badge: "Informasi Terpadu",
    image: "assets/img-qr-cover.webp",
    sourcePage: "Guidebook halaman 2 dan 15",
    lat: -7.9804,
    lng: 112.9901,
    verified: false,
    summary: "Titik layanan informasi untuk menghubungkan wisatawan dengan Instagram, email, peta, kontak, dan update wisata Argosari.",
    description: "Bagian informasi terpadu dalam guidebook menampilkan identitas Pokdarwis, Instagram @desawisataargosari, email pokdarwisargosari@gmail.com, serta QR Code. Di website, bagian ini berfungsi sebagai pengganti Linktree yang lebih lengkap dan informatif.",
    highlights: ["Instagram dan email resmi", "Tautan cepat wisata", "Update informasi", "Penghubung wisatawan dengan pengelola"],
    activities: ["Menghubungi admin", "Meminta info homestay/ojek", "Memberikan update data", "Membuka peta dan rute"],
    facilities: ["Email", "Instagram", "WhatsApp admin - perlu input", "Form update data - opsional"],
    tips: ["Simpan kontak sebelum perjalanan", "Konfirmasi kondisi cuaca dan akses", "Pastikan informasi harga terbaru"],
    info: {
      "Instagram": "@desawisataargosari",
      "Email": "pokdarwisargosari@gmail.com",
      "WhatsApp": "Perlu diganti nomor asli",
      "Status koordinat": "Titik pusat desa / perlu detail"
    }
  }
];

const CULTURE_ITEMS = [
  {
    id: "pakaian-adat-tengger",
    title: "Pakaian Adat Tengger",
    category: "budaya",
    image: "assets/img-pakaian.webp",
    sourcePage: "Guidebook halaman 8",
    summary: "Pakaian adat menjadi bagian dari identitas budaya masyarakat Tengger di Desa Argosari.",
    description: "Pakaian adat Tengger dapat ditampilkan sebagai konten edukasi budaya. Website sebaiknya menjelaskan makna pakaian secara hati-hati dan menambahkan keterangan yang sudah diverifikasi oleh tokoh adat atau pengelola lokal.",
    details: ["Foto pakaian adat pria dan wanita", "Penjelasan fungsi pakaian", "Etika memotret warga", "Perlu narasumber budaya untuk validasi"]
  },
  {
    id: "makna-simpul",
    title: "Makna Simpul/Ikat Kain",
    category: "budaya",
    image: "assets/img-simpul.webp",
    sourcePage: "Guidebook halaman 9",
    summary: "Guidebook menampilkan makna posisi simpul kain dalam kehidupan masyarakat Tengger.",
    description: "Informasi mengenai simpul atau ikatan kain perlu ditulis dengan sumber lokal yang jelas karena memiliki makna sosial dan budaya. Di website, bagian ini dapat dibuat sebagai konten edukasi singkat dengan catatan verifikasi adat.",
    details: ["Simpul di depan", "Simpul di pundak kanan", "Simpul di belakang", "Tambahkan catatan hasil wawancara tokoh adat"]
  },
  {
    id: "kain-tengger",
    title: "Kain Tengger",
    category: "budaya",
    image: "assets/img-kain-tengger.webp",
    sourcePage: "Guidebook halaman 10",
    summary: "Sarung atau kain Tengger menjadi identitas sekaligus pelindung tubuh dari suhu dingin pegunungan.",
    description: "Kain Tengger penting ditampilkan sebagai bagian dari identitas lokal. Website dapat menjelaskan fungsi praktisnya, nilai budaya, serta etika ketika wisatawan ingin mencoba atau mendokumentasikan kain tersebut.",
    details: ["Fungsi kain untuk melindungi dari dingin", "Identitas masyarakat Tengger", "Konten edukasi budaya", "Etika penggunaan dan dokumentasi"]
  }
];

const GUIDE_TIPS = [
  { icon: "🌄", title: "Datang Lebih Pagi", text: "Untuk sunrise dan lautan awan, wisatawan disarankan berangkat sebelum pagi dan mengecek cuaca." },
  { icon: "🧥", title: "Bawa Jaket", text: "Argosari berada di kawasan dataran tinggi, sehingga udara dapat sangat dingin terutama pagi dan malam." },
  { icon: "🛵", title: "Gunakan Jasa Lokal", text: "Jika belum terbiasa dengan medan, gunakan pemandu atau ojek lokal yang memahami akses menuju lokasi." },
  { icon: "🌱", title: "Jaga Lahan Pertanian", text: "Jangan menginjak tanaman, memetik edelweiss sembarangan, atau masuk area warga tanpa izin." },
  { icon: "🏛️", title: "Hormati Adat", text: "Minta izin sebelum memotret warga, mengikuti kegiatan adat, atau memasuki area ibadah." },
  { icon: "🧹", title: "Bawa Pulang Sampah", text: "Jaga kebersihan tempat wisata agar lingkungan Argosari tetap nyaman untuk dikunjungi." }
];

const GALLERY = [
  { title: "Panorama Argosari", image: "assets/P1.png" },
  { title: "Pertanian Lereng", image: "assets/img-pertanian.webp" },
  { title: "Puncak B29", image: "assets/img-b29.webp" },
  { title: "Gunung Semeru", image: "assets/img-semeru.webp" },
  { title: "Kearifan Lokal", image: "assets/img-kearifan.webp" },
  { title: "Edelweiss", image: "assets/img-edelweiss.webp" },
  { title: "Sanggar Agung", image: "assets/img-sanggar.webp" }
];

const QUICK_LINKS = [
  { title: "Peta Wisata", text: "Buka peta WebGIS di halaman ini", icon: "🗺️", url: "#peta" },
  { title: "Daftar Wisata", text: "Lihat kartu destinasi dan detail wisata", icon: "⛰️", url: "#wisata" },
  { title: "Instagram Pokdarwis", text: "Akun @desawisataargosari", icon: "📷", url: SITE_CONFIG.instagramUrl },
  { title: "Email Pokdarwis", text: SITE_CONFIG.email, icon: "✉️", url: `mailto:${SITE_CONFIG.email}` },
  { title: "Google Maps Desa", text: "Buka rute menuju Desa Argosari", icon: "📍", url: SITE_CONFIG.googleMapsVillage },
  { title: "Update Data", text: "Kirim data lokasi, foto, harga, dan fasilitas", icon: "📝", url: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Halo, saya ingin mengirim update data untuk website QR-ONE Argosari.")}` }
];

const SURVEY_FIELDS = [
  "Nama lokasi/destinasi",
  "Kategori: alam, edukasi, budaya, fasilitas, homestay, UMKM, transportasi",
  "Koordinat latitude dan longitude",
  "Foto utama dan galeri tambahan",
  "Deskripsi singkat dan deskripsi lengkap",
  "Jam buka dan waktu terbaik berkunjung",
  "Harga tiket, parkir, paket, atau tarif layanan",
  "Fasilitas: toilet, parkir, warung, mushola, homestay, ojek",
  "Kontak pengelola/admin",
  "Link Google Maps atau rute",
  "Aturan kunjungan, etika adat, dan tips keselamatan"
];

function getCategory(id) {
  return CATEGORIES.find((item) => item.id === id) || CATEGORIES[0];
}

function getMapsUrl(item) {
  if (item.mapsUrl) return item.mapsUrl;
  if (typeof item.lat === "number" && typeof item.lng === "number") {
    return `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lng}`;
  }
  return SITE_CONFIG.googleMapsVillage;
}

function getAllDetailItems() {
  return [
    ...DESTINATIONS,
    ...CULTURE_ITEMS.map((item) => ({
      ...item,
      lat: SITE_CONFIG.center[0],
      lng: SITE_CONFIG.center[1],
      verified: false,
      badge: "Budaya",
      highlights: item.details,
      activities: ["Membaca edukasi budaya", "Melihat galeri", "Menghubungi pengelola untuk informasi lanjutan"],
      facilities: ["Konten edukasi", "Perlu validasi tokoh adat", "Dapat ditambah video/foto"],
      tips: ["Hormati adat lokal", "Minta izin sebelum dokumentasi", "Gunakan informasi yang sudah diverifikasi"],
      info: {
        "Jenis konten": "Budaya dan kearifan lokal",
        "Status": "Perlu validasi tambahan jika ada narasi adat yang lebih rinci",
        "Sumber awal": item.sourcePage || "Guidebook Desa Argosari"
      }
    }))
  ];
}
