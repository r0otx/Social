import {addDislikeActionCreator, addLikeActionCreator, addPostActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

export default compose(
    connect(mapStateToProps, {addPost: addPostActionCreator})
)(Posts);