import React from "react";
import s from './Post.module.css';

const Posts = (props) => {

    let post = props.posts.map( post =>
        <div id={post.id} key={post.id}>
            <div className={s.avatar}></div>
            <div className={s.text}>{post.message}</div>
            <div>Likes: {post.likesCount}</div>
        </div> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div>
            <div><textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText} /></div>
            <div><button onClick={addPost}>Send Post</button></div>
        <div>{post}</div>
        </div>
    );
}

export default Posts;