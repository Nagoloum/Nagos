import React from 'react'
import "./Testimonial.css";
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">Mes clients ont dit</h2>
            <span className="section__subtitle">Témoignages</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000, // Défilement automatique toutes les 3 secondes
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {Data.map(({ id, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>

                            <h3 className="testimonial__name">_{title}_</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/* Formulaire pour ajouter un nouveau témoignage (envoi via Formspree) */}
            <div className="contact section">
                <h2 className="section__title">Ajoutez votre témoignage</h2>
                <span className="section__subtitle">Donnez moi votre avis.</span>

                <div className="contact__content">

                    <form className="contact__form" action="https://formspree.io/f/mdkqdvbr" method="POST" encType="multipart/form-data">
                        {/* Champs */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Nom</label>
                            <input type="text" name="nom" className="contact__form-input" placeholder="Entrez votre nom..." required />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Commentaire</label>
                            <textarea name="commentaire" cols="30" rows="10" className="contact__form-input" placeholder="Écrivez votre commentaire..." required></textarea>
                        </div>

                        <button className="button button--flex">
                            Donner mon avis
                            <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                    <p style={{ fontSize: 'var(--small-font-size)', marginTop: '3rem', textAlign: 'center' }}>
                        Votre témoignage sera envoyé par email. Je l'ajouterai manuellement au site après validation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
