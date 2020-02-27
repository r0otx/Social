import React, {useEffect} from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, setFollowProgress, unfollow} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../redux/users-selectors";
import {startNewChat} from "../../../redux/message-reducer";

const UsersContainer = (props) => {

    let {requestUsers, currentPage, pageSize} = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    }, [requestUsers, currentPage, pageSize]);

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    };
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   onPageChanged={onPageChanged}
                   currentPage={props.currentPage}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   followProgress={props.followProgress}
                   startNewChat={props.startNewChat}/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress: getFollowProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setFollowProgress,
        requestUsers,
        startNewChat
    }),
    withAuthRedirect
)(UsersContainer);