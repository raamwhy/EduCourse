import { motion } from 'framer-motion'
import AttendanceChart from '../components/charts/AttendanceChart.jsx'
import CourseDistributionChart from '../components/charts/CourseDistributionChart.jsx'
import DataTable from '../components/common/DataTable.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import StatCard from '../components/common/StatCard.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import {
  attendanceActivities,
  attendanceByProgram,
  attendanceRecords,
  attendanceStats,
  attendanceWeekly,
} from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { getInitials } from '../utils/formatters.js'
import { iconMap } from '../utils/iconMap.js'

export default function Attendance() {
  const columns = [
    {
      key: 'name',
      header: 'Nama',
      render: (record) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-[#2563EB]">
            {getInitials(record.name)}
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">{record.name}</p>
            <p className="text-xs text-[#64748B]">{record.role}</p>
          </div>
        </div>
      ),
    },
    { key: 'role', header: 'Role' },
    { key: 'className', header: 'Kelas' },
    { key: 'time', header: 'Jam' },
    {
      key: 'status',
      header: 'Status',
      render: (record) => <StatusBadge status={record.status} />,
    },
    { key: 'note', header: 'Keterangan' },
  ]

  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Kehadiran" subtitle="Pantau kehadiran pengajar dan peserta" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {attendanceStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
        <AttendanceChart data={attendanceWeekly} title="Kehadiran Minggu Ini" />
        <CourseDistributionChart
          data={attendanceByProgram}
          title="Kehadiran per Program"
          subtitle="Komposisi hadir hari ini"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.75fr)]">
        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">Daftar Kehadiran Hari Ini</h2>
              <p className="mt-1 text-sm text-[#64748B]">Data check-in pengajar dan peserta</p>
            </div>
          </div>
          <DataTable columns={columns} data={attendanceRecords} />
        </section>

        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">Aktivitas Kehadiran Terbaru</h2>
            <p className="mt-1 text-sm text-[#64748B]">Log singkat dari modul attendance</p>
          </div>
          <div className="space-y-4">
            {attendanceActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.24 }}
                className="rounded-xl border border-[#E2E8F0] bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-[#0F172A]">{activity.title}</p>
                <p className="mt-1 text-xs text-[#64748B]">{activity.time}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}
