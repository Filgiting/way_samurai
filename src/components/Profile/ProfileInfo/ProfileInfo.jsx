import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://farm66.static.flickr.com/65535/48752283542_2960cf0e67_b.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    );
}

export default ProfileInfo;