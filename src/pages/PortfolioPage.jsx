import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ['Semua', 'Brand', 'Website', 'Editorial', 'Sosial'];

const projects = [
  { id: 1, title: 'Arsip Bunyi Kota', category: 'Editorial', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80', year: '2026' },
  { id: 2, title: 'Labrak Studio', category: 'Brand', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80', year: '2025' },
  { id: 3, title: 'Portal Ekspedisi Mikro', category: 'Website', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80', year: '2026' },
  { id: 4, title: 'Ruang Jurnal Senja', category: 'Editorial', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=80', year: '2025' },
  { id: 5, title: 'Nadi Retreat', category: 'Sosial', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80', year: '2026' },
  { id: 6, title: 'Kernel Goods', category: 'Brand', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80', year: '2025' },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('Semua');

  const filteredProjects =
    filter === 'Semua' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="px-6 pt-36 pb-20 lg:px-12">
      <section className="mx-auto mb-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hud-label mb-5 text-xs">Portofolio / Selected Signals</p>
          <h1 className="max-w-4xl font-serif text-5xl font-bold text-classic-white md:text-7xl">
            Kumpulan eksperimen visual yang dibangun untuk konteks nyata.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-classic-slate-light">
            Setiap proyek punya atmosfernya sendiri. Ada yang sunyi dan editorial,
            ada yang lebih terang dan komersial, tetapi semuanya tetap berada di
            spektrum Lo‑Fi High‑Tech yang kami kembangkan.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mb-14 max-w-7xl">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.26em] transition-all duration-300 ${
                filter === category
                  ? 'bg-classic-cyan text-classic-black shadow-[0_0_30px_rgba(115,242,212,0.32)]'
                  : 'border border-classic-line bg-classic-panel text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="group overflow-hidden rounded-[30px] border border-classic-line bg-classic-panel"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-classic-black via-classic-black/30 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-classic-gold">
                    {project.category}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                    {project.year}
                  </p>
                </div>
                <h2 className="font-serif text-2xl font-bold text-classic-white">
                  {project.title}
                </h2>
                <p className="text-sm leading-7 text-classic-slate-light">
                  Eksperimen visual dan sistematik yang dirancang untuk terasa relevan,
                  hangat, dan siap tumbuh.
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl">
        <div className="panel-soft rounded-[36px] p-10 text-center">
          <p className="hud-label mb-4 text-xs">Kolaborasi Berikutnya</p>
          <h2 className="font-serif text-4xl font-bold text-classic-white md:text-5xl">
            Ingin proyekmu masuk ke deretan ini?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-classic-slate-light">
            Mari mulai dari arah kreatif, kebutuhan teknis, atau sekadar mood yang ingin kamu capai.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full border border-classic-cyan/35 bg-classic-cyan/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-cyan hover:bg-classic-cyan hover:text-classic-black"
          >
            Bahas Proyek
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
