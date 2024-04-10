import React from 'react';
import hero from '../assets/hero.jpeg'; // Importing the hero image
import Button from '../components/Button'; // Importing Button component

function Hero() {
    return (
        <div className='relative flex flex-col w-full h-[700px]'>
            {/* First section: Hidden on smaller screens */}
            <div className='min-[1200px]:hidden w-full min-[375px]:h-[40%] min-[768px]:h-[70%] '>
                <img src={hero} className='w-full h-full' alt='Hero' /> {/* Displaying hero image */}
            </div>

            {/* Second section: Hidden on smaller screens */}
            <div className='min-[1200px]:hidden w-full min-[768px]:h-[70%] bg-gradient min-[768px]:p-5'>
                <span className='flex items-center leading-snug text-[25pt] min-[768px]:text-[34pt] font-inter text-white font-semibold p-5 '>
                    We crush your competitors, goals, and sales records - without the B.S.
                </span>
                {/* Rendering Button component with props */}
                <Button topic="Get free consultation" btnStyle={{ marginLeft: "20px", marginBottom: "10px" }} />
            </div>

            {/* Third section: Displayed only on smaller screens */}
            <img src={hero} className='min-[0px]:hidden min-[1200px]:flex w-full h-[700px]' alt='Hero' />

            {/* Fourth section: Displayed only on larger screens */}
            <div className='min-[0px]:hidden min-[1200px]:flex flex-col absolute min-[1200px]:w-[60%] min-[1440px]:w-[50%] items-start bg-gradient bottom-10 left-20 p-4' >
                <span className='flex leading-snug text-[34pt] font-inter text-white font-semibold p-5  '>
                    We crush your competitors, goals, and sales records - without the B.S.
                </span>
                {/* Rendering Button component with props */}
                <Button topic="Get free consultation" />
            </div>
        </div>
    );
}

export default Hero;
