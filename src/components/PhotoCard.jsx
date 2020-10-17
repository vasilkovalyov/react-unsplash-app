import React from 'react';
import { Link } from 'react-router-dom';

import User from './User';

const PhotoCard = (props) => {
    const photoObj = {...props.photoData};
    return (
        <Link className="photo-card" to={`/profile/${photoObj.id}`}>
            <div className="photo-card__image">
                <img src={photoObj.urls.small} alt={photoObj.alt_description} />
            </div>
            <div className="photo-card__body">
                <User user={photoObj.user} />
            </div>
        </Link>
    );
};

export default PhotoCard;