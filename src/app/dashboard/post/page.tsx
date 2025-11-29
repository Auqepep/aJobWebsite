"use client"

import type React from "react"

import { useState } from "react"
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
import { categories, jobTypes, experienceLevels, locations } from "@/lib/data"
import { ArrowLeft, X, Plus, CheckCircle2 } from "lucide-react"

export default function PostJobPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [requirements, setRequirements] = useState<string[]>([""])
  const [benefits, setBenefits] = useState<string[]>([""])
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Job Posted Successfully!</h2>
              <p className="mt-2 text-muted-foreground">
                Your job listing is now live and visible to thousands of job seekers.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard/post">Post Another Job</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
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

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Post a New Job</CardTitle>
              <CardDescription>
                Fill out the form below to create a new job listing. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input id="title" placeholder="e.g. Senior Frontend Engineer" required />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
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
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
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
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
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
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
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
                      <Input id="salaryMin" type="number" placeholder="e.g. 100000" min={0} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salaryMax">Maximum Salary</Label>
                      <Input id="salaryMax" type="number" placeholder="e.g. 150000" min={0} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select defaultValue="USD">
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
                    <Textarea
                      id="description"
                      placeholder="Describe the role, responsibilities, and what makes this opportunity unique..."
                      rows={6}
                      required
                    />
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
                  <p className="text-sm text-muted-foreground">
                    Add relevant skills or keywords to help candidates find this job (max 10)
                  </p>

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
                    {isSubmitting ? "Publishing..." : "Publish Job"}
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
