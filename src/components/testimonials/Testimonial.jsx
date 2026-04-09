import React from 'react';
import './Testimonial.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => (
  <section className="testimonial section" id="testimonials">
    <span className="section__subtitle">Ce qu'ils disent</span>
    <h2 className="section__title reveal">Témoignages clients</h2>
    <div className="container">
      <Swiper className="testimonial__container reveal d2" loop grabCursor spaceBetween={24}
        pagination={{ clickable:true }} autoplay={{ delay:5000, disableOnInteraction:false }}
        breakpoints={{ 576:{slidesPerView:2}, 768:{slidesPerView:2,spaceBetween:32} }}
        modules={[Pagination, Autoplay]}>
        {Data.map(({ id, title, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <h3 className="testimonial__name">— {title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial__add reveal d3">
        <h3 className="testimonial__add-title">Laissez votre avis</h3>
        <span className="testimonial__add-sub">Votre retour compte énormément ✨</span>
        <form className="testimonial__form" action="https://formspree.io/f/mdkqdvbr" method="POST">
          <div className="testimonial__form-div">
            <label className="testimonial__form-tag">Nom</label>
            <input type="text" name="nom" className="testimonial__form-input" placeholder="Votre prénom & nom..." required />
          </div>
          <div className="testimonial__form-div testimonial__form-div--area">
            <label className="testimonial__form-tag">Commentaire</label>
            <textarea name="commentaire" className="testimonial__form-input" placeholder="Partagez votre expérience..." required />
          </div>
          <button type="submit" className="button button--accent button--flex" style={{ alignSelf:'center' }}>
            Envoyer mon avis <i className="uil uil-message button__icon" />
          </button>
        </form>
        <p className="testimonial__note">Votre témoignage sera ajouté après validation. Merci !</p>
      </div>
    </div>
  </section>
);
export default Testimonial;
