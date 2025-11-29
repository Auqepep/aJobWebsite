import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  J*B
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground"></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Temukan karir impianmu.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Untuk Pencari Kerja
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cari Lowongan
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Perusahaan
                </Link>
              </li>
              <li>
                <Link
                  href="/saved"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Lowongan Tersimpan
                </Link>
              </li>
              <li>
                <Link
                  href="/alerts"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Notifikasi Lowongan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Untuk Perusahaan
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/post"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Pasang Lowongan
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Panduan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Tentang Kami
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
