import { motion } from 'framer-motion'
import { Download, FileBarChart } from 'lucide-react'
import TeachingTrendChart from '../components/charts/TeachingTrendChart.jsx'
import PageHeader from '../components/common/PageHeader.jsx'
import StatusBadge from '../components/common/StatusBadge.jsx'
import { reportCards, reportSummary } from '../data/mockData.js'
import { fadeUpItem, pageFadeUp, staggerContainer } from '../utils/animations.js'

export default function Reports() {
  return (
    <motion.div {...pageFadeUp} className="space-y-6">
      <PageHeader title="Laporan" subtitle="Ringkasan laporan akademik dan operasional">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Download className="h-4 w-4" />
          Unduh Laporan
        </button>
      </PageHeader>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {reportCards.map((report) => (
          <motion.article
            key={report.title}
            variants={fadeUpItem}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                <FileBarChart className="h-6 w-6" />
              </div>
              <StatusBadge status={report.status} />
            </div>
            <h2 className="mt-5 text-base font-bold text-[#0F172A]">{report.title}</h2>
            <p className="mt-2 min-h-12 text-sm leading-6 text-[#64748B]">{report.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-bold text-[#0F172A]">{report.metric}</span>
              <button
                type="button"
                className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-xs font-bold text-[#2563EB] transition hover:bg-blue-50"
              >
                Unduh
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <TeachingTrendChart
        data={reportSummary}
        title="Chart Ringkasan"
        subtitle="Peserta dan kelas aktif Jan - Jun"
        lines={[
          { key: 'peserta', name: 'Peserta', color: '#2563EB' },
          { key: 'kelas', name: 'Kelas', color: '#10B981' },
        ]}
      />
    </motion.div>
  )
}
