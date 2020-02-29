import React from "react";
import s from "./users.module.css";
import noPhoto from "../../../assets/images/noPhoto.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 20) {
            pagesNum.push(i);
        }
    }

    return (
        <div className={s.bodyPage}>
            <div>
                {pagesNum.map(p => {
                        return <span key={p} className={(props.currentPage === p) ? s.selectedPage : s.otherPage}
                                     onClick={() => {
                                         props.onPageChanged(p);
                                     }}>{p}</span>
                    }
                )}
            </div>
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