import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setCurrentUser(user);
                setCards(cards);
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

    const handleUpdateAvatar = (newAvatarLink) => {
        api.sendUserAvatar(newAvatarLink)
            .then((user) => {
                setCurrentUser(user);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        const changeLike = () => {
            if(!isLiked) {
                api.likeCard(card._id)
                    .then((newCard) => {
                        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                        setCards(newCards);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                api.deleteLikeCard(card._id)
                    .then((newCard) => {
                        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                        setCards(newCards);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }

        changeLike();
    };

    const handleCardDelete = (card) => {
        const isOwn = card.owner._id === currentUser._id;

        api.deleteCard(card._id, isOwn)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleAddPlaceSubmit = (newCard) => {
        api.sendCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <>
                    <Header />

                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={setSelectedCard}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />

                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />

                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />

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
