import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/services', label: 'Layanan' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Kontak' },
];

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-classic-line/80 bg-classic-navy/90">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="panel noise-mask rounded-[32px] p-8">
            <p className="hud-label mb-4 text-xs">Transmission / About</p>
            <h3 className="mb-5 max-w-xl font-serif text-3xl font-bold text-classic-white">
              Studio digital dengan rasa analog, ritme lambat, dan sistem yang tetap presisi.
            </h3>
            <p className="max-w-xl text-sm leading-7 text-classic-slate-light">
              Kami merancang identitas, website, dan pengalaman digital yang terasa hangat,
              tak tergesa, tetapi tetap tajam secara teknis. Cocok untuk brand yang ingin tampil
              cerdas tanpa kehilangan jiwa.
            </p>
          </div>

          <div className="panel-soft rounded-[28px] p-8">
            <p className="hud-label mb-5 text-xs">Peta Situs</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-mono text-xs uppercase tracking-[0.26em] text-classic-slate-light hover:text-classic-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-soft rounded-[28px] p-8">
            <p className="hud-label mb-5 text-xs">Kanal Kontak</p>
            <ul className="space-y-3 text-sm text-classic-slate-light">
              <li>halo@transhumanism.agency</li>
              <li>+62 8591 9629 1205</li>
              <li>Parepare / Sulawesi Selatan</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-full border border-classic-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan">
                Instagram
              </a>
              <a href="#" className="rounded-full border border-classic-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan">
                Tiktok
              </a>
            </div>
          </div>
        </div>

        <div className="signal-line my-8" />

        <div className="flex flex-col gap-3 text-xs text-classic-slate-light md:flex-row md:items-center md:justify-between">
          <p className="font-mono uppercase tracking-[0.24em]">
            © {new Date().getFullYear()} Transhumanism Agency. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono uppercase tracking-[0.22em] hover:text-classic-white">
              Privasi
            </a>
            <a href="#" className="font-mono uppercase tracking-[0.22em] hover:text-classic-white">
              Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
