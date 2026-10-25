"use client"

import { useRef, type ComponentPropsWithoutRef } from "react"

import { useSite } from "@/components/providers/site-provider"
import { revealTrigger } from "@/components/motion/reveal-trigger"
import { gsap, useGSAP } from "@/lib/gsap"

type FadeInProps = ComponentPropsWithoutRef<"div"> & {
  delay?: number
  intro?: boolean
  stagger?: boolean
}

export function FadeIn({ delay = 0, intro = false, stagger = false, style, ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { introDone } = useSite()
  const ready = !intro || introDone

  useGSAP(
    () => {
      if (!ready || !ref.current) return
      const targets = stagger ? ref.current.children : ref.current
      gsap.from(targets, {
        y: 48,
        autoAlpha: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.08,
        delay,
        scrollTrigger: revealTrigger(ref.current, intro),
      })
    },
    { scope: ref, dependencies: [ready] }
  )

  return <div ref={ref} style={{ ...style, visibility: ready ? undefined : "hidden" }} {...props} />
}
