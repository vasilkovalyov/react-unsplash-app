import React from 'react';
import classNames from 'classnames';

import PhotoCard from './PhotoCard';

const PhotosList = (props) => {
    const {photos, type} = props;

    return (
        <div className={
            classNames('photos-list', 'photos-list-'+type)
        }>
            <div className="df-row">
                {
                    photos.map(photo => {
                        return (
                            <div className="col" key={photo.id}>
                                <PhotoCard photoData={photo} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default PhotosList;