import { motion } from 'framer-motion'
import { Bell, Building2, Clock3, ShieldCheck, UserRoundCog } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { settingsItems } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'

const icons = {
  'Profil Admin': UserRoundCog,
  Notifikasi: Bell,
  'Jam Operasional': Clock3,
  'Data Institusi': Building2,
  'Keamanan Akun': ShieldCheck,
}

export default function Settings() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Pengaturan" subtitle="Kelola konfigurasi sistem dan preferensi admin" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-5 lg:grid-cols-2"
      >
        {settingsItems.map((setting) => {
          const Icon = icons[setting.title] || UserRoundCog

          return (
            <motion.article
              key={setting.title}
              variants={fadeUpItem}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-[#0F172A]">{setting.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#64748B]">{setting.description}</p>
                  </div>
                </div>
                <StatusBadge status={setting.status} />
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Status konfigurasi</p>
                  <p className="mt-1 text-xs text-[#64748B]">Tersimpan untuk demo admin</p>
                </div>
                <button
                  type="button"
                  className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-bold text-[#2563EB] transition hover:bg-blue-50"
                >
                  Kelola
                </button>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
