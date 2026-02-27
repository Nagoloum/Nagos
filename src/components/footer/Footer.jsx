import React from 'react'
import "./Footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nagoloum.</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">A propos</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projets</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Témoignages</a>
                    </li>
                </ul>

                <div className="footer__social">
                    
                    <a href="mailto:danielnagoloum@gmail.com" target="_blank" className="footer__social-link" >
                        <i className="uil uil-envelope"></i>
                    </a>

                    <a href="tel:+33625839007" target="_blank" className="footer__social-link" >
                        <i className="uil uil-phone"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/daniel-nagoloum-talla-a3a574388/" target="_blank" className="footer__social-link" >
                        <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://wa.me/33625839007?text=Salut%20Nagoloum%20je%20suis%20intéréssé(e)%20par%20un%20des%20services%20de%20ton%20Portfolio." className="footer__social-link" target='_blank'>
                        <i className="uil uil-whatsapp"></i>
                    </a>

                    <a href="https://github.com/Nagoloum" className="footer__social-link" target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; {currentYear} Nagoloum. Tout droits réservés</span>
            </div>
        </footer>
    )
}

export default Footer
