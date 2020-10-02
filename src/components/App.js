import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState('');

    React.useEffect(() => {
        Promise.resolve(api.getUserInfo())
            .then((user) => {
                setCurrentUser(user);
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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

    const handleUpdateUser = (newUserInfo) => {
        api.sendUserInfo(newUserInfo)
        .then((user) => {
            setCurrentUser(user);
            closeAllPopups();
        })
        .catch((err) => {
            console.log(err);
        });
    };


    return (
        <CurrentUserContext.Provider value={currentUser}>
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

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />

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
        </CurrentUserContext.Provider>
    );
}

export default App;
