import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function FAQs() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className=' flex flex-col w-full min-h-[100px]  '>
            <div className=' flex justify-between items-center w-full h-[10%]  p-8 bg-[#FAF8FF] mt-3'>
                {expanded ? <span className='text-[#6B3CC9] font-semibold min-[768px]:text-[22px] text-[20px]'>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span> :
                    <span className='text-black font-semibold  min-[768px]:text-[22px] text-[20px]'>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</span>}
                <FontAwesomeIcon icon={expanded ? faMinus : faPlus} onClick={toggleExpansion} className='pl-3' />
            </div>
            {/* Content that is shown/hidden based on the toggle */}
            {expanded && (
                <div className=' flex  w-full h-[90%]  p-5 bg-[#FAF8FF] min-[768px]:mb-0 '>
                    <span className='text-[#6F6C90]'>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.
                        Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</span>
                </div>
            )}
        </div>
    )
}

export default FAQs