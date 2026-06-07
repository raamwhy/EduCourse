import { motion } from 'framer-motion'
import AttendanceChart from '../components/charts/AttendanceChart.jsx'
import CourseDistributionChart from '../components/charts/CourseDistributionChart.jsx'
import TeachingTrendChart from '../components/charts/TeachingTrendChart.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import StatCard from '../components/common/StatCard.jsx'
import {
  attendanceWeekly,
  courseDistribution,
  dashboardStats,
  recentActivities,
  studentTrend,
} from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { cn } from '../utils/formatters.js'
import { iconMap } from '../utils/iconMap.js'

const activityTone = {
  blue: 'bg-blue-500',
  green: 'bg-emerald-500',
  orange: 'bg-amber-500',
  purple: 'bg-violet-500',
}

export default function Dashboard() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Ringkasan operasional belajar-mengajar hari ini"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
            icon={iconMap[stat.icon]}
            variants={fadeUpItem}
          />
        ))}
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)]">
        <AttendanceChart data={attendanceWeekly} title="Kehadiran Minggu Ini" />
        <CourseDistributionChart data={courseDistribution} title="Distribusi Kelas" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.85fr)]">
        <TeachingTrendChart data={studentTrend} title="Tren Jumlah Peserta" />
        <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">Aktivitas Terbaru</h2>
            <p className="mt-1 text-sm text-[#64748B]">Update operasional terbaru dari sistem</p>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.24 }}
                className="flex gap-3 rounded-xl border border-transparent p-2 transition hover:border-[#E2E8F0] hover:bg-slate-50"
              >
                <span
                  className={cn(
                    'mt-2 h-2.5 w-2.5 shrink-0 rounded-full',
                    activityTone[activity.tone],
                  )}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#0F172A]">{activity.title}</p>
                  <p className="mt-1 text-xs text-[#64748B]">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}
