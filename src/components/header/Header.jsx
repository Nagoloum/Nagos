import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { href: '#home',         icon: 'uil-estate',        label: 'Accueil'      },
  { href: '#about',        icon: 'uil-user',           label: 'À propos'     },
  { href: '#skills',       icon: 'uil-file-alt',       label: 'Compétences'  },
  { href: '#services',     icon: 'uil-briefcase-alt',  label: 'Services'     },
  { href: '#portfolio',    icon: 'uil-scenery',        label: 'Portfolio'    },
  { href: '#testimonials', icon: 'uil-chat',           label: 'Avis'         },
  { href: '#contact',      icon: 'uil-message',        label: 'Contact'      },
];

const Header = () => {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeNav,  setActiveNav]  = useState('#home');
  const [scrolled,   setScrolled]   = useState(false);

  /* ── Scroll: shadow + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 80);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? ' scroll-header' : ''}`}>
      <nav className="nav container">

        {/* Logo */}
        <a href="/" className="nav__logo">
          <img src="/logopng.png" alt="Nagoloum" className="nav__logo-img" />
          Nagoloum<span className="nav__logo-dot" />
        </a>

        {/* Navigation */}
        <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`}>
          <ul className="nav__list grid">
            {navLinks.map(({ href, icon, label }) => (
              <li key={href} className="nav__item">
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className={`nav__link${activeNav === href ? ' active-link' : ''}`}
                >
                  <i className={`uil ${icon} nav__icon`} />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Toggle */}
        <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="uil uil-apps" />
        </div>

      </nav>
    </header>
  );
};

export default Header;
