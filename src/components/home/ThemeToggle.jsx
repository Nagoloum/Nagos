import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

/* Source de vérité : la classe du body (posée avant le rendu par index.html).
   Plusieurs boutons (accueil + navbar) restent synchronisés via l'événement « themechange ». */
const isDark = () => document.body.classList.contains('dark-theme');

const ThemeToggle = ({ className = '' }) => {
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    const sync = () => setDark(isDark());
    window.addEventListener('themechange', sync);
    return () => window.removeEventListener('themechange', sync);
  }, []);

  const handleClick = (e) => {
    document.body.style.setProperty('--wave-x', `${e.clientX}px`);
    document.body.style.setProperty('--wave-y', `${e.clientY}px`);
    document.body.classList.add('animating');
    setTimeout(() => {
      const next = !isDark();
      document.body.classList.toggle('dark-theme', next);
      try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* stockage indisponible */ }
      window.dispatchEvent(new Event('themechange'));
      setTimeout(() => document.body.classList.remove('animating'), 600);
    }, 50);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`theme-toggle ${className}`.trim()}
      aria-label={dark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={dark ? 'Thème clair' : 'Thème sombre'}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">
          <i className={`uil ${dark ? 'uil-sun' : 'uil-moon'}`} />
        </span>
      </span>
    </button>
  );
};
export default ThemeToggle;
