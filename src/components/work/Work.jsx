import React from 'react'
import './Work.css';
import Works from './Works';

const Work = () => {
  return (
   <section className="work section" id='portfolio'>
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Projets les plus récents</span>

    <Works />
   </section>
  )
}

export default Work
