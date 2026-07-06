import Link from 'next/link'
import { projects } from '@/lib/data/projects'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-hairline py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="03 — Case studies" title="Featured projects" id="projects-heading" />
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid gap-4 border-t border-hairline py-8 transition-colors duration-250 last:border-b hover:bg-surface md:grid-cols-[3rem_1fr_auto] md:items-center md:gap-8"
            >
              <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">{project.name}</h3>
                <p className="mt-2 max-w-xl text-muted">{project.summary}</p>
                <p className="mt-3 font-mono text-2xs uppercase tracking-wide text-muted">
                  {project.stack.join(' / ')}
                </p>
              </div>
              <span className="font-mono text-2xs uppercase tracking-wide text-ink underline-offset-4 group-hover:underline">
                Read case study →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
