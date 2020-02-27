import React, {useState} from "react";
import grid from "./Avatar.module.css";
import noAvatar from "../../../../assets/images/noavatar.png";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Avatar = (props) => {

    let [state, setState] = useState({
        fileSelected: false,
        fileName: ''
    });

    let fileInput = React.createRef();
    let handleSubmit = (avatarFile) => {
        avatarFile.preventDefault();
        let formData = new FormData();
        formData.append("image", fileInput.current.files[0]);
        props.updateAvatar(formData);
    };

    let inputChange = () => {
        setState({
            fileSelected: true,
            fileName: fileInput.current.files[0].name
        });
    };

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={grid.avatar}>
            <div className={grid.avatarImg}>
                <img src={props.avatar !== null ? props.avatar : noAvatar}
                     alt={'Avatar'}
                     width={"200px"}
                     height={"200px"}/>
                {props.authorizedUserId === props.profile.userId &&
                <div className={grid.buttonUpload}>
                    <form onSubmit={handleSubmit}>
                        <label className={grid.hideInput}>
                            {!state.fileSelected ? 'Load Photo' : state.fileName}
                            <input type="file" ref={fileInput} onChange={inputChange} />
                        </label><br/>
                        {state.fileSelected &&
                        <button className={grid.uploadButton} type="submit">Upload</button>
                        }
                    </form>
                </div>
                }
                <div className={grid.buttonUpload}>
                {props.authorizedUserId !== props.profile.userId &&
                <NavLink to={`/messages/${props.profile.userId}`}>
                    <button onClick={() => props.startNewChat(props.profile.userId, props.profile.fullName)}>Send
                        Message
                    </button>
                </NavLink>
                }
                </div>
            </div>
        </div>
    );
};

export default Avatar;