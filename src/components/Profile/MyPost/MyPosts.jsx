import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message={post.message} likeCount={post.likeCount} /> );

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={style.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;