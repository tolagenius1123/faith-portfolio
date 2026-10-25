"use client"

import { useRef, useState } from "react"
import { MenuIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { useSite } from "@/components/providers/site-provider"
import { RollLink } from "@/components/roll-link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { contact, navLinks } from "@/lib/content"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null)
  const { introDone } = useSite()
  const [menuOpen, setMenuOpen] = useState(false)

  useGSAP(
    () => {
      if (!introDone) return
      const header = ref.current
      gsap.from(header, { yPercent: -120, duration: 1.2, ease: "expo.out", delay: 0.6 })

      ScrollTrigger.create({
        start: "top top-=120",
        end: "max",
        onUpdate: (self) => {
          gsap.to(header, { yPercent: self.direction === 1 ? -120 : 0, duration: 0.6, ease: "expo.out", overwrite: "auto" })
        },
        onToggle: (self) => header?.toggleAttribute("data-scrolled", self.isActive),
      })
    },
    { dependencies: [introDone] }
  )

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 px-5 py-4 transition-colors duration-500 data-scrolled:bg-paper/80 data-scrolled:backdrop-blur-md md:px-10"
    >
      <nav className="flex items-center justify-between">
        <RollLink href="#top">
          <Logo />
        </RollLink>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <RollLink href={link.href}>{link.label}</RollLink>
            </li>
          ))}
        </ul>

        <Button
          nativeButton={false}
          render={<a href={contact.cv} target="_blank" rel="noreferrer" />}
          className="hidden h-10 rounded-full px-5 md:inline-flex"
        >
          Download CV
        </Button>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Open menu" />}>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="top" className="bg-oxblood p-6 pt-16 text-paper">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <RollLink
                    href={link.href}
                    onNavigate={() => setMenuOpen(false)}
                    className="font-display text-5xl"
                  >
                    {link.label}
                  </RollLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
