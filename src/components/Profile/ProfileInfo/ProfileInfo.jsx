import React, { useState } from 'react';
import c from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/users.png';
import ProfileDataFormReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            ()=> {setEditMode(false)}
        )
    }

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={c.descriptionblock}>
                <img src={profile.photos.large || userPhoto} className={c.mainPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={c.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

export default ProfileInfo;