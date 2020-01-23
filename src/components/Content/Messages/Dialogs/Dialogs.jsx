import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let message = props.messagesItem.map(message => <li id={message.id} key={message.id}>{message.message}</li>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onChangeMessage = () => {
        let message = newMessage.current.value;
        props.updateNewMessageText(message);
    }

    return (
        <div>
            <div className={s.dialogsColumn}>
                {message}
            </div>
            <div className={s.inputArea}>
                <textarea onChange={onChangeMessage} ref={newMessage} value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs;