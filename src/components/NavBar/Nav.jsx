import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faComments, faUserPlus, faMusic, faImages, faUserCog} from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {

    props.getNewMessagesCount();

    return (
        <div>
            <NavLink to="/profile">
                <li><FontAwesomeIcon icon={faHome} />Profile</li>
            </NavLink>
            <NavLink to="/messages">
                <li><FontAwesomeIcon icon={faComments} />Messages ({props.messagesCount})</li>
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
            <NavLink to="/editprofile">
                <li><FontAwesomeIcon icon={faUserCog} />Settings</li>
            </NavLink>
        </div>
    );
}


export default Nav;