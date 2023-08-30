import React, { useState, useEffect, useRef } from 'react';

const BookAMeeting = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div ref={ref} className={animationClasses(isVisible)}>
            <h1 className="px-4 py-16 text-white text-center text-xl md:text-2xl lg:text-4xl font-bold md:py-2"> Schedule a Call with Us! 📞  </h1>
            <p className='text-white text-center '>via Calandly</p>

        </div>
    );
}

export default BookAMeeting;
