import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => (
  <section className="home section" id="home">
    <div className="home__container container grid">
      <div className="home__content grid">
        <Social />

        {/* ── Image + badge ── */}
        <div className="home__img-wrap">
          <div className="home__img" role="img" aria-label="Photo de Daniel Nagoloum" />
          <div className="home__img-badge">
            <strong>4+</strong>
            <span>ans d'XP</span>
          </div>
        </div>

        <Data />
      </div>
      <ScrollDown />
    </div>
  </section>
);

export default Home;
