import { cn } from "cn"

import { RevealText } from "@/components/motion/reveal-text"

type SectionLabelProps = {
  label: string
  className?: string
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return <p className={cn("text-eyebrow opacity-70", className)}>{label}</p>
}

type SectionHeaderProps = SectionLabelProps & { title: string }

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-6 md:gap-8", className)}>
      <SectionLabel label={label} />
      <RevealText as="h2" split="words" className="font-display text-giant max-w-[14ch]">
        {title}
      </RevealText>
    </div>
  )
}
