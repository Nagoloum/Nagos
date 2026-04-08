import React from 'react';
import './App.css';
import Cursor         from './components/cursor/Cursor';
import Header         from './components/header/Header';
import Home           from './components/home/Home';
import About          from './components/about/About';
import Skills         from './components/skills/Skills';
import Services       from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Testimonial    from './components/testimonials/Testimonial';
import Contact        from './components/contact/Contact';
import Footer         from './components/footer/Footer';
import Scrollup       from './components/scrollup/Scrollup';
import Work           from './components/work/Work';
import Blog           from './components/blog/Blog';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      {/* Animated background */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="bg-blob bg-blob--1" />
        <div className="bg-blob bg-blob--2" />
        <div className="bg-blob bg-blob--3" />
        <div className="bg-blob bg-blob--4" />
      </div>
      <div className="bg-grid" aria-hidden="true" />

      <Cursor />
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Blog />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
