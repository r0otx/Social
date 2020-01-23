import React from "react";
import s from './Messages.module.css';
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const Messages = () => {

    return (
        <div className={s.gridMessages}>
            <UsersContainer/>
            <DialogsContainer/>
        </div>
    );
}

export default Messages;