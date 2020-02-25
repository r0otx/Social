import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         youId={props.authorizedUserId}

                         status={props.status}
                         updateStatus={props.updateStatus}

                         updateAvatar={props.updateAvatar}
                         avatar={props.avatar}/>
        </div>
    );
};

export default Profile;