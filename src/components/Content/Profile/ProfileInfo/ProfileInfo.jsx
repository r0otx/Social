import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let profileLinks = Object.keys(props.profile.contacts).map( item => <li>{item}: {props.profile.contacts[item]}</li>);

    return (
        <div className={s.gridContainer}>
            <div className={s.Avatar}><img src={props.profile.photos.large} alt={'Avatar'}/></div>
            <div className={s.BIO}>
                <ProfileStatus status={"Hi bro"}/>
                Full Name: {props.profile.fullName},<br/>
                Search Job: {props.profile.lookingForAJobDescription},<br/>
                Status: {props.profile.aboutMe}
            </div>
            <div className={s.Contacts}>
                Contacts: {profileLinks}
            </div>
        </div>
    )
};

export default ProfileInfo;