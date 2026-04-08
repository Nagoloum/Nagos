import React, { useState } from 'react';
import './Qualifications.css';

const education = [
  { title: 'Bachelor',          sub: 'INGETIS',                      dates: '2025 – 2026', side: 'left'  },
  { title: 'BTS (Bac+2)',       sub: 'GTES',                          dates: '2024 – 2025', side: 'right' },
  { title: 'Baccalauréat D',    sub: 'Lycée Bilingue de Bafoussam',   dates: '2021 – 2022', side: 'left'  },
  { title: 'Probatoire D',      sub: 'Lycée Bilingue de Bafoussam',   dates: '2020 – 2021', side: 'right' },
];

const experience = [
  { title: 'Développement Web Front & Back',    sub: null,      dates: '2021 – Auj.',  side: 'left'  },
  { title: 'Design Graphique & Motion',         sub: 'BRITECH', dates: '2022 – 2025',  side: 'right' },
];

const TimelineItem = ({ item }) => {
  const isLeft = item.side === 'left';
  return (
    <div className="qualification__data">
      {/* Left cell */}
      <div className={`qualification__text-${isLeft ? 'left' : ''}`}>
        {isLeft && (
          <>
            <h3 className="qualification__title">{item.title}</h3>
            {item.sub && <span className="qualification__subtitle">{item.sub}</span>}
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt" /> {item.dates}
            </div>
          </>
        )}
      </div>

      {/* Centre axis */}
      <div>
        <span className="qualification__rounder" />
        <span className="qualification__line"   />
      </div>

      {/* Right cell */}
      <div className={`qualification__text-${!isLeft ? 'right' : ''}`}>
        {!isLeft && (
          <>
            <h3 className="qualification__title">{item.title}</h3>
            {item.sub && <span className="qualification__subtitle">{item.sub}</span>}
            <div className="qualification__calendar">
              <i className="uil uil-calendar-alt" /> {item.dates}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Qualifications = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="qualification section">
      <span className="section__subtitle">Mon parcours</span>
      <h2 className="section__title reveal">Mes Qualifications</h2>

      <div className="qualification__container container">

        {/* Tabs */}
        <div className="qualification__tabs reveal d1">
          <button
            className={`qualification__button${tab === 1 ? ' qualification__active' : ''}`}
            onClick={() => setTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon" /> Éducation
          </button>
          <button
            className={`qualification__button${tab === 2 ? ' qualification__active' : ''}`}
            onClick={() => setTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon" /> Expérience
          </button>
        </div>

        {/* Timeline */}
        <div className="qualification__sections">
          <div className={`qualification__content${tab === 1 ? ' qualification__content-active' : ''}`}>
            {education.map((item, i) => <TimelineItem key={i} item={item} />)}
          </div>
          <div className={`qualification__content${tab === 2 ? ' qualification__content-active' : ''}`}>
            {experience.map((item, i) => <TimelineItem key={i} item={item} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qualifications;
