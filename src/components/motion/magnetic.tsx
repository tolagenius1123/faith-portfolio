"use client"

import { useRef, type ReactNode } from "react"
import { cn } from "cn"

import { gsap, useGSAP } from "@/lib/gsap"

type MagneticProps = {
  children: ReactNode
  strength?: number
  className?: string
}

export function Magnetic({ children, strength = 0.4, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element || !window.matchMedia("(pointer: fine)").matches) return

      const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.35)" })
      const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.35)" })

      const handleMove = (event: PointerEvent) => {
        const { left, top, width, height } = element.getBoundingClientRect()
        xTo((event.clientX - (left + width / 2)) * strength)
        yTo((event.clientY - (top + height / 2)) * strength)
      }
      const handleLeave = () => {
        xTo(0)
        yTo(0)
      }

      element.addEventListener("pointermove", handleMove)
      element.addEventListener("pointerleave", handleLeave)
      return () => {
        element.removeEventListener("pointermove", handleMove)
        element.removeEventListener("pointerleave", handleLeave)
      }
    },
    { scope: ref }
  )

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {children}
    </div>
  )
}
