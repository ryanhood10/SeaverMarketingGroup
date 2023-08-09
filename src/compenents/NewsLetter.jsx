import React from "react";

const NewsLetter = () => {
    return(
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold-py-2"> Want to earn more email revenue? </h1>
                    <p>Send us a message!</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className='p-3 flex w-full rounded-md' type="email" placeholder= 'Enter Email' />
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Send Email</button>
                    </div>
                    <p>Learn more about our established techniques our <span className="text-[#00df9a]">Services</span> page.</p>

                </div>

             </div>
        </div>
    )
}

export default NewsLetter