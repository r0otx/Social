import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.gridContainer}>
            <div className={s.Avatar}><img src={props.profile.photos.large}/></div>
            <div className={s.BIO}>
                Full Name: {props.profile.fullName},<br/>
                Search Job: {props.profile.lookingForAJobDescription},<br/>
                Status: {props.profile.aboutMe}
            </div>
            <div className={s.Contacts}>
                Contacts:
                <li>{props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.website}</li>
                <li>{props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.twitter}</li>
                <li>{props.profile.contacts.instagram}</li>
                <li>{props.profile.contacts.youtube}</li>
                <li>{props.profile.contacts.github}</li>
                <li>{props.profile.contacts.mainLink}</li>
                <li></li>
            </div>
        </div>
    )
};

export default ProfileInfo;