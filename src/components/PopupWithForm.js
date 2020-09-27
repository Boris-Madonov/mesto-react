import React from 'react';

function PopupWithForm(props) {
    return(
        <section className={`popup popup__${props.name}`}>
            <form 
                className="popup__container" 
                name={`${props.name}`} 
                action="#" 
                method="GET" 
                novalidate
            >
                <button 
                    className="popup__close-button" 
                    type="button"
                >
                </button>
                <p className="popup__container-name">{`${props.title}`}</p>
                <fieldset className="popup__container-form">
                    {props.children}
                    <button 
                        className="popup__submit-button" 
                        type="submit"
                    >Сохранить
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default PopupWithForm