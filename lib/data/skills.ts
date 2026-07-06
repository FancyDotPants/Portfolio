export type SkillCategory = {
  label: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'GraphQL', 'REST API design'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Tooling & Practice',
    items: ['Git & GitHub', 'Prompt Engineering'],
  },
]
