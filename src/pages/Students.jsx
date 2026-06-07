import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import DataTable from '../components/common/DataTable.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import SearchInput from '../components/common/SearchInput.jsx'
import StatCard from '../components/common/StatCard.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { studentStats, students } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { getInitials } from '../utils/formatters.js'
import { iconMap } from '../utils/iconMap.js'

export default function Students() {
  const [query, setQuery] = useState('')

  const filteredStudents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return students.filter((student) =>
      [student.name, student.program, student.batch, student.contact]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    )
  }, [query])

  const columns = [
    {
      key: 'name',
      header: 'Nama',
      render: (student) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-sm font-bold text-[#8B5CF6]">
            {getInitials(student.name)}
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">{student.name}</p>
            <p className="text-xs text-[#64748B]">Peserta</p>
          </div>
        </div>
      ),
    },
    { key: 'program', header: 'Program' },
    { key: 'batch', header: 'Batch' },
    {
      key: 'progress',
      header: 'Progress',
      render: (student) => (
        <div className="min-w-40">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#0F172A]">{student.progress}%</span>
            <span className="text-[#64748B]">Belajar</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#2563EB]"
              style={{ width: `${student.progress}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (student) => <StatusBadge status={student.status} />,
    },
    { key: 'contact', header: 'Kontak' },
  ]

  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Peserta" subtitle="Kelola data peserta kursus dan progres belajar" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {studentStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
        <SearchInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari peserta, program, batch, atau kontak..."
          className="lg:max-w-md"
        />
      </section>

      <DataTable columns={columns} data={filteredStudents} />
    </motion.div>
  )
}
