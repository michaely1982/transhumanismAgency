import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './firebase/AuthContext';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Public Routes with Navigation */}
            <Route
              path="/"
              element={
                <>
                  <Navigation />
                  <main className="flex-grow">
                    <HomePage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Navigation />
                  <main className="flex-grow">
                    <ServicesPage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Navigation />
                  <main className="flex-grow">
                    <PortfolioPage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navigation />
                  <main className="flex-grow">
                    <ContactPage />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* Auth Routes */}
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Admin Route */}
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <main className="flex-grow">
                    <AdminDashboard />
                  </main>
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
