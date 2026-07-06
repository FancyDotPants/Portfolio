import { site } from '@/lib/data/site'
import { Container } from './ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
        <p className="font-mono text-2xs uppercase tracking-wide text-muted">
          © {year} {site.name}
        </p>
        <div className="flex gap-6">
          {site.github && (
            <a href={site.github} className="font-mono text-2xs uppercase tracking-wide text-muted hover:text-ink" rel="noreferrer noopener">
              GitHub
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} className="font-mono text-2xs uppercase tracking-wide text-muted hover:text-ink" rel="noreferrer noopener">
              LinkedIn
            </a>
          )}
          {site.email && (
            <a href={`mailto:${site.email}`} className="font-mono text-2xs uppercase tracking-wide text-muted hover:text-ink">
              Email
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}
