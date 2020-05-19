import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {Element} from '../../common/FormsControls/FormsControls';
import style from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormsControls.module.css';

const maxLength20 = maxLengthCreator(20);
const Input = Element('input');
const Textarea = Element('textarea');


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <b>Full name:</b>
                <Field placeholder='Full name' name='fullName'
                       component={Input} validate={[requiredField, maxLength20]} />
            </div>
            <div>
                <b>Looking for a Job:</b>
                <Field name='lookingForAJob' type='checkbox' component={Input} />
            </div>
            <div>
                <b>My professional skills:</b>
                <Field placeholder='Description of work' name='lookingForAJobDescription'
                       component={Textarea} />
            </div>
            <div>
                <b>About me:</b>
                <Field placeholder='About me' name='aboutMe'
                       component={Textarea} />
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <b>{key}:</b> <Field placeholder={key}
                                         name={'contacts.' + key.toLocaleLowerCase()} component={Input} />
                </div>
            })}
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
