import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [initialCards, setInitialCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, card]) => {
                setUserAvatar(user.avatar);
                setUserName(user.name);
                setUserDescription(user.about);
                setInitialCards(card);
            })
    }, []);

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img 
                            className="profile__avatar-image"
                            src={userAvatar}
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
                            {userName}
                        </p>
                        <button 
                            className="profile__text-edit" 
                            type="button"
                            onClick={props.onEditProfile}
                        >
                        </button>
                        <p className="profile__text-description">
                            {userDescription}
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
                    {initialCards.map((card, i) => <Card key={i} {...card} />)}
                </ul>
            </section>

        </main>
    );
}

export default Main