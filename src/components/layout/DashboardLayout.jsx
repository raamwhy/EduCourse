import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="min-h-screen lg:pl-[260px]">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  )
}
