import { Search } from 'lucide-react'
import { cn } from '../../utils/formatters.js'

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Cari pengajar, kelas, peserta...',
  className,
}) {
  return (
    <label
      className={cn(
        'relative flex h-11 min-w-0 items-center rounded-xl border border-[#E2E8F0] bg-white text-sm text-[#0F172A] shadow-sm transition focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-100',
        className,
      )}
    >
      <Search className="pointer-events-none absolute left-3 h-4 w-4 text-[#64748B]" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-full w-full min-w-0 rounded-xl bg-transparent pl-10 pr-3 text-sm outline-none placeholder:text-[#94A3B8]"
        type="search"
      />
    </label>
  )
}
