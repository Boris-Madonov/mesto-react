import React from 'react';

function ImagePopup(props) {
    return(
        <section className={`popup popup__image ${props.card && 'popup_opened'}`}>
            <div className="popup__item">
                <button 
                    className="popup__close-button" 
                    type="button"
                    onClick={props.onClose}
                >
                </button>        
                <img 
                    className="popup__item-image" 
                    src={props.card.link}
                    alt={props.card.name}
                />
                <p className="popup__item-name">{props.card.name}</p>
            </div>
        </section>
    );
}

export default ImagePopup