import React from "react";
import s from "./users.module.css";
import noPhoto from "../../../assets/images/noPhoto.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";
import {setFollowProgress} from "../../../redux/users-reducer";

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
                                ? <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowProgress(true, u.id);
                                    usersAPI.delFollow(u).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        props.setFollowProgress(false, u.id);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowProgress(true, u.id);
                                    usersAPI.getFollow(u).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.setFollowProgress(false, u.id);
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