"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { SearchFilters } from "@/components/search-filters"
import { mockJobs } from "@/lib/data"
import type { FilterState } from "@/lib/types"

export default function JobsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "Semua Kategori",
    type: "Semua Tipe",
    experience: "Semua Level",
    location: "Semua Lokasi",
    salary: { min: 0, max: 100000000 },
  })

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.tags.some((tag) => tag.toLowerCase().includes(filters.search.toLowerCase()))

      const matchesCategory = filters.category === "Semua Kategori" || job.category === filters.category

      const matchesType = filters.type === "Semua Tipe" || job.type === filters.type

      const matchesExperience = filters.experience === "Semua Level" || job.experience === filters.experience

      const matchesLocation = filters.location === "Semua Lokasi" || job.location === filters.location

      return matchesSearch && matchesCategory && matchesType && matchesExperience && matchesLocation
    })
  }, [filters])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Find Jobs</h1>
            <p className="mt-2 text-muted-foreground">{filteredJobs.length} jobs available</p>
          </div>

          <SearchFilters filters={filters} onFilterChange={setFilters} />

          <div className="mt-8">
            {filteredJobs.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border p-12 text-center">
                <p className="text-muted-foreground">
                  No jobs found matching your criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}