import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobDetailContent } from "@/components/job-detail-content"
import { mockJobs } from "@/lib/data"
import type { Metadata } from "next"

interface JobPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { id } = await params
  const job = mockJobs.find((j) => j.id === id)

  if (!job) {
    return {
      title: "Job Not Found | JobBoard",
    }
  }

  return {
    title: `${job.title} at ${job.company} | JobBoard`,
    description: job.description,
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.description,
    },
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params
  const job = mockJobs.find((j) => j.id === id)

  if (!job) {
    notFound()
  }

  const similarJobs = mockJobs
    .filter((j) => j.id !== job.id && (j.category === job.category || j.company === job.company))
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <JobDetailContent job={job} similarJobs={similarJobs} />
      <Footer />
    </div>
  )
}
