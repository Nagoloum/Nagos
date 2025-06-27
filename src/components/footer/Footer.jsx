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
                    <a href="https://www.instagram.com/its_nagos/" className="footer__social-link" target='_blank'>
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://web.facebook.com/daniel.nago.595038" className="footer__social-link" target='_blank'>
                        <i className="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://wa.me/237698408048?text=Salut%20Nagoloum%20je%20suis%20intéréssé(e)%20par%20un%20des%20services%20de%20ton%20Portfolio." className="footer__social-link" target='_blank'>
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
