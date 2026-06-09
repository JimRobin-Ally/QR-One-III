/*
  CARA EDIT PALING MUDAH
  1. Ganti teks di CONFIG.
  2. Ganti link Google Form di CONFIG.form.url.
  3. Ganti link Google Maps / WhatsApp / halaman lain pada MENU_ITEMS.
  4. Ganti logo di folder assets, lalu sesuaikan nama file pada CONFIG.assets.

  Catatan:
  - Link kosong boleh pakai "#".
  - Jangan hapus tanda kutip, koma, kurung kurawal, dan kurung siku.
*/

const CONFIG = {
  site: {
    title: "QR-One Argosari",
    place: "Desa Argosari",
    kicker: "Satu QR untuk semua informasi desa",
    description: "Akses peta desa, UMKM, wisata, fasilitas umum, jalur evakuasi, dan pembaruan data dalam satu halaman.",
    note: "Satu akses untuk informasi desa, wisata, dan mitigasi.",
    primaryCta: "Jelajahi Peta",
    secondaryCta: "Lihat Daftar"
  },

  assets: {
    navLogo: "assets/logo-desa.svg",
    mainLogo: "assets/logo-desa.svg",
    kknLogo: "assets/logo-kkn.svg",
    campusLogo: "assets/logo-kampus.svg",
    footerLogo: "assets/logo-desa.svg"
  },

  about: {
    title: "Argosari, Desa yang Tumbuh Bersama Potensi Lokal",
    text: "QR-One dibuat agar informasi desa lebih mudah ditemukan oleh warga, pengunjung, perangkat desa, dan pelaku usaha lokal.",
    hashtag: "#SatuQRUntukDesa"
  },

  map: {
    title: "Peta Informasi QR-One",
    description: "Klik item legenda untuk membuka tautan lokasi atau informasi terkait.",
    // Contoh embed Google Maps: buka Google Maps > Share > Embed a map > copy src iframe saja.
    embedUrl: ""
  },

  list: {
    title: "Informasi QR-One Argosari",
    description: "Pilih kartu untuk membuka peta, form, nomor, atau informasi lainnya."
  },

  form: {
    url: "https://forms.gle/ISI_LINK_GOOGLE_FORM_DI_SINI",
    title: "Daftarkan UMKM, wisata, fasilitas umum, atau informasi lain",
    description: "Gunakan satu Google Form. Di dalam form, pendaftar memilih keperluannya.",
    buttonText: "Buka Form Pendaftaran"
  },

  footer: {
    title: "QR-One Argosari",
    text: "Portal informasi desa berbasis QR.",
    copyright: "© QR-One Argosari - Program Kerja KKN",
    links: [
      { label: "Instagram", url: "#" },
      { label: "TikTok", url: "#" },
      { label: "Email", url: "mailto:contoh@email.com" }
    ]
  }
};

const MENU_ITEMS = [
  {
    title: "Peta Desa",
    icon: "🗺️",
    description: "Lokasi dan peta wilayah Desa Argosari.",
    category: "Informasi Utama",
    button: "Buka Peta",
    url: "https://maps.google.com/"
  },
  {
    title: "Profil Desa",
    icon: "🏡",
    description: "Ringkasan informasi wilayah, potensi, dan layanan desa.",
    category: "Informasi Utama",
    button: "Lihat Profil",
    url: "#"
  },
  {
    title: "UMKM & Wisata",
    icon: "🛍️",
    description: "Daftar UMKM lokal, wisata, dan produk unggulan warga.",
    category: "Ekonomi Desa",
    button: "Lihat Daftar",
    url: "#"
  },
  {
    title: "Fasilitas Umum",
    icon: "🏥",
    description: "Balai desa, sekolah, posyandu, masjid, toilet umum, dan fasilitas lainnya.",
    category: "Fasilitas Umum",
    button: "Lihat Lokasi",
    url: "#"
  },
  {
    title: "Mitigasi Bencana",
    icon: "⚠️",
    description: "Informasi area rawan, jalur evakuasi, dan titik kumpul.",
    category: "Mitigasi",
    button: "Lihat Mitigasi",
    url: "#"
  },
  {
    title: "Nomor Darurat",
    icon: "📞",
    description: "Kontak penting untuk keadaan darurat dan layanan warga.",
    category: "Kontak",
    button: "Hubungi",
    url: "tel:112"
  },
  {
    title: "Daftar / Update Data",
    icon: "📝",
    description: "Form untuk mendaftarkan UMKM, wisata, fasilitas, atau pembaruan informasi.",
    category: "Pembaruan Data",
    button: "Buka Form",
    useFormUrl: true
  }
];
