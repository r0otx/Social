import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import noavatar from "../../../../assets/images/noavatar.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let profileLinks = Object.keys(props.profile.contacts).map( item => <li>{item}: {props.profile.contacts[item]}</li>);

    return (
        <div className={s.gridContainer}>
            <div className={s.Avatar}><img src={props.profile.photos.large != null ? props.profile.photos.large : noavatar} alt={'Avatar'}/></div>
            <div className={s.BIO}>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                Full Name: {props.profile.fullName},<br/>
                Search Job: {props.profile.lookingForAJobDescription},<br/>
                About Me: {props.profile.aboutMe}
            </div>
            <div className={s.Contacts}>
                Contacts: {profileLinks}
            </div>
        </div>
    )
};

export default ProfileInfo;