import React from "react";
import s from './users.module.css';
import * as axios from 'axios';
import noPhoto from '../../../assets/images/noPhoto.jpg'

const Users_old = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>GetUsers</button>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={s.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : noPhoto}/>
                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
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
}

export default Users_old;