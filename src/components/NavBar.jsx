import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function NavBar() {
    // State for mobile view and menu toggle
    const [mobile, setMobile] = useState(window.innerWidth < 768);
    const [menuOpend, setMenuOpend] = useState(false);


    // Effect for handling window resize
    useEffect(() => {

        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (

        <div className='flex items-center justify-center h-[77px] w-full bg-PrimaryColor'>

            <div className='relative flex min-[320px]:w-[100%]  min-[375px]:w-[100%] sm:w-[80%] justify-between items-center '>
                {/* Logo image */}
                <img src={Logo} alt="Logo" />
                {/* Mobile menu toggle */}
                {menuOpend === false && mobile === true ? (
                    <div className='absolute  top-[60%] translate-y-[-50%] right-5'>
                        <FontAwesomeIcon icon={faBars} className='text-white text-[2rem]' onClick={() => setMenuOpend(true)} />
                    </div>
                ) : (

                    <div className='flex min-[320px]:flex-col min-[375px]:flex-col sm:flex-row min-[320px]:absolute min-[375px]:absolute sm:static min-[320px]:pl-10 min-[375px]:pl-10 sm:pl-0  sm:items-center gap-7 min-[375px]:text-black sm:text-white md:text-[10pt] lg:text-[14pt] min-[375px]:w-full min-[375px]:h-screen min-[320px]:w-full min-[320px]:h-screen sm:h-auto sm:w-auto
                              min-[375px]:bg-white min-[320px]:bg-white sm:bg-transparent top-[-25px] min-[375px]:pt-20 min-[320px]:pt-20 sm:pt-0 z-10 '>

                        {/* Close icon */}
                        <FontAwesomeIcon icon={faXmark} className='absolute top-5 right-5 text-black text-[2rem] sm:hidden' onClick={() => setMenuOpend(false)} />

                        {/* Navigation links */}
                        <a href='#SERVICES' onClick={() => setMenuOpend(false)} className='text-[13px] font-medium font-inter'>SERVICES</a>
                        <a href='#ABOUTUS' onClick={() => setMenuOpend(false)} className='text-[13px] font-medium font-inter'>ABOUT US</a>
                        <a href='#CONTACTUS' onClick={() => setMenuOpend(false)} className='text-[13px] font-medium font-inter'>CONTACT US</a>
                        <a href='#CAREERS' onClick={() => setMenuOpend(false)} className='text-[13px] font-medium font-inter'>CAREERS</a>
                    </div>
                )}

            </div>
        </div>
    )
}