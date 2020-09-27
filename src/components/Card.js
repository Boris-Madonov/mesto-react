import React from 'react';

function Card({ card, onCardClick }) {
    const handleCardClick = () => {
        onCardClick(card);
    }

    return(
        <li className="element">
            <img 
                className="element__image"
                src={card.link}
                alt={card.name}
                onClick={handleCardClick}
            />
            <p className="element__description">{card.name}</p>
            <div className="element__likes">
                <button
                    className="element__like"
                    type="button">
                </button>
                <p className="element__like-counter">{card.likes.length}</p>
            </div>
            <button
                className="element__remove"
                type="button">
            </button>                    
        </li>
    );
}

export default Card