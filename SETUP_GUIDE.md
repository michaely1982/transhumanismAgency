# Setup Firebase

## 1. Buat file `.env`

Salin `.env.example` menjadi `.env`, lalu isi dengan konfigurasi project Firebase milikmu.

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 2. Aktifkan service di Firebase Console

- Authentication
- Firestore Database

Untuk login admin, aktifkan metode `Email/Password`.

## 3. Buat user admin

Masuk ke Firebase Console:

- `Authentication`
- `Users`
- `Add user`

Gunakan email dan password ini untuk masuk ke halaman `/login`.

## 4. Firestore Rules minimal

Gunakan rules awal berikut agar form publik bisa membuat inquiry dan admin yang login bisa membaca serta mengubahnya:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## 5. Jalankan aplikasi

```bash
npm run dev
```

## 6. Uji koneksi

- Buka `/contact` lalu kirim brief percobaan
- Buka `/login` dan masuk dengan akun admin
- Cek `/admin` untuk memastikan inquiry muncul

## 7. Deploy ke Vercel

### Setting di Vercel

- Import repository ini ke Vercel
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Environment Variables

Tambahkan semua variable ini di:

- `Project Settings`
- `Environment Variables`

Isi untuk minimal environment:

- `Production`
- `Preview`

Daftar variable:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Catatan routing

File `vercel.json` sudah disiapkan agar route seperti `/contact`, `/login`, dan `/admin`
tetap bisa dibuka langsung di Vercel tanpa error 404.

### Setelah deploy

- Redeploy setiap kali ada perubahan Environment Variables
- Pastikan domain Vercel sudah ditambahkan ke daftar authorized domain di Firebase Authentication bila login admin bermasalah
