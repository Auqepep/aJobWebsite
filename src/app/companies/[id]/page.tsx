import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockCompanies, mockJobs } from "@/lib/data";
import {
  MapPin,
  Users,
  Globe,
  Calendar,
  Building2,
  ArrowLeft,
  Briefcase,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const company = mockCompanies.find((c) => c.id === id);

  if (!company) {
    return { title: "Perusahaan Tidak Ditemukan | J*B" };
  }

  return {
    title: `${company.name} - Lowongan Kerja | J*B`,
    description: company.description,
  };
}

function formatSalary(min: number, max: number) {
  const formatNum = (n: number) => {
    if (n >= 1000000) return `${n / 1000000}jt`;
    if (n >= 1000) return `${n / 1000}rb`;
    return n.toString();
  };
  return `Rp ${formatNum(min)} - ${formatNum(max)}`;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hari ini";
  if (diffDays === 1) return "Kemarin";
  if (diffDays < 7) return `${diffDays} hari lalu`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;
  return `${Math.floor(diffDays / 30)} bulan lalu`;
}

export default async function CompanyDetailPage({ params }: Props) {
  const { id } = params;
  const company = mockCompanies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  // Get jobs for this company
  const companyJobs = mockJobs.filter((j) => j.company === company.name);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href="/companies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Perusahaan
            </Link>
          </Button>

          {/* Company header */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-secondary overflow-hidden">
                  {company.logo ? (
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Building2 className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-bold md:text-3xl">
                    {company.name}
                  </h1>
                  <p className="mt-2 text-muted-foreground">
                    {company.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {company.size} karyawan
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {company.industry}
                    </span>
                    {company.founded && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Didirikan {company.founded}
                      </span>
                    )}
                  </div>

                  {company.website && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 bg-transparent"
                      asChild
                    >
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Kunjungi Website
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jobs section */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              Lowongan di {company.name} ({companyJobs.length})
            </h2>

            {companyJobs.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 font-semibold">Belum ada lowongan</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Perusahaan ini belum memposting lowongan. Cek kembali nanti.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {companyJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="group transition-all hover:border-primary/50 hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <div>
                              <Link href={`/jobs/${job.id}`}>
                                <h3 className="font-semibold group-hover:text-primary transition-colors">
                                  {job.title}
                                </h3>
                              </Link>
                              <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Briefcase className="h-4 w-4" />
                                  {job.type}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="h-4 w-4" />
                                  {job.salary ? formatSalary(job.salary.min, job.salary.max) : "Nego"}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {formatDate(job.postedAt)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {job.tags.slice(0, 4).map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button asChild>
                          <Link href={`/jobs/${job.id}`}>Lihat Detail</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
