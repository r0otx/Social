import {addMessage, addMessageText} from "../../../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesItem: state.messagesPage.messagesItem,
    }
};
/* let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = addMessageTextActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
} */

export default compose(
    connect(mapStateToProps, {
        updateNewMessageText: addMessageText,
        sendMessage: addMessage
    }),
    withAuthRedirect
)(Dialogs);