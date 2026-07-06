import { site } from '@/lib/data/site'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-hairline py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="01 — Engineering philosophy" title="About" id="about-heading" />
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {site.philosophy.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/90 md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  )
}
