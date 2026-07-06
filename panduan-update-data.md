# Panduan Update Data Website QR-ONE ARGOSARI

Gunakan panduan ini untuk memperbarui isi website setelah survei lapangan.

## 1. Mengganti kontak admin

Buka file `data.js`, cari bagian:

```js
whatsapp: "6281234567890",
```

Ganti dengan nomor admin asli. Formatnya harus memakai kode negara Indonesia, misalnya:

```js
whatsapp: "62812345678901",
```

## 2. Mengubah data wisata

Buka file `data.js`, cari daftar `DESTINATIONS`. Setiap lokasi memiliki format seperti ini:

```js
{
  id: "puncak-b29",
  title: "Puncak B29 / Negeri di Atas Awan",
  category: "alam",
  image: "assets/img-b29.webp",
  lat: -7.9592318,
  lng: 112.9948334,
  verified: false,
  summary: "Deskripsi singkat untuk kartu utama.",
  description: "Deskripsi lengkap untuk halaman detail.",
  highlights: ["Daya tarik 1", "Daya tarik 2"],
  activities: ["Aktivitas 1", "Aktivitas 2"],
  facilities: ["Fasilitas 1", "Fasilitas 2"],
  tips: ["Tips 1", "Tips 2"],
  info: {
    "Jam buka": "05.00 - 17.00",
    "Harga tiket": "Rp ...",
    "Kontak pengelola": "..."
  }
}
```

## 3. Menambah wisata baru

Salin salah satu blok data wisata, tempel di bawahnya, lalu ubah:

- `id`: nama unik tanpa spasi, misalnya `homestay-argosari-1`
- `title`: nama lokasi
- `category`: pilih `alam`, `edukasi`, `budaya`, atau `fasilitas`
- `lat` dan `lng`: koordinat lokasi
- `image`: lokasi foto di folder `assets`
- `summary`, `description`, `highlights`, `activities`, `facilities`, `tips`, dan `info`

Setelah ditambahkan, halaman detail otomatis bisa dibuka dengan pola:

```text
detail.html?id=homestay-argosari-1
```

## 4. Mengganti foto

1. Simpan foto baru ke folder `assets`.
2. Gunakan nama file sederhana, contoh `foto-b29-baru.webp` atau `foto-b29-baru.jpg`.
3. Buka `data.js`.
4. Ubah bagian `image`, misalnya:

```js
image: "assets/foto-b29-baru.jpg",
```

## 5. Checklist data survei

Data yang sebaiknya dikumpulkan:

- Nama lokasi/destinasi
- Kategori lokasi
- Koordinat latitude dan longitude
- Foto utama dan galeri
- Deskripsi singkat dan deskripsi lengkap
- Jam buka
- Harga tiket/parkir/paket
- Fasilitas
- Kontak pengelola
- Link Google Maps
- Aturan kunjungan dan tips keselamatan

## 6. Upload perubahan ke GitHub

1. Masuk ke repository GitHub yang dipakai untuk QR Code.
2. Klik file yang ingin diubah.
3. Klik ikon pensil/edit.
4. Tempel perubahan.
5. Klik `Commit changes`.
6. Tunggu GitHub Pages update beberapa menit.

Selama nama repository dan URL utama tidak berubah, QR Code lama tetap bisa dipakai.
