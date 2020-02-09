import React from "react";
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";


const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputArea}>
                <Field placeholder={"Ваше сообщение"} name={"newMessage"} component={"textarea"} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
};

const DialogsReduxForm = reduxForm({form: 'messages'})(DialogsForm);

const Dialogs = (props) => {
    let message = props.messagesItem.map(message => <li id={message.id} key={message.id}>{message.message}</li>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessage);
    };

    return (
        <div>
            <div className={s.dialogsColumn}>
                {message}
            </div>
            <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;