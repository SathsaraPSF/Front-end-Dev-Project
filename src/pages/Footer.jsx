import React from 'react'
import logo from '../assets/Logo.svg'

function Footer() {
    return (
        <div className='flex flex-col w-full min-[1200px]:h-[300px] min-[768px]:h-[550px] 700px bg-PrimaryColor'>
            {/* Container for the footer content */}
            <div className='flex flex-col min-[1200px]:flex-row w-full max-h-[80%] '>

                {/* Section for the logo and company mission statement */}
                <div className='flex flex-col min-[1200px]:w-[60%]  h-full py-16 min-[768px]:px-20 gap-3 min-[768px]:ml-0 ml-8'>
                    <img src={logo} className='w-[50%]' />
                    <span className='min-[1200px]:text-[1rem] min-[768px]:text-[1.2rem] text-white'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</span>
                </div>

                {/* Section for technologies and services */}
                <div className='flex min-[768px]:flex-row flex-col  min-[768px]:w-[60%] w-full h-full py-16  gap-10  mt-[-70px] min-[1200px]:mt-0 '>
                    {/* List of technologies */}
                    <div className='flex flex-col min-[768px]:w-[50%] items-start h-full gap-1 min-[768px]:px-24 min-[768px]:ml-0 ml-8'>
                        <span className='text-[1.2rem] text-white font-semibold'>Our Technologies</span>
                        <span className='text-white'>ReactJS</span>
                        <span className='text-white'>Gatsby</span>
                        <span className='text-white'>NextJS</span>
                        <span className='text-white'>NodeJS</span>
                    </div>
                    {/* List of services */}
                    <div className='flex flex-col min-[768px]:w-[40%] items-start h-full gap-1 min-[768px]:ml-0 ml-8 '>
                        <span className='text-[1.2rem] text-white font-semibold'>Our Services</span>
                        <span className='text-white'>Social media Marketing</span>
                        <span className='text-white'>Web & Mobile App Development</span>
                        <span className='text-white'>Data & Analytics</span>
                    </div>
                </div>

            </div>
            {/* Footer bottom section for legal links */}
            <div className='flex flex-col justify-center items-center w-full h-[20%]'>
                <hr className='min-[1200px]:w-[50%] w-[80%]'></hr>
                <div className='flex gap-3 items-center mt-2 mb-1'>
                    <span className='text-[1rem] text-white'>Privacy Policy</span>
                    <hr className='w-[20px]  rotate-90'></hr>
                    <span className='text-[1rem] text-white'>Terms & Conditions</span>
                </div>
            </div>
        </div>
    )
}

export default Footer