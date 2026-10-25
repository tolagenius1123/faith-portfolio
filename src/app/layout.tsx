import type { Metadata } from "next"
import { Fraunces, Instrument_Sans } from "next/font/google"

import { Cursor } from "@/components/cursor"
import { Grain } from "@/components/grain"
import { Preloader } from "@/components/preloader"
import { SiteProvider } from "@/components/providers/site-provider"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
})

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Okpe Faith Oloh | Brand Communications and Customer Experience",
  description:
    "Okpe Faith Oloh helps brands communicate with clarity and treat every customer as a relationship worth keeping. Marketing, brand communications and customer experience, based in Lagos.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable} antialiased`}>
      <body>
        <noscript>
          <style>{"[data-preloader]{display:none}"}</style>
        </noscript>
        <SiteProvider>
          <Preloader />
          <SiteHeader />
          {children}
          <Cursor />
          <Grain />
        </SiteProvider>
      </body>
    </html>
  )
}
