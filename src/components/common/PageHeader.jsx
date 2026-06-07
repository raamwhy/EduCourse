export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-normal text-[#0F172A] sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm leading-6 text-[#64748B]">{subtitle}</p>
      </div>
      {children ? <div className="flex flex-wrap items-center gap-2">{children}</div> : null}
    </div>
  )
}
