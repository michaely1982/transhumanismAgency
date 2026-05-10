import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../firebase/AuthContext';
import { isFirebaseConfigured } from '../firebase/firebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFirebaseConfigured) {
      setError('Firebase belum terhubung. Lengkapi konfigurasi project terlebih dahulu.');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/admin');
    } catch (loginError) {
      console.error('Login error:', loginError);
      setError('Gagal masuk. Periksa kembali email dan kata sandi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="panel noise-mask w-full max-w-md rounded-[36px] p-8 lg:p-10"
      >
        <p className="hud-label mb-4 text-xs">Admin / Secure Access</p>
        <h1 className="font-serif text-4xl font-bold text-classic-white">
          Masuk ke dashboard inquiry
        </h1>
        <p className="mt-4 text-sm leading-7 text-classic-slate-light">
          Hanya untuk tim internal. Gunakan akun admin Firebase yang sudah terdaftar.
        </p>

        {error && (
          <div className="mt-6 rounded-[20px] border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        {!isFirebaseConfigured && (
          <div className="mt-6 rounded-[20px] border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            Login admin akan aktif setelah variabel <code>VITE_FIREBASE_*</code> di file <code>.env</code> terisi.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="admin@transhumanism.agency"
              className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
            />
          </label>

          <label className="block">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
              Kata Sandi
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="••••••••"
              className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-classic-cyan px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-black disabled:opacity-60"
          >
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
