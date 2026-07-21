import React from 'react';
import './About.css';
import ParticleSphere from '../particles/ParticleSphere';
import CV_tech from '../../assets/Mon_CV_Dev.pdf';

const boxes = [
  { icon: 'bx bx-code-alt',  title: 'Projets',    sub: '30+ sur GitHub'   },
  { icon: 'bx bx-medal',     title: 'Expérience', sub: 'Stage + freelance' },
  { icon: 'bx bx-calendar',  title: 'Alternance', sub: 'Dès sept. 2026'   },
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
          Étudiant en <strong>Bachelor Développement / Data à INGETIS</strong> (Paris), je développe
          des applications web de bout en bout — React, Next.js, Node.js / NestJS, PostgreSQL — avec
          un fort attrait pour la <strong>Data et l'IA</strong> (robots de trading Python, scoring,
          intégration de modèles). Après un stage de développeur front-end chez <strong>DATALIA</strong>
          (plateforme immobilière KILICASA), je recherche une <strong>alternance Full-Stack dès
          septembre 2026</strong>, avec pour objectif un Mastère Développement Full-Stack à INGETIS.
        </p>

        <div className="about__availability">
          <i className="uil uil-calendar-alt" />
          <span>Alternance · Dès septembre 2026 · 3 sem. entreprise / 1 sem. formation</span>
        </div>

        <a href={CV_tech} download="CV_Daniel_Nagoloum_Dev.pdf" className="button button--flex">
          Télécharger mon CV <i className="uil uil-import button__icon" />
        </a>
      </div>

    </div>
  </section>
);

export default About;
