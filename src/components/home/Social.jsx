import React from 'react'
import ThemeToggle from './ThemeToggle'

const Social = () => {
  return (
   <div className="home__social">
    <a href="https://www.instagram.com/its_nagos/" className="home__social-icon" target='_blank'>
        <i className="uil uil-instagram"></i>
    </a>
    
    <a href="https://web.facebook.com/daniel.nago.595038" className="home__social-icon" target='_blank'>
        <i className="uil uil-facebook-f"></i>
    </a>
    
    <a href="https://wa.me/33769477997?text=Salut%20Nagoloum%20je%20suis%20intéréssé(e)%20par%20un%20des%20services%20de%20ton%20Portfolio." className="home__social-icon" target='_blank'>
        <i className="uil uil-whatsapp"></i>
    </a>
    
    <a href="https://github.com/Nagoloum" className="home__social-icon" target='_blank'>
        <i className="uil uil-github-alt"></i>
    </a>
    
    <ThemeToggle />
   </div>
  )
}

export default Social
