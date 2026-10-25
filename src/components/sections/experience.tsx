"use client"

import Image from "next/image"
import { useRef, useState } from "react"

import { FadeIn } from "@/components/motion/fade-in"
import { Marquee } from "@/components/motion/marquee"
import { RevealText } from "@/components/motion/reveal-text"
import { SectionHeader, SectionLabel } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { certifications, education, experience } from "@/lib/content"
import { gsap, useGSAP } from "@/lib/gsap"

type Role = (typeof experience)[number]["roles"][number]

function ExperienceRow({ role, onHover }: { role: Role; onHover: (logo: string | null) => void }) {
  return (
    <li
      onPointerEnter={() => onHover(role.logo)}
      onPointerLeave={() => onHover(null)}
      className="group relative isolate overflow-hidden rounded-3xl px-2 py-8 md:px-6"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-3xl bg-oxblood transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100"
      />
      <div className="grid gap-4 transition-colors duration-500 group-hover:text-paper md:grid-cols-12 md:items-baseline">
        <p className="text-eyebrow opacity-70 md:col-span-3">{role.period}</p>
        <div className="flex flex-col gap-2 md:col-span-6">
          <h3 className="font-display text-[clamp(2rem,4vw,3.75rem)] transition-transform duration-500 group-hover:translate-x-3">
            {role.company}
          </h3>
          <p className="text-lg">{role.role}</p>
          <p className="max-w-lg text-sm opacity-70">{role.summary}</p>
        </div>
        <p className="text-eyebrow opacity-70 md:col-span-3 md:text-right">{role.location}</p>
      </div>
    </li>
  )
}

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [activeLogo, setActiveLogo] = useState<string | null>(null)

  useGSAP(
    () => {
      const preview = previewRef.current
      if (!preview || !window.matchMedia("(pointer: fine)").matches) return

      gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0, rotate: -12 })
      const xTo = gsap.quickTo(preview, "x", { duration: 0.8, ease: "power3" })
      const yTo = gsap.quickTo(preview, "y", { duration: 0.8, ease: "power3" })
      const handleMove = (event: PointerEvent) => {
        xTo(event.clientX)
        yTo(event.clientY)
      }
      window.addEventListener("pointermove", handleMove)
      return () => window.removeEventListener("pointermove", handleMove)
    },
    { scope: ref }
  )

  const handleHover = (logo: string | null) => {
    if (logo) setActiveLogo(logo)
    gsap.to(previewRef.current, {
      scale: logo ? 1 : 0,
      rotate: logo ? 6 : -12,
      duration: 0.7,
      ease: "expo.out",
      overwrite: "auto",
    })
  }

  return (
    <section id="experience" ref={ref} className="py-28 md:py-40">
      <div className="px-5 md:px-10">
        <SectionHeader label="Experience" title="A record of dependable delivery." className="mb-20" />

        <div className="flex flex-col gap-16">
          {experience.map((group) => (
            <div key={group.group} className="flex flex-col gap-4">
              <p className="text-eyebrow px-2 text-oxblood md:px-6">{group.group}</p>
              <FadeIn stagger>
                <ul className="flex flex-col gap-2">
                  {group.roles.map((role) => (
                    <ExperienceRow key={role.company} role={role} onHover={handleHover} />
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col gap-6">
          <SectionLabel label="Education" />
          <RevealText as="p" className="font-display max-w-[20ch] text-[clamp(2rem,4.5vw,4.5rem)]">
            {education}
          </RevealText>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {[false, true].map((reverse) => (
          <Marquee key={String(reverse)} reverse={reverse} duration={45}>
            {certifications.map((certification) => (
              <Badge
                key={certification}
                variant={reverse ? "outline" : "default"}
                className="mx-2 h-14 border-ink/20 px-7 text-base"
              >
                {certification}
              </Badge>
            ))}
          </Marquee>
        ))}
      </div>

      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden size-52 overflow-hidden rounded-3xl bg-paper shadow-2xl [@media(pointer:fine)]:block"
      >
        {activeLogo && <Image src={activeLogo} alt="" fill sizes="208px" className="object-contain" />}
      </div>
    </section>
  )
}
