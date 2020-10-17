import React, {useEffect, useState} from 'react';

import {
    getUnsplashProfileById
} from '../helpers/unsplash'

import Loader from '../components/Loader';

const Profile = (props) => {
    const [photoObject, setPhotoObject] = useState(null);
    const [isLoad, setLoaded] = useState(false);
    const idPhoto = props.match.params.id;

    useEffect(() => {
        getUnsplashProfileById(idPhoto)
        .then(data => {
            setPhotoObject(data)
            setLoaded(true);
        })
        .catch(() => setLoaded(false));
    }, [idPhoto])

    const profile = (data) => {
        return (
            <div className="profile">
                <div className="user">
                    <div className="user__image">
                        <img src={data.user.profile_image.medium} alt={data.user.first_name}/>
                    </div>
                    <div className="user__name">{data.user.name}</div>
                </div>
                <div className="profile__image">
                    <img src={data.urls.regular} alt={data.alt_description}/>
                </div>
                <div className="profile__city">{data.location.name}</div>
            </div>
        )
    }

   
    return (
        <section className="section-profile">
            <div className="container">
                {
                    isLoad ? profile(photoObject) : <Loader />
                }
            </div>
        </section>
    );
};

Profile.propTypes = {};

export default Profile;