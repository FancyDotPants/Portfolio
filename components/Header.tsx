import Link from 'next/link'
import { site } from '@/lib/data/site'
import { ThemeToggle } from './ThemeToggle'
import { Container } from './ui/Container'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-medium tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-2xs uppercase tracking-wide text-muted transition-colors duration-250 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </Container>
      {/* Mobile nav: simple, always-visible row beneath the header bar */}
      <nav aria-label="Primary mobile" className="border-t border-hairline md:hidden">
        <Container className="flex gap-6 overflow-x-auto py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-mono text-2xs uppercase tracking-wide text-muted"
            >
              {item.label}
            </a>
          ))}
        </Container>
      </nav>
    </header>
  )
}
