import type React from "react"
import type { Metadata } from "next"
import { M_PLUS_Rounded_1c } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
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
      <body className={`${mPlusRounded.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
