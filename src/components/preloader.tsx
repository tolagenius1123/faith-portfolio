"use client"

import { useRef } from "react"

import { useSite } from "@/components/providers/site-provider"
import { gsap, useGSAP } from "@/lib/gsap"

const nameWords = ["Okpe", "Faith", "Oloh"]

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const { completeIntro } = useSite()

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const progress = { value: 0 }

      gsap
        .timeline({ delay: 0.2 })
        .from("[data-preloader-word]", { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.1 })
        .to(
          progress,
          {
            value: 100,
            duration: reduced ? 0.3 : 2.4,
            ease: "power2.inOut",
            onUpdate: () => {
              if (counterRef.current) counterRef.current.textContent = String(Math.round(progress.value)).padStart(3, "0")
            },
          },
          0
        )
        .to("[data-preloader-word]", { yPercent: -110, duration: 0.8, ease: "expo.in", stagger: 0.06 })
        .to(counterRef.current, { yPercent: -110, duration: 0.8, ease: "expo.in" }, "<")
        .add(completeIntro, "-=0.15")
        .to(ref.current, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.3, ease: "expo.inOut" }, "<")
        .set(ref.current, { display: "none" })
    },
    { scope: ref }
  )

  return (
    <div
      ref={ref}
      data-preloader
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-oxblood p-5 text-paper md:p-10"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="text-eyebrow flex justify-between opacity-70">
        <span>Portfolio</span>
        <span>Lagos, Nigeria</span>
      </div>

      <p className="font-display flex flex-wrap gap-x-[0.25em] text-[clamp(3rem,9vw,9rem)]">
        {nameWords.map((word) => (
          <span key={word} className="-mx-[0.16em] overflow-hidden px-[0.16em] pb-[0.08em]">
            <span data-preloader-word className={word === "Faith" ? "inline-block italic" : "inline-block"}>
              {word}
            </span>
          </span>
        ))}
      </p>

      <div className="flex items-end justify-between">
        <span className="text-eyebrow max-w-48 opacity-70">Brand communications and customer experience</span>
        <span className="overflow-hidden">
          <span ref={counterRef} className="font-display block text-[clamp(4rem,12vw,12rem)] tabular-nums">
            000
          </span>
        </span>
      </div>
    </div>
  )
}
