import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let user = props.usersItem.usersItem.map(user => <NavLink to={"/messages/" + user.id} key={user.id}>
        <li>{user.name}</li>
    </NavLink>);

    return (
        <div className={s.usersColumn}>
            {user}
        </div>)
}

export default Users;