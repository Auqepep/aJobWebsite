"use client"

import type React from "react"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { mockJobs, categories, jobTypes, experienceLevels, locations } from "@/lib/data"
import { ArrowLeft, X, Plus, CheckCircle2 } from "lucide-react"

interface EditJobPageProps {
  params: Promise<{ id: string }>
}

export default function EditJobPage({ params }: EditJobPageProps) {
  const { id } = use(params)
  const router = useRouter()
  const job = mockJobs.find((j) => j.id === id)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [saved, setSaved] = useState(false)
  const [requirements, setRequirements] = useState<string[]>(job?.requirements || [""])
  const [benefits, setBenefits] = useState<string[]>(job?.benefits || [""])
  const [tags, setTags] = useState<string[]>(job?.tags || [])
  const [tagInput, setTagInput] = useState("")

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Job not found</h1>
            <Button className="mt-4" asChild>
              <Link href="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const addRequirement = () => setRequirements([...requirements, ""])
  const removeRequirement = (index: number) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter((_, i) => i !== index))
    }
  }
  const updateRequirement = (index: number, value: string) => {
    const updated = [...requirements]
    updated[index] = value
    setRequirements(updated)
  }

  const addBenefit = () => setBenefits([...benefits, ""])
  const removeBenefit = (index: number) => {
    if (benefits.length > 1) {
      setBenefits(benefits.filter((_, i) => i !== index))
    }
  }
  const updateBenefit = (index: number, value: string) => {
    const updated = [...benefits]
    updated[index] = value
    setBenefits(updated)
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 10) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }
  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/dashboard"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to dashboard
          </Link>

          {saved && (
            <div className="mb-6 flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 p-4">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Changes saved successfully!</span>
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Edit Job</CardTitle>
              <CardDescription>Update the details for this job listing.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input id="title" defaultValue={job.title} required />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select defaultValue={job.category}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Job Type *</Label>
                      <Select defaultValue={job.type}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.slice(1).map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(" ", "-")}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select defaultValue={job.experience}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {experienceLevels.slice(1).map((level) => (
                            <SelectItem key={level} value={level.toLowerCase().replace(" level", "")}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Select defaultValue={job.location}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.slice(1).map((loc) => (
                            <SelectItem key={loc} value={loc}>
                              {loc}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Salary */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Compensation</h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="salaryMin">Minimum Salary</Label>
                      <Input id="salaryMin" type="number" defaultValue={job.salary?.min} min={0} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salaryMax">Maximum Salary</Label>
                      <Input id="salaryMax" type="number" defaultValue={job.salary?.max} min={0} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue={job.salary?.currency || "USD"}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                          <SelectItem value="CAD">CAD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Job Description</h3>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea id="description" defaultValue={job.description} rows={6} required />
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Requirements</h3>

                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={req}
                          onChange={(e) => updateRequirement(index, e.target.value)}
                          placeholder={`Requirement ${index + 1}`}
                        />
                        {requirements.length > 1 && (
                          <Button type="button" variant="ghost" size="icon" onClick={() => removeRequirement(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={addRequirement}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Requirement
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Benefits</h3>

                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={benefit}
                          onChange={(e) => updateBenefit(index, e.target.value)}
                          placeholder={`Benefit ${index + 1}`}
                        />
                        {benefits.length > 1 && (
                          <Button type="button" variant="ghost" size="icon" onClick={() => removeBenefit(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={addBenefit}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Benefit
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tags</h3>

                  <div className="flex gap-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      placeholder="e.g. React, TypeScript"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag()
                        }
                      }}
                    />
                    <Button type="button" variant="outline" onClick={addTag}>
                      Add
                    </Button>
                  </div>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 rounded-full p-0.5 hover:bg-muted-foreground/20"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button type="button" variant="outline" asChild>
                    <Link href="/dashboard">Cancel</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
