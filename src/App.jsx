import React from 'react';
import './App.css';
import Cursor          from './components/cursor/Cursor';
import Header          from './components/header/Header';
import Home            from './components/home/Home';
import About           from './components/about/About';
import Skills          from './components/skills/Skills';
import Services        from './components/services/Services';
import Qualifications  from './components/qualifications/Qualifications';
import Testimonial     from './components/testimonials/Testimonial';
import Contact         from './components/contact/Contact';
import Footer          from './components/footer/Footer';
import Scrollup        from './components/scrollup/Scrollup';
import Work            from './components/work/Work';
import Blog            from './components/blog/Blog';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();
  return (
    <>
      {/* Aurora background */}
      <div className="bg-aurora" aria-hidden="true">
        <div className="bg-aurora__gradient" />
        <div className="bg-aurora__dots" />
        <div className="bg-aurora__dots" />
        <div className="bg-aurora__dots" />
      </div>

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
