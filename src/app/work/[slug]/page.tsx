import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudy } from "@/components/case-study"
import { projects } from "@/lib/content"

type CaseStudyParams = PageProps<"/work/[slug]">["params"]

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

async function findProject(params: CaseStudyParams) {
  const { slug } = await params
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) notFound()
  return { index, project: projects[index] }
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { project } = await findProject(params)
  return {
    title: `${project.title.replace(/\.$/, "")} | Okpe Faith Oloh`,
    description: project.summary,
  }
}

async function CaseStudyContent({ params }: { params: CaseStudyParams }) {
  const { index, project } = await findProject(params)
  const nextProject = projects[(index + 1) % projects.length]

  return <CaseStudy project={project} index={index} nextProject={nextProject} />
}

export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<main className="min-h-svh" />}>
      <CaseStudyContent params={params} />
    </Suspense>
  )
}
