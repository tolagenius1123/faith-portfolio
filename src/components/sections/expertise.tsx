import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeader } from "@/components/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { expertise } from "@/lib/content"

export function Expertise() {
  return (
    <section id="expertise" className="bg-blush/40 px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <SectionHeader
          label="Expertise"
          title="The disciplines behind the work."
          className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start"
        />

        <FadeIn className="lg:col-span-7">
          <Accordion defaultValue={[expertise[0].title]}>
            {expertise.map((area, index) => (
              <AccordionItem key={area.title} value={area.title} className="not-last:border-b-0">
                <AccordionTrigger className="group/item items-center gap-6 py-6 hover:no-underline **:data-[slot=accordion-trigger-icon]:size-8 **:data-[slot=accordion-trigger-icon]:text-oxblood">
                  <span className="text-eyebrow w-8 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[clamp(2rem,4.5vw,4.5rem)] transition-[color,translate] duration-500 group-hover/item:translate-x-3 group-hover/item:text-oxblood group-aria-expanded/accordion-trigger:italic group-aria-expanded/accordion-trigger:text-oxblood">
                    {area.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3 pt-2 pb-8 pl-14">
                    {area.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="h-10 border-ink/20 px-5 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
