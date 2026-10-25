"use client"

import { useRef } from "react"

import { gsap, useGSAP } from "@/lib/gsap"

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const cursor = ref.current
    const label = labelRef.current
    if (!cursor || !label || !window.matchMedia("(pointer: fine)").matches) return

    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0.15, autoAlpha: 0 })
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" })

    const handleMove = (event: PointerEvent) => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.3, overwrite: "auto" })
      xTo(event.clientX)
      yTo(event.clientY)
    }

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element
      const labelled = target.closest<HTMLElement>("[data-cursor]")
      const interactive = target.closest("a, button, [role='button']")
      label.textContent = labelled?.dataset.cursor ?? ""
      const scale = labelled ? 1 : interactive ? 0.4 : 0.15
      gsap.set(cursor, { mixBlendMode: labelled ? "normal" : "difference" })
      gsap.to(cursor, {
        scale,
        backgroundColor: labelled ? "var(--ink)" : "#fff",
        duration: 0.5,
        ease: "expo.out",
      })
      gsap.to(label, { autoAlpha: labelled ? 1 : 0, duration: 0.3 })
    }

    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerover", handleOver)
    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerover", handleOver)
    }
  })

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden size-24 items-center justify-center rounded-full bg-white text-paper mix-blend-difference [@media(pointer:fine)]:flex"
    >
      <span ref={labelRef} className="text-eyebrow opacity-0" />
    </div>
  )
}
