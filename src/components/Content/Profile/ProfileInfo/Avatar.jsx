import React, {useState} from "react";
import s from "./ProfileInfo.module.css";

const Avatar = (props) => {
    let fileInput = React.createRef();
    let handleSubmit = (avatarFile) => {
        avatarFile.preventDefault();
        let formData = new FormData();
        formData.append("image", fileInput.current.files[0]);
        props.updateAvatar(formData);
    };

    let [button, setButton] = useState(false);
    let input = button ? s.hideInput : '';
    let buttonHide = !button ? s.hideButton : '';

    return (
        <div>
            <div className={s.avaImg}>
                <img src={props.photo.large != null ? props.photo.large : props.avatar}
                     alt={'Avatar'}
                     width={"200px"}
                     height={"200px"}/>
            </div>
            <div className={s.photoUpdateBtn}>
                <form onSubmit={handleSubmit}>
                    <input className={input} type="file" ref={fileInput} onChange={setButton} />
                    <button className={buttonHide} onClick={setButton} type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default Avatar;