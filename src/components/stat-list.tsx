import { cn } from "cn"

import { Counter } from "@/components/motion/counter"
import type { Stat } from "@/lib/content"

type StatListProps = {
  stats: Stat[]
  className?: string
}

export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-6 gap-y-12", className)}>
      {stats.map(({ label, ...stat }) => (
        <div key={label} className="flex flex-col gap-3">
          <dt className="sr-only">{label}</dt>
          <dd className="font-display text-[clamp(3rem,6vw,6rem)] text-oxblood">
            <Counter {...stat} />
          </dd>
          <dd className="max-w-[18ch] text-sm text-muted-foreground">{label}</dd>
        </div>
      ))}
    </dl>
  )
}
