import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 bg-neutral text-neutral-content rounded">
                <div>
                   <img className='h-24 w-20' src={'https://i.ibb.co/C0wnfmh/images-q-tbn-ANd9-Gc-Tn-Bsjyi-Y02-QEzd-HK-j-Qw2zw-O8-CVWYi-Rkcjy-Q-usqp-CAU.jpg'} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;