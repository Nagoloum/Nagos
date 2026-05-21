import React from 'react';
const skills = [
  { name: 'GitHub / Git',       pct: 85 },
  { name: 'VS Code',       pct: 90 },
  { name: 'Canva',       pct: 90 },
  { name: 'Prisma',       pct: 80 },
  { name: 'Drizzle',       pct: 80 },
  { name: 'Figma',         pct: 80 },
  { name: 'Docker',         pct: 55 },
  { name: 'Claude / GPT',  pct: 90 },
  { name: 'Unity (C#)',    pct: 60 },
  { name: 'Jira / Notion', pct: 78 },
];
const Design = () => (
  <div className="skills__content reveal-scale d3">
    <h3 className="skills__title"><i className="uil uil-wrench skills__title-icon" />Outils & IA</h3>
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
export default Design;
