import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import PostsContainer from "../Posts/PostsContainer";
import Avatar from "./Avatar";
import {NavLink} from "react-router-dom";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let profileLinks = Object.keys(props.profile.contacts).map(item =>
        <li className={"contacts"} key={item}>{item}: {props.profile.contacts[item]}</li>);
    return (
        <div className={s.gridContainer}>
            <div className={s.avatar}>
                <Avatar avatar={props.avatar}
                        updateAvatar={props.updateAvatar}
                        userId={props.profile.userId}
                        youId={props.youId}
                        profile={props.profile.photos}/>
            </div>
            <div className={s.friends}>
                <div className={s.blockTitle}>Друзья</div>
            </div>
            <div className={s.BIO}>
                <h1 className={s.page_name}>{props.profile.fullName}</h1>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}
                                        youId={props.youId}/>
                <div>
                    <div className={s.hover}/>
                    <div className={s.editLink}><NavLink className={s.editA} to="/editprofile">Edit Profile</NavLink></div>
                </div>
                Search Job: {props.profile.lookingForAJob ? "Да" : "Нет"}<br/>
                Job
                Description: {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : "Нет описания"}<br/>
                About Me: {props.profile.aboutMe != null ? props.profile.aboutMe : "Обо мне"}
                <div>
                    <div className={s.hover}/>
                    <div className={s.editLink}><NavLink className={s.editA} to="/editprofile">Edit Profile</NavLink></div>
                </div>
                Contacts: {profileLinks}
            </div>
            <div className={s.posts}>
                <PostsContainer/>
            </div>
        </div>
    )
};

export default ProfileInfo;