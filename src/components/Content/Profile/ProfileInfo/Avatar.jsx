import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import noAvatar from "../../../../assets/images/noavatar.png";

const Avatar = (props) => {

    let [state, setState] = useState({
        fileSelected: false,
        fileName: ''
    });

    let fileInput = React.createRef();
    let handleSubmit = (avatarFile) => {
        debugger
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
    let clickButton = () => {
        setState({
            fileSelected: false,
            fileName: ''
        });
    };

    return (
        <div>
            <div className={s.avaImg}>
                <img src={props.avatar !== null ? props.avatar : noAvatar}
                     alt={'Avatar'}
                     width={"200px"}
                     height={"200px"}/>
                {props.youId === props.userId &&
                <div className={s.photoUpdateBtn}>
                    <form onSubmit={handleSubmit}>
                        <label className={s.hideInput}>
                            {!state.fileSelected ? 'Load Photo' : state.fileName}
                            <input type="file" ref={fileInput} onChange={inputChange} />
                        </label><br/>
                        {state.fileSelected &&
                        <button className={s.uploadButton} type="submit">Upload</button>
                        }
                    </form>
                </div>
                }
            </div>
        </div>
    );
};

export default Avatar;