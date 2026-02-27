import React from 'react'
import ThemeToggle from './ThemeToggle'

const Social = () => {
  return (
   <div className="home__social">
    {/* <a href="https://www.instagram.com/its_nagos/" className="home__social-icon" target='_blank'>
        <i className="uil uil-instagram"></i>
    </a>*/}
    
    <a href="https://www.linkedin.com/in/daniel-nagoloum-talla-a3a574388/" className="home__social-icon" target='_blank'>
        <i className="uil uil-linkedin-alt"></i>
    </a> 
    
    <a href="https://wa.me/33625839007?text=Salut%20Nagoloum%20je%20suis%20intéréssé(e)%20par%20un%20des%20services%20de%20ton%20Portfolio." className="home__social-icon" target='_blank'>
        <i className="uil uil-whatsapp"></i>
    </a>
   
    <a href="mailto:danielnagoloum@gmail.com" className="home__social-icon" target='_blank'>
        <i className="uil uil-envelope"></i>
    </a>
    
    <a href="https://github.com/Nagoloum" className="home__social-icon" target='_blank'>
        <i className="uil uil-github-alt"></i>
    </a>
    
    <a href="tel:+33625839007" className="home__social-icon" target='_blank'>
        <i className="uil uil-phone "></i>
    </a>
    
    <ThemeToggle />
   </div>
  )
}

export default Social
