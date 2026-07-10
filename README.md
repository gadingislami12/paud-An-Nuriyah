# Website Profil KB An Nuriyah (Yayasan Ibnu Marsani Parung)

Website profil sekolah anak usia dini (PAUD/KB) yang dirancang secara modern, responsif, dan interaktif dengan nuansa Islami yang ramah anak. Website ini dibangun hanya menggunakan teknologi *frontend* murni (tanpa server backend) dan mengintegrasikan data karakteristik lembaga secara otentik.

## ✨ Fitur Utama
1.  **Banner Pengumuman Dinamis**: Teks berjalan di bagian atas untuk menginfokan periode PPDB secara langsung.
2.  **Navigation Bar Glassmorphic**: Navigasi atas yang menempel saat di-scroll (*sticky navbar*) dilengkapi menu mobile responsif dan tombol pendaftaran.
3.  **Statistik Rencana Ajaran Riil**: Menampilkan visualisasi data riil tahun ajaran 2025/2026 berupa jumlah murid gender, jumlah pendidik, rombel, dan kualifikasi kelas PAUD HI.
4.  **Tab Profil Interaktif**:
    *   **Sejarah**: Mengisahkan perjuangan dakwah TPQ Hidayatul Khoer oleh Ust. Marsan sejak 1980 hingga pembentukan KB formal berizin resmi Dinas Pendidikan Kabupaten Bogor pada November 2022.
    *   **Makna Nama**: Penjelasan filosofis nama "An Nuriyah" yang berarti "Cahaya".
    *   **Visi, Misi & Tujuan**: Menjabarkan visi kemandirian & tauhid, 6 misi utama, serta 6 tujuan pembelajaran anak.
    *   **Yayasan Ibnu Marsani**: Menampilkan lembaga nonformal di bawah naungan yayasan (seperti TPQ Metode Qiraati dan majelis taklim).
5.  **Pengembangan Karakter & Budaya Lokal**: Detail penerapan toleransi multikultural, program wajib pembiasaan bahasa daerah **Kamis Nyunda**, serta rutinitas shalat dan sedekah dhuha.
6.  **Profil Pendidik**: Daftar guru lengkap dengan nama, jabatan, dan latar belakang pendidikan terakhir.
7.  **Galeri Dokumentasi**: Filter foto kegiatan (Belajar, Bermain, Keagamaan, Fasilitas) disertai tampilan modal pop-up detail gambar.
8.  **Data Legalitas & Bank SPP**: Transparansi nomor NPSN (70035998), no izin operasional, serta data transfer rekening Bank BJB sekolah untuk SPP/donasi.
9.  **Form Pendaftaran WhatsApp**: Formulir kontak pendaftaran murid baru yang akan memformat input data anak secara rapi untuk dikirimkan langsung ke nomor WhatsApp admin resmi sekolah (**+62 857-1852-8089**).

## 🛠️ Teknologi yang Digunakan
*   **HTML5**: Struktur halaman semantik dan aksesibilitas ramah peramban.
*   **CSS3**: Custom variables, tata letak grid & flexbox responsif, wave dividers, dan animasi scroll reveal (Intersection Observer).
*   **JavaScript (ES6+)**: Logika filter galeri, tombol navigasi, tab switcher, modal, serta pengolah data pesan WhatsApp.
*   **Google Fonts**: Font `Fredoka` (heading ramah anak) dan `Plus Jakarta Sans` (keterbacaan body text).
*   **Lucide Icons**: Paket ikon minimalis modern.

## 📁 Struktur Direktori
```text
Paud_AnNuriyah/
├── index.html        # Struktur HTML halaman utama
├── style.css         # Desain sistem & stylesheet utama
├── main.js          # Logika interaktivitas & penangan WhatsApp
├── README.md         # Dokumentasi proyek (file ini)
└── assets/           # Folder penyimpanan aset gambar/media (jika ada)
```

## 🚀 Cara Menjalankan Secara Lokal
Karena proyek ini berbasis *frontend murni*, Anda tidak memerlukan proses instalasi dependency yang rumit:
1.  **Clone repositori ini**:
    ```bash
    git clone https://github.com/gadingislami12/paud-An-Nuriyah.git
    ```
2.  **Buka file `index.html`**:
    Double-klik file `index.html` untuk membukanya secara langsung di peramban, atau jalankan menggunakan server web lokal seperti XAMPP Apache, VS Code Live Server, atau Python HTTP Server:
    ```bash
    # Menggunakan Python
    python -m http.server 8000
    # Lalu akses http://localhost:8000 di browser Anda
    ```

---
Developed by [Gading Islami](https://www.instagram.com/gading19_/).
