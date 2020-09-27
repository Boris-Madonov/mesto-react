import React from 'react';

function Main(props) {
    return (
        <main className="content">

            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img className="profile__avatar-image" src="#" alt="аватар профиля" />
                        <button 
                            className="profile__avatar-edit" 
                            type="button"
                            onClick={props.onEditAvatar}
                        >
                        </button>
                    </div>
                    <div className="profile__text">
                        <p className="profile__text-name"></p>
                        <button 
                            className="profile__text-edit" 
                            type="button"
                            onClick={props.onEditProfile}
                        >
                        </button>
                        <p className="profile__text-description"></p>
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

        </main>
    );
}

export default Main