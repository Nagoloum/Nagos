import React, { useState } from 'react';
import './About.css';
import AboutImg from '../../assets/moi.jpg';
import CV_tech from '../../assets/Mon_CV_Dev.pdf';

const About = () => {
  const [isSplit, setIsSplit] = useState(false);

  return (
    <section className="about section" id="about">
      <span className="section__subtitle">Qui suis-je ?</span>
      <h2 className="section__title reveal d1">À propos de moi</h2>

      <div className="about__container container grid">

        {/* Image */}
        <div className="about__img-wrap reveal-left d2">
          <img src={AboutImg} alt="Daniel Nagoloum" className="about__img" />
          <div className="about__img-badge">
            <strong>5+</strong>
            <span>ans d'XP</span>
          </div>
        </div>

        {/* Data */}
        <div className="about__data reveal-right d2">
          <Info />

          <p className="about__description">
            Développeur <strong>Full-Stack JS / Data / IA</strong>, je transforme vos idées en solutions web modernes et performantes. 
            Disponible en alternance dès <strong>septembre 2026</strong>, je maîtrise l'ensemble de la stack technique — 
            de React & Next.js côté frontend à Node.js, Python et les bases de données NoSQL/SQL côté backend. 
            Passionné par l'IA et le trading algorithmique, j'utilise quotidiennement les outils IA pour optimiser mon code et ma productivité.
          </p>

          <div className="about__availability">
            <i className="uil uil-calendar-alt" />
            <span>Disponible en alternance · Dès septembre 2026 · 1 an et plus</span>
          </div>

          {/* CV download */}
          <div className="about__cv-wrapper">
            <a
              href={CV_tech}
              download="CV_Daniel_Nagoloum_Dev.pdf"
              className="button button--flex"
            >
              Télécharger mon CV
              <i className="uil uil-import button__icon" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const boxes = [
  { icon: 'bx bx-code-alt',       title: 'Projets',     sub: '+15 livrés'  },
  { icon: 'bx bx-medal',          title: 'Expérience',  sub: '+5 ans'       },
  { icon: 'bx bx-headphone',      title: 'Support',     sub: '24H / 7J'    },
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

export default About;
