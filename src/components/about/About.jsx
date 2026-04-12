import React from 'react';
import './About.css';
import ParticleSphere from '../particles/ParticleSphere';
import CV_tech from '../../assets/Mon_CV_Dev.pdf';

const boxes = [
  { icon: 'bx bx-code-alt',  title: 'Projets',    sub: '+10 livrés' },
  { icon: 'bx bx-medal',     title: 'Expérience',  sub: '+5 ans'     },
  { icon: 'bx bx-headphone', title: 'Support',     sub: '24H / 7J'   },
];

const About = () => (
  <section className="about section" id="about">
    <span className="section__subtitle">Qui suis-je ?</span>
    <h2 className="section__title reveal d1">À propos de moi</h2>
    <div className="about__container container grid">

      {/* ── 3D Particle Sphere ── */}
      <div className="about__sphere-wrap reveal-left d2">
        <ParticleSphere />
      </div>

      {/* ── Text data ── */}
      <div className="about__data reveal-right d2">
        <div className="about__info grid">
          {boxes.map(({ icon, title, sub }, i) => (
            <div key={i} className={`about__box reveal d${i + 2}`}>
              <i className={`${icon} about__icon`} />
              <h3 className="about__title">{title}</h3>
              <span className="about__subtitle">{sub}</span>
            </div>
          ))}
        </div>

        <p className="about__description">
          Développeur <strong>Full-Stack JS / Data / IA</strong>, je transforme vos idées en solutions
          web modernes et performantes. Disponible en alternance dès <strong>septembre 2026</strong>,
          je maîtrise l'ensemble de la stack — React, Next.js, Node.js, Python — et j'utilise
          quotidiennement les assistants IA (Claude, Gemini, GROK) pour optimiser mon code.
        </p>

        <div className="about__availability">
          <i className="uil uil-calendar-alt" />
          <span>Alternance · Dès septembre 2026 · 1 an et plus</span>
        </div>

        <a href={CV_tech} download="CV_Daniel_Nagoloum_Dev.pdf" className="button button--flex">
          Télécharger mon CV <i className="uil uil-import button__icon" />
        </a>
      </div>

    </div>
  </section>
);

export default About;
