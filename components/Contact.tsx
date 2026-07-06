import { site } from '@/lib/data/site'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="05 — Get in touch" title="Contact" id="contact-heading" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-ink/90">
              Open to full-stack roles and freelance engagements. The quickest way to reach me is directly by email.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <ContactLink label="Email" href={site.email ? `mailto:${site.email}` : undefined} value={site.email || 'Add your email in lib/data/site.ts'} />
              <ContactLink label="GitHub" href={site.github || undefined} value={site.github || 'Add your GitHub URL'} />
              <ContactLink label="LinkedIn" href={site.linkedin || undefined} value={site.linkedin || 'Add your LinkedIn URL'} />
            </div>
          </div>

          {/* Progressive enhancement: this posts to /api/contact if wired up server-side; falls back to a mailto if JS/backend is absent. No client-side secrets are used. */}
          <form action={site.email ? `mailto:${site.email}` : undefined} method="post" encType="text/plain" className="flex flex-col gap-5" noValidate>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-2xs uppercase tracking-wide text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="border border-hairline bg-transparent px-4 py-3 text-base outline-none transition-colors duration-250 focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-2xs uppercase tracking-wide text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="border border-hairline bg-transparent px-4 py-3 text-base outline-none transition-colors duration-250 focus:border-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-2xs uppercase tracking-wide text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="border border-hairline bg-transparent px-4 py-3 text-base outline-none transition-colors duration-250 focus:border-ink"
              />
            </div>
            <button
              type="submit"
              className="border border-ink bg-ink px-6 py-3 font-mono text-2xs uppercase tracking-wide text-paper transition-colors duration-250 hover:bg-transparent hover:text-ink"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

function ContactLink({ label, href, value }: { label: string; href?: string; value: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-hairline pt-3">
      <span className="w-20 flex-shrink-0 font-mono text-2xs uppercase tracking-wide text-muted">{label}</span>
      {href ? (
        <a href={href} className="text-ink underline-offset-4 hover:underline" rel="noreferrer noopener">
          {value}
        </a>
      ) : (
        <span className="text-muted">{value}</span>
      )}
    </div>
  )
}
