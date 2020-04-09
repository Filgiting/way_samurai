import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts  posts={props.posts} />
        </div>
    );
}

export default Profile;