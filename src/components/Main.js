import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const user = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.resolve(api.getInitialCards())
            .then((card) => {
                setCards(card);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === user._id);
        
        const changeLike = () => {
            if(!isLiked) {
                api.likeCard(card._id).then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards);
                });
            } else {
                api.deleteLikeCard(card._id).then((newCard) => {
                    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                    setCards(newCards);
                });
            }
        }

        changeLike();
    };

    const handleCardDelete = (card) => {
        const isOwn = card.owner._id === user._id;

        api.deleteLikeCard(card._id, isOwn).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        });
    }

    return(
        <main className="content">

            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img 
                            className="profile__avatar-image"
                            src={user.avatar}
                            alt="аватар профиля"
                        />
                        <button 
                            className="profile__avatar-edit" 
                            type="button"
                            onClick={props.onEditAvatar}
                        >
                        </button>
                    </div>
                    <div className="profile__text">
                        <p className="profile__text-name">
                            {user.name}
                        </p>
                        <button 
                            className="profile__text-edit" 
                            type="button"
                            onClick={props.onEditProfile}
                        >
                        </button>
                        <p className="profile__text-description">
                            {user.about}
                        </p>
                    </div>
                </div>
                <button 
                    className="profile__add-button" 
                    type="button"
                    onClick={props.onAddPlace}
                >
                </button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card 
                            key={card._id} 
                            card={card} 
                            onCardClick={props.onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        />
                    ))}
                </ul>
            </section>

        </main>
    );
}

export default Main