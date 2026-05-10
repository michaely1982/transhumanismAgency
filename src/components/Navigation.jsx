import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Beranda' },
  { path: '/services', label: 'Layanan' },
  { path: '/portfolio', label: 'Portofolio' },
  { path: '/contact', label: 'Kontak' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8"
    >
      <div
        className={`mx-auto max-w-7xl rounded-[28px] border transition-all duration-300 ${
          scrolled
            ? 'panel-soft border-classic-cyan/20 shadow-[0_12px_50px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <Link to="/" className="group min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-classic-cyan/30 bg-classic-panel text-classic-cyan shadow-[0_0_30px_rgba(115,242,212,0.08)]">
                <span className="font-mono text-sm">TA</span>
              </div>
              <div>
                <p className="font-serif text-lg font-bold uppercase tracking-[0.18em] text-classic-white">
                  Transhumanism
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-classic-slate-light">
                  Agency Network
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] transition-all duration-300 ${
                    active
                      ? 'bg-classic-cyan text-classic-black shadow-[0_0_28px_rgba(115,242,212,0.35)]'
                      : 'text-classic-slate-light hover:bg-classic-panel hover:text-classic-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="rounded-full border border-classic-gold/20 bg-classic-panel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-classic-gold">
              Mode: Lo-Fi Signal
            </div>
            <Link
              to="/contact"
              className="rounded-full border border-classic-cyan/30 bg-classic-cyan/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-classic-cyan hover:bg-classic-cyan hover:text-classic-black"
            >
              Mulai Proyek
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              to="/contact"
              className="rounded-full border border-classic-cyan/30 bg-classic-panel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
