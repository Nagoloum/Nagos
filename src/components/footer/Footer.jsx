import React from 'react';
import './Footer.css';

const socials = [
  { href: 'mailto:nagoloumtalladanielparfait@gmail.com', icon: 'uil-envelope',   label: 'Email'    },
  { href: 'tel:+33625839007',                            icon: 'uil-phone',      label: 'Tél'      },
  { href: 'https://www.linkedin.com/in/daniel-nagoloum-talla-a3a574388/', icon: 'uil-linkedin-alt', label: 'LinkedIn' },
  { href: 'https://wa.me/33625839007',                   icon: 'uil-whatsapp',   label: 'WhatsApp' },
  { href: 'https://github.com/Nagoloum',                 icon: 'uil-github-alt', label: 'GitHub'   },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__container container">
      <a href="/" className="footer__logo">Nagoloum<span className="footer__logo-dot" /></a>
      <ul className="footer__list">
        {[['#about','À propos'],['#portfolio','Portfolio'],['#blog','Blog'],['#testimonials','Témoignages'],['#contact','Contact']].map(([href,label]) => (
          <li key={href}><a href={href} className="footer__link">{label}</a></li>
        ))}
      </ul>
      <div className="footer__social">
        {socials.map(({ href, icon, label }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" className="footer__social-link" aria-label={label}>
            <i className={`uil ${icon}`} />
          </a>
        ))}
      </div>
      <span className="footer__copy">© <span>{new Date().getFullYear()}</span> Daniel Nagoloum · Tous droits réservés</span>
    </div>
  </footer>
);
export default Footer;
