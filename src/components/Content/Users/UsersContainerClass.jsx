import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    setFollowProgress,
    unfollow
} from "../../../redux/users-reducer";
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

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followProgress={this.props.followProgress}
            />
        </>);
    }
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
        requestUsers
    }),
    withAuthRedirect
)(UsersContainer);