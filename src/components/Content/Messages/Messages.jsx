import React from "react";
import s from './Messages.module.css';
import Users from "./Users/Users";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {

    return (
        <div className={s.gridMessages}>
            <Users {...props}/>
            <Dialogs {...props}/>
        </div>
    );
};

export default Messages;