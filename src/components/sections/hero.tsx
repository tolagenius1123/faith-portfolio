"use client"

import { useRef } from "react"
import { ArrowDownIcon } from "lucide-react"

import { FadeIn } from "@/components/motion/fade-in"
import { ParallaxImage } from "@/components/motion/parallax-image"
import { RevealText } from "@/components/motion/reveal-text"
import { Badge } from "@/components/ui/badge"
import { hero } from "@/lib/content"
import { gsap, useGSAP } from "@/lib/gsap"

const nameLines = [
  { word: "Okpe", className: "" },
  { word: "Faith", className: "pl-[10vw] italic text-oxblood" },
  { word: "Oloh", className: "pl-[3vw]" },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const scrub = { trigger: ref.current, start: "top top", end: "bottom top", scrub: true }
      gsap.utils.toArray<HTMLElement>("[data-hero-line]").forEach((line, index) => {
        gsap.to(line, { xPercent: index % 2 === 0 ? -12 : 12, ease: "none", scrollTrigger: scrub })
      })
      gsap.to("[data-hero-portrait]", { yPercent: -18, ease: "none", scrollTrigger: scrub })
    },
    { scope: ref }
  )

  return (
    <section id="top" ref={ref} className="relative overflow-hidden px-5 pt-28 pb-10 md:px-10 md:pt-32">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <FadeIn intro>
          <Badge className="h-8 gap-2.5 px-4 text-xs tracking-[0.18em] uppercase">
            <span className="relative flex size-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-paper" />
              <span className="relative size-2 rounded-full bg-paper" />
            </span>
            Open to work
          </Badge>
        </FadeIn>
        <FadeIn intro delay={0.1} className="text-eyebrow text-muted-foreground">
          Marketing · Brand communications · Customer experience
        </FadeIn>
      </div>

      <div className="relative mt-10 md:mt-6">
        <h1 aria-label="Okpe Faith Oloh" className="font-display text-mega relative z-10">
          {nameLines.map((line) => (
            <RevealText
              key={line.word}
              as="span"
              split="chars"
              intro
              data-hero-line
              className={`block w-fit pb-[0.06em] ${line.className}`}
            >
              {line.word}
            </RevealText>
          ))}
        </h1>

        <div
          data-hero-portrait
          className="mx-auto mt-10 w-[72vw] md:absolute md:top-[4vw] md:right-[6vw] md:mt-0 md:w-[26vw]"
        >
          <ParallaxImage
            intro
            priority
            src="/images/faith-portrait.jpg"
            alt="Portrait of Okpe Faith Oloh"
            sizes="(min-width: 768px) 26vw, 72vw"
            className="aspect-[4/5] rounded-t-full"
            imageClassName="object-top"
          />
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-10 md:mt-20 md:flex-row md:items-end md:justify-between">
        <RevealText intro delay={0.4} className="max-w-xl text-xl leading-snug md:text-2xl">
          {hero.tagline}
        </RevealText>

        <FadeIn intro stagger delay={0.6} className="flex flex-col gap-1 text-sm">
          <p className="text-eyebrow mb-2 text-muted-foreground">Open to roles as</p>
          {hero.openTo.map((role) => (
            <p key={role}>{role}</p>
          ))}
        </FadeIn>

        <FadeIn intro delay={0.8} className="hidden items-center gap-3 text-sm md:flex">
          <span className="flex size-12 items-center justify-center rounded-full bg-ink text-paper">
            <ArrowDownIcon className="size-4 animate-bounce" />
          </span>
          Scroll to explore
        </FadeIn>
      </div>
    </section>
  )
}
