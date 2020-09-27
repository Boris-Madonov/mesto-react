import React from 'react';

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

            <section className="popup popup__edit-profile">
                <form className="popup__container" name="edit-profile-form" action="#" method="GET" novalidate>
                    <button className="popup__close-button" type="button"></button>
                    <p className="popup__container-name">Редактировать профиль</p>
                    <fieldset className="popup__container-form">
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_account-name" id="entry-field-account-name" type="text" name="name" placeholder="Введите имя" minlength="2" maxlength="40" required />
                            <span className="popup__entry-field-error" id="entry-field-account-name-error"></span>
                        </label>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_account-description" id="entry-field-account-description" type="text" name="about" placeholder="Введите описание" minlength="2" maxlength="200" required />
                            <span className="popup__entry-field-error" id="entry-field-account-description-error"></span>
                        </label>
                        <button className="popup__submit-button" type="submit">Сохранить</button>
                    </fieldset>
                </form>
            </section>

            <section className="popup popup__update-avatar">
                <form className="popup__container" name="update-avatar-form" action="#" method="GET" novalidate>
                    <button className="popup__close-button" type="button"></button>
                    <p className="popup__container-name">Обновить аватар</p>
                    <fieldset className="popup__container-form">
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_avatar-image-url" id="entry-field-avatar-image-url" type="url" name="link" placeholder="Ссылка на картинку" required />
                            <span className="popup__entry-field-error" id="entry-field-avatar-image-url-error"></span>
                        </label>
                        <button className="popup__submit-button" type="submit">Сохранить</button>
                    </fieldset>
                </form>
            </section>

            <section className="popup popup__new-item">
                <form className="popup__container" name="new-item-form" action="#" method="GET" novalidate>
                    <button className="popup__close-button" type="button"></button>
                    <p className="popup__container-name">Новое место</p>
                    <fieldset className="popup__container-form">
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_item-name" id="entry-field-item-name" type="text" name="name" placeholder="Название" minlength="1" maxlength="30" required />
                            <span className="popup__entry-field-error" id="entry-field-item-name-error"></span>
                        </label>
                        <label className="popup__form-field">
                            <input className="popup__entry-field popup__entry-field_item-image-url" id="entry-field-item-image-url" type="url" name="link" placeholder="Ссылка на картинку" required />
                            <span className="popup__entry-field-error" id="entry-field-item-image-url-error"></span>
                        </label>
                        <button className="popup__submit-button" type="submit">Создать</button>
                    </fieldset>
                </form>
            </section>

            <section className="popup popup__delete-item">
                <form className="popup__container" name="delete-item-form" action="#" method="GET" novalidate>
                    <button className="popup__close-button" type="button"></button>
                    <p className="popup__container-name">Вы уверены?</p>
                    <fieldset className="popup__container-form">
                        <button className="popup__submit-button" type="submit">Да</button>
                    </fieldset>
                </form>
            </section>

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