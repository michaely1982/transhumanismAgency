import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase/firebaseConfig';

const serviceOptions = [
  { value: 'visual-design', label: 'Desain Visual' },
  { value: 'website-app', label: 'Pembuatan Website & Aplikasi' },
  { value: 'social-media', label: 'Manajemen Media Sosial' },
  { value: 'creative-project', label: 'Manajemen Proyek Kreatif' },
  { value: 'full-service-bundle', label: 'Full-Service Bundle' },
  { value: 'multi-service', label: 'Gabungan beberapa layanan' },
];

const budgetOptions = [
  { value: 'below-100k', label: 'Di bawah 100 Ribu' },
  { value: '100k-300k', label: '100 - 300 Ribu' },
  { value: '300k-500k', label: '300 - 500 Ribu' },
  { value: 'above-500k', label: 'Di atas 500 Ribu' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!isFirebaseConfigured) {
      setError('Firebase belum terhubung. Isi konfigurasi project Firebase terlebih dahulu.');
      setLoading(false);
      return;
    }

    try {
      const selectedService = serviceOptions.find((option) => option.value === formData.service);
      const selectedBudget = budgetOptions.find((option) => option.value === formData.budget);

      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        serviceLabel: selectedService?.label || formData.service,
        budgetLabel: selectedBudget?.label || formData.budget,
        source: 'contact-page',
        timestamp: serverTimestamp(),
        status: 'new',
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (submitError) {
      console.error('Error submitting form:', submitError);
      setError('Terjadi kendala saat mengirim brief. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 pt-36 pb-20 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="panel-soft rounded-[36px] p-8 lg:p-10"
          >
            <p className="hud-label mb-5 text-xs">Kontak / Intake</p>
            <h1 className="font-serif text-5xl font-bold text-classic-white md:text-6xl">
              Kirim ide, masalah, atau draft awalmu.
            </h1>
            <p className="mt-6 text-base leading-8 text-classic-slate-light">
              Semakin mentah idenya, biasanya semakin menarik titik mulainya. Ceritakan konteks,
              target, dan rasa yang ingin kamu bangun. Kami akan bantu merapikannya menjadi arah kerja.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-[24px] border border-classic-line bg-classic-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan">
                  Email
                </p>
                <a href="mailto:halo@transhumanism.agency" className="mt-3 block text-lg text-classic-white hover:text-classic-cyan">
                  halo@transhumanism.agency
                </a>
              </div>
              <div className="rounded-[24px] border border-classic-line bg-classic-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan">
                  Respons
                </p>
                <p className="mt-3 text-lg text-classic-white">24 Jam Penuh</p>
              </div>
              <div className="rounded-[24px] border border-classic-line bg-classic-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-cyan">
                  Zona Kerja
                </p>
                <p className="mt-3 text-lg text-classic-white">Parepare, WITA, dan remote lintas kota</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="panel rounded-[36px] p-8 lg:p-10"
          >
            {success && (
              <div className="mb-6 rounded-[20px] border border-classic-cyan/30 bg-classic-cyan/10 p-4 text-sm text-classic-mint">
                Brief berhasil terkirim. Kami akan membalas secepatnya.
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-[20px] border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                {error}
              </div>
            )}

            {!isFirebaseConfigured && (
              <div className="mb-6 rounded-[20px] border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
                Form ini akan aktif setelah file <code>.env</code> diisi dengan kredensial Firebase.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                    Nama
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama lengkap"
                    className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@brand.com"
                    className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                    Nomor Telepon / WhatsApp
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="08xx xxxx xxxx"
                    className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                    Brand / Perusahaan
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Opsional"
                    className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
                  />
                </label>

              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                    Layanan
                  </span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white focus:border-classic-cyan"
                  >
                    <option value="">Pilih kebutuhan</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                  Kisaran Anggaran
                </span>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-[18px] border border-classic-line bg-classic-navy px-4 py-4 text-sm text-classic-white focus:border-classic-cyan"
                >
                  <option value="">Pilih kisaran</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
                  Cerita Proyek
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Jelaskan konteks, target, timeline, dan rasa visual yang kamu cari..."
                  className="w-full rounded-[22px] border border-classic-line bg-classic-navy px-4 py-4 text-sm leading-7 text-classic-white placeholder:text-classic-slate focus:border-classic-cyan"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-classic-cyan px-6 py-4 font-mono text-xs uppercase tracking-[0.28em] text-classic-black disabled:opacity-60"
              >
                {loading ? 'Mengirim...' : 'Kirim Brief'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
