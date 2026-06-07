import { motion } from 'framer-motion'
import DataTable from '../components/common/DataTable.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import StatCard from '../components/common/StatCard.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { leaveRequests, leaveStats } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { iconMap } from '../utils/iconMap.js'

export default function Leave() {
  const columns = [
    { key: 'teacher', header: 'Nama Pengajar' },
    { key: 'type', header: 'Jenis' },
    { key: 'date', header: 'Tanggal' },
    { key: 'duration', header: 'Durasi' },
    { key: 'reason', header: 'Alasan' },
    {
      key: 'status',
      header: 'Status',
      render: (request) => <StatusBadge status={request.status} />,
    },
    {
      key: 'action',
      header: 'Aksi',
      render: () => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-[#10B981] transition hover:bg-emerald-100"
          >
            Setujui
          </button>
          <button
            type="button"
            className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-[#EF4444] transition hover:bg-red-100"
          >
            Tolak
          </button>
        </div>
      ),
    },
  ]

  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Izin / Cuti" subtitle="Kelola pengajuan izin dan cuti pengajar" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {leaveStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <DataTable columns={columns} data={leaveRequests} />
    </motion.div>
  )
}
