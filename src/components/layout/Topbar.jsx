import { Bell, Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import SearchInput from '../common/SearchInput.jsx'
import { pageMeta } from '../../data/navigation.js'

export default function Topbar({ onMenuClick }) {
  const location = useLocation()
  const meta = pageMeta[location.pathname] || pageMeta['/dashboard']

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl">
      <div className="flex min-h-20 items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] shadow-sm transition hover:bg-slate-50 lg:hidden"
          aria-label="Buka sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden min-w-0 flex-1 md:block">
          <h2 className="truncate text-lg font-bold tracking-normal text-[#0F172A]">{meta.title}</h2>
          <p className="truncate text-sm text-[#64748B]">{meta.subtitle}</p>
        </div>

        <div className="min-w-0 flex-1 md:max-w-md">
          <SearchInput placeholder="Cari pengajar, kelas, peserta..." />
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] shadow-sm transition hover:bg-slate-50"
          aria-label="Notifikasi"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#EF4444]" />
        </button>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] text-sm font-bold text-white shadow-sm">
          EA
        </div>
      </div>
    </header>
  )
}
