import React from 'react';

const boxes = [
  { icon: 'bx bx-medal', title: 'Expérience', sub: '+5 ans' },
  { icon: 'bx bx-briefcase-alt', title: 'Projets', sub: '+15 livrés' },
  { icon: 'bx bx-headphone', title: 'Support', sub: '24H / 7J' },
];

const Info = () => (
  <div className="about__info grid">
    {boxes.map(({ icon, title, sub }, i) => (
      <div key={i} className={`about__box reveal d${i + 2}`}>
        <i className={`${icon} about__icon`} />
        <h3 className="about__title">{title}</h3>
        <span className="about__subtitle">{sub}</span>
      </div>
    ))}
  </div>
);

export default Info;
