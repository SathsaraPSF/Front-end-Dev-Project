import React from 'react'
import image2 from '../assets/image2.jpeg' // Importing image asset
import Button from '../components/Button' // Importing Button component

function ServicesTwo() {
    return (
        <div className='flex w-full min-[768px]:h-[500px] items-center justify-center min-[768px]:mt-[-150px] min-[1200px]:mt-0 '>

            {/* First section: Displayed on smaller screens */}
            <div className=' flex-col min-[768px]:hidden flex min-[768px]:flex-row min-[768px]:w-[80%] min-[768px]:h-[70%] h-[40%]'>

                {/* Left section with image */}
                <div className='flex items-center justify-center min-[768px]:w-[40%] h-full '>
                    <img src={image2} className='min-[768px]:w-[80%] w-[100%]' /> {/* Displaying image */}
                </div>

                {/* Right section with service details */}
                <div className='flex flex-col justify-center min-[768px]:items-start items-center p-4 min-[768px]:p-0 min-[768px]:ml-9 min-[768px]:w-[60%] h-full gap-6'>
                    <span className='text-[27px] text-HeadingColor font-semibold min-[768px]:text-left text-center tracking-[0.4px] font-popins'>Digital Strategy Consulting</span> {/* Title */}
                    <span className='text-[16px] min-[768px]:text-left text-center leading-[19.36px] font-normal'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</span> {/* Description */}
                    <Button topic="LEARN MORE" /> {/* Rendering Button component with props */}
                </div>

            </div>

            {/* Second section: Displayed on larger screens */}
            <div className=' flex-col min-[768px]:flex hidden min-[768px]:flex-row min-[768px]:w-[80%] min-[768px]:h-[70%] h-[40%]'>

                {/* Left section with service details */}
                <div className='flex flex-col justify-center min-[768px]:items-start items-center p-4 min-[768px]:p-0 min-[768px]:ml-9 min-[768px]:w-[60%] h-full gap-6'>
                    <span className='text-[27px] text-HeadingColor font-semibold min-[768px]:text-left text-center tracking-[0.4px] font-popins'>Digital Strategy Consulting</span> {/* Title */}
                    <span className='text-[16px] min-[768px]:text-left text-center leading-[19.36px] font-normal'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</span> {/* Description */}
                    <Button topic="LEARN MORE" /> {/* Rendering Button component with props */}
                </div>

                {/* Right section with image */}
                <div className='flex items-center justify-center min-[768px]:w-[40%] h-full '>
                    <img src={image2} className='min-[768px]:w-[80%] w-[100%]' /> {/* Displaying image */}
                </div>

            </div>
        </div>
    )
}

export default ServicesTwo
