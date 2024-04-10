import React from 'react'

function Button(props) {
    const { btnStyle } = props;
    return (
        <button className=' bg-SecondaryColor text-white font-semibold uppercase min-[320px]:h-12 min-[375px]:h-12 min-[320px]:w-[50%] min-[375px]:w-[40%] min-[768px]:p-3  min-[1200px]:p-0 text-[0.7rem] min-[768px]:text-[1rem]' style={btnStyle}>
            {props.topic}
        </button>
    )
}

export default Button