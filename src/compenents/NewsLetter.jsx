import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { validateEmail } from '../utils/validators';
import { Link } from "react-router-dom";

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

const NewsLetter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedErrors = { ...errors, [name]: value.trim() === '' ? 'Input is required.' : null };
        setErrors(updatedErrors);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = Object.keys(formData).reduce((acc, key) => {
            if (formData[key].trim() === '') {
                acc[key] = 'Input field is required.';
            } else if (key === 'email' && !validateEmail(formData[key])) {
                acc[key] = 'Invalid email address.';
            }
            return acc;
        }, {});
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const emailData = {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                };
                const response = await axios.post('https://ryans-portfolio.herokuapp.com/contact', emailData);
                alert(response.data.message);
            } catch (error) {
                console.error(error);
                alert('Failed to send email.');
            }
        }
    };

    const [newsletterRef, newsletterVisible] = useVisible();

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div ref={newsletterRef} className={`w-full py-8 md:py-16 text-white px-4 ${animationClasses(newsletterVisible)}`}>
            <div className="max-w-[1240px] mx-auto grid"> 
                <div className="">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-1 md:py-2"> Want to earn more revenue and reach more clients?  </h1>
                    <p>Send us a message!</p>
                </div>
                <div className="my-2 md:my-4">
                    <div className="flex flex-col items-center">
                        <form className="w-full" onSubmit={handleSubmit}>
                            <h3>Contact</h3>
                            {['name', 'email', 'message'].map((field) => (
                                <div key={field} className="my-2">
                                    <p className="text-sm md:text-base">{field[0].toUpperCase() + field.slice(1)}:</p>
                                    {field !== 'message' ? (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            placeholder={field[0].toUpperCase() + field.slice(1)}
                                            className='p-2 md:p-3 flex w-full rounded-md text-black'
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    ) : (
                                        <textarea
                                            placeholder="Message"
                                            className='p-2 md:p-3 min-h-[100px] md:min-h-[200px] flex w-full rounded-md text-black'
                                            name="message"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                        ></textarea>
                                    )}
                                    {errors[field] && <span className="error">{errors[field]}</span>}
                                </div>
                            ))}
                            <button type="submit" className="bg-[#00df9a] w-[200px] rounded-md font-medium my-3 md:my-6 mx-auto py-2 md:py-3 text-black">Send Email</button>
                        </form>
                    </div>
                    <p className="text-sm md:text-base">
                        Learn more about our established techniques on our{" "}
                        <Link to="/solutions" className="text-[#00df9a]">
                            Solutions
                        </Link>{" "}
                        page.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
