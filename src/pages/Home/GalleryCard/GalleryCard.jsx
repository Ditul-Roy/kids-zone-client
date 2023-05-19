import React from 'react';

const GalleryCard = ({ gallery }) => {
    const { img } = gallery;
    return (
        <div className='mx-8 my-8'>
            <img className='w-96 h-96 rounded-xl' src={img} alt="" />
        </div>
    );
};

export default GalleryCard;