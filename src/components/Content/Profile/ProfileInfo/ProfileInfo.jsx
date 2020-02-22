import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import PostsContainer from "../Posts/PostsContainer";
import Avatar from "./Avatar";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    let profileLinks = Object.keys(props.profile.contacts).map(item =>
        <li className={"contacts"} key={item}>{item}: {props.profile.contacts[item]}</li>);
    return (
        <div className={s.gridContainer}>
            <div className={s.avatar}>
                <Avatar photo={props.profile.photos} updateAvatar={props.updateAvatar} />
            </div>
            <div className={s.friends}>
                <div className={s.blockTitle}>Друзья</div>
            </div>
            <div className={s.BIO}>
                <h1 className={s.page_name}>{props.profile.fullName}</h1>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.hover}/>
                Search
                Job: {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : "Ищу работу"},<br/>
                About Me: {props.profile.aboutMe != null ? "props.profile.aboutMe" : "Нет информации"}
                <div className={s.hover}/>
                Contacts: {profileLinks}
            </div>
            <div className={s.posts}>
                <PostsContainer/>
            </div>
        </div>
    )
};

export default ProfileInfo;