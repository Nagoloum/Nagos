import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import './NotFoundPage.css';

const shortcuts = [
  { to: '/blog',    icon: 'uil-newspaper', label: 'Blog'    },
  { to: '/#contact', icon: 'uil-message',  label: 'Contact' },
];

const NotFoundPage = () => {
  const { pathname } = useLocation();

  usePageMeta({
    title: 'Page introuvable (404) - Daniel Nagoloum Talla',
    description: "Cette page n'existe pas ou a été déplacée.",
    path: pathname,
    noindex: true,
  });

  return (
    <div className="page">
      <section className="notfound section">
        <div className="notfound__container container">
          <span className="section__subtitle">Erreur 404</span>
          <div className="notfound__code" aria-hidden="true">404</div>
          <h1 className="notfound__title">Cette page est introuvable</h1>
          <p className="notfound__text">
            L'adresse <code className="notfound__path">{pathname}</code> n'existe pas
            ou a été déplacée.
          </p>

          <div className="notfound__actions">
            <Link to="/" className="button button--flex">
              Retour à l'accueil <i className="uil uil-estate button__icon" />
            </Link>
            <Link to="/portfolio" className="button button--ghost button--flex">
              Voir mes projets <i className="uil uil-arrow-right button__icon" />
            </Link>
          </div>

          <ul className="notfound__links">
            {shortcuts.map(({ to, icon, label }) => (
              <li key={to}>
                <Link to={to} className="notfound__link">
                  <i className={`uil ${icon}`} /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
