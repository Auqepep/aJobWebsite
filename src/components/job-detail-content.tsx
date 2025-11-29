"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import type { Job } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { JobCard } from "@/components/job-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Building2,
  ArrowLeft,
  Bookmark,
  Share2,
  CheckCircle2,
  Globe,
  Users,
  Calendar,
} from "lucide-react"

interface JobDetailContentProps {
  job: Job
  similarJobs: Job[]
}

export function JobDetailContent({ job, similarJobs }: JobDetailContentProps) {
  const [isApplying, setIsApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [saved, setSaved] = useState(false)


  const formatSalary = (salary?: Job["salary"]) => {
    if (!salary) return "Salary not disclosed"
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: salary.currency,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    setIsApplying(false)
    setApplied(true)
  }

  return (
    <main className="flex-1 px-4 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/jobs"
          className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all jobs
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Building2 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <p className="mt-1 text-lg text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSaved(!saved)}
                    className={saved ? "text-accent" : ""}
                  >
                    <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {formatSalary(job.salary)}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4 capitalize" />
                  {job.type.replace("-", " ")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Posted {formatDate(job.postedAt)}
                </span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="capitalize">
                  {job.type.replace("-", " ")}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {job.experience} level
                </Badge>
                <Badge variant="outline">{job.category}</Badge>
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-secondary/50">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold">About this role</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{job.description}</p>
              </div>

              <Separator className="my-6" />

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold">Requirements</h2>
                <ul className="mt-4 space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator className="my-6" />

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold">Benefits</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold">Similar Jobs</h2>
                <div className="grid gap-4">
                  {similarJobs.map((similarJob) => (
                    <JobCard key={similarJob.id} job={similarJob} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardContent className="p-6">
                {applied ? (
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mt-4 font-semibold">Application Submitted!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Your application has been sent to {job.company}. Good luck!
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold">Apply for this job</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Join {job.company} and help build amazing products.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mt-4 w-full" size="lg">
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Fill out the form below to submit your application to {job.company}.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleApply} className="mt-4 space-y-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Doe" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn Profile</Label>
                            <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="portfolio">Portfolio / Website</Label>
                            <Input id="portfolio" type="url" placeholder="https://..." />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="coverLetter">Cover Letter</Label>
                            <Textarea
                              id="coverLetter"
                              placeholder="Tell us why you're a great fit for this role..."
                              rows={4}
                            />
                          </div>
                          <div className="flex gap-3 pt-4">
                            <Button type="submit" className="flex-1">
                              Submit Application
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Company Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <Building2 className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.category}</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="h-4 w-4 shrink-0" />
                    <span>51-200 employees</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="h-4 w-4 shrink-0" />
                    <span>company.example.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>Founded 2015</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={`/companies/${job.companyId}`}>View Company Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Job Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="capitalize font-medium">{job.experience} Level</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Job Type</span>
                  <span className="capitalize font-medium">{job.type.replace("-", " ")}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{job.category}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Salary</span>
                  <span className="font-medium">{formatSalary(job.salary)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posted</span>
                  <span className="font-medium">{formatDate(job.postedAt)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
