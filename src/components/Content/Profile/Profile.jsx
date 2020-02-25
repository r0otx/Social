import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Avatar from "./ProfileInfo/Avatar";
import Friends from "./ProfileInfo/Friends";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={s.gridContainer}>
            <Avatar {...props} updateAvatar={props.updateAvatar}/>
            <Friends/>
            <ProfileInfo {...props}/>
            <PostsContainer/>
        </div>
    );
};

export default Profile;