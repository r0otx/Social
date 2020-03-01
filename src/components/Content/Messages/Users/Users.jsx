import React, {useEffect} from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import noPhoto from "../../../../assets/images/noPhoto.jpg"

const Users = (props) => {

    let {getAllUsersChat} = props;

    useEffect(() => {
        getAllUsersChat();
    }, [getAllUsersChat]);


    let user = props.usersItem.map(user => <NavLink activeClassName={s.usersBodyHover} to={"/messages/" + user.id} key={user.id}>
        <div className={s.avaMsg}><img src={user.photos.small !== null ? user.photos.small : noPhoto} width={"59px"} height={"59px"} alt={"Avatar"}/>
        <li className={s.usersBody} onClick={() => {
            props.selectUser(user.id);
            props.getAllMessages(user.id);
        }}>{user.userName}</li>
        </div>
    </NavLink>);


    return (
        <div className={s.usersColumn}>
            {user}
        </div>)
};

export default Users;