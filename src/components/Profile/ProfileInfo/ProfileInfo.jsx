import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/User.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
                setEditMode(false)
            }
        );
    };

    return (
        <div>
            <div>
                <img src='https://farm66.static.flickr.com/65535/48752283542_2960cf0e67_b.jpg'/>
            </div>
            <div className={style.descriptionBlock}>

                <img src={props.profile.photos.large || userPhoto} className={style.userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => {setEditMode(true)}}/>}

            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (
        <div>
            { isOwner && <button onClick={goToEditMode}>Edit</button> }
            <div className={style.descriptionBlock}>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div className={style.descriptionBlock}>
                <b>Looking for a Job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div className={style.descriptionBlock}>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div className={style.descriptionBlock}>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div className={style.descriptionBlock}>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};


const Contact = ({contactTitle, contactValue}) => {

    return (
        <div className={style.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
};

export default ProfileInfo;