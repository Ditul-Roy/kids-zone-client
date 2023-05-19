import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={'https://i.ibb.co/27Q34gj/Stock-Snap-9-CNXOCMUPN.jpg'} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About our website</h1>
                    <p className="py-6">in this site we will provide you to some categories of car toy. In this site we expected you to buy some toy for your child.  </p>
                    <p></p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;