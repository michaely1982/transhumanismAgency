import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desain Visual',
    description: 'Merancang solusi visual yang merepresentasikan nilai dan profesionalisme brand Anda. Kami fokus pada penciptaan aset desain yang tidak hanya estetis, tetapi juga efektif sebagai instrumen komunikasi dan persuasi bagi audiens target',
    features: [
      'Arah visual dan moodboard',
      'Logo, tipografi, dan palet warna',
      'Sistem komponen sosial media',
      'Panduan brand ringkas',
      'Template konten dasar',
    ],
    price: 'Mulai 50 Ribu per aset',
  },
  {
    title: 'Pembuatan Website & Aplikasi',
    description: 'Merancang platform digital yang fungsional, responsif, dan berorientasi pada pengalaman pengguna.',
    features: [
      'UI desktop dan mobile',
      'Front-end React modern',
      'Integrasi form dan analytics',
      'Optimasi performa',
      'Handoff dan dokumentasi',
    ],
    price: 'Mulai 200 Ribu per halaman',
  },
  {
    title: 'Manajemen Media Sosial',
    description: 'Mengoptimalkan kehadiran merek di platform digital melalui pendekatan berbasis data dan konten berkualitas.',
    features: [
      'Tone of voice brand',
      'Headline dan struktur halaman',
      'Copy landing page',
      'Arah kampanye tematik',
      'Audit konten eksisting',
    ],
    price: 'Mulai 100 Ribu per Akun',
  },
  {
    title: 'Manajemen Proyek Kreatif',
    description: 'Mengelola seluruh tahapan produksi kreatif secara sistematis, mulai dari perencanaan hingga penyelesaian. Kami menjamin efisiensi sumber daya dan ketepatan waktu guna menghasilkan output yang selaras dengan tujuan besar bisnis Anda.',
    features: [
      'Pemetaan workflow tim',
      'Template briefing dan review',
      'Dashboard inquiry / aset',
      'Standar naming dan arsip',
      'Sesi onboarding singkat',
    ],
    price: 'Mulai 200 Ribu per Proyek',
  },
  {
    title: 'Full-Service Bundle',
    description: 'Layanan menyeluruh untuk klien yang baru memiliki gagasan awal. Anda cukup membawa ide, tujuan, atau masalah yang ingin diselesaikan, lalu tim kami yang akan membingkai konsep, menyusun strategi, merancang pengalaman, dan mengembangkannya menjadi solusi digital yang siap dijalankan.',
    features: [
      'Sesi eksplorasi ide dan kebutuhan bisnis',
      'Pemetaan konsep, positioning, dan arah produk',
      'Perancangan desain visual dan alur pengalaman',
      'Penyusunan copy utama dan struktur konten',
      'Pengembangan website, aplikasi, atau aset digital awal',
    ],
    price: 'Mulai 3 Juta per Proyek',
  },
];

const process = [
  {
    step: '01',
    title: 'Mendengar',
    description: 'Kami mulai dari konteks, bukan asumsi. Tujuannya menangkap ritme brand, kebutuhan tim, dan batasan proyek.',
  },
  {
    step: '02',
    title: 'Membingkai',
    description: 'Arah visual dan teknis dirumuskan menjadi sistem kerja yang jelas, sehingga keputusan desain terasa terukur.',
  },
  {
    step: '03',
    title: 'Membangun',
    description: 'Eksekusi dilakukan iteratif, dengan fokus pada nuansa visual, ketajaman copy, dan stabilitas implementasi.',
  },
  {
    step: '04',
    title: 'Menyalakan',
    description: 'Saat rilis, kami pastikan aset, dokumentasi, dan tim internal siap memakai sistem yang baru.',
  },
];

const ServicesPage = () => {
  return (
    <div className="px-6 pt-36 pb-20 lg:px-12">
      <section className="mx-auto mb-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="panel-soft rounded-[36px] p-8 lg:p-12"
        >
          <p className="hud-label mb-5 text-xs">Layanan / Framework</p>
          <h1 className="max-w-4xl font-serif text-5xl font-bold text-classic-white md:text-7xl">
            Sistem kreatif yang dirancang untuk tampil hangat, rapi, dan siap dipakai.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-classic-slate-light">
            Kami memadukan desain, copy, dan implementasi supaya identitas digitalmu
            tidak terasa tempelan. Semuanya dibangun sebagai satu ekosistem.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl">
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid gap-6 rounded-[32px] border border-classic-line bg-classic-panel/90 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            >
              <div className="lg:pr-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan">
                  Track {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 font-serif text-3xl font-bold text-classic-white md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-classic-slate-light">
                  {service.description}
                </p>
                <div className="mt-8 inline-flex rounded-full border border-classic-gold/30 bg-classic-gold/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-classic-gold">
                  {service.price}
                </div>
              </div>

              <div className="rounded-[28px] border border-classic-cyan/12 bg-classic-navy p-6">
                <p className="hud-label mb-5 text-xs">Termasuk</p>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-classic-cyan shadow-[0_0_18px_rgba(115,242,212,0.5)]" />
                      <span className="text-sm leading-7 text-classic-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="hud-label mb-4 text-xs">Proses Kerja</p>
          <h2 className="font-serif text-4xl font-bold text-classic-white md:text-5xl">
            Pelan di permukaan, presisi di balik layar.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="panel rounded-[28px] p-6"
            >
              <p className="font-serif text-5xl text-classic-cyan/35">{item.step}</p>
              <h3 className="mt-5 font-serif text-2xl font-bold text-classic-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-classic-slate-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
