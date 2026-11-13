import Link from "next/link"
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import { FadeIn } from "@/components/motion/fade-in"
import { ParallaxImage } from "@/components/motion/parallax-image"
import { RevealText } from "@/components/motion/reveal-text"
import { RollLink } from "@/components/roll-link"
import { SectionLabel } from "@/components/section-header"
import { StatList } from "@/components/stat-list"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/content"

type Project = (typeof projects)[number]

const formatIndex = (index: number) => String(index + 1).padStart(2, "0")

type CaseStudyProps = {
  project: Project
  index: number
  nextProject: Project
}

export function CaseStudy({ project, index, nextProject }: CaseStudyProps) {
  return (
    <main>
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-24">
        <FadeIn intro className="flex flex-wrap items-center justify-between gap-4">
          <RollLink href="#work" icon={<ArrowLeftIcon className="mr-2 size-4" />} className="text-sm">
            All selected work
          </RollLink>
          <SectionLabel label={`${formatIndex(index)} / ${project.client} / ${project.sector}`} />
        </FadeIn>

        <RevealText as="h1" split="words" intro className="font-display text-giant mt-16 max-w-[16ch] md:mt-24">
          {project.title}
        </RevealText>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-8 lg:col-span-6">
            <RevealText intro delay={0.3} className="text-xl leading-snug md:text-2xl">
              {project.summary}
            </RevealText>
            <FadeIn intro delay={0.5} className="flex flex-wrap items-center gap-4">
              <Badge variant="secondary" className="h-8 px-4 text-sm">
                {project.role}
              </Badge>
              {"link" in project && (
                <Button
                  variant="link"
                  nativeButton={false}
                  render={<a href={project.link.href} target="_blank" rel="noreferrer" />}
                  className="px-0"
                >
                  {project.link.label}
                  <ArrowUpRightIcon />
                </Button>
              )}
            </FadeIn>
          </div>

          <FadeIn intro delay={0.6} className="lg:col-span-5 lg:col-start-8">
            <StatList stats={project.facts} />
          </FadeIn>
        </div>
      </section>

      <div className="px-5 md:px-10">
        <ParallaxImage
          intro
          priority
          src={project.image}
          alt={`${project.title} project visual`}
          sizes="(min-width: 768px) 90vw, 100vw"
          className={cn("aspect-[4/3] rounded-[2rem] md:aspect-[16/10]", project.surface)}
          imageClassName="object-contain p-4 md:p-16"
          depth={6}
        />
      </div>

      <section className="px-5 py-28 md:px-10 md:py-40">
        <ol className="flex flex-col gap-20 md:gap-28">
          {project.sections.map((section, sectionIndex) => (
            <li key={section.heading}>
              <FadeIn className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="flex flex-col gap-4 md:col-span-4">
                  <span className="text-eyebrow text-oxblood">{formatIndex(sectionIndex)}</span>
                  <h2 className="font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-tight">{section.heading}</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
                  {section.body}
                </p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </section>

      <Link
        href={`/work/${nextProject.slug}`}
        data-cursor="Next"
        className="group flex flex-col gap-10 bg-oxblood px-5 py-24 text-paper md:px-10 md:py-32"
      >
        <SectionLabel label="Next case study" />
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-eyebrow opacity-70">
              {nextProject.client} · {nextProject.sector}
            </p>
            <p className="font-display text-giant max-w-[14ch] transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:translate-x-4 group-hover:italic">
              {nextProject.title}
            </p>
          </div>
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-paper text-oxblood transition-transform duration-700 group-hover:rotate-45 md:size-24">
            <ArrowUpRightIcon className="size-6 md:size-8" />
          </span>
        </div>
      </Link>
    </main>
  )
}
