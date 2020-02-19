import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faComments, faUserPlus, faMusic, faImages, faUserCog} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="/profile">
                <li><FontAwesomeIcon icon={faHome} />Profile</li>
            </NavLink>
            <NavLink to="/messages">
                <li><FontAwesomeIcon icon={faComments} />Messages</li>
            </NavLink>
            <NavLink to="/users">
                <li><FontAwesomeIcon icon={faUserPlus} />Find Users</li>
            </NavLink>
            <NavLink to="/music">
                <li><FontAwesomeIcon icon={faMusic} />Music</li>
            </NavLink>
            <NavLink to="/album">
                <li><FontAwesomeIcon icon={faImages} />Album</li>
            </NavLink>
            <NavLink to="/settings">
                <li><FontAwesomeIcon icon={faUserCog} />Settings</li>
            </NavLink>
        </div>
    );
}


export default Nav;