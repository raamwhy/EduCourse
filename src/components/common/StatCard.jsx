import { motion } from 'framer-motion'
import { cn } from '../../utils/formatters.js'

const colorStyles = {
  blue: {
    icon: 'bg-blue-50 text-[#2563EB]',
    glow: 'bg-blue-500',
    change: 'text-[#2563EB]',
  },
  green: {
    icon: 'bg-emerald-50 text-[#10B981]',
    glow: 'bg-emerald-500',
    change: 'text-[#10B981]',
  },
  orange: {
    icon: 'bg-amber-50 text-[#F59E0B]',
    glow: 'bg-amber-500',
    change: 'text-[#F59E0B]',
  },
  red: {
    icon: 'bg-red-50 text-[#EF4444]',
    glow: 'bg-red-500',
    change: 'text-[#EF4444]',
  },
  purple: {
    icon: 'bg-violet-50 text-[#8B5CF6]',
    glow: 'bg-violet-500',
    change: 'text-[#8B5CF6]',
  },
}

export default function StatCard({ title, value, change, icon: Icon, color = 'blue', variants }) {
  const styles = colorStyles[color] || colorStyles.blue

  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    >
      <span className={cn('absolute right-0 top-0 h-1 w-24 rounded-bl-full', styles.glow)} />
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#64748B]">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-normal text-[#0F172A]">{value}</p>
          <p className={cn('mt-2 text-sm font-semibold', styles.change)}>{change}</p>
        </div>
        <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl', styles.icon)}>
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </div>
      </div>
    </motion.article>
  )
}
