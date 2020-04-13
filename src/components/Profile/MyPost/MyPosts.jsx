import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>

            <div className={style.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;