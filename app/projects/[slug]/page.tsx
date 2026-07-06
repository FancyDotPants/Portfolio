import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data/projects'
import { Container } from '@/components/ui/Container'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: project.name,
      description: project.summary,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)

  return (
    <article>
      <header className="border-b border-hairline py-16 md:py-24">
        <Container>
          <Link href="/#projects" className="font-mono text-2xs uppercase tracking-wide text-muted hover:text-ink">
            ← All projects
          </Link>
          <p className="mt-6 font-mono text-2xs uppercase tracking-wide text-muted">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-6xl">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{project.summary}</p>
        </Container>
      </header>

      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1fr_16rem] md:gap-16 md:py-24">
          <div className="flex flex-col gap-14">
            <CaseSection title="Problem">
              <p className="text-lg leading-relaxed text-ink/90">{project.problem}</p>
            </CaseSection>

            <CaseSection title="Goals">
              <ul className="flex flex-col gap-2">
                {project.goals.map((goal, i) => (
                  <li key={i} className="flex gap-3 text-lg leading-relaxed text-ink/90">
                    <span aria-hidden="true" className="mt-3 h-1 w-1 flex-shrink-0 bg-muted" />
                    {goal}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Architecture">
              <p className="text-lg leading-relaxed text-ink/90">{project.architecture}</p>
            </CaseSection>

            <CaseSection title="Technical decisions">
              <div className="flex flex-col gap-6">
                {project.decisions.map((d, i) => (
                  <div key={i} className="border-l-2 border-hairline pl-5">
                    <p className="font-medium text-ink">{d.decision}</p>
                    <p className="mt-1 text-muted">{d.reasoning}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection title="Trade-offs">
              <div className="flex flex-col gap-6">
                {project.tradeoffs.map((t, i) => (
                  <div key={i} className="border-l-2 border-hairline pl-5">
                    <p className="font-medium text-ink">{t.tradeoff}</p>
                    <p className="mt-1 text-muted">{t.explanation}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection title="Challenges">
              <p className="text-lg leading-relaxed text-ink/90">{project.challenges}</p>
            </CaseSection>

            <div className="grid gap-8 md:grid-cols-3">
              <CaseSection title="Performance">
                <p className="text-muted">{project.performance}</p>
              </CaseSection>
              <CaseSection title="Scalability">
                <p className="text-muted">{project.scalability}</p>
              </CaseSection>
              <CaseSection title="Security">
                <p className="text-muted">{project.security}</p>
              </CaseSection>
            </div>

            <CaseSection title="Lessons learned">
              <p className="text-lg leading-relaxed text-ink/90">{project.lessons}</p>
            </CaseSection>
          </div>

          {/* Signature element: a datasheet-style spec block, the one deliberate visual flourish on the site */}
          <aside aria-label="Project specifications" className="h-fit border border-hairline p-6 md:sticky md:top-24">
            <p className="font-mono text-2xs uppercase tracking-wide text-muted">Spec sheet</p>
            <dl className="mt-4 flex flex-col gap-4">
              <SpecRow label="Role" value={project.role} />
              <SpecRow label="Timeline" value={project.timeline} />
              <SpecRow label="Stack" value={project.stack.join(', ')} />
            </dl>
          </aside>
        </div>
      </Container>
    </article>
  )
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-2xs uppercase tracking-wide text-muted">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-hairline pt-3 first:border-t-0 first:pt-0">
      <dt className="font-mono text-2xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 font-mono text-sm text-ink">{value}</dd>
    </div>
  )
}
