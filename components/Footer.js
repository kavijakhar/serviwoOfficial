import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
    const footerStyle = {
        background: 'linear-gradient(purple, var(--color))',
    };
    return (
        <>
            <footer className="text-white " style={footerStyle}>
                <div className="container px-5 py-6 mx-auto flex flex-col items-center sm:flex-row justify-center sm:items-center">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                       <img src="/favicons.ico" alt="" className='w-10'  />
                        <span className="ml-3 text-2xl text-gray-200">Serviwo</span>
                    </a>
                    <p className="text-lg text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                     © 2023 Serviwo - 
                        <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">
                        All rights reserved
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
    
}

export default Footer;
