import React from "react";
import {connect} from "react-redux";
import Nav from "./Nav";
import {getNewMessagesCount} from "../../redux/message-reducer";
import s from "./Nav.module.css";

const NavContainer = (props) => {

    props.getNewMessagesCount();

    return (
        <div className={s.nav}>
            <Nav messagesCount={props.messagesCount} getNewMessagesCount={props.getNewMessagesCount} />
        </div>
    );
};

const mapDispatchToProps = (state) => ({
    messagesCount: state.messagesPage.messagesCount
});

export default connect(mapDispatchToProps, {getNewMessagesCount})(NavContainer);