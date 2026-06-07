import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function TeachingTrendChart({
  data,
  title = 'Tren Jumlah Peserta',
  subtitle = 'Pertumbuhan Jan - Jun',
  lines = [{ key: 'peserta', name: 'Peserta', color: '#2563EB' }],
}) {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
      <div className="mb-5">
        <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">{title}</h2>
        <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#E2E8F0" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                border: '1px solid #E2E8F0',
                borderRadius: 14,
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.12)',
              }}
            />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: 14, fontSize: 12 }} />
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.name}
                stroke={line.color}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: '#FFFFFF' }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
