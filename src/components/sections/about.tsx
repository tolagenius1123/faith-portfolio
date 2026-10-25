import { FadeIn } from "@/components/motion/fade-in"
import { ParallaxImage } from "@/components/motion/parallax-image"
import { ScrubText } from "@/components/motion/scrub-text"
import { SectionLabel } from "@/components/section-header"
import { StatList } from "@/components/stat-list"
import { Badge } from "@/components/ui/badge"
import { about, education, stats } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="px-5 py-28 md:px-10 md:py-40">
      <SectionLabel label="About me" className="mb-10" />

      <ScrubText className="font-display max-w-[22ch] text-[clamp(2.25rem,5.2vw,5.5rem)] leading-[1.02]">
        {about.statement}
      </ScrubText>

      <div className="mt-24 grid gap-14 md:mt-36 md:grid-cols-12 md:gap-10">
        <ParallaxImage
          src="/images/faith-full.jpg"
          alt="Faith standing in a black dress"
          sizes="(min-width: 768px) 40vw, 100vw"
          className="aspect-[3/4] rounded-[2rem] md:col-span-5"
          imageClassName="object-top"
        />

        <div className="flex flex-col justify-between gap-16 md:col-span-6 md:col-start-7">
          <FadeIn stagger className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Badge variant="secondary" className="h-auto px-4 py-2 text-sm whitespace-normal">
              {education}
            </Badge>
          </FadeIn>

          <StatList stats={stats} />
        </div>
      </div>
    </section>
  )
}
