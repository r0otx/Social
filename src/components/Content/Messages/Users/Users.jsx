import React, {useEffect} from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let {getAllUsersChat} = props;

    useEffect(() => {
        getAllUsersChat();
    }, [getAllUsersChat]);


    let user = props.usersItem.map(user => <NavLink to={"/messages/" + user.id} key={user.id}>
        <li className={s.usersBody} onClick={() => {
            props.selectUser(user.id);
            props.getAllMessages(user.id);
        }}>{user.userName}</li>
    </NavLink>);


    return (
        <div className={s.usersColumn}>
            {user}
        </div>)
};

export default Users;