# EduCourse Admin Dashboard

EduCourse Admin Dashboard adalah dashboard sistem manajemen operasional belajar-mengajar untuk mengelola pengajar, peserta, kelas, jadwal, ruangan, kehadiran, izin/cuti, materi, dan laporan.

## Tech Stack

- Vite + React
- Tailwind CSS
- React Router DOM
- Lucide React
- Recharts
- Framer Motion

## Fitur Utama

- Dashboard ringkasan operasional belajar-mengajar
- Manajemen data pengajar dan peserta
- Manajemen kelas, jadwal, dan ruangan
- Halaman kehadiran dengan statistik, chart, tabel, dan aktivitas terbaru
- Pengajuan izin/cuti pengajar
- Manajemen materi pembelajaran
- Laporan akademik dan operasional
- Pengaturan admin
- Responsive desktop, tablet, dan mobile
- Sidebar fixed di desktop dan toggle hamburger di mobile
- Semua data menggunakan static mock data

## Struktur Folder

```txt
src/
  components/
    layout/
      Sidebar.jsx
      Topbar.jsx
      DashboardLayout.jsx
    common/
      StatCard.jsx
      PageHeader.jsx
      DataTable.jsx
      StatusBadge.jsx
      SearchInput.jsx
      EmptyState.jsx
    charts/
      AttendanceChart.jsx
      CourseDistributionChart.jsx
      TeachingTrendChart.jsx
  data/
    mockData.js
    navigation.js
  pages/
    Dashboard.jsx
    Teachers.jsx
    Students.jsx
    Courses.jsx
    Schedule.jsx
    Rooms.jsx
    Attendance.jsx
    Leave.jsx
    Materials.jsx
    Reports.jsx
    Settings.jsx
  utils/
    animations.js
    formatters.js
    iconMap.js
  App.jsx
  main.jsx
  index.css
```

