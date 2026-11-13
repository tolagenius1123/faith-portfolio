"use client"

import Lenis from "lenis"
import { usePathname } from "next/navigation"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { gsap, ScrollTrigger } from "@/lib/gsap"

type SiteContextValue = {
  introDone: boolean
  completeIntro: () => void
  scrollTo: (target: string | number) => void
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [introDone, setIntroDone] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ lerp: 0.09 })
    lenisRef.current = lenis
    lenis.stop()
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    // Client-side navigation keeps this provider mounted, so the new page needs fresh trigger
    // positions and an explicit jump to its hash (or the top) once its pinned sections exist.
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      const target = window.location.hash || 0
      if (lenisRef.current) {
        lenisRef.current.resize()
        lenisRef.current.scrollTo(target, { immediate: true, force: true })
      } else if (typeof target === "number") {
        window.scrollTo(0, 0)
      } else {
        document.querySelector(target)?.scrollIntoView()
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  const completeIntro = useCallback(() => {
    setIntroDone(true)
    lenisRef.current?.start()
    ScrollTrigger.refresh()
  }, [])

  const scrollTo = useCallback((target: string | number) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 1.6 })
      return
    }
    if (typeof target === "number") window.scrollTo({ top: target })
    else document.querySelector(target)?.scrollIntoView()
  }, [])

  const value = useMemo(
    () => ({ introDone, completeIntro, scrollTo }),
    [introDone, completeIntro, scrollTo]
  )

  return <SiteContext value={value}>{children}</SiteContext>
}

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error("useSite must be used inside SiteProvider")
  return context
}
