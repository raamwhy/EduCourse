import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import DataTable from '../components/common/DataTable.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import StatCard from '../components/common/StatCard.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { scheduleStats, schedules } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { cn } from '../utils/formatters.js'
import { iconMap } from '../utils/iconMap.js'

const filters = [
  { label: 'Hari Ini', value: 'today' },
  { label: 'Minggu Ini', value: 'week' },
  { label: 'Semua', value: 'all' },
]

export default function Schedule() {
  const [filter, setFilter] = useState('today')

  const filteredSchedules = useMemo(() => {
    if (filter === 'all') {
      return schedules
    }

    return schedules.filter((schedule) => schedule.scope.includes(filter))
  }, [filter])

  const columns = [
    { key: 'date', header: 'Hari/Tanggal' },
    { key: 'time', header: 'Jam' },
    { key: 'className', header: 'Kelas' },
    { key: 'teacher', header: 'Pengajar' },
    { key: 'room', header: 'Ruang' },
    {
      key: 'status',
      header: 'Status',
      render: (schedule) => <StatusBadge status={schedule.status} />,
    },
  ]

  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Jadwal" subtitle="Atur jadwal belajar-mengajar harian dan mingguan">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-1 shadow-sm">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={cn(
                'rounded-xl px-4 py-2 text-sm font-semibold transition',
                filter === item.value ? 'bg-[#2563EB] text-white' : 'text-[#64748B] hover:bg-slate-50',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </PageHeader>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {scheduleStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <DataTable columns={columns} data={filteredSchedules} />
    </motion.div>
  )
}
