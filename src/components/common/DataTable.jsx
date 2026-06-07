import { motion } from 'framer-motion'
import EmptyState from './EmptyState.jsx'

export default function DataTable({ columns, data, emptyTitle = 'Data tidak ditemukan' }) {
  if (!data?.length) {
    return <EmptyState title={emptyTitle} description="Coba ubah kata kunci atau filter yang dipilih." />
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.05)]">
      <div className="scrollbar-soft overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-xs uppercase tracking-normal text-[#64748B]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="whitespace-nowrap border-b border-[#E2E8F0] px-5 py-4 font-semibold"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {data.map((row, rowIndex) => (
              <motion.tr
                key={row.id || row.name || row.teacher || row.title || rowIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: rowIndex * 0.03 }}
                className="text-[#0F172A] transition hover:bg-slate-50"
              >
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-5 py-4 align-middle">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
