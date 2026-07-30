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
    period: '1 year - currently',
    bullets: [ 'Engineered and maintained full-stack features using React, Next.js, and Node.js within an operations-critical aviation environment, ensuring high reliability, real-time data consistency, and resilient application behavior where downtime and data integrity directly impact airport operations.',
       'Collaborated closely with backend engineers and operations teams to design, implement, and optimize integrations that synchronized flight, passenger, and scheduling data across multiple services with low latency and high reliability.',
        'Redefined and restructured the Lounge/CIP service workflow, delivering a significantly more intuitive user experience that improved operational efficiency and increased overall usability by approximately 60%, while successfully integrating the platform with an external service through robust API implementation.',
         'Designed and enhanced internal operational tools for non-technical airport staff, emphasizing intuitive workflows, comprehensive validation, graceful error recovery, and reduced operational friction in high-pressure environments.',
          'Worked in a mission-critical production environment where system availability, data accuracy, and operational continuity were essential, fostering a defensive engineering mindset centered on code quality, automated testing, observability, and safe production deployments.' ],
  },
  {
    role: 'Freelance Full-Stack Engineer',
    org: 'Independent / Contract',
    period: '2 years',
    bullets: [ 'Delivered end-to-end full-stack web and mobile applications across the entire software development lifecycle—from requirements gathering and solution architecture to implementation, testing, deployment, and long-term maintenance—translating business objectives into scalable production systems.',
       'Architected and developed applications using React, Next.js, Vue, Nuxt, Flutter, and Node.js, selecting technologies based on technical requirements, scalability, maintainability, and project constraints rather than adhering to a fixed stack.',
        'Designed and implemented RESTful and GraphQL APIs, data models, and backend services using PostgreSQL and MongoDB, optimizing schema design, query performance, data integrity, and API maintainability for diverse application workloads.',
        'Managed complete project ownership as the primary engineer on most engagements, balancing technical execution, architecture decisions, client communication, scope management, and delivery timelines while collaborating effectively with non-technical stakeholders.',
         'Established maintainable engineering practices including modular architecture, reusable components, clean code principles, version control workflows, and comprehensive documentation to improve long-term maintainability and future extensibility.',
          'Diagnosed and resolved complex production issues, optimized application performance across frontend and backend layers, and continuously refined user experience through iterative improvements driven by client feedback and evolving business requirements.' ]
  },
  {
    role: 'Freelance Frontend Engineer', 
    org: 'Independent / Contract', 
    period: '3 years', 
    bullets: [ 'Designed and developed responsive, production-ready web applications using React, Next.js, Vue, and Nuxt, transforming business requirements into intuitive, high-performance user experiences.',
       'Built reusable component libraries, scalable frontend architectures, and maintainable design systems that accelerated development while ensuring consistency across applications.',
        'Optimized application performance through code splitting, lazy loading, asset optimization, rendering strategies, and frontend performance best practices, improving load times and overall user experience.',
         'Integrated frontend applications with REST and GraphQL APIs, implementing robust data fetching, authentication flows, state management, and comprehensive error handling for reliable client-side experiences.',
          'Worked closely with clients, designers, and backend engineers to translate complex workflows into clean, accessible, and user-centric interfaces while balancing technical constraints and business objectives.',
           'Maintained high code quality through modular architecture, reusable patterns, responsive design principles, cross-browser compatibility, and modern frontend development best practices.' ]
  }
]

export type EducationItem = {
  degree: string
  field: string
  level: 'Bachelor' | 'Master'
}

export const education: EducationItem[] = [
  { degree: "Bachelor's", field: 'Mechanical Engineering', level: 'Bachelor' },
  { degree: "Master's", field: 'Information Technology (IT)', level: 'Master' },
]
