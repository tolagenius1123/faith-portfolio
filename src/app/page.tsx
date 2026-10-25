import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { DisciplinesMarquee } from "@/components/sections/disciplines-marquee"
import { Experience } from "@/components/sections/experience"
import { Expertise } from "@/components/sections/expertise"
import { Hero } from "@/components/sections/hero"
import { ShellBeauty } from "@/components/sections/shell-beauty"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <main>
      <Hero />
      <DisciplinesMarquee />
      <About />
      <Work />
      <ShellBeauty />
      <Expertise />
      <Experience />
      <Contact />
    </main>
  )
}
