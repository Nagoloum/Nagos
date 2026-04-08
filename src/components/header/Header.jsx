import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const navLinks = [
  { href: '#home',         icon: 'uil-estate',        label: 'Accueil'      },
  { href: '#about',        icon: 'uil-user',           label: 'À propos'     },
  { href: '#skills',       icon: 'uil-file-alt',       label: 'Compétences'  },
  { href: '#services',     icon: 'uil-briefcase-alt',  label: 'Services'     },
  { href: '#portfolio',    icon: 'uil-scenery',        label: 'Portfolio'    },
  { href: '#blog',         icon: 'uil-newspaper',      label: 'Blog'         },
  { href: '#testimonials', icon: 'uil-chat',           label: 'Avis'         },
  { href: '#contact',      icon: 'uil-message',        label: 'Contact'      },
];

const Header = () => {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeNav,  setActiveNav]  = useState('#home');
  const [scrolled,   setScrolled]   = useState(false);
  const menuRef = useRef(null);

  /* ── Scroll: shadow + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 80);
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

  /* ── Close on outside click ── */
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [menuOpen]);

  /* ── Prevent body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay backdrop */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      <header className={`header${scrolled ? ' scroll-header' : ''}`}>
        <nav className="nav container" ref={menuRef}>

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

            <button
              className="nav__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <i className="uil uil-times" />
            </button>
          </div>

          {/* Hamburger toggle */}
          <button
            className="nav__toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <i className={`uil ${menuOpen ? 'uil-times' : 'uil-apps'}`} />
          </button>

        </nav>
      </header>
    </>
  );
};

export default Header;
