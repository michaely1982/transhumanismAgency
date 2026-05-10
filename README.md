# Atelier - Digital Agency Website

A professional digital agency website built with React.js and Firebase, featuring a classic and timeless design aesthetic.

## Features

- **Responsive Design** - Fully responsive across all devices
- **Firebase Integration** - Firestore for data storage and Firebase Auth for admin access
- **Modern Stack** - React.js, React Router, Tailwind CSS, Framer Motion
- **Admin Dashboard** - Protected route for managing client inquiries
- **Contact Form** - Functional form that stores submissions in Firestore
- **Classic Design** - Elegant typography, minimalist layout, sophisticated color palette

## Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore + Authentication)
- **Fonts**: Playfair Display (serif) + Montserrat (sans-serif)

## Project Structure

```
digital-agency/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── PrivateRoute.js
│   ├── firebase/
│   │   ├── firebaseConfig.js
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ServicesPage.js
│   │   ├── PortfolioPage.js
│   │   ├── ContactPage.js
│   │   ├── LoginPage.js
│   │   └── AdminDashboard.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── tailwind.config.js
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Authentication (Email/Password)
4. Copy `.env.example` to `.env` and fill in your Firebase values:

```bash
cp .env.example .env
```

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

### 3. Firestore Security Rules

Set up the following security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to inquiries collection
    match /inquiries/{document=**} {
      allow read, write: if request.auth != null;
      allow create: if true;
    }
  }
}
```

### 4. Create Admin User

In Firebase Console > Authentication, create a user with email/password for admin access.

### 5. Run Development Server

```bash
npm run dev
```

The app will run at [http://localhost:5173](http://localhost:5173)

## Pages

- **/** - Homepage with hero, services grid, and portfolio gallery
- **/services** - Detailed services page with pricing
- **/portfolio** - Filterable portfolio grid
- **/contact** - Contact form with Firebase integration
- **/login** - Admin login page
- **/admin** - Protected admin dashboard (requires authentication)

## Services Offered

1. Professional Photo Editing & Retouching
2. Social Media Management
3. Custom Website Development
4. Digital Branding & Strategy

## Color Palette

- **Black**: #0A0A0A
- **White**: #FAFAFA
- **Slate**: #4A5568
- **Gold**: #D4AF37
- **Navy**: #1A2332

## Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Montserrat (Sans-Serif)

## Admin Dashboard Features

- View all client inquiries in real-time
- Filter by status (New, Contacted, Completed)
- Update inquiry status
- Delete inquiries
- Real-time updates with Firestore listeners

## Contact Form Data Structure

Each inquiry includes:
- Name
- Email
- Company (optional)
- Service interested in
- Budget range
- Project details
- Timestamp
- Status

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deploy

The app can be deployed to:
- Firebase Hosting
- Vercel
- Netlify
- Any static hosting service

## License

MIT License - feel free to use this for your own projects!

## Support

For questions or issues, please open an issue on GitHub.
