import React from "react";
import s from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.bigImg}></div>
            <ProfileInfo profile={props.profile}/>
            <div className={s.post}>
                <PostsContainer/>
            </div>
        </div>
    );
}

export default Profile;