import React, { useState } from 'react';

const Workitems = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="work__card reveal-scale">

        {/* Image + overlay */}
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
                <i className="uil uil-expand-arrows-alt" /> Agrandir
              </button>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="work__body">
          <h3 className="work__title">{item.title}</h3>
          <span className="work__category">{item.category}</span>
        </div>
      </div>

      {/* Modal viewer */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)}>
              <i className="uil uil-times" />
            </button>
            <img src={item.image} alt={item.title} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Workitems;
