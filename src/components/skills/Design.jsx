import React from 'react';

const skills = [
  { name: 'Canva',        pct: 92 },
  { name: 'Filmora',      pct: 88 },
  { name: 'Figma',        pct: 72 },
  { name: 'Photoshop',    pct: 68 },
  { name: 'Illustrator',  pct: 65 },
  { name: 'CapCut',       pct: 75 },
];

const Design = () => (
  <div className="skills__content reveal-scale d3">
    <h3 className="skills__title">
      <i className="uil uil-palette skills__title-icon" />
      Design
    </h3>
    {skills.map(({ name, pct }) => (
      <div key={name} className="skills__item">
        <div className="skills__info">
          <span className="skills__name">{name}</span>
          <span className="skills__percentage">{pct}%</span>
        </div>
        <div className="skills__bar-bg">
          <div className="skills__bar" style={{ '--skill-pct': `${pct}%` }} />
        </div>
      </div>
    ))}
  </div>
);

export default Design;
