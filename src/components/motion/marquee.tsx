"use client"

import { useRef, type ReactNode } from "react"
import { cn } from "cn"

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

type MarqueeProps = {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}

export function Marquee({ children, duration = 30, reverse = false, className }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const loop = gsap.fromTo(
        "[data-marquee-track]",
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1 }
      )

      ScrollTrigger.create({
        trigger: ref.current,
        onUpdate: (self) => {
          const boost = Math.min(Math.abs(self.getVelocity()) / 400, 5)
          gsap
            .timeline({ overwrite: true })
            .to(loop, { timeScale: 1 + boost, duration: 0.2 })
            .to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out" })
        },
      })
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={cn("flex overflow-hidden", className)}>
      <div data-marquee-track className="flex w-max shrink-0">
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  )
}
