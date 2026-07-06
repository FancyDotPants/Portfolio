export type ExperienceItem = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Engineer',
    org: 'Airline Industry',
    period: '1 year',
    bullets: [
      'Worked within an operations-critical environment where downtime and incorrect data have direct real-world consequences, reinforcing a defensive, test-first approach to shipping changes.',
      'Built and maintained features across the stack using React/Next.js and Node.js, coordinating with backend and operations teams to keep flight and scheduling data consistent in real time.',
      'Contributed to internal tooling used by non-technical staff, prioritizing clarity and error recovery over feature density.',
    ],
  },
  {
    role: 'Freelance Full-Stack Engineer',
    org: 'Independent / Contract',
    period: '4 years',
    bullets: [
      'Delivered full-stack web and mobile applications independently across the entire lifecycle — requirements, architecture, implementation, deployment, and handoff.',
      'Worked across React, Vue, Next.js, Nuxt, and Flutter depending on client constraints, choosing the stack to fit the problem rather than defaulting to one toolset.',
      'Designed data models and APIs (REST and GraphQL) against PostgreSQL and MongoDB, adapting schema choices to each project\u2019s consistency and query needs.',
      'Operated as the sole engineer on most engagements, which forced disciplined scope management and clear technical communication with non-technical clients.',
    ],
  },
]

export type EducationItem = {
  degree: string
  field: string
  level: 'Bachelor' | 'Master'
}

export const education: EducationItem[] = [
  { degree: "Bachelor's", field: 'Mechanical Engineering', level: 'Bachelor' },
  { degree: "Master's", field: 'Information Technology', level: 'Master' },
]
