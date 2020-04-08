import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'Its my first post', likeCount: 8}
    ]

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
                <Post message={postData[0].message} likeCount={postData[0].likeCount} />
                <Post message={postData[1].message} likeCount={postData[1].likeCount} />
            </div>
        </div>
    );
}

export default MyPosts;