import React from 'react';
const skills = [
  'React 19', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Angular 18',
  'Vue.js (notions)', 'Tailwind CSS', 'HTML5 / CSS3', 'Redux Toolkit', 'Zustand',
  'i18next / next-intl', 'GSAP / Framer Motion', 'Three.js (R3F)', 'Flutter',
  'React Native (Expo)', 'Kotlin (bases)',
];
const Frontend = () => (
  <div className="skills__content reveal-scale d1">
    <h3 className="skills__title"><i className="uil uil-brackets-curly skills__title-icon" />Front-End & Mobile</h3>
    <div className="skills__tags">
      {skills.map(name => <span key={name} className="skills__tag">{name}</span>)}
    </div>
  </div>
);
export default Frontend;
