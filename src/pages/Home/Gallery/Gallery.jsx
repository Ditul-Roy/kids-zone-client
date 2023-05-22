import React, { useEffect, useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Gallery = () => {
    const [galleries, setGalleries] = useState([])
    useEffect(() => {
        fetch('https://toy-server-six.vercel.app/allcars')
            .then(res => res.json())
            .then(data => setGalleries(data))
    }, [])

    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    return (
        <div className=' my-10 p-4' data-aos = 'fade-up'>
            <h1 className='text-4xl text-bold text-center text-gray-800 my-10'>Please visit our car gallery</h1>
            <div className='grid lg:grid-cols-3'>
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