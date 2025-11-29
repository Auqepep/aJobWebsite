import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J*B - Temukan Karir Impianmu",
  description:
    "Temukan ribuan lowongan kerja dari perusahaan terbaik di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
  keywords: [
    "lowongan kerja",
    "karir",
    "pekerjaan",
    "jakarta",
    "",
    "job board",
  ],
  authors: [{ name: "J*B" }],
  openGraph: {
    title: "J*B - Temukan Karir Impianmu",
    description: "Temukan ribuan lowongan kerja dari perusahaan terbaik di .",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
