"use client"

import Image from "next/image"
import { useRef } from "react"

import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeader } from "@/components/section-header"
import { StatList } from "@/components/stat-list"
import { shellBeauty } from "@/lib/content"
import { gsap, useGSAP } from "@/lib/gsap"

export function ShellBeauty() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-insights]",
        { rotate: -8, yPercent: 15 },
        {
          rotate: 3,
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      )
    },
    { scope: ref }
  )

  return (
    <section ref={ref} className="overflow-hidden px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-20 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-12 lg:col-span-7">
          <SectionHeader label="Shell Beauty" title="Audience reach, measured." />
          <FadeIn className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            <p>{shellBeauty.intro}</p>
          </FadeIn>
          <StatList stats={shellBeauty.stats} className="max-w-2xl" />
          <p className="max-w-md text-xs text-muted-foreground">{shellBeauty.note}</p>
        </div>

        <div className="flex items-center justify-center lg:col-span-5">
          <div
            data-insights
            className="w-full max-w-lg rounded-[2rem] bg-[#0c0f13] p-6 shadow-2xl shadow-oxblood/30 md:p-8"
          >
            <p className="text-eyebrow mb-6 text-white/50">Instagram insights · 30 days</p>
            <div className="relative aspect-[760/290] w-full">
              <Image
                src="/images/shell-beauty-insights.jpg"
                alt="Instagram insights for Shell Beauty showing 25,347 views and 45 net new followers"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
