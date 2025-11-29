"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JobCard } from "@/components/job-card";
import { SearchFilters } from "@/components/search-filters";
import { StatsBanner } from "@/components/stats-banner";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/lib/data";
import type { FilterState } from "@/lib/types";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "Semua Kategori",
    type: "Semua Tipe",
    experience: "Semua Level",
    location: "Semua Lokasi",
    salary: { min: 0, max: 100000000 },
  });

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(filters.search.toLowerCase())
        );

      const matchesCategory =
        filters.category === "Semua Kategori" ||
        job.category === filters.category;

      const matchesType =
        filters.type === "Semua Tipe" ||
        job.type.replace("-", " ").toLowerCase() === filters.type.toLowerCase();

      const matchesExperience =
        filters.experience === "Semua Level" ||
        filters.experience.toLowerCase().includes(job.experience);

      const matchesLocation =
        filters.location === "Semua Lokasi" ||
        job.location === filters.location;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesExperience &&
        matchesLocation
      );
    });
  }, [filters]);

  const featuredJobs = filteredJobs.filter((job) => job.featured);
  const regularJobs = filteredJobs.filter((job) => !job.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border bg-card px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                <span>Lebih dari 10.000 lowongan tersedia di </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
                Temukan karir impianmu
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                Temukan ribuan lowongan kerja dari perusahaan teknologi terbaik
                di Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Cari, filter,
                dan lamar pekerjaan yang sesuai dengan skill dan aspirasimu.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/jobs">
                    Lihat Semua Lowongan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/dashboard/post">Pasang Lowongan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <StatsBanner />
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="px-4 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Lowongan Terbaru
              </h2>
              <p className="mt-2 text-muted-foreground">
                Temukan peluang terbaru dari perusahaan terbaik
              </p>
            </div>

            <SearchFilters filters={filters} onFilterChange={setFilters} />

            <div className="mt-8 space-y-8">
              {featuredJobs.length > 0 && (
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Lowongan Unggulan
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {featuredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                {featuredJobs.length > 0 && (
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Semua Lowongan
                  </h3>
                )}
                {regularJobs.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {regularJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
                    <p className="text-muted-foreground">
                      Tidak ada lowongan yang sesuai dengan kriteria. Coba
                      sesuaikan filter pencarian.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/jobs">
                  Lihat Semua Lowongan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
