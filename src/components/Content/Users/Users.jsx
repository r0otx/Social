import React from "react";
import s from "./users.module.css";
import noPhoto from "../../../assets/images/noPhoto.jpg";
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {


    return (
        <div className={s.bodyPage}>
            <Pagination totalUsersCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>

            <div className={s.body}>
                {props.users.map(u =>
                    <div key={u.id} className={s.userItem}>
                    <span>
                        <div>{u.name}</div>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt={'Avatar'} src={u.photos.small != null ? u.photos.small : noPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id);
                                }
                                }>Unfollow</button>
                                : <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id);
                                }
                                }>Follow</button>
                            }
                            <div><NavLink to={`messages/${u.id}`}><button
                                onClick={() => props.startNewChat(u.id, u.name)}>Send Message</button></NavLink></div>
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>)}
            </div>
        </div>
    );
};
export default Users;