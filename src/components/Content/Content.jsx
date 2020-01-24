import React from 'react';
import s from './Content.module.css';
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";
import Album from "./Album/Album";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Content = () => {
    return (
        <div className={s.content}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/messages' render={() => <Messages/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/album' render={() => <Album/>}/>
            <Route path='/settings' render={() => <Setting/>}/>
        </div>
    );
}

export default Content;