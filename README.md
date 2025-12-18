# Langkah-langkah Menjalankan Proyek REST API

1. Persiapan Database: Jalankan MySQL/MariaDB (Laragon/XAMPP), buat database baru sesuai proyek, dan jalankan skrip SQL untuk membuat tabel categories dan products.
2. Instalasi Dependencies: Buka terminal di folder proyek lalu jalankan npm install.
3. Konfigurasi Environment (.env): Buat file .env di root proyek dengan isi: PORT=3000, DB_HOST=localhost, DB_USER=root, DB_PASSWORD=, DB_DATABASE=nama_database
4. Menjalankan Server: Jalankan npm run dev, server berjalan di http://localhost:3000
5. Pengujian API: Gunakan Postman/Insomnia untuk GET, POST, PUT, DELETE pada endpoint categories dan products. Pastikan category_id saat POST/PUT product sesuai kategori yang ada.
