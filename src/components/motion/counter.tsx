"use client"

import { useRef } from "react"

import type { Stat } from "@/lib/content"
import { gsap, useGSAP } from "@/lib/gsap"

type CounterProps = Omit<Stat, "label"> & { className?: string }

function format(value: number, { decimals = 0, prefix = "", suffix = "" }: Omit<CounterProps, "value">) {
  const number = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return `${prefix}${number}${suffix}`
}

export function Counter({ value, className, ...formatting }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const element = ref.current
      if (!element) return
      const state = { value: 0 }
      element.textContent = format(0, formatting)
      gsap.to(state, {
        value,
        duration: 2.4,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 90%", once: true },
        onUpdate: () => {
          element.textContent = format(state.value, formatting)
        },
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref} className={className}>
      {format(value, formatting)}
    </span>
  )
}
