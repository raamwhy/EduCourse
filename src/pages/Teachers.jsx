import { motion } from 'framer-motion'
import { Eye, Pencil } from 'lucide-react'
import { useMemo, useState } from 'react'
import DataTable from '../components/common/DataTable.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import SearchInput from '../components/common/SearchInput.jsx'
import StatCard from '../components/common/StatCard.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { teacherStats, teachers } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { cn, getInitials } from '../utils/formatters.js'
import { iconMap } from '../utils/iconMap.js'

const filters = ['Semua', 'Aktif', 'Izin', 'Cuti']

export default function Teachers() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('Semua')

  const filteredTeachers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return teachers.filter((teacher) => {
      const matchesQuery = [teacher.name, teacher.expertise, teacher.contact]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery)
      const matchesStatus = status === 'Semua' || teacher.status === status
      return matchesQuery && matchesStatus
    })
  }, [query, status])

  const columns = [
    {
      key: 'name',
      header: 'Nama',
      render: (teacher) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
            {getInitials(teacher.name)}
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">{teacher.name}</p>
            <p className="text-xs text-[#64748B]">Pengajar</p>
          </div>
        </div>
      ),
    },
    { key: 'expertise', header: 'Bidang Keahlian' },
    { key: 'classes', header: 'Kelas Diampu' },
    {
      key: 'status',
      header: 'Status',
      render: (teacher) => <StatusBadge status={teacher.status} />,
    },
    { key: 'contact', header: 'Kontak' },
    {
      key: 'action',
      header: 'Aksi',
      render: () => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
            aria-label="Lihat detail pengajar"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
            aria-label="Edit pengajar"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Pengajar" subtitle="Kelola data pengajar dan jadwal mengajar" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {teacherStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SearchInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari nama, bidang, atau kontak pengajar..."
            className="lg:max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setStatus(filter)}
                className={cn(
                  'rounded-xl px-4 py-2 text-sm font-semibold transition',
                  status === filter
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50',
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <DataTable columns={columns} data={filteredTeachers} />
    </motion.div>
  )
}
