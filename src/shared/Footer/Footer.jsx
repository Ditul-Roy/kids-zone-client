import React from 'react';
import { FaBeer, FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' w-full lg:px-10 lg:pt-10 bg-base-200 bg-neutral text-neutral-content rounded'>
            <footer className="footer ">
                <div className='ps-4 pt-4'>
                    <img className='lg:h-24 lg:w-20' src={'https://i.ibb.co/C0wnfmh/images-q-tbn-ANd9-Gc-Tn-Bsjyi-Y02-QEzd-HK-j-Qw2zw-O8-CVWYi-Rkcjy-Q-usqp-CAU.jpg'} alt="" />
                    <p className='text-gray-300'><span className='text-xl'>kidsZone.ltd</span><br />Our company relesed on 2023. So we are provide toy for your child</p>
                </div>
                <div className='ps-4'>
                    <span className="footer-title">Our products</span>
                    <a className="text-gray-300">Car toy</a>
                    <a className="text-gray-300">Sports toy</a>
                    <a className="text-gray-300">Scince and Mathmetical toy</a>
                    <a className="text-gray-300">Construction toy</a>
                </div>
                <div className='ps-4'>
                    <span className="footer-title">Company</span>
                    <a className="text-gray-300">About us</a>
                    <a className="text-gray-300">Contact</a>
                    <a className="text-gray-300">Jobs</a>
                </div>
                <div className='ps-4'>
                    <span className="footer-title">Legal</span>
                    <a className="text-gray-300 text-gray-300">Terms of use</a>
                    <a className="text-gray-300">Privacy policy</a>
                    <a className="text-gray-300">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center footer-title mx-auto'>
                <h1 className='underline my-4'>visit with us</h1>
                <div className='flex lg:ms-96'>
                    <FaFacebook className='ms-10 me-4 text-3xl'></FaFacebook>
                    <FaInstagram className=' me-4 text-3xl'></FaInstagram>
                    <FaTwitter className=' me-4 text-3xl'></FaTwitter>
                    <FaWhatsapp className=' me-4 text-3xl'></FaWhatsapp>
                </div>
            </div>
            <p className='text-center pb-2 pt-4 text-gray-400 flex lg:ms-80'>Copyright<FaCopyright></FaCopyright> 2023 kidsZone.ltd, All right reserved</p>
        </div>
    );
};

export default Footer;