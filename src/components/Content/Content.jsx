import React from 'react';
import s from './Content.module.css';
import {Route} from "react-router-dom";
import Album from "./Album/Album";
import Music from "./Music/Music";
import Setting from "./Setting/Setting";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {getInitialized} from "../../redux/content-reducer";
import Preloader from "./common/Preloader/Preloader";
import ProfileAboutEdit from "./Profile/ProfileAboutEdit";
import MessagesContainer from "./Messages/MessagesContainer";

class Content extends React.Component {
    componentDidMount() {
        this.props.getInitialized();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={s.content}>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/album' render={() => <Album/>}/>
                <Route path='/settings' render={() => <Setting/>}/>
                <Route path='/editprofile' render={() => <ProfileAboutEdit/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.content.initialized
});

export default connect(mapStateToProps, {getInitialized})(Content);