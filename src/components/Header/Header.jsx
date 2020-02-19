import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo_svg.svg"

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt={"Logo"}/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    );
};


export default Header;