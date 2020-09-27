import React from 'react';

function Card(props) {
    return(
        <li className="element">
            <img 
                className="element__image"
                src={props.link}
                alt={props.name}
            />
            <p className="element__description">{props.name}</p>
            <div className="element__likes">
                <button
                    className="element__like"
                    type="button">
                </button>
                <p className="element__like-counter">{props.likes.length}</p>
            </div>
            <button
                className="element__remove"
                type="button">
            </button>                    
        </li>
    );
}

export default Card