import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { mainMenu, managementMenu, profileMenu } from '../../data/navigation.js'
import { sidebarSlide } from '../../utils/animations.js'
import { cn } from '../../utils/formatters.js'

function MenuItem({ item, onNavigate }) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={({ isActive }) => {
        return cn(
          'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-slate-700/70 hover:text-white',
          isActive
            ? 'bg-[#334155] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]'
            : 'text-[#CBD5E1]',
        )
      }}
    >
      {({ isActive }) => {
        const color = isActive ? '#FFFFFF' : '#E2E8F0'

        return (
          <>
            <Icon className="h-5 w-5 shrink-0" style={{ color }} />
            <span className="truncate" style={{ color }}>
              {item.title}
            </span>
          </>
        )
      }}
    </NavLink>
  )
}

function MenuSection({ label, items, onNavigate }) {
  return (
    <div>
      <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <nav className="space-y-1">
        {items.map((item) => (
          <MenuItem key={item.path} item={item} onNavigate={onNavigate} />
        ))}
      </nav>
    </div>
  )
}

function SidebarContent({ onClose, showCloseButton = false }) {
  const ProfileIcon = profileMenu.icon

  return (
    <div className="flex h-full flex-col bg-[#1E293B]">
      <div className="flex h-20 items-center justify-between px-5">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/assets/educourse-mark.png"
            alt="EduCourse"
            className="h-[72px] w-[72px] shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-white">EduCourse</p>
            <p className="truncate text-xs font-medium text-slate-300">Course Management</p>
          </div>
        </div>
        {showCloseButton ? (
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:bg-slate-700 hover:text-white"
            aria-label="Tutup sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <div className="scrollbar-soft flex-1 space-y-7 overflow-y-auto px-4 pb-4">
        <MenuSection label="Menu Utama" items={mainMenu} onNavigate={onClose} />
        <MenuSection label="Manajemen" items={managementMenu} onNavigate={onClose} />
      </div>

      <div className="border-t border-slate-700/70 p-4">
        <div className="rounded-2xl bg-slate-800/80 p-3 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] text-sm font-bold">
              {profileMenu.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{profileMenu.name}</p>
              <p className="truncate text-xs text-slate-400">{profileMenu.email}</p>
            </div>
            <ProfileIcon className="h-4 w-4 shrink-0 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-slate-800 bg-[#1E293B] lg:flex">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Tutup sidebar"
              className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-[260px] max-w-[82vw] border-r border-slate-800 bg-[#1E293B] shadow-2xl lg:hidden"
              variants={sidebarSlide}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <SidebarContent onClose={onClose} showCloseButton />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
