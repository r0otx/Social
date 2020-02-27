import React from "react";
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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

    let messages = props.messagesItem.map(message => <li id={message.id} key={message.id}>{message.body}</li>);

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