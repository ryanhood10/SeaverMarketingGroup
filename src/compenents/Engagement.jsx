import React, { useState, useEffect, useRef } from "react";
import Laptop from "./assets/pictures/SeaverMarketingIMG3.webp";
import { useNavigate } from 'react-router-dom';

const Engagement = () => {
    const navigate = useNavigate();

    const [contentIsVisible, setContentIsVisible] = useState(false);
    const contentRef = useRef(null);

    const [imgIsVisible, setImgIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === contentRef.current && entry.isIntersecting) {
                    setContentIsVisible(true);
                } else if (entry.target === imgRef.current && entry.isIntersecting) {
                    setImgIsVisible(true);
                }
            });
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    const handleViewSolutions = () => {
        navigate('/solutions');
    };

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img 
                    ref={imgRef}
                    className={`w-[500px] mx-auto my-4 rounded-xl ${animationClasses(imgIsVisible)}`} 
                    src={Laptop} 
                    alt="/" 
                />
                <div 
                    ref={contentRef}
                    className={`flex flex-col justify-center ${animationClasses(contentIsVisible)}`}
                >
                    <p className="text-green-800 font-bold"> SEAVER MARKETING GROUP </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                    <p className="md:text-xl sm:text-lg text-base py-2">
                        At Seaver Marketing Group, we specialize in two main solutions to drive your business growth: 
                        Affiliate Marketing Programs and Email Marketing Campaigns. 
                        Our Affiliate Marketing Programs help you build a network of partners that promote your brand, 
                        driving traffic and conversions. Our Email Marketing Campaigns are designed to engage your audience 
                        through targeted, automated emails that boost sales and enhance brand loyalty.
                    </p>
                    <button 
                        onClick={handleViewSolutions} 
                        className="bg-[#00796b] w-[180px] sm:w-[200px] rounded-md font-medium my-4 sm:my-6 mx-auto py-2 sm:py-3 text-white hover:bg-[#005f56] transition duration-300 ease-in-out"
                        >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Engagement;
