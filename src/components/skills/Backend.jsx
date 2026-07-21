import React from 'react';
const skills = [
  'Node.js / NestJS', 'Express', 'Fastify', 'API REST · Swagger', 'JWT · RBAC',
  'Python (FastAPI, Flask)', 'pandas / NumPy', 'scikit-learn / LightGBM', 'Streamlit',
  'PHP', 'Java / Spring Boot (bases)', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'Meilisearch', 'Prisma / Drizzle ORM', 'BullMQ',
];
const Backend = () => (
  <div className="skills__content reveal-scale d2">
    <h3 className="skills__title"><i className="uil uil-server skills__title-icon" />Back-End, Data & BDD</h3>
    <div className="skills__tags">
      {skills.map(name => <span key={name} className="skills__tag">{name}</span>)}
    </div>
  </div>
);
export default Backend;
