import React from "react";
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import noAvatar from "../../../../assets/images/noPhoto.jpg";

let maxLength150 = maxLengthCreator(150);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputArea}>
                <Field placeholder={"Ваше сообщение"}
                       validate={[required, maxLength150]}
                       name={"message"}
                       disabled={!props.selectedUserId}
                       component={Textarea}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
};

const DialogsReduxForm = reduxForm({form: 'messages'})(DialogsForm);

const Dialogs = (props) => {

    let avatar = props.usersItem.find(item => item.id === props.selectedUserId);

    let messages = props.messagesItem.map(message =>
        <div className={s.messageContainer} id={message.id} key={message.id}>
            <div className={s.avatar}><img alt={"Avatar"} src={message.senderId === props.selectedUserId ? avatar.photos.small : noAvatar} width={"50px"} height={"50px"}/></div>
            <div className={s.name}>{message.senderName}
            <div className={s.time}>{new Date(message.addedAt).toLocaleTimeString()}</div>
        </div>
            <div className={s.message}>{message.body}</div>
            <div className={s.buttons}><span onClick={() => props.deleteMessage(message.id)}>X</span></div>
        </div>
    );

    let addNewMessage = (message) => {
        props.sendNewMessage(props.selectedUserId, message);
    };

    return (
            <div className={s.dialogsColumn}>
                <div className={s.dialogs}>
                    {messages}
                </div>
                <div className={s.inputArea}>
                    <DialogsReduxForm onSubmit={addNewMessage} selectedUserId={props.selectedUserId}/>
                </div>
            </div>
    );
};

export default Dialogs;