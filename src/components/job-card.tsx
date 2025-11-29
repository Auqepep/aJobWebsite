import Link from "next/link"
import type { Job } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Banknote, Building2, Star } from "lucide-react"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const formatSalary = (salary?: Job["salary"]) => {
    if (!salary) return "Gaji tidak ditampilkan"
    if (salary.currency === "IDR") {
      const formatIDR = (num: number) => {
        if (num >= 1000000) {
          return `${(num / 1000000).toFixed(0)}jt`
        }
        return new Intl.NumberFormat("id-ID").format(num)
      }
      return `Rp ${formatIDR(salary.min)} - ${formatIDR(salary.max)}`
    }
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: salary.currency,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    if (diff === 0) return "Hari ini"
    if (diff === 1) return "Kemarin"
    if (diff < 7) return `${diff} hari lalu`
    if (diff < 30) return `${Math.floor(diff / 7)} minggu lalu`
    return `${Math.floor(diff / 30)} bulan lalu`
  }

  return (
    <Link href={`/jobs/${job.id}`}>
      <Card className="group transition-all hover:border-primary/40 hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <Building2 className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-semibold text-foreground group-hover:text-primary">{job.title}</h3>
                  {job.featured && <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Banknote className="h-4 w-4" />
              {formatSalary(job.salary)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {formatDate(job.postedAt)}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="bg-primary text-primary border-primary/20 capitalize">
              {job.type.replace("-", " ")}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {job.experience}
            </Badge>
            {job.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
