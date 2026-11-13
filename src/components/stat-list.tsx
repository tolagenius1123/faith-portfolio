import { cn } from "cn"

import { Counter } from "@/components/motion/counter"
import type { Fact, Stat } from "@/lib/content"

type StatListProps = {
  stats: readonly (Stat | Fact)[]
  className?: string
}

export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-12", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-3">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-[clamp(3rem,6vw,6rem)] text-oxblood">
            {"text" in stat ? stat.text : <Counter {...stat} />}
          </dd>
          <dd className="max-w-[18ch] text-sm text-muted-foreground">{stat.label}</dd>
        </div>
      ))}
    </dl>
  )
}
