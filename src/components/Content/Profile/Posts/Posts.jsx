import React, {useState} from "react";
import s from './Post.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import like from "../../../../assets/images/like.png";
import unlike from "../../../../assets/images/unlike.png";

let maxLength30 = maxLengthCreator(3000);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field name={"profilePost"}
                       component={Textarea}
                       placeholder={"Enter you post"}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button className={s.postButton}>Send Post</button>
            </div>
        </form>
    );
};

const PostsReduxForm = reduxForm({form: 'profilePost'})(PostsForm);

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    const handlerLike = (id) => {
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
        <div className={s.marginPost} id={post.id} key={post.id}>
            <div className={s.avatar}><img src="https://i2.wp.com/it-tehnik.ru/wp-content/uploads/girl.png"
                                           alt={"userpic"}/></div>
            <div className={s.text}>{post.message}</div>
            <div className={s.hover}/>
            <div className={s.floatRight}>
            <div className={s.post}>Likes: {post.likesCount}
                <div className={s.like}>
                    {post.stateLike
                        ? <img onClick={() => handlerLike(post.id, post.likesCount--)} src={like} alt={"like"}
                               width={"32px"} height={"32px"}/>
                        : <img onClick={() => handlerLike(post.id, post.likesCount++)} src={unlike} alt={"unlike"}
                               width={"32px"} height={"32px"}/>
                    }
                </div>
            </div>
            </div>
        </div>);

    let onSubmitPost = (values) => {
        props.addPost(values.profilePost);
    };

    return (
        <div className={s.posts}>
            <div className={s.inputArea}><PostsReduxForm onSubmit={onSubmitPost}/></div>
            <div className={s.postsItem}>{post}</div>
        </div>
    );
};

export default Posts;