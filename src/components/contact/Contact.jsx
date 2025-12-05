import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {

    const form = useRef();
    const [status, setStatus] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gjhs94d', 'template_i8queid', form.current, {
                publicKey: 'ID02cnIwxSCL9HOqx',
            })
            .then(() => {
                setStatus({ message: "Message envoyé avec succès ✅", type: "success" });
                e.target.reset();
            })
            .catch(() => {
                setStatus({ message: "Échec de l'envoi ❌. Réessayez plus tard.", type: "error" });
            });

        // Efface le message après 4 secondes
        setTimeout(() => {
            setStatus({ message: '', type: '' });
        }, 4000);
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Entrer en contact</h2>
            <span className="section__subtitle">Contactez moi !</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Parlez moi</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bxr  bx-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">danielnagoloum@gmail.com</span>

                            <a href="mailto:danielnagoloum@gmail.com" target='blank_' className="contact__button">Ecrivez-moi <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">+33 7 69 47 79 97</span>

                            <a href="https://wa.me/33769477997?text=Salut%20Nagoloum%20je%20suis%20intéréssé(e)%20par%20un%20des%20services%20de%20ton%20Portfolio." target='blank_' className="contact__button">Ecrivez-moi <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-facebook-f contact__card-icon"></i>

                            <h3 className="contact__card-title">Facebook</h3>
                            <span className="contact__card-data">Daniel Nago</span>

                            <a href="https://web.facebook.com/daniel.nago.595038" target='blank_' className="contact__button">Ecrivez-moi <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Donnez moi votre projet</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        {/* Champs */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Entrez votre nom..."  required/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Entrez votre adresse email..."  required/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Projet</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Écrivez votre projet..." required></textarea>
                        </div>

                        <button className="button button--flex">
                            Envoyer le message
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
                </div>
            </div>

            {/* --- Popup de confirmation/erreur --- */}
            {status.message && (
                <div className={`toast ${status.type}`}>
                    {status.message}
                </div>
            )}
        </section>
    );
};

export default Contact
