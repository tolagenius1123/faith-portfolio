"use client"

import { useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react"

import { useSite } from "@/components/providers/site-provider"
import { gsap, SplitText, useGSAP } from "@/lib/gsap"
import { revealTrigger } from "@/components/motion/reveal-trigger"

type RevealTextProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  split?: "lines" | "words" | "chars"
  delay?: number
  intro?: boolean
} & Omit<ComponentPropsWithoutRef<"div">, "children">

export function RevealText({
  as: Tag = "p",
  children,
  className,
  split = "lines",
  delay = 0,
  intro = false,
  ...props
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const { introDone } = useSite()
  const ready = !intro || introDone

  useGSAP(
    () => {
      if (!ready || !ref.current) return
      const element = ref.current
      SplitText.create(element, {
        type: split === "lines" ? "lines" : `lines,${split}`,
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self[split], {
            yPercent: 115,
            rotate: split === "chars" ? 6 : 0,
            duration: 1.3,
            ease: "expo.out",
            stagger: split === "chars" ? 0.025 : 0.09,
            delay,
            scrollTrigger: revealTrigger(element, intro),
          }),
      })
    },
    { scope: ref, dependencies: [ready] }
  )

  return (
    <Tag ref={ref} className={className} style={{ visibility: ready ? undefined : "hidden" }} {...props}>
      {children}
    </Tag>
  )
}
