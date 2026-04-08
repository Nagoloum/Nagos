import React, { useState } from 'react';

const Workitems = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="work__card reveal-scale">
        <div className="work__img-wrap">
          <img src={item.image} alt={item.title} className="work__img" />
          <div className="work__overlay">
            {item.category === 'Web' ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="work__overlay-btn"
              >
                <i className="uil uil-external-link-alt" /> Voir le site
              </a>
            ) : (
              <button className="work__overlay-btn" onClick={() => setOpen(true)}>
                <i className="uil uil-info-circle" /> Voir les détails
              </button>
            )}
          </div>
        </div>

        <div className="work__body">
          <h3 className="work__title">{item.title}</h3>
          <span className="work__category-tag">{item.category}</span>
          {item.desc && <p className="work__desc">{item.desc}</p>}
          {item.tech && (
            <div className="work__tech">
              {item.tech.slice(0, 3).map((t) => (
                <span key={t} className="work__tech-tag">{t}</span>
              ))}
              {item.tech.length > 3 && (
                <span className="work__tech-tag work__tech-tag--more">+{item.tech.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Details modal for App items */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content modal-detail" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>
              <i className="uil uil-times" />
            </button>
            <img src={item.image} alt={item.title} className="modal-image" />
            <div className="modal-info">
              <h3 className="modal-info__title">{item.title}</h3>
              <p className="modal-info__desc">{item.desc}</p>
              {item.tech && (
                <div className="work__tech modal-tech">
                  {item.tech.map(t => (
                    <span key={t} className="work__tech-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workitems;
