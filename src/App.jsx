import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import Attendance from './pages/Attendance.jsx'
import Courses from './pages/Courses.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Leave from './pages/Leave.jsx'
import Materials from './pages/Materials.jsx'
import Reports from './pages/Reports.jsx'
import Rooms from './pages/Rooms.jsx'
import Schedule from './pages/Schedule.jsx'
import Settings from './pages/Settings.jsx'
import Students from './pages/Students.jsx'
import Teachers from './pages/Teachers.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
