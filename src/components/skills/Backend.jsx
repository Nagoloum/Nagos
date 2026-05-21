import React from 'react';
const skills = [
  { name: 'NodeJS',     pct: 82 },
  { name: 'ExpressJS',  pct: 80 },
  { name: 'NestJS',     pct: 65 },
  { name: 'Python',     pct: 72 },
  { name: 'Spring Boot',     pct: 72 },
  { name: 'MongoDB',    pct: 80 },
  { name: 'PHP',     pct: 85 },
  { name: 'Supabase',      pct: 75 },
  { name: 'Firebase',      pct: 75 },
  { name: 'PostgreSQL', pct: 75 },
  { name: 'MySQL',      pct: 88 },
];
const Backend = () => (
  <div className="skills__content reveal-scale d2">
    <h3 className="skills__title"><i className="uil uil-server skills__title-icon" />Backend & BDD</h3>
    {skills.map(({ name, pct }) => (
      <div key={name} className="skills__item">
        <div className="skills__info">
          <span className="skills__name">{name}</span>
          <span className="skills__percentage">{pct}%</span>
        </div>
        <div className="skills__bar-bg"><div className="skills__bar" style={{ '--skill-pct': `${pct}%` }} /></div>
      </div>
    ))}
  </div>
);
export default Backend;
