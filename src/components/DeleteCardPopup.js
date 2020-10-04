import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ card, isOpen, onClose, onCardDelete }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        onCardDelete(card);
    };

    return(
        <PopupWithForm 
            name="delete-item"
            title="Вы уверены?"
            submit="Да"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        />
    );
}

export default DeleteCardPopup