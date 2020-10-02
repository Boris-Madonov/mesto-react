import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const user = React.useContext(CurrentUserContext);
    const handleCardClick = () => {
        onCardClick(card);
    };
    const handleLikeClick = () => {
        onCardLike(card);
    };
    const handleDeleteClick = () => {
        onCardDelete(card);
    };

    const isOwn = card.owner._id === user._id;
    const cardDeleteButtonClassName = (
        `element__remove ${isOwn ? '' : 'element__remove_hidden'}`
    );

    const isLiked = card.likes.some(i => i._id === user._id);
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_liked' : ''}`
    );

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
                    className={cardLikeButtonClassName}
                    onClick={handleLikeClick}
                    type="button">
                </button>
                <p className="element__like-counter">{card.likes.length}</p>
            </div>
            <button
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
                type="button">
            </button>                    
        </li>
    );
}

export default Card