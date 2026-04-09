import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { href: '#home',         icon: 'uil-estate',        label: 'Accueil'     },
  { href: '#about',        icon: 'uil-user',           label: 'À propos'    },
  { href: '#skills',       icon: 'uil-brackets-curly', label: 'Compétences' },
  { href: '#services',     icon: 'uil-briefcase-alt',  label: 'Services'    },
  { href: '#portfolio',    icon: 'uil-scenery',        label: 'Portfolio'   },
  { href: '#blog',         icon: 'uil-newspaper',      label: 'Blog'        },
  { href: '#testimonials', icon: 'uil-chat',           label: 'Avis'        },
  { href: '#contact',      icon: 'uil-message',        label: 'Contact'     },
];

const Header = () => {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [scrolled,  setScrolled]  = useState(false);

  /* Active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 80);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const openMenu  = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleLinkClick = (href) => {
    setActiveNav(href);
    closeMenu();
  };

  return (
    <>
      {/* ── Dark overlay behind the menu sheet ─────────────── */}
      {menuOpen && (
        <div
          className="nav__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className={`header${scrolled ? ' scroll-header' : ''}`}>
        <nav className="nav container">

          {/* Logo */}
          <a href="/" className="nav__logo">
            Nagoloum <span className="nav__logo-dot" />
          </a>

          {/* ── Nav menu panel ── */}
          <div className={`nav__menu${menuOpen ? ' show-menu nav__menuf' : ''}`}>

            {/* Close button — only inside the sheet */}
            <button
              type="button"
              className="nav__close"
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <i className="uil uil-times" />
            </button>

            <ul className="nav__list">
              {navLinks.map(({ href, icon, label }) => (
                <li key={href} className="nav__item">
                  <a
                    href={href}
                    onClick={() => handleLinkClick(href)}
                    className={`nav__link${activeNav === href ? ' active-link' : ''}`}
                  >
                    <i className={`uil ${icon} nav__icon`} />
                    <span className="nav__label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Hamburger — only visible on mobile ── */}
          <button
            type="button"
            className="nav__toggle"
            onClick={openMenu}
            aria-label="Ouvrir le menu"
          >
            <i className="uil uil-apps" />
          </button>

        </nav>
      </header>
    </>
  );
};

export default Header;
