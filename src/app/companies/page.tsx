import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { mockCompanies } from "@/lib/data"
import { MapPin, Users, Briefcase, ArrowRight, Building2 } from "lucide-react"
import Link from "next/link"

export default function CompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Perusahaan</h1>
            <p className="mt-2 text-muted-foreground">Temukan perusahaan top yang sedang merekrut di J*B</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockCompanies.map((company) => (
              <Card key={company.id} className="group transition-all hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-secondary overflow-hidden">
                      {company.logo ? (
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Building2 className="h-7 w-7 text-muted-foreground" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold group-hover:text-primary">{company.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{company.industry}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{company.description}</p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {company.size} karyawan
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="secondary">
                      <Briefcase className="mr-1 h-3 w-3" />
                      {company.jobs.length} lowongan
                    </Badge>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                      <Link href={`/companies/${company.id}`}>
                        Lihat Lowongan
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
