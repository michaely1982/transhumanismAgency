import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    code: 'S-01',
    title: 'Manajemen Media Sosial',
    description: 'Mengoptimalkan kehadiran merek di platform digital melalui pendekatan berbasis data dan konten berkualitas.',
  },
  {
    code: 'S-02',
    title: 'Pembuatan Website & Aplikasi',
    description: 'Merancang platform digital yang fungsional, responsif, dan berorientasi pada pengalaman pengguna.',
  },
  {
    code: 'S-03',
    title: 'Desain Visual',
    description: 'Merancang solusi visual yang merepresentasikan nilai dan profesionalisme brand Anda. Kami fokus pada penciptaan aset desain yang tidak hanya estetis, tetapi juga efektif sebagai instrumen komunikasi dan persuasi bagi audiens target',
  },
  {
    code: 'S-04',
    title: 'Manajemen Proyek Kreatif',
    description: 'Mengelola seluruh tahapan produksi kreatif secara sistematis, mulai dari perencanaan hingga penyelesaian. Kami menjamin efisiensi sumber daya dan ketepatan waktu guna menghasilkan output yang selaras dengan tujuan besar bisnis Anda.',
  },
];

const cases = [
  {
    title: 'Onoky Dealership',
    category: 'Editorial Web',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
  },
  {
    title: 'Gudang Baradara Parepare',
    category: 'Identitas Brand',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&q=80',
  },
  {
    title: 'Mcorner Cafe',
    category: 'Product Interface',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=80',
  },
];

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="px-6 pt-36 pb-24 lg:px-12 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hud-label mb-6 text-xs">Lo-Fi High-Tech / Indonesia</p>
            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-classic-white md:text-7xl lg:text-[5.5rem]">
              Mendesain pengalaman digital
              <span className="block text-classic-cyan">yang membantu kemajuan bisnis Anda</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-classic-slate-light">
              Kami membantu brand, studio, dan produk teknologi membangun wajah digital
              yang terasa manusiawi. Estetiknya pelan, teknologinya tajam, dan setiap detail
              dibuat supaya nyaman dilihat lama-lama.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-classic-cyan px-8 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-black shadow-[0_0_40px_rgba(115,242,212,0.35)]"
              >
                Diskusikan Proyek
              </Link>
              <Link
                to="/portfolio"
                className="rounded-full border border-classic-line bg-classic-panel/70 px-8 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-white hover:border-classic-cyan hover:text-classic-cyan"
              >
                Lihat Eksperimen
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="panel noise-mask rounded-[36px] p-6 lg:p-8"
          >
            <div className="flex items-center justify-between border-b border-classic-line pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-classic-cyan">
                  Session Report
                </p>
                <h2 className="mt-2 font-serif text-2xl text-classic-white">Layanan Saat Ini</h2>
              </div>
              <div className="rounded-full border border-classic-gold/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-classic-gold">
                Aktif
              </div>
            </div>

            <div className="grid gap-4 py-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-classic-line bg-classic-navy p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                  Fokus
                </p>
                <p className="mt-3 text-sm leading-7 text-classic-white">
                  Promosi, website, kampanye, dan tooling internal.
                </p>
              </div>
              <div className="rounded-[24px] border border-classic-line bg-classic-navy p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                  Visi
                </p>
                <p className="mt-3 text-sm leading-7 text-classic-white">
                  Cepat, Efesien, Kolaboratif dan Terjangkau.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-classic-cyan/20 bg-[radial-gradient(circle_at_top,rgba(115,242,212,0.18),transparent_42%),rgba(16,25,25,0.96)] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-mint">
                Throughput
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="font-serif text-4xl text-classic-white">12+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-classic-slate-light">
                    Proyek Selesai
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-classic-white">04</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-classic-slate-light">
                    layanan aktif
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-classic-white">24h</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-classic-slate-light">
                    Pelayanan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="signal-line" />
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="hud-label mb-4 text-xs">Layanan Inti</p>
              <h2 className="max-w-2xl font-serif text-4xl font-bold text-classic-white md:text-5xl">
                Dirancang untuk brand yang ingin terdengar lebih jernih di tengah bising digital.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-classic-slate-light">
              Kami tidak mengejar gaya generik. Setiap sistem visual dibangun dengan ritme,
              tekstur, dan narasi yang sengaja dibedakan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="panel rounded-[30px] p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-classic-cyan">
                      {service.code}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl font-bold text-classic-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-classic-line bg-classic-navy" />
                </div>
                <p className="mt-4 text-sm leading-7 text-classic-slate-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="hud-label mb-4 text-xs">Portofolio Pilihan</p>
            <h2 className="font-serif text-4xl font-bold text-classic-white md:text-5xl">
              Tiga arah visual yang lahir dari obsesi yang berbeda.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[30px] border border-classic-line bg-classic-panel"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-classic-black via-classic-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-classic-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-12 pb-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="panel-soft rounded-[36px] px-8 py-10 text-center lg:px-14">
            <p className="hud-label mb-4 text-xs">Kolaborasi Baru</p>
            <h2 className="font-serif text-4xl font-bold text-classic-white md:text-5xl">
              Punya ide yang masih setengah matang?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-classic-slate-light">
              Tidak masalah. Kami terbiasa memulai dari catatan acak, moodboard kasar,
              atau pertanyaan yang belum punya bentuk.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full border border-classic-cyan/40 bg-classic-cyan/10 px-8 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-cyan hover:bg-classic-cyan hover:text-classic-black"
            >
              Kirim Brief Awal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
