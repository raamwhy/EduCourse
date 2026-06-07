import { motion } from 'framer-motion'
import { ExternalLink, FileText, Link, Presentation, Video } from 'lucide-react'
import PageHeader from '../components/common/PageHeader.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { materials } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'

const typeIcon = {
  PDF: FileText,
  Video,
  Slide: Presentation,
  Link,
}

const typeColor = {
  PDF: 'bg-red-50 text-[#EF4444]',
  Video: 'bg-blue-50 text-[#2563EB]',
  Slide: 'bg-amber-50 text-[#F59E0B]',
  Link: 'bg-violet-50 text-[#8B5CF6]',
}

export default function Materials() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Materi" subtitle="Kelola materi pembelajaran untuk setiap kelas" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {materials.map((material) => {
          const Icon = typeIcon[material.type] || FileText

          return (
            <motion.article
              key={material.title}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${typeColor[material.type]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <StatusBadge status={material.status} />
              </div>

              <h2 className="mt-5 text-lg font-bold tracking-normal text-[#0F172A]">{material.title}</h2>
              <p className="mt-2 text-sm text-[#64748B]">{material.className}</p>

              <div className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-[#64748B]">Pengajar</span>
                  <span className="font-semibold text-[#0F172A]">{material.teacher}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-[#64748B]">Tipe file</span>
                  <span className="font-semibold text-[#0F172A]">{material.type}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-[#64748B]">Upload</span>
                  <span className="font-semibold text-[#0F172A]">{material.uploadedAt}</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm font-bold text-[#2563EB] transition hover:border-blue-200 hover:bg-blue-50"
              >
                Buka Materi
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.article>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
