import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>

            <AddPostFormRedux onSubmit={addNewPost}/>

            <div className={style.posts}>
                { postsElement }
            </div>
        </div>
    );
};

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Add my post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm ({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;