import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: 'uil-monitor',
    title: 'Développement Web Full Stack',
    desc: 'Applications web complètes, de l\'interface utilisateur à l\'API, déploiement inclus.',
    modalDesc: 'Plus de 4 ans d\'expérience sur des projets variés : e-commerce, SaaS, dashboards, plateformes.',
    items: [
      'Interfaces modernes et réactives avec React, Next.js, TypeScript.',
      'APIs robustes et sécurisées avec Node.js, ExpressJS, NestJS.',
      'Bases de données SQL et NoSQL : PostgreSQL, MongoDB, Supabase.',
      'Déploiement CI/CD, Vercel, optimisation des performances.',
    ],
  },
  {
    id: 2,
    icon: 'uil-layers-alt',
    title: 'UI/UX Design & Intégration',
    desc: 'Interfaces modernes pixel-perfect, expérience utilisateur optimisée, prototypes interactifs.',
    modalDesc: 'Conception centrée utilisateur avec un fort sens du détail visuel et de l\'ergonomie.',
    items: [
      'Maquettes Figma et prototypes interactifs.',
      'Intégration responsive HTML5 / CSS3 / TailwindCSS.',
      'Micro-animations et transitions fluides.',
      'Audit UX et amélioration d\'interfaces existantes.',
    ],
  },
  {
    id: 3,
    icon: 'uil-mobile-android-alt',
    title: 'Applications & Automatisation',
    desc: 'Applications métier, robots de trading, dashboards data et scripts d\'automatisation.',
    modalDesc: 'Développement de solutions sur-mesure : bots, outils internes, visualisation de données.',
    items: [
      'Robots de trading algorithmique en Python.',
      'Dashboards de suivi en temps réel (Streamlit).',
      'Scripts d\'automatisation et pipelines de données.',
      'Jeux vidéo 2D en C# avec Unity.',
    ],
  },
];

const Services = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="services section" id="services">
      <span className="section__subtitle">Ce que j'offre</span>
      <h2 className="section__title reveal">Mes Services</h2>

      <div className="services__container container grid">
        {servicesData.map(({ id, icon, title, desc, modalDesc, items }, i) => (
          <div key={id} className={`services__content reveal d${i + 1}`}>
            <i className={`uil ${icon} services__icon`} />
            <h3 className="services__title">{title}</h3>
            <p className="services__desc">{desc}</p>
            <span className="services__button" onClick={() => setOpen(id)}>
              Voir plus <i className="uil uil-arrow-right services__button-icon" />
            </span>

            <div className={`services__modal${open === id ? ' active-modal' : ''}`}>
              <div className="services__modal-content">
                <button
                  className="services__modal-close"
                  onClick={() => setOpen(0)}
                  aria-label="Fermer"
                >
                  <i className="uil uil-times" />
                </button>
                <h3 className="services__modal-title">{title}</h3>
                <p className="services__modal-description">{modalDesc}</p>
                <ul className="services__modal-services">
                  {items.map((item, j) => (
                    <li key={j} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon" />
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
