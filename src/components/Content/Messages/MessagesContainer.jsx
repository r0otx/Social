import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {
    addMessage,
    deleteMessage,
    getAllMessages,
    getAllUsersChat,
    selectUser,
    sendNewMessage
} from "../../../redux/message-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const MessagesContainer = (props) => {

    return (
        <div>
            <Messages {...props}/>
        </div>
    );
};

const mapDispatchToProps = (state) => ({
    usersItem: state.messagesPage.usersItem,
    newMessageText: state.messagesPage.newMessageText,
    messagesItem: state.messagesPage.messagesItem,
    selectedUserId: state.messagesPage.selectedUserId
});

export default compose(connect(mapDispatchToProps, {
        getAllUsersChat,
        getAllMessages,
        addMessage,
        sendNewMessage,
        selectUser,
        deleteMessage
    }),
    withAuthRedirect
)(MessagesContainer);