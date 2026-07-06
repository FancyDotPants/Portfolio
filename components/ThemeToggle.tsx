'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid a hydration mismatch: the resolved theme is unknown until mounted on the client.
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-8 w-14" aria-hidden="true" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      className="flex h-8 items-center gap-2 rounded-none border border-hairline px-3 font-mono text-2xs uppercase tracking-wide text-muted transition-colors duration-250 hover:border-ink hover:text-ink dark:hover:border-ink"
    >
      <span aria-hidden="true">{isDark ? '●' : '○'}</span>
      {isDark ? 'Dark' : 'Light'}
      <span className="sr-only">— toggle color theme</span>
    </button>
  )
}
