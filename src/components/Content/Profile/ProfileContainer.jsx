import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getUserProfile,
    getUserStatus,
    updateUserAvatar,
    updateUserStatus
} from "../../../redux/profile-reducer";
import {compose} from "redux";
import {startNewChat} from "../../../redux/message-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                     updateStatus={this.props.updateUserStatus}
                     updateAvatar={this.props.updateUserAvatar}
                     startNewChat={this.props.startNewChat}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    avatar: state.profilePage.avatar,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        updateUserAvatar,
        startNewChat
    }),
    withRouter
)(ProfileContainer);