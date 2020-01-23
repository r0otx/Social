import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="/profile">
                <li>Profile</li>
            </NavLink>
            <NavLink to="/messages">
                <li>Messages</li>
            </NavLink>
            <NavLink to="/users">
                <li>Find Users</li>
            </NavLink>
            <NavLink to="/music">
                <li>Music</li>
            </NavLink>
            <NavLink to="/album">
                <li>Album</li>
            </NavLink>
            <NavLink to="/settings">
                <li>Settings</li>
            </NavLink>
        </div>
    );
}


export default Nav;