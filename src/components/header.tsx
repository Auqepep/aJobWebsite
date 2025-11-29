"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <span className="text-lg font-bold text-primary-foreground">
              J*B
            </span>
          </div>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link
            href="/jobs"
            aria-current={isActive("/jobs") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/jobs") ? "text-primary" : "text-muted-foreground"
            } hover:text-primary`}
          >
            Cari Lowongan
          </Link>
          <Link
            href="/companies"
            aria-current={isActive("/companies") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/companies") ? "text-primary" : "text-muted-foreground"
            } hover:text-primary`}
          >
            Perusahaan
          </Link>
          <Link
            href="/dashboard"
            aria-current={isActive("/dashboard") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
            } hover:text-primary`}
          >
            Untuk Perusahaan
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/dashboard/post">Pasang Lowongan</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link
              href="/jobs"
              aria-current={isActive("/jobs") ? "page" : undefined}
              className={`text-sm font-medium ${
                isActive("/jobs") ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Cari Lowongan
            </Link>
            <Link
              href="/companies"
              aria-current={isActive("/companies") ? "page" : undefined}
              className={`text-sm font-medium ${
                isActive("/companies")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Perusahaan
            </Link>
            <Link
              href="/dashboard"
              aria-current={isActive("/dashboard") ? "page" : undefined}
              className={`text-sm font-medium ${
                isActive("/dashboard")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Untuk Perusahaan
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Masuk</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/post">Pasang Lowongan</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}