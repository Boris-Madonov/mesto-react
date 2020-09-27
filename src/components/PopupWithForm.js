import React from 'react';

function PopupWithForm(props) {
    return(
        <section className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`}>
            <form 
                className="popup__container" 
                name={`${props.name}`} 
                action="#" 
                method="GET" 
                noValidate
            >
                <button 
                    className="popup__close-button" 
                    type="button"
                    onClick={props.onClose}
                >
                </button>
                <p className="popup__container-name">{`${props.title}`}</p>
                <fieldset className="popup__container-form">
                    {props.children}
                    <button 
                        className="popup__submit-button" 
                        type="submit"
                    >{`${props.submit}`}
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default PopupWithForm