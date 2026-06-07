import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function AttendanceChart({ data, title = 'Kehadiran Minggu Ini', subtitle = 'Senin - Jumat' }) {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">{title}</h2>
          <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB]">
          Realtime
        </span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: '#F1F5F9' }}
              contentStyle={{
                border: '1px solid #E2E8F0',
                borderRadius: 14,
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.12)',
              }}
            />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: 14, fontSize: 12 }} />
            <Bar dataKey="Hadir" fill="#10B981" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Izin" fill="#F59E0B" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Tidak Hadir" name="Alfa/Tidak Hadir" fill="#EF4444" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
