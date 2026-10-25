import { Marquee } from "@/components/motion/marquee"
import { disciplines } from "@/lib/content"

export function DisciplinesMarquee() {
  return (
    <Marquee className="bg-oxblood py-6 text-paper md:py-8">
      {disciplines.map((discipline) => (
        <span key={discipline} className="font-display flex items-center text-[clamp(2.5rem,6vw,6rem)] italic">
          <span className="px-8">{discipline}</span>
          <span className="text-blush not-italic">✦</span>
        </span>
      ))}
    </Marquee>
  )
}
