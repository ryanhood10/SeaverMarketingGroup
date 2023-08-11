import React from 'react'
import robot1 from './assets/pictures/MarketingHeader2.png';



const OtherHero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >The <span className='text-[#00df9a]'> Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold' >Solutions <span className='text-[#00df9a]'> Delivered</span></h1>
                </div>
                    <img className='w-full max-h-[500px] object-cover' src={robot1}  alt="robot1" />
            </div>
        </div>
    )
}

export default OtherHero