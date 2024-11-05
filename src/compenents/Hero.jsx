import React from "react";

const Hero = () => {

    const handleCalendlyClick = (e) => {
        e.preventDefault();
        window.Calendly.initPopupWidget({url: 'https://calendly.com/seavermarketing/seaver-marketing-intro-call'});
    };

    return (
        <div className="bg-slate-200 text-gray-800 border-t-2">
            <div className="max-w-[800px] mt-[-60px] w-full h-screen mx-auto text-center flex flex-col justify-center px-4">
                <p className="text-[#00796b] text-sm sm:text-base font-bold p-2 leading-tight">AFFILIATE MARKETING & EMAIL CAMPAIGNS <br />DRIVE YOUR BUSINESS GROWTH</p> 
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold md:py-4 sm:py-3 py-2">Expand Your Reach.</h1>
                <div className="py-2">
                    <p className="text-xl sm:text-3xl md:text-5xl font-bold">Connect with Your Audience</p>
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold md:pl-4 sm:pl-2 leading-tight">
                        Grow with Affiliate Marketing and Boost Sales with Targeted Emails.
                    </p>
                </div>
                <p className="text-sm sm:text-lg md:text-2xl font-medium text-gray-600 md:pl-4 sm:pl-2 py-2">
                    Leverage powerful Affiliate Programs and Email Campaigns to increase brand awareness, drive traffic, and maximize your ROI.
                </p>
                <button 
                    onClick={handleCalendlyClick} 
                    className="bg-[#00796b] w-[180px] sm:w-[200px] rounded-md font-medium my-4 sm:my-6 mx-auto py-2 sm:py-3 text-white hover:bg-[#005f56] transition duration-300 ease-in-out"
                >
                    Book a Meeting Today!
                </button>
            </div>
        </div>
    );
}

export default Hero;
