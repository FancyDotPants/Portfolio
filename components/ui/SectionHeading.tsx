export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10 border-b border-hairline pb-4 md:mb-14">
      <p className="font-mono text-2xs uppercase tracking-[0.15em] text-muted">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-display text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
