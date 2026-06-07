import { motion } from 'framer-motion'
import { CalendarClock, Monitor, UsersRound } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { rooms } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'

export default function Rooms() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Ruangan" subtitle="Pantau penggunaan ruang kelas dan fasilitas" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {rooms.map((room) => (
          <motion.article
            key={room.name}
            variants={fadeUpItem}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">{room.name}</h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#64748B]">
                  <UsersRound className="h-4 w-4 text-[#2563EB]" />
                  <span>Kapasitas {room.capacity} orang</span>
                </div>
              </div>
              <StatusBadge status={room.status} />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                <Monitor className="h-4 w-4 text-[#10B981]" />
                Fasilitas
              </div>
              <div className="flex flex-wrap gap-2">
                {room.facilities.map((facility) => (
                  <span
                    key={facility}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[#64748B]"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-[#E2E8F0] bg-slate-50 p-4">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                <CalendarClock className="h-4 w-4 text-[#F59E0B]" />
                Jadwal terdekat
              </div>
              <p className="text-sm leading-6 text-[#64748B]">{room.nextSchedule}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}
