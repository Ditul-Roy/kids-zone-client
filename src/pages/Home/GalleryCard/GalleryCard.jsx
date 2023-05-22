import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const GalleryCard = ({ gallery }) => {
    const { img } = gallery;

    useEffect(() => {
        Aos.init({duration: 10000});
    },[])
    return (
        <div className='mx-8 my-8' data-aos = 'flip-right'>
            <img className='lg:w-96 h-96 rounded-xl ' src={img} alt="" />
        </div>
    );
};

export default GalleryCard;