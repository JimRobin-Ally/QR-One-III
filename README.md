# QR-ONE ARGOSARI - Website WebGIS Wisata

Website statis untuk GitHub Pages yang disusun berdasarkan konten Guidebook Desa Argosari dan dikembangkan menjadi portal wisata digital berbasis peta interaktif.

## Isi website

- Beranda QR-ONE ARGOSARI
- Tentang Desa Argosari
- Daftar daya tarik wisata
- Peta WebGIS berbasis Leaflet/OpenStreetMap
- Halaman detail tiap wisata melalui `detail.html?id=...`
- Budaya dan kearifan lokal Tengger
- Panduan wisatawan
- Tautan cepat pengganti Linktree
- Checklist data tambahan yang bisa diinput setelah survei

## Cara upload ke GitHub Pages

1. Ekstrak ZIP ini.
2. Upload semua file ke repository GitHub Pages yang sudah digunakan QR Code.
3. Jangan mengganti nama repository jika QR Code sudah mengarah ke URL lama.
4. Commit changes.
5. Tunggu GitHub Pages memperbarui website beberapa menit.

## File yang paling sering diedit

- `data.js` untuk mengubah data wisata, koordinat, kontak, harga, fasilitas, dan link.
- `assets/` untuk mengganti foto dengan foto asli hasil survei.
- `style.css` untuk mengubah warna, ukuran, dan tampilan.

## Catatan penting

Beberapa koordinat masih contoh/awal dan harus diverifikasi di lapangan. Ganti nomor WhatsApp pada `SITE_CONFIG.whatsapp` di file `data.js` dengan nomor admin asli.
