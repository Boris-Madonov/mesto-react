import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
    const user = React.useContext(CurrentUserContext);
    const [avatar, setAvatar] = React.useState('')
    const linkRef = React.useRef();

    React.useEffect(() => {
        setAvatar(user.avatar);
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAvatarLink = linkRef.current.value;

        props.onUpdateAvatar({
            link: newAvatarLink
        });
    };

    return(
        <PopupWithForm 
            name="update-avatar"
            title="Обновить аватар"
            submit="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-field">
                <input
                    className="popup__entry-field popup__entry-field_avatar-image-url"
                    id="entry-field-avatar-image-url"
                    type="url"
                    name="link"
                    defaultValue={avatar}
                    ref={linkRef}
                    placeholder="Ссылка на картинку"
                    required
                />
                <span
                    className="popup__entry-field-error"
                    id="entry-field-avatar-image-url-error">
                </span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup