import React, { useState, useEffect, useRef } from "react";
import Laptop from "./assets/pictures/MarkingImage2.png";
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
                    <p className="text-[#00df9a] font-bold"> SEAVER MARKETING GROUP </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"> Our Solutions</h1>
                    <p> 
                        Welcome to a world of comprehensive solutions designed to lead you to a successful business journey. Together, we will craft meaningful connections with targeted email campaigns that resonate. Elevate your online presence and visibility with powerful Search Engine Optimization techniques. As well as, our specialization in web solutions focuses on building websites that capture your brand essence. Choose us to embark on a growth-oriented journey that starts with precise email campaigns, impactful SEO, and expertly crafted websites.
                    </p>
                    <button onClick={handleViewSolutions} className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Engagement;
