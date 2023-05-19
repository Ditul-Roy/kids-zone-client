import React, { useEffect, useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

const Gallery = () => {
    const [galleries, setGalleries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setGalleries(data))
    }, [])
    return (
        <div className=' my-10 p-4'>
            <h1 className='text-4xl text-bold text-center text-gray-800 my-10'>Please visit our car gallery</h1>
            <div className='grid grid-cols-3'>
            {
                galleries.map(gallery => <GalleryCard
                key={gallery._id}
                gallery={gallery}
                ></GalleryCard>)
            }
            </div>
        </div>
    );
};

export default Gallery;