export function StatsBanner() {
  const stats = [
    { value: "10.000+", label: "Lowongan Aktif" },
    { value: "500+", label: "Perusahaan" },
    { value: "1Jt+", label: "Pencari Kerja" },
    { value: "98%", label: "Tingkat Sukses" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
          <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
