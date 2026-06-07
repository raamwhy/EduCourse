export const dashboardStats = [
  {
    title: 'Total Pengajar',
    value: '42',
    change: '+4 bulan ini',
    icon: 'Users',
    color: 'blue',
  },
  {
    title: 'Kelas Aktif',
    value: '18',
    change: '+3 kelas baru',
    icon: 'BookOpen',
    color: 'green',
  },
  {
    title: 'Jadwal Hari Ini',
    value: '12',
    change: '3 ruang digunakan',
    icon: 'CalendarDays',
    color: 'orange',
  },
  {
    title: 'Tidak Hadir',
    value: '5',
    change: '-2 dari minggu lalu',
    icon: 'UserX',
    color: 'red',
  },
]

export const attendanceWeekly = [
  { day: 'Senin', Hadir: 148, Izin: 6, 'Tidak Hadir': 4 },
  { day: 'Selasa', Hadir: 152, Izin: 4, 'Tidak Hadir': 3 },
  { day: 'Rabu', Hadir: 156, Izin: 8, 'Tidak Hadir': 5 },
  { day: 'Kamis', Hadir: 149, Izin: 5, 'Tidak Hadir': 6 },
  { day: 'Jumat', Hadir: 161, Izin: 3, 'Tidak Hadir': 2 },
]

export const courseDistribution = [
  { name: 'Web Development', value: 34 },
  { name: 'UI/UX Design', value: 24 },
  { name: 'Data Science', value: 18 },
  { name: 'Digital Marketing', value: 14 },
  { name: 'English Class', value: 10 },
]

export const studentTrend = [
  { month: 'Jan', peserta: 184 },
  { month: 'Feb', peserta: 202 },
  { month: 'Mar', peserta: 218 },
  { month: 'Apr', peserta: 237 },
  { month: 'Mei', peserta: 251 },
  { month: 'Jun', peserta: 268 },
]

export const recentActivities = [
  {
    title: 'Jadwal kelas Web Development diperbarui',
    time: '10 menit lalu',
    tone: 'blue',
  },
  {
    title: 'Izin pengajar disetujui',
    time: '35 menit lalu',
    tone: 'green',
  },
  {
    title: 'Peserta baru bergabung',
    time: '1 jam lalu',
    tone: 'purple',
  },
  {
    title: 'Ruang kelas dipindahkan',
    time: '2 jam lalu',
    tone: 'orange',
  },
  {
    title: 'Materi baru diunggah',
    time: 'Kemarin',
    tone: 'blue',
  },
]

export const teacherStats = [
  { title: 'Total Pengajar', value: '42', change: '8 bidang aktif', icon: 'Users', color: 'blue' },
  { title: 'Aktif Mengajar', value: '36', change: '86% tersedia', icon: 'UserCheck', color: 'green' },
  { title: 'Cuti / Izin', value: '6', change: '2 hari ini', icon: 'CalendarX', color: 'orange' },
  { title: 'Kelas Diampu', value: '74', change: '18 batch aktif', icon: 'BookOpen', color: 'purple' },
]

export const teachers = [
  {
    name: 'Bagas Pratama',
    expertise: 'Web Development',
    classes: '4 kelas',
    status: 'Aktif',
    contact: 'bagas@educourse.com',
  },
  {
    name: 'Sinta Maharani',
    expertise: 'UI/UX Design',
    classes: '3 kelas',
    status: 'Aktif',
    contact: 'sinta@educourse.com',
  },
  {
    name: 'Raka Firmansyah',
    expertise: 'Data Science',
    classes: '2 kelas',
    status: 'Izin',
    contact: 'raka@educourse.com',
  },
  {
    name: 'Dini Lestari',
    expertise: 'English Class',
    classes: '3 kelas',
    status: 'Aktif',
    contact: 'dini@educourse.com',
  },
  {
    name: 'Arman Yusuf',
    expertise: 'Digital Marketing',
    classes: '2 kelas',
    status: 'Cuti',
    contact: 'arman@educourse.com',
  },
]

export const studentStats = [
  { title: 'Total Peserta', value: '268', change: '+17 bulan ini', icon: 'Users', color: 'blue' },
  { title: 'Peserta Aktif', value: '236', change: '88% aktif', icon: 'UserCheck', color: 'green' },
  { title: 'Peserta Baru', value: '31', change: 'Batch Juni', icon: 'UserPlus', color: 'orange' },
  { title: 'Sertifikat Terbit', value: '84', change: '+12 minggu ini', icon: 'Award', color: 'purple' },
]

export const students = [
  {
    name: 'Nadia Putri',
    program: 'Frontend Web Development',
    batch: 'Batch 12',
    progress: 78,
    status: 'Aktif',
    contact: 'nadia@mail.com',
  },
  {
    name: 'Iqbal Ramadhan',
    program: 'Backend Laravel',
    batch: 'Batch 8',
    progress: 64,
    status: 'Aktif',
    contact: 'iqbal@mail.com',
  },
  {
    name: 'Maya Kirana',
    program: 'UI/UX Design',
    batch: 'Batch 10',
    progress: 88,
    status: 'Aktif',
    contact: 'maya@mail.com',
  },
  {
    name: 'Rizky Hidayat',
    program: 'Data Science Fundamental',
    batch: 'Batch 5',
    progress: 51,
    status: 'Izin',
    contact: 'rizky@mail.com',
  },
  {
    name: 'Tania Safira',
    program: 'English for Career',
    batch: 'Batch 7',
    progress: 100,
    status: 'Selesai',
    contact: 'tania@mail.com',
  },
  {
    name: 'Farhan Aditya',
    program: 'Digital Marketing',
    batch: 'Batch 9',
    progress: 42,
    status: 'Aktif',
    contact: 'farhan@mail.com',
  },
]

export const courses = [
  {
    name: 'Frontend Web Development',
    description: 'HTML, CSS, React, dan workflow frontend modern.',
    teacher: 'Bagas Pratama',
    participants: 28,
    capacity: 32,
    schedule: 'Senin & Rabu, 19:00',
    status: 'Aktif',
  },
  {
    name: 'Backend Laravel',
    description: 'REST API, database, auth, dan deployment Laravel.',
    teacher: 'Bagas Pratama',
    participants: 24,
    capacity: 30,
    schedule: 'Selasa & Kamis, 19:00',
    status: 'Aktif',
  },
  {
    name: 'UI/UX Design',
    description: 'Riset pengguna, wireframe, prototyping, dan design system.',
    teacher: 'Sinta Maharani',
    participants: 22,
    capacity: 28,
    schedule: 'Senin & Jumat, 18:30',
    status: 'Aktif',
  },
  {
    name: 'Data Science Fundamental',
    description: 'Python, statistik dasar, visualisasi, dan machine learning awal.',
    teacher: 'Raka Firmansyah',
    participants: 18,
    capacity: 24,
    schedule: 'Rabu & Sabtu, 19:00',
    status: 'Segera Mulai',
  },
  {
    name: 'Digital Marketing',
    description: 'SEO, iklan digital, funnel, dan analitik kampanye.',
    teacher: 'Arman Yusuf',
    participants: 20,
    capacity: 25,
    schedule: 'Kamis, 18:30',
    status: 'Aktif',
  },
  {
    name: 'English for Career',
    description: 'Percakapan profesional, presentasi, dan interview preparation.',
    teacher: 'Dini Lestari',
    participants: 26,
    capacity: 30,
    schedule: 'Selasa & Jumat, 18:00',
    status: 'Selesai',
  },
]

export const scheduleStats = [
  { title: 'Jadwal Hari Ini', value: '12', change: '5 sedang aktif', icon: 'CalendarDays', color: 'blue' },
  { title: 'Jadwal Minggu Ini', value: '58', change: '+7 dari minggu lalu', icon: 'CalendarRange', color: 'green' },
  { title: 'Ruang Terpakai', value: '6', change: '75% kapasitas', icon: 'DoorOpen', color: 'orange' },
  { title: 'Jadwal Bentrok', value: '1', change: 'Butuh review', icon: 'AlertTriangle', color: 'red' },
]

export const schedules = [
  {
    date: 'Senin, 08 Jun 2026',
    time: '09:00 - 11:00',
    className: 'Frontend Web Development',
    teacher: 'Bagas Pratama',
    room: 'Lab Komputer 1',
    status: 'Berlangsung',
    scope: ['today', 'week'],
  },
  {
    date: 'Senin, 08 Jun 2026',
    time: '13:00 - 15:00',
    className: 'UI/UX Design',
    teacher: 'Sinta Maharani',
    room: 'Studio Kreatif',
    status: 'Terjadwal',
    scope: ['today', 'week'],
  },
  {
    date: 'Selasa, 09 Jun 2026',
    time: '10:00 - 12:00',
    className: 'Backend Laravel',
    teacher: 'Bagas Pratama',
    room: 'Ruang A101',
    status: 'Terjadwal',
    scope: ['week'],
  },
  {
    date: 'Rabu, 10 Jun 2026',
    time: '19:00 - 21:00',
    className: 'Data Science Fundamental',
    teacher: 'Raka Firmansyah',
    room: 'Online Class Room',
    status: 'Dibatalkan',
    scope: ['week'],
  },
  {
    date: 'Kamis, 11 Jun 2026',
    time: '18:30 - 20:30',
    className: 'Digital Marketing',
    teacher: 'Arman Yusuf',
    room: 'Ruang B202',
    status: 'Terjadwal',
    scope: ['week'],
  },
  {
    date: 'Jumat, 12 Jun 2026',
    time: '18:00 - 20:00',
    className: 'English for Career',
    teacher: 'Dini Lestari',
    room: 'Meeting Room',
    status: 'Selesai',
    scope: ['week'],
  },
]

export const rooms = [
  {
    name: 'Ruang A101',
    capacity: 30,
    facilities: ['Projector', 'Whiteboard', 'AC'],
    status: 'Tersedia',
    nextSchedule: 'Backend Laravel - Selasa 10:00',
  },
  {
    name: 'Ruang B202',
    capacity: 25,
    facilities: ['Smart TV', 'Whiteboard', 'Speaker'],
    status: 'Digunakan',
    nextSchedule: 'Digital Marketing - Kamis 18:30',
  },
  {
    name: 'Lab Komputer 1',
    capacity: 32,
    facilities: ['32 PC', 'Projector', 'LAN'],
    status: 'Digunakan',
    nextSchedule: 'Frontend Web Development - Hari ini 09:00',
  },
  {
    name: 'Studio Kreatif',
    capacity: 24,
    facilities: ['Mac Mini', 'Drawing Tablet', 'Color Board'],
    status: 'Digunakan',
    nextSchedule: 'UI/UX Design - Hari ini 13:00',
  },
  {
    name: 'Meeting Room',
    capacity: 18,
    facilities: ['Conference Cam', 'TV', 'Sound System'],
    status: 'Tersedia',
    nextSchedule: 'English for Career - Jumat 18:00',
  },
  {
    name: 'Online Class Room',
    capacity: 100,
    facilities: ['Zoom Pro', 'Recording', 'Streaming Setup'],
    status: 'Maintenance',
    nextSchedule: 'Data Science - Rabu 19:00',
  },
]

export const attendanceStats = [
  { title: 'Total Jadwal Hari Ini', value: '12', change: '5 sedang berlangsung', icon: 'CalendarDays', color: 'blue' },
  { title: 'Hadir', value: '156', change: '92% dari total sesi', icon: 'UserCheck', color: 'green' },
  { title: 'Izin', value: '8', change: '4 peserta, 4 pengajar', icon: 'Clock', color: 'orange' },
  { title: 'Tidak Hadir', value: '5', change: '-2 dari minggu lalu', icon: 'UserX', color: 'red' },
]

export const attendanceByProgram = [
  { name: 'Web Development', value: 42 },
  { name: 'UI/UX Design', value: 31 },
  { name: 'Data Science', value: 24 },
  { name: 'Digital Marketing', value: 28 },
  { name: 'English Class', value: 31 },
]

export const attendanceRecords = [
  {
    name: 'Bagas Pratama',
    role: 'Pengajar',
    className: 'Frontend Web Development',
    time: '09:00',
    status: 'Hadir',
    note: 'Check-in 08:52',
  },
  {
    name: 'Nadia Putri',
    role: 'Peserta',
    className: 'Frontend Web Development',
    time: '09:00',
    status: 'Hadir',
    note: 'Tepat waktu',
  },
  {
    name: 'Maya Kirana',
    role: 'Peserta',
    className: 'UI/UX Design',
    time: '13:00',
    status: 'Izin',
    note: 'Sakit',
  },
  {
    name: 'Rizky Hidayat',
    role: 'Peserta',
    className: 'Data Science Fundamental',
    time: '19:00',
    status: 'Tidak Hadir',
    note: 'Belum konfirmasi',
  },
  {
    name: 'Farhan Aditya',
    role: 'Peserta',
    className: 'Digital Marketing',
    time: '18:30',
    status: 'Terlambat',
    note: 'Terlambat 10 menit',
  },
]

export const attendanceActivities = [
  { title: 'Pengajar Bagas melakukan check-in', time: '08:52' },
  { title: 'Peserta kelas UI/UX izin sakit', time: '09:14' },
  { title: 'Jadwal Data Science selesai', time: '11:05' },
  { title: 'Peserta Web Development terlambat 10 menit', time: '13:10' },
]

export const leaveStats = [
  { title: 'Pengajuan Baru', value: '7', change: '3 hari ini', icon: 'Inbox', color: 'blue' },
  { title: 'Disetujui', value: '18', change: 'Bulan berjalan', icon: 'CheckCircle', color: 'green' },
  { title: 'Menunggu', value: '5', change: 'Butuh keputusan', icon: 'Clock', color: 'orange' },
  { title: 'Ditolak', value: '2', change: 'Perlu revisi', icon: 'XCircle', color: 'red' },
]

export const leaveRequests = [
  {
    teacher: 'Raka Firmansyah',
    type: 'Izin Mengajar',
    date: '08 Jun 2026',
    duration: '1 hari',
    reason: 'Kegiatan kampus',
    status: 'Menunggu',
  },
  {
    teacher: 'Arman Yusuf',
    type: 'Cuti',
    date: '10 - 12 Jun 2026',
    duration: '3 hari',
    reason: 'Keluarga',
    status: 'Disetujui',
  },
  {
    teacher: 'Dini Lestari',
    type: 'Sakit',
    date: '07 Jun 2026',
    duration: '1 hari',
    reason: 'Demam',
    status: 'Disetujui',
  },
  {
    teacher: 'Sinta Maharani',
    type: 'Keperluan Pribadi',
    date: '14 Jun 2026',
    duration: '1 hari',
    reason: 'Urusan keluarga',
    status: 'Menunggu',
  },
  {
    teacher: 'Bagas Pratama',
    type: 'Izin Mengajar',
    date: '03 Jun 2026',
    duration: '1 sesi',
    reason: 'Bentrok workshop',
    status: 'Ditolak',
  },
]

export const materials = [
  {
    title: 'React Component Pattern',
    className: 'Frontend Web Development',
    teacher: 'Bagas Pratama',
    type: 'PDF',
    uploadedAt: '06 Jun 2026',
    status: 'Aktif',
  },
  {
    title: 'Laravel REST API Setup',
    className: 'Backend Laravel',
    teacher: 'Bagas Pratama',
    type: 'Video',
    uploadedAt: '05 Jun 2026',
    status: 'Aktif',
  },
  {
    title: 'Design System Basics',
    className: 'UI/UX Design',
    teacher: 'Sinta Maharani',
    type: 'Slide',
    uploadedAt: '04 Jun 2026',
    status: 'Aktif',
  },
  {
    title: 'Python for Data Analysis',
    className: 'Data Science Fundamental',
    teacher: 'Raka Firmansyah',
    type: 'Link',
    uploadedAt: '02 Jun 2026',
    status: 'Draft',
  },
  {
    title: 'SEO Content Checklist',
    className: 'Digital Marketing',
    teacher: 'Arman Yusuf',
    type: 'PDF',
    uploadedAt: '01 Jun 2026',
    status: 'Aktif',
  },
  {
    title: 'Interview Conversation Practice',
    className: 'English for Career',
    teacher: 'Dini Lestari',
    type: 'Video',
    uploadedAt: '31 Mei 2026',
    status: 'Arsip',
  },
]

export const reportCards = [
  {
    title: 'Laporan Kehadiran',
    description: 'Rekap hadir, izin, terlambat, dan tidak hadir per kelas.',
    metric: '92%',
    status: 'Siap Unduh',
  },
  {
    title: 'Laporan Peserta',
    description: 'Pertumbuhan peserta, progress belajar, dan sertifikat.',
    metric: '268',
    status: 'Siap Unduh',
  },
  {
    title: 'Laporan Jadwal',
    description: 'Kepadatan jadwal, pemakaian ruang, dan konflik sesi.',
    metric: '58',
    status: 'Review',
  },
  {
    title: 'Laporan Pengajar',
    description: 'Jam mengajar, kelas diampu, izin, dan performa kehadiran.',
    metric: '42',
    status: 'Siap Unduh',
  },
]

export const reportSummary = [
  { month: 'Jan', peserta: 184, kelas: 12 },
  { month: 'Feb', peserta: 202, kelas: 14 },
  { month: 'Mar', peserta: 218, kelas: 15 },
  { month: 'Apr', peserta: 237, kelas: 16 },
  { month: 'Mei', peserta: 251, kelas: 17 },
  { month: 'Jun', peserta: 268, kelas: 18 },
]

export const settingsItems = [
  {
    title: 'Profil Admin',
    description: 'Nama, email, avatar, dan informasi akun akademik.',
    status: 'Lengkap',
  },
  {
    title: 'Notifikasi',
    description: 'Atur notifikasi jadwal, izin, materi, dan laporan.',
    status: 'Aktif',
  },
  {
    title: 'Jam Operasional',
    description: 'Konfigurasi jam kelas, hari libur, dan batas check-in.',
    status: '08:00 - 21:00',
  },
  {
    title: 'Data Institusi',
    description: 'Profil lembaga, alamat, kontak, dan branding sistem.',
    status: 'Terverifikasi',
  },
  {
    title: 'Keamanan Akun',
    description: 'Password admin, sesi perangkat, dan pemulihan akun.',
    status: 'Perlu Review',
  },
]
