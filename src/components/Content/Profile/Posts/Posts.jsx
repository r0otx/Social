import React, {useEffect, useState} from "react";
import s from './Post.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import like from "../../../../assets/images/like.png";
import unlike from "../../../../assets/images/unlike.png";

let maxLength30 = maxLengthCreator(30);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"profilePost"}
                        component={Textarea}
                        placeholder={"Enter you post"}
                        validate={[required, maxLength30]}/></div>
            <div>
                <button>Send Post</button>
            </div>
        </form>
    );
};

const PostsReduxForm = reduxForm({form: 'profilePost'})(PostsForm);

const Posts = (props) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts([props.posts
        ]);
    }, []);

    const handlerLike = id => {
        const post = props.posts.find(e => {
            return e.id === id;
        });
        const indexOfPost = posts.indexOf(post);
        post.stateLike = !post.stateLike;
        const newPosts = [...posts];
        newPosts[indexOfPost] = post;
        setPosts(newPosts);
    };

    let post = props.posts.map(post =>
        <div id={post.id} key={post.id}>
            <div className={s.avatar}></div>
            <div className={s.text}>{post.message}</div>
            <div className={s.post}>Likes: {post.likesCount}
                <div className={s.like}>
                    {post.stateLike
                        ? <img onClick={() => handlerLike(post.id)} src={like} alt={"like"} width={"32px"} height={"32px"}/>
                        : <img onClick={() => handlerLike(post.id)} src={unlike} alt={"unlike"} width={"32px"} height={"32px"}/>
                    }

                </div>
            </div>
        </div>);

    let onSubmitPost = (values) => {
        props.addPost(values.profilePost);
    };

    return (
        <div>
            <PostsReduxForm onSubmit={onSubmitPost}/>
            <div>{post}</div>
        </div>
    );
};

export default Posts;