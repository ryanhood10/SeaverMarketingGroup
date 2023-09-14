import React, { useState, useEffect, useRef } from 'react';
import Market1 from './assets/pictures/MarketingImage1.png';
import CustomerTestimonials from './assets/pictures/CustomerTestimonials.png';
import react1 from './assets/pictures/ryanh5800_React_icon_programming_68468fde-6f40-4320-8555-184738340d8c.png';
import { useNavigate } from 'react-router-dom';

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

const HeadlineCards = () => {
    const navigate = useNavigate();

    const handleViewTestimonials = () => {
        navigate('/CaseStudies');
    };

    const handleViewSolutions = () => {
        navigate('/solutions');
    };

    const [card1Ref, card1Visible] = useVisible();
    const [card2Ref, card2Visible] = useVisible();
    const [card3Ref, card3Visible] = useVisible();

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div className='mx-w-[1640px] mx-auto p-4 py-12 px-4 grid md:grid-cols-3 gap-6'>
            {/* Card 1 */}
            <div ref={card1Ref} className={`rounded-xl relative hover:scale-105 duration-300 ${animationClasses(card1Visible)}`}>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>See </p>
                    <p className='px-2'>Case Studies</p>
                    <button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black" onClick={handleViewTestimonials}>View Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={CustomerTestimonials} alt='Customer Testimonials' />
            </div>

            {/* Card 2 */}
            <div ref={card2Ref} className={`rounded-xl relative hover:scale-105 duration-300 ${animationClasses(card2Visible)}`}>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Marketing Solutions</p>
                    <p className='px-2'>Email Marketing Campaigns</p>
                    <p className='px-2'>Search Engine Optimization</p>
                    <button onClick={handleViewSolutions} className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black">View Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Market1} alt='Marketing Solutions' />
            </div>

            {/* Card 3 */}
            <div ref={card3Ref} className={`rounded-xl relative hover:scale-105 duration-300 ${animationClasses(card3Visible)}`}>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Premium Websites</p>
                    <p className='px-2'>Customized Solutions</p>
                    <button onClick={handleViewSolutions} className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black">View Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={react1} alt='Premium Websites' />
            </div>
        </div>
    );
}

export default HeadlineCards;
