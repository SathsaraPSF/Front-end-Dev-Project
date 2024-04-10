import React from 'react'
import FAQs from '../components/FAQs'

function FAQ() {
    return (
        <div className='flex min-h-[700px] w-full items-center justify-center min-[1200px]:mt-0  min-[768px]:mt-[-110px] mt-5'>
            <div className=' w-[80%] min-[1200px]:w-[60%] min-h-full flex flex-col gap-6'>

                <div className='w-full h-[10%] flex items-center justify-center'>
                    {/* Title */}
                    <span className='text-[27px] text-HeadingColor font-semibold min-[768px]:text-left text-center tracking-[0.4px] font-popins'>Frequently asked questions</span>
                </div>
                <div className='flex-col w-full max-h-[90%] flex items-center justify-center ' >
                    <FAQs />
                    <FAQs />
                    <FAQs />
                </div>
            </div>
        </div>
    )
}

export default FAQ