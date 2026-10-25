"use client"

import Image from "next/image"
import { useRef } from "react"
import { cn } from "cn"

import { useSite } from "@/components/providers/site-provider"
import { revealTrigger } from "@/components/motion/reveal-trigger"
import { gsap, useGSAP } from "@/lib/gsap"

type ParallaxImageProps = {
  src: string
  alt: string
  sizes: string
  className?: string
  imageClassName?: string
  priority?: boolean
  intro?: boolean
  depth?: number
}

export function ParallaxImage({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  priority,
  intro = false,
  depth = 12,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { introDone } = useSite()
  const ready = !intro || introDone

  useGSAP(
    () => {
      if (!ready || !ref.current) return
      const image = ref.current.querySelector("img")

      gsap
        .timeline({ scrollTrigger: revealTrigger(ref.current, intro), delay: intro ? 0.15 : 0 })
        .from(ref.current, { clipPath: "inset(100% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" })
        .from(image, { scale: 1.6, duration: 1.9, ease: "expo.out" }, 0.15)

      gsap.fromTo(
        image,
        { yPercent: -depth / 2 },
        {
          yPercent: depth / 2,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      )
    },
    { scope: ref, dependencies: [ready] }
  )

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("scale-[1.18] object-cover", imageClassName)}
      />
    </div>
  )
}
