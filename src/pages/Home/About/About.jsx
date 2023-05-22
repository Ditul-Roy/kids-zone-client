import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    return (
        <div className="lg:hero my-10 bg-base-200" data-aos = 'fade-left'>
            <div className="hero-content flex-col lg:flex-row">
                <img src={'https://i.ibb.co/27Q34gj/Stock-Snap-9-CNXOCMUPN.jpg'} className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About our website</h1>
                    <p className="pt-6 pb-2 text-green-700">in this site we will provide you to some categories of car toy. In this site we expected you to buy some toy for your child.  </p>
                    <p>kidszone.ltd, Bangladesh</p>
                    <button className="btn btn-primary my-6">Get Started with us</button>
                </div>
            </div>
        </div>
    );
};

export default About;