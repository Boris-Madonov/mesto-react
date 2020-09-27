import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true)
    };

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true)
    };

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true)
    };

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    };


    return (
        <div className="page">
            <>
                <Header />

                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={setSelectedCard}
                />

                <PopupWithForm 
                    name="update-avatar"
                    title="Обновить аватар"
                    submit="Сохранить"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__form-field">
                        <input
                            className="popup__entry-field popup__entry-field_avatar-image-url"
                            id="entry-field-avatar-image-url"
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span
                            className="popup__entry-field-error"
                            id="entry-field-avatar-image-url-error">
                        </span>
                    </label>
                </PopupWithForm>

                <PopupWithForm 
                    name="edit-profile" 
                    title="Редактировать профиль"
                    submit="Сохранить"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__form-field">
                        <input
                            className="popup__entry-field popup__entry-field_account-name"
                            id="entry-field-account-name"
                            type="text"
                            name="name"
                            placeholder="Введите имя"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                        <span
                            className="popup__entry-field-error"
                            id="entry-field-account-name-error">
                        </span>
                    </label>
                    <label className="popup__form-field">
                        <input
                            className="popup__entry-field popup__entry-field_account-description"
                            id="entry-field-account-description"
                            type="text"
                            name="about"
                            placeholder="Введите описание"
                            minLength="2"
                            maxLength="200"
                            required
                        />
                        <span
                            className="popup__entry-field-error"
                            id="entry-field-account-description-error">
                        </span>
                    </label>
                </PopupWithForm>

                <PopupWithForm 
                    name="new-item"
                    title="Новое место"
                    submit="Создать"
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <label className="popup__form-field">
                        <input
                            className="popup__entry-field popup__entry-field_item-name"
                            id="entry-field-item-name"
                            type="text"
                            name="name"
                            placeholder="Название"
                            minLength="1"
                            maxLength="30"
                            required
                        />
                        <span
                            className="popup__entry-field-error"
                            id="entry-field-item-name-error">
                        </span>
                    </label>
                    <label className="popup__form-field">
                        <input
                            className="popup__entry-field popup__entry-field_item-image-url"
                            id="entry-field-item-image-url"
                            type="url"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span
                            className="popup__entry-field-error"
                            id="entry-field-item-image-url-error">
                        </span>
                    </label>
                </PopupWithForm>

                <PopupWithForm 
                    name="delete-item"
                    title="Вы уверены?"
                    onClose={closeAllPopups}
                />

                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />

                <Footer />
            </>
        </div>
    );
}

export default App;
