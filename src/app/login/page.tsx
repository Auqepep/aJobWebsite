"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate auth
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-bold text-primary-foreground">J*B</span>
            </div>
            <CardTitle className="text-2xl">Selamat Datang</CardTitle>
            <CardDescription>Masuk ke akun Anda untuk melanjutkan</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="jobseeker" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="jobseeker">Pencari Kerja</TabsTrigger>
                <TabsTrigger value="employer">Perusahaan</TabsTrigger>
              </TabsList>

              <TabsContent value="jobseeker">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-jobseeker">Email</Label>
                    <Input id="email-jobseeker" type="email" placeholder="email@contoh.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-jobseeker">Kata Sandi</Label>
                      <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                        Lupa kata sandi?
                      </Link>
                    </div>
                    <Input id="password-jobseeker" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sedang masuk..." : "Masuk"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="employer">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-employer">Email Perusahaan</Label>
                    <Input id="email-employer" type="email" placeholder="anda@perusahaan.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-employer">Kata Sandi</Label>
                      <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                        Lupa kata sandi?
                      </Link>
                    </div>
                    <Input id="password-employer" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sedang masuk..." : "Masuk"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Daftar
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
