import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
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
          <div className="text-right">
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
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
