import { skills } from '@/lib/data/skills'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-hairline py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="02 — Technical range" title="Skills" id="skills-heading" />
        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skills.map((category) => (
            <div key={category.label} className="border-t border-hairline pt-4">
              <dt className="font-mono text-2xs uppercase tracking-wide text-muted">{category.label}</dt>
              <dd className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-base">
                {category.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < category.items.length - 1 && <span className="ml-3 text-muted">/</span>}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
