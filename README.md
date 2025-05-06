## 🏁 Kredit Kendaraan Web App (MVP)

Ini adalah proyek MVP untuk simulasi pengajuan kredit kendaraan, yang terdiri dari tiga portal:
- **Dealer Portal** – untuk simulasi dan pengajuan awal.
- **Marketer Portal** – untuk melengkapi data pengajuan dari dealer.
- **Approval Portal** – untuk approval dan monitoring oleh atasan/admin.

## 🚀 Cara Menjalankan Proyek Ini

### 1. Clone Repository
```bash
git clone https://github.com/DwkLoki/kredit-kendaraan-mvp.git
cd kredit-kendaraan-mvp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Aplikasi
```bash
npm run dev
```

### 4. Akses Portal di Browser:
- **Dealer Portal**: [http://localhost:5173/dealer](http://localhost:5173/dealer)
- **Marketer Portal**: [http://localhost:5173/marketer](http://localhost:5173/marketer)
- **Approval Portal**: [http://localhost:5173/approval](http://localhost:5173/approval)

## 🧪 Simulasi Alur Pengajuan

1. **Masuk ke Dealer Portal**
   - Simulasi kredit → ajukan → data masuk ke marketer.

2. **Masuk ke Marketer Portal**
   - Lengkapi data pengajuan → kirim ke approval.

3. **Masuk ke Approval Portal**
   - Approve pengajuan → status berubah menjadi "siap kontrak".

## 💾 Penyimpanan Data
Semua data disimpan sementara di `localStorage` browser. Tidak ada backend/API yang digunakan untuk saat ini.

## 🔧 Stack Teknologi
- **React**
- **Tailwind CSS**
- **Vite** (sebagai bundler)