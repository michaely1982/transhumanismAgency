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
