import { motion } from 'framer-motion'
import { CalendarDays, UserRound, UsersRound } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { courses } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'
import { formatCapacity } from '../utils/formatters.js'

export default function Courses() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Kelas" subtitle="Kelola program kursus, batch, dan kapasitas kelas" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {courses.map((course) => {
          const capacityPercent = Math.round((course.participants / course.capacity) * 100)

          return (
            <motion.article
              key={course.name}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">{course.name}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#64748B]">{course.description}</p>
                </div>
                <StatusBadge status={course.status} />
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#64748B]">
                  <UserRound className="h-4 w-4 text-[#2563EB]" />
                  <span className="font-medium text-[#0F172A]">{course.teacher}</span>
                </div>
                <div className="flex items-center gap-3 text-[#64748B]">
                  <UsersRound className="h-4 w-4 text-[#10B981]" />
                  <span>{formatCapacity(course.participants, course.capacity)}</span>
                </div>
                <div className="flex items-center gap-3 text-[#64748B]">
                  <CalendarDays className="h-4 w-4 text-[#F59E0B]" />
                  <span>{course.schedule}</span>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#0F172A]">Kapasitas</span>
                  <span className="text-[#64748B]">{capacityPercent}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${capacityPercent}%` }} />
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
