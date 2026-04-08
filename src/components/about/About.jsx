import React, { useState } from 'react';
import './About.css';
import AboutImg from '../../assets/moi.jpg';
import CV_tech       from '../../assets/Mon_CV_Dev.pdf';
import CV_Infographie from '../../assets/CV_Infographiste.pdf';
import Info from './Info';

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
            Développeur Frontend & Backend, je crée des expériences web modernes
            avec une attention particulière au design UI/UX. Je dispense également
            des formations en trading. Avec plus de 5 ans d'expérience et 15 projets
            livrés, je mets ma passion au service de vos ambitions.
          </p>

          {/* CV download */}
          <div className="about__cv-wrapper">
            <button
              onClick={() => setIsSplit(true)}
              className={`button button--flex about__cv-main${isSplit ? ' hidden' : ''}`}
            >
              Télécharger mon CV
              <i className="uil uil-import button__icon" />
            </button>

            <div className={`about__cv-split${isSplit ? ' visible' : ''}`}>
              <a
                href={CV_tech}
                download="CV_Daniel_Nagoloum_Dev.pdf"
                className="button button--flex about__cv-btn"
              >
                CV Développeur <i className="uil uil-file-alt button__icon" />
              </a>
              <a
                href={CV_Infographie}
                download="CV_Daniel_Nagoloum_Design.pdf"
                className="button button--flex about__cv-btn"
              >
                CV Design <i className="uil uil-image button__icon" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
