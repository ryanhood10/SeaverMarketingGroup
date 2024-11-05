import React, { useState, useEffect, useRef } from "react";
// import Laptop from "./assets/pictures/MarkingImage2.png";
import { useNavigate } from 'react-router-dom';
// import EmailMarketing from './assets/pictures/EmailMarketing2.png';
// import AffiliateMarketing from "./assets/pictures/MarkingImage2.png";
import TotalMarketing from './assets/pictures/SeaverMarketingIMG1.webp'
import EmailMarketing from './assets/pictures/SeaverMarketingIMG2.webp'
import AffiliateMarketing from './assets/pictures/SeaverMarketingIMG4.webp'

function useVisible(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
}

const Solutions = () => {
    const navigate = useNavigate();

    const [contentRef, contentVisible] = useVisible();
    const [emailDivRef, emailDivVisible] = useVisible();
    const [emailImgRef, emailImgVisible] = useVisible();
    const [affiliateDivRef, affiliateDivVisible] = useVisible();
    const [affiliateImgRef, affiliateImgVisible] = useVisible();

    const handleViewSolutions = () => {
        navigate('/solutions');
    };

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <div ref={contentRef} className={`flex flex-col justify-center space-y-3 ${animationClasses(contentVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 mx-auto md:mx-0"> Our Solutions</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        At Seaver Marketing Group, we specialize in delivering targeted Affiliate Marketing Programs and dynamic Email Marketing Campaigns that drive results. Our approach is tailored to meet the unique needs of your business, helping you expand your reach and increase your revenue through strategic marketing efforts.
                    </p>
                </div>
                <img ref={contentRef} className={`hidden md:block w-[500px] my-auto mx-auto px-2 rounded-2xl ${animationClasses(contentVisible)}`} src={TotalMarketing} alt="Online Marketing" />

            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
               
                <img ref={emailImgRef}
                 className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(emailImgVisible)}`}
                 src={EmailMarketing} alt="Email Marketing" />
                <div ref={emailDivRef} className={`flex flex-col justify-center ${animationClasses(emailDivVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Email Marketing Campaigns</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        Maximize engagement and boost your sales with our expertly crafted Email Marketing Campaigns. We design and automate email sequences that keep your audience informed, engaged, and eager to connect with your brand. From newsletters to promotional emails, our tailored campaigns ensure that your message reaches the right people at the right time.
                    </p>
                    <button onClick={handleViewSolutions} 
                    className="bg-[#00796b] w-[180px] sm:w-[200px] rounded-md font-medium my-4 sm:my-6 mx-auto py-2 sm:py-3 text-white hover:bg-[#005f56] transition duration-300 ease-in-out"
                    >Contact Us</button>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 space-x-5 space-y-5">
                <img ref={affiliateImgRef} 
                 className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(emailImgVisible)}`}
                 src={AffiliateMarketing} alt="Affiliate Marketing" />
                <div ref={affiliateDivRef} className={`flex flex-col justify-center ${animationClasses(affiliateDivVisible)}`}>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Affiliate Marketing Programs</h1>
                    <p className="md:text-2xl sm:text-xl text-l py-2"> 
                        Scale your business with our Affiliate Marketing Programs. We help you build and manage a network of partners who promote your products and services to a wider audience. Our program is designed to drive traffic and conversions by leveraging the power of affiliate relationships, making your brand more visible and accessible to potential customers.
                    </p>
                    <button onClick={handleViewSolutions}
                    className="bg-[#00796b] w-[180px] sm:w-[200px] rounded-md font-medium my-4 sm:my-6 mx-auto py-2 sm:py-3 text-white hover:bg-[#005f56] transition duration-300 ease-in-out"
                    >Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Solutions;
