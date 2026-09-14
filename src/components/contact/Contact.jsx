import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

/* Clés EmailJS publiques (surchargeables via .env : VITE_EMAILJS_*) */
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gjhs94d",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_i8queid",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ID02cnIwxSCL9HOqx",
};

const contactCards = [
  {
    icon: "uil-envelope",
    title: "Email",
    data: "nagoloumtalladanielparfait@gmail.com",
    href: "mailto:nagoloumtalladanielparfait@gmail.com",
    label: "Écrire un email",
  },
  {
    icon: "uil-phone",
    title: "Téléphone",
    data: "06 25 83 90 07",
    href: "tel:+33625839007",
    label: "Appeler",
  },
  {
    icon: "uil-linkedin-alt",
    title: "LinkedIn",
    data: "linkedin.com/in/nagoloum",
    href: "https://www.linkedin.com/in/nagoloum",
    label: "Voir le profil LinkedIn",
  },
  {
    icon: "uil-github-alt",
    title: "GitHub",
    data: "github.com/Nagoloum",
    href: "https://github.com/Nagoloum",
    label: "Voir le profil GitHub",
  },
];

const formatDate = (d) =>
  d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }) +
  " à " +
  d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  /* Masque le toast 4 s après son affichage */
  useEffect(() => {
    if (!status.message) return;
    const t = setTimeout(() => setStatus({ message: "", type: "" }), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending) return;
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          date: formatDate(new Date()),
        },
        EMAILJS.publicKey,
      );
      setStatus({
        message: "Message envoyé ✅ Je vous réponds rapidement.",
        type: "success",
      });
      formEl.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus({
        message: "Échec de l'envoi ❌. Réessayez ou écrivez-moi par email.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Travaillons ensemble</span>
      <h2 className="section__title reveal">Entrer en contact</h2>

      <div className="contact__container container grid">

        <div className="reveal-left d2">
          <div className="contact__info">
            {contactCards.map(({ icon, title, data, href, label }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={title}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="contact__card"
                  aria-label={`${label} : ${data}`}
                >
                  <span className="contact__card-icon-wrap">
                    <i className={`uil ${icon} contact__card-icon`} />
                  </span>
                  <span className="contact__card-title">{title}</span>
                  <span className="contact__card-data">
                    {data.includes("@") ? (
                      <>
                        {data.split("@")[0]}
                        <wbr />@{data.split("@")[1]}
                      </>
                    ) : (
                      data
                    )}
                  </span>
                  <span className="contact__button" aria-hidden="true">
                    Contacter{" "}
                    <i className="uil uil-arrow-right contact__button-icon" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="reveal-right d2">
          <h3 className="contact__title">Envoyez-moi un message</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="contact-name" className="contact__form-tag">
                Nom
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                className="contact__form-input"
                placeholder="Votre nom complet…"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="contact-email" className="contact__form-tag">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                className="contact__form-input"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="contact-message" className="contact__form-tag">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__form-input"
                placeholder="Présentez votre entreprise, le poste ou votre projet…"
                required
              />
            </div>

            <button
              type="submit"
              className="button button--flex"
              disabled={sending}
              aria-busy={sending}
            >
              {sending ? "Envoi en cours…" : "Envoyer le message"}
              <i
                className={`uil ${sending ? "uil-spinner-alt" : "uil-message"} button__icon`}
              />
            </button>
          </form>
        </div>
      </div>

      {status.message && (
        <div
          className={`toast ${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
