import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const colors = ['#2563EB', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444']

export default function CourseDistributionChart({ data, title = 'Distribusi Kelas', subtitle = 'Berdasarkan program' }) {
  return (
    <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
      <div className="mb-4">
        <h2 className="text-lg font-bold tracking-normal text-[#0F172A]">{title}</h2>
        <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="58%"
              outerRadius="82%"
              paddingAngle={3}
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                border: '1px solid #E2E8F0',
                borderRadius: 14,
                boxShadow: '0 16px 36px rgba(15, 23, 42, 0.12)',
              }}
            />
            <Legend
              iconType="circle"
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{ fontSize: 12, lineHeight: 1.8 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
