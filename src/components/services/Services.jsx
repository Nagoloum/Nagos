import React, { useState } from 'react'
import "./Services.css";
import Flyer_FR from "../../assets/FlyerFR.jpg";
import Flyer_EN from "../../assets/FlyerEN.jpg";

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Mes Services</h2>
            <span className="section__subtitle">Ce que j'offre</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Graphic <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Voir plus <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title"><i className="uil uil-web-grid services__icon"></i>Graphic Designer</h3>
                            <p className="services__modal-description">
                                Service avec plus de 3 ans d'expérience. Je fourni un travail de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conception des Logos, Flyers et Cartes de Visites.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Montages Videos.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Gestion de Communauté.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conception des maquettes de Sites Web et Applications et autres...</p>
                                </li>
                            </ul>

                            Télécharger le Flyer :
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginTop: '20px' }}>
                                <a
                                    className={`button`}
                                    href={Flyer_FR}
                                    download="Flyer_Graphic_Design_FR.jpg"
                                    style={{ justifyContent: 'center', alignItems: 'center' }}
                                >
                                    Flyer en français

                                </a>
                                <a
                                    className={`button`}
                                    href={Flyer_EN}
                                    download="Flyer_Graphic_Design_EN.jpg"
                                    style={{ justifyContent: 'center', alignItems: 'center' }}
                                >
                                    Flyer en anglais

                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Voir plus <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title"><i className="uil uil-arrow services__icon"></i>UI/UX Designer</h3>
                            <p className="services__modal-description">
                                Service avec plus de 3 ans d'expérience. Je fourni un travail de qualité aux clients et aux entreprises.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Développement des interfaces utilisateurs.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Développement des Pages Web.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Création des interactions d'éléments UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conception et Développement des Applications Web, Mobiles et Desktop et autres...</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        {/* Changement de l'icône pour quelque chose de plus technique (brackets) */}
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">
                            Développement <br /> Front et Back-end
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Voir plus <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title"><i className="uil uil-brackets-curly services__icon"></i>Développeur Full Stack</h3>

                            <p className="services__modal-description">
                                Développeur avec plus de 4 ans d'expérience. Je conçois des applications web complètes, performantes et adaptées aux besoins des entreprises.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Création d'interfaces utilisateur (UI) modernes et réactives.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Développement d'APIs robustes et sécurisées (Node.js, Python, etc.).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conception et gestion de bases de données (SQL et NoSQL).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimisation des performances et déploiement continu.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
