"use client"

import Image from "next/image"
import { useRef } from "react"
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { SectionHeader } from "@/components/section-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/content"
import { gsap, useGSAP } from "@/lib/gsap"

type Project = (typeof projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-project
      className="flex w-full shrink-0 flex-col gap-8 lg:h-[72vh] lg:w-[68vw] lg:flex-row lg:items-center lg:gap-12"
    >
      <div
        data-cursor={project.client}
        className={cn("relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:w-[55%]", project.surface)}
      >
        <Image
          data-project-image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 38vw, 100vw"
          className={cn("scale-[1.15]", project.imageFit === "contain" ? "object-contain p-10" : "object-cover")}
        />
      </div>

      <div className="flex flex-col gap-6 lg:w-[45%]">
        <span className="font-display text-7xl text-blush/60 italic">{String(index + 1).padStart(2, "0")}</span>
        <p className="text-eyebrow opacity-70">
          {project.client} · {project.sector}
        </p>
        <h3 className="font-display text-[clamp(2.25rem,3.6vw,3.75rem)]">{project.title}</h3>
        <p className="max-w-md leading-relaxed text-paper/75">{project.description}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="secondary" className="h-8 px-4 text-sm">
            {project.role}
          </Badge>
          {"link" in project && (
            <Button
              variant="link"
              nativeButton={false}
              render={<a href={project.link.href} target="_blank" rel="noreferrer" />}
              className="px-0 text-paper"
            >
              {project.link.label}
              <ArrowUpRightIcon />
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

export function Work() {
  const ref = useRef<HTMLElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = ref.current?.querySelector<HTMLElement>("[data-work-track]")
        if (!track) return
        const distance = () => track.scrollWidth - window.innerWidth

        const scroll = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            pin: true,
            scrub: 1,
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const current = Math.min(projects.length, Math.floor(self.progress * projects.length) + 1)
              if (counterRef.current) counterRef.current.textContent = String(current).padStart(2, "0")
            },
          },
        })

        gsap.utils.toArray<HTMLElement>("[data-project]").forEach((card) => {
          gsap.fromTo(
            card.querySelector("[data-project-image]"),
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scroll,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          )
        })
      })
    },
    { scope: ref }
  )

  return (
    <section id="work" ref={ref} className="relative overflow-hidden bg-oxblood text-paper">
      <div
        data-work-track
        className="flex flex-col gap-24 px-5 py-28 md:px-10 lg:h-svh lg:w-max lg:flex-row lg:items-center lg:gap-[8vw] lg:py-0 lg:pr-[10vw]"
      >
        <div className="flex shrink-0 flex-col justify-center gap-10 lg:w-[38vw]">
          <SectionHeader label="Selected work" title="Campaigns, clients and coordination." />
          <p className="hidden items-center gap-3 text-sm opacity-70 lg:flex">
            Keep scrolling <ArrowRightIcon className="size-4" />
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <p className="text-eyebrow absolute bottom-8 left-10 hidden gap-2 opacity-70 lg:flex">
        <span ref={counterRef}>01</span>
        <span>/ {String(projects.length).padStart(2, "0")}</span>
      </p>
    </section>
  )
}
