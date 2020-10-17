import React, {Fragment, useEffect, useState} from 'react';

import {
    getUnsplashPhotosData
} from '../helpers/unsplash';

import ConfirurePanel from '../components/ConfigurePanel';
import PhotosList from '../components/PhotosList';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const Home = () => {
    const [displayedType, setDisplayedType] = useState('grid-md');
    const [photos, setPhotos] = useState(null);
    const [paginationObj, setPaginationObj] = useState({
        page: 1,
        total_count: null,
        per_page: 12
    });
    const [isLoadedPhotos, setLoadedPhotos] = useState(false);

    useEffect(() => {
        getUnsplashPhotosData(paginationObj.page, paginationObj.per_page)
        .then(data => {
            setPhotos(data.data);
            setPaginationObj({
                ...paginationObj,
                total_count: parseInt(data.headers['x-total']),
            })
        })
        .then(() => {
            setLoadedPhotos(true);
        })
        .catch(() => setLoadedPhotos(false))

    }, []);

    const paginationBtnClick = (page) => {
        if(page < 1) return;
        
        setPaginationObj({
            ...paginationObj,
            page: page
        })

        getUnsplashPhotosData(page, paginationObj.per_page)
        .then(data => {
            setPhotos(data.data);
        })
    }


    return (
        <section className="section-photos">
            <div className="container">
                <ConfirurePanel  
                    count={isLoadedPhotos ? photos.length : null }
                    displayedType={(type) => setDisplayedType(type)} 
                />
                {isLoadedPhotos 
                    ? <Fragment>
                            <PhotosList photos={photos} type={displayedType} /> 
                            <Pagination 
                                paginationBtnClick={(value) => paginationBtnClick(paginationObj.page + value)}
                            />
                        </Fragment>
                    : <Loader /> 
                }

            </div>
        </section>
    );
};


export default Home;