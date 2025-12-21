import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamite Hibachi | Private Event Catering",
  description:
    "Premium hibachi private event catering at your home or venue. Professional chefs, unforgettable entertainment, customizable menus.",
  keywords: ["hibachi", "catering", "private chef", "event catering", "party", "birthday", "corporate event"],
  openGraph: {
    title: "Dynamite Hibachi | Private Event Catering",
    description: "Premium hibachi private event catering at your home or venue.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
