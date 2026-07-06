import { education, experience } from '@/lib/data/experience'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-hairline py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="04 — Track record" title="Experience" id="experience-heading" />
        <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
          <div className="flex flex-col gap-10">
            {experience.map((item) => (
              <div key={item.role + item.org} className="border-t border-hairline pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-medium tracking-tight">{item.role}</h3>
                  <span className="font-mono text-2xs uppercase tracking-wide text-muted">{item.period}</span>
                </div>
                <p className="mt-1 font-mono text-2xs uppercase tracking-wide text-muted">{item.org}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-base leading-relaxed text-ink/90">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 bg-muted" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-hairline pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <h3 className="font-mono text-2xs uppercase tracking-wide text-muted">Education</h3>
            <ul className="mt-4 flex flex-col gap-6">
              {education.map((item) => (
                <li key={item.field}>
                  <p className="font-display text-lg font-medium tracking-tight">{item.degree}</p>
                  <p className="text-muted">{item.field}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
