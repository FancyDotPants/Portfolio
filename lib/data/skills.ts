export type SkillCategory = {
  label: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS', 'Dart'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Flutter', 'Tailwind CSS', 'Bootstrap', 'Zustand', 'Redux Toolkit',],
  },
  {
    label: 'Backend',
    items: ['Spring Boot','Node.js', 'GraphQL', 'REST API design', 'Express.js', 'Nest.js', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets'],
  },
  {
    label: 'Testing',
    items: ['Jest','Vitest', 'Playwright', 'Postman', 'Cypress'],
  },
  {
    label: 'API Design & Integration',
    items: ['RESTful API Design', 'API Versioning', 'API Documentation', 'JWT Authentication', 'API Security', 'Rate Limiting', 'API Gateway'],
  },
  {
    label: 'AI Engineering',
    items: ['AI Agents', 'Retrieval-Augmented Generation (RAG)', 'MCP (Model Context Protocol)', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    label: 'Software Engineering',
    items: ['Object-Oriented Programming (OOP)', 'Functional Programming', 'SOLID', 'Design Patterns', 'Refactoring', 'Domain Modeling', 'Test-Driven Development (TDD)'],
  },
  {
    label: 'System Design',
    items: ['High Availability', 'Scalability', 'SOLID', 'Load Balancing', 'Horizontal Scaling', 'Caching Strategies', 'Database Sharding', 'Performance Optimization', 'Load Testing'],
  },
  {
    label: 'ORM',
    items: ['Prisma', 'Hibernate']
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server'],
  },
  {
    label: 'Security',
    items: ['JWT', 'CORS', 'CSP', 'OWASP API Security Top 10', 'OWASP Top 10'],
  },
  {
    label: 'Version Control',
    items: ['GitHub', 'Git', 'GitLab'],
  },
  {
    label: 'DevOps',
    items: ['Docker', 'Nginx', 'Kubernetes']
  },
]
