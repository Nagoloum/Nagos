import React, { useState } from 'react';
import './Services.css';
import Flyer_FR from '../../assets/FlyerFR.jpg';
import Flyer_EN from '../../assets/FlyerEN.jpg';

const servicesData = [
  {
    id: 1,
    icon: 'uil-web-grid',
    title: 'Graphic Designer',
    desc: 'Logos, flyers, cartes de visite, montages vidéo et maquettes de sites.',
    modalDesc: 'Plus de 3 ans d\'expérience. Je fournis un travail de qualité pour les clients et entreprises.',
    items: [
      'Conception des logos, flyers et cartes de visites.',
      'Montages vidéos professionnels.',
      'Gestion de communauté & réseaux sociaux.',
      'Maquettes de sites web et applications.',
    ],
    flyers: true,
  },
  {
    id: 2,
    icon: 'uil-arrow',
    title: 'UI/UX Designer',
    desc: 'Interfaces modernes, expérience utilisateur optimisée et prototypes interactifs.',
    modalDesc: 'Plus de 3 ans d\'expérience en design d\'interfaces et conception UX.',
    items: [
      'Développement des interfaces utilisateurs.',
      'Création des pages web responsives.',
      'Interactions UX et micro-animations.',
      'Applications web, mobiles et desktop.',
    ],
    flyers: false,
  },
  {
    id: 3,
    icon: 'uil-brackets-curly',
    title: 'Développeur Full Stack',
    desc: 'Applications web complètes : API robustes, bases de données, déploiement.',
    modalDesc: 'Développeur avec plus de 4 ans d\'expérience sur des projets variés et complexes.',
    items: [
      'Interfaces utilisateur modernes et réactives.',
      'APIs robustes et sécurisées (Node.js, Python…).',
      'Bases de données SQL et NoSQL.',
      'Optimisation des performances et CI/CD.',
    ],
    flyers: false,
  },
];

const Services = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="services section" id="services">
      <span className="section__subtitle">Ce que j'offre</span>
      <h2 className="section__title reveal">Mes Services</h2>

      <div className="services__container container grid">
        {servicesData.map(({ id, icon, title, desc, modalDesc, items, flyers }, i) => (
          <div key={id} className={`services__content reveal d${i + 1}`}>
            <i className={`uil ${icon} services__icon`} />
            <h3 className="services__title">{title}</h3>
            <p className="services__desc">{desc}</p>
            <span className="services__button" onClick={() => setOpen(id)}>
              Voir plus <i className="uil uil-arrow-right services__button-icon" />
            </span>

            {/* Modal */}
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
                {flyers && (
                  <div className="services__modal-flyers">
                    <a href={Flyer_FR} download="Flyer_Design_FR.jpg" className="button button--flex" style={{ fontSize: 'var(--smaller-font-size)' }}>
                      Flyer FR <i className="uil uil-import button__icon" />
                    </a>
                    <a href={Flyer_EN} download="Flyer_Design_EN.jpg" className="button button--flex" style={{ fontSize: 'var(--smaller-font-size)' }}>
                      Flyer EN <i className="uil uil-import button__icon" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
