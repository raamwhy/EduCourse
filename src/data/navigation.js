import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  DoorOpen,
  FileBarChart,
  GraduationCap,
  LayoutDashboard,
  LibraryBig,
  PlaneTakeoff,
  Settings,
  UserRoundCog,
  UsersRound,
} from 'lucide-react'

export const mainMenu = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    subtitle: 'Ringkasan operasional belajar-mengajar hari ini',
  },
  {
    title: 'Pengajar',
    path: '/teachers',
    icon: GraduationCap,
    subtitle: 'Kelola data pengajar dan jadwal mengajar',
  },
  {
    title: 'Peserta',
    path: '/students',
    icon: UsersRound,
    subtitle: 'Kelola data peserta kursus dan progres belajar',
  },
  {
    title: 'Kelas',
    path: '/courses',
    icon: BookOpen,
    subtitle: 'Kelola program kursus, batch, dan kapasitas kelas',
  },
  {
    title: 'Jadwal',
    path: '/schedule',
    icon: CalendarDays,
    subtitle: 'Atur jadwal belajar-mengajar harian dan mingguan',
  },
  {
    title: 'Ruangan',
    path: '/rooms',
    icon: DoorOpen,
    subtitle: 'Pantau penggunaan ruang kelas dan fasilitas',
  },
  {
    title: 'Kehadiran',
    path: '/attendance',
    icon: ClipboardCheck,
    subtitle: 'Pantau kehadiran pengajar dan peserta',
  },
  {
    title: 'Izin / Cuti',
    path: '/leave',
    icon: PlaneTakeoff,
    subtitle: 'Kelola pengajuan izin dan cuti pengajar',
  },
]

export const managementMenu = [
  {
    title: 'Materi',
    path: '/materials',
    icon: LibraryBig,
    subtitle: 'Kelola materi pembelajaran untuk setiap kelas',
  },
  {
    title: 'Laporan',
    path: '/reports',
    icon: FileBarChart,
    subtitle: 'Ringkasan laporan akademik dan operasional',
  },
  {
    title: 'Pengaturan',
    path: '/settings',
    icon: Settings,
    subtitle: 'Kelola konfigurasi sistem dan preferensi admin',
  },
]

export const pageMeta = [...mainMenu, ...managementMenu].reduce(
  (items, item) => ({
    ...items,
    [item.path]: {
      title: item.title,
      subtitle: item.subtitle,
      icon: item.icon,
    },
  }),
  {
    '/': {
      title: 'Dashboard',
      subtitle: 'Ringkasan operasional belajar-mengajar hari ini',
      icon: LayoutDashboard,
    },
  },
)

export const profileMenu = {
  name: 'Admin Akademik',
  email: 'admin@educourse.com',
  initials: 'EA',
  icon: UserRoundCog,
}
