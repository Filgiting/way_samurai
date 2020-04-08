import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
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
                <Post message='Hi, how are you?' count='10'/>
                <Post message="It's my first post" count='20'/>
            </div>
        </div>
    );
}

export default MyPosts;