import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full my-10">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={'https://i.ibb.co/qg0bkzJ/images-q-tbn-ANd9-Gc-Tnbevu-Ucr-Cb-DCMM-7-T4j-XLvw-QOQt-LERp-L4-g-usqp-CAU.jpg'} className="w-full rounded" />
                    <div className="absolute h-full text-white left-0 top-0 ps-4 pt-16 pe-32 pb-8 bg-gradient-to-r from-[#191919] to-[rgba(255, 99, 71, 0.4)] ">
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary my-4'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/R7r1p4f/c1551-Banner-Nincoracers-22.jpg'} className="w-full rounded" />
                    <div className="absolute h-full text-white left-0 top-0 ps-4 pt-16 pe-32 pb-8 bg-gradient-to-r from-[#191919] to-[rgba(255, 99, 71, 0.4)] ">
                        <h1 className='text-6xl text-bold my-4'>Your first choice in our marketplace</h1>
                        <p className='text-xl text-green-400'>we are provide toy for your children. We have many toy in our collection. like police cars toy, genaral type cars toy, electric bike toy, bus, truck, tractor etc. So your first choice in our marketplace.</p>
                        <button className='btn btn-primary my-4'>get started</button>
                    </div>
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/kBK9ntk/Silverlit-com-home-banner-myfirstactivitytruck-1490-510-q1sk9x6fxktlesc9b19mn39ktv9wgbye9vv84jyzqk.jpg'} className="w-full rounded" />
                    <div className="absolute h-full text-white left-0 top-0 ps-4 pt-16 pe-32 pb-8 bg-gradient-to-r from-[#191919] to-[rgba(255, 99, 71, 0.4)] ">
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
                    <div className="absolute h-full text-white left-0 top-0 ps-4 pt-16 pe-32 pb-8 bg-gradient-to-r from-[#191919] to-[rgba(255, 99, 71, 0.4)] ">
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