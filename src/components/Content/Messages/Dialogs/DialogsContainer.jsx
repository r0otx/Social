import {addMessage} from "../../../../redux/message-reducer";
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

export default compose(
    connect(mapStateToProps,
        {sendMessage: addMessage}),
    withAuthRedirect
)(Dialogs);