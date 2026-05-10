import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../firebase/AuthContext';

const filters = [
  { value: 'all', label: 'Semua' },
  { value: 'new', label: 'Baru' },
  { value: 'contacted', label: 'Dihubungi' },
  { value: 'completed', label: 'Selesai' },
];

const legacyServiceLabels = {
  brand: 'Desain Visual',
  website: 'Pembuatan Website & Aplikasi',
  content: 'Manajemen Media Sosial',
  system: 'Manajemen Proyek Kreatif',
  mixed: 'Gabungan beberapa layanan',
  'visual-design': 'Desain Visual',
  'website-app': 'Pembuatan Website & Aplikasi',
  'social-media': 'Manajemen Media Sosial',
  'creative-project': 'Manajemen Proyek Kreatif',
  'full-service-bundle': 'Full-Service Bundle',
  'multi-service': 'Gabungan beberapa layanan',
};

const legacyBudgetLabels = {
  'under-10': 'Di bawah 100 Ribu',
  '10-25': '100 - 300 Ribu',
  '25-50': '300 - 500 Ribu',
  '50-plus': 'Di atas 500 Ribu',
  'below-100k': 'Di bawah 100 Ribu',
  '100k-300k': '100 - 300 Ribu',
  '300k-500k': '300 - 500 Ribu',
  'above-500k': 'Di atas 500 Ribu',
};

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const inquiryQuery = query(collection(db, 'inquiries'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(
      inquiryQuery,
      (snapshot) => {
        const inquiriesData = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setInquiries(inquiriesData);
        setLoading(false);
      },
      (snapshotError) => {
        console.error('Error fetching inquiries:', snapshotError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (logoutError) {
      console.error('Error logging out:', logoutError);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Hapus inquiry ini?')) {
      try {
        await deleteDoc(doc(db, 'inquiries', id));
      } catch (deleteError) {
        console.error('Error deleting inquiry:', deleteError);
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'inquiries', id), {
        status: newStatus,
      });
    } catch (updateError) {
      console.error('Error updating status:', updateError);
    }
  };

  const filteredInquiries =
    filter === 'all' ? inquiries : inquiries.filter((inquiry) => inquiry.status === filter);

  const getServiceLabel = (inquiry) =>
    inquiry.serviceLabel || legacyServiceLabels[inquiry.service] || inquiry.service || '-';

  const getBudgetLabel = (inquiry) =>
    inquiry.budgetLabel || legacyBudgetLabels[inquiry.budget] || inquiry.budget || '-';

  const getStatusStyles = (status) => {
    switch (status) {
      case 'new':
        return 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200';
      case 'contacted':
        return 'border-amber-400/25 bg-amber-400/10 text-amber-200';
      case 'completed':
        return 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200';
      default:
        return 'border-white/10 bg-white/5 text-white';
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return 'Belum tersedia';
    }

    return timestamp.toDate().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(115,242,212,0.08),transparent_28%),linear-gradient(180deg,#050808_0%,#0b1212_100%)] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-[32px] border border-classic-line bg-classic-panel/90 p-6 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="hud-label mb-4 text-xs">Admin / Inquiry Feed</p>
              <h1 className="font-serif text-4xl font-bold text-classic-white md:text-5xl">
                Dashboard inquiry
              </h1>
              <p className="mt-3 text-sm leading-7 text-classic-slate-light">
                Area internal untuk memantau brief masuk dan tindak lanjut tim.
              </p>
              <p className="mt-2 text-sm leading-7 text-classic-slate-light">
                Masuk sebagai {currentUser?.email || 'pengguna'}.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/')}
                className="rounded-full border border-classic-line bg-classic-navy px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan"
              >
                Lihat Situs
              </button>
              <button
                onClick={handleLogout}
                className="rounded-full border border-classic-line bg-classic-panel px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-classic-slate-light">
              Ringkasan
            </p>
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <div className="panel rounded-[26px] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
              Total
            </p>
            <p className="mt-3 font-serif text-4xl text-classic-white">{inquiries.length}</p>
          </div>
          <div className="panel rounded-[26px] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
              Baru
            </p>
            <p className="mt-3 font-serif text-4xl text-classic-cyan">
              {inquiries.filter((item) => item.status === 'new').length}
            </p>
          </div>
          <div className="panel rounded-[26px] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
              Dihubungi
            </p>
            <p className="mt-3 font-serif text-4xl text-classic-gold">
              {inquiries.filter((item) => item.status === 'contacted').length}
            </p>
          </div>
          <div className="panel rounded-[26px] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
              Selesai
            </p>
            <p className="mt-3 font-serif text-4xl text-emerald-300">
              {inquiries.filter((item) => item.status === 'completed').length}
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.26em] transition-all duration-300 ${
                filter === item.value
                  ? 'bg-classic-cyan text-classic-black'
                  : 'border border-classic-line bg-classic-panel text-classic-slate-light hover:border-classic-cyan hover:text-classic-cyan'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="panel rounded-[32px] p-10 text-center text-classic-slate-light">
            Memuat inquiry...
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="panel rounded-[32px] p-10 text-center text-classic-slate-light">
            Belum ada inquiry pada filter ini.
          </div>
        ) : (
          <div className="space-y-5">
            {filteredInquiries.map((inquiry) => (
              <motion.article
                key={inquiry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="panel rounded-[30px] p-6"
              >
                <div className="flex flex-col gap-5 border-b border-classic-line pb-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-serif text-2xl font-bold text-classic-white">
                        {inquiry.name}
                      </h2>
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] ${getStatusStyles(inquiry.status)}`}>
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-classic-slate-light">{inquiry.email}</p>
                    {inquiry.phone && (
                      <p className="mt-1 text-sm text-classic-slate-light">{inquiry.phone}</p>
                    )}
                    {inquiry.company && (
                      <p className="mt-1 text-sm text-classic-slate-light">{inquiry.company}</p>
                    )}
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                    {formatDate(inquiry.timestamp)}
                  </p>
                </div>

                <div className="grid gap-4 py-5 md:grid-cols-3">
                  <div className="rounded-[22px] border border-classic-line bg-classic-navy p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                      Layanan
                    </p>
                    <p className="mt-2 text-sm text-classic-white">{getServiceLabel(inquiry)}</p>
                  </div>
                  <div className="rounded-[22px] border border-classic-line bg-classic-navy p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                      Anggaran
                    </p>
                    <p className="mt-2 text-sm text-classic-white">{getBudgetLabel(inquiry)}</p>
                  </div>
                  <div className="rounded-[22px] border border-classic-line bg-classic-navy p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                      Kontak Cepat
                    </p>
                    <p className="mt-2 text-sm text-classic-white">{inquiry.phone || '-'}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                  <div className="rounded-[22px] border border-classic-line bg-classic-navy p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                      Pesan
                    </p>
                    <p className="mt-3 text-sm leading-7 text-classic-white">{inquiry.message}</p>
                  </div>
                  <div className="rounded-[22px] border border-classic-line bg-classic-navy p-4 md:min-w-[180px]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-classic-slate-light">
                      Sumber
                    </p>
                    <p className="mt-3 text-sm text-classic-white">{inquiry.source || 'legacy-entry'}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <select
                    value={inquiry.status}
                    onChange={(event) => handleStatusChange(inquiry.id, event.target.value)}
                    className="rounded-full border border-classic-line bg-classic-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-classic-white"
                  >
                    <option value="new">new</option>
                    <option value="contacted">contacted</option>
                    <option value="completed">completed</option>
                  </select>
                  <button
                    onClick={() => handleDelete(inquiry.id)}
                    className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-red-200 hover:bg-red-500/20"
                  >
                    Hapus
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
