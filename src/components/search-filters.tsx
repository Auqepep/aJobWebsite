"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories, jobTypes, experienceLevels, locations } from "@/lib/data"
import { Search, SlidersHorizontal, X } from "lucide-react"
import type { FilterState } from "@/lib/types"

interface SearchFiltersProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const updateFilter = (key: keyof FilterState, value: string) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onFilterChange({
      search: "",
      category: "Semua Kategori",
      type: "Semua Tipe",
      experience: "Semua Level",
      location: "Semua Lokasi",
      salary: { min: 0, max: 100000000 },
    })
  }

  const hasActiveFilters =
    filters.search ||
    filters.category !== "Semua Kategori" ||
    filters.type !== "Semua Tipe" ||
    filters.experience !== "Semua Level" ||
    filters.location !== "Semua Lokasi"

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Cari lowongan, perusahaan, atau kata kunci..."
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <Select value={filters.location} onValueChange={(v) => updateFilter("location", v)}>
          <SelectTrigger className="w-full sm:w-[200px] bg-card">
            <SelectValue placeholder="Lokasi" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={() => setShowAdvanced(!showAdvanced)} className="shrink-0">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {showAdvanced && (
        <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
          <Select value={filters.category} onValueChange={(v) => updateFilter("category", v)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.type} onValueChange={(v) => updateFilter("type", v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Tipe Kerja" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.experience} onValueChange={(v) => updateFilter("experience", v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Pengalaman" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
              <X className="mr-2 h-4 w-4" />
              Hapus filter
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
