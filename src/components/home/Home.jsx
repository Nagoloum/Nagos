import React from 'react';
import './Home.css';
import Social     from './Social';
import Data       from './Data';
import ScrollDown from './ScrollDown';

const Home = () => (
  <section className="home section" id="home">
    <div className="home__container container grid">
      <div className="home__content grid">
        <Social />
        <div className="home__img" role="img" aria-label="Photo de Daniel Nagoloum" />
        <Data />
      </div>
      <ScrollDown />
    </div>
  </section>
);

export default Home;
