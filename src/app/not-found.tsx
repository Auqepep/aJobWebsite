import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
