import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'Data belum tersedia', description }) {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#64748B]">
        <Inbox className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">{title}</h3>
      {description ? <p className="mt-1 max-w-sm text-sm text-[#64748B]">{description}</p> : null}
    </div>
  )
}
