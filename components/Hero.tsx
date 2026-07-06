import { site } from '@/lib/data/site'
import { Container } from './ui/Container'

export function Hero() {
  return (
    <section className="border-b border-hairline py-20 md:py-32">
      <Container>
        <p className="font-mono text-2xs uppercase tracking-[0.15em] text-muted">{site.title}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{site.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="border border-ink bg-ink px-6 py-3 font-mono text-2xs uppercase tracking-wide text-paper transition-colors duration-250 hover:bg-transparent hover:text-ink"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="border border-hairline px-6 py-3 font-mono text-2xs uppercase tracking-wide text-ink transition-colors duration-250 hover:border-ink"
          >
            Get in touch
          </a>
        </div>
      </Container>
    </section>
  )
}
