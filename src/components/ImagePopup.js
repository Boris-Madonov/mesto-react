import React from 'react';

function ImagePopup() {
    return(
        <section className="popup popup__image">
            <div className="popup__item">
                <button 
                    className="popup__close-button" 
                    type="button"
                >
                </button>        
                <img 
                    className="popup__item-image" 
                    src="#" 
                    alt="" 
                />
                <p className="popup__item-name"></p>
            </div>
        </section>
    );
}

export default ImagePopup