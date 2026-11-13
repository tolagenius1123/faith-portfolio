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
  title: "Okpe Faith Oloh | Market Research and Brand Strategy",
  description:
    "Okpe Faith Oloh is a market research and brand strategy professional based in Lagos, working across consumer research, audience insight and strategic communications in real estate and fashion.",
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
