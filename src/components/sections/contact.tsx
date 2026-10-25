"use client"

import { useRef } from "react"
import { ArrowUpIcon, ArrowUpRightIcon, FileDownIcon, MailIcon, PhoneIcon } from "lucide-react"

import { LinkedinIcon } from "@/components/icons/linkedin-icon"
import { LagosTime } from "@/components/lagos-time"
import { Magnetic } from "@/components/motion/magnetic"
import { RevealText } from "@/components/motion/reveal-text"
import { useSite } from "@/components/providers/site-provider"
import { RollLink } from "@/components/roll-link"
import { SectionLabel } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { contact } from "@/lib/content"
import { gsap, SplitText, useGSAP } from "@/lib/gsap"

const contactLinks = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon },
  { label: "Phone", value: contact.phone, href: contact.phoneHref, Icon: PhoneIcon },
  { label: "LinkedIn", value: "okpe-faith", href: contact.linkedin, Icon: LinkedinIcon },
  { label: "CV", value: "Download PDF", href: contact.cv, Icon: FileDownIcon },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const { scrollTo } = useSite()

  useGSAP(
    () => {
      SplitText.create("[data-wordmark]", {
        type: "lines,chars",
        mask: "lines",
        linesClass: "split-line",
        onSplit: (self) =>
          gsap.from(self.chars, {
            yPercent: 100,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: { trigger: "[data-wordmark]", start: "top bottom", end: "bottom bottom", scrub: true },
          }),
      })
    },
    { scope: ref }
  )

  return (
    <section id="contact" ref={ref} className="overflow-hidden rounded-t-[3rem] bg-oxblood text-paper">
      <div className="px-5 pt-28 md:px-10 md:pt-40">
        <SectionLabel label="Contact" className="mb-10" />

        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <RevealText as="h2" split="chars" className="font-display text-giant max-w-[11ch]">
            Let&apos;s begin a conversation.
          </RevealText>

          <Magnetic>
            <Button
              data-cursor="Say hi"
              nativeButton={false}
              render={<a href={`mailto:${contact.email}`} />}
              className="size-40 flex-col gap-2 rounded-full bg-paper text-base text-oxblood hover:bg-blush md:size-48"
            >
              <ArrowUpRightIcon className="size-6!" />
              Email me
            </Button>
          </Magnetic>
        </div>

        <p className="mt-12 max-w-lg text-lg leading-relaxed text-paper/75">
          I welcome conversations about roles, projects and collaborations where thoughtful communication and
          dependable execution matter.
        </p>

        <ul className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map(({ label, value, href, Icon }) => (
            <li key={label} className="flex flex-col gap-4">
              <span className="text-eyebrow opacity-60">{label}</span>
              <RollLink
                href={href}
                className="gap-4 text-lg"
                icon={
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-paper/10 transition-colors duration-500 group-hover/roll:bg-paper group-hover/roll:text-oxblood">
                    <Icon className="size-5" />
                  </span>
                }
              >
                {value}
              </RollLink>
            </li>
          ))}
        </ul>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-6 text-sm text-paper/70">
          <span>© 2026 Okpe Faith Oloh</span>
          <LagosTime />
          <Button
            variant="ghost"
            onClick={() => scrollTo(0)}
            className="h-auto gap-2 p-0 text-paper/70 hover:bg-transparent hover:text-paper"
          >
            Back to top <ArrowUpIcon />
          </Button>
        </div>
      </div>

      <p
        data-wordmark
        aria-hidden
        className="font-display pt-10 pb-6 text-center text-[24vw] leading-none text-paper italic"
      >
        Faith.
      </p>
    </section>
  )
}
