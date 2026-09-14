import React, { Suspense, lazy } from 'react';
import './About.css';
import CV_tech from '../../assets/Mon_CV_Dev.pdf';

/* Three.js + GSAP chargés à part pour alléger le bundle initial */
const ParticleSphere = lazy(() => import('../particles/ParticleSphere'));

const boxes = [
  { icon: 'bx bx-code-alt',  title: 'Projets',    sub: '30+ sur GitHub'     },
  { icon: 'bx bx-medal',     title: 'Expérience', sub: 'Stage DATALIA'      },
  { icon: 'bx bx-calendar',  title: 'Alternance', sub: '24 mois · sept. 2026' },
];

const About = () => (
  <section className="about section" id="about">
    <span className="section__subtitle">Qui suis-je ?</span>
    <h2 className="section__title reveal d1">À propos de moi</h2>
    <div className="about__container container grid">

      {/* ── 3D Particle Sphere ── */}
      <div className="about__sphere-wrap reveal-left d2">
        <Suspense fallback={<div className="particle-sphere" />}>
          <ParticleSphere />
        </Suspense>
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
          Développeur Full-Stack récemment diplômé d'un <strong>Bachelor Développement / Data
          (INGETIS Paris)</strong>, j'intègre le <strong>Mastère Développement Logiciel</strong> à
          la rentrée 2026. Je conçois des applications web complètes, de l'interface au back-end
          en passant par la gestion des données — React, Next.js, NestJS, PostgreSQL — avec un
          intérêt marqué pour la <strong>Data et l'IA</strong>.
        </p>
        <p className="about__description">
          Après avoir fait mes preuves lors d'un stage front-end chez <strong>DATALIA</strong>{' '}
          (plateforme immobilière KILICASA) et sur des projets SaaS collaboratifs, je recherche
          une <strong>alternance de 24 mois dès septembre 2026</strong> pour poursuivre mon
          évolution technique au sein d'une équipe produit.
        </p>

        <div className="about__availability">
          <i className="uil uil-calendar-alt" />
          <span>Dès septembre 2026 · 3 sem. entreprise / 1 sem. formation · Île-de-France</span>
        </div>

        <a href={CV_tech} download="CV_Daniel_Nagoloum_Talla_Fullstack.pdf" className="button button--flex">
          Télécharger mon CV <i className="uil uil-import button__icon" />
        </a>
      </div>

    </div>
  </section>
);

export default About;
