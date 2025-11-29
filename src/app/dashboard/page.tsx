"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { mockJobs } from "@/lib/data"
import {
  Plus,
  Briefcase,
  Users,
  Eye,
  TrendingUp,
  MoreHorizontal,
  Pencil,
  Pause,
  Trash2,
  Play,
  MapPin,
  Clock,
} from "lucide-react"

// Mock dashboard data
const dashboardStats = {
  activeJobs: 4,
  totalApplications: 127,
  viewsThisMonth: 3420,
  conversionRate: 3.7,
}

const mockApplications = [
  {
    id: "1",
    name: "Sari Dewi",
    email: "sari@contoh.com",
    jobTitle: "Senior Frontend Engineer",
    appliedAt: "2025-01-26",
    status: "new",
  },
  {
    id: "2",
    name: "Budi Santoso",
    email: "budi@contoh.com",
    jobTitle: "Product Designer",
    appliedAt: "2025-01-25",
    status: "reviewing",
  },
  {
    id: "3",
    name: "Rina Kartika",
    email: "rina@contoh.com",
    jobTitle: "Senior Frontend Engineer",
    appliedAt: "2025-01-24",
    status: "interviewed",
  },
  {
    id: "4",
    name: "Ahmad Wijaya",
    email: "ahmad@contoh.com",
    jobTitle: "DevOps Engineer",
    appliedAt: "2025-01-23",
    status: "new",
  },
  {
    id: "5",
    name: "Maya Putri",
    email: "maya@contoh.com",
    jobTitle: "Product Designer",
    appliedAt: "2025-01-22",
    status: "rejected",
  },
]

const companyJobs = mockJobs.slice(0, 4).map((job, index) => ({
  ...job,
  status: index === 0 ? "active" : index === 1 ? "active" : index === 2 ? "paused" : "active",
  applications: Math.floor(Math.random() * 50) + 10,
  views: Math.floor(Math.random() * 500) + 100,
}))

export default function DashboardPage() {
  const [jobs, setJobs] = useState(companyJobs)

  const toggleJobStatus = (jobId: string) => {
    setJobs(
      jobs.map((job) => (job.id === jobId ? { ...job, status: job.status === "active" ? "paused" : "active" } : job)),
    )
  }

  const deleteJob = (jobId: string) => {
    setJobs(jobs.filter((job) => job.id !== jobId))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-chart-2/10 text-chart-2 border-chart-2/30">Aktif</Badge>
      case "paused":
        return <Badge variant="secondary">Dijeda</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getApplicationStatus = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-primary/10 text-primary border-primary/30">Baru</Badge>
      case "reviewing":
        return <Badge variant="secondary">Ditinjau</Badge>
      case "interviewed":
        return <Badge className="bg-chart-2/10 text-chart-2 border-chart-2/30">Interview</Badge>
      case "rejected":
        return <Badge variant="destructive">Ditolak</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="mt-2 text-muted-foreground">Kelola lowongan dan pantau lamaran</p>
            </div>
            <Button asChild>
              <Link href="/dashboard/post">
                <Plus className="mr-2 h-4 w-4" />
                Pasang Lowongan Baru
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lowongan Aktif</p>
                  <p className="text-2xl font-bold text-foreground">{dashboardStats.activeJobs}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-2/10">
                  <Users className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lamaran</p>
                  <p className="text-2xl font-bold text-foreground">{dashboardStats.totalApplications}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-3/10">
                  <Eye className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dilihat Bulan Ini</p>
                  <p className="text-2xl font-bold text-foreground">{dashboardStats.viewsThisMonth.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chart-4/10">
                  <TrendingUp className="h-6 w-6 text-chart-4" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tingkat Konversi</p>
                  <p className="text-2xl font-bold text-foreground">{dashboardStats.conversionRate}%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="jobs" className="space-y-6">
            <TabsList>
              <TabsTrigger value="jobs">Lowongan Saya</TabsTrigger>
              <TabsTrigger value="applications">Lamaran</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Lowongan yang Dipasang</CardTitle>
                </CardHeader>
                <CardContent>
                  {jobs.length > 0 ? (
                    <div className="divide-y divide-border">
                      {jobs.map((job) => (
                        <div key={job.id} className="flex items-center justify-between gap-4 py-4">
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-3">
                              <Link href={`/jobs/${job.id}`} className="font-medium text-foreground hover:text-primary">
                                {job.title}
                              </Link>
                              {getStatusBadge(job.status)}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {job.applications} lamaran
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {job.views} dilihat
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Dipasang {new Date(job.postedAt).toLocaleDateString("id-ID")}
                              </span>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/dashboard/edit/${job.id}`}>
                                  <Pencil className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => toggleJobStatus(job.id)}>
                                {job.status === "active" ? (
                                  <>
                                    <Pause className="mr-2 h-4 w-4" />
                                    Jeda
                                  </>
                                ) : (
                                  <>
                                    <Play className="mr-2 h-4 w-4" />
                                    Aktifkan
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive" onClick={() => deleteJob(job.id)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Hapus
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 font-semibold text-foreground">Belum ada lowongan</h3>
                      <p className="mt-2 text-sm text-muted-foreground">Mulai dengan memasang lowongan pertama Anda.</p>
                      <Button className="mt-4" asChild>
                        <Link href="/dashboard/post">
                          <Plus className="mr-2 h-4 w-4" />
                          Pasang Lowongan
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Lamaran Terbaru</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border">
                    {mockApplications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between gap-4 py-4">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                              {application.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{application.name}</p>
                              <p className="text-sm text-muted-foreground">{application.email}</p>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span>
                              Melamar: <span className="text-foreground">{application.jobTitle}</span>
                            </span>
                            <span>•</span>
                            <span>{new Date(application.appliedAt).toLocaleDateString("id-ID")}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getApplicationStatus(application.status)}
                          <Button variant="outline" size="sm">
                            Lihat
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
