import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "全日本けん玉協会 | Japan Kendama Association",
  description: "全日本けん玉協会の公式ホームページ。けん玉の魅力、歴史、活動内容をご紹介します。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
