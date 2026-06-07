import { cn } from '../../utils/formatters.js'

const statusStyles = {
  Aktif: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Izin: 'bg-amber-50 text-amber-700 ring-amber-200',
  Cuti: 'bg-violet-50 text-violet-700 ring-violet-200',
  Selesai: 'bg-slate-100 text-slate-700 ring-slate-200',
  'Segera Mulai': 'bg-blue-50 text-blue-700 ring-blue-200',
  Berlangsung: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Terjadwal: 'bg-blue-50 text-blue-700 ring-blue-200',
  Dibatalkan: 'bg-red-50 text-red-700 ring-red-200',
  Tersedia: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Digunakan: 'bg-amber-50 text-amber-700 ring-amber-200',
  Maintenance: 'bg-red-50 text-red-700 ring-red-200',
  Hadir: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Terlambat: 'bg-amber-50 text-amber-700 ring-amber-200',
  'Tidak Hadir': 'bg-red-50 text-red-700 ring-red-200',
  Menunggu: 'bg-amber-50 text-amber-700 ring-amber-200',
  Disetujui: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Ditolak: 'bg-red-50 text-red-700 ring-red-200',
  Draft: 'bg-slate-100 text-slate-700 ring-slate-200',
  Arsip: 'bg-slate-100 text-slate-600 ring-slate-200',
  'Siap Unduh': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Review: 'bg-amber-50 text-amber-700 ring-amber-200',
  Lengkap: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'Perlu Review': 'bg-amber-50 text-amber-700 ring-amber-200',
  Terverifikasi: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
}

const dotStyles = {
  Aktif: 'bg-emerald-500',
  Izin: 'bg-amber-500',
  Cuti: 'bg-violet-500',
  Selesai: 'bg-slate-500',
  'Segera Mulai': 'bg-blue-500',
  Berlangsung: 'bg-emerald-500',
  Terjadwal: 'bg-blue-500',
  Dibatalkan: 'bg-red-500',
  Tersedia: 'bg-emerald-500',
  Digunakan: 'bg-amber-500',
  Maintenance: 'bg-red-500',
  Hadir: 'bg-emerald-500',
  Terlambat: 'bg-amber-500',
  'Tidak Hadir': 'bg-red-500',
  Menunggu: 'bg-amber-500',
  Disetujui: 'bg-emerald-500',
  Ditolak: 'bg-red-500',
  Draft: 'bg-slate-500',
  Arsip: 'bg-slate-400',
  'Siap Unduh': 'bg-emerald-500',
  Review: 'bg-amber-500',
  Lengkap: 'bg-emerald-500',
  'Perlu Review': 'bg-amber-500',
  Terverifikasi: 'bg-emerald-500',
}

export default function StatusBadge({ status, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        statusStyles[status] || 'bg-slate-100 text-slate-700 ring-slate-200',
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', dotStyles[status] || 'bg-slate-500')} />
      {status}
    </span>
  )
}
