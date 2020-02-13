import React from "react";
import s from './Post.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

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
    let post = props.posts.map(post =>
        <div id={post.id} key={post.id}>
            <div className={s.avatar}></div>
            <div className={s.text}>{post.message}</div>
            <div>Likes: {post.likesCount}</div>
        </div>);

    let onSubmitPost = (values) => {
        props.addPost(values.profilePost);
    }

    return (
        <div>
            <PostsReduxForm onSubmit={onSubmitPost} />
            <div>{post}</div>
        </div>
    );
};

export default Posts;