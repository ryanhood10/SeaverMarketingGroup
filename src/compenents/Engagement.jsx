import React from "react";
import Laptop from "./assets/pictures/MarkingImage2.png"

const Engagement = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4 rounded-xl" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center ">
                    <p className="text-[#00df9a] font-bold"> SEAVER MARKETING SOLUTIONS </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                    <p> 
                    Welcome to a world of comprehensive solutions designed to lead you to successful business journey. Together, we will craft meaningful connections with targeted email campaigns that resonate. Elevate your online presence and visibility with powerful Search Engine Optimization techniques. As well as, our specialization in web solutions focuses on building websites that capture your brand essence. Choose us to embark on a growth-oriented journey that starts with precise email campaigns, impactful SEO, and expertly crafted websites.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Get Started</button>

                </div>

            </div>
        
        </div>
    )
}

export default Engagement