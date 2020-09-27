import React from 'react';
import PopupWithForm from './PopupWithForm';

function Main() {
    const handleEditAvatarClick = () => {
        document
        .querySelector('.popup__update-avatar')
        .classList.add('popup_opened');
    };

    const handleEditProfileClick = () => {
        document
        .querySelector('.popup__edit-profile')
        .classList.add('popup_opened');
    };

    const handleAddPlaceClick = () => {
        document
        .querySelector('.popup__new-item')
        .classList.add('popup_opened');
    };

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img className="profile__avatar-image" src="#" alt="аватар профиля" />
                        <button 
                            className="profile__avatar-edit" 
                            type="button"
                            onClick={handleEditAvatarClick}
                        >
                        </button>
                    </div>
                    <div className="profile__text">
                        <p className="profile__text-name"></p>
                        <button 
                            className="profile__text-edit" 
                            type="button"
                            onClick={handleEditProfileClick}
                        >
                        </button>
                        <p className="profile__text-description"></p>
                    </div>
                </div>
                <button 
                    className="profile__add-button" 
                    type="button"
                    onClick={handleAddPlaceClick}
                >
                </button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    
                </ul>
            </section>

            <template className="element-template">
                <li className="element">
                    <img className="element__image" src="#" alt="" />
                    <p className="element__description"></p>
                    <div className="element__likes">
                        <button className="element__like" type="button"></button>
                        <p className="element__like-counter"></p>
                    </div>
                    <button className="element__remove" type="button"></button>                    
                </li>
            </template>

            <PopupWithForm 
                name="edit-profile" 
                title="Редактировать профиль"
                children={
                    <>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_account-name" id="entry-field-account-name" type="text" name="name" placeholder="Введите имя" minlength="2" maxlength="40" required />
                            <span className="popup__entry-field-error" id="entry-field-account-name-error"></span>
                        </label>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_account-description" id="entry-field-account-description" type="text" name="about" placeholder="Введите описание" minlength="2" maxlength="200" required />
                            <span className="popup__entry-field-error" id="entry-field-account-description-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm 
                name="update-avatar"
                title="Обновить аватар"
                children={
                    <>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_avatar-image-url" id="entry-field-avatar-image-url" type="url" name="link" placeholder="Ссылка на картинку" required />
                            <span className="popup__entry-field-error" id="entry-field-avatar-image-url-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm 
                name="new-item"
                title="Новое место"
                children={
                    <>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_item-name" id="entry-field-item-name" type="text" name="name" placeholder="Название" minlength="1" maxlength="30" required />
                            <span className="popup__entry-field-error" id="entry-field-item-name-error"></span>
                        </label>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_item-image-url" id="entry-field-item-image-url" type="url" name="link" placeholder="Ссылка на картинку" required />
                            <span className="popup__entry-field-error" id="entry-field-item-image-url-error"></span>
                        </label>
                    </>
                }
            />

            <PopupWithForm 
                name="delete-item"
                title="Вы уверены?"
                children={
                    <>
                    </>
                }
            />

            <section className="popup popup__image">
                <div className="popup__item">
                    <button className="popup__close-button" type="button"></button>        
                    <img className="popup__item-image" src="#" alt="" />
                    <p className="popup__item-name"></p>
                </div>
            </section>

        </main>
    );
}

export default Main