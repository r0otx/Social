import React from "react";
import s from "./users.module.css";
import noPhoto from "../../../assets/images/noPhoto.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 20) {
            pagesNum.push(i);
        }
    }

    return (
        <div>
            <div>
                {pagesNum.map(p => {
                        return <span className={(props.currentPage === p) ? s.selectedPage : s.otherPage} onClick={() => {
                            props.onPageChanged(p);
                        }}>{p}</span>
                    }
                )}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={s.avatar}>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt={'Avatar'} src={u.photos.small != null ? u.photos.small : noPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.delFollow(u).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.getFollow(u).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    );
};
export default Users;