import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://farm66.static.flickr.com/65535/48752283542_2960cf0e67_b.jpg'/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                {props.profile.aboutMe}
            </div>
            <div>{props.profile.fullName}</div>
        </div>
    );
};

export default ProfileInfo;