import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://farm66.static.flickr.com/65535/48752283542_2960cf0e67_b.jpg' />
            </div>
            <div>
                ava+descript
            </div>

            <MyPosts />
            
        </div>
    );
}

export default Profile;