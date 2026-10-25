"use client"

import type { MouseEvent, ReactNode } from "react"
import { cn } from "cn"

import { useSite } from "@/components/providers/site-provider"
import { Button } from "@/components/ui/button"

type RollLinkProps = {
  href: string
  children: ReactNode
  icon?: ReactNode
  className?: string
  onNavigate?: () => void
}

const rollEase = "transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)]"

export function RollLink({ href, children, icon, className, onNavigate }: RollLinkProps) {
  const { scrollTo } = useSite()
  const isSection = href.startsWith("#")
  const isExternal = href.startsWith("http")

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isSection) return
    event.preventDefault()
    onNavigate?.()
    scrollTo(href)
  }

  return (
    <Button
      variant="link"
      nativeButton={false}
      render={
        <a
          href={href}
          onClick={handleClick}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        />
      }
      className={cn(
        "group/roll h-auto gap-0 rounded-none p-0 text-[length:inherit] font-[inherit] text-current hover:no-underline",
        className
      )}
    >
      {icon}
      <span className="relative inline-flex overflow-hidden">
        <span className={cn(rollEase, "group-hover/roll:-translate-y-full")}>{children}</span>
        <span aria-hidden className={cn(rollEase, "absolute inset-0 translate-y-full group-hover/roll:translate-y-0")}>
          {children}
        </span>
      </span>
    </Button>
  )
}
