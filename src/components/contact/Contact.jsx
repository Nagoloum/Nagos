import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactCards = [
  {
    icon: 'uil-envelope',
    title: 'Email',
    data: 'danielnagoloum@gmail.com',
    href: 'mailto:danielnagoloum@gmail.com',
    label: 'Écrire un email',
  },
  {
    icon: 'uil-whatsapp',
    title: 'WhatsApp',
    data: '+33 6 25 83 90 07',
    href: 'https://wa.me/33625839007?text=Salut%20Nagoloum',
    label: 'Écrire sur WhatsApp',
  },
  {
    icon: 'uil-linkedin-alt',
    title: 'LinkedIn',
    data: 'Daniel Nagoloum Talla',
    href: 'https://www.linkedin.com/in/daniel-nagoloum-talla-a3a574388/',
    label: 'Voir le profil',
  },
];

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
        setStatus({ message: 'Message envoyé avec succès ✅', type: 'success' });
        e.target.reset();
      })
      .catch(() => {
        setStatus({ message: "Échec de l'envoi ❌. Réessayez.", type: 'error' });
      });

    setTimeout(() => setStatus({ message: '', type: '' }), 4000);
  };

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Travaillons ensemble</span>
      <h2 className="section__title reveal">Entrer en contact</h2>

      <div className="contact__container container grid">

        {/* Left — info */}
        <div className="reveal-left d2">
          <h3 className="contact__title">Parlons de votre projet</h3>
          <div className="contact__info">
            {contactCards.map(({ icon, title, data, href, label }) => (
              <div key={title} className="contact__card">
                <div className="contact__card-icon-wrap">
                  <i className={`uil ${icon} contact__card-icon`} />
                </div>
                <div className="contact__card-body">
                  <h3 className="contact__card-title">{title}</h3>
                  <span className="contact__card-data">{data}</span>
                  <a href={href} target="_blank" rel="noreferrer" className="contact__button">
                    Contacter <i className="uil uil-arrow-right contact__button-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal-right d2">
          <h3 className="contact__title">Envoyez-moi un message</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nom</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Votre nom complet…"
                required
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="project"
                className="contact__form-input"
                placeholder="Décrivez votre projet ou votre demande…"
                required
              />
            </div>
            <button type="submit" className="button button--flex">
              Envoyer le message
              <i className="uil uil-message button__icon" />
            </button>
          </form>
        </div>

      </div>

      {status.message && (
        <div className={`toast ${status.type}`}>{status.message}</div>
      )}
    </section>
  );
};

export default Contact;
