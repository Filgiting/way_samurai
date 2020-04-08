import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;