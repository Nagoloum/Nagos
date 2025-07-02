import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                < i class='bx bx-medal-star-alt about__icon'  ></i>
                <h3 className="about__title">Expérience</h3>
                <span className="about__subtitle">+ 4 Années de Travail</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Terminés</h3>
                <span className="about__subtitle">+ 15 projets</span>
            </div>

            <div className="about__box">
                < i class='bx bx-headphone-mic about__icon'  ></i>
                <h3 className="about__title">Assistance</h3>
                <span className="about__subtitle">En ligne 24H/7</span>
            </div>
        </div>
    )
}

export default Info
