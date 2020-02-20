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
                       name={"newMessage"}
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
    let message = props.messagesItem.map(message => <li id={message.id} key={message.id}>{message.message}</li>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessage);
    };

    return (
        <div>
            <div className={s.dialogsColumn}>
                <div className={s.dialogs}>
                {message}
                </div>
                <div className={s.inputArea}>
                    <DialogsReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;