import React from 'react';
import { Link } from 'react-router-dom';


const Data = () => (
  <div className="home__data">
    <span className="home__greeting" style={{ marginTop: '40px' }}>
      <i className="uil uil-smile" /> Bonjour, je suis
    </span>
    <h1 className="home__title">
      <span className="home__name-accent">Daniel</span> Nagoloum
    </h1>
    <h3 className="home__subtitle" style={{ marginTop: '15px' }}>Développeur Full-Stack · Data · IA</h3>
    <p className="home__description">
      Diplômé d'un Bachelor Développement / Data (INGETIS Paris), j'intègre le
      Mastère Développement Logiciel. Je conçois des applications web complètes,
      de l'interface au back-end en passant par la gestion des données, et je
      recherche une alternance de 24 mois dès septembre 2026.
    </p>

    <div className="home__cta">
      <Link to="/#contact" className="button button--flex">
        Dites Bonjour
        <i className="uil uil-message button__icon" />
      </Link>
      <Link to="/portfolio" className="button button--ghost button--flex">
        Voir mon travail <i className="uil uil-arrow-right button__icon" />
      </Link>

    </div>
  </div>
);

export default Data;
