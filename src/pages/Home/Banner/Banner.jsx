import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    return (
        <div>
            <div className="carousel w-[800px] my-10 mx-auto">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={'https://i.ibb.co/qg0bkzJ/images-q-tbn-ANd9-Gc-Tnbevu-Ucr-Cb-DCMM-7-T4j-XLvw-QOQt-LERp-L4-g-usqp-CAU.jpg'} className="w-full rounded" />
                    <div className="absolute h-full text-white left-0 top-0 ps-8 lg:pt-16 lg:pe-48 lg:pb-8 " data-aos = 'fade-right'>
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary mt-20'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/PYX47wP/pexels-pixabay-35967.jpg'} className="w-full rounded" />
                    <div className="absolute h-full text-white left-0 top-0 ps-8 lg:pt-16 lg:pe-48 lg:pb-8">
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary mt-12'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/LPxq9tJ/pexels-mike-bird-97353.jpg'} className="w-full rounded" />
                    <div  className="absolute h-full text-white left-0 top-0 ps-8 lg:pt-16 lg:pe-48 lg:pb-8 ">
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary my-4'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/H72C2Vs/photo-1532330393533-443990a51d10-ixlib-rb-4-0.jpg'} className="w-full rounded" />
                    <div  className="absolute h-full text-white left-0 top-0 ps-8 lg:pt-16 lg:pe-48 lg:pb-8 ">
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary my-4'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;