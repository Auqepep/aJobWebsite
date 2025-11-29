import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Heart, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Tentang J*B
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Menghubungkan talenta terbaik Indonesia dengan perusahaan-perusahaan
              yang sedang berkembang pesat
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Misi Kami</h2>
                <p className="mt-4 text-muted-foreground">
                  J*B hadir untuk mempermudah pencarian kerja di Indonesia. Kami
                  percaya bahwa setiap orang berhak mendapatkan pekerjaan yang sesuai
                  dengan passion dan keahlian mereka. Dengan teknologi dan platform
                  yang intuitif, kami membantu menghubungkan pencari kerja dengan
                  perusahaan yang tepat.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Kami berkomitmen untuk menciptakan ekosistem rekrutmen yang
                  transparan, efisien, dan memberikan pengalaman terbaik bagi semua
                  pihak.
                </p>
              </div>

              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Visi Kami</h2>
                <p className="mt-4 text-muted-foreground">
                  Menjadi platform pencarian kerja terdepan di Indonesia yang
                  memberdayakan jutaan pencari kerja untuk menemukan karir impian
                  mereka dan membantu perusahaan membangun tim yang solid.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Kami ingin menciptakan masa depan di mana proses rekrutmen tidak
                  lagi menjadi hambatan, melainkan menjadi jembatan yang
                  menghubungkan talenta dengan kesempatan yang tepat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Nilai-Nilai Kami</h2>
              <p className="mt-4 text-muted-foreground">
                Prinsip yang memandu setiap keputusan dan tindakan kami
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Transparansi</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Kami percaya pada keterbukaan informasi. Semua informasi gaji,
                    benefit, dan detail pekerjaan ditampilkan dengan jelas tanpa
                    ada yang disembunyikan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Inklusivitas</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Setiap orang berhak mendapat kesempatan yang sama. Kami
                    mendukung keberagaman dan menciptakan lingkungan yang
                    inklusif untuk semua.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Inovasi</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Kami terus berinovasi untuk memberikan pengalaman terbaik
                    melalui teknologi dan fitur-fitur yang mempermudah proses
                    rekrutmen.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Pertumbuhan</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Kami tidak hanya menghubungkan orang dengan pekerjaan, tapi
                    juga membantu mereka berkembang dan mencapai potensi penuh
                    mereka.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Integritas</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Kami beroperasi dengan standar etika tertinggi dan selalu
                    menjaga kepercayaan yang diberikan pengguna kepada kami.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Fokus Pengguna</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Kebutuhan pengguna adalah prioritas utama kami. Setiap fitur
                    dan keputusan dibuat dengan mempertimbangkan pengalaman
                    pengguna.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold">J*B dalam Angka</h2>
              <p className="mt-4 text-muted-foreground">
                Dampak yang telah kami ciptakan untuk komunitas kami
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Lowongan Aktif
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Perusahaan Partner
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Pencari Kerja
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Tingkat Kepuasan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-linear-to-b from-background to-primary/5 px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Siap Memulai?</h2>
            <p className="mt-4 text-muted-foreground">
              Bergabunglah dengan ribuan pencari kerja dan perusahaan yang telah
              menemukan kesuksesan bersama J*B
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/jobs">Cari Lowongan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard/post">Pasang Lowongan</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}