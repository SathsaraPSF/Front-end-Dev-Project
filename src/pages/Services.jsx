import React from 'react'
import image1 from '../assets/image1.jpeg' // Importing image asset
import Button from '../components/Button' // Importing Button component

function Services() {
    return (
        <div className='flex w-full min-[768px]:h-[500px] items-center justify-center mt-[-200px] min-[1200px]:mt-0 min-[768px]:mt-10'>
            {/* Container for service content */}
            <div className='flex flex-col min-[768px]:flex-row min-[768px]:w-[80%] min-[768px]:h-[70%] h-[40%]'>

                {/* Left section with image */}
                <div className='flex items-center justify-center min-[768px]:w-[40%] h-full '>
                    <img src={image1} className='min-[768px]:w-[80%] w-[100%]' /> {/* Displaying image */}
                </div>

                {/* Right section with service details */}
                <div className='flex flex-col justify-center min-[768px]:items-start items-center p-4 min-[768px]:p-0 min-[768px]:ml-9 min-[768px]:w-[60%] h-full gap-6'>
                    <span className='text-[27px] text-HeadingColor font-semibold min-[768px]:text-left text-center tracking-[0.4px] font-popins'>Web & Mobile App Development</span> {/* Title */}
                    <span className='text-[16px] min-[768px]:text-left text-center leading-[19.36px] font-normal'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</span> {/* Description */}
                    <Button topic="LEARN MORE" /> {/* Rendering Button component with props */}
                </div>

            </div>
        </div>
    )
}

export default Services
