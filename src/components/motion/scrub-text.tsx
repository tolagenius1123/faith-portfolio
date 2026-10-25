"use client"

import { useRef } from "react"

import { gsap, SplitText, useGSAP } from "@/lib/gsap"

type ScrubTextProps = {
  children: string
  className?: string
}

export function ScrubText({ children, className }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      SplitText.create(ref.current, {
        type: "words",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.words, {
            opacity: 0.12,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
          }),
      })
    },
    { scope: ref }
  )

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  )
}
