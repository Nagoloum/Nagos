import React, { useState } from 'react';
import './Qualifications.css';

const education = [
  { title: 'Mastère Développement Full-Stack (projet de poursuite d\'études)',
    sub: 'INGETIS — en alternance',            dates: 'Rentrée 2026',  side: 'left'  },
  { title: 'Bachelor Développement / Data', sub: 'INGETIS, Paris',     dates: '2025 – 2026', side: 'right' },
  { title: 'BTS (Bac+2)',         sub: 'GTES',                        dates: '2024 – 2025', side: 'left'  },
  { title: 'Baccalauréat D',      sub: 'Lycée Bilingue Bafoussam',    dates: '2021 – 2022', side: 'right' },
  { title: 'Probatoire D',        sub: 'Lycée Bilingue Bafoussam',    dates: '2020 – 2021', side: 'left'  },
];
const experience = [
  { title: 'Stagiaire Développeur Front-End',
    sub: 'DATALIA — plateforme immobilière KILICASA',
    dates: 'Avril 2026 — stage de 3 mois', side: 'left' },
  { title: 'Développeur Full Stack JS', sub: 'Projets perso & freelance', dates: '2021 – Auj.', side: 'right' },
  { title: 'Design Graphique & Motion', sub: 'BRITECH',                  dates: '2022 – 2025', side: 'left'  },
  { title: 'Trading algorithmique',     sub: 'Python / Streamlit',        dates: '2023 – Auj.', side: 'right' },
  { title: 'Game Dev (Unity/C#)',       sub: 'Shadow Escape',             dates: '2023 – 2024', side: 'left'  },
];
const certifications = [
  { title: 'Claude Code', sub: 'Anthropic', dates: '', side: 'left' },
];

const TimelineItem = ({ item }) => {
  const isLeft = item.side === 'left';
  return (
    <div className="qualification__data">
      <div className={isLeft ? 'qualification__text-left' : ''}>
        {isLeft && <>
          <h3 className="qualification__title">{item.title}</h3>
          {item.sub && <span className="qualification__subtitle">{item.sub}</span>}
          {item.dates && <div className="qualification__calendar"><i className="uil uil-calendar-alt" /> {item.dates}</div>}
        </>}
      </div>
      <div>
        <span className="qualification__rounder" />
        <span className="qualification__line" />
      </div>
      <div className={!isLeft ? 'qualification__text-right' : ''}>
        {!isLeft && <>
          <h3 className="qualification__title">{item.title}</h3>
          {item.sub && <span className="qualification__subtitle">{item.sub}</span>}
          {item.dates && <div className="qualification__calendar"><i className="uil uil-calendar-alt" /> {item.dates}</div>}
        </>}
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
        <div className="qualification__tabs reveal d1">
          <button className={`qualification__button${tab===1?' qualification__active':''}`} onClick={()=>setTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon" /> Éducation
          </button>
          <button className={`qualification__button${tab===2?' qualification__active':''}`} onClick={()=>setTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon" /> Expérience
          </button>
          <button className={`qualification__button${tab===3?' qualification__active':''}`} onClick={()=>setTab(3)}>
            <i className="uil uil-award qualification__icon" /> Certifications
          </button>
        </div>
        <div className="qualification__sections">
          <div className={`qualification__content${tab===1?' qualification__content-active':''}`}>
            {education.map((item,i) => <TimelineItem key={i} item={item} />)}
          </div>
          <div className={`qualification__content${tab===2?' qualification__content-active':''}`}>
            {experience.map((item,i) => <TimelineItem key={i} item={item} />)}
          </div>
          <div className={`qualification__content${tab===3?' qualification__content-active':''}`}>
            {certifications.map((item,i) => <TimelineItem key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Qualifications;
