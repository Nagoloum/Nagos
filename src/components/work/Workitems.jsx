import React, { useState } from 'react'

const Workitems = ({ item }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div className="work__card" key={item.id}>
                <img src={item.image} alt="" className='work__img' />
                <h3 className="work__title">{item.title}</h3>
                {item.category === 'Web' ? (
                    <a href={item.link} className="work__button" target='blank_'>
                        Demo <i className="uil uil-arrow-right work__button-icon"></i>
                    </a>
                ) : (
                    <button onClick={openModal} className="work__buttonn">
                        Voir <i className="uil uil-arrow-right work__button-iconn"></i>
                    </button>
                )}

            </div>

            {/*Modal*/}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}><i className="uil uil-times"></i></button>
                        <img src={item.image} alt="apercu" className="modal-image" />
                    </div>
                </div>
            )}
        </>
    )
}

export default Workitems
