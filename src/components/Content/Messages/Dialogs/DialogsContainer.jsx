import {addMessage, addMessageText} from "../../../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesItem: state.messagesPage.messagesItem
    }
}
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

export default connect(mapStateToProps, {
    updateNewMessageText: addMessageText,
    sendMessage: addMessage
})(Dialogs);